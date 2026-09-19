import { MiscUtils, debug } from "src/util/utils_recall";
import { SRSettings } from "../settings";

import { TFile, TFolder, getAllTags } from "obsidian";

import { FsrsData } from "src/algorithms/fsrs";
import { AnkiData } from "src/algorithms/anki";

import { getStorePath } from "src/dataStore/dataLocation";
import { Tags } from "src/tags";
import { SrsAlgorithm, algorithmNames } from "src/algorithms/algorithms";
import { CardInfo, TrackedFile } from "./trackedFile";
import { RPITEMTYPE, RepetitionItem, ReviewResult } from "./repetitionItem";
import { DEFAULT_QUEUE_DATA, Queue } from "./queue";
import { Iadapter } from "./adapter";
import { t } from "src/lang/helpers";
import {
    findCardInfoByBlockID as findCardInfoByBlockIDInIndex,
    rebuildBlockIdIndex as rebuildCardBlockIdIndex,
} from "./cardMigration";
import {
    trackFilesInFolder as trackFilesInFolderHelper,
    untrackFilesInFolder as untrackFilesInFolderHelper,
} from "./fileTracking";
import {
    findMovedFile as findMovedFileHelper,
    getFileIndex as getFileIndexHelper,
    getFilePath as getFilePathHelper,
    getItemsOfFile as getItemsOfFileHelper,
    getTrackedFile as getTrackedFileHelper,
    isInTrackedFiles as isInTrackedFilesHelper,
    isTrackedCardfile as isTrackedCardfileHelper,
    updateMovedFile as updateMovedFileHelper,
} from "./fileQueries";
import {
    updateCardItems as updateCardItemsHelper,
    updateItem as updateItemHelper,
    updateItems as updateItemsHelper,
    updateReviewedCounts as updateReviewedCountsHelper,
    verifyItems as verifyItemsHelper,
} from "./itemManagement";
import {
    getmtime as getmtimeHelper,
    loadData as loadDataHelper,
    pruneData as pruneDataHelper,
    reloadData as reloadDataHelper,
    saveData as saveDataHelper,
    verifyData as verifyDataHelper,
} from "./dataPersistence";

/**
 * SrsData.
 */
export interface SrsData {
    /**
     * @type {Queue}
     */
    queues: Queue;

    /**
     * @type {ReviewedCounts}
     */
    reviewedCounts: ReviewedCounts;
    /**
     * @type {ReviewedCounts}
     */
    reviewedCardCounts: ReviewedCounts;
    /**
     * @type {RepetitionItem[]}
     */
    items: RepetitionItem[];
    /**
     * @type {TrackedFile[]}
     */
    trackedFiles: TrackedFile[];

    /**
     * @type {number}
     */
    mtime: number;
}

export type ReviewedCounts = Record<string, { new: number; due: number }>;

export const DEFAULT_SRS_DATA: SrsData = {
    queues: Object.assign({}, DEFAULT_QUEUE_DATA) as Queue,
    reviewedCounts: {},
    reviewedCardCounts: {},
    items: [],
    trackedFiles: [],
    mtime: 0,
};

/**
 * DataStore.
 */
export class DataStore {
    static instance: DataStore;

    private blockIDIndex: Map<string, Array<{ trackedFile: TrackedFile; cardIndex: number }>> =
        new Map();

    /**
     * @type {SrsData}
     */
    data: SrsData;
    /**
     * @type {SRPlugin}
     */
    // plugin: SRPlugin;
    settings: SRSettings;
    // manifestDir: string;
    /**
     * @type {string}
     */
    dataPath: string;

    public static getInstance(): DataStore {
        if (!DataStore.instance) {
            // DataStore.instance = new DataStore();
            throw Error("there is not DataStore instance.");
        }
        return DataStore.instance;
    }

