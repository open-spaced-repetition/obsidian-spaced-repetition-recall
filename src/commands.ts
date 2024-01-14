import { MarkdownView } from "obsidian";
import ObsidianSrsPlugin from "./main";
import { ReviewNote } from "src/reviewNote/review-note";
import { ItemInfoModal } from "src/gui/info";
import { Queue } from "./dataStore/queue";
import { debug } from "./util/utils_recall";

export default class Commands {
    plugin: ObsidianSrsPlugin;

    constructor(plugin: ObsidianSrsPlugin) {
        this.plugin = plugin;
    }

    addCommands() {
        const plugin = this.plugin;

        plugin.addCommand({
            id: "view-item-info",
            name: "Item Info",
            checkCallback: (checking: boolean) => {
                const file = plugin.app.workspace.getActiveFile();
                if (file) {
                    if (plugin.store.isInTrackedFiles(file.path)) {
                        if (!checking) {
                            const store = this.plugin.store;
                            const tkfile = store.getTrackedFile(file.path);
                            const deckname = tkfile.lastTag;
                            const deck = this.plugin.reviewDecks[deckname];
                            const msg = `${deckname} has ${deck?.dueNotesCount} dueCount(till today end),\n note onDueC ${this.plugin.noteStats.onDueCount} (till now).`;
                            debug("itemInfo", 0, {
                                msg,
                                tkfile,
                                noteDelayed: this.plugin.noteStats.delayedDays.dict,
                                // decks: deck.scheduledNotes.map((sn) => [sn.note.path, sn.item]),
                                que: store.data.queues.toDayLatterQueue,
                            });
                            new ItemInfoModal(plugin.data.settings, file).open();
                        }
                        return true;
                    }
                }
                return false;
            },
        });

        plugin.addCommand({
            id: "track-file",
            name: "Track Note",
            checkCallback: (checking: boolean) => {
                const file = plugin.app.workspace.getActiveFile();
                if (file != null) {
                    if (!plugin.store.getTrackedFile(file.path)?.isTrackedNote) {
                        if (!checking) {
                            plugin.store.trackFile(file.path, undefined, true);
                            plugin.store.save();
                            plugin.sync();
                            // plugin.updateStatusBar();
                        }
                        return true;
                    }
                }
                return false;
            },
        });

        plugin.addCommand({
            id: "untrack-file",
            name: "Untrack Note",
            checkCallback: (checking: boolean) => {
                const file = plugin.app.workspace.getActiveFile();
                if (file != null) {
                    if (plugin.store.getTrackedFile(file.path)?.isTrackedNote) {
                        if (!checking) {
                            plugin.store.untrackFile(file.path, true);
                            plugin.store.save();
                            plugin.sync();
                            // plugin.updateStatusBar();
                        }
                        return true;
                    }
                }
                return false;
            },
        });

        // plugin.addCommand({
        //     id: "update-file",
        //     name: "Update Note",
        //     checkCallback: (checking: boolean) => {
        //         const file = plugin.app.workspace.getActiveFile();
        //         if (file != null) {
        //             if (plugin.store.isTracked(file.path)) {
        //                 if (!checking) {
        //                     plugin.store.updateItems(file.path);
        //                     plugin.store.save();
        //                     // plugin.updateStatusBar();
        //                 }
        //                 return true;
        //             }
        //         }
        //         return false;
        //     },
        // });
    }

    addDebugCommands() {
        console.log("Injecting debug commands...");
        const plugin = this.plugin;

        plugin.addCommand({
            id: "build-queue",
            name: "Build Queue",
            callback: () => {
                Queue.getInstance().buildQueue();
            },
        });

        plugin.addCommand({
            id: "review-view",
            name: "Review",
            callback: () => {
                Queue.getInstance().buildQueue();
                ReviewNote.recallReviewNote(this.plugin.data.settings);
            },
        });

        plugin.addCommand({
            id: "debug-print-view-state",
            name: "Print View State",
            callback: () => {
                const state = plugin.app.workspace.getActiveViewOfType(MarkdownView).getState();
                console.log(state);
            },
        });

        plugin.addCommand({
            id: "debug-print-eph-state",
            name: "Print Ephemeral State",
            callback: () => {
                console.log(plugin.app.workspace.activeLeaf.getEphemeralState());
            },
        });

        // plugin.addCommand({
        //     id: "debug-print-queue",
        //     name: "Print Queue",
        //     callback: () => {
        //         console.log(plugin.store.data);
        //         console.log(plugin.store.data.queue);
        //         console.log("There are " + plugin.store.data.queue.length + " items in queue.");
        //         console.log(plugin.store.data.newAdded + " new where added to today.");
        //         console.log("repeatQueue: " + plugin.store.data.repeatQueue);
        //         console.log("cardQueue: " + plugin.store.data.cardQueue);
        //         console.log("cardRepeatQueue: " + plugin.store.data.cardRepeatQueue);
        //     },
        // });

        plugin.addCommand({
            id: "debug-clear-queue",
            name: "Clear Queue",
            callback: () => {
                Queue.getInstance().clearQueue();
            },
        });

        plugin.addCommand({
            id: "debug-queue-all",
            name: "Queue All",
            callback: () => {
                const que = Queue.getInstance();
                que.buildQueueAll();
                console.log("Queue Size: " + que.queueSize());
            },
        });

        plugin.addCommand({
            id: "debug-print-data",
            name: "Print Data",
            callback: () => {
                console.log(plugin.store.data);
            },
        });

        // plugin.addCommand({
        //     id: "debug-reset-data",
        //     name: "Reset Data",
        //     callback: () => {
        //         console.log("Resetting data...");
        //         plugin.store.resetData();
        //         console.log(plugin.store.data);
        //     },
        // });

        // plugin.addCommand({
        //     id: "debug-prune-data",
        //     name: "Prune Data",
        //     callback: () => {
        //         console.log("Pruning data...");
        //         plugin.store.pruneData();
        //         console.log(plugin.store.data);
        //     },
        // });

        plugin.addCommand({
            id: "update-dataItems",
            name: "Update Items",
            callback: () => {
                plugin.store.verifyItems();
            },
        });
    }
}
