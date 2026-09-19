import { TFile } from "obsidian";
import type { DataStore } from "./data";
import { RepetitionItem } from "./repetitionItem";
import { TrackedFile } from "./trackedFile";
import { Iadapter } from "./adapter";

export function getFileIndex(store: DataStore, path: string): number {
    return store.data.trackedFiles.findIndex((val) => val != null && val.path === path);
}

export function getTrackedFile(store: DataStore, path: string): TrackedFile | null {
    const ind = getFileIndex(store, path);
    if (ind < 0) {
        return null;
    }
    return store.data.trackedFiles[ind];
}

export function isInTrackedFiles(store: DataStore, path: string): boolean {
    return getFileIndex(store, path) >= 0;
}

export function isTrackedCardfile(store: DataStore, path: string): boolean {
    return getTrackedFile(store, path)?.hasCards ?? false;
}

export function getItemsOfFile(store: DataStore, path: string): RepetitionItem[] {
    const file = getTrackedFile(store, path);
    return file?.isTracked ? store.getItems(file.itemIDs) : [];
}

export function getFilePath(store: DataStore, item: RepetitionItem): string | null {
    const trackedFile = store.data.trackedFiles[item.fileIndex];
    return trackedFile?.path ?? null;
}

export function findMovedFile(store: DataStore, path: string): string | null {
    const pathArr = path.split("/");
    const name = pathArr[pathArr.length - 1].replace(".md", "");
    const notes: TFile[] = Iadapter.instance.vault.getMarkdownFiles();
    const result: string[] = [];

    notes.some((note: TFile) => {
        if (note.basename.includes(name) || name.includes(note.basename)) {
            result.push(note.path);
        }
        return false;
    });

    if (result.length > 0) {
        console.debug("find file: %s has been moved. %d", path, result.length);
        return result[0];
    }
    return null;
}

export function updateMovedFile(store: DataStore, trackedFile: TrackedFile): boolean {
    const newpath = findMovedFile(store, trackedFile.path);
    if (newpath !== null) {
        trackedFile.rename(newpath);
        return true;
    }
    return false;
}
