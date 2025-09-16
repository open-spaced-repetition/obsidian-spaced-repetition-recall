import { CachedMetadata, FrontMatterCache, Notice, TFile } from "obsidian";
import { TopicPath } from "src/TopicPath";
import {
    DEFAULT_DECKNAME,
    LEGACY_SCHEDULING_EXTRACTOR,
    MULTI_SCHEDULING_EXTRACTOR,
    SCHEDULING_INFO_REGEX,
    SR_HTML_COMMENT_BEGIN,
    SR_HTML_COMMENT_END,
    YAML_FRONT_MATTER_REGEX,
    YAML_TAGS_REGEX,
} from "src/constants";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";
import { SRSettings } from "src/settings";
import { escapeRegexString } from "src/util/utils";
import { DataStore } from "./data";
import { Tags } from "src/tags";

import { Stats } from "src/stats";
import { DateUtils, isIgnoredPath } from "src/util/utils_recall";
import { RPITEMTYPE } from "./repetitionItem";
import deepcopy from "deepcopy";
import { NoteCardScheduleParser } from "src/CardSchedule";
import { DataLocation, getStorePath } from "./dataLocation";
import { globalDateProvider } from "src/util/DateProvider";
import { Iadapter } from "./adapter";

export class LocationSwitch {
    public plugin: SRPlugin;
    private settings: SRSettings;
    public beforenoteStats: Stats;
    public afternoteStats: Stats;
    public beforecardStats: Stats;
    public aftercardStats: Stats;
    private revTag: string;

    constructor(plugin: SRPlugin, settings: SRSettings) {
        this.plugin = plugin;
        this.settings = settings;
        this.revTag = this.converteTag();
    }

    /**
     * getStorePath.
     *
     * @returns {string}
     */
    getStorePath(): string {
        return getStorePath(this.plugin.manifest.dir, this.settings);
    }

    /**
     * moveStoreLocation.
     *
     * @returns {boolean}
     */
    async moveStoreLocation(): Promise<boolean> {
        const adapter = Iadapter.instance.adapter;
        const store = DataStore.getInstance();

        const newPath = this.getStorePath();
        if (newPath === store.dataPath) {
            return false;
        }
        let exist = false;
        store.verify(newPath).then(async (v) => {
            exist = v;
            if (exist) {
                const suffix = "-" + new Date().toISOString().replace(/[:.]/g, "");
                await adapter.rename(newPath, newPath + suffix).then(() => {
                    console.debug("orginal file: " + newPath + " renamed to: " + newPath + suffix);
                });
            }
        });

        try {
            await store.save(newPath);
            adapter.remove(store.dataPath).then(
                () => {
                    store.setdataPath(newPath);
                    new Notice(t("DATA_FILE_MOVED_SUCCESS"));
                    return true;
                },
                (e) => {
                    store.setdataPath(newPath);
                    new Notice(t("DATA_FILE_DELETE_OLD_FAILED"));
                    console.log(e);
                    return true;
                },
            );
        } catch (e) {
            new Notice(t("DATA_FILE_MOVE_FAILED"));
            console.log(e);
            return false;
        }
    }

    converteTag(tag?: string): string {
        if (tag == undefined) {
            tag = DEFAULT_DECKNAME;
        }
        return [this.settings.tagsToReview[0], tag].join("/").substring(1);
    }