    /**
     *
     * @param settings
     * @param manifestDir
     */
    constructor(settings: SRSettings, manifestDir: string) {
        // this.plugin = plugin;
        this.settings = settings;
        // this.manifestDir = manifestDir;
        this.dataPath = getStorePath(manifestDir, settings);
        DataStore.instance = this;
    }

    toInstances() {
        this.data.trackedFiles = this.data.trackedFiles.map(TrackedFile.create);
        this.data.items = this.data.items.map(RepetitionItem.create);
        this.data.queues = Queue.create(this.data.queues);
        this.rebuildBlockIdIndex();
    }

    rebuildBlockIdIndex() {
        rebuildCardBlockIdIndex(this.data.trackedFiles, this.blockIDIndex);
    }

    /**
     * load.
     */
    async load(path = this.dataPath) {
        await loadDataHelper(this, path);
    }

    /**
     * re load if tracked_files.json updated by other device.
     */
    async reLoad() {
        await reloadDataHelper(this);
    }
    setdataPath(path = this.dataPath) {
        this.dataPath = path;
    }
    /**
     * save.
     */
    async save(path = this.dataPath) {
        await saveDataHelper(this, path);
    }

    /**
     * get file modified time. should only set to data.mtime when load.
     * @param path
     * @returns
     */
    async getmtime(path = this.dataPath) {
        return await getmtimeHelper(this, path);
    }

    /**
     * Returns total number of items tracked by the SRS.
     * @returns {number}
     */
    get itemSize(): number {
        return this.data.items.length;
    }
    /**
     * Returns all items tracked by the SRS.
     * @returns {RepetitionItem}
     */
    get items(): RepetitionItem[] {
        return this.data.items;
    }

    /**
     * getFileIndex.
     *
     * @param {string} path
     * @returns {number} ind | -1
     */
    getFileIndex(path: string): number {
        return getFileIndexHelper(this, path);
    }

    getTrackedFile(path: string): TrackedFile {
        return getTrackedFileHelper(this, path);
    }

    /**
     * Returns whether or not the given file path is tracked by the SRS.
     * @param {string} path
     * @returns {boolean}
     */
    isInTrackedFiles(path: string): boolean {
        return isInTrackedFilesHelper(this, path);
    }

    /**
     * Returns whether or not the given file path is tracked by the SRS.
     * work for cards query.
     * @param {string} path
     * @returns {boolean}
     */
    isTrackedCardfile(path: string): boolean {
        return isTrackedCardfileHelper(this, path);
    }

    isCardItem(id: number) {
        const item = this.getItembyID(id);
        const file = this.getFileByIndex(item.fileIndex);
        return file.noteID !== id;
    }

    /**
     * Returns when the given item is reviewed next (in hours).
     */
    /**
     * nextReview.
     *
     * @param {number} itemId
     * @returns {number}
     */
    nextReview(itemId: number): number {
        const item = this.getItembyID(itemId);
        if (item == null) {
            return -1;
        }

        const now: Date = new Date();
        return (item.nextReview - now.getTime()) / (1000 * 60 * 60);
    }

    getItembyID(id: number): RepetitionItem {
        return id < 0
            ? null
            : this.data.items.find((item: RepetitionItem, _idx) => {
                  if (item != null && item.ID === id) {
                      return true;
                  }
              });
    }

    getFileByIndex(idx: number): TrackedFile {
        // assert(idx >= 0);
        return this.data.trackedFiles[idx];
    }

    /**
     * getItemsOfFile.
     * @param {string} path
     * @returns {RepetitionItem[]}
     */
    getItemsOfFile(path: string): RepetitionItem[] {
        return getItemsOfFileHelper(this, path);
    }
    getItems = (ids: number[]): RepetitionItem[] => {
        return ids.map(this.getItembyID.bind(this));
    };
    getNoteItem(path: string): RepetitionItem {
        return this.getItembyID(this.getTrackedFile(path)?.noteID) ?? null;
    }

