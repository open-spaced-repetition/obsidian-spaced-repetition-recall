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
            `mix ondue and new notes when review. \
            **first** slider for total count(${settings.mixDue + settings.mixNew}), \
            second slider for ondue count(${settings.mixDue}). And new count is (total - ondue)= ${settings.mixNew}.`,
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

    if (!settings.mdView) {
        settings.mixCardNote = false;
        plugin.savePluginData();
        return;
    }
    const desc = createFragment((frag) => {
        frag.createDiv().innerHTML =
            "review flashcards and note in mix Que in default MarkdownPreview";
    });
    const set = new Setting(containerEl)
        .setName("mix flashcards and note")
        .setDesc(desc)
        .addToggle((toggle) => {
            toggle.setValue(plugin.data.settings.mixCardNote).onChange(async (newValue) => {
                plugin.data.settings.mixCardNote = newValue;
                if (newValue) addmixCardNoteCountSetting();
                await update();
            });
        });

    addmixCardNoteCountSetting();

    function addmixCardNoteCountSetting() {
        if (!settings.mixCardNote) return;
        new Setting(containerEl)
            .setDesc(
                `mix cards and notes when review. \
                **first** slider for total count(${settings.mixCard + settings.mixNote}), \
                second slider for cards count(${settings.mixCard}). And notes count is (total - ondue)= ${settings.mixNote}.`,
            )
            .addSlider((slider) =>
                slider
                    .setLimits(1, 7, 1)
                    .setValue(settings.mixCard + settings.mixNote)
                    .setDynamicTooltip()
                    .onChange(async (value) => {
                        applySettingsUpdate(async () => {
                            settings.mixCard = Math.min(value, settings.mixCard);
                            settings.mixNote = value - settings.mixCard;
                            await update();
                        });
                    }),
            )
            .addSlider((slider) =>
                slider
                    .setLimits(0, Math.min(7, settings.mixCard + settings.mixNote), 1)
                    .setValue(settings.mixCard)
                    .setDynamicTooltip()
                    .onChange((value) => {
                        applySettingsUpdate(async () => {
                            settings.mixCard = value;
                            await update();
                        });
                    }),
            )
            .addExtraButton((button) => {
                button
                    .setIcon("reset")
                    .setTooltip(t("RESET_DEFAULT"))
                    .onClick(() => {
                        applySettingsUpdate(async () => {
                            settings.mixCardNote = DEFAULT_SETTINGS.mixCardNote;
                            settings.mixCard = DEFAULT_SETTINGS.mixCard;
                            settings.mixNote = DEFAULT_SETTINGS.mixNote;
                            await update();
                        });
                    });
            });
    }

    async function update() {
        await plugin.savePluginData();
        plugin.settingTab.display();
        MixQueSet.create(settings.mixDue, settings.mixNew, settings.mixCard, settings.mixNote);
    }
}
