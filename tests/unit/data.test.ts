import { SrsAlgorithm, algorithmNames } from "src/algorithms/algorithms";
import { AnkiAlgorithm } from "src/algorithms/anki";
import { setDueDates } from "src/algorithms/balance/balance";
import { DefaultAlgorithm } from "src/algorithms/scheduling_default";
import { Sm2Algorithm } from "src/algorithms/supermemo";
import { DEFAULT_SRS_DATA, DataStore } from "src/dataStore/data";
import { DataLocation } from "src/dataStore/dataLocation";
import { ItemTrans } from "src/dataStore/itemTrans";
import { Queue } from "src/dataStore/queue";
import { RPITEMTYPE } from "src/dataStore/repetitionItem";
import { NoteParser } from "src/NoteParser";
import { DEFAULT_SETTINGS, SRSettings } from "src/settings";
import { Stats } from "src/stats";
import { setupStaticDateProvider20230906 } from "src/utils/dates";
import { TextDirection } from "src/utils/strings";
import { TopicPath } from "src/topic-path";
import { UnitTestSRFile } from "./helpers/UnitTestSRFile";
import moment from "moment";

const settings_tkfile = Object.assign({}, DEFAULT_SETTINGS);
settings_tkfile.dataLocation = DataLocation.PluginFolder;

export class SampleDataStore {
    static roundInt = (num: number) => Math.round(Math.random() * num);

    static async create(settings: SRSettings) {
        let store: DataStore;
        let algo: SrsAlgorithm;
        let arr: number[];
        // const roundInt = (num: number) => Math.round(Math.random() * num);
        // beforeEach(async () => {
        // eslint-disable-next-line prefer-const
        store = new DataStore(settings, "./");
        await store.load();
        // store.toInstances();
        // eslint-disable-next-line prefer-const
        algo = new DefaultAlgorithm();
        algo.updateSettings(settings.algorithmSettings[algorithmNames.Default]);
        const opts = algo.srsOptions();
        // eslint-disable-next-line prefer-const
        arr = Array.from(new Array(30)).map((_v, _idx) => {
            const type = this.roundInt(1) > 0 ? RPITEMTYPE.CARD : RPITEMTYPE.NOTE;
            store.trackFile("testPath" + _idx, type, true);
            if (type === RPITEMTYPE.CARD) {
                const tkfile = store.data.trackedFiles[_idx];

                Array.from(Array(this.roundInt(10))).map((_v, _idx) => {
                    const carditem = tkfile.trackCard(_idx * 3, "chash" + _idx);
                    store.updateCardItems(tkfile, carditem, this.roundInt(10), "fcard", false);
                });
            }
            return this.roundInt(50);
        });
        const noteStats = new Stats();
        const cardStats = new Stats();
        store.items
            .filter((item) => item.isTracked)
            .filter((item) => {
                if (item.isCard) {
                    cardStats.updateStats(item);
                } else {
                    noteStats.updateStats(item);
                }
            });
        setDueDates(noteStats.delayedDays.dict, cardStats.delayedDays.dict);
        const size = store.itemSize;
        arr.map((_v) => {
            store.reviewId(
                SampleDataStore.roundInt(size - 1),
                opts[SampleDataStore.roundInt(opts.length - 1)],
            );
        });
        Array.from(Array(SampleDataStore.roundInt(10))).map((_v) => {
            store.unTrackItem(SampleDataStore.roundInt(size - 1));
        });
        // });
        return { store, algo };
    }
}

