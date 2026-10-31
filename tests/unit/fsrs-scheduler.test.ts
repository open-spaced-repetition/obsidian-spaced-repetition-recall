import { Rating, State } from "ts-fsrs";
import { migrateFSRS6Parameters } from "ts-fsrs/models/fsrs-6";
import { fsrsDefinition, migrateFsrsCard } from "src/algorithms/fsrs-scheduler";
import { RepetitionItem } from "src/dataStore/repetitionItem";

const scheduler = fsrsDefinition.create({
    config: {
        weights: migrateFSRS6Parameters(),
        enableShortTerm: true,
        numRelearningSteps: 1,
        desiredRetention: 0.9,
        maximumInterval: 36500,
        enableFuzz: false,
        fractionalDays: false,
        learningSteps: ["1m", "10m"],
        relearningSteps: ["10m"],
        clearStatsOnForget: false,
    },
});
const due = new Date("2026-10-20T12:00:00Z");
const lastReview = new Date("2026-10-18T12:00:00Z");

describe("FSRS v6 storage and scheduling", () => {
    test.each([State.New, State.Learning, State.Review, State.Relearning])(
        "loads v5 state %s without rescheduling or losing progress",
        (state) => {
            const stored = {
                due: due.toISOString(),
                last_review: lastReview.toISOString(),
                stability: state === State.New ? 0 : 2,
                difficulty: state === State.New ? 0 : 5,
                state,
                scheduled_days: 2,
                learning_steps: 1,
                elapsed_days: 2,
                reps: 4,
                lapses: 1,
            };
            const card = migrateFsrsCard(stored, 42);
            expect(card).toMatchObject({
                cardId: "42",
                dueAt: due,
                lastReviewAt: state === State.New ? null : lastReview,
                stability: stored.stability,
                difficulty: stored.difficulty,
                state,
                learningStep: 1,
                scheduledDays: 2,
                reps: 4,
                lapses: 1,
            });
            expect(card.scheduleStatus).toBe(
                state === State.New ? "new" : state === State.Review ? "review" : "learning",
            );
            expect(card).not.toHaveProperty("due");
            expect(
                RepetitionItem.create({ data: JSON.parse(JSON.stringify(card)) } as RepetitionItem)
                    .data,
            ).toEqual(card);
            expect(stored.due).toBe(due.toISOString());
        },
    );

    test("validates persisted timestamps", () => {
        const card = scheduler.newCard({ now: due, cardId: "42" });
        expect(() =>
            RepetitionItem.create({ data: { ...card, dueAt: "not a date" } } as RepetitionItem),
        ).toThrow();
    });

    test("preview agrees with all grades without mutating the card", () => {
        const card = scheduler.newCard({ now: due, cardId: "42" });
        const before = JSON.stringify(card);
        const grades: number[] = [];
        for (const { grade, card: previewCard } of scheduler.preview({ card, now: due })) {
            grades.push(grade);
            const result = scheduler.review({ card, now: due, grade });
            expect(previewCard).toEqual(result.card);
            expect(result.card.reps).toBe(1);
            expect(result.card.dueAt.getTime()).toBeGreaterThan(due.getTime());
            if (grade === Rating.Good) {
                expect(previewCard.dueAt.getTime() - due.getTime()).toBe(600000);
            }
        }
        expect(grades.sort()).toEqual([Rating.Again, Rating.Hard, Rating.Good, Rating.Easy]);
        expect(JSON.stringify(card)).toBe(before);
    });

    test.each(["2026-10-19T12:00:00Z", "2026-10-23T12:00:00Z"])(
        "preserves distinct timestamps in a review at %s and rollback",
        (reviewTime) => {
            const card = fsrsDefinition.schema.card.parse({
                ...scheduler.newCard({ cardId: "42", now: due }),
                state: State.Review,
                scheduleStatus: "review",
                stability: 2,
                difficulty: 5,
                lastReviewAt: lastReview,
                reps: 3,
                lapses: 1,
            });
            const result = scheduler.review({
                card,
                now: new Date(reviewTime),
                grade: Rating.Good,
            });
            expect(result.revlog).toMatchObject({
                lastReviewAt: lastReview,
                dueAt: due,
                reviewTime: new Date(reviewTime),
            });
            expect(scheduler.rollback(result)).toEqual(card);
            expect(scheduler.forget({ card })).toMatchObject({
                state: State.New,
                reps: 3,
                lapses: 1,
            });
        },
    );
});
