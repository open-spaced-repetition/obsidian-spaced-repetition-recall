/* eslint-env jest,node */

module.exports = {
    moment: {
        locale: jest.fn(() => "en"),
    },
    PluginSettingTab: jest.fn().mockImplementation(),
    Platform: {
        __isMobileMock: jest.fn(() => false),
        get isMobile() {
            return this.__isMobileMock();
        },
    },

    Notice: jest.fn().mockImplementation(),
};
