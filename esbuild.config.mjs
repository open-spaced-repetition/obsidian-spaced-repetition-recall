import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";
import { resolve } from "path";
import { createRequire } from "module";

const prod = process.argv[2] === "production";

const require = createRequire(import.meta.url);
const wasmPath = require.resolve("@open-spaced-repetition/binding-wasm32-wasip1/wasm");

const inlineOptimizer = {
    name: "inline-fsrs-optimizer",
    setup(build) {
        build.onResolve({ filter: /^fsrs-optimizer-worker$/ }, () => ({
            path: "src/algorithms/fsrs-binding-obsidian.ts",
            namespace: "worker-source",
        }));
        build.onLoad({ filter: /.*/, namespace: "worker-source" }, async ({ path }) => {
            const worker = await esbuild.build({
                entryPoints: [path],
                bundle: true,
                write: false,
                platform: "browser",
                format: "esm",
                target: "es2020",
                loader: { ".wasm": "binary" },
                alias: { "fsrs-wasm": wasmPath },
                minify: prod,
                metafile: true,
            });
            return {
                contents: worker.outputFiles[0].text,
                loader: "text",
                watchFiles: Object.keys(worker.metafile.inputs).map((file) => resolve(file)),
            };
        });
    },
};

// Build main plugin
const context = await esbuild.context({
    entryPoints: ["src/main.ts"],
    plugins: [inlineOptimizer],
    loader: { ".md": "text", ".png": "dataurl" },
    bundle: true,
    external: ["obsidian", "electron", ...builtins],
    format: "cjs",
    target: "es2020",
    logLevel: "info",
    sourcemap: "inline",
    sourcesContent: !prod,
    treeShaking: true,
    outfile: "build/main.js",
});

if (prod) {
    await context.rebuild();
    await context.dispose();
} else {
    await context.watch();
}