    /**
     * converteNoteSchedToTrackfile
     *
     */
    async converteNoteSchedToTrackfile(dryrun: boolean = false, newLocation?: DataLocation) {
        const plugin = this.plugin;
        // const store = plugin.store;
        const store = DataStore.getInstance();
        const settings = plugin.data.settings;
        this.initStats();
        this.setBeforeStats();
        if (dryrun) {
            if (newLocation) {
                settings.dataLocation = newLocation;
            }
        }
        settings.tagsToReview.push(this.revTag);

        await store.save();

        // await plugin.sync_Algo();

        let notes: TFile[] = Iadapter.instance.vault.getMarkdownFiles();
        notes = notes.filter(
            (noteFile) =>
                !isIgnoredPath(settings.noteFoldersToIgnore, noteFile.path) &&
                plugin.createSrTFile(noteFile).getAllTagsFromCache().length > 0,
        );
        for (const noteFile of notes) {
            let deckname = Tags.getNoteDeckName(noteFile, this.settings);
            const srfile = plugin.createSrTFile(noteFile);
            let topicPath: TopicPath = TopicPath.getFolderPathFromFilename(srfile, settings);
            let fileText: string = await noteFile.vault.read(noteFile);
            let fileChanged = false;

            // delet removed tag
            if (topicPath.hasPath) {
                // fileText = await noteFile.vault.read(noteFile);
                if (
                    topicPath.path.length === 2 &&
                    settings.tagsToReview.includes(topicPath.path[1])
                ) {
                    deckname = topicPath.path[1];
                    topicPath = new TopicPath([deckname]);
                    const revtag = this.converteTag(deckname);
                    fileText = delDefaultTag(fileText, revtag);
                    fileChanged = true;
                }
            }

            // delete review/default tag
            if (
                (topicPath.hasPath && topicPath.formatAsTag().includes(this.revTag)) ||
                srfile.getAllTagsFromCache().includes("#" + this.revTag)
            ) {
                deckname = DEFAULT_DECKNAME;
                topicPath = new TopicPath([deckname]);
                fileText = delDefaultTag(fileText, this.revTag);
                fileChanged = true;
            }

            if (deckname !== null) {
                const fileCachedData = Iadapter.instance.metadataCache.getFileCache(noteFile) || {};
                fileText = await _convertFrontMatter(noteFile, fileCachedData, deckname, fileText);
                if (fileText == null) {
                    console.warn("_convertFrontMatter: fileText null: ");
                    // throw new Error("_convertFrontMatter fileText null: " + fileText);
                }
                if (SCHEDULING_INFO_REGEX.test(fileText)) {
                    console.warn(
                        "still have SCHEDULING_INFO_REGEX in fileText:\n",
                        noteFile.path,
                        fileText,
                    );
                    // throw new Error("_convertFrontMatter failed: \n" + fileText);
                }
                fileChanged = true;
            }

            if (topicPath.hasPath) {
                fileText = await _convertCardsSched(noteFile, fileText, topicPath.path[0]);
                if (fileText == null) {
                    console.warn("fileText null");
                    throw new Error(fileText);
                }
                if (
                    MULTI_SCHEDULING_EXTRACTOR.test(fileText) ||
                    LEGACY_SCHEDULING_EXTRACTOR.test(fileText)
                ) {
                    console.error("still have cardsched in fileText:\n", noteFile.path, fileText);
                    // throw new Error("_convertCardsSched failed: \n" + fileText);
                }
                fileChanged = true;
            }

            if (!dryrun && fileChanged) {
                if (fileText == null) {
                    console.error("fileText null");
                    throw new Error(fileText);
                }
                await noteFile.vault.modify(noteFile, fileText);
                // console.debug("_convert fileChanged end :\n", fileText);
            }
        }

        settings.tagsToReview.pop();

        const msg = "converteNoteSchedToTrackfile success!";
        if (dryrun) {
            await plugin.sync();
            this.setAfterStats();
            // await store.load();
            settings.dataLocation = DataLocation.SaveOnNoteFile;
            this.resultCheck(
                this.beforenoteStats,
                this.beforecardStats,
                this.afternoteStats,
                this.aftercardStats,
            );
        } else {
            await store.save();
            new Notice(msg);
        }
        console.log(msg);

        async function _convertCardsSched(note: TFile, fileText: string, deckName: string) {
            // console.debug("_convertCardsSched: ", note.basename);
            const trackedFile = store.getTrackedFile(note.path);
            // let fileText: string = await note.vault.read(note);
            // let fileChanged = false;
            trackedFile.syncNoteCardsIndex(fileText, settings, (cardText, cardinfo) => {
                let scheduling: RegExpMatchArray[] = [
                    ...cardText.matchAll(MULTI_SCHEDULING_EXTRACTOR),
                ];
                if (scheduling.length === 0)
                    scheduling = [...cardText.matchAll(LEGACY_SCHEDULING_EXTRACTOR)];
                if (scheduling.length > 0) {
                    store.updateCardItems(trackedFile, cardinfo, scheduling.length, deckName);
                    const schedInfoList = NoteCardScheduleParser.createInfoList_algo(scheduling);
                    scheduling.forEach((sched: RegExpMatchArray, index) => {
                        if (!schedInfoList[index].isDummyScheduleForNewCard) {
                            store.getItembyID(cardinfo.itemIds[index])?.updateSched(sched, true);
                        }
                    });

                    // console.debug(cardinfo.lineNo, scheduling);

                    const newCardText = updateCardSchedXml(
                        cardText,
                        settings.cardCommentOnSameLine,
                    );
                    fileText = cardTextReplace(fileText, cardText, newCardText);
                    // fileChanged = true;
                }
            });

            // if (fileChanged) {
            //     // await note.vault.modify(note, fileText);
            //     console.debug("_convertCardsSched end :\n", fileText);
            // }
            return fileText;
        }

        async function _convertFrontMatter(
            note: TFile,
            fileCachedData: CachedMetadata,
            deckname: string,
            fileText: string,
        ) {
            // console.debug("_convertFrontMatter");
            // const fileCachedData = Iadapter.instance.metadataCache.getFileCache(note) || {};
            const frontmatter: FrontMatterCache | Record<string, unknown> =
                fileCachedData.frontmatter || {};
            const sched = getReviewNoteHeaderData(frontmatter);
            if (sched != null) {
                // console.debug("converteNoteSchedToTrackfile find:", note.path);
                if (!store.getTrackedFile(note.path)?.isTrackedNote) {
                    store.trackFile(note.path, deckname, false);
                }
                const item = store.getItembyID(store.getTrackedFile(note.path).noteID);
                // const id = store.getTrackedFile(note.path).noteID
                // store.reviewId(id, opts[1]);
                item.updateSched(sched, true);
                fileText = updateNoteSchedFrontHeader(fileText);
                // console.debug("_convertFrontMatter end :\n", fileText);
            }
            return fileText;
        }
    }

