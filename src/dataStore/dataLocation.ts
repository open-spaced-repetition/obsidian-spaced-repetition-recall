import { SRSettings } from "src/settings";
import { t } from "src/lang/helpers";

const ROOT_DATA_PATH = "./tracked_files.json";
// const PLUGIN_DATA_PATH = "./.obsidian/plugins/obsidian-spaced-repetition-recall/tracked_files.json";

// recall trackfile
export enum DataLocation {
    PluginFolder = "In Plugin Folder",
    RootFolder = "In Vault Folder",
    SpecifiedFolder = "In the folder specified below",
    SaveOnNoteFile = "Save On Note File",
}

export const locationMap: Record<string, DataLocation> = {
    "In Vault Folder": DataLocation.RootFolder,
    "In Plugin Folder": DataLocation.PluginFolder,
    "In the folder specified below": DataLocation.SpecifiedFolder,
    "Save On Note File": DataLocation.SaveOnNoteFile,
};

// Функция для получения локализованного маппинга
export function getLocalizedLocationMap(): Record<string, DataLocation> {
    return {
        [t("DATA_LOCATION_ROOT_FOLDER")]: DataLocation.RootFolder,
        [t("DATA_LOCATION_PLUGIN_FOLDER")]: DataLocation.PluginFolder,
        [t("DATA_LOCATION_SPECIFIED_FOLDER")]: DataLocation.SpecifiedFolder,
        [t("DATA_LOCATION_SAVE_ON_NOTE_FILE")]: DataLocation.SaveOnNoteFile,
    };
}

/**
 * getStorePath.
 *
 * @returns {string}
 */
export function getStorePath(manifestDir: string, settings: SRSettings): string {
    const dir = manifestDir;
    const dataLocation = settings.dataLocation;
    if (dataLocation == DataLocation.PluginFolder) {
        // return PLUGIN_DATA_PATH;
        return dir + ROOT_DATA_PATH.substring(1);
    } else if (dataLocation == DataLocation.RootFolder) {
        return ROOT_DATA_PATH;
    } else if (dataLocation == DataLocation.SpecifiedFolder) {
        return settings.customFolder;
    } else if (dataLocation == DataLocation.SaveOnNoteFile) {
        // return PLUGIN_DATA_PATH;
        return dir + ROOT_DATA_PATH.substring(1);
    }
}
