import { MarkdownView, Notice } from "obsidian";
import ObsidianSrsPlugin from "./main";
import { ItemInfoModal } from "src/gui/info";
import { Queue } from "./dataStore/queue";
import { debug } from "./util/utils_recall";
import { postponeItems } from "./algorithms/balance/postpone";
import { reschedule } from "./algorithms/balance/reschedule";
import { GetInputModal } from "./gui/getInputModal";
import { ReviewView } from "./gui/reviewView";
import { t } from "src/lang/helpers";

export default class Commands {
    plugin: ObsidianSrsPlugin;

    constructor(plugin: ObsidianSrsPlugin) {
        this.plugin = plugin;
    }

    addCommands() {
        const plugin = this.plugin;

        plugin.addCommand({
            id: "view-item-info",
            name: t("CMD_ITEM_INFO"),
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
                            // debug("itemInfo", 0, {
                            //     msg,
                            //     tkfile,
                            //     noteDelayed: this.plugin.noteStats.delayedDays.dict,
                            //     // decks: deck.scheduledNotes.map((sn) => [sn.note.path, sn.item]),
                            //     que: store.data.queues.toDayLaterQueue,
                            // });
                            new ItemInfoModal(plugin, file).open();
                        }
                        return true;
                    }
                }
                return false;
            },
        });

        plugin.addCommand({
            id: "track-file",
            name: t("CMD_TRACK_NOTE"),
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
            name: t("CMD_UNTRACK_NOTE"),
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

        plugin.addCommand({
            id: "reschedule",
            name: t("CMD_RESCHEDULE"),
            callback: () => {
                reschedule(plugin.store.items.filter((item) => item.hasDue && item.isTracked));
            },
        });

        plugin.addCommand({
            id: "postpone-cards",
            name: t("CMD_POSTPONE_CARDS"),
            callback: () => {
                postponeItems(plugin.store.items.filter((item) => item.isCard && item.isTracked));
            },
        });
        plugin.addCommand({
            id: "postpone-notes",
            name: t("CMD_POSTPONE_NOTES"),
            callback: () => {
                postponeItems(plugin.store.items.filter((item) => !item.isCard && item.isTracked));
            },
        });
        plugin.addCommand({
            id: "postpone-all",
            name: t("CMD_POSTPONE_ALL"),
            callback: () => {
                postponeItems(plugin.store.items.filter((item) => item.isTracked));
            },
        });

        plugin.addCommand({
            id: "postpone-note-manual",
            name: t("CMD_POSTPONE_NOTE_MANUAL"),
            checkCallback: (checking: boolean) => {
                const file = plugin.app.workspace.getActiveFile();
                const settings = plugin.data.settings;
                if (file != null) {
                    if (plugin.store.getTrackedFile(file.path)?.isTrackedNote) {
                        if (!checking) {
                            const tkfile = plugin.store.getTrackedFile(file.path);
                            const input = new GetInputModal(
                                plugin.app,
                                t("CMD_INPUT_POSITIVE_NUMBER"),
                            );
                            input.submitCallback = async (days: number) => {
                                postponeItems([plugin.store.getItembyID(tkfile.noteID)], days);
                                plugin.store.save();
                                new Notice(t("CMD_NOTE_POSTPONED", { days: days }));
                                await plugin.sync();
                                if (settings.autoNextNote && plugin.lastSelectedReviewDeck) {
                                    plugin.reviewNextNote(plugin.lastSelectedReviewDeck);
                                }
                            };
                            input.open();
                        }
                        return true;
                    }
                }
                return false;
            },
        });

        plugin.addCommand({
            id: "postpone-cards-manual",
            name: t("CMD_POSTPONE_CARDS_MANUAL"),
            checkCallback: (checking: boolean) => {
                const file = plugin.app.workspace.getActiveFile();
                if (file != null) {
                    if (plugin.store.getTrackedFile(file.path)?.isTracked) {
                        if (!checking) {
                            const tkfile = plugin.store.getTrackedFile(file.path);
                            const input = new GetInputModal(
                                plugin.app,
                                t("CMD_INPUT_POSITIVE_NUMBER"),
                            );
                            input.submitCallback = (days: number) =>
                                postponeItems(
                                    tkfile.cardIDs.map((id) => {
                                        return plugin.store.getItembyID(id);
                                    }),
                                    days,
                                );
                            input.open();

                            // plugin.store.save();
                            plugin.sync();
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
            name: t("CMD_BUILD_QUEUE"),
            callback: () => {
                Queue.getInstance().buildQueue();
            },
        });

        plugin.addCommand({
            id: "review-view",
            name: t("CMD_REVIEW"),
            callback: () => {
                Queue.getInstance().buildQueue();
                ReviewView.getInstance().recallReviewNote(this.plugin.data.settings);
            },
        });

        plugin.addCommand({
            id: "debug-print-view-state",
            name: t("CMD_PRINT_VIEW_STATE"),
            callback: () => {
                const state = plugin.app.workspace.getActiveViewOfType(MarkdownView).getState();
                console.log(state);
            },
        });

        plugin.addCommand({
            id: "debug-print-eph-state",
            name: t("CMD_PRINT_EPHEMERAL_STATE"),
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
        //     },
        // });

        plugin.addCommand({
            id: "debug-clear-queue",
            name: t("CMD_CLEAR_QUEUE"),
            callback: () => {
                Queue.getInstance().clearQueue();
            },
        });

        plugin.addCommand({
            id: "debug-queue-all",
            name: t("CMD_QUEUE_ALL"),
            callback: () => {
                const que = Queue.getInstance();
                que.buildQueueAll();
                console.log("Queue Size: " + que.queueSize());
            },
        });

        plugin.addCommand({
            id: "debug-print-data",
            name: t("CMD_PRINT_DATA"),
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
            name: t("CMD_UPDATE_ITEMS"),
            callback: () => {
                plugin.store.verifyItems();
            },
        });
    }
}