    /**
     *converteTrackfileToNoteSched
     */
    async converteTrackfileToNoteSched(dryrun: boolean = false) {
        const plugin = this.plugin;
        const store = plugin.store;
        this.initStats();
        this.setBeforeStats();
        plugin.syncLock = true;

        await store.pruneData();

        // eslint-disable-next-line prefer-const
        let tracked_files = store.data.trackedFiles;
        const dueIds: number[] = [];
        await Promise.all(
            tracked_files
                .filter((tkfile) => tkfile != null)
                .filter((tkfile) => !isIgnoredPath(this.settings.noteFoldersToIgnore, tkfile.path))
                .map(async (tkfile) => {
                    const item = store.getItembyID(tkfile.noteID);
                    const note = Iadapter.instance.vault.getAbstractFileByPath(
                        tkfile.path,
                    ) as TFile;
                    if (!(note instanceof TFile)) {
                        return;
                    }
                    const deckPath: string[] = TopicPath.getFolderPathFromFilename(
                        plugin.createSrTFile(note),
                        this.settings,
                    ).path;
                    let fileText: string = await note.vault.read(note);
                    let fileChanged = false;
                    if (deckPath.length !== 0) {
                        tkfile.syncNoteCardsIndex(fileText, this.settings, (cardText, cardinfo) => {
                            if (cardinfo == null || cardinfo?.itemIds == null) {
                                return;
                            }
                            const ids = cardinfo.itemIds;
                            const scheduling: RegExpMatchArray[] = [];
                            ids.map((id: number) => store.getItembyID(id))
                                .filter((citem) => citem.isTracked)
                                .forEach((citem) => {
                                    // const citem = store.getItembyID(id);
                                    // if (citem.isTracked) {
                                    const sched = citem.getSchedDurAsStr();
                                    if (citem.hasDue && sched != null) {
                                        scheduling.push(sched);
                                        dueIds.push(citem.ID);
                                    }
                                    this.aftercardStats.updateStats(
                                        citem,
                                        globalDateProvider.endofToday.valueOf(),
                                    );
                                    // }
                                });
                            const newCardText = updateCardSchedXml(
                                cardText,
                                this.settings.cardCommentOnSameLine,
                                scheduling,
                            );
                            fileText = cardTextReplace(fileText, cardText, newCardText);
                            // const replacementRegex = new RegExp(escapeRegexString(cardText), "gm");
                            // fileText = fileText.replace(replacementRegex, () => newCardText);
                            fileChanged = true;
                        });
                    }
                    // console.debug("_convert CardsSched end :\n", fileText);
                    if (
                        item?.isTracked &&
                        (tkfile.isDefault || Tags.isTagedNoteDeckName(item.deckName, this.settings))
                    ) {
                        if (item?.hasDue) {
                            // let due: str, ease: number, interval: number;
                            const ret = item.getSchedDurAsStr();
                            if (ret != null) {
                                fileText = updateNoteSchedFrontHeader(fileText, ret);
                                fileChanged = true;
                                // console.debug("converteTrackfileToNoteSched: " + tkfile.path, fileText);
                            }
                            // console.debug(tkfile.path, this.afternoteStats.youngCount);
                        }
                        this.afternoteStats.updateStats(
                            item,
                            globalDateProvider.endofToday.valueOf(),
                        );
                        //update tag to note
                        if (item?.itemType === RPITEMTYPE.NOTE) {
                            const noteTag = Tags.getNoteDeckName(note, this.settings);
                            if (tkfile.isDefault) {
                                fileText = addDefaultTagtoNote(fileText, this.revTag);
                                fileChanged = true;
                            } else if (
                                noteTag == null &&
                                this.settings.tagsToReview.includes(item.deckName)
                            ) {
                                const tag = this.converteTag(item.deckName);
                                fileText = addDefaultTagtoNote(fileText, tag);
                                fileChanged = true;
                            }
                        }
                    }
                    if (!dryrun && fileChanged) {
                        if (fileText == null) {
                            console.error("fileText null");
                            throw new Error(fileText);
                        }
                        await note.vault.modify(note, fileText);
                    }
                }),
        );
        store.save();
        plugin.syncLock = false;
        const msg = "converteTrackfileToNoteSched success!";
        console.debug("dueids after: ", dueIds, store.data.trackedFiles, store.data.items);
        if (dryrun) {
            // const settings = plugin.data.settings;
            // const orgLocation = settings.dataLocation;
            // settings.dataLocation = DataLocation.SaveOnNoteFile;
            // await plugin.sync();
            // settings.dataLocation = orgLocation;
            this.resultCheck(
                this.beforenoteStats,
                this.beforecardStats,
                this.afternoteStats,
                this.aftercardStats,
            );
        } else {
            new Notice(msg);
        }
        console.log(msg);
    }

