import { DataStore } from "src/dataStore/data";
import { DataLocation } from "src/dataStore/dataLocation";
import { CardInfo, TrackedFile } from "src/dataStore/trackedFile";
import { RPITEMTYPE, RepetitionItem } from "src/dataStore/repetitionItem";
import { DEFAULT_SETTINGS, SRSettings } from "src/settings";
import { SrsAlgorithm, algorithmNames } from "src/algorithms/algorithms";
import { DefaultAlgorithm } from "src/algorithms/scheduling_default";

const settings: SRSettings = Object.assign({}, DEFAULT_SETTINGS);
settings.dataLocation = DataLocation.PluginFolder;
settings.cardBlockID = true;

function createStoreWithTwoFiles(): DataStore {
    const algo = new DefaultAlgorithm();
    algo.updateSettings(settings.algorithmSettings[algorithmNames.Default]);

    const store = new DataStore(settings, "./");
    store.data = {
        queues: { newQueue: {}, dueQueue: {}, repeatQueue: {} } as any,
        reviewedCounts: {},
        reviewedCardCounts: {},
        items: [],
        trackedFiles: [],
        mtime: 0,
    };

    // Track File A with a card that has a blockID
    store.trackFile("folder/noteA.md", RPITEMTYPE.CARD, false);
    const fileA = store.getTrackedFile("folder/noteA.md");
    const cardInfo = fileA.trackCard(10, "hash_card_1");
    cardInfo.blockID = "^block123";
    store.updateCardItems(fileA, cardInfo, 1, "deck1", false);

    // Simulate some review progress on the card
    const itemId = cardInfo.itemIds[0];
    const item = store.getItembyID(itemId);
    item.timesReviewed = 5;
    item.timesCorrect = 4;
    item.nextReview = Date.now() + 3 * 24 * 60 * 60 * 1000; // due in 3 days

    // Track File B (empty, no cards yet)
    store.trackFile("folder/noteB.md", RPITEMTYPE.CARD, false);

    return store;
}

describe("Cross-file blockID lookup", () => {
    describe("findCardInfoByBlockID", () => {
        test("finds CardInfo by blockID in another file", () => {
            const store = createStoreWithTwoFiles();
            const result = store.findCardInfoByBlockID("^block123", "folder/noteB.md");

            expect(result).not.toBeNull();
            expect(result.trackedFile.path).toBe("folder/noteA.md");
            expect(result.cardInfo.blockID).toBe("^block123");
            expect(result.cardInfo.itemIds.length).toBe(1);
        });

        test("returns null when blockID not found anywhere", () => {
            const store = createStoreWithTwoFiles();
            const result = store.findCardInfoByBlockID("^nonexistent", "folder/noteB.md");

            expect(result).toBeNull();
        });

        test("returns null for empty blockID", () => {
            const store = createStoreWithTwoFiles();
            const result = store.findCardInfoByBlockID("", "folder/noteB.md");

            expect(result).toBeNull();
        });

        test("returns null for null blockID", () => {
            const store = createStoreWithTwoFiles();
            const result = store.findCardInfoByBlockID(null, "folder/noteB.md");

            expect(result).toBeNull();
        });

        test("excludes the specified path from search", () => {
            const store = createStoreWithTwoFiles();
            // Search excluding the file that has the card - should not find it
            const result = store.findCardInfoByBlockID("^block123", "folder/noteA.md");

            expect(result).toBeNull();
        });

        test("finds card without excludePath", () => {
            const store = createStoreWithTwoFiles();
            const result = store.findCardInfoByBlockID("^block123");

            expect(result).not.toBeNull();
            expect(result.trackedFile.path).toBe("folder/noteA.md");
        });
    });

    describe("migrateCardInfo", () => {
        test("migrates card from source to destination file preserving review data", () => {
            const store = createStoreWithTwoFiles();
            const fileA = store.getTrackedFile("folder/noteA.md");
            const fileB = store.getTrackedFile("folder/noteB.md");

            const originalCardInfo = fileA.cardItems[0];
            const originalItemId = originalCardInfo.itemIds[0];
            const originalItem = store.getItembyID(originalItemId);
            const originalTimesReviewed = originalItem.timesReviewed;
            const originalTimesCorrect = originalItem.timesCorrect;
            const originalNextReview = originalItem.nextReview;

            const result = store.migrateCardInfo(fileA, 0, fileB, 5, "new_hash", "^block123");

            // Card should be removed from source file
            expect(fileA.cardItems.length).toBe(0);

            // Card should be in destination file
            expect(fileB.cardItems.length).toBe(1);
            expect(result.lineNo).toBe(5);
            expect(result.cardTextHash).toBe("new_hash");
            expect(result.blockID).toBe("^block123");
            expect(result.itemIds).toEqual([originalItemId]);

            // Review data should be preserved
            const migratedItem = store.getItembyID(originalItemId);
            expect(migratedItem.timesReviewed).toBe(originalTimesReviewed);
            expect(migratedItem.timesCorrect).toBe(originalTimesCorrect);
            expect(migratedItem.nextReview).toBe(originalNextReview);

            // fileIndex should be updated to destination file's index
            const destFileIndex = store.getFileIndex("folder/noteB.md");
            expect(migratedItem.fileIndex).toBe(destFileIndex);
        });

        test("creates cardItems array on destination if it does not have cards", () => {
            const store = createStoreWithTwoFiles();
            const fileA = store.getTrackedFile("folder/noteA.md");

            // Create a file without cardItems
            store.trackFile("folder/noteC.md", RPITEMTYPE.NOTE, false);
            const fileC = store.getTrackedFile("folder/noteC.md");
            expect(fileC.hasCards).toBe(false);

            store.migrateCardInfo(fileA, 0, fileC, 1, "hash1", "^block123");

            expect(fileC.hasCards).toBe(true);
            expect(fileC.cardItems.length).toBe(1);
        });

        test("sorts cardItems by lineNo after migration", () => {
            const store = createStoreWithTwoFiles();
            const fileA = store.getTrackedFile("folder/noteA.md");
            const fileB = store.getTrackedFile("folder/noteB.md");

            // Add existing card to file B at line 10
            const existingCard = fileB.trackCard(10, "existing_hash");
            existingCard.blockID = "^existingBlock";
            store.updateCardItems(fileB, existingCard, 1, "deck1", false);

            // Migrate card from A to B at line 3 (should be sorted before existing card)
            store.migrateCardInfo(fileA, 0, fileB, 3, "migrated_hash", "^block123");

            expect(fileB.cardItems.length).toBe(2);
            expect(fileB.cardItems[0].lineNo).toBe(3);
            expect(fileB.cardItems[1].lineNo).toBe(10);
        });
    });
});
