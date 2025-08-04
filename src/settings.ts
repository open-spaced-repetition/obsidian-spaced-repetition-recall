import { Notice, PluginSettingTab, Setting, App, Platform } from "obsidian";
import type SRPlugin from "src/main";
import { t } from "src/lang/helpers";
// import { pathMatchesPattern } from "src/utils/fs";
import { TabStructure, createTabs } from "./gui/tabs";
import { setDebugParser } from "./parser";
import { addignoreSetting } from "./settings/ignoreSetting";
import { addMultiClozeSetting } from "./settings/multiClozeSetting";

// https://github.com/martin-jw/obsidian-recall/blob/main/src/settings.ts

import { algorithms } from "./algorithms/algorithms_switch";
import { addResponseFloatBarSetting } from "src/settings/responseBarSetting";
import { DataLocation } from "./dataStore/dataLocation";
import { addDataLocationSettings } from "./settings/locationSetting";
import {
    DEFAULT_responseOptionBtnsText,
    addAlgorithmSetting,
    addAlgorithmSpecificDisplaySetting,
    addResponseButtonTextSetting,
} from "./settings/algorithmSetting";
import { addUntrackSetting, addTrackedNoteToDecksSetting } from "./settings/trackSetting";
import { buildDonation } from "./settings/donation";
import { addburySiblingSetting } from "./settings/burySiblingSetting";
import { addcardBlockIDSetting } from "./settings/cardBlockIDSetting";
import { addmixQueueSetting } from "./settings/mixQueueSetting";
import { pathMatchesPattern } from "src/utils/fs";

export interface SRSettings {
    // flashcards
    responseOptionBtnsText: Record<string, string[]>;

    flashcardTags: string[];
    convertFoldersToDecks: boolean;
    burySiblingCards: boolean;
    burySiblingCardsByNoteReview: boolean;
    multiClozeCard: boolean;
    cardBlockID: boolean;
    randomizeCardOrder: boolean;
    flashcardCardOrder: string;
    flashcardDeckOrder: string;
    convertHighlightsToClozes: boolean;
    convertBoldTextToClozes: boolean;
    convertCurlyBracketsToClozes: boolean;
    clozePatterns: string[];
    singleLineCardSeparator: string;
    singleLineReversedCardSeparator: string;
    multilineCardSeparator: string;
    multilineReversedCardSeparator: string;
    multilineCardEndMarker: string;
    editLaterTag: string;
    intervalShowHide: boolean;
    // notes
    enableNoteReviewPaneOnStartup: boolean;
    tagsToReview: string[];
    noteFoldersToIgnore: string[];
    tagsToIgnore: string[];
    openRandomNote: boolean;
    autoNextNote: boolean;
    mixDue: number;
    mixNew: number;
    mixCardNote: boolean;
    mixCard: number;
    mixNote: number;
    reviewResponseFloatBar: boolean;
    responseBarPositionPercentage: number;
    reviewingNoteDirectly: boolean;
    disableFileMenuReviewOptions: boolean;
    maxNDaysNotesReviewQueue: number;

    // UI preferences
    showRibbonIcon: boolean;
    showStatusBar: boolean;
    initiallyExpandAllSubdecksInTree: boolean;
    showContextInCards: boolean;
    showIntervalInReviewButtons: boolean;
    flashcardHeightPercentage: number;
    flashcardWidthPercentage: number;
    flashcardEasyText: string;
    flashcardGoodText: string;
    flashcardHardText: string;
    reviewButtonDelay: number;
    openViewInNewTab: boolean;

    // algorithm
    algorithm: string;
    baseEase: number;
    lapsesIntervalChange: number;
    easyBonus: number;
    loadBalance: boolean;
    maximumInterval: number;
    maxLinkFactor: number;

    // storage
    dataStore: string;
    cardCommentOnSameLine: boolean;

    // logging
    showSchedulingDebugMessages: boolean;
    showParserDebugMessages: boolean;

    // trackfile: https://github.com/martin-jw/obsidian-recall/blob/main/src/settings.ts
    dataLocation: DataLocation;
    customFolder: string;
    maxNewPerDay: number;
    repeatItems: boolean;
    trackedNoteToDecks: boolean;
    untrackWithReviewTag: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    algorithmSettings: any;

    previousRelease: string;
}

