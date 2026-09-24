import { DateUtils, isArray, logExecutionTime } from "src/util/utils_recall";
import { DataStore } from "./data";
import { TrackedFile } from "./trackedFile";
import { RepetitionItem } from "./repetitionItem";
import { getKeysPreserveType } from "src/utils/types";
import { globalDateProvider } from "src/utils/dates";

export interface IQueue {
    /**
     * @type {number[]}
     */
    queue: Record<string, number[]>;
    /**
     * @type {number[]}
     */
    repeatQueue: number[];

    toDayAllQueue: Record<number, string>;
    toDayLaterQueue: Record<number, string>;

    /**
     * @type {number}
     */
    lastQueue: number;
    /**
     * @type {0}
     */
    newAdded: 0;
}

export const DEFAULT_QUEUE_DATA: IQueue = {
    /**
     * @type {number[]}
     */
    queue: {},
    /**
     * @type {number[]}
     */
    repeatQueue: [],

    toDayAllQueue: {},
    toDayLaterQueue: {},
    /**
     * @type {number}
     */
    lastQueue: 0,
    /**
     * @type {0}
     */
    newAdded: 0,
};

const KEY_ALL = "ALL";

export class Queue implements IQueue {
    static instance: Queue;
    /**
     * @type {number[]}
     * e.g. review: [1,2,3]
     */
    queue: Record<string, number[]>;
    /**
     * @type {number[]}
     */
    repeatQueue: number[];

    toDayAllQueue: Record<number, string>;
    toDayLaterQueue: Record<number, string>;

    // maxNewPerDay: number;
    lastQueue: number;
    /**
     * @type {0}
     */
    newAdded: 0;

    public static getInstance(): Queue {
        if (!Queue.instance) {
            // Queue.instance = new Queue();
            throw Error("there is not Queue instance.");
        }
        return Queue.instance;
    }

    static create(que: Queue) {
        que = Object.assign(new Queue(), que);
        return que;
    }
    constructor() {
        this.queue = {};
        this.repeatQueue = [];
        this.toDayAllQueue = {};
        this.toDayLaterQueue = {};
        Queue.instance = this;
    }

    /**
     * Returns the size of the current queue.
     */
    /**
     * queueSize.
     *
     * @returns {number}
     */
    queueSize(key?: string): number {
        if (key == undefined) {
            key = KEY_ALL;
        }
        return this.queue[key]?.length ?? 0;
    }
    get laterSize(): number {
        const len = Object.keys(this.toDayLaterQueue).length;
        if (len) {
            return len;
        }
        const keys = Object.keys(this.queue);
        keys.remove(KEY_ALL);
        return keys
            .map((key: string) => this.queueSize(key))
            .reduce((a: number, b: number) => a + b, 0);
    }

    /**
     * repeatQueueSize.
     *
     * @returns {number}
     */
    repeatQueueSize(): number {
        return this.repeatQueue.length;
    }
    /**
     * getNextId.
     *
     * @returns {number | null}
     */
    getNextId(key?: string): number | null {
        key = key ? key : KEY_ALL;
        if (this.queueSize(key) > 0) {
            return this.queue[key][0];
        } else if (this.repeatQueue.length > 0) {
            return this.repeatQueue[0];
        } else {
            return null;
        }
    }

    /**
     * buildQueue. indexlist of items
     */
    // @logExecutionTime()
    async buildQueue() {
        // console.log("Building queue...");
        const store = DataStore.getInstance();
        const maxNew = store.settings.maxNewPerDay;
        const now: Date = new Date();
        let newDayFlag = false;

        if (now.getDate() != new Date(this.lastQueue).getDate()) {
            this.newAdded = 0;
            this.clearQueue();
            newDayFlag = true;
        }

        this.InitQIfMissing(KEY_ALL, this.queue);

        let oldAdd = 0;
        let newAdd = 0;

        let untrackedFiles = 0;
        let removedItems = 0;
        const bUnTfiles = new Set<TrackedFile>();
        await Promise.all(
            store.data.trackedFiles.map(async (file, _idx) => {
                if (file?.path == undefined || !file.isTracked) return false;
                let exists = await store.verify(file.path);
                if (!exists) {
                    // in case file moved away.
                    exists = store.updateMovedFile(file);
                }
                if (!exists && !bUnTfiles.has(file)) {
                    // console.debug("untrackfile by buildqueue:", file);
                    bUnTfiles.add(file);
                    removedItems += store.untrackFile(file.path, false);
                    untrackedFiles += 1;
                    // new Notice("untrackfile by buildqueue:" + file);
                }
                return exists;
            }),
        );
        const validItems = store.items.filter((item) => item != null && item.isTracked);

        validItems
            .filter((item) => !item.isCard)
            .forEach(async (item) => {
                // note Queue
                if (item.isNew) {
                    // This is a new item.
                    if (maxNew == -1 || newAdd < maxNew) {
                        // data.newAdded += 1;
                        newAdd += this.push(this.queue[KEY_ALL], item.ID);
                    }
                } else {
                    this.InitQIfMissing(item.deckName, this.queue);
                    if (item.nextReview <= now.getTime()) {
                        this.remove(item, this.repeatQueue);
                        oldAdd += this.push(this.queue[KEY_ALL], item.ID);
                    } else if (
                        newDayFlag &&
                        item.nextReview <= globalDateProvider.endofToday.valueOf()
                    ) {
                        this.push(this.queue[item.deckName], item.ID);
                    }
                }
            });

        this.lastQueue = now.getTime();
        // if (this.settings.shuffleQueue && oldAdd + newAdd > 0) {
        //     MiscUtils.shuffle(data.queue);
        // }

        // console.log(
        //     "Added " + (oldAdd + newAdd) + " notes to review queue, with " + newAdd + " new!",
        // );
        // console.log(
        //     "Added " +
        //         (oldAdd_card + newAdd_card) +
        //         " cards to review queue, with " +
        //         newAdd_card +
        //         " new!",
        // );

        if (untrackedFiles > 0) {
            console.log(
                "Recall: Untracked " +
                    bUnTfiles.size +
                    " files with a total of " +
                    removedItems +
                    " items while building queue!\n",
                bUnTfiles,
            );
        }
    }

