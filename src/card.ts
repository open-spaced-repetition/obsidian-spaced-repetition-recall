// import { RepetitionItem } from "src/algorithms/base/repetition-item";
import { CardScheduleInfo as RepItemScheduleInfo, ICardScheduleCalculator } from "./CardSchedule";
import { CardListType } from "src/deck";
import { Question } from "src/question";

export class Card extends RepetitionItem {
    question: Question;
    cardIdx: number;
    Id?: number;
    multiClozeIndex?: number;
    multiCloze?: number[];
    // scheduling
    get hasSchedule(): boolean {
        return this.scheduleInfo != null;
    }
    scheduleInfo?: RepItemScheduleInfo;
    // visuals
    front: string;
    back: string;

    constructor(init?: Partial<Card>) {
        super();
        Object.assign(this, init);
    }

    get cardListType(): CardListType {
        return this.isNew ? CardListType.NewCard : CardListType.DueCard;
    }

    get isNew(): boolean {
        return !this.hasSchedule || this.scheduleInfo.isDummyScheduleForNewCard();
    }

    get isDue(): boolean {
        return this.hasSchedule && this.scheduleInfo.isDue();
    }

    getIsNotBury(questionPostponementList: IQuestionPostponementList): boolean {
        let notBury = !questionPostponementList.includes(this.question);
        if (notBury) {
            return true;
        } else if (this.hasSchedule) {
            if (
                this.scheduleInfo.dueDate.isSameOrBefore(globalDateProvider.today) &&
                Queue.getInstance().isInLaterQueue(this?.Id)
            ) {
                notBury = true;
            }
        }
        return notBury;
    }

    get isMultiCloze(): boolean {
        return this?.multiClozeIndex >= 0;
    }

    /**
     * 3 cloze in a group, but last group could have 4 cloze.
     */
    get hasNextMultiCloze(): boolean {
        return this.isMultiCloze && this.multiClozeIndex + 1 < this.multiCloze.length;
    }

    getFirstClozeCard(): Card {
        return this.isMultiCloze ? this.question.cards[this.multiCloze[0]] : undefined;
    }

    getNextClozeCard(): Card {
        return this.hasNextMultiCloze
            ? this.question.cards[this.multiCloze[this.multiClozeIndex + 1]]
            : undefined;
    }

    formatSchedule(): string {
        let result: string = "";
        if (this.hasSchedule) result = this.scheduleInfo.formatCardScheduleForHtmlComment();
        else result = "New";
        return result;
    }
}
