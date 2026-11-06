declare module "pagerank.js";

// Build-time assets embedded by esbuild; neither module is loaded from disk at runtime.
declare module "fsrs-optimizer-worker" {
    const source: string;
    export default source;
}

declare module "fsrs-wasm" {
    const bytes: Uint8Array & { readonly buffer: ArrayBuffer };
    export default bytes;
}