export const DEFAULT_SETTINGS: SRSettings = {
    // flashcards
    responseOptionBtnsText: DEFAULT_responseOptionBtnsText,

    flashcardTags: ["#flashcards"],
    convertFoldersToDecks: false,
    burySiblingCards: false,
    burySiblingCardsByNoteReview: false,
    multiClozeCard: false,
    cardBlockID: false,
    randomizeCardOrder: null,
    flashcardCardOrder: "DueFirstRandom",
    flashcardDeckOrder: "PrevDeckComplete_Sequential",

    convertHighlightsToClozes: true,
    convertBoldTextToClozes: false,
    convertCurlyBracketsToClozes: false,
    clozePatterns: ["==[123;;]answer[;;hint]=="],
    singleLineCardSeparator: "::",
    singleLineReversedCardSeparator: ":::",
    multilineCardSeparator: "?",
    multilineReversedCardSeparator: "??",
    multilineCardEndMarker: "",
    editLaterTag: "#edit-later",
    intervalShowHide: true,
    // notes
    enableNoteReviewPaneOnStartup: true,
    tagsToReview: ["#review"],
    noteFoldersToIgnore: ["**/*.excalidraw.md"],
    tagsToIgnore: [],
    openRandomNote: false,
    autoNextNote: false,
    mixDue: 3,
    mixNew: 2,
    mixCardNote: false,
    mixCard: 4,
    mixNote: 1,
    reviewResponseFloatBar: false,
    responseBarPositionPercentage: 5,
    reviewingNoteDirectly: false,
    disableFileMenuReviewOptions: false,
    maxNDaysNotesReviewQueue: 365,

    // UI settings
    showRibbonIcon: true,
    showStatusBar: true,
    initiallyExpandAllSubdecksInTree: false,
    showContextInCards: true,
    showIntervalInReviewButtons: true,
    flashcardHeightPercentage: Platform.isMobile ? 100 : 80,
    flashcardWidthPercentage: Platform.isMobile ? 100 : 40,
    flashcardEasyText: t("EASY"),
    flashcardGoodText: t("GOOD"),
    flashcardHardText: t("HARD"),
    reviewButtonDelay: 0,
    openViewInNewTab: false,

    // algorithm
    baseEase: 250,
    lapsesIntervalChange: 0.5,
    easyBonus: 1.3,
    loadBalance: true,
    maximumInterval: 36525,
    maxLinkFactor: 1.0,

    // storage
    // dataStore: DataStoreName.NOTES,
    dataStore: "NOTES",
    cardCommentOnSameLine: false,

    // logging
    showSchedulingDebugMessages: false,
    showParserDebugMessages: false,

    // trackfile: https://github.com/martin-jw/obsidian-recall/blob/main/src/settings.ts
    dataLocation: DataLocation.SaveOnNoteFile,
    customFolder: "",
    maxNewPerDay: -1,
    repeatItems: false,
    trackedNoteToDecks: false,
    untrackWithReviewTag: false,
    algorithm: Object.keys(algorithms)[0],
    algorithmSettings: { algorithm: Object.values(algorithms)[0].settings },
    previousRelease: "0.0.0",
};

export function upgradeSettings(settings: SRSettings) {
    if (
        settings.randomizeCardOrder != null &&
        settings.flashcardCardOrder == null &&
        settings.flashcardDeckOrder == null
    ) {
        console.log(`loadPluginData: Upgrading settings: ${settings.randomizeCardOrder}`);
        settings.flashcardCardOrder = settings.randomizeCardOrder
            ? "DueFirstRandom"
            : "DueFirstSequential";
        settings.flashcardDeckOrder = "PrevDeckComplete_Sequential";

        // After the upgrade, we don't need the old attribute any more
        settings.randomizeCardOrder = null;
    }

    if (settings.clozePatterns == null) {
        settings.clozePatterns = [];

        if (settings.convertHighlightsToClozes)
            settings.clozePatterns.push("==[123;;]answer[;;hint]==");

        if (settings.convertBoldTextToClozes)
            settings.clozePatterns.push("**[123;;]answer[;;hint]**");

        if (settings.convertCurlyBracketsToClozes)
            settings.clozePatterns.push("{{[123;;]answer[;;hint]}}");
    }
}

export class SettingsUtil {
    static isFlashcardTag(settings: SRSettings, tag: string): boolean {
        return SettingsUtil.isTagInList(settings.flashcardTags, tag);
    }

    static isPathInNoteIgnoreFolder(settings: SRSettings, path: string): boolean {
        return settings.noteFoldersToIgnore.some((folder) => pathMatchesPattern(path, folder));
    }

    static isAnyTagANoteReviewTag(settings: SRSettings, tags: string[]): boolean {
        for (const tag of tags) {
            if (
                settings.tagsToReview.some(
                    (tagToReview) => tag === tagToReview || tag.startsWith(tagToReview + "/"),
                )
            ) {
                return true;
            }
        }
        return false;
    }

    // Given a list of tags, return the subset that is in settings.tagsToReview
    static filterForNoteReviewTag(settings: SRSettings, tags: string[]): string[] {
        const result: string[] = [];
        for (const tagToReview of settings.tagsToReview) {
            if (tags.some((tag) => tag === tagToReview || tag.startsWith(tagToReview + "/"))) {
                result.push(tagToReview);
            }
        }
        return result;
    }

    private static isTagInList(tagList: string[], tag: string): boolean {
        for (const tagFromList of tagList) {
            if (tag === tagFromList || tag.startsWith(tagFromList + "/")) {
                return true;
            }
        }
        return false;
    }
}
