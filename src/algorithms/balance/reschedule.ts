import { RepetitionItem } from "src/dataStore/repetitionItem";
import { debug } from "src/util/utils_recall";
import { SrsAlgorithm } from "../algorithms";
import { FsrsAlgorithm, FsrsData } from "../fsrs";

export function reschedule(items: RepetitionItem[]): RepetitionItem[] {
    let reCnt = 0;
    console.group("reschedule");
    if (items[0].isFsrs) {
        const result = reschedule_fsrs(items);
        reCnt = result.reCnt;
    } else {
        reCnt = reschedule_default(items).reCnt;
    }
    console.groupEnd();
    debug("reschedule", 0, { items, reCnt });
    return items;
}

function reschedule_default(items: RepetitionItem[]) {
    let reCnt = 0;

    items.map((item) => {
        const interval = item.interval * 9 * (1 / 0.9 - 1);
        const newitvl = Math.min(Math.max(Math.round(interval), 1), 3650);
        if (newitvl !== item.interval) {
            reCnt++;
            item.updateDueByInterval(newitvl);
        }
    });

    // debug("reschedule", 0, { items, reCnt });
    return { items, reCnt };
}

function reschedule_fsrs(items: RepetitionItem[]) {
    let reCnt = 0;
    const algorithm = SrsAlgorithm.getInstance() as FsrsAlgorithm;
    const fsrs = algorithm.fsrs;

    items.map((item) => {
        if (!item.isTracked) return;
        const data = item.data as FsrsData;
        if (data.lastReviewAt === null) return;
        const newitvl = Math.min(
            fsrs.model.nextInterval(data, algorithm.settings.request_retention),
            algorithm.settings.maximum_interval,
        );
        if (newitvl !== data.scheduledDays) {
            reCnt++;
            item.updateDueByInterval(newitvl);
        }
    });

    return { items, reCnt };
}