    buildQueueAll() {
        const store = DataStore.getInstance();
        this.queue[KEY_ALL] = [];
        const items = store.data.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i] != null || items[i].isTracked) {
                this.queue[KEY_ALL].push(i);
            }
        }
    }

    // loadRepeatQueue(rvdecks: { [deckKey: string]: ReviewDeck }) {
    //     if (this.repeatQueueSize() > 0) {
    //         // const repeatDeckCounts: Record<string, number> = {};
    //         this.repeatQueue.forEach((id) => {
    //             const dname: string = this.getItembyID(id).deckName;
    //             // this.toDayAllQueue[id] = dname;
    //             // if (!Object.keys(repeatDeckCounts).includes(dname)) {
    //             //     repeatDeckCounts[dname] = 0;
    //             // }
    //             this.plugin.dueNotesCount++;
    //         });
    //         // return repeatDeckCounts;
    //     }
    // }

    clearQueue(queue: unknown = null) {
        if (queue == null) {
            this.queue = {};
            this.repeatQueue = [];
            this.toDayAllQueue = {};
            this.toDayLaterQueue = {};
            console.log("all queue are cleared!");
        } else if (isArray(queue)) {
            queue = [];
        } else {
            queue = {};
        }
    }

    /**
     * isQueued.
     *
     * @param {number} id
     * @returns {boolean}
     */
    isQueued(queue: number[], id: number): boolean {
        return queue?.includes(id) ?? false;
    }

    isInLaterQueue(id: number): boolean {
        return Object.keys(this.toDayLaterQueue).includes(id.toString());
    }
    InitQIfMissing(key: string, queueR?: Record<string, number[]>): void {
        if (!this.hasQueue(key, queueR)) queueR[key] = [];
    }

    hasQueue(key: string, queueR?: Record<string, number[]>): boolean {
        if (!queueR) {
            queueR = this.queue;
        }
        return Object.prototype.hasOwnProperty.call(queueR, key);
    }

    /**
     * isInRepeatQueue.
     *
     * @param {number} item
     * @returns {boolean}
     */
    isInRepeatQueue(item: number): boolean {
        return this.repeatQueue.includes(item);
    }

    updateWhenReview(item: RepetitionItem, correct: boolean, repeatItems: boolean) {
        if (this.isInRepeatQueue(item.ID)) {
            this.remove(item, this.repeatQueue);
        }
        this.remove(item, this.queue[KEY_ALL]);
        this.remove(item, this.queue[item.deckName]);
        if (repeatItems && !correct) {
            this.push(this.repeatQueue, item.ID); // Re-add until correct.
        } else {
            // update this.toDayLaterQueue
            const store = DataStore.getInstance();
            delete this.toDayLaterQueue[item.ID];
            if (item.nextReview <= globalDateProvider.endofToday.valueOf()) {
                this.toDayLaterQueue[item.ID] = item.deckName;
            }
            getKeysPreserveType(this.toDayLaterQueue)
                .map((idStr) => {
                    const id: number = Number(idStr);
                    return store.getItembyID(id);
                })
                .forEach((item) => {
                    if (item.nextReview - Date.now() < 0) {
                        delete this.toDayLaterQueue[item.ID];
                    }
                });
        }
    }

    remove(item: RepetitionItem, queue?: number[]) {
        if (queue == undefined) {
            if (this.isQueued(this.queue[item.deckName], item.ID)) {
                this.remove(item, this.queue[item.deckName]);
                this.remove(item, this.repeatQueue);
            }
            if (this.isQueued(this.queue[KEY_ALL], item.ID)) {
                this.remove(item, this.queue[KEY_ALL]);
            }

            if (this.toDayLaterQueue[item.ID] !== null) {
                delete this.toDayLaterQueue[item.ID];
            }
        } else {
            if (this.isQueued(queue, item.ID)) {
                queue.remove(item.ID);
            }
        }
    }
    push(queue: number[], id: number) {
        let cnt = 0;
        if (this.isQueued(queue, id)) {
            return cnt;
        }
        queue.push(id);
        cnt++;
        return cnt;
    }
}