describe("jsonfiy", () => {
    test("record", () => {
        const que: Record<number, string> = {};
        que[23] = "default";
        const result = JSON.stringify(que);
        const expected = '{"23":"default"}'; // key值为number会自动转换为string
        expect(result).toEqual(expected);
    });

    test("Map stringify", () => {
        const myMap = new Map([
            [10, "value1"],
            [11, "value2"],
        ]);
        // 不能直接转，需先处理为字面量
        const result = JSON.stringify(Object.fromEntries(myMap));
        // const result = JSON.stringify([...myMap.entries()]); // "[[10,"value1"],[11,"value2"]]"
        const expected = '{"10":"value1","11":"value2"}';
        expect(result).toEqual(expected);
    });
    test("Map values stringify", () => {
        const myMap = new Map([
            [10, { ID: 10, v: "value1" }],
            [11, { ID: 10, v: "value2" }],
        ]);
        // 不能直接转，需先处理为字面量
        const result = JSON.stringify([...myMap.values()]);
        const expected = '[{"ID":10,"v":"value1"},{"ID":10,"v":"value2"}]';
        expect(result).toEqual(expected);
    });
});

describe("DataStore review call chain", () => {
    function createReviewStore(settings: SRSettings, algorithm: SrsAlgorithm) {
        setupStaticDateProvider20230906();
        algorithm.updateSettings(settings.algorithmSettings[settings.algorithm]);
        setDueDates({}, {});

        const store = new DataStore(settings, "./");
        store.data = {
            ...DEFAULT_SRS_DATA,
            queues: new Queue(),
            items: [],
            trackedFiles: [],
            mtime: 0,
        };
        store.trackFile("review.md", RPITEMTYPE.NOTE, false);
        return { store, item: store.getNoteItem("review.md") };
    }

    test("applies an algorithm response through item scheduling and queue updates", () => {
        const settings = { ...DEFAULT_SETTINGS, dataLocation: DataLocation.PluginFolder };
        const algorithm = new DefaultAlgorithm();
        const { store, item } = createReviewStore(settings, algorithm);

        store.reviewId(item.ID, 3);

        expect(item.timesReviewed).toBe(1);
        expect(item.timesCorrect).toBe(1);
        expect(item.errorStreak).toBe(0);
        expect(item.data).toMatchObject({ iteration: 2, ease: 270 });
        expect(item.nextReview).toBeGreaterThan(Date.now());
    });

    test("reviews an SM2 item through reset, graduation, and later intervals", () => {
        const settings = {
            ...DEFAULT_SETTINGS,
            algorithm: algorithmNames.SM2,
            dataLocation: DataLocation.PluginFolder,
        };
        const { store, item } = createReviewStore(settings, new Sm2Algorithm());

        store.reviewId(item.ID, "Blackout");
        expect(item.data).toMatchObject({ iteration: 1, lastInterval: 1 });
        expect(item.timesCorrect).toBe(0);

        store.reviewId(item.ID, "Hard");
        expect(item.data).toMatchObject({ iteration: 2, ease: 2.36, lastInterval: 1 });

        store.reviewId(item.ID, "Good");
        expect(item.data).toMatchObject({ iteration: 3, lastInterval: 6 });

        store.reviewId(item.ID, "Easy");
        expect(item.data).toMatchObject({ iteration: 4, ease: 2.46, lastInterval: 14 });

        store.reviewId(item.ID, "Good");
        expect(item.data).toMatchObject({ iteration: 5, lastInterval: 34 });
        expect(item.timesReviewed).toBe(5);
        expect(item.timesCorrect).toBe(4);
    });

    test("syncs parsed flashcards into tracked items and writes IDs back to cards", async () => {
        const settings = { ...DEFAULT_SETTINGS, dataLocation: DataLocation.PluginFolder };
        const algorithm = new DefaultAlgorithm();
        algorithm.updateSettings(settings.algorithmSettings[algorithmNames.Default]);
        const store = new DataStore(settings, "./");
        store.data = {
            ...DEFAULT_SRS_DATA,
            queues: new Queue(),
            items: [],
            trackedFiles: [],
            mtime: 0,
        };
        const noteFile = new UnitTestSRFile("#flashcards\nQuestion::Answer", "review.md");
        const note = await new NoteParser(settings).parse(
            noteFile,
            TextDirection.Ltr,
            TopicPath.emptyPath,
        );

        ItemTrans.updateCardsSchedbyItems(note, TopicPath.getTopicPathFromTag("#flashcards"));

        const trackedFile = store.getTrackedFile("review.md");
        const card = note.questionList[0].cards[0];
        const cardItem = store.getItembyID(card.Id);
        expect(trackedFile.cardItems).toHaveLength(1);
        expect(cardItem).toBeDefined();
        expect(cardItem.itemType).toBe(RPITEMTYPE.CARD);
        expect(cardItem.deckName).toBe("#flashcards");
        expect(card.scheduleInfo).toBeNull();
        expect(note.questionList[0].hasChanged).toBe(false);

        store.reviewId(card.Id, "Easy");
        const reviewedNote = await new NoteParser(settings).parse(
            noteFile,
            TextDirection.Ltr,
            TopicPath.emptyPath,
        );
        const previousMoment = window.moment;
        window.moment = moment;
        try {
            ItemTrans.updateCardsSchedbyItems(
                reviewedNote,
                TopicPath.getTopicPathFromTag("#flashcards"),
            );
        } finally {
            window.moment = previousMoment;
        }

        const reviewedCard = reviewedNote.questionList[0].cards[0];
        expect(reviewedCard.Id).toBe(card.Id);
        expect(reviewedCard.hasSchedule).toBe(true);
        expect(reviewedCard.scheduleInfo.ease).toBe(270);
        expect(reviewedCard.scheduleInfo.interval).toBeGreaterThan(0);
    });

    test("reviews an Anki item through graduation and later intervals", () => {
        const settings = {
            ...DEFAULT_SETTINGS,
            algorithm: algorithmNames.Anki,
            dataLocation: DataLocation.PluginFolder,
        };
        const { store, item } = createReviewStore(settings, new AnkiAlgorithm());

        store.reviewId(item.ID, "Hard");
        expect(item.data).toMatchObject({ iteration: 2, ease: 2.35, lastInterval: 1 });

        store.reviewId(item.ID, "Good");
        expect(item.data).toMatchObject({ iteration: 3, lastInterval: 2.35 });

        store.reviewId(item.ID, "Easy");
        expect(item.data).toMatchObject({ iteration: 4, ease: 2.5, lastInterval: 13 });
        store.reviewId(item.ID, "Again");
        expect(item.data).toMatchObject({ iteration: 5, ease: 2.3, lastInterval: 6.5 });
        expect(item.timesReviewed).toBe(4);
        expect(item.timesCorrect).toBe(3);
        expect(item.errorStreak).toBe(1);

        jest.spyOn(store.data.queues, "isInRepeatQueue").mockReturnValue(true);
        store.reviewId(item.ID, "Again");

        expect(item.timesReviewed).toBe(4);
    });
});

describe("pruneDate", () => {
    const settings_tkfile = Object.assign({}, DEFAULT_SETTINGS);
    settings_tkfile.dataLocation = DataLocation.PluginFolder;
    let store: DataStore;
    // let algo: SrsAlgorithm;
    // let arr: number[];
    beforeEach(async () => {
        const sample = await SampleDataStore.create(settings_tkfile);
        store = sample.store;
    });

    it("pruneData", () => {
        store.pruneData();
        const itemResult = store.items.every((item) => item != null && item.isTracked);
        const tkfileResult = store.data.trackedFiles.every((tkfile) => tkfile != null);
        const check =
            store.data.trackedFiles.map((tkfile) => tkfile?.itemIDs.filter((id) => id >= 0)).flat()
                .length === store.itemSize;
        const checkcard = store.data.trackedFiles
            .filter((tkfile) => tkfile?.hasCards)
            .every((tkfile) => tkfile.cardIDs.length > 0);
        expect(itemResult).toBe(true);
        expect(tkfileResult).toBe(true);
        expect(check).toBe(true);
        expect(checkcard).toBe(true);
    });
});
