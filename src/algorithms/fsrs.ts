import { Setting, Notice, ButtonComponent } from "obsidian";
import { DateUtils, MiscUtils } from "src/util/utils_recall";
import { SrsAlgorithm, algorithmNames } from "./algorithms";
import { DataStore } from "../dataStore/data";

import * as tsfsrs from "ts-fsrs";
import { t } from "src/lang/helpers";
import deepcopy from "deepcopy";
import { AnkiData } from "./anki";
import { Rating, ReviewLog } from "ts-fsrs";
import { RepetitionItem, ReviewResult } from "src/dataStore/repetitionItem";
import { Iadapter } from "src/dataStore/adapter";
import { fsrsOptimizer, type OptimizerProgress } from "./fsrs-optimizer";

// https://github.com/mgmeyers/obsidian-kanban/blob/main/src/Settings.ts
let applyDebounceTimer = 0;
function applySettingsUpdate(callback: () => void): void {
    clearTimeout(applyDebounceTimer);
    applyDebounceTimer = window.setTimeout(callback, 512);
}

export type FsrsData = tsfsrs.Card;

export class RevLog {
    // https://github.com/open-spaced-repetition/fsrs-optimizer
    card_id = -1;
    review_time = 0;
    review_rating = 0;
    review_state = 0;
    review_duration = 0;
    tag = "";

    constructor(item: RepetitionItem = null, reviewLog: ReviewLog = null, duration: number = 0) {
        if (item) {
            this.card_id = item.ID;
            this.tag = item.deckName;
        }
        if (reviewLog) {
            this.review_time = reviewLog.review.getTime();
            this.review_rating = reviewLog.rating;
            this.review_state = reviewLog.state;
        }
        this.review_duration = duration;
        return;
    }

    // https://qastack.cn/programming/43909566/get-keys-of-a-typescript-interface-as-array-of-strings
    static getKeyNames() {
        return Object.keys(new RevLog());
    }
}

interface FsrsSettings {
    revlog_tags: string[];
    request_retention: number;
    maximum_interval: number;
    w: readonly number[];
    enable_fuzz: boolean;
    enable_short_term: boolean;
}

const FsrsOptions: string[] = ["Again", "Hard", "Good", "Easy"]; // Manual =0

/**
 * This is an implementation of the Free Spaced Repetition Scheduling Algorithm as described in
 * https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler
 * https://github.com/open-spaced-repetition/fsrs.js
 */
export class FsrsAlgorithm extends SrsAlgorithm {
    settings: FsrsSettings;

    fsrs = new tsfsrs.FSRS(tsfsrs.generatorParameters(this.settings));
    card = tsfsrs.createEmptyCard();

    filename = "ob_revlog.csv";
    logfilepath: string = null;
    REVLOG_sep = ",";
    REVLOG_TITLE = RevLog.getKeyNames().join(this.REVLOG_sep) + "\n";
    review_duration = 0;

    constructor() {
        super();
        //Set algorithm parameters
        this.updateFsrsParams();
    }

    defaultSettings(): FsrsSettings {
        return {
            revlog_tags: [],
            ...tsfsrs.generatorParameters(),
            // request_retention: 0.9,
            // maximum_interval: 36500,
            // w: [
            //     0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34,
            //     1.26, 0.29, 2.61,
            // ],
            // enable_fuzz: false,
        };
    }
    updateSettings(settings: unknown) {
        this.settings = MiscUtils.assignOnly(this.defaultSettings(), settings);
        SrsAlgorithm.instance = this;
        // FSRS supports 17 params (standard) or 21 params (with short-term)
        const validLengths = [17, 19, 21];
        if (!validLengths.includes(this.settings.w.length)) {
            const errmsg =
                "fsrs algorithm has been updated, please update w of algorithm setting. reset `w` to default will fix this error";
            console.error(errmsg);
            new Notice(errmsg, 0);
        }
        this.updateFsrsParams();
        this.getLogfilepath();
    }

    updateFsrsParams() {
        this.fsrs = new tsfsrs.FSRS(tsfsrs.generatorParameters(this.settings));
    }

    getLogfilepath() {
        const filepath = DataStore.getInstance().dataPath;
        const fder_index = filepath.lastIndexOf("/");
        this.logfilepath = filepath.substring(0, fder_index + 1) + this.filename;
    }

    defaultData(): FsrsData {
        return tsfsrs.createEmptyCard();
    }

    srsOptions(): string[] {
        return FsrsOptions;
    }

