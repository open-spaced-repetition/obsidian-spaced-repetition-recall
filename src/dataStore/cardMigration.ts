import { CardInfo, TrackedFile } from "./trackedFile";

export interface BlockIdMatch {
    trackedFile: TrackedFile;
    cardIndex: number;
}

export function rebuildBlockIdIndex(
    trackedFiles: TrackedFile[],
    blockIDIndex: Map<string, BlockIdMatch[]>,
): void {
    blockIDIndex.clear();

    for (const trackedFile of trackedFiles) {
        if (trackedFile == null || !trackedFile.hasCards || trackedFile.cardItems == null) {
            continue;
        }

        for (let i = 0; i < trackedFile.cardItems.length; i++) {
            const blockID = trackedFile.cardItems[i]?.blockID;
            if (!blockID) continue;

            const matches = blockIDIndex.get(blockID) ?? [];
            matches.push({ trackedFile, cardIndex: i });
            blockIDIndex.set(blockID, matches);
        }
    }
}

export function findCardInfoByBlockID(
    blockID: string,
    excludePath: string | undefined,
    blockIDIndex: Map<string, BlockIdMatch[]>,
): { trackedFile: TrackedFile; cardInfo: CardInfo; cardIndex: number } | null {
    if (!blockID) return null;

    const matches = blockIDIndex.get(blockID) ?? [];
    const candidates = matches.filter((match) => match.trackedFile.path !== excludePath);

    if (candidates.length !== 1) {
        return null;
    }

    const { trackedFile, cardIndex } = candidates[0];
    const cardInfo = trackedFile.cardItems?.[cardIndex];
    if (cardInfo == null) {
        return null;
    }

    return { trackedFile, cardInfo, cardIndex };
}
