import { App, MarkdownView, Notice, Platform, setIcon } from "obsidian";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import type SRPlugin from "src/main";
import { SRSettings } from "src/settings";
import { textInterval, ReviewResponse } from "src/scheduling";
import { t } from "src/lang/helpers";
import { Card } from "../Card";
import { CardListType, Deck } from "../Deck";
import { CardType, Question } from "../Question";
import {
    FlashcardReviewMode,
    IFlashcardReviewSequencer as IFlashcardReviewSequencer,
} from "src/flashcard-review-sequencer";
import { Note } from "src/Note";
import { RenderMarkdownWrapper } from "src/util/RenderMarkdownWrapper";
import { CardScheduleInfo } from "src/CardSchedule";
import { FlashcardMode } from "./sr-modal";
import { RepetitionItem } from "src/dataStore/repetitionItem";
import { SrTFile } from "src/SRFile";
import { ItemInfoModal } from "./info";
import { DataLocation } from "src/dataStore/dataLocation";
import { debug } from "src/util/utils_recall";
import { now } from "moment";

export class CardUI {
    public app: App;
    public plugin: SRPlugin;
    public mode: FlashcardMode;

    public view: HTMLDivElement;

    public infoSection: HTMLDivElement;
    public deckProgressInfo: HTMLDivElement;

    public chosenDeckInfo: HTMLDivElement;
    public chosenDeckName: HTMLDivElement;

    public chosenDeckCounterWrapper: HTMLDivElement;
    public chosenDeckCounterDivider: HTMLDivElement;

    public chosenDeckCardCounterWrapper: HTMLDivElement;
    public chosenDeckCardCounter: HTMLDivElement;
    public chosenDeckCardCounterIcon: HTMLDivElement;

    public chosenDeckSubDeckCounterWrapper: HTMLDivElement;
    public chosenDeckSubDeckCounter: HTMLDivElement;
    public chosenDeckSubDeckCounterIcon: HTMLDivElement;

    public currentDeckInfo: HTMLDivElement;
    public currentDeckName: HTMLDivElement;

    public currentDeckCounterWrapper: HTMLDivElement;

    public currentDeckCounterDivider: HTMLDivElement;

    public currentDeckCardCounterWrapper: HTMLDivElement;
    public currentDeckCardCounter: HTMLDivElement;
    public currentDeckCardCounterIcon: HTMLDivElement;

    public cardContext: HTMLElement;

    public content: HTMLDivElement;

    public controls: HTMLDivElement;
    public editButton: HTMLButtonElement;
    public resetButton: HTMLButtonElement;
    public infoButton: HTMLButtonElement;
    public skipButton: HTMLButtonElement;

    public response: HTMLDivElement;
    public responseBtns: HTMLButtonElement[];
    public hardButton: HTMLButtonElement;
    public goodButton: HTMLButtonElement;
    public easyButton: HTMLButtonElement;
    public answerButton: HTMLButtonElement;
    public openNoteFileButton: HTMLElement;
    public lastPressed: number;

    private chosenDeck: Deck | null;
    private totalCardsInSession: number = 0;
    private totalDecksInSession: number = 0;

    private currentDeck: Deck | null;
    private previousDeck: Deck | null;
    private currentDeckTotalCardsInQueue: number = 0;

    private reviewSequencer: IFlashcardReviewSequencer;
    private settings: SRSettings;
    private reviewMode: FlashcardReviewMode;
    private backToDeck: () => void;
    private editClickHandler: () => void;

    public cardItem: RepetitionItem;
    public options: string[];
    private _previousCard: Card;

    constructor(
        app: App,
        plugin: SRPlugin,
        settings: SRSettings,
        reviewSequencer: IFlashcardReviewSequencer,
        reviewMode: FlashcardReviewMode,
        view: HTMLDivElement,
        backToDeck: () => void,
        editClickHandler: () => void,
    ) {
        // Init properties
        this.app = app;
        this.plugin = plugin;
        this.options = this.plugin.algorithm.srsOptions();
        this.settings = settings;
        this.reviewSequencer = reviewSequencer;
        this.reviewMode = reviewMode;
        this.backToDeck = backToDeck;
        this.editClickHandler = editClickHandler;
        this.view = view;
        this.chosenDeck = null;

        // Build ui
        this.init();
    }