    /**
     * getNext. RepetitionItem
     *
     * @returns {RepetitionItem | null}
     */
    getNext(key?: string): RepetitionItem | null {
        const id = this.data.queues.getNextId(key);
        if (id != null) {
            return this.getItembyID(id);
        }

        return null;
    }

    /**
     * getFilePath.
     *
     * @param {RepetitionItem} item
     * @returns {string | null}
     */
    getFilePath(item: RepetitionItem): string | null {
        return getFilePathHelper(this, item);
    }

    getReviewedCounts() {
        return this.data.reviewedCounts;
    }
    getReviewedCardCounts(): ReviewedCounts {
        return this.data.reviewedCardCounts;
    }

    /**
     * reviewId.
     * update data according to response opt
     * @param {number} itemId
     * @param {string} option
     */
    reviewId(itemId: number, option: string | number) {
        const item = this.getItembyID(itemId);
        let result: ReviewResult;
        if (item == null) {
            return -1;
        }

        const algorithm = SrsAlgorithm.getInstance();
        if (typeof option === "number") {
            option = algorithm.srsOptions()[option] as string;
        }
        if (this.data.queues.isInRepeatQueue(itemId)) {
            result = algorithm.onSelection(item, option, true);
        } else {
            result = algorithm.onSelection(item, option, false);
            item.reviewUpdate(result);
        }
        this.data.queues.updateWhenReview(item, result.correct, this.settings.repeatItems);
        if (item.timesReviewed < 1) {
            debug("save review data error when reviewId");
        }
    }

    /**
     * untrackFilesInFolderPath.
     *
     * @param {string} path
     * @param {boolean} recursive
     */
    untrackFilesInFolderPath(path: string, recursive?: boolean) {
        const folder: TFolder = Iadapter.instance.vault.getAbstractFileByPath(path) as TFolder;

        if (folder != null) {
            this.untrackFilesInFolder(folder, recursive);
        }
    }

    /**
     * untrackFilesInFolder.
     *
     * @param {TFolder} folder
     * @param {boolean} recursive
     */
    untrackFilesInFolder(folder: TFolder, recursive?: boolean) {
        const totalRemoved = untrackFilesInFolderHelper(this, folder, recursive);
        if (recursive == null || recursive === true) {
            const msg = t("DATA_FOLDER_UNTRACKED", {
                folderPath: folder.path,
                totalRemoved: totalRemoved,
            });
            MiscUtils.notice(msg);
            console.log(msg);
        }
        return totalRemoved;
    }

    /**
     * trackFilesInFolderPath.
     *
     * @param {string} path
     * @param {boolean} recursive
     */
    trackFilesInFolderPath(path: string, recursive?: boolean) {
        const folder: TFolder = Iadapter.instance.vault.getAbstractFileByPath(path) as TFolder;

        if (folder != null) {
            this.trackFilesInFolder(folder, recursive);
        }
    }

    /**
     * trackFilesInFolder.
     *
     * @param {TFolder} folder
     * @param {boolean} recursive
     */
    trackFilesInFolder(folder: TFolder, recursive?: boolean) {
        const { added, removed } = trackFilesInFolderHelper(this, folder, recursive);
        MiscUtils.notice(
            t("DATA_ADDED_REMOVED_ITEMS", { totalAdded: added, totalRemoved: removed }),
        );
        return { added, removed };
    }

    /**
     * trackFile.
     *
     * @param {string} path
     * @param {string} type? "default" , "card"
     * @param {boolean} notice
     * @returns {{ added: number; removed: number } | null}
     */
    trackFile(
        path: string,
        type?: RPITEMTYPE | string,
        notice?: boolean,
    ): { added: number; removed: number } | null {
        const isType = Object.values(RPITEMTYPE).includes(type as RPITEMTYPE);
        const itemtype = isType ? (type as RPITEMTYPE) : RPITEMTYPE.NOTE;
        const dname = !isType ? type : undefined;
        const trackedFile = new TrackedFile(path, itemtype, dname);

        const ind = this.getFileIndex(path);
        if (ind < 0) {
            this.data.trackedFiles.push(trackedFile);
        } else {
            const tkfile = this.getFileByIndex(ind);
            if (!tkfile.isTrackedNote) {
                tkfile.setTracked(itemtype, dname);
            }
        }
        const data = this.updateItems(path, itemtype, dname, notice);
        this.rebuildBlockIdIndex();
        console.log("Tracked: " + path);
        // this.plugin.updateStatusBar();
        return data;
    }

