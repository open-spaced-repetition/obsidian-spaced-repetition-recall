import { App, Modal, setIcon } from "obsidian";

import { Deck } from "src/deck";
import {
    FlashcardReviewMode,
    IFlashcardReviewSequencer as IFlashcardReviewSequencer,
} from "src/flashcard-review-sequencer";
import { CardUI } from "src/gui/card-ui";
import { DeckUI } from "src/gui/deck-ui";
import { FlashcardEditModal } from "src/gui/edit-modal";
import { t } from "src/lang/helpers";
import type SRPlugin from "src/main";
import { Question } from "src/question";
import { SRSettings } from "src/settings";

export enum FlashcardMode {
    Deck,
    Front,
    Back,
    Closed,
}

export class FlashcardModal extends Modal {
    private static _instance: FlashcardModal;
    public plugin: SRPlugin;
    public mode: FlashcardMode;
    private reviewSequencer: IFlashcardReviewSequencer;
    private settings: SRSettings;
    private reviewMode: FlashcardReviewMode;
    private deckView: DeckUI;
    private flashcardView: CardUI;
    public backButton: HTMLDivElement;

    constructor(
        app: App,
        plugin: SRPlugin,
        settings: SRSettings,
        reviewSequencer: IFlashcardReviewSequencer,
        reviewMode: FlashcardReviewMode,
    ) {
        super(app);

        // Init properties
        this.plugin = plugin;
        this.settings = settings;
        this.reviewSequencer = reviewSequencer;
        this.reviewMode = reviewMode;

        // Setup base containers
        this.modalEl.style.height = this.settings.flashcardHeightPercentage + "%";
        this.modalEl.style.maxHeight = this.settings.flashcardHeightPercentage + "%";
        this.modalEl.style.width = this.settings.flashcardWidthPercentage + "%";
        this.modalEl.style.maxWidth = this.settings.flashcardWidthPercentage + "%";
        this.modalEl.setAttribute("id", "sr-modal");

        if (
            this.settings.flashcardHeightPercentage >= 100 ||
            this.settings.flashcardWidthPercentage >= 100
        ) {
            this.modalEl.style.borderRadius = "0";
        }

        this.contentEl.addClass("sr-modal-content");

        // Init static elements in views
        this.deckView = new DeckUI(
            this.plugin,
            this.settings,
            this.reviewSequencer,
            this.contentEl.createDiv(),
            this._startReviewOfDeck.bind(this),
        );

        this.flashcardView = new CardUI(
            this.app,
            this.plugin,
            this.settings,
            this.reviewSequencer,
            this.reviewMode,
            this.contentEl.createDiv(),
            this.contentEl,
            this._showDecksList.bind(this),
            this._doEditQuestionText.bind(this),
        );

        FlashcardModal._instance = this;
    }

    static get instance() {
        return FlashcardModal._instance;
    }

    onOpen(): void {
        this._createBackButton();
        this._showDecksList();
    }

    onClose(): void {
        this.plugin.setSRViewInFocus(false);
        this.deckView.close();
        if (this.mode === FlashcardMode.Deck) {
            this.flashcardView.close();
        }
        this.mode = FlashcardMode.Closed;
    }

    private _showDecksList(): void {
        this._hideFlashcard();
        this.mode = FlashcardMode.Deck;
        this.deckView.show();
    }

    private _hideDecksList(): void {
        this.deckView.hide();
    }

    private _showFlashcard(deck: Deck): void {
        this.plugin.setSRViewInFocus(true);
        this._hideDecksList();
        this.mode = FlashcardMode.Front;
        this.flashcardView.show(deck);
        if (this.settings.mdView) this.close();
    }

    private _hideFlashcard(): void {
        this.flashcardView.hide();
    }

    private _startReviewOfDeck(deck: Deck) {
        this.reviewSequencer.setCurrentDeck(deck.getTopicPath());
        if (this.reviewSequencer.hasCurrentCard) {
            this._showFlashcard(deck);
            this.backButton.removeClass("sr-is-hidden");
        } else {
            this._showDecksList();
        }
    }

    private async _doEditQuestionText(): Promise<void> {
        const currentQ: Question = this.reviewSequencer.currentQuestion;

        // Just the question/answer text; without any preceding topic tag
        const textPrompt = currentQ.questionText.actualQuestion;

        const editModal = FlashcardEditModal.Prompt(
            this.app,
            textPrompt,
            currentQ.questionText.textDirection,
        );
        editModal
            .then(async (modifiedCardText) => {
                this.reviewSequencer.updateCurrentQuestionText(modifiedCardText);
            })
            .catch((reason) => console.log(reason));
    }

    private _createBackButton() {
        this.backButton = this.modalEl.createDiv();
        this.backButton.addClasses(["sr-back-button", "sr-is-hidden"]);
        setIcon(this.backButton, "arrow-left");
        this.backButton.setAttribute("aria-label", t("BACK"));
        this.backButton.addEventListener("click", () => {
            this.backButton.addClass("sr-is-hidden");
            this._showDecksList();
        });
    }
}