    // #region -> public methods

    /**
     * Initializes all static elements in the FlashcardView
     */
    init() {
        this.view.addClasses(["sr-flashcard", "sr-is-hidden"]);

        this.controls = this.view.createDiv();
        this.controls.addClass("sr-controls");

        this._createCardControls();

        this._createInfoSection();

        this.content = this.view.createDiv();
        this.content.addClass("sr-content");

        this.response = this.view.createDiv();
        this.response.addClass("sr-response");

        this._createResponseButtons();
    }

    /**
     * Shows the FlashcardView if it is hidden
     */
    async show(chosenDeck: Deck) {
        // Prevents rest of code, from running if this was executed multiple times after one another
        if (!this.view.hasClass("sr-is-hidden")) {
            return;
        }

        this.chosenDeck = chosenDeck;
        const deckStats = this.reviewSequencer.getDeckStats(chosenDeck.getTopicPath());
        this.totalCardsInSession = deckStats.cardsInQueueCount;
        this.totalDecksInSession = deckStats.decksInQueueOfThisDeckCount;

        await this._drawContent();

        this.view.removeClass("sr-is-hidden");
        document.addEventListener("keydown", this._keydownHandler);
    }

    /**
     * Refreshes all dynamic elements
     */
    async refresh() {
        await this._drawContent();
    }

    /**
     * Hides the FlashcardView if it is visible
     */
    hide() {
        // Prevents the rest of code, from running if this was executed multiple times after one another
        if (this.view.hasClass("sr-is-hidden")) {
            return;
        }

        document.removeEventListener("keydown", this._keydownHandler);
        this.view.addClass("sr-is-hidden");
    }

    /**
     * Closes the FlashcardView
     */
    close() {
        this.hide();
        document.removeEventListener("keydown", this._keydownHandler);
    }

    // #region -> Functions & helpers

    private async _drawContent() {
        this.resetButton.disabled = true;

        // Update current deck info
        this.mode = FlashcardMode.Front;
        this.previousDeck = this.currentDeck;
        this.currentDeck = this.reviewSequencer.currentDeck;
        if (this.previousDeck !== this.currentDeck) {
            const currentDeckStats = this.reviewSequencer.getDeckStats(
                this.currentDeck.getTopicPath(),
            );
            this.currentDeckTotalCardsInQueue = currentDeckStats.cardsInQueueOfThisDeckCount;
        }

        this._updateInfoBar(this.chosenDeck, this.currentDeck);

        // Update card content
        this.content.empty();
        const wrapper: RenderMarkdownWrapper = new RenderMarkdownWrapper(
            this.app,
            this.plugin,
            this._currentNote.filePath,
        );

        await wrapper.renderMarkdownWrapper(
            this._currentCard.front.trimStart(),
            this.content,
            this._currentQuestion.questionText.textDirection,
        );
        // Set scroll position back to top
        this.content.scrollTop = 0;

        // Update response buttons
        this._resetResponseButtons();
    }

    private get _currentCard(): Card {
        return this.reviewSequencer.currentCard;
    }

    private get _currentQuestion(): Question {
        return this.reviewSequencer.currentQuestion;
    }

    private get _currentNote(): Note {
        return this.reviewSequencer.currentNote;
    }

    private async _processReview(response: ReviewResponse): Promise<void> {
        const timeNow = now();
        if (
            this.lastPressed &&
            timeNow - this.lastPressed < this.plugin.data.settings.reviewButtonDelay
        ) {
            return;
        }
        this.lastPressed = timeNow;

        await this.reviewSequencer.processReview(response);
        await this._showNextCard();
    }

    private async _showNextCard(): Promise<void> {
        if (this._currentCard != null) {
            await this.refresh();
            if (
                this?._previousCard &&
                this._previousCard.isMultiCloze &&
                this._currentCard.isMultiCloze &&
                this._currentCard !== this._currentCard.getFirstClozeCard()
            ) {
                this._showAnswer();
            }
        } else this.backToDeck();
    }

