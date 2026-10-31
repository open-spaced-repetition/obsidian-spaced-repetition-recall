import moment from "moment";
import { algorithmNames } from "src/algorithms/algorithms";
import { FsrsAlgorithm } from "src/algorithms/fsrs";
import { DataStore, DEFAULT_SRS_DATA } from "src/dataStore/data";
import { updateReviewedCounts } from "src/dataStore/itemManagement";
import { RepetitionItem } from "src/dataStore/repetitionItem";
import { DEFAULT_SETTINGS } from "src/settings";

test.each([
    [null, 0],
    [new Date("2026-10-26T12:00:00Z"), 1],
    [new Date("2026-10-27T12:00:00Z"), 0],
])("counts due reviews with previous review time %s", (lastReviewAt, expectedDue) => {
    const previousMoment = window.moment;
    window.moment = moment;
    jest.useFakeTimers().setSystemTime(new Date("2026-10-27T12:00:00Z"));
    try {
        const store = new DataStore(
            { ...DEFAULT_SETTINGS, algorithm: algorithmNames.Fsrs },
            "test",
        );
        const data = { ...new FsrsAlgorithm().defaultData(), lastReviewAt };
        const item = new RepetitionItem(0, 0, undefined, undefined, data);
        item.nextReview = Date.now() - 1;
        store.data = { ...DEFAULT_SRS_DATA, items: [item], reviewedCounts: {} };
        updateReviewedCounts(store, 0);
        expect(store.data.reviewedCounts[moment().format("YYYY-MM-DD")]).toEqual({
            due: expectedDue,
            new: 0,
        });
    } finally {
        window.moment = previousMoment;
        jest.useRealTimers();
    }
});
