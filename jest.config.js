export default {
    collectCoverage: true,
    coveragePathIgnorePatterns: [],
    moduleFileExtensions: ["js", "json", "ts"],
    resolver: "jest-ts-webcompat-resolver",
    roots: ["<rootDir>/src"],
    setupFiles: [],
    setupFilesAfterEnv: ["jest-extended"],
    testEnvironment: "node",
    testPathIgnorePatterns: [],
    testRegex: "\\.(spec)\\.ts$",
    transform: {"^.+\\.ts$": "ts-jest"},
};
