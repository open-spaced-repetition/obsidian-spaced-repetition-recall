import { dateChrono, defineScheduler, State } from "ts-fsrs";
import { FSRS6Model } from "ts-fsrs/models/fsrs-6";
import {
    schedulerDesiredRetentionMiddleware,
    schedulerFuzzingMiddleware,
    schedulerLearningStepsMiddleware,
    schedulerMaximumIntervalMiddleware,
    schedulerMonotonicIntervalMiddleware,
    schedulerScheduledDaysMiddleware,
    schedulerStatsMiddleware,
} from "ts-fsrs/middlewares";

export const fsrsDefinition = defineScheduler({ model: FSRS6Model, chrono: dateChrono }).use(
    schedulerDesiredRetentionMiddleware,
    schedulerFuzzingMiddleware,
    schedulerStatsMiddleware,
    schedulerScheduledDaysMiddleware,
    schedulerLearningStepsMiddleware,
    schedulerMaximumIntervalMiddleware,
    schedulerMonotonicIntervalMiddleware,
);

export type FsrsScheduler = ReturnType<typeof fsrsDefinition.create>;
export type FsrsData = ReturnType<FsrsScheduler["newCard"]>;
export type FsrsReviewLog = ReturnType<FsrsScheduler["review"]>["revlog"];

// Called only by the startup data migration.
export function migrateFsrsCard(value: unknown, id: number): FsrsData {
    const stored = value as Record<string, unknown>;
    const lastReview = stored.last_review;
    return fsrsDefinition.schema.card.parse({
        ...stored,
        cardId: String(id),
        dueAt: new Date(stored.due as string),
        lastReviewAt:
            stored.state === State.New || lastReview == null
                ? null
                : new Date(lastReview as string),
        scheduleStatus:
            stored.state === State.New
                ? "new"
                : stored.state === State.Review
                  ? "review"
                  : "learning",
        scheduledDays: stored.scheduled_days,
        learningStep: stored.learning_steps ?? 0,
    });
}
