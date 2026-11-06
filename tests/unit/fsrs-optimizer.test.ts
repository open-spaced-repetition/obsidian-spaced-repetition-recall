import { FsrsOptimizer, OptimizerMessage } from "src/algorithms/fsrs-optimizer";
import { Iadapter } from "src/dataStore/adapter";

jest.mock("fsrs-optimizer-worker");

describe("embedded optimizer worker", () => {
    const options = { nextDayStartsAt: 4, timezone: "UTC", enableShortTerm: true };
    const parameters = Array(21).fill(1);
    const worker = {
        onmessage: null as ((event: MessageEvent<OptimizerMessage>) => void) | null,
        onerror: null as ((event: ErrorEvent) => void) | null,
        onmessageerror: null as (() => void) | null,
        postMessage: jest.fn(),
        terminate: jest.fn(),
    };
    const createWorker = jest.fn();
    const createObjectURL = jest.fn();
    const revokeObjectURL = jest.fn();
    const originalWorker = Object.getOwnPropertyDescriptor(globalThis, "Worker");
    const originalCreateURL = Object.getOwnPropertyDescriptor(URL, "createObjectURL");
    const originalRevokeURL = Object.getOwnPropertyDescriptor(URL, "revokeObjectURL");

    beforeEach(() => {
        jest.clearAllMocks();
        createObjectURL.mockReturnValue("blob:optimizer");
        createWorker.mockImplementation(() => worker);
        worker.postMessage.mockImplementation(() => {
            queueMicrotask(() =>
                worker.onmessage?.(
                    new MessageEvent("message", {
                        data: { type: "done", parameters },
                    }),
                ),
            );
        });
        Object.defineProperty(globalThis, "Worker", { configurable: true, value: createWorker });
        Object.defineProperty(URL, "createObjectURL", {
            configurable: true,
            value: createObjectURL,
        });
        Object.defineProperty(URL, "revokeObjectURL", {
            configurable: true,
            value: revokeObjectURL,
        });
    });

    afterEach(() => {
        for (const [target, name, descriptor] of [
            [globalThis, "Worker", originalWorker],
            [URL, "createObjectURL", originalCreateURL],
            [URL, "revokeObjectURL", originalRevokeURL],
        ] as const) {
            if (descriptor) Object.defineProperty(target, name, descriptor);
            else Reflect.deleteProperty(target, name);
        }
        jest.restoreAllMocks();
    });

    test("trains from embedded resources without a vault adapter or plugin path", async () => {
        const adapter = jest.spyOn(Iadapter, "instance", "get").mockReturnValue(null);
        const csvData = new Uint8Array([1]);
        await expect(new FsrsOptimizer().trainFromCsv(csvData, options)).resolves.toEqual(
            parameters,
        );
        expect(adapter).not.toHaveBeenCalled();
        expect(createObjectURL).toHaveBeenCalledWith(expect.any(Blob));
        expect(createWorker).toHaveBeenCalledWith("blob:optimizer", { type: "module" });
        expect(worker.postMessage).toHaveBeenCalledWith({ csvData, options });
        expect(worker.terminate).toHaveBeenCalledTimes(1);
        expect(revokeObjectURL).toHaveBeenCalledWith("blob:optimizer");
    });

    test("releases the blob URL if worker construction fails", async () => {
        createWorker.mockImplementation(() => {
            throw new Error("worker blocked");
        });
        await expect(new FsrsOptimizer().trainFromCsv(new Uint8Array(), options)).rejects.toThrow(
            "worker blocked",
        );
        expect(worker.terminate).not.toHaveBeenCalled();
        expect(revokeObjectURL).toHaveBeenCalledWith("blob:optimizer");
    });
});
