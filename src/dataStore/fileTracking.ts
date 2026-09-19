import { TFile, TFolder } from "obsidian";
import type { DataStore } from "./data";
import { RPITEMTYPE } from "./repetitionItem";

export function untrackFilesInFolder(
    store: DataStore,
    folder: TFolder,
    recursive?: boolean,
): number {
    let firstCalled = false;
    if (recursive == null) {
        recursive = true;
        firstCalled = true;
    }

    let totalRemoved = 0;
    folder.children.forEach((child) => {
        if (child instanceof TFolder) {
            if (recursive) {
                totalRemoved += untrackFilesInFolder(store, child, recursive);
            }
        } else if (child instanceof TFile) {
            if (store.getTrackedFile(child.path)?.isTrackedNote) {
                const removed = store.untrackFile(child.path, false);
                totalRemoved += removed;
            }
        }
    });
    if (firstCalled) {
        console.log("folder untracked:", folder.path, totalRemoved);
    }
    return totalRemoved;
}

export function trackFilesInFolder(
    store: DataStore,
    folder: TFolder,
    recursive?: boolean,
): { added: number; removed: number } {
    if (recursive == null) recursive = true;

    let totalAdded = 0;
    let totalRemoved = 0;
    folder.children.forEach((child) => {
        if (child instanceof TFolder) {
            if (recursive) {
                const nested = trackFilesInFolder(store, child, recursive);
                totalAdded += nested.added;
                totalRemoved += nested.removed;
            }
        } else if (child instanceof TFile && child.extension === "md") {
            if (!store.getTrackedFile(child.path)?.isTrackedNote) {
                const { added, removed } = store.trackFile(child.path, RPITEMTYPE.NOTE, false);
                totalAdded += added;
                totalRemoved += removed;
            }
        }
    });

    return { added: totalAdded, removed: totalRemoved };
}
