import { TagCache, TFile } from "obsidian";
import { ISRFile } from "src/file";
import { unitTest_GetAllTagsFromTextEx } from "./UnitTestHelper";
import { TextDirection } from "src/utils/strings";

export class UnitTestSRFile implements ISRFile {
    content: string;
    _path: string;

    constructor(content: string, path: string = null) {
        this.content = content;
        this._path = path;
    }

    get path(): string {
        return this._path;
    }

    get basename(): string {
        return "";
    }

    get tfile(): TFile {
        return undefined;
    }

    async getFrontmatter(): Promise<Map<string, string>> {
        return new Map<string, string>();
    }

    getAllTagsFromCache(): string[] {
        return unitTest_GetAllTagsFromTextEx(this.content).map((item) => item.tag);
    }

    getAllTagsFromText(): TagCache[] {
        return unitTest_GetAllTagsFromTextEx(this.content);
    }

    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    getQuestionContext(cardLine: number): string[] {
        return [];
    }

    getTextDirection(): TextDirection {
        return TextDirection.Unspecified;
    }

    async read(): Promise<string> {
        return this.content;
    }

    async write(content: string): Promise<void> {
        this.content = content;
    }
}
