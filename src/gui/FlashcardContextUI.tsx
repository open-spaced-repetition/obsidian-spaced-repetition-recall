import { DataAdapter, App, TFile, MarkdownView } from "obsidian";
import SRPlugin from "src/main";
import { SRSettings } from "src/settings";
import { RenderMarkdownWrapper } from "src/util/RenderMarkdownWrapper";

const fbasename = "DoNotUse_spacedrepetition_tempCardtext";
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
}

class FlashcardC_MD extends FlashcardContentUI {
    private adapter: DataAdapter;
    private mdCardContext: string;
    private mdCardText: string;
    private path: string;

    constructor(plugin: SRPlugin, context: HTMLElement, content: HTMLDivElement) {
        super(plugin, context, content);
        this.adapter = plugin.app.vault.adapter;
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
        const file = this.app.vault.getFileByPath(path);
        if (file instanceof TFile) {
            const activeLeaf = this.app.workspace.getLeaf("tab");
            await activeLeaf.openFile(file);
            const vstate = activeLeaf.getViewState();
            vstate.state.mode = "preview";
            await activeLeaf.setViewState(vstate);
        } else {
            // await this.app.workspace.openLinkText(path, "");
            // await this.app.workspace.openLinkText("DoNotUse_pacedrepetition_tempCardtext", "");
            await this.app.workspace.openLinkText(
                "DoNotUse_pacedrepetition_tempCardtext",
                this.path,
            );
            const activeLeaf = this.app.workspace.getActiveViewOfType(MarkdownView);
            const state = activeLeaf.getState();
            state.mode = "preview";
            state.file = path;
            activeLeaf.setState(state, { history: false });
        }
    }
}

class FlashcardC_Modal extends FlashcardContentUI {
    private wrapper: RenderMarkdownWrapper;

    async render(context: string, cardtext: string, path: string): Promise<void> {
        // Setup context
        if (this.context) this.context.setText(context);

        // Setup card content
        this.content.empty();
        this.wrapper = new RenderMarkdownWrapper(this.app, this.plugin, path);
        await this.wrapper.renderMarkdownWrapper(cardtext, this.content);
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

        await this.wrapper.renderMarkdownWrapper(cardtext, this.content);
        // Set scroll position back to top
        this.content.scrollTop = 0;
    }
}
