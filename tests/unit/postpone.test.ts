import { postponeItems } from "src/algorithms/balance/postpone";
import { setDueDates } from "src/algorithms/balance/balance";
import { RepetitionItem, RPITEMTYPE } from "src/dataStore/repetitionItem";
import { setupStaticDateProvider20230906 } from "src/utils/dates";

describe("postponeItems call chain", () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    test("postpones tracked due and new items while leaving untracked items alone", () => {
        const now = new Date("2023-09-06T12:00:00Z").getTime();
        jest.useFakeTimers().setSystemTime(now);
        setupStaticDateProvider20230906();

        const dueItem = new RepetitionItem(1, 0, RPITEMTYPE.CARD, "deck", {
            ease: 250,
            lastInterval: 5,
            iteration: 2,
        });
        dueItem.timesReviewed = 1;
        dueItem.nextReview = new Date("2023-09-01T12:00:00Z").getTime();
        const newItem = new RepetitionItem(2, 1, RPITEMTYPE.NOTE, "deck");
        const untrackedItem = new RepetitionItem(3, -1, RPITEMTYPE.CARD, "deck", {
            ease: 250,
            lastInterval: 3,
            iteration: 2,
        });
        untrackedItem.timesReviewed = 1;
        untrackedItem.nextReview = now - 86400000;

        const result = postponeItems([dueItem, newItem, untrackedItem], 2);

        expect(result).toEqual([dueItem, newItem, untrackedItem]);
        expect(dueItem.nextReview).toBe(now + 2 * 86400000);
        expect(newItem.nextReview).toBe(now + 2 * 86400000);
        expect(untrackedItem.nextReview).toBe(now - 86400000);
        expect(dueItem.interval).toBe(5);
        expect(newItem.timesReviewed).toBe(0);
    });

    test("without an explicit delay, postpones only overdue items with safe retention", () => {
        const now = new Date("2023-09-06T12:00:00Z").getTime();
        jest.useFakeTimers().setSystemTime(now);
        setupStaticDateProvider20230906();
        setDueDates({}, {});

        const safeItem = new RepetitionItem(1, 0, RPITEMTYPE.CARD, "deck", {
            ease: 250,
            lastInterval: 5,
            iteration: 2,
        });
        safeItem.timesReviewed = 1;
        safeItem.nextReview = now - 6 * 86400000;
        const lowRetentionItem = new RepetitionItem(2, 1, RPITEMTYPE.CARD, "deck", {
            ease: 250,
            lastInterval: 5,
            iteration: 2,
        });
        lowRetentionItem.timesReviewed = 1;
        lowRetentionItem.nextReview = now - 40 * 86400000;

        postponeItems([safeItem, lowRetentionItem]);

        expect(safeItem.nextReview).toBeGreaterThan(now);
        expect(safeItem.interval).toBe(5);
        expect(lowRetentionItem.nextReview).toBe(now - 40 * 86400000);
    });
});
