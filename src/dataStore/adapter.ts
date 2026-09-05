import { App, DataAdapter, Keymap, MetadataCache, Vault } from "obsidian";

export abstract class Iadapter {
    metadataCache: MetadataCache;
    adapter: DataAdapter;
    vault: Vault;
    app: App;

    private static _instance: Iadapter;

    constructor(app: App) {
        this.app = app;
        Iadapter._instance = this;
    }

    static get instance() {
        if (Iadapter._instance) {
            return Iadapter._instance;
        } else {
            console.debug("there is not Iadapter instance.");
            return null;
        }
    }

    static create(app: App) {
        return new ObAdapter(app);
    }
}

class ObAdapter extends Iadapter {
    constructor(app: App) {
        super(app);
        this.metadataCache = app.metadataCache;
        this.adapter = app.vault.adapter;
        this.vault = app.vault;
    }
}
