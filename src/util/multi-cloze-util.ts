import { Card } from "src/Card";
import { SRSettings } from "src/settings";

export * as Multi_cloze from "./multi-cloze-util";

function getSiblings(questionText: string, settings: SRSettings) {
    const siblings: RegExpMatchArray[] = [];
    if (settings.convertHighlightsToClozes) {
        siblings.push(...questionText.matchAll(/==(.*?)==/gm));
    }
    if (settings.convertBoldTextToClozes) {
        siblings.push(...questionText.matchAll(/\*\*(.*?)\*\*/gm));
    }
    if (settings.convertCurlyBracketsToClozes) {
        siblings.push(...questionText.matchAll(/{{(.*?)}}/gm));
    }
    siblings.sort((a, b) => {
        if (a.index < b.index) {
            return -1;
        }
        if (a.index > b.index) {
            return 1;
        }
        // What is unit test to cover following statement; otherwise jest please ignore
        return 0;
    });
    return siblings;
}

export function convMultiCloze(
    siblings: Card[],
    questionText: string,
    settings: SRSettings,
): Card[] {
    // const newsiblings = siblings.filter((card) => !card.isNew && !card.isDue);
    const idxs = siblings
        .map((card) => {
            if (card.isNew || card.isDue) {
                return card.cardIdx;
            }
        })
        .filter((idx) => idx != undefined);
    if (idxs.length <= 1) return siblings;
    const textsibls = getSiblings(questionText, settings);
    let front: string = "",
        back: string;
    const ftsibls = textsibls.filter((v, idx) => idxs.includes(idx));
    // .sort((a, b) => b.index - a.index);
    let startIdx: number;
    ftsibls.forEach((m0, sibIdx) => {
        const deletionStart: number = m0.index,
            deletionEnd: number = deletionStart + m0[0].length;
        startIdx = deletionEnd;
        front = questionText.substring(0, m0.index) + renderClozeFront(m0[0].length);

        back =
            questionText.substring(0, deletionStart) +
            renderClozeBack(questionText.substring(deletionStart, deletionEnd));
        const sibStartEndIdx = getStartEndIndex(sibIdx);
        ftsibls.slice(sibIdx, sibStartEndIdx.end).forEach((m) => {
            if (m.index <= startIdx) {
                return true;
            }
            const deletionStart: number = m.index,
                deletionEnd: number = deletionStart + m[0].length;
            front =
                front +
                questionText.substring(startIdx, deletionStart) +
                renderClozeFront(m[0].length);
            back =
                back +
                questionText.substring(startIdx, deletionStart) +
                renderClozeFront(m[0].length);
            startIdx = deletionEnd;
            return true;
        });
        front = front + questionText.substring(startIdx);
        // front = removeClozeTokens(front, settings);
        back = back + questionText.substring(startIdx);
        back = removeClozeTokens(back, settings);
        siblings[idxs[sibIdx]].front = front;
        siblings[idxs[sibIdx]].back = back;
        siblings[idxs[sibIdx]].multiClozeIndex = sibIdx;
        siblings[idxs[sibIdx]].multiCloze = idxs.slice(sibStartEndIdx.start, sibStartEndIdx.end);
    });
    return siblings;

    function getStartEndIndex(sibIdx: number, cnt = 3, lastcnt = 4) {
        let start = 0,
            end = 0;
        const len = idxs.length;
        if (len <= lastcnt) {
            start = 0;
            end = len;
        } else if (len % cnt === 1 && len - sibIdx <= lastcnt) {
            start = len - lastcnt;
            end = len;
        } else {
            start = Math.floor(sibIdx / cnt) * cnt;
            end = start + cnt;
        }
        return { start, end };
    }
}

function renderClozeFront(len: number = 3): string {
    // const rpt = Math.max(1, Math.round(len / 6));
    // return "<span style='color:#2196f3'>[" + "...".repeat(rpt) + "]</span>";
    return "<span style='color:#2196f3'>[" + "..." + "]</span>";
}

function renderClozeBack(str: string): string {
    return "<span style='color:#2196f3'>" + str + "</span>";
}

function removeClozeTokens(text: string, settings: SRSettings): string {
    let result: string = text;
    if (settings.convertHighlightsToClozes) result = result.replace(/==/gm, "");
    if (settings.convertBoldTextToClozes) result = result.replace(/\*\*/gm, "");
    if (settings.convertCurlyBracketsToClozes) {
        result = result.replace(/{{/gm, "").replace(/}}/gm, "");
    }
    return result;
}