    /**
     * reset stats.
     */
    private initStats() {
        this.beforenoteStats = new Stats();
        this.beforecardStats = new Stats();
        this.afternoteStats = new Stats();
        this.aftercardStats = new Stats();
    }

    /**
     * before swithch loaction set this.beforeXXXXStats
     * X stands for note and/or card.
     */
    private setBeforeStats() {
        this.beforenoteStats = deepcopy(this.plugin.noteStats);
        this.beforecardStats = deepcopy(this.plugin.cardStats);
    }
    /**
     * after switch location set this.afterXXXXStats
     * X stands for note and/or card.
     */
    private setAfterStats() {
        this.afternoteStats = deepcopy(this.plugin.noteStats);
        this.aftercardStats = deepcopy(this.plugin.cardStats);
    }

    resultCheck(noteStats: Stats, cardStats: Stats, afternoteStats: Stats, aftercardStats: Stats) {
        if (
            this.compare(noteStats, afternoteStats, "note") ||
            this.compare(cardStats, aftercardStats, "card")
        ) {
            console.log(
                "before chang noteStats, cardStats:\n",
                noteStats,
                cardStats,
                "\nafter change:\n",
                afternoteStats,
                aftercardStats,
            );
            new Notice(t("DATA_LOST_WARNING"));
        }
    }
    compare(before: Stats, after: Stats, prefix: string) {
        let ntc = false;
        for (const keyS in before) {
            const key = keyS as keyof typeof before;
            if (!(before[key] instanceof Object) && before[key] !== after[key]) {
                console.warn("%s %s before: %d, after: %d", prefix, key, before[key], after[key]);
                ntc = true;
            }
        }
        return ntc;
    }

