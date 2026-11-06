import { isVersionNewerThanOther } from "../../../src/utils/utils_recall";

describe("isVersionNewerThanOther", () => {
    test("newer", async () => {
        const ver = "1.2.5.5";
        const other = "1.2.5.4";
        const result = isVersionNewerThanOther(ver, other);
        expect(result).toEqual(true);
    });

    test("prev", async () => {
        const ver = "1.2.5.5";
        const other = "1.2.5.6";
        const result = isVersionNewerThanOther(ver, other);
        expect(result).toEqual(false);
    });

    test("prev2", async () => {
        const ver = "1.10.1.10";
        const other = "1.10.2.1";
        const result = isVersionNewerThanOther(ver, other);
        expect(result).toEqual(false);
    });
    test("prev3 and newer 4", async () => {
        const ver = "1.10.1.10";
        const other = "1.10.1";
        const result = isVersionNewerThanOther(ver, other);
        expect(result).toEqual(true);
    });
});
