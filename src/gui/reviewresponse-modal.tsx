// https://img.shields.io/github/v/release/chetachiezikeuzor/cMenu-Plugin
import { App, MarkdownView, Menu, MenuItem, Platform, TFile, setIcon } from "obsidian";
import { textInterval } from "src/scheduling";
import { SRSettings } from "src/settings";
import { t } from "src/lang/helpers";
// import { FlashcardModalMode } from "src/gui/flashcard-modal";
import { SrsAlgorithm } from "src/algorithms/algorithms";
import { RepetitionItem } from "src/dataStore/repetitionItem";
// import { debug } from "src/util/utils_recall";
import { TouchOnMobile } from "src/Events/touchEvent";
import { Iadapter } from "src/dataStore/adapter";
import SRPlugin from "src/main";
import { MixQueSet } from "src/dataStore/mixQueSet";
import { FlashcardReviewMode } from "src/FlashcardReviewSequencer";

export class reviewResponseModal {
    private static instance: reviewResponseModal;
    private app: App;
    public plugin: SRPlugin;
    private settings: SRSettings;
    public submitCallback: (resp: number) => void;
    private algorithm: SrsAlgorithm;
    private ownerdoc: Document;
    private vwcontainerEl: HTMLElement;
    private containerEl: HTMLElement;
    private contentEl: HTMLElement;

    barId = "reviewResponseModalBar";
    private barItemId: string = "ResponseFloatBarCommandItem";
    answerBtn: HTMLButtonElement;
    buttons: HTMLButtonElement[];
    response: HTMLDivElement;
    controls: HTMLDivElement;
    private notecontrols: HTMLDivElement;
    private skipButton: HTMLButtonElement;
    private responseInterval: number[];
    private item: RepetitionItem;
    private showInterval = true;
    private buttonTexts: string[];
    private options: string[];
    private _reviewMode: FlashcardReviewMode;

    respCallback: (resp: number) => void;
    showAnsCB: () => void;
    public cardtotalCB: () => number;
    public notetotalCB: () => number;
    public openNextCardCB: () => void;
    public openNextNoteCB: () => void;
    public barCloseHandler: () => void;
    infoButton: HTMLButtonElement;

    static getInstance() {
        return reviewResponseModal.instance;
    }

    constructor(plugin: SRPlugin, settings: SRSettings) {
        this.app = plugin.app;
        this.plugin = plugin;
        this.settings = settings;
        const algo = settings.algorithm;
        this.buttonTexts = settings.responseOptionBtnsText[algo];
        this.algorithm = SrsAlgorithm.getInstance();
        this.options = this.algorithm.srsOptions();
        reviewResponseModal.instance = this;
    }

    public display(
        item?: RepetitionItem,
        callback?: (resp: number) => Promise<void>,
        front?: boolean,
    ): void {
        const settings = this.settings;
        // this.mode = mode;

        if (!settings.reviewResponseFloatBar || !settings.autoNextNote) return;
        if (item) {
            this.item = item;
            this.responseInterval = this.algorithm.calcAllOptsIntervals(item);
        } else {
            this.item = undefined;
            this.responseInterval = null;
        }
        if (!this.hasBar() || !this.buttons) {
            // console.debug("display didn't find rrbar");
            this.build();
        }
        this.containerEl.show();
        if (callback) {
            this.respCallback = callback;
        }

        // update show text
        if (this.item.isCard && front !== false) {
            this.showQuestion();
        } else {
            this.showAnswer();
        }
    }

