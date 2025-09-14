// English

export default {
    // flashcard-modal.tsx
    DECKS: "Decks",
    DUE_CARDS: "Due Cards",
    NEW_CARDS: "New Cards",
    TOTAL_CARDS: "Total Cards",
    BACK: "Back",
    SKIP: "Skip",
    EDIT_CARD: "Edit Card",
    RESET_CARD_PROGRESS: "Reset card's progress",
    RESET: "Reset",
    HARD: "Hard",
    GOOD: "Good",
    EASY: "Easy",
    SHOW_ANSWER: "Show Answer",
    CARD_PROGRESS_RESET: "Card's progress has been reset.",
    SAVE: "Save",
    CANCEL: "Cancel",
    NO_INPUT: "No input provided.",
    CURRENT_EASE_HELP_TEXT: "Current Ease: ",
    CURRENT_INTERVAL_HELP_TEXT: "Current Interval: ",
    CARD_GENERATED_FROM: "Generated from: ${notePath}",
    OPEN_NOTE: "Open Note",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Open a note for review",
    REVIEW_CARDS: "Review flashcards",
    REVIEW_DIFFICULTY_FILE_MENU: "Review: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "Review note as ${difficulty}",
    CRAM_ALL_CARDS: "Select a deck to cram",
    REVIEW_ALL_CARDS: "Review flashcards from all notes",
    REVIEW_CARDS_IN_NOTE: "Review flashcards in this note",
    CRAM_CARDS_IN_NOTE: "Cram flashcards in this note",
    VIEW_STATS: "View statistics",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR: "Review: ${dueNotesCount} note(s), ${dueFlashcardsCount} card(s) due",
    SYNC_TIME_TAKEN: "Sync took ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "Note is saved under ignored folder (check settings).",
    PLEASE_TAG_NOTE: "Please tag the note appropriately for reviewing (in settings).",
    RESPONSE_RECEIVED: "Response received.",
    NO_DECK_EXISTS: "No deck exists for ${deckName}",
    ALL_CAUGHT_UP: "You're all caught up now :D.",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} day(s)",
    MONTHS_STR_IVL: "${interval} month(s)",
    YEARS_STR_IVL: "${interval} year(s)",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}y",
    HOURS_STR_IVL: "${interval}hour(s)",
    MINUTES_STR_IVL: "${interval}minute(s)",
    HOURS_STR_IVL_MOBILE: "${interval}h",
    MINUTES_STR_IVL_MOBILE: "${interval}min",

    // settings.ts
    SETTINGS_HEADER: "Spaced Repetition Recall",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: 'For more information, check the <a href="${wikiUrl}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussionsUrl}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an <a href="${issuesUrl}">issue</a> if you have a feature request or a bug report.',
    GITHUB_ISSUES_MODIFIED_PLUGIN:
        'Raise an <a href="${issuesUrl}">issue</a> about this modified sr-plugin if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE:
        'The project\'s source code is available on <a href="${githubProjectUrl}">GitHub</a>.',
    CODE_CONTRIBUTION_INFO:
        '<a href="${codeContributionUrl}">Here\'s</a> how to contribute code to the plugin.',
    TRANSLATION_CONTRIBUTION_INFO:
        '<a href="${translationContributionUrl}">Here\'s</a> how to translate the plugin to another language.',
    FOLDERS_TO_IGNORE: "Folders to ignore",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Flashcards",
    FLASHCARD_EASY_LABEL: "Easy Button Text",
    FLASHCARD_GOOD_LABEL: "Good Button Text",
    FLASHCARD_HARD_LABEL: "Hard Button Text",
    FLASHCARD_EASY_DESC: 'Customize the label for the "Easy" Button',
    FLASHCARD_GOOD_DESC: 'Customize the label for the "Good" Button',
    FLASHCARD_HARD_DESC: 'Customize the label for the "Hard" Button',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "Flashcard tags",
    FLASHCARD_TAGS_DESC:
        "Enter tags separated by spaces or newlines i.e. #flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "Convert folders to decks and subdecks",
    CONVERT_FOLDERS_TO_DECKS_DESC: "This is an alternative to the Flashcard tags option above.",
    INLINE_SCHEDULING_COMMENTS:
        "Save scheduling comment on the same line as the flashcard's last line?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Turning this on will make the HTML comments not break list formatting.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Bury sibling cards until the next day",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Siblings are cards generated from the same card text i.e. cloze deletions",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW: "Bury sibling cards until the next day by note review",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "Show context in cards",
    SHOW_CARD_CONTEXT_DESC: "i.e. Title > Heading 1 > Subheading > ... > Subheading",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Flashcard Height Percentage",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Should be set to 100% on mobile or if you have very large images",
    RESET_DEFAULT: "Reset to default",
    CARD_MODAL_WIDTH_PERCENT: "Flashcard Width Percentage",
    RANDOMIZE_CARD_ORDER: "Randomize card order during review?",
    REVIEW_CARD_ORDER_WITHIN_DECK: "Order cards in a deck are displayed during review",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "Sequentially within a deck (All new cards first)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL: "Sequentially within a deck (All due cards first)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "Randomly within a deck (All new cards first)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "Randomly within a deck (All due cards first)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "Random card from random deck",
    REVIEW_DECK_ORDER: "Order decks are displayed during review",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL:
        "Sequentially (once all cards in previous deck reviewed)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM:
        "Randomly (once all cards in previous deck reviewed)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "Random card from random deck",
    DISABLE_CLOZE_CARDS: "Disable cloze cards?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Convert ==highlights== to clozes",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        'Add/remove the <code>${defaultPattern}</code> from your "Cloze Patterns"',
    CONVERT_BOLD_TEXT_TO_CLOZES: "Convert **bolded text** to clozes",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        'Add/remove the <code>${defaultPattern}</code> from your "Cloze Patterns"',
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "Convert {{curly brackets}} to clozes",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        'Add/remove the <code>${defaultPattern}</code> from your "Cloze Patterns"',
    CLOZE_PATTERNS: "Cloze Patterns",
    CLOZE_PATTERNS_DESC:
        'Enter cloze patterns separated by newlines. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "Separator for inline flashcards",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Note that after changing this you have to manually edit any flashcards you already have.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Separator for inline reversed flashcards",
    MULTILINE_CARDS_SEPARATOR: "Separator for multiline flashcards",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Separator for multiline reversed flashcards",
    MULTILINE_CARDS_END_MARKER: "Characters denoting the end of clozes and multiline flashcards",
    NOTES: "Notes",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Enable note review pane on startup",
    TAGS_TO_REVIEW: "Tags to review",
    TAGS_TO_REVIEW_DESC: "Enter tags separated by spaces or newlines i.e. #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Open a random note for review",
    OPEN_RANDOM_NOTE_DESC: "When you turn this off, notes are ordered by importance (PageRank).",
    AUTO_NEXT_NOTE: "Open next note automatically after a review",
    MAX_N_DAYS_REVIEW_QUEUE: "Maximum number of days to display on note review panel",
    MIN_ONE_DAY: "The number of days must be at least 1.",
    VALID_NUMBER_WARNING: "Please provide a valid number.",
    UI: "User Interface",
    OPEN_IN_TAB: "Open in new tab",
    OPEN_IN_TAB_DESC: "Turn this off to open the plugin in a modal window",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "Enable the review options in the file menu (e.g. Review: Easy, Good, Hard)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "If you disable the review options in the file menu, you can review your notes using the plugin commands and, if you defined them, the associated command hotkeys.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "Deck trees should be initially displayed as expanded",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Turn this off to collapse nested decks in the same card. Useful if you have cards which belong to many decks in the same file.",
    ALGORITHM: "Algorithm",
    CHECK_ALGORITHM_WIKI:
        'For more information, check the <a href="${algoUrl}">algorithm details</a>.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Base ease",
    BASE_EASE_DESC: "minimum = 130, preferrably approximately 250.",
    BASE_EASE_MIN_WARNING: "The base ease must be at least 130.",
    LAPSE_INTERVAL_CHANGE: "Interval change when you review a flashcard/note as hard",
    LAPSE_INTERVAL_CHANGE_DESC: "newInterval = oldInterval * intervalChange / 100.",
    EASY_BONUS: "Easy Bonus",
    EASY_BONUS_DESC:
        "The easy bonus allows you to set the difference in intervals between answering Good and Easy on a flashcard/note (minimum = 100%).",
    EASY_BONUS_MIN_WARNING: "The easy bonus must be at least 100.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Maximum interval in days",
    MAX_INTERVAL_DESC: "Allows you to place an upper limit on the interval (default = 100 years).",
    MAX_INTERVAL_MIN_WARNING: "The maximum interval must be at least 1 day.",
    MAX_LINK_CONTRIB: "Maximum link contribution",
    MAX_LINK_CONTRIB_DESC:
        "Maximum contribution of the weighted ease of linked notes to the initial ease.",
    FUZZING: "Fuzzing",
    FUZZING_DESC:
        "When enabled, this adds a small random delay to the new interval time to prevent cards from sticking together and always being reviewed on the same day.",
    SWITCH_SHORT_TERM: "Switch to Short-term Scheduler",
    SWITCH_SHORT_TERM_DESC:
        "When disabled, this allow user to skip the short-term scheduler and directly switch to the long-term scheduler.",
    LOGGING: "Logging",
    DISPLAY_SCHEDULING_DEBUG_INFO:
        "Show the scheduler's debugging information on the developer console",
    DISPLAY_PARSER_DEBUG_INFO: "Show the parser's debugging information on the developer console",
    SCHEDULING: "Scheduling",
    EXPERIMENTAL: "Experimental",
    HELP: "Help",
    STORE_IN_NOTES: "In the notes",

    DATA_LOC: "Data Location",
    DATA_LOC_DESC: "Where to store the data file for spaced repetition items.",
    DATA_FOLDER: "Folder for `tracked_files.json`",
    NEW_PER_DAY: "New Per Day",
    NEW_PER_DAY_DESC:
        "Maximum number of new (unreviewed) notes to add to the queue each day, set `-1` with unlimit.",
    NEW_PER_DAY_NAN: "Timeout must be a number",
    NEW_PER_DAY_NEG: "New per day must be -1 or greater.",
    REPEAT_ITEMS: "Repeat Items",
    REPEAT_ITEMS_DESC: "Should items marked as incorrect be repeated until correct?",
    ALGORITHMS_CONFIRM: `Switching algorithms might reset or impact review timings on existing items.
    This change is irreversible. Changing algorithms only takes effect after a restart
    or a plugin reload. Are you sure you want to switch algorithms?
    `,
    ALGORITHMS_DESC:
        'The algorithm used for spaced repetition. For more information see <a href="https://github.com/martin-jw/obsidian-recall">algorithms</a>.',
    CONVERT_TRACKED_TO_DECK: "Convert Tracked Notes to decks?",
    REVIEW_FLOATBAR: "Review Response FloatBar",
    REVIEW_FLOATBAR_DESC:
        "only working when autoNextNote is true. show it when reviewing note via click statusbar/sidebar/command.",
    REVIEW_NOTE_DIRECTLY: "Reviewing Note directly?",
    REVIEW_NOTE_DIRECTLY_DESC:
        "when reviewing note via click statusbar or command, open it directly without having to select a tag to open a note",
    INTERVAL_SHOWHIDE: "Display Next Review Interval",
    INTERVAL_SHOWHIDE_DESC: "whether to display next revivew iterval on the response buttons.",
    REQUEST_RETENTION: "Request_retention",
    REQUEST_RETENTION_DESC:
        "The probability (percentage) that you expect to recall the answer the next time you review",
    REVLOG_TAGS: "Tags for output review log",
    REVLOG_TAGS_DESC:
        "Tags for output review log, could be flashcards tags or/and notes tags(e.g. #review #flashcards #tag1), default empty means it output to the review log file normally without filtered by tags",

    FLASHCARD_AGAIN_LABEL: "Again Button Text",
    FLASHCARD_BLACKOUT_LABEL: "Blackout Button Text",
    FLASHCARD_INCORRECT_LABEL: "Incorrect Button Text",
    "FLASHCARD_INCORRECT (EASY)_LABEL": "Incorrect (Easy) Button Text",
    FLASHCARD_AGAIN_DESC: 'Customize the label for the "Again" Button',
    FLASHCARD_BLACKOUT_DESC: 'Customize the label for the "Blackout" Button',
    FLASHCARD_INCORRECT_DESC: 'Customize the label for the "Incorrect" Button',
    "FLASHCARD_INCORRECT (EASY)_DESC": 'Customize the label for the "Incorrect (Easy)" Button',
    UNTRACK_WITH_REVIEWTAG: "UntrackWithReviewTag",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Notes Review Queue",
    CLOSE: "Close",
    NEW: "New",
    YESTERDAY: "Yesterday",
    TODAY: "Today",
    TOMORROW: "Tomorrow",

    // stats-modal.tsx
    STATS_TITLE: "Statistics",
    MONTH: "Month",
    QUARTER: "Quarter",
    YEAR: "Year",
    LIFETIME: "Lifetime",
    FORECAST: "Forecast",
    FORECAST_DESC: "The number of cards due in the future",
    SCHEDULED: "Scheduled",
    DAYS: "Days",
    NUMBER_OF_CARDS: "Number of cards",
    REVIEWS_PER_DAY: "Average: ${avg} reviews/day",
    INTERVALS: "Intervals",
    INTERVALS_DESC: "Delays until reviews are shown again",
    COUNT: "Count",
    INTERVALS_SUMMARY: "Average interval: ${avg}, Longest interval: ${longest}",
    EASES: "Eases",
    EASES_SUMMARY: "Average ease: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Card Types",
    CARD_TYPES_DESC: "This includes buried cards as well, if any",
    CARD_TYPE_NEW: "New",
    CARD_TYPE_YOUNG: "Young",
    CARD_TYPE_MATURE: "Mature",
    CARD_TYPES_SUMMARY: "Total cards: ${totalCardsCount}",
    SEARCH: "Search",
    PREVIOUS: "Previous",
    NEXT: "Next",
    REVIEWED_TODAY: "Reviewed today",
    REVIEWED_TODAY_DESC: "counts of cards/notes you have reviewed today",
    NEW_LEARNED: "New Learned",
    DUE_REVIEWED: "due Reviewed",
    REVIEWED_TODAY_SUMMARY: "Total Reviewed today: ${totalreviewedCount}",
    DATE: "Date",

    // cardBlockIDSetting.ts
    CARD_BLOCK_ID: "Card Block ID",
    CARD_BLOCK_ID_DESC:
        "use Card Block ID instead of line number and text hash.<br>  <b>If set True, block id will append after card text. And block id will keep in note after reset to False again.</b>",
    CARD_BLOCK_ID_CONFIRM:
        "**If set True, block id will append after card text. And block id will keep in note after reset to False again. ** \n\nSuggestion： backup your vault before set True. Or try it in sandbox vault. \n\nAfter setting is turned on, blockid will be added after all cards. Even if it is turned off again, the added blockid will still remain in the note and will not be deleted.\n\nIt is recommended to **backup first** the note library, or try it in a sandbox library.",

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
    GRADUATING_INTERVAL_DESC:
        "The interval (in days) to the next review after reviewing a new item as 'Good'.",
    GRADUATING_INTERVAL_ERROR: "Interval must be a positive number.",
    EASY_INTERVAL: "Easy Interval",
    EASY_INTERVAL_DESC:
        "The interval (in days) to the next review after reviewing a new item as 'Easy'.",
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
    DATA_LOCATION_WARNING_TO_NOTE:
        "BE CAREFUL!!!\n  if you confirm this, it will convert all your scheduling informations in `tracked_files.json` to note, which will change lots of your note file in the same time.\n Please make sure the setting tags of flashcards and notes is what you are using.",
    DATA_LOCATION_WARNING_OTHER_ALGO:
        "if you want to save data on notefile, you **have to** use Default Algorithm.",
    DATA_LOCATION_WARNING_TO_TRACKED:
        "BE CAREFUL!!! \n if you confirm this, it will converte all your scheduling informations on note(which will be deleted in the same time) TO `tracked_files.json`.",

    POST_ISSUE_MODIFIED_PLUGIN:
        'Post an <a href="${issue_url}">issue</a> about this modified sr-plugin which has background color for settings.',

    // donation.ts
    DONATION_TEXT: "This is a hobby project. If it helps you, you can buy me a drink or bubble tea~",

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
    DATA_TAGGED_FILE_CANT_UNTRACK:
        "it is taged file, can't untrack by this. You can delete the #review tag in note file.",
    DATA_UNTRACKED_ITEMS: "Untracked ${numItems} items${nulrstr}",
    DATA_UNABLE_TO_SAVE: "Unable to save data file!",
    DATA_FOLDER_UNTRACKED:
        "In folder ${folderPath}, ${totalRemoved} files are no longer tracked for repetition",
    DATA_ADDED_REMOVED_ITEMS: "Added ${totalAdded} new items, removed ${totalRemoved} items.",
    DATA_ADDED_REMOVED_ITEMS_SHORT: "Added ${added} new items, removed ${removed} items.",
    DATA_FILE_UPDATE:
        "${filePath} update - lineNo: ${lineNo}\nAdded: ${added} new card items, removed ${removed} card items.",
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
    ALGORITHM_SWITCH_SUCCESS: "conversion completed, due to different algorithm parameters, subsequent review intervals will be adjusted",
};
