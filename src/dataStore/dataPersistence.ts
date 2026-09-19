import type { DataStore } from "./data";
import { DEFAULT_SRS_DATA } from "./data";
import { Iadapter } from "./adapter";
import { MiscUtils } from "src/util/utils_recall";
import { t } from "src/lang/helpers";

export async function loadData(store: DataStore, path = store.dataPath) {
    try {
        const adapter = Iadapter.instance.adapter;

        if (await adapter.exists(path)) {
            const data = await adapter.read(path);
            if (data == null) {
                console.log("Unable to read SRS data!");
                store.data = Object.assign({}, DEFAULT_SRS_DATA);
            } else {
                console.log("Reading tracked files...");
                store.data = Object.assign(Object.assign({}, DEFAULT_SRS_DATA), JSON.parse(data));
                store.data.mtime = await getmtime(store, path);
            }
        } else {
            console.log("Tracked files not found! Creating new file...");
            store.data = Object.assign({}, DEFAULT_SRS_DATA);
            await saveData(store, path);
        }
    } catch (error) {
        console.log(error + "Tracked files not found! Creating new file...");
        store.data = Object.assign({}, DEFAULT_SRS_DATA);
        await saveData(store, path);
    }
    store.toInstances();
}

export async function reloadData(store: DataStore) {
    const mtime = await getmtime(store, store.dataPath);
    if (mtime - store.data.mtime > 10) {
        console.debug("reload newer tracked_files.json: ", mtime, mtime - store.data.mtime);
        await loadData(store);
    }
}

export async function saveData(store: DataStore, path = store.dataPath) {
    try {
        await Iadapter.instance.adapter.write(path, JSON.stringify(store.data));
        store.data.mtime = await getmtime(store, path);
    } catch (error) {
        MiscUtils.notice(t("DATA_UNABLE_TO_SAVE"));
        console.log(error);
        return;
    }
}

export async function getmtime(store: DataStore, path = store.dataPath) {
    const adapter = Iadapter.instance.adapter;
    const stat = await adapter.stat(path.normalize());
    return stat != null ? stat.mtime : 0;
}

export async function verifyData(store: DataStore, path: string): Promise<boolean> {
    const adapter = Iadapter.instance?.adapter;
    if (!adapter) {
        return true;
    }
    if (path != null) {
        return await adapter.exists(path).catch((_reason) => {
            console.error("Unable to verify file: ", path);
            return false;
        });
    }
    return false;
}

export async function pruneData(store: DataStore) {
    const tracked_files = store.data.trackedFiles;
    let removedItems = store.itemSize;
    let removedtkfiles = tracked_files.length;

    store.data = MiscUtils.assignOnly(DEFAULT_SRS_DATA, store.data);

    store.data.trackedFiles = store.data.trackedFiles.filter(async (tkfile, _idx) => {
        if (tkfile == null || !tkfile.isTracked) {
            return false;
        }
        const hasFileIdx =
            store.getItems(tkfile.itemIDs).filter((item) => item?.isTracked).length > 0;
        return hasFileIdx && (await verifyData(store, tkfile.path));
    });

    store.data.items = store.data.trackedFiles
        .map((tkfile, idx) => {
            return store
                .getItems(tkfile.itemIDs)
                .filter((item) => item != null)
                .filter((item) => {
                    item.fileIndex = idx;
                    return true;
                });
        })
        .flat();

    removedtkfiles = removedtkfiles - store.data.trackedFiles.length;
    removedItems = removedItems - store.itemSize;
    store.data.queues.clearQueue();
    await saveData(store, store.dataPath);

    console.log(
        "removed " +
            removedtkfiles +
            " nullTrackedfile(s), removed " +
            removedItems +
            " nullitem(s).",
    );
    return;
}