    build() {
        if (this.isDisplay()) return;
        // console.debug("build start...");
        // const options = this.plugin.algorithm.srsOptions();
        const optBtnCounts = this.options.length;
        let btnCols = 4;
        if (!Platform.isMobile && optBtnCounts > btnCols) {
            btnCols = optBtnCounts;
        }
        this.containerEl = createEl("div");
        this.containerEl.setAttribute("id", this.barId);
        this.containerEl.hide();
        // document.body
        //     // .querySelector(".mod-vertical.mod-root")
        //     .querySelector(".workspace-leaf.mod-active")
        //     .insertAdjacentElement("afterbegin", this.containerEl);

        const view = this.plugin.app.workspace.getActiveViewOfType(MarkdownView);
        // const view = this.plugin.app.workspace.containerEl
        //     .querySelector(".workspace-leaf.mod-active")
        //     .insertAdjacentElement("afterbegin", this.containerEl);
        view?.containerEl?.appendChild(this.containerEl);
        if (view) {
            this.vwcontainerEl = view.containerEl;
            this.ownerdoc = view.containerEl.ownerDocument;
            this.addKeysEvent();
            view.onunload = () => {
                this.close();
                view.containerEl.removeChild(this.containerEl);
            };
        }

        this.contentEl = this.containerEl.createDiv("sr-show-response");
        this.contentEl.addClass("sr-modal-content");
        this.contentEl.addClass("sr-flashcard");
        this.notecontrols = this.contentEl.createDiv();
        this.controls = this.contentEl.createDiv();

        this.response = this.contentEl.createDiv("sr-show-response");
        this.response.setAttribute("style", `grid-template-columns: ${"1fr ".repeat(btnCols)}`);

        this.buttons = [];
        this._createNoteControls();
        this.createButtons_responses();
        this.createButton_showAnswer();

        this.addMenuEvent();
        this.addTouchEvent();
        this._autoClose();
    }
    set reviewMode(reviewMode: FlashcardReviewMode) {
        this._reviewMode = reviewMode;
    }
    private async buttonClick(s: string) {
        this.hideControls();
        let mqs: MixQueSet;
        const iscard = this.item.isCard;
        if (
            this._reviewMode === FlashcardReviewMode.Review &&
            this.settings.mixCardNote &&
            this.openNextCardCB &&
            this.openNextNoteCB
        ) {
            mqs = MixQueSet.getInstance();
            MixQueSet.arbitrateCardNote(this.item, this.cardtotalCB(), this.notetotalCB());
        }

        if (iscard && this.respCallback) {
            await this.respCallback(this.options.indexOf(s));
        } else if (!iscard && this.submitCallback) {
            this.submitCallback(this.options.indexOf(s));
        }

        if (mqs) {
            if (!iscard && MixQueSet.isCard()) {
                this.openNextCardCB();
                this._updateControls(true);
            } else if (iscard && !MixQueSet.isCard()) {
                this.openNextNoteCB();
                this._updateControls(false);
            }
        }
    }

    private _createNoteControls() {
        this.notecontrols.addClass("sr-header");
        this._createCloseButton(this.notecontrols);

        const div = this.notecontrols.createDiv();
        this._createIntervalButton(div);
        this._createResetButton(div);
        this._createCardInfoButton(div);
        this._createSkipButton(div);
        div.addClass("sr-controls");
        this.notecontrols.hide();
    }

    private _createResetButton(containerEl: HTMLElement) {
        const btn = containerEl.createEl("button");
        btn.addClasses(["sr-button", "sr-reset-button"]);
        setIcon(btn, "refresh-cw");
        btn.setAttribute("aria-label", t("RESET_CARD_PROGRESS"));
        btn.addEventListener("click", () => {
            this.buttonClick(this.options[0]);
        });
    }

    private createButtons_responses() {
        this.options.forEach((opt: string, index) => {
            const btn = this.response.createEl("button");
            btn.setAttribute("id", "sr-" + opt.toLowerCase() + "-btn");
            btn.addClasses(["sr-response-button", "sr-is-hidden"]); //
            // btn.setAttribute("aria-label", "Hotkey: " + (index + 1));
            // btn.setAttribute("style", `width: calc(95%/${buttonCounts});`);
            // setIcon(btn, item.icon);
            const text = this.getTextWithInterval(index);
            btn.setText(text);
            btn.addEventListener("click", () => this.buttonClick(opt));
            this.buttons.push(btn);
            // this.response.appendChild(btn);
        });
    }

    private createButton_showAnswer() {
        // this.answerBtn = this.contentEl.createEl("button");
        this.answerBtn = this.response.createEl("button");
        this.answerBtn.setAttribute("id", "sr-show-answer");
        this.answerBtn.addClasses(["sr-response-button", "sr-show-answer-button", "sr-bg-blue"]); //
        this.answerBtn.setText(t("SHOW_ANSWER"));
        this.answerBtn.addEventListener("click", () => {
            this.hideControls();
            this.showAnsCB();
            this.showAnswer();
        });
        this.answerBtn.addClass("sr-is-hidden");
    }
    private _createCloseButton(elm: HTMLDivElement) {
        const closeButton = elm.createDiv();
        closeButton.addClasses(["sr-close-button"]); //  "sr-is-hidden"
        setIcon(closeButton, "lucide-x");
        closeButton.setAttribute("aria-label", t("CLOSE"));
        closeButton.addEventListener("click", () => {
            this.close();
            this.barCloseHandler ? this.barCloseHandler() : (this.barCloseHandler = null);
        });
        return closeButton;
    }

