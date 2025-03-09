import { Setting } from "obsidian";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";
import { DEFAULT_SETTINGS, applySettingsUpdate } from "src/settings";

export function addmdViewSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    const settings = plugin.data.settings;
    const desc = createFragment((frag) => {
        frag.createDiv().innerHTML =
            "review flashcards in default MarkdownPreview instead of seperate modal";
    });
    new Setting(containerEl)
        .setName("Review in MarkdowPreview")
        .setDesc(desc)
        .addToggle((toggle) => {
            toggle.setValue(plugin.data.settings.mdView).onChange(async (newValue) => {
                plugin.data.settings.mdView = newValue;
                await plugin.savePluginData();
                plugin.settingTab.display();
            });
        });
}
