import { Setting } from "obsidian";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";

export function addIntervalShowHideSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    new Setting(containerEl)
        .setName(t("INTERVAL_SHOWHIDE"))
        .setDesc(t("INTERVAL_SHOWHIDE_DESC"))
        .addToggle((toggle) => {
            toggle.setValue(plugin.data.settings.intervalShowHide);
            toggle.onChange(async (newValue) => {
                plugin.data.settings.intervalShowHide = newValue;
                await plugin.savePluginData();
            });
        });
}