    private _createIntervalButton(containerEl: HTMLElement) {
        const btn = containerEl.createEl("button");
        const setIvtlIcon = () => {
            if (this.showInterval) {
                setIcon(btn, "alarm-clock-off");
                btn.setAttribute("aria-label", "click to Hide Intervals");
            } else {
                setIcon(btn, "alarm-clock");
                btn.setAttribute("aria-label", "click to Show Intervals");
            }
        };
        btn.addClasses(["sr-button", "sr-info-button"]);
        setIvtlIcon();

        btn.addEventListener("click", () => {
            this.toggleShowInterval();
            setIvtlIcon();
            this.showAnswer();
        });
    }

    private _createCardInfoButton(containerEl: HTMLElement) {
        this.infoButton = containerEl.createEl("button");
        this.infoButton.addClasses(["sr-button", "sr-info-button"]);
        setIcon(this.infoButton, "info");
        this.infoButton.setAttribute("aria-label", "View Card Info");
        this.infoButton.addEventListener("click", () => {
            const id = "obsidian-spaced-repetition-recall:view-item-info";
            // eslint-disable-next-line
            // @ts-ignore
            this.app.commands.executeCommandById(id);
        });
    }

    private _createSkipButton(containerEl: HTMLElement) {
        this.skipButton = containerEl.createEl("button");
        this.skipButton.addClasses(["sr-button", "sr-skip-button"]);
        setIcon(this.skipButton, "chevrons-right");
        this.skipButton.setAttribute("aria-label", t("SKIP"));
        this.skipButton.addEventListener("click", () => {
            this.openNextNoteCB();
        });
    }

    private _updateControls(isCard: boolean) {
        if (isCard && this.notecontrols.isShown()) {
            this.notecontrols.hide();
            this.controls.show();
        } else if (!isCard && this.controls.isShown()) {
            this.controls.hide();
            this.notecontrols.show();
        }
    }

    private hideControls() {
        if (this.notecontrols.isShown()) {
            this.notecontrols.hide();
        }
        if (this.controls?.isShown()) {
            this.controls.hide();
        }
    }

    private addMenuEvent() {
        this.containerEl.addEventListener("mouseup", showCloseMenuCB);
        const showcb = () => {
            this.toggleShowInterval();
            this.showAnswer();
        };
        const closecb = () => {
            this.close();
        };
        const menu = new Menu();
        let showitem: MenuItem;
        const isShow = () => this.showInterval;
        const triggerControls = () => {
            return this._triggerControls();
        };

        menu.addItem((item) => {
            showitem = item;
            item.onClick(showcb);
        });

        menu.addItem((item) => {
            item.setIcon("lucide-x");
            item.setTitle("Close");
            item.onClick(closecb);
        });

        function showCloseMenuCB(evt: MouseEvent) {
            if (evt.button !== 2) {
                return;
            }
            evt.cancelable && evt.preventDefault();
            triggerControls();
            return;
            if (isShow()) {
                showitem.setIcon("alarm-clock-off");
                showitem.setTitle("Hide Intervals");
            } else {
                showitem.setIcon("alarm-clock");
                showitem.setTitle("Show Intervals");
            }
            menu.showAtMouseEvent(evt);
        }
    }
    private addTouchEvent() {
        if (!Platform.isMobile) {
            return;
        }
        const touch = TouchOnMobile.create();
        touch.longClickCb = () => {
            this.toggleShowInterval();
            if (this.answerBtn.hasClass("sr-is-hidden")) {
                this.showAnswer();
            }
        };
        touch.swipUpCb = () => {
            this._triggerControls();
            // this.close();
        };

        this.containerEl.addEventListener("touchstart", touch.handleStart.bind(touch), {
            passive: true,
        });
        this.containerEl.addEventListener("touchmove", touch.handleMove.bind(touch), {
            passive: true,
        });
        this.containerEl.addEventListener("touchend", touch.handleEnd.bind(touch), {
            passive: false,
        });
    }

    private addKeysEvent() {
        this.vwcontainerEl.addEventListener("keydown", this._keydownHandler.bind(this));
    }

