import { CardListType } from "src/deck";
import { DeckTreeStatsCalculator } from "src/DeckTreeStatsCalculator";
import { frontmatterTagPseudoLineNum, SrTFile } from "src/file";
import { NoteEaseCalculator } from "src/NoteEaseCalculator";
import { DEFAULT_SETTINGS } from "src/settings";
import { Stats } from "src/stats";
import { Tags } from "src/tags";
import { Note } from "src/note";
import { TextDirection } from "src/utils/strings";
import { MetadataCache, TFile, Vault } from "obsidian";
import { SampleItemDecks } from "./SampleItems";
import { setupStaticDateProvider20230906 } from "src/utils/dates";

describe("Stats", () => {
    test("aggregates new, young, mature, and due counts", () => {
        const stats = new Stats();
        stats.incrementNew();
        stats.update(0, 5, 2.5);
        stats.update(3, 32, 3);

        expect(stats.newCount).toBe(1);
        expect(stats.totalCount).toBe(2);
        expect(stats.onDueCount).toBe(1);
        expect(stats.getTotalCount()).toBe(3);
        expect(stats.getTotalCount(CardListType.NewCard)).toBe(1);
        expect(stats.getTotalCount(CardListType.DueCard)).toBe(2);
        expect(stats.getMaxInterval()).toBe(32);
        expect(stats.getAverageInterval()).toBe(18.5);
        expect(stats.getAverageEases()).toBe(2.75);
    });

    test("returns zero counts for an empty collection", () => {
        const stats = new Stats();

        expect(stats.totalCount).toBe(0);
        expect(stats.getTotalCount()).toBe(0);
        expect(stats.getMaxInterval()).toBe(-Infinity);
        expect(stats.getAverageInterval()).toBeNaN();
        expect(stats.getAverageEases()).toBeNaN();
    });

    test("counts new items and updates scheduled items", () => {
        const stats = new Stats();
        const now = Date.UTC(2025, 0, 1);
        const scheduledItem = {
            getSched: () => ["1", String(now + 2 * 86400000), "12", "2.5"],
            hasDue: true,
        };

        stats.updateStats(null);
        stats.updateStats({ getSched: (): null => null, hasDue: true } as never);
        stats.updateStats(scheduledItem as never, now);

        expect(stats.newCount).toBe(2);
        expect(stats.youngCount).toBe(1);
        expect(stats.onDueCount).toBe(0);
        expect(stats.getMaxInterval()).toBe(12);
        expect(stats.getAverageEases()).toBe(2.5);
    });

    test("calculates stats through the markdown-to-deck iteration chain", async () => {
        setupStaticDateProvider20230906();
        const deck = await SampleItemDecks.createDeckFromText(
            "#flashcards\nQ1::A1\nQ2::A2 <!--SR:!2023-09-02,5,270-->",
        );

        const stats = new DeckTreeStatsCalculator().calculate(deck);

        expect(stats.newCount).toBe(1);
        expect(stats.youngCount).toBe(1);
        expect(stats.matureCount).toBe(0);
        expect(stats.onDueCount).toBe(1);
        expect(stats.getTotalCount()).toBe(2);
        expect(deck.getCardCount(CardListType.All, true)).toBe(2);
    });
});

describe("NoteEaseCalculator", () => {
    test("returns zero when there are no scheduled cards", () => {
        const note = { questionList: [{ cards: [{ hasSchedule: false }] }] } as unknown as Note;

        expect(NoteEaseCalculator.Calculate(note, { ...DEFAULT_SETTINGS, baseEase: 2.5 })).toBe(0);
    });

    test("blends average scheduled ease with the configured base ease", () => {
        const note = {
            questionList: [
                {
                    cards: [
                        { hasSchedule: true, scheduleInfo: { ease: 4 } },
                        { hasSchedule: true, scheduleInfo: { ease: 2 } },
                        { hasSchedule: false, scheduleInfo: { ease: 5 } },
                    ],
                },
            ],
        } as unknown as Note;
        const settings = { ...DEFAULT_SETTINGS, baseEase: 3 };
        const contribution = Math.log(2.5) / Math.log(64);

        expect(NoteEaseCalculator.Calculate(note, settings)).toBeCloseTo(
            3 * contribution + 3 * (1 - contribution),
        );
    });

    test("caps flashcard contribution at one for large notes", () => {
        const note = {
            questionList: [
                {
                    cards: Array.from({ length: 64 }, () => ({
                        hasSchedule: true,
                        scheduleInfo: { ease: 4 },
                    })),
                },
            ],
        } as unknown as Note;

        expect(NoteEaseCalculator.Calculate(note, { ...DEFAULT_SETTINGS, baseEase: 3 })).toBe(4);
    });
});

