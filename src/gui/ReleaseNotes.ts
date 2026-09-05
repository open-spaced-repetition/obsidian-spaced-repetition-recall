/* eslint-disable @typescript-eslint/no-explicit-any */
import { App, MarkdownRenderer, Modal, Notice, moment, request } from "obsidian";
import { errorlog, isVersionNewerThanOther } from "src/util/utils_recall";
import SRPlugin from "src/main";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import README from "README.md";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import README_ZH from "docs/README_ZH.md";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RELEASE_changelog from "docs/docs/changelog.md";
import { buildDonation } from "src/settings/donation";

// const fmd = fs.readFileSync("CHANGELOG.md", "utf8");

const local = moment.locale();
let README_LOC: string;
let readme: string[];
// let readme_tks: string[];
if (local === "zh-cn" || local === "zh-tw") {
    README_LOC = README_ZH;
    readme = README_LOC.match(/^(.|\r?\n)*(?=\r?\n## 下载)/gm) ?? [];
    // readme_tks = README_LOC.match(/^(## Thanks(?:.|\r?\n)*)$/gm);
} else {
    README_LOC = README;
    readme = README_LOC.match(/^(.|\r?\n)*(?=\r?\n## How)/gm) ?? [];
    // readme_tks = README_LOC.match(/^(## Thanks(?:.|\r?\n)*)$/gm);
}
const latestRelease: string[] = RELEASE_changelog.match(/## \[(?:.|\r?\n)*?(?=\r?\n## \[)/gm);
let PLUGIN_VERSION: string;

// https://github.com/zsviczian/obsidian-excalidraw-plugin/blob/master/src/dialogs/ReleaseNotes.ts
export class ReleaseNotes extends Modal {
    private plugin: SRPlugin;
    private version: string;
    private name: string;

    // contentEl: any;

    constructor(app: App, plugin: SRPlugin, version: string) {
        super(app);
        this.plugin = plugin;
        this.version = version;
        PLUGIN_VERSION = plugin.manifest.version;
        this.name = "间隔重复";
    }

    onOpen(): void {
        this.containerEl.classList.add(`${this.name}-release`); // contains HTML space characters, which are not valid in tokens.
        this.titleEl.setText(`Welcome to ${this.name} ${this.version ?? ""}`);
        this.createForm();
    }

    async onClose() {
        this.contentEl.empty();
        this.plugin.data.settings.previousRelease = PLUGIN_VERSION;
        await this.plugin.savePluginData();
    }

    createForm() {
        const FIRST_RUN = [readme[0]].join("\n\n---\n");
        let instro: string =
            FIRST_RUN.match(/^(?:.|\r?\n)+?(?=\r?\n## Feat)/gm)?.join("\n\n---\n") ?? "";
        // const release_note = await this.getReleaseNote();
        // const notes: string[] = [];
        // if (release_note == null) {
        //     notes.push(...FIRST_RUN, latestRelease[0]);
        // } else {
        //     release_note.slice(0, 9).forEach((el: { release_note: any }) => {
        //         notes.push(el.release_note);
        //     });
        // }
        let prevRelease = this.plugin.data.settings.previousRelease;
        prevRelease = this.version === prevRelease ? "0.0.0" : prevRelease;
        // const message = this.version ? notes.join("\n\n---\n") : FIRST_RUN;
        let message = this.version
            ? Object.values(latestRelease)
                  .filter((value: string) => {
                      const match = value.match(/(?:##\s+\[)([\d\w.]{6,})(?:\s|\])/m);
                      const ver = match?.[0] ?? "";
                      return isVersionNewerThanOther(ver, prevRelease);
                  })
                  // .map((key: string) => `${key==="Intro" ? "" : `# ${key}\n`}${RELEASE_NOTES[key]}`)
                  .slice(0, 10)
                  .join("\n\n---\n")
            : "";
        instro = this.version ? instro : FIRST_RUN;
        message = this.version ? "## What's New:\n---\n" + message : message;
        MarkdownRenderer.render(this.plugin.app, instro, this.contentEl, "", this.plugin);
        buildDonation(this.contentEl);
        MarkdownRenderer.render(this.plugin.app, message, this.contentEl, "", this.plugin);

        this.contentEl.createEl("p", { text: "" }, (el) => {
            //files manually follow one of two options:
            el.style.textAlign = "right";
            const bOk = el.createEl("button", { text: "Close" });
            bOk.onclick = () => this.close();
        });
    }

    async getReleaseNote(): Promise<any[]> {
        const release_url =
            "https://api.github.com/repos/open-spaced-repetiton/obsidian-spaced-repetition-recall/releases?per_page=5&page=1";
        // const readMe_url =
        //     "https://api.github.com/repos/open-spaced-repetiton/obsidian-spaced-repetition-recall/readme";

        // "content":  "encoding": "base64"

        let latestVersionInfo = null;
        try {
            const gitAPIrequest = async (url: string) => {
                return JSON.parse(
                    await request({
                        url: url,
                    }),
                );
            };

            latestVersionInfo = (await gitAPIrequest(release_url))
                .map((el: any) => {
                    return {
                        version: el.tag_name,
                        published: new Date(el.published_at),
                        note: el.body,
                    };
                })
                .filter((el: any) => el.version.match(/^[\d.]+$/))
                .sort((el1: any, el2: any) => el2.published - el1.published);

            const latestVersion = latestVersionInfo[0].version;

            if (isVersionNewerThanOther(latestVersion, PLUGIN_VERSION)) {
                new Notice(
                    `A newer version of 间隔重复 is available in BRAT Plugins.\n\nYou are using ${PLUGIN_VERSION}.\nThe latest is ${latestVersion}`,
                );
            }
        } catch (e) {
            errorlog({ where: "Utils/checkVersion", error: e });
        }
        return latestVersionInfo;
    }
}
