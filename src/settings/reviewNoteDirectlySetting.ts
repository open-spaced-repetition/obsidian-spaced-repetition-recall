import { Setting } from "obsidian";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";

export function addReviewNoteDirectlySetting(containerEl: HTMLElement, plugin: SRPlugin) {
    // const plugin = this.plugin;

    new Setting(containerEl)
        .setName(t("REVIEW_NOTE_DIRECTLY"))
        .setDesc(t("REVIEW_NOTE_DIRECTLY_DESC"))
        .addToggle((toggle) => {
            toggle.setValue(plugin.data.settings.reviewingNoteDirectly);
            toggle.onChange((newValue) => {
                plugin.data.settings.reviewingNoteDirectly = newValue;
                plugin.savePluginData();
            });
        });
}