    private removeKeysEvent() {
        this.vwcontainerEl.removeEventListener("keydown", this._keydownHandler.bind(this));
    }

    private _keydownHandler = (e: KeyboardEvent) => {
        // Prevents any input, if the editor is preview and has fbar.
        const bar = this.vwcontainerEl.querySelector("#" + this.barId);
        // const Markdown = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (
            bar &&
            bar.checkVisibility() &&
            this.isDisplay() &&
            Iadapter.instance.app.workspace.getActiveViewOfType(MarkdownView).getMode() ===
                "preview" &&
            this.answerBtn.hasClass("sr-is-hidden")
        ) {
            const consume = () => {
                e.preventDefault();
                e.stopPropagation();
            };
            this.options.some((_opt, idx) => {
                const num = "Numpad" + idx;
                const dig = "Digit" + idx;
                if (e.code === num || e.code === dig) {
                    this.buttonClick(this.options[idx]);
                    consume();
                    return true;
                }
            });
        }
    };

    private toggleShowInterval() {
        this.showInterval = this.showInterval ? false : true;
    }

    /**
     * 菜单工具栏显隐控制
     * @returns
     */
    private _triggerControls() {
        if (!this.item.isCard) {
            if (this.notecontrols.isShown()) {
                this.notecontrols.hide();
            } else {
                this.notecontrols.show();
            }
            return false;
        }
        if (this.controls?.hasClass("sr-is-hidden") || this.controls?.isShown() === false) {
            this.controls.show();
            this.controls.removeClass("sr-is-hidden");
            return true;
        } else if (this.controls.hasChildNodes()) {
            this.controls.addClass("sr-is-hidden");
            return true;
        }
        return false;
    }

    private showAnswer() {
        // this.mode = FlashcardModalMode.Back;

        this.answerBtn.addClass("sr-is-hidden");
        this.response.removeClass("sr-is-hidden");
        // this.answerBtn.style.display = "none";
        // this.response.style.display = "grid";

        let _stIndx = 1;
        if (this.item.isCard) {
            _stIndx = 1;
        }
        this.options.slice(_stIndx).forEach((opt, index) => {
            const btn =
                this.vwcontainerEl.querySelector("#sr-" + opt.toLowerCase() + "-btn") ??
                this.buttons[_stIndx + index];
            // let text = btnText[algo][index];
            const text = this.getTextWithInterval(_stIndx + index);
            btn.setText(text);
            if (!this.item.isCard) {
                btn.removeClass("sr-is-hidden");
            }
        });
    }

    private showQuestion() {
        // this.mode = FlashcardModalMode.Front;

        this.answerBtn.removeClass("sr-is-hidden");
        this.buttons.forEach((btn, _index) => {
            btn.addClass("sr-is-hidden");
        });
        // this.responseDiv.toggleVisibility(false);       //还是会占位
    }

    private getTextWithInterval(index: number) {
        let text = this.buttonTexts[index];
        if (this.showInterval) {
            text =
                this.responseInterval == null
                    ? `${text}`
                    : Platform.isMobile
                      ? textInterval(this.responseInterval[index], true)
                      : `${text} - ${textInterval(this.responseInterval[index], false)}`;
        }
        return text;
    }

    public hasBar() {
        return this.vwcontainerEl?.querySelector("#" + this.barId) != null;
    }

    public isDisplay() {
        return this.hasBar() && this.containerEl?.isShown();
    }

    hide() {
        if (this.containerEl?.isShown()) {
            this.containerEl.hide();
        }
    }

    close() {
        const rrBar = this.vwcontainerEl?.querySelector("#" + this.barId) as HTMLElement;
        if (rrBar) {
            this.removeKeysEvent();
            rrBar.style.visibility = "hidden";
            if (rrBar.firstChild) {
                rrBar.removeChild(rrBar.firstChild);
            }
            rrBar.remove();
        }
    }

    private _autoClose() {
        //after review
        return;

        const tout = Platform.isMobile ? 5000 : 10000;
        const timmer = setInterval(() => {
            const rrBar = this.vwcontainerEl.querySelector("#" + this.barId);
            const Markdown = Iadapter.instance.app.workspace.getActiveViewOfType(MarkdownView);

            if (rrBar) {
                if (!Markdown) {
                    this.close();
                    clearInterval(timmer);
                }
            } else {
                this.close();
                clearInterval(timmer);
            }
        }, tout);
    }
}
