/**
 * FSRS Binding adapter for Obsidian
 *
 * This module provides a lazy-loading wrapper for @open-spaced-repetition/binding
 * that works in Obsidian's environment by:
 * 1. Avoiding top-level await (incompatible with ES2018 target)
 * 2. Loading WASM file through Obsidian's Vault API
 */

import type {
    computeParameters as computeParametersType,
    convertCsvToFsrsItems as convertCsvToFsrsItemsType,
} from "@open-spaced-repetition/binding";
import {
    instantiateNapiModuleSync as __emnapiInstantiateNapiModuleSync,
    getDefaultContext as __emnapiGetDefaultContext,
    WASI as __WASI,
    MessageHandler as __MessageHandler,
    // @ts-expect-error - WASM runtime types are not available in TypeScript
} from "@napi-rs/wasm-runtime";
import { Iadapter } from "src/dataStore/adapter";

/**
 * Wrapper to add Node.js-style Worker API to Web Worker
 * @emnapi/core expects Node.js Worker methods but Web Workers have different API
 */
interface NodeStyleWorker extends Worker {
    on(event: string, handler: (data: unknown) => void): void;
    off(event: string, handler: (data: unknown) => void): void;
    once(event: string, handler: (data: unknown) => void): void;
    ref(): void;
    unref(): void;
}

function wrapWorkerWithNodeApi(worker: Worker): NodeStyleWorker {
    const wrappedWorker = worker as NodeStyleWorker;
    const listeners = new Map<string, Map<(data: unknown) => void, EventListener>>();
    let terminated = false;

    // Override terminate to track state and clean up listeners
    const originalTerminate = worker.terminate.bind(worker);
    worker.terminate = function () {
        terminated = true;
        // Remove all listeners to prevent "cleanup-thread" warnings
        listeners.forEach((eventListeners, event) => {
            eventListeners.forEach((eventListener) => {
                worker.removeEventListener(event, eventListener);
            });
        });
        listeners.clear();
        return originalTerminate();
    };

    wrappedWorker.on = function (event: string, handler: (data: unknown) => void) {
        if (terminated) return; // Ignore if worker is terminated

        const eventListener: EventListener = (e: Event) => {
            if (terminated) return; // Ignore events after termination
            if (event === "message") {
                handler((e as MessageEvent).data);
            } else {
                handler(e);
            }
        };

        if (!listeners.has(event)) {
            listeners.set(event, new Map());
        }
        listeners.get(event)!.set(handler, eventListener);
        worker.addEventListener(event, eventListener);
    };

    wrappedWorker.off = function (event: string, handler: (data: unknown) => void) {
        const eventListeners = listeners.get(event);
        if (eventListeners) {
            const eventListener = eventListeners.get(handler);
            if (eventListener) {
                worker.removeEventListener(event, eventListener);
                eventListeners.delete(handler);
            }
        }
    };

    wrappedWorker.once = function (event: string, handler: (data: unknown) => void) {
        const onceHandler = (data: unknown) => {
            wrappedWorker.off(event, onceHandler);
            handler(data);
        };
        wrappedWorker.on(event, onceHandler);
    };

    // Node.js Worker ref/unref methods (no-op in browser environment)
    wrappedWorker.ref = function () {
        // No-op: Web Workers don't have ref/unref concept
    };

    wrappedWorker.unref = function () {
        // No-op: Web Workers don't have ref/unref concept
    };

    return wrappedWorker;
}

// Worker Blob URL cache
let __workerBlobUrl: string | null = null;
let __workerCodePromise: Promise<string> | null = null;

/**
 * Load worker code from plugin directory
 */
async function loadWorkerCode(): Promise<string> {
    const workerFileName = "fsrs-wasi-worker.js";

    // Try to load from Obsidian's adapter
    const adapter = Iadapter.instance?.adapter;
    if (adapter && __pluginBasePath) {
        const workerPath = `${__pluginBasePath}/${workerFileName}`;
        try {
            const code = await adapter.read(workerPath);
            console.log("[FSRS Binding] Loaded worker code from vault:", workerPath);
            return code;
        } catch (error) {
            console.warn("[FSRS Binding] Failed to load worker from vault:", error);
        }
    }

    // Fallback: try fetch (for development)
    try {
        const response = await fetch(`./${workerFileName}`);
        if (response.ok) {
            return await response.text();
        }
    } catch {
        // Ignore
    }

    throw new Error("Failed to load FSRS worker code");
}

/**
 * Get the worker Blob URL for WASM multi-threading
 * Creates a Blob URL to bypass Obsidian's cross-origin restrictions
 */
async function getWorkerBlobUrl(): Promise<string> {
    if (__workerBlobUrl) {
        return __workerBlobUrl;
    }

    // Ensure only one loading process
    if (!__workerCodePromise) {
        __workerCodePromise = loadWorkerCode();
    }

    const workerCode = await __workerCodePromise;
    const blob = new Blob([workerCode], { type: "application/javascript" });
    __workerBlobUrl = URL.createObjectURL(blob);
    console.log("[FSRS Binding] Created worker Blob URL");
    return __workerBlobUrl;
}

