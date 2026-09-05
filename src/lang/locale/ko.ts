// 한국어

export default {
    // flashcard-modal.tsx
    DECKS: "덱",
    DUE_CARDS: "다시 볼 카드들",
    NEW_CARDS: "새로운 카드들",
    TOTAL_CARDS: "전체 카드들",
    BACK: "Back",
    SKIP: "Skip",
    EDIT_CARD: "Edit Card",
    RESET_CARD_PROGRESS: "카드의 진행상황을 초기화합니다.",
    RESET: "Reset",
    HARD: "어려움(Hard)",
    GOOD: "좋음(Good)",
    EASY: "쉬움(Easy)",
    SHOW_ANSWER: "정답 확인하기",
    CARD_PROGRESS_RESET: "카드의 진행상황이 초기화되었습니다.",
    SAVE: "Save",
    CANCEL: "Cancel",
    NO_INPUT: "No input provided.",
    CURRENT_EASE_HELP_TEXT: "Current Ease: ",
    CURRENT_INTERVAL_HELP_TEXT: "Current Interval: ",
    CARD_GENERATED_FROM: "Generated from: ${notePath}",
    OPEN_NOTE: "Open Note",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "리뷰할 노트 열기",
    REVIEW_CARDS: "플래시카드 리뷰",
    REVIEW_DIFFICULTY_FILE_MENU: "리뷰: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "노트를 ${difficulty}으로 리뷰합니다",
    CRAM_ALL_CARDS: "Select a deck to cram",
    REVIEW_ALL_CARDS: "모든 노트들의 플래시카드들을 리뷰합니다",
    REVIEW_CARDS_IN_NOTE: "이 노트의 플래시카드들을 리뷰합니다",
    CRAM_CARDS_IN_NOTE: "이 노트의 플래시카드들을 벼락치기합니다.",
    VIEW_STATS: "통계 확인",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR: "--리뷰: ${dueNotesCount} 노트, ${dueFlashcardsCount} 카드 남았습니다.",
    SYNC_TIME_TAKEN: "동기화에 ${t}밀리초 걸렸습니다",
    NOTE_IN_IGNORED_FOLDER: "노트가 무시된 폴더 아래에 저장되어 있습니다. (설정을 확인해주세요)",
    PLEASE_TAG_NOTE: "리뷰를 하기위해 노트에 적절히 태그해주세요. (설정을 확인해주세요)",
    RESPONSE_RECEIVED: "요청이 완료되었습니다",
    NO_DECK_EXISTS: "${deckName}이라는 이름의 덱이 존재하지 않습니다.",
    ALL_CAUGHT_UP: "모두 확인했습니다. :D",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} 일 후",
    MONTHS_STR_IVL: "${interval} 개월 후",
    YEARS_STR_IVL: "${interval} 년 후",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}y",
    HOURS_STR_IVL: "${interval}hour(s)",
    MINUTES_STR_IVL: "${interval}minute(s)",
    HOURS_STR_IVL_MOBILE: "${interval}h",
    MINUTES_STR_IVL_MOBILE: "${interval}min",

    // settings.ts
    SETTINGS_HEADER: "Spaced Repetition",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: '더 많은 정보를 원하시면, <a href="${wikiUrl}">wiki</a>를 확인해주세요.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussionsUrl}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issuesUrl}">here</a> if you have a feature request or a bug report.',
    GITHUB_ISSUES_MODIFIED_PLUGIN:
        'Raise an <a href="${issuesUrl}">issue</a> about this modified sr-plugin if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE:
        'The project\'s source code is available on <a href="${githubProjectUrl}">GitHub</a>.',
    CODE_CONTRIBUTION_INFO:
        '<a href="${codeContributionUrl}">Here\'s</a> how to contribute code to the plugin.',
    TRANSLATION_CONTRIBUTION_INFO:
        '<a href="${translationContributionUrl}">Here\'s</a> how to translate the plugin to another language.',
    FOLDERS_TO_IGNORE: "무시할 폴더들",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "플래시카드",
    FLASHCARD_EASY_LABEL: "Easy Button Text",
    FLASHCARD_GOOD_LABEL: "Good Button Text",
    FLASHCARD_HARD_LABEL: "Hard Button Text",
    FLASHCARD_EASY_DESC: 'Customize the label for the "Easy" Button',
    FLASHCARD_GOOD_DESC: 'Customize the label for the "Good" Button',
    FLASHCARD_HARD_DESC: 'Customize the label for the "Hard" Button',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "플래시카드 태그",
    FLASHCARD_TAGS_DESC:
        "태그를 공백 또는 빈 줄로 구분해서 입력해주세요. 예) '#flashcards #deck2 #deck3'",
    CONVERT_FOLDERS_TO_DECKS: "폴더를 덱과 서브덱으로 사용할까요?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "이 기능은 위의 플래시카드 태그 옵션을 대체합니다.",
    INLINE_SCHEDULING_COMMENTS:
        "플래시카드의 마지막 줄과 동일한 줄에 스케줄링 코멘트를 저장하시겠습니까?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "이 옵션을 사용하면 HTML 주석이 목록의 포매팅을 무너트리지 않습니다.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Sibling 카드를 다음날까지 묻어두시겠습니까?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Sibling 카드는 동일한 카드 텍스트에서 생성된 카드입니다. i.e. cloze deletions",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW:
        "Bury sibling cards until the next day by note review",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "카드의 문맥(context)을 표시하시겠습니까?",
    SHOW_CARD_CONTEXT_DESC:
        "카드에서 'Title > Heading 1 > Subheading > ... > Subheading' 의 표시를 할지 설정합니다.",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "플래시카드 높이 비율",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "모바일 버전 혹은 매우 큰 이미지가 있는 경우 100%로 설정해야 합니다.",
    RESET_DEFAULT: "기본값으로 초기화",
    CARD_MODAL_WIDTH_PERCENT: "플래시카드 너비 비율",
    RANDOMIZE_CARD_ORDER: "리뷰중인 카드의 순서를 랜덤으로 두시겠습니까?",
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
    DISABLE_CLOZE_CARDS: "빈 칸 채우기 카드를 비활성화하시겠습니까?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "==highlights== 를 빈 칸 채우기로 전환하시겠습니까?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        '"빈 칸 채우기 패턴" 에서 <code>${defaultPattern}</code> 를 추가/제거하시겠습니까?',
    CONVERT_BOLD_TEXT_TO_CLOZES: "**bolded text** 를 빈 칸 채우기로 전환하시겠습니까?",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        '"빈 칸 채우기 패턴" 에서 <code>${defaultPattern}</code> 를 추가/제거하시겠습니까?',
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "{{curly brackets}} 를 빈 칸 채우기로 전환하시겠습니까?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        '"빈 칸 채우기 패턴" 에서 <code>${defaultPattern}</code> 를 추가/제거하시겠습니까?',
    CLOZE_PATTERNS: "빈 칸 채우기 패턴",
    CLOZE_PATTERNS_DESC:
        '빈 칸 채우기 패턴을 입력해주세요. 줄바꿈으로 구분합니다. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "인라인 플래시카드 구분자",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "주의: 이 옵션을 수정한 후에는 이미 작성된 플래시카드를 수동으로 수정해야 함을 주의하십시오.",
    INLINE_REVERSED_CARDS_SEPARATOR: "인라인 반전 플래시카드 구분자",
    MULTILINE_CARDS_SEPARATOR: "여러 줄 플래시카드 구분자",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "여러 줄 반전 플래시카드 구분자",
    MULTILINE_CARDS_END_MARKER: "클로즈와 다중 행 플래시카드의 끝을 나타내는 문자",
    NOTES: "노트",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Enable note review pane on startup",
    TAGS_TO_REVIEW: "리뷰에 사용할 태그",
    TAGS_TO_REVIEW_DESC:
        "태그를 공백 또는 빈 줄로 구분해서 입력해주세요. 예) '#review #tag2 #tag3'",
    OPEN_RANDOM_NOTE: "리뷰를 위해 랜덤 노트를 엽니다.",
    OPEN_RANDOM_NOTE_DESC: "이 옵션이 꺼져있으면, 노트는 중요도(페이지 랭크)에 따라 정렬됩니다.",
    AUTO_NEXT_NOTE: "리뷰 후에 다음 노트를 자동으로 엽니다.",
    MAX_N_DAYS_REVIEW_QUEUE: "오른쪽 패널에 표시할 최대 일수",
    MIN_ONE_DAY: "적어도 1이상이어야 합니다.",
    VALID_NUMBER_WARNING: "유효한 숫자를 입력해주세요.",
    UI: "User Interface",
    OPEN_IN_TAB: "Open in new tab",
    OPEN_IN_TAB_DESC: "Turn this off to open the plugin in a modal window",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "파일 메뉴에서 검토 옵션을 활성화하세요 (예: 검토: 쉬움, 좋음, 어려움)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "파일 메뉴에서 검토 옵션을 비활성화하면 플러그인 명령을 사용해 노트를 검토할 수 있으며, 정의된 경우에는 관련된 단축키도 사용할 수 있습니다.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "덱 트리는 처음에 확장된 것으로 표시되어야 합니다.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "같은 카드에 중첩된 덱을 접으려면 이 옵션을 끄십시오. 같은 파일에 여러 덱에 속한 카드가 있는 경우 유용합니다.",
    ALGORITHM: "알고리즘",
    CHECK_ALGORITHM_WIKI:
        '더 많은 정보를 원하시면, <a href="${algoUrl}">algorithm details</a>을 확인해주세요.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "기본 ease",
    BASE_EASE_DESC: "최솟값 = 130, 적정치는 대략 250입니다.",
    BASE_EASE_MIN_WARNING: "기본 ease는 적어도 130 이어야 합니다.",
    LAPSE_INTERVAL_CHANGE: "플래시카드/노트를 어려움(Hard)으로 리뷰했을 때의 간격 변경",
    LAPSE_INTERVAL_CHANGE_DESC: "새로운 간격 = 이전 간격 * 간격변경 값 / 100.",
    EASY_BONUS: "쉬움(Easy) 보너스",
    EASY_BONUS_DESC:
        "쉬움(Easy) 보너스는 플래시카드/노트에서 좋음(Good)과 쉬움(Easy) 사이의 간격 차이를 설정할 수 있습니다. (최소 = 100%)",
    EASY_BONUS_MIN_WARNING: "쉬움(Easy) 보너스는 적어도 100이어야 합니다.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Maximum interval in days",
    MAX_INTERVAL_DESC: "간격의 상한선을 둘 수 있습니다. (기본값 = 100년)",
    MAX_INTERVAL_MIN_WARNING: "최대 간격은 적어도 1일이어야 합니다.",
    MAX_LINK_CONTRIB: "최대 연결 기여도",
    MAX_LINK_CONTRIB_DESC:
        "링크된 노트의 초기 ease에 대한 가중치가 적용된 ease의 최대 기여도입니다.",
    FUZZING: "Fuzzing",
    FUZZING_DESC:
        "When enabled, this adds a small random delay to the new interval time to prevent cards from sticking together and always being reviewed on the same day.",
    SWITCH_SHORT_TERM: "Switch to Short-term Scheduler",
    SWITCH_SHORT_TERM_DESC:
        "When disabled, this allow user to skip the short-term scheduler and directly switch to the long-term scheduler.",
    LOGGING: "로깅",
    DISPLAY_SCHEDULING_DEBUG_INFO: "디버깅 정보를 개발자 콘솔에 표시하시겠습니까",
    DISPLAY_PARSER_DEBUG_INFO: "Show the parser's debugging information on the developer console",
    SCHEDULING: "Scheduling",
    EXPERIMENTAL: "Experimental",
    HELP: "Help",
    STORE_IN_NOTES: "In the notes",
    DATA_LOC: "Data Location",
    DATA_LOC_DESC: "Where to store the data file for spaced repetition items.",
    DATA_FOLDER: "Folder for `tracked_files.json`",
    NEW_PER_DAY: "New Per Day",
    NEW_PER_DAY_DESC: "Maximum number of new (unreviewed) notes to add to the queue each day.",
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
    REVLOG_TAGS_DESC: "Tags for output review log, could be flashcards tags or/and notes tags",
    FLASHCARD_AGAIN_LABEL: "Again Button Text",
    FLASHCARD_BLACKOUT_LABEL: "Blackout Button Text",
    FLASHCARD_INCORRECT_LABEL: "Incorrect Button Text",
    _LABEL: "Incorrect (Easy) Button Text",
    FLASHCARD_AGAIN_DESC: 'Customize the label for the "Again" Button',
    FLASHCARD_BLACKOUT_DESC: 'Customize the label for the "Blackout" Button',
    FLASHCARD_INCORRECT_DESC: 'Customize the label for the "Incorrect" Button',
    _DESC: 'Customize the label for the "Incorrect (Easy)" Button',
    UNTRACK_WITH_REVIEWTAG: "UntrackWithReviewTag",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "리뷰할 노트 대기열",
    CLOSE: "닫기",
    NEW: "New",
    YESTERDAY: "어제",
    TODAY: "오늘",
    TOMORROW: "내일",

    // stats-modal.tsx
    STATS_TITLE: "통계",
    MONTH: "월",
    QUARTER: "분기",
    YEAR: "년",
    LIFETIME: "평생",
    FORECAST: "예측",
    FORECAST_DESC: "이후에 학습할 카드의 수",
    SCHEDULED: "Scheduled",
    DAYS: "일",
    NUMBER_OF_CARDS: "카드의 수",
    REVIEWS_PER_DAY: "평균: ${avg} 리뷰/일",
    INTERVALS: "간격",
    INTERVALS_DESC: "리뷰를 다시 할 때 까지의 기간",
    COUNT: "Count",
    INTERVALS_SUMMARY: "평균 간격: ${avg}, 가장 긴 간격: ${longest}",
    EASES: "Eases",
    EASES_SUMMARY: "Average ease: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "카드 타입",
    CARD_TYPES_DESC: "여기에는 묻어둔 카드도 포함됩니다.",
    CARD_TYPE_NEW: "New",
    CARD_TYPE_YOUNG: "Young",
    CARD_TYPE_MATURE: "Mature",
    CARD_TYPES_SUMMARY: "전체 카드 수: ${totalCardsCount}",
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
    DONATION_TEXT:
        "This is a hobby project. If it helps you, you can buy me a drink or bubble tea~",

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
    FSRS_OPTIMIZER: "FSRS Optimizer",
    FSRS_OPTIMIZER_DESC:
        "Train personalized FSRS parameters from your review history CSV file for better scheduling predictions.",
    FSRS_OPTIMIZER_UPLOAD: "Upload Review Log",
    FSRS_OPTIMIZER_UPLOAD_DESC:
        "Select a CSV file containing your review history to train optimized parameters.",
    FSRS_SELECT_CSV: "Select CSV File",
    FSRS_LOADING_FILE: "Loading file...",
    FSRS_CONVERTING_DATA: "Converting data...",
    FSRS_TRAINING_PROGRESS: "Training: ${current}%",
    FSRS_TRAINING_COMPLETE: "Training complete!",
    FSRS_TRAINING_ERROR: "Training error",
    FSRS_OPTIMIZED_PARAMS: "Optimized Parameters",
    FSRS_OLD_VALUE: "Old Value",
    FSRS_NEW_VALUE: "New Value",
    FSRS_CHANGE: "Change",
    FSRS_APPLY_PARAMS: "Apply Parameters",
    FSRS_COPY_PARAMS: "Copy Parameters",
    FSRS_PARAMS_APPLIED: "Parameters applied successfully!",
    FSRS_PARAMS_COPIED: "Parameters copied to clipboard!",
    FSRS_TRAINING_FAILED: "Training failed",
    FSRS_BINDING_LOAD_ERROR: "Failed to load FSRS optimization module",
    FSRS_CSV_PARSE_ERROR: "Failed to parse CSV file",
    FSRS_NO_VALID_ITEMS: "No valid review items found in the data",
    FSRS_LOW_REVIEW_COUNT_WARNING:
        "Warning: Only ${count} valid reviews found. More reviews will produce better results.",
    FSRS_PLUGIN_BASE_PATH_NOT_SET:
        "Plugin base path not set. Please restart Obsidian and try again.",
};
