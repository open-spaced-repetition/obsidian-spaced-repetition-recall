// Italiano

export default {
    // flashcard-modal.tsx
    DECKS: "Mazzi",
    DUE_CARDS: "Schede da fare",
    NEW_CARDS: "Schede nuove",
    TOTAL_CARDS: "Schede totali",
    BACK: "Indietro",
    SKIP: "Salta",
    EDIT_CARD: "Modifica scheda",
    RESET_CARD_PROGRESS: "Ripristina i progressi della scheda",
    RESET: "Reset",
    HARD: "Difficile",
    GOOD: "Buono",
    EASY: "Facile",
    SHOW_ANSWER: "Mostra risposta",
    CARD_PROGRESS_RESET: "I progressi della scheda sono stati ripristinati",
    SAVE: "Salva",
    CANCEL: "Cancella",
    NO_INPUT: "Non è stato provvisto alcun input",
    CURRENT_EASE_HELP_TEXT: "Difficoltà attuale: ",
    CURRENT_INTERVAL_HELP_TEXT: "Intervallo attuale: ",
    CARD_GENERATED_FROM: "Generato da: ${notePath}",
    OPEN_NOTE: "Open Note",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Apri una nota per rivisita",
    REVIEW_CARDS: "Rivisita schede",
    REVIEW_DIFFICULTY_FILE_MENU: "Rivisita: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "Revisita note come ${difficulty}",
    CRAM_ALL_CARDS: "Seleziona un mazzo da memorizzare",
    REVIEW_ALL_CARDS: "Seleziona schede da rivedere",
    REVIEW_CARDS_IN_NOTE: "Rivedi schede in questa nota",
    CRAM_CARDS_IN_NOTE: "Memorizza schede in questa nota",
    VIEW_STATS: "Vedi statistiche",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR: "Da rivedere: ${dueNotesCount} scheda/e, ${dueFlashcardsCount} schede in ritardo",
    SYNC_TIME_TAKEN: "Sincronizzato in ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "La nota è salvata in una cartella ignorata (rivedi le impostazioni).",
    PLEASE_TAG_NOTE:
        "Per favore etichetta la nota appropriatamente per la revisione (nelle impostazioni).",
    RESPONSE_RECEIVED: "Risposta ricevuta.",
    NO_DECK_EXISTS: "Non esistono mazzi per ${deckName}",
    ALL_CAUGHT_UP: "Sei al passo! :D.",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} giorno/i",
    MONTHS_STR_IVL: "${interval} mese/i",
    YEARS_STR_IVL: "${interval} anno/i",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}y",
    HOURS_STR_IVL: "${interval}hour(s)",
    MINUTES_STR_IVL: "${interval}minute(s)",
    HOURS_STR_IVL_MOBILE: "${interval}h",
    MINUTES_STR_IVL_MOBILE: "${interval}min",

    // settings.ts
    SETTINGS_HEADER: "Plugin per ripetizione spaziata",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: 'Per maggiori informazioni, rivolgersi alla <a href="${wikiUrl}">wiki</a>.',
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
    FOLDERS_TO_IGNORE: "Cartelle da ignorare",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Schede",
    FLASHCARD_EASY_LABEL: "Testo del bottone facile",
    FLASHCARD_GOOD_LABEL: "Testo del bottone buono",
    FLASHCARD_HARD_LABEL: "Testo del bottone difficile",
    FLASHCARD_EASY_DESC: 'Personalizza il testo per il pulsante "Facile"',
    FLASHCARD_GOOD_DESC: 'Personalizza il testo per il pulsante "Buono"',
    FLASHCARD_HARD_DESC: 'Personalizza il testo per il pulsante "Difficile"',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "Etichette delle schede",
    FLASHCARD_TAGS_DESC:
        "Inserire etichette separate da spazi o a capi, per esempio #flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "Trasformare cartelle in mazzi e sotto-mazzi?",
    CONVERT_FOLDERS_TO_DECKS_DESC:
        "Questa è un'alternativa all'opzione delle etichette delle schede sopra.",
    INLINE_SCHEDULING_COMMENTS:
        "Salvare il commento per l'orario sulla stessa linea dell'ultimna linea della scheda?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Attivando quest'impostazione farò sì che i commento HTML non rompino la formattazione delle liste.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Sotterrare schede sorelle fino al giorno dopo?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Le schede sorelle sono schede generate dallo stesso testo della scheda, per esempio i.e. cloze deletions",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW:
        "Bury sibling cards until the next day by note review",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "Mostrare contesto nelle schede?",
    SHOW_CARD_CONTEXT_DESC:
        "per esempio, Titolo > Intestazione 1 > Sottotitolo 1 > ... > Sottotitolo",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Percentuale altezza schede",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Dovrebbe essere 100% se sei su telefono o se hai immagini molto grandi",
    RESET_DEFAULT: "Reimposta alle impostazioni iniziali",
    CARD_MODAL_WIDTH_PERCENT: "Percentuale di larghezza delle schede",
    RANDOMIZE_CARD_ORDER: "Rendere casuale l'ordine delle schede durante la revisione?",
    REVIEW_CARD_ORDER_WITHIN_DECK:
        "L'ordine in cui le schede saranno visualizzate all'interno del mazzo",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "Sequenzialmente dentro il mazzo (prima schede nuove)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL:
        "Sequenzialmente dentro il mazzo (prima schede in ritardo)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "A caso dentro il mazzo (prima schede nuove)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "A caso dentro il mazzo (prima schede in ritardo)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "Scheda a caso da mazzo a caso",
    REVIEW_DECK_ORDER: "L'ordine in cui i mazzi vengono mostrati durante la revisione",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL:
        "Sequenzialmente (quando le schede nel mazzo precedente saranno state riviste)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM:
        "A caso (quando le schede nel mazzo precedente saranno state riviste)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "Scheda a caso da mazzo a caso",
    DISABLE_CLOZE_CARDS: "Disabilita schede con spazi da riempire?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Convertire ==testo evidenziato== in spazi da riempire?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        'Aggiungi/rimuovi <code>${defaultPattern}</code> dai tuoi "Modelli per spazi da riempire"',
    CONVERT_BOLD_TEXT_TO_CLOZES: "Convertire **testo in grassetto** in spazi da riempire",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        'Aggiungi/rimuovi <code>${defaultPattern}</code> dai tuoi "Modelli per spazi da riempire"',
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "Convertire {{parentesi graffe}} in spazi da riempire?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        'Aggiungi/rimuovi <code>${defaultPattern}</code> dai tuoi "Modelli per spazi da riempire"',
    CLOZE_PATTERNS: "Modelli di spazi da riempire",
    CLOZE_PATTERNS_DESC: "Inserisci i modelli di spazi da riempire separati da a capo",
    INLINE_CARDS_SEPARATOR: "Separatore per schede sulla stessa riga",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Si avvisa che dopo aver cambiato questo dovrai manualmente modificare le schede che hai già.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Separatore per schede all'incontrario sulla stessa riga",
    MULTILINE_CARDS_SEPARATOR: "Separatore per schede su più righe",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Separatore per schede all'incontrario su più righe",
    MULTILINE_CARDS_END_MARKER:
        "Caratteri che denotano la fine di carte con spazi da riempiere e carte multilinea",
    NOTES: "Note",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Abilita il pannello di revisione note all'avvio",
    TAGS_TO_REVIEW: "Etichette da rivedere",
    TAGS_TO_REVIEW_DESC:
        "Inserisci le etichette separate da spazi o a capi, tipo #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Apri una nota a caso per revisione",
    OPEN_RANDOM_NOTE_DESC:
        "Quando lo disabiliti, le note saranno ordinate per importanza (PageRank).",
    AUTO_NEXT_NOTE: "Apri la prossima nota automaticamente dopo la revisione",
    MAX_N_DAYS_REVIEW_QUEUE: "Numero di giorni massimi da visualizzare nel pannello di destra",
    MIN_ONE_DAY: "Il numero di giorni deve essere almeno 1.",
    VALID_NUMBER_WARNING: "Per favore, mettere un numero valido.",
    UI: "User Interface",
    OPEN_IN_TAB: "Open in new tab",
    OPEN_IN_TAB_DESC: "Turn this off to open the plugin in a modal window",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "Abilita le opzioni di revisione nel menu File (es.: Rivisita: Facile, Buono, Difficile)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Se disabiliti le opzioni di revisione nel menu File, puoi rivedere le tue note utilizzando i comandi del plugin e, se li hai definiti, le scorciatoie da tastiera associate.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE:
        "Alberti di mazzi dovrebbero essere inizialmente visualizzate come espansi",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Disabilitami per collassare mazzi annidati nella stessa scheda. Utile se hai schede che appartengono a più mazzi nello stesso file.",
    ALGORITHM: "Algoritmo",
    CHECK_ALGORITHM_WIKI:
        "Per maggiori informazioni, visita <a href='${algoUrl}'>l'implementazione dell'algoritmo</a>.",
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Difficoltà base",
    BASE_EASE_DESC: "mino = 130, preferibilmente circa 250.",
    BASE_EASE_MIN_WARNING: "La difficoltà base deve essere di almeno 130.",
    LAPSE_INTERVAL_CHANGE: "L'intervallo cambierà segnando una scheda / nota come difficile",
    LAPSE_INTERVAL_CHANGE_DESC: "Intervallo nuovo = intervallo vecchio * cambio intervallo / 100.",
    EASY_BONUS: "Bonus facilità",
    EASY_BONUS_DESC:
        "Il bonus facilità ti permette di impostare le differenze negli intervalli tra il rispondere Buono e Facile su una scheda o nota (minimo 100%).",
    EASY_BONUS_MIN_WARNING: "Il bonus facilità deve essere di almeno 100.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Intervallo massimo in giorni",
    MAX_INTERVAL_DESC:
        "Ti permette di mettere un limite massimo all'intervallo (default 100 anni).",
    MAX_INTERVAL_MIN_WARNING: "L'intervallo massimo deve essere di almeno 1 giorno.",
    MAX_LINK_CONTRIB: "Contributo massimo delle note collegate",
    MAX_LINK_CONTRIB_DESC:
        "Contributo massimo della difficoltà pasata delle note collegate alla difficoltà iniziale.",
    FUZZING: "Fuzzing",
    FUZZING_DESC:
        "When enabled, this adds a small random delay to the new interval time to prevent cards from sticking together and always being reviewed on the same day.",
    SWITCH_SHORT_TERM: "Switch to Short-term Scheduler",
    SWITCH_SHORT_TERM_DESC:
        "When disabled, this allow user to skip the short-term scheduler and directly switch to the long-term scheduler.",
    LOGGING: "Registrando",
    DISPLAY_SCHEDULING_DEBUG_INFO:
        "Visualizza informazione di debug sulla console per sviluppatori",
    DISPLAY_PARSER_DEBUG_INFO:
        "Visualizza informazione di debug riguardanti il parser sulla console per sviluppatori",
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
    NOTES_REVIEW_QUEUE: "Coda di note da rivedere",
    CLOSE: "Chiusi",
    NEW: "Nuovo/a",
    YESTERDAY: "Ieri",
    TODAY: "Oggi",
    TOMORROW: "Domani",

    // stats-modal.tsx
    STATS_TITLE: "Statistiche",
    MONTH: "Mese",
    QUARTER: "Trimestre",
    YEAR: "Anno",
    LIFETIME: "Per tutta la vita",
    FORECAST: "Previsione",
    FORECAST_DESC: "Il numero di schede che saranno in ritardo in futuro",
    SCHEDULED: "Programmate",
    DAYS: "Giorni",
    NUMBER_OF_CARDS: "Numero di schede",
    REVIEWS_PER_DAY: "Media: ${avg} revisioni/giorno",
    INTERVALS: "Intervalli",
    INTERVALS_DESC: "Ritardi finché le revisioni saranno visualizzate di nuovo",
    COUNT: "Conta",
    INTERVALS_SUMMARY: "Intervallo medio: ${avg}, Intervallo massimo: ${longest}",
    EASES: "Difficoltà",
    EASES_SUMMARY: "Difficoltà media: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Tipi di schede",
    CARD_TYPES_DESC: "Include eventuali schede sepolte",
    CARD_TYPE_NEW: "Nuove",
    CARD_TYPE_YOUNG: "Giovani",
    CARD_TYPE_MATURE: "Mature",
    CARD_TYPES_SUMMARY: "Schede tottali: ${totalCardsCount}",
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