// Module state
let __napiModule: {
    exports: typeof import("@open-spaced-repetition/binding");
} | null = null;

let __initPromise: Promise<void> | null = null;
let __pluginBasePath: string | null = null;

/**
 * Set the plugin base path for WASM file loading
 * This should be called before any binding functions are used
 */
export function setPluginBasePath(basePath: string): void {
    __pluginBasePath = basePath;
}

/**
 * Initialize the WASM module
 * This must be called before using any binding functions
 */
export async function initBinding(): Promise<void> {
    if (__napiModule) {
        return; // Already initialized
    }

    if (__initPromise) {
        return __initPromise; // Initialization in progress
    }

    __initPromise = doInit();
    return __initPromise;
}

async function doInit(): Promise<void> {
    // Load WASM and worker code in parallel
    const wasmFileName = "fsrs-binding.wasm32-wasi.wasm";

    // Start loading worker code immediately (for later use in onCreateWorker)
    const workerUrlPromise = getWorkerBlobUrl();

    let wasmData: ArrayBuffer;

    // Try to load WASM file from plugin directory using Obsidian's adapter
    const adapter = Iadapter.instance?.adapter;
    if (adapter && __pluginBasePath) {
        const wasmPath = `${__pluginBasePath}/${wasmFileName}`;
        try {
            wasmData = await adapter.readBinary(wasmPath);
            console.log("[FSRS Binding] Loaded WASM from vault:", wasmPath);
        } catch (error) {
            console.warn("[FSRS Binding] Failed to load from vault, trying fetch:", error);
            wasmData = await loadWasmViaFetch(wasmFileName);
        }
    } else {
        // Fallback to fetch (for development/testing)
        wasmData = await loadWasmViaFetch(wasmFileName);
    }

    // Wait for worker URL to be ready before initializing WASM module
    await workerUrlPromise;

    // Initialize WASM module
    const __wasi = new __WASI({
        version: "preview1",
    });

    const __emnapiContext = __emnapiGetDefaultContext();

    const __sharedMemory = new WebAssembly.Memory({
        initial: 4000,
        maximum: 65536,
        shared: true,
    });

    const { napiModule } = __emnapiInstantiateNapiModuleSync(wasmData, {
        context: __emnapiContext,
        asyncWorkPoolSize: 4,
        wasi: __wasi,
        onCreateWorker() {
            // Create worker using cached Blob URL (loaded during init)
            // This bypasses Obsidian's cross-origin restrictions
            if (!__workerBlobUrl) {
                throw new Error("Worker Blob URL not initialized");
            }
            const worker = new Worker(__workerBlobUrl, { type: "module" });
            return wrapWorkerWithNodeApi(worker);
        },
        overwriteImports(importObject: Record<string, unknown>) {
            const env = importObject.env as Record<string, unknown>;
            const napi = importObject.napi as Record<string, unknown>;
            const emnapi = importObject.emnapi as Record<string, unknown>;
            importObject.env = {
                ...env,
                ...napi,
                ...emnapi,
                memory: __sharedMemory,
            };
            return importObject;
        },
        beforeInit({ instance }: { instance: WebAssembly.Instance }) {
            const exports = instance.exports as Record<string, unknown>;
            for (const name of Object.keys(exports)) {
                if (name.startsWith("__napi_register__")) {
                    (exports[name] as () => void)();
                }
            }
        },
    });

    __napiModule = napiModule as typeof __napiModule;
    console.log("[FSRS Binding] WASM module initialized");
}

async function loadWasmViaFetch(fileName: string): Promise<ArrayBuffer> {
    // Try multiple possible locations
    const possibleUrls = [
        // Relative to current script (for bundled scenarios)
        `./${fileName}`,
        // Obsidian plugin directory
        `app://local/.obsidian/plugins/obsidian-spaced-repetition-recall/${fileName}`,
    ];

    for (const url of possibleUrls) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                console.log("[FSRS Binding] Loaded WASM via fetch:", url);
                return await response.arrayBuffer();
            }
        } catch {
            // Try next URL
        }
    }

    throw new Error(`Failed to load WASM file: ${fileName}`);
}

export async function computeParameters(
    ...args: Parameters<typeof computeParametersType>
): ReturnType<typeof computeParametersType> {
    await initBinding();
    return __napiModule!.exports.computeParameters(...args);
}

export async function convertCsvToFsrsItems(
    ...args: Parameters<typeof convertCsvToFsrsItemsType>
): Promise<ReturnType<typeof convertCsvToFsrsItemsType>> {
    await initBinding();
    return __napiModule!.exports.convertCsvToFsrsItems(...args);
}