    // #region -> Controls

    private _createCardControls() {
        this._createOpenFileButton();
        this._createEditButton();
        this._createResetButton();
        this._createCardInfoButton();
        this._createSkipButton();
    }

    private _createOpenFileButton() {
        this.openNoteFileButton = this.controls.createEl("button");
        this.openNoteFileButton.addClass("sr-flashcard-menu-item");
        setIcon(this.openNoteFileButton, "file-edit");
        this.openNoteFileButton.setAttribute("aria-label", t("OPEN_NOTE"));
        this.openNoteFileButton.addEventListener("click", async () => {
            const activeLeaf = this.plugin.app.workspace.getLeaf("tab");
            const noteFile = this._currentCard.question.note.file as SrTFile;
            await activeLeaf.openFile(noteFile.file);
            if (activeLeaf.view instanceof MarkdownView) {
                const activeView = activeLeaf.view;
                const pos = {
                    line: this._currentCard.question.lineNo,
                    ch: 0,
                };
                // const posEnd = {}
                activeView.editor.setCursor(pos);
                if (activeView.getMode() === "preview") {
                    activeView.currentMode.applyScroll(pos.line);
                } else {
                    activeView.editor.scrollIntoView(
                        {
                            from: pos,
                            to: pos,
                        },
                        true,
                    );
                }
            }
        });
    }

    private _createEditButton() {
        this.editButton = this.controls.createEl("button");
        this.editButton.addClasses(["sr-button", "sr-edit-button"]);
        setIcon(this.editButton, "edit");
        this.editButton.setAttribute("aria-label", t("EDIT_CARD"));
        this.editButton.addEventListener("click", async () => {
            this.editClickHandler();
        });
    }

    private _createResetButton() {
        this.resetButton = this.controls.createEl("button");
        this.resetButton.addClasses(["sr-button", "sr-reset-button"]);
        setIcon(this.resetButton, "refresh-cw");
        this.resetButton.setAttribute("aria-label", t("RESET_CARD_PROGRESS"));
        this.resetButton.addEventListener("click", () => {
            this._processReview(ReviewResponse.Reset);
        });
        this.responseBtns = [];
        this.responseBtns.push(this.resetButton);
    }

    private _createCardInfoButton() {
        this.infoButton = this.controls.createEl("button");
        this.infoButton.addClasses(["sr-button", "sr-info-button"]);
        setIcon(this.infoButton, "info");
        this.infoButton.setAttribute("aria-label", "View Card Info");
        this.infoButton.addEventListener("click", async () => {
            this._displayCurrentCardInfoNotice();
            const srfile = this._currentNote.file as SrTFile;
            const store = this.plugin.store;
            const id = this._currentCard.Id;
            const infoM = new ItemInfoModal(this.plugin, srfile.file, store.getItembyID(id));
            infoM.open();
        });
    }

    private _createSkipButton() {
        this.skipButton = this.controls.createEl("button");
        this.skipButton.addClasses(["sr-button", "sr-skip-button"]);
        setIcon(this.skipButton, "chevrons-right");
        this.skipButton.setAttribute("aria-label", t("SKIP"));
        this.skipButton.addEventListener("click", () => {
            this._skipCurrentCard();
        });
    }

    private async _skipCurrentCard(): Promise<void> {
        this.reviewSequencer.skipCurrentCard();
        await this._showNextCard();
    }

    private _displayCurrentCardInfoNotice() {
        const schedule = this._currentCard.scheduleInfo;

        const currentEaseStr = t("CURRENT_EASE_HELP_TEXT") + (schedule?.ease ?? t("NEW"));
        const currentIntervalStr =
            t("CURRENT_INTERVAL_HELP_TEXT") + textInterval(schedule?.interval, false);
        const generatedFromStr = t("CARD_GENERATED_FROM", {
            notePath: this._currentQuestion.note.filePath,
        });

        new Notice(currentEaseStr + "\n" + currentIntervalStr + "\n" + generatedFromStr);
    }

    // #region -> Deck Info

