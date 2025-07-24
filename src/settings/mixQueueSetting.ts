import { Setting } from "obsidian";
import { MixQueSet } from "src/dataStore/mixQueSet";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";
import { DEFAULT_SETTINGS, applySettingsUpdate } from "src/settings";

export function addmixQueueSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    const settings = plugin.data.settings;
    new Setting(containerEl)
        .setName("Mix queue")
        .setDesc(
            "mix ondue and new notes when review. **first** slider for total count, second slider for ondue count. And new count is (total - ondue).",
        )
        .addSlider((slider) =>
            slider
                .setLimits(1, 7, 1)
                .setValue(settings.mixDue + settings.mixNew)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    applySettingsUpdate(async () => {
                        settings.mixDue = Math.min(value, settings.mixDue);
                        settings.mixNew = value - settings.mixDue;
                        await update();
                    });
                }),
        )
        .addSlider((slider) =>
            slider
                .setLimits(0, Math.min(7, settings.mixDue + settings.mixNew), 1)
                .setValue(settings.mixDue)
                .setDynamicTooltip()
                .onChange((value) => {
                    applySettingsUpdate(async () => {
                        settings.mixDue = value;
                        await update();
                    });
                }),
        )
        .addExtraButton((button) => {
            button
                .setIcon("reset")
                .setTooltip(t("RESET_DEFAULT"))
                .onClick(async () => {
                    applySettingsUpdate(async () => {
                        settings.mixDue = DEFAULT_SETTINGS.mixDue;
                        settings.mixNew = DEFAULT_SETTINGS.mixNew;
                        await update();
                    });
                });
        });

    async function update() {
        await plugin.savePluginData();
        plugin.settingTab.display();
        MixQueSet.create(settings.mixDue, settings.mixNew, settings.mixCard, settings.mixNote);
    }
}
