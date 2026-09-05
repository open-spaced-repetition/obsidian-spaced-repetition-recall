// Türkçe

export default {
    // flashcard-modal.tsx
    DECKS: "Desteler",
    DUE_CARDS: "Güncel Kartlar",
    NEW_CARDS: "Yeni Kartlar",
    TOTAL_CARDS: "Toplam Kartlar",
    BACK: "Geri",
    SKIP: "Atla",
    EDIT_CARD: "Kartı Düzenle",
    RESET_CARD_PROGRESS: "Kartın ilerlemesini sıfırla",
    RESET: "Reset",
    HARD: "Zor",
    GOOD: "Orta",
    EASY: "Kolay",
    SHOW_ANSWER: "Cevabı Göster",
    CARD_PROGRESS_RESET: "Kartın ilerlemesi sıfırlandı.",
    SAVE: "Kaydet",
    CANCEL: "İptal",
    NO_INPUT: "Girdi sağlanmadı.",
    CURRENT_EASE_HELP_TEXT: "Mevcut Kolaylık: ",
    CURRENT_INTERVAL_HELP_TEXT: "Mevcut Aralık: ",
    CARD_GENERATED_FROM: "${notePath} kaynağından oluşturuldu.",
    OPEN_NOTE: "Open Note",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Gözden geçirmek için bir not aç",
    REVIEW_CARDS: "Flash kartları gözden geçir",
    REVIEW_DIFFICULTY_FILE_MENU: "Gözden Geçir: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "Notu ${difficulty} derecesiyle gözden geçir",
    CRAM_ALL_CARDS: "Tüm destelerden yoğun tekrar yap",
    REVIEW_ALL_CARDS: "Tüm notlardaki flash kartları gözden geçir",
    REVIEW_CARDS_IN_NOTE: "Bu nottaki flash kartları gözden geçir",
    CRAM_CARDS_IN_NOTE: "Bu nottaki flash kartları yoğun tekrar yap",
    VIEW_STATS: "İstatistikleri görüntüle",
    OPEN_REVIEW_QUEUE_VIEW: "Kenar çubuğunda Not Gözden Geçirme Sırasını aç",
    STATUS_BAR: "Gözden Geçir: ${dueNotesCount} not, ${dueFlashcardsCount} kart güncel",
    SYNC_TIME_TAKEN: "Senkronizasyon ${t}ms sürdü",
    NOTE_IN_IGNORED_FOLDER: "Not, dışlanan klasörde kayıtlı (ayarları kontrol edin).",
    PLEASE_TAG_NOTE: "Lütfen gözden geçirmek için notu uygun şekilde etiketleyin (ayarlar içinde).",
    RESPONSE_RECEIVED: "Yanıt alındı.",
    NO_DECK_EXISTS: "${deckName} adında bir deste yok",
    ALL_CAUGHT_UP: "🏆 Şampiyon gibi bitirdin! 😄",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} gün",
    MONTHS_STR_IVL: "${interval} ay",
    YEARS_STR_IVL: "${interval} yıl",
    DAYS_STR_IVL_MOBILE: "${interval}g",
    MONTHS_STR_IVL_MOBILE: "${interval}a",
    YEARS_STR_IVL_MOBILE: "${interval}y",
    HOURS_STR_IVL: "${interval}hour(s)",
    MINUTES_STR_IVL: "${interval}minute(s)",
    HOURS_STR_IVL_MOBILE: "${interval}h",
    MINUTES_STR_IVL_MOBILE: "${interval}min",

    // settings.ts
    SETTINGS_HEADER: "Aralıklı Tekrar",
    GROUP_TAGS_FOLDERS: "Etiketler ve Klasörler",
    GROUP_FLASHCARD_REVIEW: "Flash Kartları Gözden Geçirme",
    GROUP_FLASHCARD_SEPARATORS: "Flash Kart Ayırıcıları",
    GROUP_DATA_STORAGE: "Planlama Verilerinin Saklanması",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flash Kartlar ve Notlar",
    GROUP_CONTRIBUTING: "Katkıda Bulunma",
    CHECK_WIKI: 'Daha fazla bilgi için <a href="${wikiUrl}">wiki</a> sayfasına göz atın.',
    GITHUB_DISCUSSIONS:
        'Soru-cevap, geri bildirim ve genel tartışmalar için <a href="${discussionsUrl}">tartışmalar</a> bölümüne göz atın.',
    GITHUB_ISSUES:
        'Bir özellik isteğiniz ya da hata bildiriminiz varsa <a href="${issuesUrl}">buradan</a> bildirin.',
    GITHUB_ISSUES_MODIFIED_PLUGIN:
        'Raise an <a href="${issuesUrl}">issue</a> about this modified sr-plugin if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE:
        'Proje kaynak koduna <a href="${githubProjectUrl}">GitHub</a> üzerinden ulaşabilirsiniz.',
    CODE_CONTRIBUTION_INFO:
        '<a href="${codeContributionUrl}">Kod katkıları</a> hakkında bilgi alın.',
    TRANSLATION_CONTRIBUTION_INFO:
        'Eklentiyi kendi dilinize çevirmek hakkında bilgi için <a href="${translationContributionUrl}">çeviri katkıları</a> sayfasını ziyaret edin.',
    FOLDERS_TO_IGNORE: "Yoksayılan Klasörler",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Flash Kartlar",
    FLASHCARD_EASY_LABEL: "Kolay Butonu Metni",
    FLASHCARD_GOOD_LABEL: "Orta Butonu Metni",
    FLASHCARD_HARD_LABEL: "Zor Butonu Metni",
    FLASHCARD_EASY_DESC: '"Kolay" butonunun metnini özelleştirin',
    FLASHCARD_GOOD_DESC: '"Orta" butonunun metnini özelleştirin',
    FLASHCARD_HARD_DESC: '"Zor" butonunun metnini özelleştirin',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "Flash Kart Etiketleri",
    FLASHCARD_TAGS_DESC:
        "Etiketleri boşluklar veya yeni satırlarla ayırarak girin, örneğin: #flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "Klasörleri destelere ve alt destelere dönüştür?",
    CONVERT_FOLDERS_TO_DECKS_DESC:
        "Bu, yukarıdaki Flash Kart etiketleri seçeneğine bir alternatiftir.",
    INLINE_SCHEDULING_COMMENTS: "Planlama yorumunu flash kartın son satırıyla aynı satıra kaydet?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Bunu açmak, HTML yorumlarının liste biçimlendirmesini bozmamasını sağlar.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Kardeş kartları bir sonraki güne kadar gizle?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Kardeş kartlar, aynı kart metninden üretilen kartlardır (örneğin gizlemeler).",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW:
        "Bury sibling cards until the next day by note review",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "Kartlarda bağlamı göster?",
    SHOW_CARD_CONTEXT_DESC: "Örneğin: Başlık > Başlık 1 > Alt Başlık > ... > Alt Başlık",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Flash Kart Yükseklik Yüzdesi",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Mobilde veya çok büyük resimleriniz varsa %100 olarak ayarlayın.",
    RESET_DEFAULT: "Varsayılana sıfırla",
    CARD_MODAL_WIDTH_PERCENT: "Flash Kart Genişlik Yüzdesi",
    RANDOMIZE_CARD_ORDER: "İnceleme sırasında kart sırasını rastgele yap?",
    REVIEW_CARD_ORDER_WITHIN_DECK: "İnceleme sırasında bir destede kartların görüntülenme sırası",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "Sıralı olarak (önce tüm yeni kartlar)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL: "Sıralı olarak (önce tüm güncel kartlar)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "Rastgele olarak (önce tüm yeni kartlar)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "Rastgele olarak (önce tüm güncel kartlar)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "Rastgele desteden rastgele kart",
    REVIEW_DECK_ORDER: "İnceleme sırasında destelerin görüntülenme sırası",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL:
        "Sıralı olarak (Önceki destedeki tüm kartlar gözden geçirildikten sonra)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM:
        "Rastgele olarak (Önceki destedeki tüm kartlar gözden geçirildikten sonra)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "Rastgele desteden rastgele kart",
    DISABLE_CLOZE_CARDS: "Gizli kartları devre dışı bırak?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "==Vurgulanan== metni gizli kartlara dönüştür?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        '"Cloze Patterns"den <code>${defaultPattern</code> öğesini ekleyin/kaldırın',
    CONVERT_BOLD_TEXT_TO_CLOZES: "**Kalın metni** gizli kartlara dönüştür?",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        '"Cloze Patterns"den <code>${defaultPattern</code> öğesini ekleyin/kaldırın',
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "{{Kıvırcık parantezleri}} gizli kartlara dönüştür?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        '"Cloze Patterns"den <code>${defaultPattern</code> öğesini ekleyin/kaldırın',
    CLOZE_PATTERNS: "Cloze Patterns",
    CLOZE_PATTERNS_DESC:
        'Enter cloze patterns separated by newlines. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "Satır içi flash kartlar için ayırıcı",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Bunu değiştirdikten sonra mevcut flash kartlarınızı manuel olarak düzenlemeniz gerektiğini unutmayın.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Satır içi ters flash kartlar için ayırıcı",
    MULTILINE_CARDS_SEPARATOR: "Çok satırlı flash kartlar için ayırıcı",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Çok satırlı ters flash kartlar için ayırıcı",
    MULTILINE_CARDS_END_MARKER:
        "Gizli kartlar ve çok satırlı flash kartların sonunu belirten karakterler",
    NOTES: "Notlar",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Başlangıçta not inceleme panelini etkinleştir",
    TAGS_TO_REVIEW: "Gözden geçirilecek etiketler",
    TAGS_TO_REVIEW_DESC:
        "Etiketleri boşluklar veya yeni satırlarla ayırarak girin, örneğin: #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Gözden geçirmek için rastgele bir not aç",
    OPEN_RANDOM_NOTE_DESC: "Bunu kapattığınızda, notlar önem sırasına göre sıralanır (PageRank).",
    AUTO_NEXT_NOTE: "Bir incelemeden sonra otomatik olarak bir sonraki notu aç",
    MAX_N_DAYS_REVIEW_QUEUE: "Sağ panelde gösterilecek maksimum gün sayısı",
    MIN_ONE_DAY: "Gün sayısı en az 1 olmalıdır.",
    VALID_NUMBER_WARNING: "Lütfen geçerli bir sayı girin.",
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
    INITIALLY_EXPAND_SUBDECKS_IN_TREE:
        "Deste ağaçları başlangıçta genişletilmiş olarak gösterilmeli mi",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Bunu kapatın, aynı dosyada birçok desteye ait kartlarınız varsa iç içe desteleri daraltmak için kullanışlıdır.",
    ALGORITHM: "Algoritma",
    CHECK_ALGORITHM_WIKI:
        'Daha fazla bilgi için <a href="${algoUrl}">algoritma uygulamasına</a> göz atın.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Temel kolaylık",
    BASE_EASE_DESC: "minimum = 130, tercihen yaklaşık 250.",
    BASE_EASE_MIN_WARNING: "Temel kolaylık en az 130 olmalıdır.",
    LAPSE_INTERVAL_CHANGE: "Bir flash kartı/notu zor olarak incelediğinizde aralık değişikliği",
    LAPSE_INTERVAL_CHANGE_DESC: "yeniAralık = eskiAralık * aralıkDeğişikliği / 100.",
    EASY_BONUS: "Kolaylık Bonusu",
    EASY_BONUS_DESC:
        "Kolaylık bonusu, bir flash kartı/notu İyi ve Kolay yanıtladığınızda aralıklardaki farkı ayarlamanıza olanak tanır (minimum = %100).",
    EASY_BONUS_MIN_WARNING: "Kolaylık bonusu en az %100 olmalıdır.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Maksimum aralık (gün)",
    MAX_INTERVAL_DESC: "Aralığa bir üst sınır koymanıza olanak tanır (varsayılan = 100 yıl).",
    MAX_INTERVAL_MIN_WARNING: "Maksimum aralık en az 1 gün olmalıdır.",
    MAX_LINK_CONTRIB: "Maksimum bağlantı katkısı",
    MAX_LINK_CONTRIB_DESC:
        "Bağlantılı notların ağırlıklı kolaylık değerinin başlangıç kolaylığına maksimum katkısı.",
    FUZZING: "Fuzzing",
    FUZZING_DESC:
        "When enabled, this adds a small random delay to the new interval time to prevent cards from sticking together and always being reviewed on the same day.",
    SWITCH_SHORT_TERM: "Switch to Short-term Scheduler",
    SWITCH_SHORT_TERM_DESC:
        "When disabled, this allow user to skip the short-term scheduler and directly switch to the long-term scheduler.",
    LOGGING: "Kayıt tutma",
    DISPLAY_SCHEDULING_DEBUG_INFO: "Geliştirici konsolunda hata ayıklama bilgilerini göster",
    DISPLAY_PARSER_DEBUG_INFO:
        "Ayrıştırıcı için hata ayıklama bilgilerini geliştirici konsolunda göster",
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
    _LABEL: "Incorrect (Easy) Button Text",
    FLASHCARD_AGAIN_DESC: 'Customize the label for the "Again" Button',
    FLASHCARD_BLACKOUT_DESC: 'Customize the label for the "Blackout" Button',
    FLASHCARD_INCORRECT_DESC: 'Customize the label for the "Incorrect" Button',
    _DESC: 'Customize the label for the "Incorrect (Easy)" Button',
    UNTRACK_WITH_REVIEWTAG: "UntrackWithReviewTag",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Not İnceleme Sırası",
    CLOSE: "Kapat",
    NEW: "Yeni",
    YESTERDAY: "Dün",
    TODAY: "Bugün",
    TOMORROW: "Yarın",

    // stats-modal.tsx
    STATS_TITLE: "İstatistikler",
    MONTH: "Ay",
    QUARTER: "Çeyrek",
    YEAR: "Yıl",
    LIFETIME: "Ömür Boyu",
    FORECAST: "Tahmin",
    FORECAST_DESC: "Gelecekte incelemeye alınacak kartların sayısı",
    SCHEDULED: "Planlanmış",
    DAYS: "Günler",
    NUMBER_OF_CARDS: "Kart Sayısı",
    REVIEWS_PER_DAY: "Ortalama: ${avg} inceleme/gün",
    INTERVALS: "Aralıklar",
    INTERVALS_DESC: "İncelemelerin tekrar gösterilme gecikmeleri",
    COUNT: "Sayı",
    INTERVALS_SUMMARY: "Ortalama aralık: ${avg}, En uzun aralık: ${longest}",
    EASES: "Kolaylıklar",
    EASES_SUMMARY: "Ortalama kolaylık: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Kart Türleri",
    CARD_TYPES_DESC: "Bu, gömülü kartları da içerir (varsa)",
    CARD_TYPE_NEW: "Yeni",
    CARD_TYPE_YOUNG: "Genç",
    CARD_TYPE_MATURE: "Olgun",
    CARD_TYPES_SUMMARY: "Toplam kart: ${totalCardsCount}",
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