    private _createInfoSection() {
        this.infoSection = this.view.createDiv();
        this.infoSection.addClass("sr-info-section");

        this.deckProgressInfo = this.infoSection.createDiv();
        this.deckProgressInfo.addClass("sr-deck-progress-info");

        this.chosenDeckInfo = this.deckProgressInfo.createDiv();
        this.chosenDeckInfo.addClass("sr-chosen-deck-info");
        this.chosenDeckName = this.chosenDeckInfo.createDiv();
        this.chosenDeckName.addClass("sr-chosen-deck-name");

        this.chosenDeckCounterWrapper = this.chosenDeckInfo.createDiv();
        this.chosenDeckCounterWrapper.addClass("sr-chosen-deck-counter-wrapper");

        this.chosenDeckCounterDivider = this.chosenDeckCounterWrapper.createDiv();
        this.chosenDeckCounterDivider.addClass("sr-chosen-deck-counter-divider");

        this.chosenDeckCardCounterWrapper = this.chosenDeckCounterWrapper.createDiv();
        this.chosenDeckCardCounterWrapper.addClass("sr-chosen-deck-card-counter-wrapper");

        this.chosenDeckCardCounter = this.chosenDeckCardCounterWrapper.createDiv();
        this.chosenDeckCardCounter.addClass("sr-chosen-deck-card-counter");

        this.chosenDeckCardCounterIcon = this.chosenDeckCardCounterWrapper.createDiv();
        this.chosenDeckCardCounterIcon.addClass("sr-chosen-deck-card-counter-icon");
        setIcon(this.chosenDeckCardCounterIcon, "credit-card");

        this.chosenDeckSubDeckCounterWrapper = this.chosenDeckCounterWrapper.createDiv();
        this.chosenDeckSubDeckCounterWrapper.addClass("sr-is-hidden");
        this.chosenDeckSubDeckCounterWrapper.addClass("sr-chosen-deck-subdeck-counter-wrapper");

        this.chosenDeckSubDeckCounter = this.chosenDeckSubDeckCounterWrapper.createDiv();
        this.chosenDeckSubDeckCounter.addClass("sr-chosen-deck-subdeck-counter");

        this.chosenDeckSubDeckCounterIcon = this.chosenDeckSubDeckCounterWrapper.createDiv();
        this.chosenDeckSubDeckCounterIcon.addClass("sr-chosen-deck-subdeck-counter-icon");
        setIcon(this.chosenDeckSubDeckCounterIcon, "layers");

        this.currentDeckInfo = this.deckProgressInfo.createDiv();
        this.currentDeckInfo.addClass("sr-is-hidden");
        this.currentDeckInfo.addClass("sr-current-deck-info");

        this.currentDeckName = this.currentDeckInfo.createDiv();
        this.currentDeckName.addClass("sr-current-deck-name");

        this.currentDeckCounterWrapper = this.currentDeckInfo.createDiv();
        this.currentDeckCounterWrapper.addClass("sr-current-deck-counter-wrapper");

        this.currentDeckCounterDivider = this.currentDeckCounterWrapper.createDiv();
        this.currentDeckCounterDivider.addClass("sr-current-deck-counter-divider");

        this.currentDeckCardCounterWrapper = this.currentDeckCounterWrapper.createDiv();
        this.currentDeckCardCounterWrapper.addClass("sr-current-deck-card-counter-wrapper");

        this.currentDeckCardCounter = this.currentDeckCardCounterWrapper.createDiv();
        this.currentDeckCardCounter.addClass("sr-current-deck-card-counter");
        this.currentDeckCardCounterIcon = this.currentDeckCardCounterWrapper.createDiv();
        this.currentDeckCardCounterIcon.addClass("sr-current-deck-card-counter-icon");
        setIcon(this.currentDeckCardCounterIcon, "credit-card");

        if (this.settings.showContextInCards) {
            this.cardContext = this.infoSection.createDiv();
            this.cardContext.addClass("sr-context");
        }
    }

    private _updateInfoBar(chosenDeck: Deck, currentDeck: Deck) {
        this._updateChosenDeckInfo(chosenDeck);
        this._updateCurrentDeckInfo(chosenDeck, currentDeck);
        this._updateCardContext();
    }

