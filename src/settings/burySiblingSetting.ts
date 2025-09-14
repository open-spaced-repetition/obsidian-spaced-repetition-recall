import { Setting } from "obsidian";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";

export function addburySiblingSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    new Setting(containerEl)
        .setName(t("BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW"))
        .setDesc(t("BURY_SIBLINGS_TILL_NEXT_DAY_DESC"))
        .addToggle((toggle) => {
            toggle
                .setValue(plugin.data.settings.burySiblingCardsByNoteReview)
                .onChange(async (newValue) => {
                    plugin.data.settings.burySiblingCardsByNoteReview = newValue;
                    await plugin.savePluginData();
                });
        });
}