    /**
     * untrackFile.
     *
     * @param {string} path
     * @param {boolean} notice
     * @returns {number}
     */
    untrackFile(path: string, notice?: boolean): number {
        if (notice == null) notice = true;

        const index = this.getFileIndex(path);

        if (index == -1) {
            return 0;
        }

        const trackedFile = this.getTrackedFile(path);
        const note = Iadapter.instance.vault.getAbstractFileByPath(path) as TFile;
        let cardName: string = null;

        if (note != null && trackedFile) {
            const fileCachedData = Iadapter.instance.metadataCache.getFileCache(note) || {};
            const tags = getAllTags(fileCachedData) || [];
            const deckname = Tags.getNoteDeckName(note, this.settings);
            cardName = Tags.getTagFromSettingTags(tags, this.settings.flashcardTags);
            if (deckname !== null) {
                // || cardName !== null
                // it's taged file, can't untrack by this.
                console.log(path + " is taged file, can't untrack by this.");
                MiscUtils.notice(t("DATA_TAGGED_FILE_CANT_UNTRACK"));
                return 0;
            }
        }

        let numItems = 0;
        const lastTag = trackedFile.lastTag;
        trackedFile.setUnTracked();
        for (const key in trackedFile.items) {
            const id = trackedFile.items[key];
            if (id >= 0) {
                this.unTrackItem(id);
                numItems++;
            }
        }
        if (cardName == null && this.settings.trackedNoteToDecks) {
            trackedFile.cardIDs.filter((id) => id >= 0).forEach(this.unTrackItem, this);
            numItems += trackedFile.cardIDs.length;
        }

        let nulrstr: string = "";
        // this.data.trackedFiles[index] = null;
        if (note == null) {
            nulrstr = ", because it not exist.";
        } else if (
            this.settings.tagsToReview.includes(lastTag) &&
            this.settings.untrackWithReviewTag
        ) {
            nulrstr = ", because you have delete the reviewTag in note.";
        }
        // this.save();         // will be used when plugin.sync_Algo(), which shouldn't
        // this.plugin.updateStatusBar();

        if (notice) {
            MiscUtils.notice(t("DATA_UNTRACKED_ITEMS", { numItems: numItems, nulrstr: nulrstr }));
        }

        this.rebuildBlockIdIndex();
        console.log("Untracked: " + path + nulrstr);
        return numItems;
    }

    unTrackItem(id: number) {
        const item = this.getItembyID(id);
        this.data.queues.remove(item);
        item.setUntracked();
    }

    get maxItemId() {
        return Math.max(
            ...this.data.items.map((item: RepetitionItem) => {
                return item ? item.ID : 0;
            }),
            this.data.items.length - 1,
        );
    }

    _updateItem(
        id: number = null,
        fileIndex: number,
        itemType: RPITEMTYPE,
        deckName: string,
    ): number {
        return updateItemHelper(this, id, fileIndex, itemType, deckName);
    }

    /**
     * updateItems.
     *
     * @param {string} path
     * @param {string} type? RPITEMTYPE
     * @param {string} dname? "default" , deckName
     * @param {boolean} notice
     * @returns {{ added: number; removed: number } | null}
     */
    updateItems(
        path: string,
        type: RPITEMTYPE,
        dname: string,
        notice?: boolean,
    ): { added: number; removed: number } | null {
        return updateItemsHelper(this, path, type, dname, notice);
    }