    private _updateChosenDeckInfo(chosenDeck: Deck) {
        const chosenDeckStats = this.reviewSequencer.getDeckStats(chosenDeck.getTopicPath());

        this.chosenDeckName.setText(`${chosenDeck.deckName}`);
        this.chosenDeckCardCounter.setText(
            `${this.totalCardsInSession - chosenDeckStats.cardsInQueueCount}/${this.totalCardsInSession}`,
        );

        if (chosenDeck.subdecks.length === 0) {
            if (!this.chosenDeckSubDeckCounterWrapper.hasClass("sr-is-hidden")) {
                this.chosenDeckSubDeckCounterWrapper.addClass("sr-is-hidden");
            }
            return;
        }

        if (this.chosenDeckSubDeckCounterWrapper.hasClass("sr-is-hidden")) {
            this.chosenDeckSubDeckCounterWrapper.removeClass("sr-is-hidden");
        }

        this.chosenDeckSubDeckCounter.setText(
            `${this.totalDecksInSession - chosenDeckStats.decksInQueueOfThisDeckCount}/${this.totalDecksInSession}`,
        );
    }

    private _updateCurrentDeckInfo(chosenDeck: Deck, currentDeck: Deck) {
        if (chosenDeck.subdecks.length === 0) {
            if (!this.currentDeckInfo.hasClass("sr-is-hidden")) {
                this.currentDeckInfo.addClass("sr-is-hidden");
            }
            return;
        }

        if (this.currentDeckInfo.hasClass("sr-is-hidden")) {
            this.currentDeckInfo.removeClass("sr-is-hidden");
        }

        this.currentDeckName.setText(`${currentDeck.deckName}`);

        const isRandomMode = this.settings.flashcardCardOrder === "EveryCardRandomDeckAndCard";
        if (!isRandomMode) {
            const currentDeckStats = this.reviewSequencer.getDeckStats(currentDeck.getTopicPath());
            this.currentDeckCardCounter.setText(
                `${this.currentDeckTotalCardsInQueue - currentDeckStats.cardsInQueueOfThisDeckCount}/${this.currentDeckTotalCardsInQueue}`,
            );
        }
    }

    private _updateCardContext() {
        if (!this.settings.showContextInCards) {
            this.cardContext.setText("");
            return;
        }
        this.cardContext.setText(
            ` ${this._formatQuestionContextText(this._currentQuestion.questionContext)}`,
        );
    }

    private _formatQuestionContextText(questionContext: string[]): string {
        const separator: string = " > ";
        let result = this._currentNote.file.basename;
        questionContext.forEach((context) => {
            // Check for links trim [[ ]]
            if (context.startsWith("[[") && context.endsWith("]]")) {
                context = context.replace("[[", "").replace("]]", "");
                // Use replacement text if any
                if (context.contains("|")) {
                    context = context.split("|")[1];
                }
            }
            result += separator + context;
        });
        return result;
    }

    // #region -> Response
    private _createResponseBtns() {
        const optBtnCounts = this.plugin.algorithm.srsOptions().length;
        let btnCols = 4;
        if (!Platform.isMobile && optBtnCounts > btnCols) {
            btnCols = optBtnCounts;
        }
        for (let i = 1; i < this.options.length; i++) {
            this.responseBtns.push(document.createElement("button"));
            this.responseBtns[i].setAttribute("id", "sr-" + this.options[i].toLowerCase() + "-btn");
            this.responseBtns[i].addClasses(["sr-response-button", "sr-is-hidden"]);
            this.responseBtns[i].setText(this.plugin.data.settings.flashcardHardText);
            this.responseBtns[i].addEventListener("click", () => {
                this._processReview(i);
            });
            this.response.appendChild(this.responseBtns[i]);
        }
        this.hardButton = this.responseBtns[1];
        this.goodButton = this.responseBtns.at(-2);
        this.easyButton = this.responseBtns.last();
    }

