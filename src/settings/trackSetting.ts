import { Setting } from "obsidian";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";

export function addTrackedNoteToDecksSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    // const plugin = this.plugin;

    new Setting(containerEl)
        .setName(t("CONVERT_TRACKED_TO_DECK"))
        .setDesc(t("CONVERT_FOLDERS_TO_DECKS_DESC"))
        .addToggle((toggle) => {
            toggle.setValue(plugin.data.settings.trackedNoteToDecks).onChange((newValue) => {
                plugin.data.settings.trackedNoteToDecks = newValue;
                plugin.savePluginData();
            });
        });
}

export function addUntrackSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    // const plugin = this.plugin;
    const settings = plugin.data.settings;
    const desc = createFragment((frag) => {
        frag.createDiv().innerHTML = t("UNTRACK_WITH_REVIEWTAG_DESC");
    });
    new Setting(containerEl)
        .setName(t("UNTRACK_WITH_REVIEWTAG"))
        .setDesc(desc)
        .addToggle((toggle) =>
            toggle.setValue(settings.untrackWithReviewTag).onChange(async (value) => {
                settings.untrackWithReviewTag = value;
                await plugin.savePluginData();
            }),
        );
}
