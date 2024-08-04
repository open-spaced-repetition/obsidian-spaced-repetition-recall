// https://img.shields.io/github/v/release/chetachiezikeuzor/cMenu-Plugin
import { App, MarkdownView, Menu, MenuItem, Platform, TFile } from "obsidian";
import { textInterval } from "src/scheduling";
import { SRSettings } from "src/settings";
import { t } from "src/lang/helpers";
// import { FlashcardModalMode } from "src/gui/flashcard-modal";
import { SrsAlgorithm } from "src/algorithms/algorithms";
import { RepetitionItem } from "src/dataStore/repetitionItem";
// import { debug } from "src/util/utils_recall";
import { TouchOnMobile } from "src/Events/touchEvent";
import SRPlugin from "src/main";

export class reviewResponseModal {
    private static instance: reviewResponseModal;
    private app: App;
    public plugin: SRPlugin;
    private settings: SRSettings;
    public submitCallback: (note: TFile, resp: number) => void;
    private algorithm: SrsAlgorithm;
    private containerEl: HTMLElement;
    private contentEl: HTMLElement;

    barId = "reviewResponseModalBar";
    private barItemId: string = "ResponseFloatBarCommandItem";
    // mode: FlashcardModalMode;
    answerBtn: HTMLButtonElement;
    buttons: HTMLButtonElement[];
    response: HTMLDivElement;
    controls: HTMLDivElement;
    private responseInterval: number[];
    private item: RepetitionItem;
    private showInterval = true;
    private buttonTexts: string[];
    private options: string[];

    respCallback: (resp: number) => void;
    showAnsCB: () => void;

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
        // this.build();
    }

    public display(
        item?: RepetitionItem,
        callback?: (resp: number) => void,
        // mode?: FlashcardModalMode,
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
        const rrBar = document.getElementById(this.barId);
        if (!rrBar || !this.buttons) {
            console.debug("display didn't find rrbar");
            this.build();
        }
        this.containerEl.show();
        this.respCallback = callback;

        // update show text
        // if (this.mode == null || this.mode == FlashcardModalMode.Front) {
        // this.showAnswer();
        // } else if (this.mode == FlashcardModalMode.Back) {
        //     this.showQuestion();
        // }

        if (item?.isCard) {
            this.showQuestion();
        } else {
            this.showAnswer();
        }
    }

    build() {
        if (this.isDisplay()) return;
        console.debug("build start...");
        // const options = this.plugin.algorithm.srsOptions();
        const optBtnCounts = this.options.length;
        let btnCols = 4;
        if (!Platform.isMobile && optBtnCounts > btnCols) {
            btnCols = optBtnCounts;
        }
        this.containerEl = createEl("div");
        this.containerEl.setAttribute("id", this.barId);
        // this.containerEl.setAttribute("style", `grid-template-columns: ${"1fr ".repeat(btnCols)}`);
        // this.containerEl.setAttribute("style", `grid-template-rows: ${"1fr ".repeat(1)}`);
        this.containerEl.hide();
        document.body
            .querySelector(".mod-vertical.mod-root")
            .insertAdjacentElement("afterbegin", this.containerEl);

        this.contentEl = this.containerEl.createDiv("sr-show-response");
        // const modalmdv = this.contentEl.createDiv();
        // const contentEl = modalmdv.createEl("div") as HTMLElement;
        this.contentEl.addClass("sr-modal-content");
        this.contentEl.addClass("sr-flashcard");
        this.controls = this.contentEl.createDiv();

        this.response = this.contentEl.createDiv("sr-show-response");
        this.response.setAttribute("style", `grid-template-columns: ${"1fr ".repeat(btnCols)}`);

        this.buttons = [];
        this.createButtons_responses();
        this.createButton_showAnswer();

        this.addMenuEvent();
        this.addKeysEvent();
        this.addTouchEvent();
        this._autoClose();
    }

    private buttonClick(s: string) {
        // this.mode = FlashcardModalMode.Front;

        if (this.respCallback) {
            this.respCallback(this.options.indexOf(s));
            return;
        }

        const openFile: TFile | null = app.workspace.getActiveFile();
        if (openFile && openFile.extension === "md") {
            if (this.submitCallback) {
                this.submitCallback(openFile, this.options.indexOf(s));
            }
        }
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
            this.showAnsCB();
            this.showAnswer();
        });
        this.answerBtn.addClass("sr-is-hidden");
        // this.response.appendChild(this.answerBtn);
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
            if (triggerControls()) {
                return;
            }

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
            if (this._triggerControls()) {
                return;
            }
            this.close();
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
        document.body.addEventListener("keydown", this._keydownHandler);
    }

    private _keydownHandler = (e: KeyboardEvent) => {
        // Prevents any input, if the editor is preview and has fbar.
        const bar = document.getElementById(this.barId);
        // const Markdown = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (
            bar &&
            bar.checkVisibility() &&
            this.isDisplay() &&
            this.app.workspace.getActiveViewOfType(MarkdownView).getMode() === "preview" &&
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

    private _triggerControls() {
        if (!this.item?.isCard) return false;
        if (this.controls?.hasClass("sr-is-hidden")) {
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

        let _stIndx = 0;
        if (this.item?.isCard) {
            _stIndx = 1;
        }
        this.options.slice(_stIndx).forEach((opt, index) => {
            const btn = document.getElementById("sr-" + opt.toLowerCase() + "-btn");
            // let text = btnText[algo][index];
            const text = this.getTextWithInterval(_stIndx + index);
            btn.setText(text);
            btn.removeClass("sr-is-hidden");
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
        return document.getElementById(this.barId) != null;
    }

    public isDisplay() {
        return this.hasBar() && this.containerEl?.isShown();
    }

    hide() {
        if (this.containerEl?.isShown()) {
            this.containerEl.hide();
            console.debug("hide fbar.");
        }
    }

    close() {
        const rrBar = document.getElementById(this.barId);
        if (rrBar) {
            document.body.removeEventListener("keydown", this._keydownHandler.bind(this));
            rrBar.style.visibility = "hidden";
            if (rrBar.firstChild) {
                rrBar.removeChild(rrBar.firstChild);
            }
            rrBar.remove();
            console.debug("cllose fbar.");
        }
    }

    private _autoClose() {
        //after review

        const tout = Platform.isMobile ? 5000 : 10000;
        const timmer = setInterval(() => {
            const rrBar = document.getElementById(this.barId);
            const Markdown = this.app.workspace.getActiveViewOfType(MarkdownView);
            if (rrBar) {
                if (this.settings.mdView && this.item.isCard) {
                    clearInterval(timmer);
                    return;
                }
                if (!Markdown) {
                    this.close();
                    clearInterval(timmer);
                }
            }
        }, tout);
    }
}
