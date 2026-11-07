import { algorithmSwitchData } from "src/algorithms/algorithms_switch";
import { algorithmNames } from "src/algorithms/algorithms";
import { RepetitionItem, RPITEMTYPE } from "src/dataStore/repetitionItem";
import type SRPlugin from "src/main";

jest.mock("obsidian", () => ({
    Notice: jest.fn(),
    moment: { locale: () => "en" },
}));

describe("algorithmSwitchData", () => {
    function createPlugin(
        save = jest.fn().mockResolvedValue(undefined),
        algorithmSettings: Record<string, unknown> = { [algorithmNames.Anki]: {} },
    ) {
        const item = new RepetitionItem(1, 0, RPITEMTYPE.NOTE, "deck", {
            ease: 250,
            lastInterval: 8,
            iteration: 3,
        });
        const store = {
            data: { items: [item] },
            dataPath: "tracked.json",
            save,
            verifyItems: jest.fn().mockResolvedValue(undefined),
            pruneData: jest.fn().mockResolvedValue(undefined),
            load: jest.fn().mockResolvedValue(undefined),
        };
        const plugin = {
            store,
            data: { settings: { algorithmSettings } },
        } as unknown as SRPlugin;

        return { plugin, store, item };
    }

    test("backs up, converts data, and saves when switching to Anki", async () => {
        const { plugin, store, item } = createPlugin();

        await expect(
            algorithmSwitchData(plugin, algorithmNames.Default, algorithmNames.Anki),
        ).resolves.toBe(true);

        expect(store.save.mock.calls).toEqual([["tracked.json.Default.bak"], []]);
        expect(store.verifyItems).toHaveBeenCalledTimes(1);
        expect(store.pruneData).toHaveBeenCalledTimes(1);
        expect(item.data).toEqual({ ease: 2.5, lastInterval: 8, iteration: 3 });
        expect(store.load).not.toHaveBeenCalled();
    });

    test("imports FSRS intervals and repetitions when switching to Anki", async () => {
        const { plugin, store, item } = createPlugin();
        item.data = { scheduledDays: 12, reps: 5 };
        const newItem = new RepetitionItem(2, 0, RPITEMTYPE.NOTE, "deck", {
            scheduledDays: 0,
            reps: 1,
        });
        store.data.items.push(newItem);

        await expect(
            algorithmSwitchData(plugin, algorithmNames.Fsrs, algorithmNames.Anki),
        ).resolves.toBe(true);

        expect(item.data).toMatchObject({ ease: 2.5, lastInterval: 12, iteration: 5 });
        expect(newItem.data).toMatchObject({ ease: 2.5, lastInterval: 0, iteration: 1 });
    });

    test("converts Anki ease and initializes zero intervals when switching to Default", async () => {
        const { plugin, store, item } = createPlugin(jest.fn().mockResolvedValue(undefined), {
            [algorithmNames.Default]: {},
        });
        item.data = { ease: 2.5, lastInterval: 8, iteration: 3 };
        const newItem = new RepetitionItem(2, 0, RPITEMTYPE.NOTE, "deck", {
            ease: 1.8,
            lastInterval: 0,
            iteration: 1,
        });
        store.data.items.push(newItem);

        await expect(
            algorithmSwitchData(plugin, algorithmNames.Anki, algorithmNames.Default),
        ).resolves.toBe(true);

        expect(item.data).toMatchObject({ ease: 250, lastInterval: 8, iteration: 3 });
        expect(newItem.data).toMatchObject({ ease: 180, lastInterval: 1, iteration: 1 });
    });

    test("restores the backup when saving the converted data fails", async () => {
        const save = jest
            .fn()
            .mockResolvedValueOnce(undefined)
            .mockRejectedValueOnce(new Error("disk full"));
        const { plugin, store } = createPlugin(save);

        await expect(
            algorithmSwitchData(plugin, algorithmNames.Default, algorithmNames.Anki),
        ).resolves.toBe(false);

        expect(store.load).toHaveBeenCalledWith("tracked.json.Default.bak");
    });
});