    createTable(Stats: Stats, afterStats: Stats): string {
        const title =
            "Location | new | onDue | yung | mature \n\
            ---|---|---|---|---\n";
        const before = `before|${Stats.newCount} |${Stats.onDueCount} |${Stats.youngCount} |${Stats.matureCount}\n`;
        const after = `after|${afterStats.newCount} |${afterStats.onDueCount} |${afterStats.youngCount} |${afterStats.matureCount}\n`;
        return title + before + after;
    }
}

export function cardTextReplace(fileText: string, cardText: string, newCardText: string) {
    const replacementRegex = new RegExp(escapeRegexString(cardText), "gm");
    if (fileText.indexOf(cardText) === fileText.lastIndexOf(cardText)) {
        return fileText.replace(replacementRegex, () => newCardText);
    } else {
        const blanLine = "(\n\\s*?\n)";
        let rpreg = new RegExp(blanLine + escapeRegexString(cardText), "gm");
        if (fileText.match(rpreg) !== null) {
            console.debug("got many: front blank");
            return fileText.replace(rpreg, `$1${newCardText}`);
        } else {
            rpreg = new RegExp(escapeRegexString(cardText) + blanLine, "gm");
            console.debug("got many: back blank");
            return fileText.replace(rpreg, `${newCardText}$1`);
        }
    }
}

/**
 *  get ReviewNote frontmatter Data from notefile.
 *
 * @param frontmatter
 * @returns number[] | [0, due, interval, ease];
 */
function getReviewNoteHeaderData(frontmatter: FrontMatterCache): number[] {
    // file has scheduling information
    if (
        Object.prototype.hasOwnProperty.call(frontmatter, "sr-due") &&
        Object.prototype.hasOwnProperty.call(frontmatter, "sr-interval") &&
        Object.prototype.hasOwnProperty.call(frontmatter, "sr-ease")
    ) {
        const dueUnix: number = window
            .moment(frontmatter["sr-due"], ["YYYY-MM-DD", "DD-MM-YYYY", "ddd MMM DD YYYY"])
            .valueOf();
        const interval: number = frontmatter["sr-interval"] as number;
        const ease: number = frontmatter["sr-ease"] as number;
        const sched = [null, dueUnix, interval, ease];
        return sched;
    } else {
        // console.log(
        //     "getReviewNoteHeaderData --> note: %s doesn't have sr frontmatter. ",
        //     frontmatter,
        // );
        return null;
    }
}

/**
 * updateNoteSchedFrontHeader, if sched == null, delete sched info in frontmatter.
 * @param note TFile
 * @param fileText: string
 * @param sched [, due, interval, ease] | null
 */
export function updateNoteSchedFrontHeader(fileText: string, sched?: RegExpMatchArray) {
    // update yaml schedule
    // const plugin = this.plugin;
    let schedString = "";
    if (sched != null) {
        const [, dueString, interval, ease] = sched;
        // const dueString: string = window.moment(due).format("YYYY-MM-DD");
        schedString = `sr-due: ${dueString}\nsr-interval: ${interval}\n` + `sr-ease: ${ease}\n`;
    } else {
        schedString = "";
    }

    // check if scheduling info exists
    if (SCHEDULING_INFO_REGEX.test(fileText)) {
        const schedulingInfo = SCHEDULING_INFO_REGEX.exec(fileText);
        if (schedulingInfo[1].length || schedulingInfo[5].length) {
            fileText = fileText.replace(
                SCHEDULING_INFO_REGEX,
                `---\n${schedulingInfo[1]}${schedString}` + `${schedulingInfo[5]}---\n`,
            );
        } else if (schedString.length > 0) {
            fileText = fileText.replace(SCHEDULING_INFO_REGEX, `---\n${schedString}---\n`);
        } else {
            fileText = fileText.replace(SCHEDULING_INFO_REGEX, "");
        }
    } else if (YAML_FRONT_MATTER_REGEX.test(fileText)) {
        // new note with existing YAML front matter
        const existingYaml = YAML_FRONT_MATTER_REGEX.exec(fileText);
        fileText = fileText.replace(
            YAML_FRONT_MATTER_REGEX,
            `---\n${existingYaml[1]}${schedString}---`,
        );
    } else {
        fileText = `---\n${schedString}---\n${fileText}`;
    }
    return fileText;
}

