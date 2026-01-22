import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";
import { copyFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { dirname, join } from "path";

const prod = process.argv[2] === "production";

// Find WASM file in node_modules (supports both npm and pnpm)
function findWasmFile() {
    const wasmFileName = "fsrs-binding.wasm32-wasi.wasm";

    // Try direct path first (npm)
    const directPath = `node_modules/@open-spaced-repetition/binding-wasm32-wasi/${wasmFileName}`;
    if (existsSync(directPath)) {
        return directPath;
    }

    // Try pnpm path
    const pnpmBase = "node_modules/.pnpm";
    if (existsSync(pnpmBase)) {
        const dirs = readdirSync(pnpmBase);
        for (const dir of dirs) {
            if (dir.startsWith("@open-spaced-repetition+binding-wasm32-wasi")) {
                const pnpmPath = join(
                    pnpmBase,
                    dir,
                    "node_modules/@open-spaced-repetition/binding-wasm32-wasi",
                    wasmFileName,
                );
                if (existsSync(pnpmPath)) {
                    return pnpmPath;
                }
            }
        }
    }

    return null;
}

// Copy WASM file to build directory
function copyWasmFile() {
    const wasmSrc = findWasmFile();
    const wasmDest = "build/fsrs-binding.wasm32-wasi.wasm";

    // Ensure build directory exists
    const buildDir = dirname(wasmDest);
    if (!existsSync(buildDir)) {
        mkdirSync(buildDir, { recursive: true });
    }

    if (wasmSrc) {
        copyFileSync(wasmSrc, wasmDest);
        console.log(`Copied WASM file to ${wasmDest}`);
    } else {
        console.warn("WASM file not found in node_modules");
    }
}

// Build main plugin
const context = await esbuild.context({
    entryPoints: ["src/main.ts"],
    loader: { ".md": "text", ".png": "dataurl" },
    bundle: true,
    external: ["obsidian", "electron", ...builtins],
    format: "cjs",
    target: "es2018",
    logLevel: "info",
    sourcemap: "inline",
    sourcesContent: !prod,
    treeShaking: true,
    outfile: "build/main.js",
});

// Find worker file in node_modules (supports both npm and pnpm)
function findWorkerFile() {
    const workerFileName = "wasi-worker-browser.mjs";

    // Try @open-spaced-repetition/binding dist path first
    const bindingPath = "node_modules/@open-spaced-repetition/binding/dist/" + workerFileName;
    if (existsSync(bindingPath)) {
        return bindingPath;
    }

    // Try pnpm paths
    const pnpmBase = "node_modules/.pnpm";
    if (existsSync(pnpmBase)) {
        const dirs = readdirSync(pnpmBase);
        // Try binding package first
        for (const dir of dirs) {
            if (
                dir.startsWith("@open-spaced-repetition+binding@") &&
                !dir.includes("wasm32-wasi")
            ) {
                const pnpmPath = join(
                    pnpmBase,
                    dir,
                    "node_modules/@open-spaced-repetition/binding/dist",
                    workerFileName,
                );
                if (existsSync(pnpmPath)) {
                    return pnpmPath;
                }
            }
        }
    }

    return null;
}

// Build FSRS WASI worker (ESM format for Web Worker)
const workerFile = findWorkerFile();
if (!workerFile) {
    console.warn("Worker file not found, skipping worker build");
}

const workerContext = workerFile
    ? await esbuild.context({
          entryPoints: [workerFile],
          bundle: true,
          format: "esm",
          target: "es2020",
          logLevel: "info",
          sourcemap: "inline",
          sourcesContent: !prod,
          treeShaking: true,
          outfile: "build/fsrs-wasi-worker.js",
      })
    : null;

// Copy WASM file before build
copyWasmFile();

if (prod) {
    const buildTasks = [context.rebuild()];
    if (workerContext) buildTasks.push(workerContext.rebuild());
    await Promise.all(buildTasks).catch(() => process.exit(1));
    context.dispose();
    if (workerContext) workerContext.dispose();
} else {
    const watchTasks = [context.watch()];
    if (workerContext) watchTasks.push(workerContext.watch());
    await Promise.all(watchTasks).catch(() => process.exit(1));
}
