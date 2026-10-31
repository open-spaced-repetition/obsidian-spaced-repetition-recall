import { Iadapter } from "src/dataStore/adapter";
import { DataStore, DEFAULT_SRS_DATA } from "src/dataStore/data";
import { DEFAULT_SETTINGS } from "src/settings";
import { State } from "ts-fsrs";
import { issue58Items } from "./fixtures/fsrs-issue-58";

describe("FSRS startup migration", () => {
    const path = "tracked_files.json";
    let files: Map<string, string>;
    let store: DataStore;
    const legacyItem = {
        ID: 7,
        nextReview: 1704153600000,
        timesReviewed: 5,
        data: {
            due: "2024-01-02T00:00:00.000Z",
            last_review: "2024-01-01T00:00:00.000Z",
            stability: 2,
            difficulty: 5,
            state: 2,
            scheduled_days: 1,
            learning_steps: 0,
            reps: 5,
            lapses: 1,
        },
    };
    const write = jest.fn();

    beforeEach(() => {
        files = new Map([[path, JSON.stringify({ ...DEFAULT_SRS_DATA, items: [legacyItem] })]]);
        write.mockReset().mockImplementation(async (name: string, data: string) => {
            files.set(name, data);
        });
        jest.spyOn(Iadapter, "instance", "get").mockReturnValue(
            Object.assign(Object.create(Iadapter.prototype), {
                adapter: {
                    exists: async (name: string) => files.has(name),
                    read: async (name: string) => files.get(name),
                    write,
                    stat: async () => ({ mtime: 1 }),
                },
            }),
        );
        store = new DataStore(DEFAULT_SETTINGS, ".obsidian/plugins/test");
    });

    afterEach(() => jest.restoreAllMocks());

    test("migrates issue #58 cards with missing learning_steps without changing due dates or review progress", async () => {
        const original = JSON.stringify({ ...DEFAULT_SRS_DATA, items: issue58Items });
        files.set(path, original);

        await store.load(path);

        const savedJson = files.get(path);
        if (savedJson === undefined) throw new Error("Migrated store was not saved");
        const saved = JSON.parse(savedJson);
        expect(saved.items).toHaveLength(issue58Items.length);
        for (const [index, { data, ...metadata }] of issue58Items.entries()) {
            expect(data).not.toHaveProperty("learning_steps");
            expect(saved.items[index]).toEqual({
                ...metadata,
                data: {
                    cardId: String(metadata.ID),
                    dueAt: data.due,
                    lastReviewAt: data.state === State.New ? null : data.last_review,
                    stability: data.stability,
                    difficulty: data.difficulty,
                    state: data.state,
                    scheduleStatus:
                        data.state === State.New
                            ? "new"
                            : data.state === State.Review
                              ? "review"
                              : "learning",
                    scheduledDays: data.scheduled_days,
                    learningStep: 0,
                    reps: data.reps,
                    lapses: data.lapses,
                },
            });
        }
        expect(write).toHaveBeenCalledTimes(2);
        expect(write.mock.calls[0]).toEqual([
            expect.stringMatching(/\.pre-fsrs-v6-\d+\.bak$/),
            original,
        ]);

        await store.load(path);
        expect(write).toHaveBeenCalledTimes(2);
        expect(files.get(path)).toBe(savedJson);
    });

    test("backs up exact input, migrates on load and does not rewrite on subsequent loads", async () => {
        const original = files.get(path);
        await store.load(path);
        expect(write).toHaveBeenCalledTimes(2);
        expect(write.mock.calls[0]).toEqual([
            expect.stringMatching(/\.pre-fsrs-v6-\d+\.bak$/),
            original,
        ]);
        const savedJson = files.get(path);
        if (savedJson === undefined) throw new Error("Migrated store was not saved");
        const saved = JSON.parse(savedJson).items[0];
        expect(saved).toMatchObject({ ID: 7, nextReview: legacyItem.nextReview, timesReviewed: 5 });
        expect(saved.data).toMatchObject({
            cardId: "7",
            dueAt: legacyItem.data.due,
            reps: 5,
            lapses: 1,
        });
        expect(saved.data).not.toHaveProperty("due");
        await store.load(path);
        expect(write).toHaveBeenCalledTimes(2);
    });

    test("invalid old cards cannot overwrite the source with an empty store", async () => {
        files.set(
            path,
            JSON.stringify({
                ...DEFAULT_SRS_DATA,
                items: [{ ...legacyItem, data: { ...legacyItem.data, due: "bad" } }],
            }),
        );
        const original = files.get(path);
        await expect(store.load(path)).rejects.toThrow();
        expect(write).not.toHaveBeenCalled();
        expect(files.get(path)).toBe(original);
    });

    test("a failed backup prevents writing the migrated store", async () => {
        const original = files.get(path);
        write.mockRejectedValueOnce(new Error("backup failed"));
        await expect(store.load(path)).rejects.toThrow("backup failed");
        expect(write).toHaveBeenCalledTimes(1);
        expect(files.get(path)).toBe(original);
    });
});