    private _setupResponseBtns(btnTexts: string[]) {
        const store = this.plugin.store;
        const cardItem = store.getItembyID(this._currentCard.Id);
        // console.debug("item:", cardItem);
        const intervals = this.plugin.algorithm.calcAllOptsIntervals(cardItem);

        if (Platform.isMobile) {
            for (let i = 1; i < this.responseBtns.length; i++) {
                this.responseBtns[i].setText(textInterval(intervals[i], true));
            }
        } else {
            for (let i = 1; i < this.responseBtns.length; i++) {
                this.responseBtns[i].setText(
                    `${btnTexts[i]} - ${textInterval(intervals[i], false)}`,
                );
            }
        }
    }

    private _createResponseButtons() {
        this._createShowAnswerButton();
        this._createResponseBtns();
        // this._createHardButton();
        // this._createGoodButton();
        // this._createEasyButton();
    }

    private _resetResponseButtons() {
        // Sets all buttons in to their default state
        this.answerButton.removeClass("sr-is-hidden");
        this.hardButton.addClass("sr-is-hidden");
        this.goodButton.addClass("sr-is-hidden");
        this.easyButton.addClass("sr-is-hidden");
    }

    private _createShowAnswerButton() {
        this.answerButton = this.response.createEl("button");
        this.answerButton.addClasses(["sr-response-button", "sr-show-answer-button", "sr-bg-blue"]);
        this.answerButton.setText(t("SHOW_ANSWER"));
        this.answerButton.addEventListener("click", () => {
            this._showAnswer();
        });
    }

    private _createHardButton() {
        this.hardButton = this.response.createEl("button");
        this.hardButton.addClasses([
            "sr-response-button",
            "sr-hard-button",
            "sr-bg-red",
            "sr-is-hidden",
        ]);
        this.hardButton.setText(this.settings.flashcardHardText);
        this.hardButton.addEventListener("click", () => {
            this._processReview(ReviewResponse.Hard);
        });
    }

    private _createGoodButton() {
        this.goodButton = this.response.createEl("button");
        this.goodButton.addClasses([
            "sr-response-button",
            "sr-good-button",
            "sr-bg-blue",
            "sr-is-hidden",
        ]);
        this.goodButton.setText(this.settings.flashcardGoodText);
        this.goodButton.addEventListener("click", () => {
            this._processReview(ReviewResponse.Good);
        });
    }

    private _createEasyButton() {
        this.easyButton = this.response.createEl("button");
        this.easyButton.addClasses([
            "sr-response-button",
            "sr-hard-button",
            "sr-bg-green",
            "sr-is-hidden",
        ]);
        this.easyButton.setText(this.settings.flashcardEasyText);
        this.easyButton.addEventListener("click", () => {
            this._processReview(ReviewResponse.Easy);
        });
    }

    private _setupEaseButton(
        button: HTMLElement,
        buttonName: string,
        reviewResponse: ReviewResponse,
    ) {
        const schedule: CardScheduleInfo = this.reviewSequencer.determineCardSchedule(
            reviewResponse,
            this._currentCard,
        );
        const interval: number = schedule.interval;

        if (this.settings.showIntervalInReviewButtons) {
            if (Platform.isMobile) {
                button.setText(textInterval(interval, true));
            } else {
                button.setText(`${buttonName} - ${textInterval(interval, false)}`);
            }
        } else {
            button.setText(buttonName);
        }
    }

