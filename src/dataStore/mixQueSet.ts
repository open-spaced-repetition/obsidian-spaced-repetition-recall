import { RepetitionItem } from "./repetitionItem";

export type tIMixQueSet = Record<string, number | boolean>; // isDue,DueDefaultCnt, NewDefaultCnt
export interface IMixQueSet {
    isDue: boolean;
    isCard: boolean;
    DueDefaultCnt: number;
    NewDefaultCnt: number;
}

export class MixQueSet implements IMixQueSet {
    isDue: boolean;
    DueDefaultCnt: number;
    NewDefaultCnt: number;

    private _isCard: boolean;
    CardDefaultCnt: number;
    NoteDefaultCnt: number;

    private static _instance: MixQueSet;
    private _dnCnt: number = 0;
    private _cnCnt: number = 0;
    // private _inMuti: boolean = false;

    constructor() {
        MixQueSet._instance = this;
    }

    static create(due: number = 3, newdc: number = 2, card: number = 4, note: number = 1) {
        const mqs = new MixQueSet();
        mqs.isDue = true;
        mqs._isCard = false;
        mqs.DueDefaultCnt = due;
        mqs.NewDefaultCnt = newdc;
        mqs.CardDefaultCnt = card;
        mqs.NoteDefaultCnt = note;
        return mqs;
    }

    static getInstance() {
        return this._instance;
    }

    get isCard() {
        return this._isCard;
    }

    inMultiCloze(multi = true) {
        // this._inMuti = multi;
        this._isCard = multi;
        if(this._cnCnt===0) {
            this._cnCnt = this.CardDefaultCnt;
        }
    }

    calcNext(dueCnthad: number, newCnthad: number) {
        if (this.DueDefaultCnt === 0) return (this.isDue = newCnthad > 0 ? false : true);
        if (this.NewDefaultCnt === 0) return (this.isDue = dueCnthad > 0 ? true : false);
        if (dueCnthad === 0 && newCnthad > 0) return (this.isDue = false);
        if (dueCnthad > 0 && newCnthad === 0) return (this.isDue = true);
        this._dnCnt++;
        if (this.isDue) {
            if (this._dnCnt >= this.DueDefaultCnt && newCnthad > 0) {
                this.isDue = false;
                this._dnCnt = 0;
            }
        } else {
            if (this._dnCnt >= this.NewDefaultCnt && dueCnthad > 0) {
                this.isDue = true;
                this._dnCnt = 0;
            }
        }
    }

    arbitrateCardNote(item: RepetitionItem, cardtlt: number, notetlt: number) {
        if (this.CardDefaultCnt === 0) return (this._isCard = item.isCard);
        if (this.NoteDefaultCnt === 0) return (this._isCard = !item.isCard);
        this._cnCnt++;
        if (this.isCard) {
            if (this._cnCnt >= this.CardDefaultCnt && notetlt > 0) {
                this._isCard = false;
                this._cnCnt = 0;
                return;
            }
        } else {
            if (this._cnCnt >= this.NoteDefaultCnt && cardtlt > 0) {
                this._isCard = true;
                this._cnCnt = 0;
                return;
            }
        }
    }
}