    calcAllOptsIntervals(item: RepetitionItem) {
        const data = item.data as FsrsData;
        const card = deepcopy(data);
        const now = new Date();
        const scheduling_cards = this.fsrs.repeat(card, now);
        const intvls: number[] = [];
        tsfsrs.Grades.forEach((grade, _ind) => {
            const due = scheduling_cards[grade].card.due.valueOf();
            const lastrv = scheduling_cards[grade].card.last_review.valueOf();
            const nextInterval = due - lastrv;
            intvls.push(nextInterval / DateUtils.DAYS_TO_MILLIS);
            // console.debug("due:" + due + ", last: " + lastrv + ", intvl: " + nextInterval);
        });
        this.review_duration = new Date().getTime();
        return intvls;
    }
    onSelection(
        item: RepetitionItem,
        optionStr: string,
        repeat: boolean,
        log: boolean = true,
    ): ReviewResult {
        let data = item.data as FsrsData;
        const response = (FsrsOptions.indexOf(optionStr) + 1) as tsfsrs.Grade;

        let correct = true;
        if (response == 1) {
            // Again
            correct = false;
        }
        if (repeat) {
            return {
                correct,
                nextReview: -1,
            };
        }

        const now = new Date();
        const scheduling_cards = this.fsrs.repeat(data, now);
        // console.log(scheduling_cards);

        //Update the card after rating:
        data = item.data = deepcopy(scheduling_cards[response].card) as FsrsData;
        data.stability = MiscUtils.fixed(data.stability, 5);
        data.difficulty = MiscUtils.fixed(data.difficulty, 5);
        data.elapsed_days = MiscUtils.fixed(data.elapsed_days, 3);

        // Get the review log after rating :
        if (log) {
            const review_log = scheduling_cards[response].log;
            this.appendRevlog(item, review_log);
        }

        const nextInterval = data.due.valueOf() - data.last_review.valueOf();

        return {
            correct,
            nextReview: nextInterval,
        };
    }

    /**
     * 记录重复数据 日志，
     * @param now
     * @param cid 对应数据项ID
     * @param rating
     */
    async appendRevlog(item: RepetitionItem, reviewLog: ReviewLog) {
        if (this.settings.revlog_tags.length > 0) {
            if (item.deckName.includes("/")) {
                if (
                    !this.settings.revlog_tags.some(
                        (tag: string) =>
                            item.deckName === tag || item.deckName.startsWith(tag + "/"),
                    )
                ) {
                    return;
                }
            } else if (!this.settings.revlog_tags.includes(item.deckName)) {
                return;
            }
        }

        const adapter = Iadapter.instance.adapter;
        const duration = this.review_duration > 0 ? new Date().getTime() - this.review_duration : 0;
        this.review_duration = 0;
        const rlog = new RevLog(item, reviewLog, duration);

        let data = Object.values(rlog).join(this.REVLOG_sep);
        data += "\n";

        if (!(await adapter.exists(this.logfilepath))) {
            data = this.REVLOG_TITLE + data;
        }
        adapter.append(this.logfilepath, data);
        return data;
    }

    /**
     * 重写 重复数据 日志，
     * @param now
     * @param cid 对应数据项ID，
     * @param rating
     */
    reWriteRevlog(data: string, withTitle = false) {
        const adapter = Iadapter.instance.adapter;

        if (withTitle) {
            data = this.REVLOG_TITLE + data;
        }
        adapter.write(this.logfilepath, data);
    }

    async readRevlog() {
        const adapter = Iadapter.instance.adapter;
        let data = "";
        if (await adapter.exists(this.logfilepath)) {
            data = await adapter.read(this.logfilepath);
        }
        return data;
    }