    private _showAnswer(): void {
        const timeNow = now();
        if (
            this.lastPressed &&
            timeNow - this.lastPressed < this.plugin.data.settings.reviewButtonDelay
        ) {
            return;
        }
        this.lastPressed = timeNow;

        this.mode = FlashcardMode.Back;
        this._previousCard =
            this._currentCard?.multiClozeIndex >= 0 ? this._currentCard : undefined;

        this.resetButton.disabled = false;

        // Show answer text
        if (this._currentQuestion.questionType !== CardType.Cloze) {
            const hr: HTMLElement = document.createElement("hr");
            hr.addClass("sr-card-divide");
            this.content.appendChild(hr);
        } else {
            this.content.empty();
        }

        const wrapper: RenderMarkdownWrapper = new RenderMarkdownWrapper(
            this.app,
            this.plugin,
            this._currentNote.filePath,
        );
        wrapper.renderMarkdownWrapper(
            this._currentCard.back,
            this.content,
            this._currentQuestion.questionText.textDirection,
        );

        // Show response buttons
        this.answerButton.addClass("sr-is-hidden");
        this.hardButton.removeClass("sr-is-hidden");
        this.easyButton.removeClass("sr-is-hidden");

        const settings = this.settings;
        const algo = settings.algorithm;
        const btnTexts = settings.responseOptionBtnsText[algo];

        if (this.reviewMode == FlashcardReviewMode.Cram) {
            // Same for mobile/desktop
            this.response.addClass("is-cram");
            for (let i = 2; i < this.responseBtns.length - 1; i++) {
                this.responseBtns[i].addClass("sr-is-hidden");
            }
            // this.hardButton.setText(`${this.settings.flashcardHardText}`);
            // this.easyButton.setText(`${this.settings.flashcardEasyText}`);
            this.hardButton.setText(`${btnTexts[1]}`);
            this.easyButton.setText(`${btnTexts.last()}`);
            return;
        } else {
            for (let i = 2; i < this.responseBtns.length - 1; i++) {
                this.responseBtns[i].removeClass("sr-is-hidden");
            }
        }
        if (!settings.intervalShowHide) {
            for (let i = 1; i < this.responseBtns.length; i++) {
                this.responseBtns[i].setText(`${btnTexts[i]}`);
            }
        } else if (settings.dataLocation !== DataLocation.SaveOnNoteFile) {
            this._setupResponseBtns(btnTexts);
            const item = this.plugin.store.getItembyID(this._currentCard.Id);
            if (
                item.nextReview > Date.now() &&
                this._currentCard.hasSchedule &&
                !this._currentCard.scheduleInfo.isDue()
            ) {
                debug("复习了还没到期的卡片" + item);
            }
        } else {
            this.goodButton.removeClass("sr-is-hidden");
            this._setupEaseButton(
                this.hardButton,
                this.settings.flashcardHardText,
                ReviewResponse.Hard,
            );
            this._setupEaseButton(
                this.goodButton,
                this.settings.flashcardGoodText,
                ReviewResponse.Good,
            );
            this._setupEaseButton(
                this.easyButton,
                this.settings.flashcardEasyText,
                ReviewResponse.Easy,
            );
        }
    }

    private _keydownHandler = (e: KeyboardEvent) => {
        // Prevents any input, if the edit modal is open or if the view is not in focus
        if (
            document.activeElement.nodeName === "TEXTAREA" ||
            this.mode === FlashcardMode.Closed ||
            !this.plugin.getSRInFocusState()
        ) {
            return;
        }

        const consumeKeyEvent = () => {
            e.preventDefault();
            e.stopPropagation();
        };

        switch (e.code) {
            case "KeyS":
                this._skipCurrentCard();
                consumeKeyEvent();
                break;
            case "Space":
                if (this.mode === FlashcardMode.Front) {
                    this._showAnswer();
                    consumeKeyEvent();
                } else if (this.mode === FlashcardMode.Back) {
                    this._processReview(ReviewResponse.Good);
                    consumeKeyEvent();
                }
                break;
            case "Enter":
            case "NumpadEnter":
                if (this.mode !== FlashcardMode.Front) {
                    break;
                }
                this._showAnswer();
                consumeKeyEvent();
                break;
            case "Numpad1":
            case "Digit1":
                if (this.mode !== FlashcardMode.Back) {
                    break;
                }
                this._processReview(ReviewResponse.Hard);
                consumeKeyEvent();
                break;
            case "Numpad2":
            case "Digit2":
                if (this.mode !== FlashcardMode.Back) {
                    break;
                }
                this._processReview(ReviewResponse.Good);
                consumeKeyEvent();
                break;
            case "Numpad3":
            case "Digit3":
                if (this.mode !== FlashcardMode.Back) {
                    break;
                }
                this._processReview(ReviewResponse.Easy);
                consumeKeyEvent();
                break;
            case "Numpad0":
            case "Digit0":
                if (this.mode !== FlashcardMode.Back) {
                    break;
                }
                this._processReview(ReviewResponse.Reset);
                consumeKeyEvent();
                break;
            default:
                break;
        }
    };
}
