import type SRPlugin from "src/main";
import { FlashcardContentUI } from "src/gui/FlashcardContextUI";
import { RenderMarkdownWrapper } from "src/utils/renderers";
import { TextDirection } from "src/utils/strings";

jest.mock("obsidian", () => ({
    MarkdownView: class MarkdownView {},
}));

jest.mock("src/utils/renderers", () => ({
    RenderMarkdownWrapper: jest.fn().mockImplementation(() => ({
        renderMarkdownWrapper: jest.fn().mockResolvedValue(undefined),
    })),
}));

describe("FlashcardContentUI", () => {
    const plugin = {
        app: {},
        data: { settings: { mdView: false } },
    } as unknown as SRPlugin;

    let context: HTMLDivElement & { setText: jest.Mock };
    let content: HTMLDivElement & { empty: jest.Mock };

    beforeEach(() => {
        jest.clearAllMocks();
        HTMLElement.prototype.addClass = function (className: string) {
            this.classList.add(className);
        };

        context = document.createElement("div") as HTMLDivElement & { setText: jest.Mock };
        context.setText = jest.fn((text: string) => {
            context.textContent = text;
        });

        content = document.createElement("div") as HTMLDivElement & { empty: jest.Mock };
        content.empty = jest.fn(() => content.replaceChildren());
        content.scrollTop = 42;
    });

    function createUI() {
        return FlashcardContentUI.create(plugin, context, content);
    }

    test("renders the question and context with the note path", async () => {
        const ui = createUI();

        await ui.render("Chapter", "Question", "folder/note.md");

        expect(context.setText).toHaveBeenCalledWith("Chapter");
        expect(content.empty).toHaveBeenCalledTimes(1);
        expect(content.scrollTop).toBe(0);
        expect(RenderMarkdownWrapper).toHaveBeenCalledWith(plugin.app, plugin, "folder/note.md");
        const wrapper = (RenderMarkdownWrapper as jest.Mock).mock.results[0].value;
        expect(wrapper.renderMarkdownWrapper).toHaveBeenCalledWith(
            "Question",
            content,
            TextDirection.Unspecified,
        );
        expect(() => ui.show()).not.toThrow();
    });

    test("separates a regular answer from the question", async () => {
        const ui = createUI();
        await ui.render("", "Question", "note.md");

        await ui.render_Ans("Answer", true);

        expect(content.querySelector("hr.sr-card-divide")).not.toBeNull();
        const wrapper = (RenderMarkdownWrapper as jest.Mock).mock.results[0].value;
        expect(wrapper.renderMarkdownWrapper).toHaveBeenLastCalledWith(
            "Answer",
            content,
            TextDirection.Unspecified,
        );
    });

    test("replaces the question for a cloze answer", async () => {
        const ui = createUI();
        await ui.render("", "Question", "note.md");
        content.appendChild(document.createElement("p"));

        await ui.render_Ans("Cloze answer", false);

        expect(content.empty).toHaveBeenCalledTimes(2);
        expect(content.querySelector("hr.sr-card-divide")).toBeNull();
        const wrapper = (RenderMarkdownWrapper as jest.Mock).mock.results[0].value;
        expect(wrapper.renderMarkdownWrapper).toHaveBeenLastCalledWith(
            "Cloze answer",
            content,
            TextDirection.Unspecified,
        );
    });
});