    importer(fromAlgo: algorithmNames, items: RepetitionItem[]): void {
        const options = this.srsOptions();
        const initItvl = this.settings.w[4];
        items.forEach((item) => {
            if (item != null && item.data != null) {
                const reps = item.timesReviewed;
                let card = this.defaultData() as FsrsData;
                if (reps > 0) {
                    const data = item.data as AnkiData;
                    const due = new Date(item.nextReview);
                    const interval = data.lastInterval;
                    const lastview = new Date(
                        item.nextReview - data.lastInterval * DateUtils.DAYS_TO_MILLIS,
                    );

                    let opt: string;
                    item.data = card;
                    if (interval > initItvl * 3) {
                        // card.state = State.Learning;
                        // in case the param is to big.
                        opt = options[Rating.Easy - 1];
                        this.onSelection(item, opt, false, false);
                    }
                    if (interval > initItvl) {
                        opt = options[Rating.Easy - 1];
                        this.onSelection(item, opt, false, false);
                    }
                    opt = options[Rating.Good - 1];
                    this.onSelection(item, opt, false, false);

                    card = item.data as FsrsData;
                    card.due = due;
                    card.scheduled_days = interval;
                    card.reps = reps;
                    card.last_review = lastview;
                } else {
                    item.data = card;
                }
                // item.data = deepcopy(card);
                if (
                    card.difficulty === 0 ||
                    card.difficulty == null ||
                    card.stability === 0 ||
                    card.stability == null
                ) {
                    if (reps > 0) {
                        const show = [item.ID, card, reps];
                        console.warn("data switch: d, s" + card.difficulty + ", " + card.stability);
                        console.warn(...show);
                    }
                }
            }
        });
        items.some((item) => {
            if (Object.prototype.hasOwnProperty.call(item.data, "ease")) {
                throw new Error("conv to fsrs failed");
            }
        });
    }

    displaySettings(
        containerEl: HTMLElement,
        update: (settings: FsrsSettings, refresh?: boolean) => void,
    ) {
        containerEl.empty();

        containerEl.createDiv().innerHTML = t("FSRS_ALGORITHM_DESC");

        new Setting(containerEl)
            .setName(t("REVLOG_TAGS"))
            .setDesc(t("REVLOG_TAGS_DESC"))
            .addTextArea((text) =>
                text.setValue(this.settings.revlog_tags.join(" ")).onChange((value) => {
                    applySettingsUpdate(async () => {
                        const tags = value.split(/[\n\s]+/);
                        tags.last() === "" ? tags.pop() : tags;
                        this.settings.revlog_tags = tags;
                        update(this.settings);
                    });
                }),
            );

        new Setting(containerEl)
            .setName(t("REQUEST_RETENTION"))
            .setDesc(t("REQUEST_RETENTION_DESC"))
            .addSlider((slider) =>
                slider
                    .setLimits(50, 100, 1)
                    .setValue(this.settings.request_retention * 100)
                    .setDynamicTooltip()
                    .onChange(async (value) => {
                        this.settings.request_retention = value / 100;
                        update(this.settings);
                        this.updateFsrsParams();
                    }),
            )
            .addExtraButton((button) => {
                button
                    .setIcon("reset")
                    .setTooltip(t("RESET_DEFAULT"))
                    .onClick(async () => {
                        applySettingsUpdate(async () => {
                            this.settings.request_retention =
                                this.defaultSettings().request_retention;
                            update(this.settings);
                            this.updateFsrsParams();
                            this.displaySettings(containerEl, update);
                        });
                    });
            });

        new Setting(containerEl)
            .setName(t("MAX_INTERVAL"))
            .setDesc(t("MAX_INTERVAL_DESC"))
            .addText((text) =>
                text.setValue(this.settings.maximum_interval.toString()).onChange((value) => {
                    applySettingsUpdate(async () => {
                        const numValue: number = Number.parseInt(value);
                        if (!isNaN(numValue)) {
                            if (numValue < 1) {
                                new Notice(t("MAX_INTERVAL_MIN_WARNING"));
                                text.setValue(this.settings.maximum_interval.toString());
                                return;
                            }

                            this.settings.maximum_interval = numValue;
                            text.setValue(this.settings.maximum_interval.toString());
                            update(this.settings);
                            this.updateFsrsParams();
                        } else {
                            new Notice(t("VALID_NUMBER_WARNING"));
                        }
                    });
                }),
            )
            .addExtraButton((button) => {
                button
                    .setIcon("reset")
                    .setTooltip(t("RESET_DEFAULT"))
                    .onClick(async () => {
                        applySettingsUpdate(async () => {
                            this.settings.maximum_interval =
                                this.defaultSettings().maximum_interval;
                            update(this.settings, true);
                            this.updateFsrsParams();
                        });
                    });
            });

        new Setting(containerEl)
            .setName("w")
            // .setDesc("")
            .addText((text) =>
                text.setValue(this.settings.w.join(", ")).onChange((value) => {
                    applySettingsUpdate(async () => {
                        try {
                            const numValue: number[] = value.split(/[ ,]+/).map((v) => {
                                return Number.parseFloat(v);
                            });
                            // FSRS supports 17 params (standard) or 21 params (with short-term)
                            const validLengths = [17, 19, 21];
                            if (validLengths.includes(numValue.length)) {
                                this.settings.w = numValue;
                                update(this.settings);
                                this.updateFsrsParams();
                                return;
                            }
                        } catch (error) {
                            console.log(error);
                        }
                        new Notice(t("VALID_NUMBER_WARNING"));
                        text.setValue(this.settings.w.toString());
                    });
                }),
            )
            .addExtraButton((button) => {
                button
                    .setIcon("reset")
                    .setTooltip(t("RESET_DEFAULT"))
                    .onClick(async () => {
                        applySettingsUpdate(async () => {
                            this.settings.w = this.defaultSettings().w;
                            update(this.settings, true);
                            this.updateFsrsParams();
                        });
                    });
            })
            .settingEl.querySelector(".setting-item-description").innerHTML =
            t("FSRS_W_PARAM_DESC");

        new Setting(containerEl)
            .setName(t("FUZZING"))
            .setDesc(t("FUZZING_DESC"))
            .addToggle((toggle) =>
                toggle.setValue(this.settings.enable_fuzz).onChange(async (value) => {
                    applySettingsUpdate(async () => {
                        this.settings.enable_fuzz = value ?? this.defaultSettings().enable_fuzz;
                        update(this.settings, true);
                        this.updateFsrsParams();
                    });
                }),
            )
            .addExtraButton((button) => {
                button
                    .setIcon("reset")
                    .setTooltip(t("RESET_DEFAULT"))
                    .onClick(async () => {
                        applySettingsUpdate(async () => {
                            this.settings.enable_fuzz = this.defaultSettings().enable_fuzz;
                            update(this.settings, true);
                            this.updateFsrsParams();
                        });
                    });
            });

        new Setting(containerEl)
            .setName(t("SWITCH_SHORT_TERM"))
            .setDesc(t("SWITCH_SHORT_TERM_DESC"))
            .addToggle((toggle) =>
                toggle.setValue(this.settings.enable_short_term).onChange(async (value) => {
                    applySettingsUpdate(async () => {
                        this.settings.enable_short_term =
                            value ?? this.defaultSettings().enable_short_term;
                        update(this.settings, true);
                        this.updateFsrsParams();
                    });
                }),
            )
            .addExtraButton((button) => {
                button
                    .setIcon("reset")
                    .setTooltip(t("RESET_DEFAULT"))
                    .onClick(async () => {
                        applySettingsUpdate(async () => {
                            this.settings.enable_short_term =
                                this.defaultSettings().enable_short_term;
                            update(this.settings, true);
                            this.updateFsrsParams();
                        });
                    });
            });

        // FSRS Optimizer Section
        this.displayOptimizerSettings(containerEl, update);

        return;
    }

