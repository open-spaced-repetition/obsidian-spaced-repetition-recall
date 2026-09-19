import { Notice, Platform } from "obsidian";
import { cyrb53, isEqualOrSubPath } from "src/util/utils";

export class DateUtils {
    /**
     * ms
     * @type {number}
     */

    static addTime(date: Date, time: number): Date {
        return new Date(date.getTime() + time);
    }

    static fromNow(time: number): Date {
        return this.addTime(new Date(), time);
    }

    static DAYS_TO_MILLIS = 86400000;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
export class BlockUtils {
    static generateBlockId(length?: number): string {
        if (length === undefined) length = 6;
        let hash = "";
        for (let i = 0; i < length; i++) {
            hash += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return hash;
    }

    static getTxtHash(cardText: string) {
        cardText = cardText.replace(/<!--SR:.+-->/gm, "").trimEnd();
        const cardTextHash: string = cyrb53(cardText);
        return cardTextHash.substring(0, 6);
    }
}

export class MiscUtils {
    /**
     * Creates a copy of obj, and copies values from source into
     * the copy, but only if there already is a property with the
     * matching name.
     *
     * @param obj
     * @param source
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static assignOnly(obj: any, source: any): any {
        const newObj = Object.assign(obj);
        if (source != undefined) {
            Object.keys(obj).forEach((key) => {
                if (key in source) {
                    newObj[key] = source[key];
                }
            });
        }
        return newObj;
    }

    /**
     * Creates a copy of obj, and copies values from source into
     * the copy
     *
     * @param obj
     * @param source
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static assignObjFully(obj: any, source: any): any {
        const newObj = Object.assign(obj, JSON.parse(JSON.stringify(source)));
        return newObj;
    }

    /**
     * getRegExpGroups. Counts the number of capturing groups in the provided regular
     * expression.
     *
     * @param {RegExp} exp
     * @returns {number}
     */
    static getRegExpGroups(exp: RegExp): number {
        // Count capturing groups in RegExp, source: https://stackoverflow.com/questions/16046620/regex-to-count-the-number-of-capturing-groups-in-a-regex
        return new RegExp(exp.source + "|").exec("").length - 1;
    }

    /**
     * shuffle. Shuffles the given array in place into a random order
     * using Durstenfeld shuffle.
     *
     * @param {any[]} array
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static shuffle(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    static fixed(value: number, point: number) {
        const p: number = Math.pow(10, point);
        return Math.round(value * p) / p;
    }

    static /**
     * @param message
     */
    // fix: with try-catch for unit test.
    notice(message: string | DocumentFragment, duration?: number): void {
        try {
            new Notice(message, duration);
        } catch (error) {
            console.debug(message);
        }
    }
}

// https://github.com/chartjs/Chart.js/blob/master/src/helpers/helpers.core.ts
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */
export function isArray<T = unknown>(value: unknown): value is T[] {
    if (Array.isArray && Array.isArray(value)) {
        return true;
    }
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") {
        return true;
    }
    return false;
}

// https://github.com/zsviczian/obsidian-excalidraw-plugin/
export const isVersionNewerThanOther = (version: string, otherVersion: string): boolean => {
    const v = version.match(/(\d+)\.(\d+)\.(\d+?)\.?(\d+)?/);
    const o = otherVersion.match(/(\d+)\.(\d+)\.(\d+?)\.?(\d+)?/);

    return Boolean(
        v &&
            v.length >= 4 &&
            o &&
            o.length >= 4 &&
            !(isNaN(parseInt(v[1])) || isNaN(parseInt(v[2])) || isNaN(parseInt(v[3]))) &&
            !(isNaN(parseInt(o[1])) || isNaN(parseInt(o[2])) || isNaN(parseInt(o[3]))) &&
            (newer(1) ||
                newer(2) ||
                newer(3) ||
                (!isNaN(parseInt(v[4])) && isNaN(parseInt(o[4]))) ||
                (!(isNaN(parseInt(v[4])) || isNaN(parseInt(o[4]))) && newer(4))),
    );

    function newer(idx: number): boolean {
        return (
            v
                .slice(1, idx)
                .every((_vstr, _idx) => parseInt(v[_idx + 1]) >= parseInt(o[_idx + 1])) &&
            parseInt(v[idx]) > parseInt(o[idx])
        );
    }
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const errorlog = (data: {}) => {
    console.error({ plugin: "Spaced-rep-recall:", ...data });
};

export const debug = (functionname: string, ...data: unknown[]) => {
    let duration: number;
    if (Number(data[0]) >= 0) {
        duration = Number(data[0]);
        data = data.slice(1);
    }
    const msg = { plugin: "SRR", func: functionname, ...data };
    console.debug("plugin: SRR, func: " + functionname + "\t" + JSON.stringify(data));
    if (Platform.isMobile) {
        MiscUtils.notice(JSON.stringify(msg), duration);
    }
};

/**
 * target: 当前对象的原型，假设 TestClass 是对象，那么 target 就是 TestClass.prototype
 *
 * propertyKey: 方法的名称
 *
 * descriptor: 方法的属性描述符，即 Object.getOwnPropertyDescriptor(TestClass.prototype, propertyKey)
 *
 * 链接：https://juejin.cn/post/7059737328394174501
 * @returns
 */
export const logExecutionTime = () => {
    return function (
        target: object,
        propertyKey: string | symbol,
        propertyDescriptor: PropertyDescriptor,
    ) {
        const originalFunc = propertyDescriptor.value;

        // 修改原有function的定义
        propertyDescriptor.value = async function (...args: unknown[]) {
            // const startTime = new Date().getTime();
            const startTime = performance.now();
            const results = await originalFunc.apply(this, args);
            // const endTime = new Date().getTime();
            const endTime = performance.now();
            const msg = `*** ${propertyKey.toString()} took ${endTime - startTime} msec to run ***`;
            if (endTime - startTime > 10) debug(originalFunc.name, undefined, { msg });
            return results;
        };
        return propertyDescriptor;
    };
};

export function isIgnoredPath(noteFoldersToIgnore: string[], path: string) {
    // return noteFoldersToIgnore.some((folder) => isEqualOrSubPath(path, folder));
    return noteFoldersToIgnore.some((folder) => path.includes(folder));
}
