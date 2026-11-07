import type { App, MetadataCache, TFile } from "obsidian";
import { LinkRank } from "src/algorithms/priorities/linkPageranks";
import { Iadapter } from "src/dataStore/adapter";
import { NoteEaseList } from "src/NoteEaseList";
import type { SRSettings } from "src/settings";

class TestAdapter extends Iadapter {
    constructor(metadataCache: MetadataCache) {
        super({} as App);
        this.metadataCache = metadataCache;
    }
}

describe("LinkRank call chain", () => {
    test("ranks Markdown links and calculates incoming/outgoing ease contribution", () => {
        const resolvedLinks = {
            "source.md": { "target.md": 2, "image.png": 3 },
            "target.md": { "source.md": 1 },
            "unlinked.md": {},
        };
        const metadataCache = { resolvedLinks } as unknown as MetadataCache;
        new TestAdapter(metadataCache);
        const settings = {
            algorithm: "Default",
            algorithmSettings: { Default: { baseEase: 2.5 } },
            maxLinkFactor: 0.8,
        } as SRSettings;
        const noteEase = new NoteEaseList(settings);
        noteEase.setEaseForPath("source.md", 3.5);
        const linkRank = new LinkRank(settings, metadataCache);
        const source = { path: "source.md" } as TFile;
        const target = { path: "target.md" } as TFile;
        const unlinked = { path: "unlinked.md" } as TFile;

        linkRank.readLinks([source, target, unlinked]);
        const contribution = linkRank.getContribution(target, noteEase);

        expect(linkRank.incomingLinks["target.md"]).toEqual([
            { sourcePath: "source.md", linkCount: 2 },
        ]);
        expect(linkRank.incomingLinks["image.png"]).toEqual([]);
        expect(linkRank.pageranks["source.md"]).toBeGreaterThan(0);
        expect(linkRank.pageranks["target.md"]).toBeGreaterThan(0);
        expect(contribution.totalLinkCount).toBe(3);
        expect(contribution.linkContribution).toBeGreaterThan(0);
        expect(contribution.linkTotal).toBeGreaterThan(0);
        expect(contribution.linkPGTotal).toBeGreaterThan(0);
        expect(contribution.ease).toBeGreaterThan(2.5);
    });
});
