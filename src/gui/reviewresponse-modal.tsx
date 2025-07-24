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
        const iscard = RepItem.isCard(this.item);
        if (
            this._reviewMode === FlashcardReviewMode.Review &&
            this.settings.mixCardNote &&
            this.openNextCardCB &&
            this.openNextNoteCB
        ) {
            mqs = MixQueSet.getInstance();
            mqs.arbitrateCardNote(this.item, this.cardtotalCB(), this.notetotalCB());
        }

        if (iscard && this.respCallback) {
            await this.respCallback(this.options.indexOf(s));
        } else if (!iscard && this.submitCallback) {
            this.submitCallback(this.options.indexOf(s));
        }

        const openFile: TFile | null = Iadapter.instance.app.workspace.getActiveFile();
        if (openFile && openFile.extension === "md") {
            if (this.submitCallback) {
                this.submitCallback(openFile, this.options.indexOf(s));
            }
        }
    }

    private createButtons_responses() {
        this.options.forEach((opt: string, index) => {
            const btn = document.createElement("button");
            btn.setAttribute("id", "sr-" + opt.toLowerCase() + "-btn");
            btn.addClasses(["sr-response-button"]); //, "sr-is-hidden"
            // btn.setAttribute("aria-label", "Hotkey: " + (index + 1));
            // btn.setAttribute("style", `width: calc(95%/${buttonCounts});`);
            // setIcon(btn, item.icon);
            const text = this.getTextWithInterval(index);
            btn.setText(text);
            btn.addEventListener("click", () => this.buttonClick(opt));
            this.buttons.push(btn);
            this.response.appendChild(btn);
        });
    }

    private createButton_showAnswer() {
        this.answerBtn = this.contentEl.createDiv();
        this.answerBtn.setAttribute("id", "sr-show-answer");
        this.answerBtn.setText(t("SHOW_ANSWER"));
        this.answerBtn.addEventListener("click", () => {
            this.showAnswer();
        });
        // this.answerBtn.style.display = "block";
    }

    private addMenuEvent() {
        this.containerEl.addEventListener("mouseup", showCloseMenuCB);
        const showcb = () => {
            this.toggleShowInterval();
            this.showAnswer();
        };
        const closecb = () => {
            this.selfDestruct();
        };
        const menu = new Menu();
        let showitem: MenuItem;
        const isShow = () => this.showInterval;

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
            evt.cancelable && evt.preventDefault();
            if (isShow()) {
                showitem.setIcon("alarm-clock-off");
                showitem.setTitle("Hide Intervals");
            } else {
                showitem.setIcon("alarm-clock");
                showitem.setTitle("Show Intervals");
            }
            if (typeof evt === "object") {
                if (evt.button === 2) {
                    // right-click
                    menu.showAtMouseEvent(evt);
                }
            }
        }
    }
    private addTouchEvent() {
        if (!Platform.isMobile) {
            return;
        }
        const touch = TouchOnMobile.create();
        touch.showcb = () => {
            this.toggleShowInterval();
            this.showAnswer();
        };
        touch.closecb = () => {
            this.selfDestruct();
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
        const bar = document.getElementById(this.barId);
        // const Markdown = app.workspace.getActiveViewOfType(MarkdownView);

        document.body.onkeydown = (e) => {
            if (
                bar &&
                bar.checkVisibility() &&
                this.isDisplay() &&
                Iadapter.instance.app.workspace.getActiveViewOfType(MarkdownView).getMode() ===
                    "preview"
            ) {
                const consume = () => {
                    e.preventDefault();
                    e.stopPropagation();
                };
                this.options.map((_opt, idx) => {
                    const num = "Numpad" + idx;
                    const dig = "Digit" + idx;
                    if (e.code === num || e.code === dig) {
                        this.buttonClick(this.options[idx]);
                        consume();
                    }
                });
            }
        };
    }

    private toggleShowInterval() {
        this.showInterval = this.showInterval ? false : true;
    }

    private showAnswer() {
        // this.mode = FlashcardModalMode.Back;

        this.answerBtn.style.display = "none";
        this.response.style.display = "grid";

        this.options.forEach((opt, index) => {
            const btn = document.getElementById("sr-" + opt.toLowerCase() + "-btn");
            // let text = btnText[algo][index];
            const text = this.getTextWithInterval(index);
            btn.setText(text);
        });
    }

    private showQuestion() {
        // this.mode = FlashcardModalMode.Front;

        this.answerBtn.style.display = "block";
        this.response.style.display = "none";
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

    public isDisplay() {
        return document.getElementById(this.barId) != null;
        // return this.containerEl.style.visibility === "visible";
    }

    selfDestruct() {
        const rrBar = document.getElementById(this.barId);
        if (rrBar) {
            rrBar.style.visibility = "hidden";
            if (rrBar.firstChild) {
                rrBar.removeChild(rrBar.firstChild);
            }
            rrBar.remove();
        }
    }

    private autoClose() {
        //after review
        const tout = Platform.isMobile ? 5000 : 10000;
        const timmer = setInterval(() => {
            const rrBar = document.getElementById(this.barId);
            const Markdown = Iadapter.instance.app.workspace.getActiveViewOfType(MarkdownView);
            if (rrBar) {
                if (!Markdown) {
                    this.selfDestruct();
                    clearInterval(timmer);
                }
            }
        }, tout);
    }
}
