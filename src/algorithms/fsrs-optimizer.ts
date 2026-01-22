/**
 * FSRS Optimizer - Browser WASM-based training for personalized parameters
 *
 * This module provides functionality to train FSRS parameters from review history
 * using a pre-built WASM binding that runs entirely in the browser.
 */

import { Notice } from "obsidian";
import { t } from "src/lang/helpers";

// Type definitions for the binding module
export interface FSRSBindingReview {
    rating: number;
    deltaT: number;
}

export interface ComputeParametersOptions {
    enableShortTerm: boolean;
    numRelearningSteps?: number;
    progress?: (current: number, total: number) => void | Promise<void>;
    timeout?: number;
}

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
    basePath: string | null = null;
    /**
     * Set the plugin base path for WASM file loading
     */
    setPluginBasePath(basePath: string): void {
        this.basePath = basePath;
    }

    /**
     * Train FSRS parameters from CSV data
     *
     * @param csvData - CSV file content as Uint8Array
     * @param options - Training options
     * @returns Optimized parameters array (17 or 19 or 21 values depending on enableShortTerm)
     */
    async trainFromCsv(csvData: Uint8Array, options: TrainOptions): Promise<number[]> {
        const { nextDayStartsAt, timezone, enableShortTerm, onProgress } = options;

        // Report loading progress
        onProgress?.({
            status: "loading",
            current: 0,
            total: 100,
        });

        // Report converting progress
        onProgress?.({
            status: "converting",
            current: 10,
            total: 100,
        });

        // Check basePath before loading binding
        if (!this.basePath) {
            throw new Error(t("FSRS_PLUGIN_BASE_PATH_NOT_SET"));
        }

        // Convert CSV to FSRS items
        let fsrsItems: import("@open-spaced-repetition/binding").FSRSBindingItem[];
        const binding = await import("./fsrs-binding-obsidian");
        binding.setPluginBasePath(this.basePath);
        try {
            fsrsItems = await binding.convertCsvToFsrsItems(
                csvData,
                nextDayStartsAt,
                timezone,
                (ms) => -new Date(ms).getTimezoneOffset(),
            );
        } catch (error) {
            console.error("[FSRS Optimizer] CSV conversion error:", error);
            throw new Error(t("FSRS_CSV_PARSE_ERROR") + ": " + (error as Error).message);
        }

        if (fsrsItems.length === 0) {
            throw new Error(t("FSRS_NO_VALID_ITEMS"));
        }

        // Filter items with at least one long-term review
        const validItems = fsrsItems.filter((item) => item.longTermReviewCnt() >= 1);

        if (validItems.length === 0) {
            throw new Error(t("FSRS_NO_VALID_ITEMS"));
        }

        // Warn if data is sparse
        if (validItems.length < 8) {
            new Notice(t("FSRS_LOW_REVIEW_COUNT_WARNING", { count: validItems.length }), 5000);
        }

        console.log(
            `[FSRS Optimizer] Training with ${validItems.length} valid items (${fsrsItems.length} total)`,
        );

        // Report training progress
        onProgress?.({
            status: "training",
            current: 15,
            total: 100,
        });

        // Compute optimized parameters
        const parameters = await binding.computeParameters(validItems, {
            enableShortTerm,
            progress: (current: number, total: number) => {
                const percent = 15 + Math.round((current / total) * 80);
                onProgress?.({
                    status: "training",
                    current: percent,
                    total: 100,
                });
            },
        });

        // Report completion
        onProgress?.({
            status: "done",
            current: 100,
            total: 100,
        });

        return parameters;
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
