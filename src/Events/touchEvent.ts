import { debug } from "src/util/utils_recall";

interface IminTouch {
    identifier: number;
    pageX: number;
    pageY: number;
}

export class TouchOnMobile {
    timeStart = 0;
    timeDiff_longClick = 800; // ms

    originTouches: IminTouch[] = [];
    ongoingTouches: IminTouch[] = [];

    public longClickCb: () => void;
    public swipUpCb: () => void;

    static create() {
        return new TouchOnMobile();
    }
    constructor() {}

    handleStart(evt: TouchEvent) {
        const touches = evt.changedTouches;
        this.timeStart = Date.now();
        for (let i = 0; i < touches.length; i++) {
            // console.debug("开始第 " + i + " 个触摸 ...");
            this.originTouches.push(copyTouch(touches[i]));
            this.ongoingTouches.push(copyTouch(touches[i]));
        }
        setTimeout(() => {
            // console.debug("time up");
            if (this.originTouches.length > 0 && this.isLongClick(0)) {
                evt.preventDefault();
                this.longClickCb();
                this.handleCancel(evt);
            }
        }, this.timeDiff_longClick);
    }

    handleMove(evt: TouchEvent) {
        // evt.preventDefault();
        const touches = evt.changedTouches;

        for (let i = 0; i < touches.length; i++) {
            const idx = this.finTouchesIndexById(touches[i].identifier);

            if (idx >= 0) {
                // console.debug("继续第 " + idx + "个触摸。");
                // console.debug("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
                this.ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // 切换触摸信息
            } else {
                console.debug("无法确定下一个触摸点。");
            }
        }
    }

    handleEnd(evt: TouchEvent) {
        // console.debug("触摸结束。");
        const touches = evt.changedTouches;

        for (let i = 0; i < touches.length; i++) {
            const idx = this.finTouchesIndexById(touches[i].identifier);
            // const msg = `end touches len: ${touches.length}`;
            // debug(this.handleEnd, {msg});
            if (idx >= 0) {
                if (this.isSwipUp(idx)) {
                    evt.preventDefault();
                    this.swipUpCb();
                }
                // const msg = `移除 ${idx} (${ongoingTouches[idx].pageX}, ${ongoingTouches[idx].pageY}) timeDur: ${getTimeDuration()} `;

                this.originTouches.splice(idx, 1); // 用完后移除
                this.ongoingTouches.splice(idx, 1); // 用完后移除
            } else {
                // console.debug("无法确定要结束哪个触摸点。");
            }
        }
    }

    handleCancel(evt: TouchEvent) {
        evt.preventDefault();
        // console.debug("触摸取消。");
        const touches = evt.changedTouches;

        for (let i = 0; i < touches.length; i++) {
            const idx = this.finTouchesIndexById(touches[i].identifier);
            this.originTouches.splice(idx, 1); // 用完后移除
            this.ongoingTouches.splice(idx, 1); // 用完后移除
        }
    }

    finTouchesIndexById(idToFind: number) {
        const idx = this.ongoingTouches.findIndex((t) => {
            return idToFind === t.identifier;
        });
        return idx;
    }
    isSwipUp(idx: number) {
        const moveXDiff = 30;
        const moveYDiff = 50;
        const timeDiff = 200; // ms
        // const msg = `actxdiff: ${this.absXDiff(idx)}, actydiff: ${this.actYDiff(
        //     idx,
        // )}, time dur: ${this.getTimeDuration()}`;
        // debug(this.isSwipUp, { msg });
        return (
            this.getTimeDuration() < timeDiff &&
            this.absXDiff(idx) < moveXDiff &&
            this.actYDiff(idx) > moveYDiff
        );
    }

    isLongClick(idx: number) {
        const longClickDiff = 10;
        return (
            this.getTimeDuration() >= this.timeDiff_longClick &&
            this.absXDiff(idx) < longClickDiff &&
            Math.abs(this.actYDiff(idx)) < longClickDiff
        );
    }

    getTimeDuration() {
        return Date.now() - this.timeStart;
    }

    actYDiff(idx: number) {
        return this.originTouches[idx].pageY - this.ongoingTouches[idx].pageY;
    }

    absXDiff(idx: number) {
        return Math.abs(this.originTouches[idx].pageX - this.ongoingTouches[idx].pageX);
    }
}

function copyTouch(touch: Touch) {
    return {
        identifier: touch.identifier,
        pageX: touch.pageX,
        pageY: touch.pageY,
    };
}
