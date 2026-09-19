import type { DataStore } from "./data";
import { CardInfo, TrackedFile } from "./trackedFile";
import { RPITEMTYPE, RepetitionItem } from "./repetitionItem";
import { SrsAlgorithm, algorithmNames } from "src/algorithms/algorithms";
import { AnkiData } from "src/algorithms/anki";
import { FsrsData } from "src/algorithms/fsrs";
import { t } from "src/lang/helpers";
import { MiscUtils } from "src/util/utils_recall";

export function updateItem(
    store: DataStore,
    id: number = null,
    fileIndex: number,
    itemType: RPITEMTYPE,
    deckName: string,
): number {
    if (id != null && id < 0) return;
    // `item` will be retrieved later when needed; declare at point of use to satisfy eslint
    const algorithm = SrsAlgorithm.getInstance();

    const newItem = new RepetitionItem(
        id ?? store.maxItemId + 1,
        fileIndex,
        itemType,
        deckName,
        algorithm.defaultData(),
    );

    if (id == undefined || id == null) {
        newItem.ID = store.maxItemId + 1;
        store.data.items.push(newItem);
        return newItem.ID;
    }

    const item = store.getItembyID(id);
    if (item != null) {
        item.setTracked(fileIndex);
        item.itemType = itemType;
        item.data = Object.assign(algorithm.defaultData(), item.data);
        return item.ID;
    }

    store.data.items.push(newItem);
    return newItem.ID;
}

export function updateItems(
    store: DataStore,
    path: string,
    type: RPITEMTYPE,
    dname: string,
    notice?: boolean,
): { added: number; removed: number } | null {
    if (notice == null) notice = true;

    const ind = store.getFileIndex(path);
    if (ind == -1) {
        console.log("Attempt to update untracked file: " + path);
        return;
    }
    const trackedFile = store.getFileByIndex(ind);

    let added = 0;
    let removed = 0;

    const newItems: Record<string, number> = {};
    if ("file" in trackedFile.items && trackedFile.noteID > 0) {
        newItems["file"] = trackedFile.items["file"];
        store.getItembyID(trackedFile.noteID).setTracked(ind);
    } else if (type === RPITEMTYPE.NOTE) {
        const ID = updateItem(store, undefined, ind, type, dname);
        newItems["file"] = ID;
        added += 1;
    } else {
        newItems["file"] = -1;
    }

    for (const key in trackedFile.items) {
        if (!(key in newItems)) {
            const itemInd = trackedFile.items[key];
            store.unTrackItem(itemInd);
            console.debug("null item:" + itemInd);
            removed += 1;
        }
    }
    trackedFile.items = newItems;

    if (notice) {
        MiscUtils.notice(t("DATA_ADDED_REMOVED_ITEMS_SHORT", { added: added, removed: removed }));
    }
    return { added, removed };
}

export function updateCardItems(
    store: DataStore,
    trackedFile: TrackedFile,
    cardinfo: CardInfo,
    count: number,
    deckName: string,
    notice?: boolean,
): { added: number; removed: number } | null {
    if (notice == null) notice = false;
    const idsLen = cardinfo.itemIds.length;
    const ind = store.getFileIndex(trackedFile.path);
    store.getItems(cardinfo.itemIds).filter((item, _idx) => {
        if (_idx < count) {
            item.setTracked(ind);
            item.updateDeckName(deckName, true);
            return true;
        }
    });
    if (idsLen === count) {
        return;
    }

    let added = 0;
    let removed = 0;

    const newitemIds: number[] = cardinfo.itemIds.slice();

    if (count < idsLen) {
        const untrackExtraItems = () => {
            const rmvIds = newitemIds.slice(count);
            rmvIds.forEach((id) => {
                store.unTrackItem(id);
                removed++;
            });
            newitemIds.splice(count, idsLen - count);
            console.debug("delete %d ids:", removed, rmvIds);
        };
        untrackExtraItems();
    } else {
        for (let i = 0; i < count - idsLen; i++) {
            const cardId = updateItem(store, undefined, ind, RPITEMTYPE.CARD, deckName);
            newitemIds.push(cardId);
            added += 1;
        }
    }

    newitemIds.sort((a: number, b: number) => a - b);
    cardinfo.itemIds = newitemIds;

    const msg = t("DATA_FILE_UPDATE", {
        filePath: trackedFile.path,
        lineNo: cardinfo.lineNo,
        added: added,
        removed: removed,
    });
    store.rebuildBlockIdIndex();
    console.debug(msg);
    if (notice) {
        MiscUtils.notice(msg);
    }
    return { added, removed };
}

export async function verifyItems(store: DataStore) {
    const items = store.data.items;
    await Promise.all(
        items.map(async (item, _idx) => {
            if (item != null && item.isTracked) {
                const itemType = !store.isCardItem(item.ID) ? RPITEMTYPE.NOTE : RPITEMTYPE.CARD;
                updateItem(store, item.ID, item.fileIndex, itemType, item.deckName);
            }
        }),
    );
    MiscUtils.notice(t("DATA_ALL_ITEMS_UPDATED"));
}

export function updateReviewedCounts(
    store: DataStore,
    id: number,
    type: RPITEMTYPE = RPITEMTYPE.NOTE,
) {
    let rc = store.data.reviewedCounts;
    if (type === RPITEMTYPE.NOTE) {
        rc = store.data.reviewedCounts;
    } else {
        rc = store.data.reviewedCardCounts;
    }
    const date = window.moment(new Date()).format("YYYY-MM-DD");
    if (!(date in rc)) {
        rc[date] = { due: 0, new: 0 };
    }
    const item = store.getItembyID(id);
    if (item.isDue) {
        if (store.settings.algorithm === algorithmNames.Fsrs) {
            const data: FsrsData = item.data as FsrsData;
            if (new Date(data.last_review) < new Date(date)) {
                rc[date].due++;
            }
        } else {
            const data: AnkiData = item.data as AnkiData;
            if (data.lastInterval >= 1) {
                rc[date].due++;
            }
        }
    } else {
        rc[date].new++;
        console.debug("new:", rc[date].new);
    }
}
