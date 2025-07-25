import { RepetitionItem } from "./repetitionItem";
export * as MixQueSet from "./mixQueSet";

export type tIMixQueSet = Record<string, number | boolean>; // isDue,DueDefaultCnt, NewDefaultCnt
export interface MixQueSet {
    isDue: boolean;
    DueDefaultCnt: number;
    NewDefaultCnt: number;

    _isCard: boolean;
    CardDefaultCnt: number;
    NoteDefaultCnt: number;

    // private static _instance: MixQueSet;
    _dnCnt: number;
    _cnCnt: number;
    // private _inMuti: boolean = false;
}
const DEFAULT_MIXQUESET: MixQueSet = {
    isDue: true,
    DueDefaultCnt: 3,
    NewDefaultCnt: 2,

    _isCard: false,
    CardDefaultCnt: 4,
    NoteDefaultCnt: 1,

    // private static _instance: MixQueSet;
    _dnCnt: 0,
    _cnCnt: 0,
};
let instance: MixQueSet;

export function create(due: number = 3, newdc: number = 2, card: number = 4, note: number = 1) {
    const mqs = Object.assign({}, DEFAULT_MIXQUESET);
    mqs.isDue = true;
    mqs._isCard = false;
    mqs.DueDefaultCnt = due;
    mqs.NewDefaultCnt = newdc;
    mqs.CardDefaultCnt = card;
    mqs.NoteDefaultCnt = note;
    instance = mqs;
    return mqs;
}

export function getInstance() {
    if (!instance) {
        throw Error("there is not MixQueSet instance.");
    }
    return instance;
}

export const isDue = () => {
    return instance.isDue;
};

export const isCard = () => {
    return _isCard(instance);
};
function _isCard(mqs: MixQueSet) {
    return mqs._isCard;
}

export function inMultiCloze(multi = true) {
    // instance._inMuti = multi;
    instance._isCard = multi;
    if (instance._cnCnt === 0) {
        instance._cnCnt = instance.CardDefaultCnt;
    }
}

export function calcNext(dueCnthad: number, newCnthad: number) {
    if (instance.DueDefaultCnt === 0) return (instance.isDue = newCnthad > 0 ? false : true);
    if (instance.NewDefaultCnt === 0) return (instance.isDue = dueCnthad > 0 ? true : false);
    if (dueCnthad === 0 && newCnthad > 0) return (instance.isDue = false);
    if (dueCnthad > 0 && newCnthad === 0) return (instance.isDue = true);
    instance._dnCnt++;
    if (instance.isDue) {
        if (instance._dnCnt >= instance.DueDefaultCnt && newCnthad > 0) {
            instance.isDue = false;
            instance._dnCnt = 0;
        }
    } else {
        if (instance._dnCnt >= instance.NewDefaultCnt && dueCnthad > 0) {
            instance.isDue = true;
            instance._dnCnt = 0;
        }
    }
}

export function arbitrateCardNote(item: RepetitionItem, cardtlt: number, notetlt: number) {
    const iscard = item.isCard;
    if (instance.CardDefaultCnt === 0) return (instance._isCard = iscard);
    if (instance.NoteDefaultCnt === 0) return (instance._isCard = !iscard);
    instance._cnCnt++;
    if (isCard()) {
        if (instance._cnCnt >= instance.CardDefaultCnt && notetlt > 0) {
            instance._isCard = false;
            instance._cnCnt = 0;
            return;
        }
    } else {
        if (instance._cnCnt >= instance.NoteDefaultCnt && cardtlt > 0) {
            instance._isCard = true;
            instance._cnCnt = 0;
            return;
        }
    }
}
