/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["jest-expect-message"],
    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1",
    },
    modulePaths: ["<rootDir>"],
    transform: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/utils/fileTransformer.js",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node", "d.ts"],
    roots: ["<rootDir>/src/", "<rootDir>/tests/unit/"],
    collectCoverageFrom: ["src/**"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "src/lang/locale/",
        
        // GUI & Obsidian coupled code
        "src/algorithms/fsrs-.*.ts",
        "src/Events/",
        "src/gui/",
        "src/reviewNote/",
        "src/settings/",
        "src/settings.ts",
        "src/ReviewDeck.ts",
        "src/commands.ts",
        "src/main.ts",
        "src/constants",
        "src/icons",
        "src/suggesters/",
        "src/utils/",
        "src/utils/renderers.ts",
        "src/declarations.d.ts",
        "build",
    ],
    coverageDirectory: "coverage",
    collectCoverage: true,
    coverageProvider: "v8",
    coverageThreshold: {
        global: {
            // TODO: Bring coverage back up to 98%+
            // TODO: Figure out why coverage on the GitHub runner
            // is lower than the local coverage
            statements: 92,
            branches: 88,
        },
    },
};
