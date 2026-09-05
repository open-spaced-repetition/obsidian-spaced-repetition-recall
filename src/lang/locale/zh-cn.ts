// 简体中文

export default {
    // flashcard-modal.tsx
    DECKS: "卡组",
    DUE_CARDS: "到期卡片",
    NEW_CARDS: "新卡片",
    TOTAL_CARDS: "全部卡片",
    BACK: "返回",
    SKIP: "略过",
    EDIT_CARD: "编辑卡片",
    RESET_CARD_PROGRESS: "重置卡片",
    RESET: "重来",
    HARD: "较难",
    GOOD: "记得",
    EASY: "简单",
    SHOW_ANSWER: "显示答案",
    CARD_PROGRESS_RESET: "卡片已被重置。",
    SAVE: "保存",
    CANCEL: "取消",
    NO_INPUT: "没有提供输入。",
    CURRENT_EASE_HELP_TEXT: "目前掌握程度：",
    CURRENT_INTERVAL_HELP_TEXT: "目前间隔：",
    CARD_GENERATED_FROM: "生成自：${notePath}",
    OPEN_NOTE: "打开笔记",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "打开一个笔记开始复习",
    REVIEW_CARDS: "复习卡片",
    REVIEW_DIFFICULTY_FILE_MENU: "复习：${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "标记为“${difficulty}”",
    CRAM_ALL_CARDS: "选择要集中复习的卡组",
    REVIEW_ALL_CARDS: "复习所有笔记中的卡片",
    REVIEW_CARDS_IN_NOTE: "复习此笔记中的卡片",
    CRAM_CARDS_IN_NOTE: "集中复习此笔记中的卡片",
    VIEW_STATS: "查看数据",
    OPEN_REVIEW_QUEUE_VIEW: "在侧边栏中打开笔记复习队列",
    STATUS_BAR: "复习: ${dueNotesCount} 笔记, ${dueFlashcardsCount} 卡片已到期",
    SYNC_TIME_TAKEN: "同步时间 ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "笔记保存在已被忽略的路径中（检查设置选项）。",
    PLEASE_TAG_NOTE: "请将需要复习的笔记中加入正确的标签（检查设置选项）。",
    RESPONSE_RECEIVED: "反馈已收到",
    NO_DECK_EXISTS: "没有 ${deckName} 卡组",
    ALL_CAUGHT_UP: `都复习完啦，你真棒！
去接触点新东西吧~`,

    // scheduling.ts
    DAYS_STR_IVL: "${interval}天",
    MONTHS_STR_IVL: "${interval}月",
    YEARS_STR_IVL: "${interval}年",
    DAYS_STR_IVL_MOBILE: "${interval}天",
    MONTHS_STR_IVL_MOBILE: "${interval}月",
    YEARS_STR_IVL_MOBILE: "${interval}年",
    HOURS_STR_IVL: "${interval}小时",
    MINUTES_STR_IVL: "${interval}分钟",
    HOURS_STR_IVL_MOBILE: "${interval}时",
    MINUTES_STR_IVL_MOBILE: "${interval}分",

    // settings.ts
    SETTINGS_HEADER: "间隔重复插件",
    GROUP_TAGS_FOLDERS: "标签和文件夹",
    GROUP_FLASHCARD_REVIEW: "闪卡复习",
    GROUP_FLASHCARD_SEPARATORS: "闪存卡分隔符",
    GROUP_DATA_STORAGE: "存储计划数据",
    GROUP_DATA_STORAGE_DESC: "选择存储计划数据位置",
    GROUP_FLASHCARDS_NOTES: "闪卡和笔记",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: '了解更多, 请点击<a href="${wikiUrl}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussionsUrl}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issuesUrl}">here</a> if you have a feature request or a bug report.',
    GITHUB_ISSUES_MODIFIED_PLUGIN:
        'Raise an <a href="${issuesUrl}">issue</a> about this modified sr-plugin if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE: "The project's source code is available on <a href=\"${githubProjectUrl}\">GitHub</a>.",
    CODE_CONTRIBUTION_INFO: "<a href=\"${codeContributionUrl}\">Here's</a> how to contribute code to the plugin.",
    TRANSLATION_CONTRIBUTION_INFO: "<a href=\"${translationContributionUrl}\">Here's</a> how to translate the plugin to another language.",
    FOLDERS_TO_IGNORE: "忽略此文件夹",
    FOLDERS_TO_IGNORE_DESC:
        "在单独一行中输入文件夹路径或全局模式，例如 Templates/Scripts 或 .excalidraw.md。此设置对闪存卡和笔记都通用。",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "卡片",
    FLASHCARD_EASY_LABEL: "“简单”按钮文本",
    FLASHCARD_GOOD_LABEL: "“记得”按钮文本",
    FLASHCARD_HARD_LABEL: "“较难”按钮文本",
    FLASHCARD_EASY_DESC: "自定义“简单”按钮的标签",
    FLASHCARD_GOOD_DESC: "自定义“记得”按钮的标签",
    FLASHCARD_HARD_DESC: "自定义“较难”按钮的标签",
    REVIEW_BUTTON_DELAY: "按钮按下延迟（毫秒）",
    REVIEW_BUTTON_DELAY_DESC: "在再次按下复习按钮前增加延迟。",
    FLASHCARD_TAGS: "卡片标签",
    FLASHCARD_TAGS_DESC: "输入标签，用空格或新建行分隔，例如：#flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "将文件夹内容转换为卡片组和子卡片组",
    CONVERT_FOLDERS_TO_DECKS_DESC: "此选项为卡片标签选项的替代选项。",
    INLINE_SCHEDULING_COMMENTS: "将计划重复日期保存在卡片最后一行的同一行",
    INLINE_SCHEDULING_COMMENTS_DESC: "HTML注释不再破坏列表格式",
    BURY_SIBLINGS_TILL_NEXT_DAY: "将关联卡片隐藏至下一天",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC: "关联卡片是来自同一卡片的不同形式， 例如：完形填空卡片",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW:
        "Bury sibling cards until the next day by note review",
    MULTI_CLOZE: "允许多个完形填空?",
    MULTI_CLOZE_DESC: "将新/到期的关联卡片组合到一个卡片中.",
    SHOW_CARD_CONTEXT: "在卡片中显示上下文",
    SHOW_CARD_CONTEXT_DESC: "例如：标题 > 副标题 > 小标题 > ... > 小标题",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "将下次复习时间显示在复习按钮",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC: "了解你的卡片被推迟了多久对你很有用",
    CARD_MODAL_HEIGHT_PERCENT: "卡片高度百分比",
    CARD_MODAL_SIZE_PERCENT_DESC: "请在移动端使用并需要浏览较大图片时设为100%",
    RESET_DEFAULT: "重置为默认",
    CARD_MODAL_WIDTH_PERCENT: "卡片宽度百分比",
    RANDOMIZE_CARD_ORDER: "复习时随机显示卡片？",
    REVIEW_CARD_ORDER_WITHIN_DECK: "复习时卡片组内的卡片排序",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "卡片组内顺序 (全部新卡片优先)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL: "卡片组内顺序 (全部到期卡片优先)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "卡片组内乱序 (全部新卡片优先)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "卡片组内乱序 (全部到期卡片优先)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "卡片组及卡片都乱序",
    REVIEW_DECK_ORDER: "复习时卡片组的排序",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL: "顺序 (在前一卡片组内卡片都复习完后)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM: "乱序 (在前一卡片组内卡片都复习完后)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "卡片组及卡片都乱序",
    DISABLE_CLOZE_CARDS: "不进行完形填空",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "将 ==高亮== 转换为完形填空",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        '添加/删除 "完形填空模式" 中的 <code>${defaultPattern}</code>',
    CONVERT_BOLD_TEXT_TO_CLOZES: "将 **粗体** 转换为完形填空",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        '添加/删除 "完形填空模式" 中的 <code>${defaultPattern}</code>',
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "将 {{大括号}} 转换为完形填空",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        '添加/删除 "完形填空模式" 中的 <code>${defaultPattern}</code>',
    CLOZE_PATTERNS: "完形填空模式",
    CLOZE_PATTERNS_DESC:
        '输入以换行符分隔的完形填空模式. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "单行卡片的分隔符",
    FIX_SEPARATORS_MANUALLY_WARNING: "注意：更改此选项后你将需要自行更改已存在卡片的分隔符。",
    INLINE_REVERSED_CARDS_SEPARATOR: "单行翻转卡片的分隔符",
    MULTILINE_CARDS_SEPARATOR: "多行卡片的分隔符",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "多行翻转卡片的分隔符",
    MULTILINE_CARDS_END_MARKER: "表示填空和多行闪卡结束的字符",
    NOTES: "笔记",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "启动时开启笔记复习窗格",
    TAGS_TO_REVIEW: "复习标签",
    TAGS_TO_REVIEW_DESC: "输入标签，用空格或新建行分隔，例如：#review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "复习随机笔记",
    OPEN_RANDOM_NOTE_DESC: "关闭此选项，笔记将以重要度(PageRank)排序。",
    AUTO_NEXT_NOTE: "复习后自动打开下一个笔记",
    MAX_N_DAYS_REVIEW_QUEUE: "右边栏中显示的最大天数",
    MIN_ONE_DAY: "天数最小值为1",
    VALID_NUMBER_WARNING: "请输入有效的数字。",
    UI: "User Interface",
    OPEN_IN_TAB: "在新标签打开",
    OPEN_IN_TAB_DESC: "关闭此选项可在模式窗口中打开插件",
    SHOW_STATUS_BAR: "显示在状态栏",
    SHOW_STATUS_BAR_DESC: "将此关闭以隐藏 Obsidian 状态栏中的卡片复习状态。",
    SHOW_RIBBON_ICON: "在功能区中显示图标",
    SHOW_RIBBON_ICON_DESC: "关闭此选项可隐藏 Obsidian 功能区栏中的插件图标",
    ENABLE_FILE_MENU_REVIEW_OPTIONS: "请在文件菜单中启用复习选项（例如：复习：简单、良好、困难",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "如果您在文件菜单中禁用复习选项，您可以使用插件命令来复习笔记，如果您定义了相关快捷键，也可以使用它们。",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "默认在列表中展开嵌套子牌组",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "关闭此选项可折叠同一张卡片中的嵌套牌组。如果您的卡片属于同一文件中的许多套牌，则很有用。",
    ALGORITHM: "算法",
    CHECK_ALGORITHM_WIKI: '了解更多, 请点击<a href="${algoUrl}">算法实现</a>.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "基础掌握程度",
    BASE_EASE_DESC: "最小值130，推荐值约250.",
    BASE_EASE_MIN_WARNING: "基础掌握程度的最小值为130。",
    LAPSE_INTERVAL_CHANGE: "将复习时标注为“较难”的卡片或笔记复习间隔缩短",
    LAPSE_INTERVAL_CHANGE_DESC: "新复习间隔 = 原复习间隔 * 间隔改变系数 / 100.",
    EASY_BONUS: "简单奖励",
    EASY_BONUS_DESC: "简单奖励设定“记得”和“简单”卡片或笔记的复习间隔差距（最小值100%）。",
    EASY_BONUS_MIN_WARNING: "简单奖励至少为100。",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "最大间隔（天）",
    MAX_INTERVAL_DESC: "设定复习的最大间隔时间（默认值100年）。",
    MAX_INTERVAL_MIN_WARNING: "最大间隔至少为1天",
    MAX_LINK_CONTRIB: "最大链接收益",
    MAX_LINK_CONTRIB_DESC: "链接笔记的加权掌握程度对原始掌握程度的最大贡献。",
    FUZZING: "均衡",
    FUZZING_DESC: "启用时, 会给新间隔添加个较小的随机延迟，以免卡片总被堆积在同一天复习。",
    SWITCH_SHORT_TERM: "短期排程",
    SWITCH_SHORT_TERM_DESC:
        "禁用时，可让用户跳过短期排程(如5分钟、10分钟)，直接切换到长期排程（如3天、5天）。",
    LOGGING: "记录中",
    DISPLAY_SCHEDULING_DEBUG_INFO: "在开发者控制台中显示调试信息",
    DISPLAY_PARSER_DEBUG_INFO: "Show the parser's debugging information on the developer console",
    SCHEDULING: "Scheduling",
    EXPERIMENTAL: "Experimental",
    HELP: "Help",
    STORE_IN_NOTES: "In the notes",
    DATA_LOC: "数据位置",
    DATA_LOC_DESC: "间隔重复数据项的文件的保存位置.",
    DATA_FOLDER: "`tracked_files.json`的文件夹",
    NEW_PER_DAY: "每天新增重复的数量",
    NEW_PER_DAY_DESC: "每天要添加到队列中的新（未重复过的）笔记的最大数量。设置为`-1`则无限制。",
    NEW_PER_DAY_NAN: "必须是整数",
    NEW_PER_DAY_NEG: "整数必须大于等于-1.",
    REPEAT_ITEMS: "重复错误",
    REPEAT_ITEMS_DESC: "错误项是否要一直重复复习，直到回答正确?",
    ALGORITHMS_CONFIRM:
        "切换算法可能导致日期排程重置，这个修改不可撤销，当重启软件或重新加载插件切换算法才会生效。你确定要切换算法么?",
    ALGORITHMS_DESC:
        '用于间隔重复的算法. 更多信息请查阅 <a href="https://github.com/martin-jw/obsidian-recall">算法</a>.',
    CONVERT_TRACKED_TO_DECK: "将复习笔记转换为卡牌组?",
    REVIEW_FLOATBAR: "复习悬浮栏",
    REVIEW_FLOATBAR_DESC:
        "当设置项“复习后自动打开下一个笔记”启用时，这个设置项启用才生效. 通过点击状态栏/侧边栏/命令进行复习时就会显示出来.",
    REVIEW_NOTE_DIRECTLY: "直接复习笔记?",
    REVIEW_NOTE_DIRECTLY_DESC: "复习笔记时, 不必选择标签（多个复习标签的情况）就直接打开笔记",
    INTERVAL_SHOWHIDE: "显示复习间隔",
    INTERVAL_SHOWHIDE_DESC: "是否在按键上显示复习间隔",
    REQUEST_RETENTION: "保留度",
    REQUEST_RETENTION_DESC: "在下次进行复习时，你期望能回想起答案的概率（百分比）",
    REVLOG_TAGS: "输出到日志的标签",
    REVLOG_TAGS_DESC:
        "用于输出到日志的标签, 卡片或笔记的标签（如#review #flashcards #tag1）都行。默认留空则不按标签区分，都正常输出到日志表格",
    FLASHCARD_AGAIN_LABEL: "重来 按钮文本",
    FLASHCARD_BLACKOUT_LABEL: "忘记 按钮文本",
    FLASHCARD_INCORRECT_LABEL: "猜错 按钮文本",
    _LABEL: "猜错（简单） 按钮文本",
    FLASHCARD_AGAIN_DESC: "自定义“重来”按钮的标签",
    FLASHCARD_BLACKOUT_DESC: "自定义“忘记”按钮的标签",
    FLASHCARD_INCORRECT_DESC: "自定义“猜错”按钮的标签",
    _DESC: "自定义“猜错（简单）”按钮的标签",
    UNTRACK_WITH_REVIEWTAG: "UntrackWithReviewTag",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "笔记复习序列",
    CLOSE: "临近",
    NEW: "新",
    YESTERDAY: "昨天",
    TODAY: "今天",
    TOMORROW: "明天",

    // stats-modal.tsx
    STATS_TITLE: "数据",
    MONTH: "月",
    QUARTER: "季",
    YEAR: "年",
    LIFETIME: "全部",
    FORECAST: "预期",
    FORECAST_DESC: "将要到期的卡片数量",
    SCHEDULED: "已排期",
    DAYS: "天",
    NUMBER_OF_CARDS: "卡片数量",
    REVIEWS_PER_DAY: "平均: 复习${avg} /天",
    INTERVALS: "间隔",
    INTERVALS_DESC: "到下一次复习的时间间隔",
    COUNT: "计数",
    INTERVALS_SUMMARY: "平均间隔时间: ${avg}, 最长间隔时间: ${longest}",
    EASES: "掌握程度",
    EASES_SUMMARY: "平均掌握程度: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "卡片类型",
    CARD_TYPES_DESC: "如有，将显示隐藏的卡片",
    CARD_TYPE_NEW: "新",
    CARD_TYPE_YOUNG: "较新",
    CARD_TYPE_MATURE: "熟悉",
    CARD_TYPES_SUMMARY: "总卡片数: ${totalCardsCount}",
    SEARCH: "Search",
    PREVIOUS: "Previous",
    NEXT: "Next",
    REVIEWED_TODAY: "今天复习情况",
    REVIEWED_TODAY_DESC: "今天已经复习的卡片/笔记的数量",
    NEW_LEARNED: "新学",
    DUE_REVIEWED: "复习",
    REVIEWED_TODAY_SUMMARY: "总复习数: ${totalreviewedCount}",
    DATE: "日期",

    // cardBlockIDSetting.ts
    CARD_BLOCK_ID: "Card Block ID",
    CARD_BLOCK_ID_DESC:
        "use Card Block ID instead of line number and text hash.<br>  <b>If set True, block id will append after card text. And block id will keep in note after reset to False again.</b>",
    CARD_BLOCK_ID_CONFIRM: `**If set True, block id will append after card text. And block id will keep in note after reset to False again. ** 

Suggestion： backup your vault before set True. Or try it in sandbox vault. 

After setting is turned on, blockid will be added after all cards. Even if it is turned off again, the added blockid will still remain in the note and will not be deleted.

It is recommended to **backup first** the note library, or try it in a sandbox library.`,

    // mixQueueSetting.ts
    MIX_QUEUE: "Mix queue",
    MIX_QUEUE_DESC:
        "mix ondue and new notes when review. **first** slider for total count, second slider for ondue count. And new count is (total - ondue).",

    // trackSetting.ts
    UNTRACK_WITH_REVIEWTAG_DESC:
        "When deleting the review tag in the note, synchronously untrack the operation, so that the note will no longer be reviewed<br><b>true</b>: synchronous untrack operation;<br><b>false</b>：After deleting the review tag, you need to untrack again before the note will no longer be reviewed. (same as previous version)",

    // dataLocation.ts
    DATA_LOCATION_PLUGIN_FOLDER: "In Plugin Folder",
    DATA_LOCATION_ROOT_FOLDER: "In Vault Folder",
    DATA_LOCATION_SPECIFIED_FOLDER: "In the folder specified below",
    DATA_LOCATION_SAVE_ON_NOTE_FILE: "Save On Note File",

    // fsrs.ts
    FSRS_ALGORITHM_DESC:
        'The algorithm used for spaced repetition. For more information see <a href="https://github.com/open-spaced-repetition/ts-fsrs">FSRS algorithm</a>.',
    FSRS_W_PARAM_DESC:
        'See <a href="https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm">FSRS V6 WIKI</a> and <a href="https://open-spaced-repetition.github.io/anki_fsrs_visualizer">FSRS w parameter visualization</a> to set various parameters.',

    // anki.ts
    ANKI_ALGORITHM_DESC:
        'The algorithm used for spaced repetition. For more information see <a href="https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html">Anki algorithm</a>.',
    STARTING_EASE: "Starting Ease",
    STARTING_EASE_DESC: "The initial ease given to an item.",
    STARTING_EASE_ERROR: "Starting ease must be a positive number.",
    STARTING_EASE_WARNING: "Starting ease lower than 1.3 is not recommended.",
    EASY_BONUS_ANKI: "Easy Bonus",
    EASY_BONUS_ANKI_DESC: "A bonus multiplier for items reviewed as easy.",
    EASY_BONUS_ANKI_ERROR: "Easy bonus must be a number greater than or equal to 1.",
    LAPSE_INTERVAL_MODIFIER: "Lapse Interval Modifier",
    LAPSE_INTERVAL_MODIFIER_DESC:
        "A factor to modify the review interval with when an item is reviewed as wrong.",
    LAPSE_INTERVAL_ERROR: "Lapse interval must be a positive number.",
    GRADUATING_INTERVAL: "Graduating Interval",
    GRADUATING_INTERVAL_DESC: "The interval (in days) to the next review after reviewing a new item as 'Good'.",
    GRADUATING_INTERVAL_ERROR: "Interval must be a positive number.",
    EASY_INTERVAL: "Easy Interval",
    EASY_INTERVAL_DESC: "The interval (in days) to the next review after reviewing a new item as 'Easy'.",
    EASY_INTERVAL_ERROR: "Interval must be a positive number.",

    // scheduling_default.ts
    DEFAULT_ALGORITHM_DESC:
        'The algorithm used for spaced repetition. For more information see <a href="https://www.stephenmwangi.com/obsidian-spaced-repetition/algorithms/">modified Anki algorithm</a>.',

    // supermemo.ts
    SM2_ALGORITHM_DESC:
        'The algorithm used for spaced repetition. Currently shares the same parameters as the Anki algorithm (only the algorithm processing method is different). For more information see <a href="https://www.supermemo.com/en/archives1990-2015/english/ol/sm2">SM2 algorithm</a>.',

    // info.ts
    ITEM_INFO_TITLE: "Item info of",
    CARDS_IN_NOTE: "Cards in this Note",
    SAVE_ITEM_INFO: "Save",
    SAVE_ITEM_INFO_TOOLTIP: "only save current note's item info",
    CLOSE_ITEM_INFO: "Close",
    LINE_NO: "LineNo:",
    NEXT_REVIEW: "nextReivew:",
    NEW_CARD: "NewCard",
    ITEM_DATA_INFO: "Item.data info",

    // locationSetting.ts
    DATA_LOCATION_WARNING_TO_NOTE: `BE CAREFUL!!!
  if you confirm this, it will convert all your scheduling informations in \`tracked_files.json\` to note, which will change lots of your note file in the same time.
 Please make sure the setting tags of flashcards and notes is what you are using.`,
    DATA_LOCATION_WARNING_OTHER_ALGO:
        "if you want to save data on notefile, you **have to** use Default Algorithm.",
    DATA_LOCATION_WARNING_TO_TRACKED: `BE CAREFUL!!! 
 if you confirm this, it will converte all your scheduling informations on note(which will be deleted in the same time) TO \`tracked_files.json\`.`,
    POST_ISSUE_MODIFIED_PLUGIN:
        'Post an <a href="${issue_url}">issue</a> about this modified sr-plugin which has background color for settings.',

    // donation.ts
    DONATION_TEXT: "业余时间折腾的，如果对你有所帮助，可以请我喝瓶饮料或奶茶呀~",

    // locationSetting.ts
    FOLDER_PLACEHOLDER: "Example: folder1/folder2",
    SAVE_BUTTON: "Save",
    LOCATION_CHANGE_FINISHED: "Finished location change.",

    // commands.ts
    CMD_ITEM_INFO: "Item Info",
    CMD_TRACK_NOTE: "Track Note",
    CMD_UNTRACK_NOTE: "Untrack Note",
    CMD_RESCHEDULE: "Reschedule",
    CMD_POSTPONE_CARDS: "Postpone cards",
    CMD_POSTPONE_NOTES: "Postpone notes",
    CMD_POSTPONE_ALL: "Postpone All",
    CMD_POSTPONE_NOTE_MANUAL: "Postpone this note after x days",
    CMD_POSTPONE_CARDS_MANUAL: "Postpone cards in this note after x days",
    CMD_BUILD_QUEUE: "Build Queue",
    CMD_REVIEW: "Review",
    CMD_PRINT_VIEW_STATE: "Print View State",
    CMD_PRINT_EPHEMERAL_STATE: "Print Ephemeral State",
    CMD_CLEAR_QUEUE: "Clear Queue",
    CMD_QUEUE_ALL: "Queue All",
    CMD_PRINT_DATA: "Print Data",
    CMD_UPDATE_ITEMS: "Update Items",
    CMD_INPUT_POSITIVE_NUMBER: "please input positive number",
    CMD_NOTE_POSTPONED: "This note has been postponed ${days} days",

    // trackFileEvents.ts
    MENU_TRACK_ALL_NOTES: "Track All Notes",
    MENU_UNTRACK_ALL_NOTES: "Untrack All Notes",
    MENU_TRACK_NOTE: "Track Note",
    MENU_UNTRACK_NOTE: "Untrack Note",

    // data.ts
    DATA_TAGGED_FILE_CANT_UNTRACK: "it is taged file, can't untrack by this. You can delete the #review tag in note file.",
    DATA_UNTRACKED_ITEMS: "Untracked ${numItems} items${nulrstr}",
    DATA_UNABLE_TO_SAVE: "Unable to save data file!",
    DATA_FOLDER_UNTRACKED:
        "In folder ${folderPath}, ${totalRemoved} files are no longer tracked for repetition",
    DATA_ADDED_REMOVED_ITEMS: "Added ${totalAdded} new items, removed ${totalRemoved} items.",
    DATA_ADDED_REMOVED_ITEMS_SHORT: "Added ${added} new items, removed ${removed} items.",
    DATA_FILE_UPDATE: `\${filePath} update - lineNo: \${lineNo}
Added: \${added} new card items, removed \${removed} card items.`,
    DATA_ALL_ITEMS_UPDATED: "all items have been updated.",

    // reviewView.ts
    NEXT_REVIEW_MINUTES: "You can review in ${interval} minutes",
    NEXT_REVIEW_HOURS: "You can review in ${interval} hours",

    // location_switch.ts
    DATA_FILE_MOVED_SUCCESS: "Successfully moved data file!",
    DATA_FILE_DELETE_OLD_FAILED: "Unable to delete old data file, please delete it manually.",
    DATA_FILE_MOVE_FAILED: "Unable to move data file!",
    DATA_LOST_WARNING: "have some data lost, see console for details.",

    // algorithms_switch.ts
    ALGORITHM_SWITCH_FAILED: "conversion failed, old algorithm and data restored, please issue it.",
    ALGORITHM_SWITCH_SUCCESS:
        "conversion completed, due to different algorithm parameters, subsequent review intervals will be adjusted",

    // fsrs-optimizer
    FSRS_OPTIMIZER: "FSRS 优化器",
    FSRS_OPTIMIZER_DESC: "从复习历史 CSV 文件训练个性化 FSRS 参数，以获得更准确的调度预测。",
    FSRS_OPTIMIZER_UPLOAD: "上传复习记录",
    FSRS_OPTIMIZER_UPLOAD_DESC: "选择包含复习历史的 CSV 文件来训练优化参数。",
    FSRS_SELECT_CSV: "选择 CSV 文件",
    FSRS_LOADING_FILE: "正在加载文件...",
    FSRS_CONVERTING_DATA: "正在转换数据...",
    FSRS_TRAINING_PROGRESS: "训练中: ${current}%",
    FSRS_TRAINING_COMPLETE: "训练完成！",
    FSRS_TRAINING_ERROR: "训练错误",
    FSRS_OPTIMIZED_PARAMS: "优化后的参数",
    FSRS_OLD_VALUE: "原值",
    FSRS_NEW_VALUE: "新值",
    FSRS_CHANGE: "变化",
    FSRS_APPLY_PARAMS: "应用参数",
    FSRS_COPY_PARAMS: "复制参数",
    FSRS_PARAMS_APPLIED: "参数应用成功！",
    FSRS_PARAMS_COPIED: "参数已复制到剪贴板！",
    FSRS_TRAINING_FAILED: "训练失败",
    FSRS_BINDING_LOAD_ERROR: "加载 FSRS 优化模块失败",
    FSRS_CSV_PARSE_ERROR: "解析 CSV 文件失败",
    FSRS_NO_VALID_ITEMS: "数据中未找到有效的复习项目",
    FSRS_LOW_REVIEW_COUNT_WARNING:
        "警告: 仅找到 ${count} 条有效复习记录。更多记录将产生更好的结果。",
    FSRS_PLUGIN_BASE_PATH_NOT_SET: "插件基础路径未设置。请重启 Obsidian 后重试。",
};