/**
 * updateCardSchedXml, if have scheduling, update card sched in note. else delete it.
 * @param cardText
 * @param scheduling
 * @param cardCount
 * @returns
 */
export function updateCardSchedXml(
    cardText: string,
    cardCommentOnSameLine: boolean = true,
    scheduling?: RegExpMatchArray[],
    cardCount?: number,
) {
    let sep: string = cardCommentOnSameLine ? " " : "\n";
    let newCardText: string = cardText.replace(/<!--SR:.+-->/gm, "").trimEnd();
    let schedString: string = "";
    if (newCardText.endsWith("```") && sep !== "\n") {
        sep = "\n";
    }
    if (scheduling != null && scheduling.every((sched) => sched == null)) {
        return newCardText;
    }
    if (scheduling != null && scheduling.length > 0) {
        schedString = sep + SR_HTML_COMMENT_BEGIN;

        if (cardCount == null) {
            cardCount = scheduling.length;
        } else {
            cardCount = Math.min(cardCount, scheduling.length);
            console.debug("cardCount:", cardCount);
        }
        for (let i = 0; i < cardCount; i++) {
            schedString += `!${scheduling[i][1]},${Number(scheduling[i][2]).toFixed(0)},${Number(
                scheduling[i][3],
            ).toFixed(0)}`;
        }
        schedString += SR_HTML_COMMENT_END;
    } else {
        schedString = "";
    }

    newCardText += schedString;
    // console.debug("newCardText: \n", newCardText);
    return newCardText;
}

function addDefaultTagtoNote(fileText: string, revTag: string) {
    // check if scheduling info exists
    if (YAML_TAGS_REGEX.test(fileText)) {
        const tags = YAML_TAGS_REGEX.exec(fileText);

        const originTags = tags[2];
        let newTags = "";
        if (!originTags.includes(revTag)) {
            if (originTags.includes("\n")) {
                newTags = [originTags, revTag].join("\n  - ");
            } else {
                newTags = [originTags, revTag].join(", ");
            }
            fileText = fileText.replace(
                YAML_TAGS_REGEX,
                `---\n${tags[1]}tags:${newTags}\n` + `${tags[3]}---`,
            );
        }
    } else if (YAML_FRONT_MATTER_REGEX.test(fileText)) {
        // new note with existing YAML front matter
        const existingYaml = YAML_FRONT_MATTER_REGEX.exec(fileText);
        fileText = fileText.replace(
            YAML_FRONT_MATTER_REGEX,
            `---\n${existingYaml[1]}tags: ${revTag}\n---`,
        );
    } else {
        fileText = `---\ntags: ${revTag}\n---\n${fileText}`;
    }
    return fileText;
}

export function delDefaultTag(fileText: string, revTag: string) {
    // check if scheduling info exists
    if (YAML_TAGS_REGEX.test(fileText)) {
        const tags = YAML_TAGS_REGEX.exec(fileText);

        const originTags = tags[2];
        let newTags = originTags;
        if (originTags.includes(revTag)) {
            if (originTags.includes(",")) {
                newTags = originTags.replace(revTag + ",", "");
                newTags = newTags.replace(RegExp(", ?" + revTag), "");
            }
            if (originTags.includes("\n")) {
                newTags = newTags.replace(RegExp("\n\\s+?-\\s+?" + revTag), "");
            }

            if (newTags.trim() === revTag) {
                newTags = "";
            } else if (newTags.trimEnd().length > 0) {
                newTags = "tags:" + newTags + "\n";
            }
            if (newTags.includes(revTag) || tags[3].includes(revTag)) {
                throw new Error("delDefaultTag still have defaultTag" + newTags + tags[3]);
            }

            if (tags[1].length > 0 || tags[3].length > 0 || newTags.length > 0) {
                fileText = fileText.replace(
                    YAML_TAGS_REGEX,
                    `---\n${tags[1]}` + `${newTags}` + `${tags[3]}---`,
                );
            } else {
                fileText = fileText.replace(YAML_TAGS_REGEX, "");
            }
        }
    }
    return fileText;
}
