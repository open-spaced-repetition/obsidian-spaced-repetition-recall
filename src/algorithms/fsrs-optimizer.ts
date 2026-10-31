/**
 * FSRS Optimizer - Browser WASM-based training for personalized parameters
 *
 * This module provides functionality to train FSRS parameters from review history
 * using a pre-built WASM binding that runs entirely in the browser.
 */

import { Notice } from "obsidian";
import { t } from "src/lang/helpers";

import workerSource from "fsrs-optimizer-worker";

export interface OptimizerProgress {
    current: number;
    total: number;
    status: "idle" | "loading" | "converting" | "training" | "done" | "error";
    message?: string;
}

export interface TrainOptions {
    nextDayStartsAt: number;
    timezone: string;
    enableShortTerm: boolean;
    onProgress?: (progress: OptimizerProgress) => void;
}

export interface OptimizerRequest {
    csvData: Uint8Array;
    options: Omit<TrainOptions, "onProgress">;
}

export type OptimizerMessage =
    | { type: "progress"; progress: OptimizerProgress }
    | { type: "count"; count: number }
    | { type: "empty" }
    | { type: "done"; parameters: number[] }
    | { type: "error"; message: string };

/**
 * Get user's timezone string
 */
export function getUserTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/**
 * FSRS Optimizer class - handles binding loading and parameter training
 */
export class FsrsOptimizer {
    /**
     * Train FSRS parameters from CSV data
     *
     * @param csvData - CSV file content as Uint8Array
     * @param options - Training options
     * @returns Optimized FSRS-6 parameters (21 values)
     */
    async trainFromCsv(csvData: Uint8Array, options: TrainOptions): Promise<number[]> {
        const { onProgress, ...trainingOptions } = options;
        onProgress?.({ status: "loading", current: 0, total: 100 });
        const url = URL.createObjectURL(
            new Blob([workerSource], { type: "application/javascript" }),
        );
        let worker: Worker | undefined;
        try {
            return await new Promise<number[]>((resolve, reject) => {
                worker = new Worker(url, { type: "module" });
                worker.onerror = (event) => reject(new Error(event.message));
                worker.onmessageerror = () => reject(new Error("Invalid FSRS worker message"));
                worker.onmessage = ({ data }: MessageEvent<OptimizerMessage>) => {
                    switch (data.type) {
                        case "progress":
                            onProgress?.(data.progress);
                            break;
                        case "count":
                            if (data.count < 8) {
                                new Notice(
                                    t("FSRS_LOW_REVIEW_COUNT_WARNING", { count: data.count }),
                                    5000,
                                );
                            }
                            break;
                        case "empty":
                            reject(new Error(t("FSRS_NO_VALID_ITEMS")));
                            break;
                        case "error":
                            reject(new Error(data.message));
                            break;
                        case "done":
                            onProgress?.({ status: "done", current: 100, total: 100 });
                            resolve(data.parameters);
                    }
                };
                const request: OptimizerRequest = { csvData, options: trainingOptions };
                worker.postMessage(request);
            });
        } finally {
            worker?.terminate();
            URL.revokeObjectURL(url);
        }
    }

    /**
     * Train from a File object (convenience method)
     */
    async trainFromFile(
        file: File,
        options: Omit<TrainOptions, "timezone"> & { timezone?: string },
    ): Promise<number[]> {
        const arrayBuffer = await file.arrayBuffer();
        const csvData = new Uint8Array(arrayBuffer);

        return this.trainFromCsv(csvData, {
            ...options,
            timezone: options.timezone || getUserTimezone(),
        });
    }
}

// Export singleton instance
export const fsrsOptimizer = new FsrsOptimizer();
