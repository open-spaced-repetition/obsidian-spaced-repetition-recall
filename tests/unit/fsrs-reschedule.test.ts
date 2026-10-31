import { State } from "ts-fsrs";
import { SrsAlgorithm } from "src/algorithms/algorithms";
import { reschedule } from "src/algorithms/balance/reschedule";
import { FsrsAlgorithm } from "src/algorithms/fsrs";
import { RepetitionItem } from "src/dataStore/repetitionItem";

test("rescheduling caps the model interval without reviewing the card", () => {
    const previousAlgorithm = SrsAlgorithm.instance;
    const algorithm = new FsrsAlgorithm();
    algorithm.settings.maximum_interval = 2;
    algorithm.updateFsrsParams();
    SrsAlgorithm.instance = algorithm;
    const now = new Date("2026-10-27T12:00:00Z");
    jest.useFakeTimers().setSystemTime(now);
    const data = {
        ...algorithm.defaultData(),
        state: State.Review,
        scheduleStatus: "review" as const,
        stability: 100,
        difficulty: 5,
        lastReviewAt: new Date("2026-10-26T12:00:00Z"),
        scheduledDays: 100,
    };
    const item = new RepetitionItem(7, 0, undefined, undefined, data);
    const updateDue = jest.spyOn(item, "updateDueByInterval").mockImplementation(() => {});
    const nextInterval = jest.spyOn(algorithm.fsrs.model, "nextInterval");
    const review = jest.spyOn(algorithm.fsrs, "review");
    try {
        expect(algorithm.fsrs.model.nextInterval(data, 0.9)).toBeGreaterThan(2);
        nextInterval.mockClear();
        reschedule([item]);
        expect(nextInterval).toHaveBeenCalledWith(data, 0.9);
        expect(updateDue).toHaveBeenCalledWith(2);
        expect(review).not.toHaveBeenCalled();
        expect(item.data).toBe(data);

        const newItem = new RepetitionItem(8, 0, undefined, undefined, algorithm.defaultData());
        reschedule([newItem]);
        expect(nextInterval).toHaveBeenCalledTimes(1);
    } finally {
        SrsAlgorithm.instance = previousAlgorithm;
        jest.restoreAllMocks();
        jest.useRealTimers();
    }
});
