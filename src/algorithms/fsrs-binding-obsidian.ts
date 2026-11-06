import { createInstance } from "@open-spaced-repetition/binding-wasm32-wasip1/workerd";
import type { OptimizerRequest, OptimizerMessage } from "./fsrs-optimizer";
import wasm from "fsrs-wasm";

function report(message: OptimizerMessage) {
    self.postMessage(message);
}

async function train({ csvData, options }: OptimizerRequest): Promise<number[]> {
    const instance = await createInstance(await WebAssembly.compile(wasm.buffer));
    try {
        const binding = instance.exports;
        report({ type: "progress", progress: { status: "converting", current: 10, total: 100 } });
        const { items, cardIds } = binding.convertCsvToFsrsItemsWithCardIds(
            csvData,
            options.nextDayStartsAt,
            options.timezone,
            "FSRS-6",
        );
        if (items.length === 0) {
            return [];
        }
        report({ type: "count", count: items.length });
        report({ type: "progress", progress: { status: "training", current: 15, total: 100 } });
        return await binding.computeParameters(items, {
            modelVersion: "FSRS-6",
            cardIds,
            enableShortTerm: options.enableShortTerm,
            progress: (current, total) => {
                report({
                    type: "progress",
                    progress: {
                        status: "training",
                        current: total > 0 ? 15 + Math.round((current / total) * 80) : 15,
                        total: 100,
                    },
                });
            },
        });
    } finally {
        await instance.dispose();
    }
}

self.onmessage = (event: MessageEvent<OptimizerRequest>) => {
    return train(event.data).then(
        (parameters) =>
            report(parameters.length === 0 ? { type: "empty" } : { type: "done", parameters }),
        (error: unknown) => report({ type: "error", message: String(error) }),
    );
};
