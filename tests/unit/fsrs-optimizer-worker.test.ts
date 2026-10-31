import { createInstance } from "@open-spaced-repetition/binding-wasm32-wasip1/workerd";
import "src/algorithms/fsrs-binding-obsidian";
import wasm from "fsrs-wasm";

jest.mock("fsrs-wasm", () => new Uint8Array([0, 97, 115, 109]), { virtual: true });

jest.mock("@open-spaced-repetition/binding-wasm32-wasip1/workerd", () => ({
    createInstance: jest.fn(),
}));

describe("WASIP1 optimizer worker", () => {
    const onMessage = self.onmessage;
    if (!onMessage) throw new Error("Optimizer worker message handler was not registered");
    const request = {
        csvData: new Uint8Array([1]),
        options: { nextDayStartsAt: 4, timezone: "Asia/Tokyo", enableShortTerm: true },
    };
    const items = [{}, {}];
    const cardIds = [9, 9];
    const convert = jest.fn();
    const compute = jest.fn();
    const dispose = jest.fn();
    let post: jest.SpyInstance;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(WebAssembly, "compile").mockResolvedValue({} as WebAssembly.Module);
        post = jest.spyOn(self, "postMessage").mockImplementation(() => {});
        convert.mockReturnValue({ items, cardIds });
        compute.mockResolvedValue(Array(21).fill(1));
        dispose.mockResolvedValue(undefined);
        (createInstance as jest.Mock).mockResolvedValue({
            exports: { convertCsvToFsrsItemsWithCardIds: convert, computeParameters: compute },
            dispose,
        });
    });

    afterEach(() => jest.restoreAllMocks());

    test("passes converted items and card IDs directly to training and disposes before completion", async () => {
        await onMessage.call(self, new MessageEvent("message", { data: request }));
        expect(WebAssembly.compile).toHaveBeenCalledWith(wasm.buffer);
        expect(convert).toHaveBeenCalledWith(request.csvData, 4, "Asia/Tokyo", "FSRS-6");
        expect(compute).toHaveBeenCalledWith(
            items,
            expect.objectContaining({ modelVersion: "FSRS-6", cardIds }),
        );
        expect(compute.mock.calls[0][0]).toBe(items);
        expect(compute.mock.calls[0][1].cardIds).toBe(cardIds);
        expect(dispose).toHaveBeenCalledTimes(1);
        expect(post).toHaveBeenLastCalledWith({ type: "done", parameters: Array(21).fill(1) });
        expect(dispose.mock.invocationCallOrder[0]).toBeLessThan(
            post.mock.invocationCallOrder[post.mock.calls.length - 1],
        );
    });

    test("reports empty training data without training", async () => {
        convert.mockReturnValue({ items: [], cardIds: [] });
        await onMessage.call(self, new MessageEvent("message", { data: request }));
        expect(compute).not.toHaveBeenCalled();
        expect(dispose).toHaveBeenCalledTimes(1);
        expect(post).toHaveBeenLastCalledWith({ type: "empty" });
    });

    test("reports training errors and releases the WASM instance", async () => {
        compute.mockRejectedValueOnce(new Error("training failed"));
        await onMessage.call(self, new MessageEvent("message", { data: request }));
        expect(dispose).toHaveBeenCalledTimes(1);
        expect(post).toHaveBeenLastCalledWith({ type: "error", message: "Error: training failed" });
    });
});