    updateCardItems(
        trackedFile: TrackedFile,
        cardinfo: CardInfo,
        count: number,
        deckName: string,
        notice?: boolean,
    ): { added: number; removed: number } | null {
        return updateCardItemsHelper(this, trackedFile, cardinfo, count, deckName, notice);
    }

    async verifyItems() {
        await verifyItemsHelper(this);
    }

    updateReviewedCounts(id: number, type: RPITEMTYPE = RPITEMTYPE.NOTE) {
        updateReviewedCountsHelper(this, id, type);
    }

    findMovedFile(path: string): string {
        return findMovedFileHelper(this, path);
    }

    /**
     * findCardInfoByBlockID.
     * Search across ALL tracked files for a CardInfo matching the given blockID.
     *
     * @param {string} blockID
     * @param {string} excludePath - path to exclude from search (current file)
     * @returns {{ trackedFile: TrackedFile; cardInfo: CardInfo; cardIndex: number } | null}
     */
    findCardInfoByBlockID(
        blockID: string,
        excludePath?: string,
    ): { trackedFile: TrackedFile; cardInfo: CardInfo; cardIndex: number } | null {
        return findCardInfoByBlockIDInIndex(blockID, excludePath, this.blockIDIndex);
    }

    /**
     * migrateCardInfo.
     * Move a CardInfo (with its itemIds and review data) from one TrackedFile to another.
     *
     * @param {TrackedFile} sourceFile - the file the card is moving FROM
     * @param {number} cardIndex - index of the CardInfo in sourceFile.cardItems
     * @param {TrackedFile} destFile - the file the card is moving TO
     * @param {number} lineNo - new line number in the destination file
     * @param {string} cardTextHash - new card text hash
     * @param {string} blockID - the block ID
     * @returns {CardInfo} the migrated CardInfo now in destFile
     */
    migrateCardInfo(
        sourceFile: TrackedFile,
        cardIndex: number,
        destFile: TrackedFile,
        lineNo: number,
        cardTextHash: string,
        blockID: string,
    ): CardInfo | null {
        if (
            sourceFile == null ||
            destFile == null ||
            sourceFile.path === destFile.path ||
            cardIndex < 0 ||
            !sourceFile.cardItems ||
            cardIndex >= sourceFile.cardItems.length
        ) {
            return null;
        }

        const cardInfo = sourceFile.cardItems.splice(cardIndex, 1)[0];
        if (cardInfo == null) {
            return null;
        }

        cardInfo.lineNo = lineNo;
        cardInfo.cardTextHash = cardTextHash;
        cardInfo.blockID = blockID;

        if (!destFile.hasCards) {
            destFile.cardItems = [];
        }
        destFile.cardItems.push(cardInfo);
        destFile.cardItems.sort((a, b) => a.lineNo - b.lineNo);

        // Update fileIndex on all associated RepetitionItems
        const destFileIndex = this.getFileIndex(destFile.path);
        for (const id of cardInfo.itemIds) {
            const item = this.getItembyID(id);
            if (item != null) {
                item.setTracked(destFileIndex);
            }
        }

        this.rebuildBlockIdIndex();
        return cardInfo;
    }

    updateMovedFile(trackedFile: TrackedFile): boolean {
        return updateMovedFileHelper(this, trackedFile);
    }

    /**
     * Verify that the file of this item still exists.
     *
     * @param {string}path
     */
    async verify(path: string): Promise<boolean> {
        return await verifyDataHelper(this, path);
    }

    /**
     * resetData.
     */
    resetData() {
        this.data = Object.assign({}, DEFAULT_SRS_DATA);
    }

    /**
     * pruneData: delete unused storedata, fsrs's optimizer/writeRevlog() will be affected if using this func.
     * NulltFiles/NullItems
     * @returns
     */
    async pruneData() {
        await pruneDataHelper(this);
    }
}