    /**
     * Display FSRS Optimizer settings UI
     */
    private displayOptimizerSettings(
        containerEl: HTMLElement,
        update: (settings: FsrsSettings, refresh?: boolean) => void,
    ) {
        // Section header
        containerEl.createEl("h4", { text: t("FSRS_OPTIMIZER") });
        containerEl.createEl("p", {
            text: t("FSRS_OPTIMIZER_DESC"),
            cls: "setting-item-description",
        });

        // Progress container (initially hidden)
        const progressContainer = containerEl.createDiv({ cls: "fsrs-optimizer-progress" });
        progressContainer.style.display = "none";

        const progressBar = progressContainer.createDiv({ cls: "fsrs-progress-bar-container" });
        const progressFill = progressBar.createDiv({ cls: "fsrs-progress-bar-fill" });
        const progressText = progressContainer.createDiv({ cls: "fsrs-progress-text" });

        // Result container (initially hidden)
        const resultContainer = containerEl.createDiv({ cls: "fsrs-optimizer-result" });
        resultContainer.style.display = "none";

        // Helper to update progress UI
        const updateProgressUI = (progress: OptimizerProgress) => {
            progressContainer.style.display = "block";
            progressFill.style.width = `${progress.current}%`;

            const statusMessages: Record<OptimizerProgress["status"], string> = {
                idle: "",
                loading: t("FSRS_LOADING_FILE"),
                converting: t("FSRS_CONVERTING_DATA"),
                training: t("FSRS_TRAINING_PROGRESS", {
                    current: progress.current,
                    total: progress.total,
                }),
                done: t("FSRS_TRAINING_COMPLETE"),
                error: progress.message || t("FSRS_TRAINING_ERROR"),
            };

            progressText.textContent = statusMessages[progress.status];

            if (progress.status === "error") {
                progressFill.addClass("fsrs-progress-error");
            } else {
                progressFill.removeClass("fsrs-progress-error");
            }
        };

        // Helper to show result
        const showResult = (newParams: number[], oldParams: readonly number[]) => {
            resultContainer.empty();
            resultContainer.style.display = "block";

            resultContainer.createEl("h5", { text: t("FSRS_OPTIMIZED_PARAMS") });

            // Show parameter comparison
            const table = resultContainer.createEl("table", { cls: "fsrs-params-table" });
            const thead = table.createEl("thead");
            const headerRow = thead.createEl("tr");
            headerRow.createEl("th", { text: "Index" });
            headerRow.createEl("th", { text: t("FSRS_OLD_VALUE") });
            headerRow.createEl("th", { text: t("FSRS_NEW_VALUE") });
            headerRow.createEl("th", { text: t("FSRS_CHANGE") });

            const tbody = table.createEl("tbody");

            // Show all new params for comparison (supports both 17 and 21 param versions)
            for (let i = 0; i < newParams.length; i++) {
                const row = tbody.createEl("tr");
                row.createEl("td", { text: `w[${i}]` });
                row.createEl("td", { text: oldParams[i]?.toFixed(4) || "N/A" });
                row.createEl("td", { text: newParams[i].toFixed(4) });

                const change = newParams[i] - (oldParams[i] || 0);
                const changeCell = row.createEl("td");
                changeCell.textContent = (change >= 0 ? "+" : "") + change.toFixed(4);
                changeCell.addClass(change >= 0 ? "fsrs-change-positive" : "fsrs-change-negative");
            }

            // Buttons container
            const buttonContainer = resultContainer.createDiv({ cls: "fsrs-result-buttons" });

            // Copy button
            new ButtonComponent(buttonContainer)
                .setButtonText(t("FSRS_COPY_PARAMS"))
                .onClick(() => {
                    // Format as array string: [x, x, x, ...]
                    const paramsStr = "[" + newParams.map((p) => p.toFixed(4)).join(", ") + "]";
                    navigator.clipboard
                        .writeText(paramsStr)
                        .then(() => {
                            new Notice(t("FSRS_PARAMS_COPIED"), 2000);
                        })
                        .catch(() => {
                            new Notice("Failed to copy to clipboard", 2000);
                        });
                });

            // Apply button
            new ButtonComponent(buttonContainer)
                .setButtonText(t("FSRS_APPLY_PARAMS"))
                .setCta()
                .onClick(() => {
                    // Apply all new params (supports both 17 and 21 param versions)
                    this.settings.w = newParams;
                    update(this.settings, true);
                    this.updateFsrsParams();
                    new Notice(t("FSRS_PARAMS_APPLIED"), 3000);
                    resultContainer.style.display = "none";
                });
        };

        // CSV Upload setting
        new Setting(containerEl)
            .setName(t("FSRS_OPTIMIZER_UPLOAD"))
            .setDesc(t("FSRS_OPTIMIZER_UPLOAD_DESC"))
            .addButton((button) => {
                button.setButtonText(t("FSRS_SELECT_CSV")).onClick(async () => {
                    // Create file input
                    const input = document.createElement("input");
                    input.type = "file";
                    input.accept = ".csv";

                    input.onchange = async (e) => {
                        const file = (e.target as HTMLInputElement).files?.[0];
                        if (!file) return;

                        // Hide previous result
                        resultContainer.style.display = "none";

                        try {
                            // Set plugin base path for WASM loading
                            const dataStore = DataStore.getInstance();
                            if (dataStore?.dataPath) {
                                // Get the plugin directory path relative to vault
                                const pluginBasePath = dataStore.dataPath.substring(
                                    0,
                                    dataStore.dataPath.lastIndexOf("/"),
                                );
                                fsrsOptimizer.setPluginBasePath(pluginBasePath);
                            }

                            const newParams = await fsrsOptimizer.trainFromFile(file, {
                                nextDayStartsAt: 4, // Default 4 AM
                                enableShortTerm: this.settings.enable_short_term,
                                onProgress: updateProgressUI,
                            });

                            showResult(newParams, this.settings.w);
                        } catch (error) {
                            console.error("Training failed:", error);
                            updateProgressUI({
                                status: "error",
                                current: 0,
                                total: 100,
                                message: (error as Error).message,
                            });
                            new Notice(
                                t("FSRS_TRAINING_FAILED") + ": " + (error as Error).message,
                                5000,
                            );
                        }
                    };

                    input.click();
                });
            });
    }
}
