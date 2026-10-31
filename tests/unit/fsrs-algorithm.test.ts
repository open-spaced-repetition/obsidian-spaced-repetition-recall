import { FsrsAlgorithm, RevLog } from "src/algorithms/fsrs";
import { Iadapter } from "src/dataStore/adapter";
import { RepetitionItem } from "src/dataStore/repetitionItem";
import { Rating } from "ts-fsrs";

test("FSRS initializes its settings and rebuilds the scheduler from updated settings", () => {
    const algorithm = new FsrsAlgorithm();
    expect(algorithm.fsrs.config.desiredRetention).toEqual({ 1: 0.9, 2: 0.9, 3: 0.9, 4: 0.9 });
    algorithm.settings.request_retention = 0.85;
    algorithm.updateFsrsParams();
    expect(algorithm.fsrs.config.desiredRetention).toEqual({ 1: 0.85, 2: 0.85, 3: 0.85, 4: 0.85 });
    expect(new RevLog(null, null)).toEqual(new RevLog());
});

test("review-log operations reject an uninitialized adapter", async () => {
    const instance = jest.spyOn(Iadapter, "instance", "get").mockReturnValue(null);
    const algorithm = new FsrsAlgorithm();
    algorithm.logfilepath = "ob_revlog.csv";
    const { revlog } = algorithm.fsrs.review({
        card: algorithm.defaultData(),
        grade: Rating.Good,
    });
    try {
        await expect(algorithm.appendRevlog(new RepetitionItem(), revlog)).rejects.toThrow(
            "FSRS review log storage is not initialized",
        );
        await expect(algorithm.readRevlog()).rejects.toThrow(
            "FSRS review log storage is not initialized",
        );
        expect(() => algorithm.reWriteRevlog("data")).toThrow(
            "FSRS review log storage is not initialized",
        );
    } finally {
        instance.mockRestore();
    }
});
