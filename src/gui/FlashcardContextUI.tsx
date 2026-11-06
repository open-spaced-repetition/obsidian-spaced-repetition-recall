import { DataAdapter, App, TFile, MarkdownView, WorkspaceLeaf } from "obsidian";
import SRPlugin from "src/main";
import { SRSettings } from "src/settings";
import { RenderMarkdownWrapper } from "src/utils/renderers";
import { TextDirection } from "src/utils/strings";

const fbasename = "DoNotUse_tempCardtext_for_spacedrepetition";
const path = fbasename + ".md";
// ("./.obsidian/plugins/obsidian-spaced-repetition-recall/spacedrepetition_tempCardtext.md");

export abstract class FlashcardContentUI {
    public content: HTMLDivElement;
    public context: HTMLElement;

    public app: App;
    public plugin: SRPlugin;
    public settings: SRSettings;

    static create(plugin: SRPlugin, context: HTMLElement, content: HTMLDivElement) {
        const mdView = plugin.data.settings.mdView;
        if (mdView) {
            return new FlashcardC_MD(plugin, context, content);
        } else {
            return new FlashcardC_Modal(plugin, context, content);
        }
    }
    constructor(plugin: SRPlugin, context: HTMLElement, content: HTMLDivElement) {
        this.app = plugin.app;
        this.plugin = plugin;
        this.settings = plugin.data.settings;
        this.context = context;
        this.content = content;
    }
    get basename() {
        return fbasename;
    }
    abstract render(context: string, cardtext: string, path: string): Promise<void>;
    abstract render_Ans(cardtext: string, isNotCloze: boolean): Promise<void>;
    abstract show(): void;
    close() {}
}

class FlashcardC_MD extends FlashcardContentUI {
    private adapter: DataAdapter;
    private activeLeaf!: WorkspaceLeaf;
    private mdview: MarkdownView;
    private mdCardContext!: string;
    private mdCardText!: string;
    private path: string;
    private file: TFile;

    constructor(plugin: SRPlugin, context: HTMLElement, content: HTMLDivElement) {
        super(plugin, context, content);
        this.adapter = plugin.app.vault.adapter;
        const leafs = this.app.workspace.getLeavesOfType("markdown");
        const hasLeaf = leafs.some((leaf) => {
            const vst = leaf.getViewState();
            if (vst.state.file === path) {
                this.activeLeaf = leaf;
                return true;
            }
        });
        if (!hasLeaf) {
            this.activeLeaf = this.app.workspace.getLeaf("tab");
        }
        // this.adapter.write(path, "");
        // console.debug("UI  constrator:", this.activeLeaf);
        // this.mdview = new MarkdownView(this.activeLeaf);
        // this.mdview.registerEvent(this.close);
        // this.file = this.app.vault.getFileByPath(path) as TFile;
    }
    get basename() {
        return fbasename;
    }
    async render(context: string, cardtext: string, path: string): Promise<void> {
        this.path = path;
        // Setup context
        if (context) {
            this.mdCardContext = "## " + context;
            this.mdCardContext += "\n";
        } else {
            this.mdCardContext = "";
        }
        this.mdCardText = this.mdCardContext + cardtext;
        await this._render();
        // Set scroll position back to top
        this.mdview.editor.scrollTo(0, 0);
    }

    async render_Ans(cardtext: string, isNotCloze: boolean) {
        if (isNotCloze) {
            this.mdCardText += "\n\n---\n";
        } else {
            this.mdCardText = this.mdCardContext;
        }

        this.mdCardText += cardtext;

        await this._render();
    }

    private async _render() {
        await this.adapter.write(path, this.mdCardText);
        if (!this.mdview) {
            this.mdview = new MarkdownView(this.activeLeaf);
            this.mdview.registerEvent(this.close);
            this.file = this.app.vault.getFileByPath(path) as TFile;
            // console.debug("dont have mdview, adnf this.file:", this.file);
            // } else if (!this.isActiveleaf) {
            //     this.app.workspace.setActiveLeaf(this.activeLeaf);
        } else {
            return;
        }

        // if (this.file instanceof TFile) {
        // const activeLeaf = this.app.workspace.getLeaf("tab");
        await this.activeLeaf.openFile(this.file);
        const vstate = this.activeLeaf.getViewState();
        vstate.active = true;
        vstate.state.mode = "preview";
        await this.activeLeaf.setViewState(vstate);
        // console.debug("UI _render", 5, "active setveiwstate \nthis.file:", this.file);
        // } else {
        //     debug("UI _render", 5, "openLinkText\nthis.file:", this.file);
        //     await this.app.workspace.openLinkText(this.basename, this.path, false);
        //     console.debug(`this.basename:${this.basename}, this.path:${this.path}`);
        //     const activeLeaf = this.app.workspace.getActiveViewOfType(MarkdownView) as MarkdownView;
        //     const state = activeLeaf.getState();
        //     state.mode = "preview";
        //     state.file = path;
        //     activeLeaf.setState(state, { history: false });
        //     this.file = this.app.vault.getFileByPath(path) as TFile;
        // }
    }

    show() {
        this.app.workspace.setActiveLeaf(this.activeLeaf);
    }
    close() {
        this.adapter.write(path, "");
        // this.adapter.remove(path);
        this.activeLeaf.detach();
    }

    get isActiveleaf() {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        return view?.leaf == this.activeLeaf;
    }
}

class FlashcardC_Modal extends FlashcardContentUI {
    private wrapper!: RenderMarkdownWrapper;

    show() {}

    async render(context: string, cardtext: string, path: string): Promise<void> {
        // Setup context
        if (this.context) this.context.setText(context);

        // Setup card content
        this.content.empty();
        this.wrapper = new RenderMarkdownWrapper(this.app, this.plugin, path);
        await this.wrapper.renderMarkdownWrapper(cardtext, this.content, TextDirection.Unspecified);
        // Set scroll position back to top
        this.content.scrollTop = 0;
    }

    async render_Ans(cardtext: string, isNotCloze: boolean) {
        if (isNotCloze) {
            const hr: HTMLElement = document.createElement("hr");
            hr.addClass("sr-card-divide");
            this.content.appendChild(hr);
        } else {
            this.content.empty();
        }

        await this.wrapper.renderMarkdownWrapper(cardtext, this.content, TextDirection.Unspecified);
        // Set scroll position back to top
        this.content.scrollTop = 0;
    }
}