describe("Tags", () => {
    test("recognizes the default deck and matching tag prefixes", () => {
        expect(Tags.isDefaultDackName("default")).toBe(true);
        expect(Tags.isDefaultDackName("other")).toBe(false);
        expect(Tags.getTagFromSettingTags(["#topic/subtopic"], ["#other", "#topic"])).toBe(
            "#topic",
        );
        expect(Tags.getTagFromSettingTags(["#topic-extra"], ["#topic"])).toBeNull();
        expect(
            Tags.isTagedNoteDeckName("#topic/subtopic", {
                ...DEFAULT_SETTINGS,
                tagsToReview: ["#topic"],
            }),
        ).toBe(true);
    });
});

describe("SrTFile", () => {
    const file = { path: "folder/note.md", basename: "note" } as TFile;

    test("reads frontmatter, combines content and frontmatter tags, and handles empty cache", async () => {
        const contentTag = { tag: "#content", position: {} };
        const metadataCache = {
            getFileCache: jest.fn().mockReturnValue({
                frontmatter: {
                    tags: "topic,other",
                    aliases: ["first", "second"],
                    empty: [],
                },
                tags: [contentTag],
            }),
        } as unknown as MetadataCache;
        const vault = { read: jest.fn().mockResolvedValue("body") } as unknown as Vault;
        const srFile = new SrTFile(vault, metadataCache, file);

        expect(srFile.path).toBe(file.path);
        expect(srFile.basename).toBe(file.basename);
        expect(srFile.tfile).toBe(file);
        expect(await srFile.getFrontmatter()).toEqual(
            new Map([
                ["tags", "topic,other"],
                ["aliases", "first"],
                ["empty", ""],
            ]),
        );
        expect(srFile.getAllTagsFromText().map((tag) => tag.tag)).toEqual([
            "#content",
            "#topic",
            "#other",
        ]);
        expect(srFile.getAllTagsFromText()[1].position.start.line).toBe(
            frontmatterTagPseudoLineNum,
        );

        metadataCache.getFileCache = jest.fn().mockReturnValue(null);
        expect(await srFile.getFrontmatter()).toEqual(new Map());
        expect(srFile.getAllTagsFromText()).toEqual([]);
        expect(await srFile.read()).toBe("body");
    });

    test("builds heading context and resolves text direction", () => {
        const metadataCache = {
            getFileCache: jest.fn().mockReturnValue({
                headings: [
                    { heading: " Root [^12] ", level: 1, position: { start: { line: 0 } } },
                    { heading: " Section [^3] ", level: 2, position: { start: { line: 2 } } },
                    { heading: "Subsection", level: 3, position: { start: { line: 4 } } },
                    { heading: "Next section", level: 2, position: { start: { line: 5 } } },
                ],
                frontmatter: { direction: "RTL" },
            }),
        } as unknown as MetadataCache;
        const srFile = new SrTFile({} as Vault, metadataCache, file);

        expect(srFile.getQuestionContext(3)).toEqual(["Root", "Section"]);
        expect(srFile.getQuestionContext(6)).toEqual(["Root", "Next section"]);
        expect(srFile.getTextDirection()).toBe(TextDirection.Rtl);

        metadataCache.getFileCache = jest
            .fn()
            .mockReturnValue({ frontmatter: { direction: "ltr" } });
        expect(srFile.getTextDirection()).toBe(TextDirection.Ltr);
        metadataCache.getFileCache = jest.fn().mockReturnValue({ frontmatter: { direction: "" } });
        expect(srFile.getTextDirection()).toBe(TextDirection.Unspecified);
        metadataCache.getFileCache = jest.fn().mockReturnValue(null);
        expect(srFile.getTextDirection()).toBe(TextDirection.Unspecified);
    });

    test("writes updated content to the vault", async () => {
        const modify = jest.fn().mockResolvedValue(undefined);
        const srFile = new SrTFile({ modify } as unknown as Vault, {} as MetadataCache, file);

        await srFile.write("updated");

        expect(modify).toHaveBeenCalledWith(file, "updated");
    });
});
