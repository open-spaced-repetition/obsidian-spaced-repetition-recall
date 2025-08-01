import { Setting } from "obsidian";
import { algorithmNames } from "src/algorithms/algorithms";
import { algorithmSwitchData, algorithms } from "src/algorithms/algorithms_switch";
import { DataLocation } from "src/dataStore/dataLocation";
import ConfirmModal from "src/gui/confirm";
import { t } from "src/lang/helpers";
import SRPlugin from "src/main";
import { applySettingsUpdate } from "src/gui/settings";

// https://github.com/martin-jw/obsidian-recall/blob/main/src/settings.ts

export const DEFAULT_responseOptionBtnsText: Record<string, string[]> = {
    Default: [t("RESET"), t("HARD"), t("GOOD"), t("EASY")],
    Fsrs: [t("RESET"), t("HARD"), t("GOOD"), t("EASY")],
    Anki: [t("RESET"), t("HARD"), t("GOOD"), t("EASY")],
    SM2: ["Blackout", "Incorrect", "Incorrect (Easy)", t("HARD"), t("GOOD"), t("EASY")],
};

export function addAlgorithmSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    // const plugin = this.plugin;
    const settings = plugin.data.settings;
    const desc = createFragment((frag) => {
        frag.createDiv().innerHTML = t("ALGORITHMS_DESC");
    });

    new Setting(containerEl)
        .setName(t("ALGORITHM"))
        .setDesc(desc)
        .addDropdown((dropdown) => {
            Object.keys(algorithms).forEach((val) => {
                dropdown.addOption(val, val);
            });
            const oldAlgo = plugin.data.settings.algorithm as algorithmNames;
            dropdown.setValue(plugin.data.settings.algorithm);
            dropdown.onChange((newValue) => {
                if (
                    settings.dataLocation === DataLocation.SaveOnNoteFile &&
                    newValue !== algorithmNames.Default
                ) {
                    new ConfirmModal(
                        plugin,
                        "if you want to use " +
                            newValue +
                            " Algorithm, you **can't ** save data on notefile.",
                        () => {
                            dropdown.setValue(settings.algorithm);
                        },
                    ).open();
                    return;
                }
                new ConfirmModal(plugin, t("ALGORITHMS_CONFIRM"), async (confirmed) => {
                    if (confirmed) {
                        const result = await algorithmSwitchData(
                            plugin,
                            oldAlgo,
                            newValue as algorithmNames,
                        );
                        if (!result) {
                            dropdown.setValue(settings.algorithm);
                            return;
                        }

                        settings.algorithm = newValue;
                        // plugin.algorithm = algorithms[settings.algorithm];
                        // plugin.algorithm.updateSettings(settings.algorithmSettings[newValue]);
                        await plugin.savePluginData();
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        await plugin.app.plugins.disablePlugin(plugin.manifest.id);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        await plugin.app.plugins.enablePlugin(plugin.manifest.id);
                        // plugin.app.setting.openTabById(plugin.manifest.id);

                        // this.display();
                    } else {
                        dropdown.setValue(settings.algorithm);
                    }
                }).open();
            });
        });
}

export function addAlgorithmSpecificDisplaySetting(containerEl: HTMLElement, plugin: SRPlugin) {
    // const plugin = this.plugin;
    const update = async (settings: unknown, refresh: boolean) => {
        plugin.data.settings.algorithmSettings[plugin.data.settings.algorithm] = settings;
        await plugin.savePluginData();
        if (refresh) plugin.algorithm.displaySettings(containerEl, update); // 容易导致失去输入焦点, 只在重置时刷新界面
    };
    plugin.algorithm.displaySettings(containerEl.createDiv(), update);
}

export function addResponseButtonTextSetting(containerEl: HTMLElement, plugin: SRPlugin) {
    // const plugin = this.plugin;
    containerEl.empty();
    const options = plugin.algorithm.srsOptions();
    const settings = plugin.data.settings;
    const algo = settings.algorithm;
    const btnText = settings.responseOptionBtnsText;

    if (btnText[algo] == null) {
        btnText[algo] = [];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options.forEach((opt, ind) => (btnText[algo][ind] = t(opt.toUpperCase())));
    }
    options.forEach((opt, ind) => {
        const btnTextEl = new Setting(containerEl)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .setName(t("FLASHCARD_" + opt.toUpperCase() + "_LABEL"))
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .setDesc(t("FLASHCARD_" + opt.toUpperCase() + "_DESC"));
        btnTextEl.addText((text) =>
            text.setValue(btnText[algo][ind]).onChange((value) => {
                applySettingsUpdate(() => {
                    btnText[algo][ind] = value;
                    plugin.savePluginData();
                });
            }),
        );
        btnTextEl.addExtraButton((button) => {
            button
                .setIcon("reset")
                .setTooltip(t("RESET_DEFAULT"))
                .onClick(() => {
                    settings.responseOptionBtnsText[algo][ind] =
                        DEFAULT_responseOptionBtnsText[algo][ind];
                    plugin.savePluginData();
                    // this.display();
                    addResponseButtonTextSetting(containerEl, plugin);
                });
        });
    });
}
