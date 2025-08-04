// Deutsch

// Obsidian specific names (folder, note, tag, etc.) are consistent with the german translation:
// https://github.com/obsidianmd/obsidian-translations/blob/master/de.json

export default {
    // flashcard-modal.tsx
    DECKS: "Stapel",
    DUE_CARDS: "Anstehende Karten",
    NEW_CARDS: "Neue Karten",
    TOTAL_CARDS: "Alle Karten",
    BACK: "Zurück",
    SKIP: "Überspringen",
    EDIT_CARD: "Karte bearbeiten",
    RESET_CARD_PROGRESS: "Kartenfortschritt zurücksetzten",
    RESET: "Reset",
    HARD: "Schwer",
    GOOD: "Gut",
    EASY: "Einfach",
    SHOW_ANSWER: "Zeige Antwort",
    CARD_PROGRESS_RESET: "Kartenfortschritt wurde zurückgesetzt.",
    SAVE: "Speichern",
    CANCEL: "Abbrechen",
    NO_INPUT: "Keine Eingabe erhalten.",
    CURRENT_EASE_HELP_TEXT: "Aktuelle Schwierigkeit: ",
    CURRENT_INTERVAL_HELP_TEXT: "Aktueller Intervall: ",
    CARD_GENERATED_FROM: "Erstellt von: ${notePath}",
    OPEN_NOTE: "Open Note",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Notiz zur Wiederholung öffnen",
    REVIEW_CARDS: "Lernkarten wiederholen",
    REVIEW_DIFFICULTY_FILE_MENU: "Notizen wiederholen als: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "Notizen wiederholen als: ${difficulty}",
    REVIEW_ALL_CARDS: "Alle Lernkarten wiederholen",
    CRAM_ALL_CARDS: "Wähle ein Stapel zum pauken",
    REVIEW_CARDS_IN_NOTE: "Lernkarten in dieser Notiz wiederholen",
    CRAM_CARDS_IN_NOTE: "Lernkarten in dieser Notiz pauken.",
    VIEW_STATS: "Statistiken anzeigen",
    OPEN_REVIEW_QUEUE_VIEW: "Öffne Überprüfungswarteschlage in der Seitenleiste",
    STATUS_BAR:
        "Wiederholung: ${dueNotesCount} Notiz(en), ${dueFlashcardsCount} Karte(n) anstehend",
    SYNC_TIME_TAKEN: "Synchronisierung dauerte ${t}ms",
    NOTE_IN_IGNORED_FOLDER:
        "Notiz befindet sich in einem ausgeschlossenen Ordner (siehe Einstellungen).",
    PLEASE_TAG_NOTE:
        "Bitte die Notiz für Wiederholungen entsprechend taggen (siehe Einstellungen).",
    RESPONSE_RECEIVED: "Antwort erhalten.",
    NO_DECK_EXISTS: "Kein Stapel für ${deckName} gefunden.",
    ALL_CAUGHT_UP: "Yuhu! Alles geschafft! :D.",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} Tag(e)",
    MONTHS_STR_IVL: "${interval} Monat(e)",
    YEARS_STR_IVL: "${interval} Jahr(e)",
    DAYS_STR_IVL_MOBILE: "${interval}t",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}j",
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
    CHECK_WIKI: 'Weitere Informationen gibt es im <a href="${wikiUrl}">Wiki</a> (english).',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussionsUrl}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issuesUrl}">here</a> if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE:
        'The project\'s source code is available on <a href="${githubProjectUrl}">GitHub</a>.',
    CODE_CONTRIBUTION_INFO:
        '<a href="${codeContributionUrl}">Here\'s</a> how to contribute code to the plugin.',
    TRANSLATION_CONTRIBUTION_INFO:
        '<a href="${translationContributionUrl}">Here\'s</a> how to translate the plugin to another language.',
    FOLDERS_TO_IGNORE: "Ausgeschlossene Ordner",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Lernkarten",
    FLASHCARD_EASY_LABEL: "Einfach Knopf Text",
    FLASHCARD_GOOD_LABEL: "Gut Knopf Text",
    FLASHCARD_HARD_LABEL: "Schwer Knopf Text",
    FLASHCARD_GOOD_DESC: 'Passe die Beschriftung für "Gut" Knopf an',
    FLASHCARD_EASY_DESC: 'Passe die Beschriftung für "Einfach" Knopf an',
    FLASHCARD_HARD_DESC: 'Passe die Beschriftung für "Schwer" Knopf an',
    REVIEW_BUTTON_DELAY: "Druckknopfverzögerung (ms)",
    REVIEW_BUTTON_DELAY_DESC:
        "Fügt den Überprüfungsschaltflächen („Einfach“, „Gut“, „Schwer“, „Antwort anzeigen“) eine Verzögerung hinzu, bevor sie erneut gedrückt werden können.",
    FLASHCARD_TAGS: "Lernkarten Tags",
    FLASHCARD_TAGS_DESC:
        "Mehrere Tags mit Leerzeichen oder Zeilenumbrüchen getrennt angeben. Bsp. #karte #stapel2 #stapel3.",
    CONVERT_FOLDERS_TO_DECKS: "Ordner in Stapel und Substapel umwandeln?",
    CONVERT_FOLDERS_TO_DECKS_DESC: 'Eine Alternative zur oberen "Lernkarten Tags" Option.',
    INLINE_SCHEDULING_COMMENTS:
        "Den Fortschritt in der gleichen Zeile wie die letzte Zeile einer Lernkartei speichern?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Wenn aktiviert, wird der HTML Kommentar die umgebende Liste nicht aufbrechen.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Verwandte Karten auf den nächsten Tag verlegen?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Verwandte Karten sind aus der gleichen Karte generiert worden (z.B. Lückentextkarten oder beidseitige Karten).",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "Kontext in den Karten anzeigen?",
    SHOW_CARD_CONTEXT_DESC: "Bsp. Titel > Überschrift 1 > Sektion > ... > Untersektion",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Höhe der Lernkartei in Prozent",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Auf kleinen Bildschirmen (z.B. Smartphones) oder bei sehr grossen Bildern sollte dieser Wert auf 100% gesetzt werden.",
    RESET_DEFAULT: "Standardeinstellung wiederherstellen",
    CARD_MODAL_WIDTH_PERCENT: "Breite einer Lernkarte in Prozent",
    RANDOMIZE_CARD_ORDER: "Während der Wiederhoung die Reihenfolge zufällig mischen?",
    REVIEW_CARD_ORDER_WITHIN_DECK:
        "Reihenfolge der Karten innerhalb eines Stapels während der Wiederholung",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL:
        "Sequentielle Reihenfolge innerhalb eines Stapels (Alle neuen Karten zuerst)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL:
        "Sequentielle Reihenfolge innerhalb eines Stapels (Alle fälligen Karten zuerst)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM:
        "Zufällige Reihenfolge innerhalb eines Stapels (Alle neuen Karten zuerst)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM:
        "Zufällige Reihenfolge innerhalb eines Stapels (Alle fälligen Karten zuerst)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "Zufällige Karte von zufälligem Stapel",
    REVIEW_DECK_ORDER: "Reihenfolge der Stapel während der Wiederholung",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL:
        "Sequentielle Reihenfolge (sobald alle Karten im vorherigen Stapel wiederholt wurden)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM:
        "Zufällige Reihenfolge (sobald alle Karten im vorherigen Stapel wiederholt wurden)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "Zufällige Karte von zufälligem Stapel",
    DISABLE_CLOZE_CARDS: "Lückentextkarten deaktivieren?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "==Hervorgehobenen== Text in Lückentextkarten umwandeln?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        'Füge/entferne das <code>${defaultPattern}</code> zu deinen "Lückentextmuster" hinzu',
    CONVERT_BOLD_TEXT_TO_CLOZES: "**Fettgedruckten** Text in Lückentextkarten umwandeln?",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        'Füge/entferne das <code>${defaultPattern}</code> zu deinen "Lückentextmuster" hinzu',
    CONVERT_CURLY_BRACKETS_TO_CLOZES:
        "{{Geschweifte Klammern}} Text in Lückentextkarten umwandeln?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        'Füge/entferne das <code>${defaultPattern}</code> zu deinen "Lückentextmuster" hinzu',
    CLOZE_PATTERNS: "Lückentextmuster",
    CLOZE_PATTERNS_DESC:
        'Geben Sie Lückentextmuster durch Zeilenumbrüche getrennt ein. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "Trennzeichen für einzeilige Lernkarten",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Wenn diese Einstellung geändert wird, dann müssen die entsprechenden Lernkarten manuell angepasst werden.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Trennzeichen für einzeilige beidseitige Lernkarten",
    MULTILINE_CARDS_SEPARATOR: "Trennzeichen für mehrzeilige Lernkarten",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Trennzeichen für mehrzeilige beidseitige Lernkarten",
    MULTILINE_CARDS_END_MARKER:
        "Zeichen, die das Ende von Lückentexten und mehrzeiligen Flashcards kennzeichnen",
    NOTES: "Notizen",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Öffne Überprüfungswarteschlage beim start",
    TAGS_TO_REVIEW: "Zu wiederholende Tags",
    TAGS_TO_REVIEW_DESC:
        "Mehrere Tags können mit Leerzeichen oder Zeilenumbrüchen getrennt angegeben werden. Bsp. #karte #tag1 #tag2.",
    OPEN_RANDOM_NOTE: "Zufällige Karten wiederholen",
    OPEN_RANDOM_NOTE_DESC:
        "Wenn dies deaktiviert wird, dann werden die Notizen nach Wichtigkeit wiederholt (PageRank).",
    AUTO_NEXT_NOTE: "Nach einer Wiederholung automatisch die nächste Karte öffnen",
    MAX_N_DAYS_REVIEW_QUEUE:
        "Maximale Anzahl anstehender Notizen, die im rechten Fensterbereich angezeigt werden",
    MIN_ONE_DAY: "Anzahl der Tage muss mindestens 1 sein.",
    VALID_NUMBER_WARNING: "Bitte eine gültige Zahl eingeben.",
    UI: "User Interface",
    OPEN_IN_TAB: "Öffne im neuen Tab",
    OPEN_IN_TAB_DESC: "Schalte dies aus, um die Notizen in einem Modalfenster zu öffnen",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "Aktiviere die Überprüfungsoptionen im Dateimenü (z. B. Notizen wiederholen als: Einfach, Gut, Schwer)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Wenn du die Überprüfungsoptionen im Dateimenü deaktivierst, kannst du deine Notizen mit den Plugin-Befehlen und, falls definiert, den zugehörigen Tastenkombinationen überprüfen.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE:
        "Stapelverzeichnis soll beim öffnen erweitert angezeigt werden",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Deaktivieren Sie dies, um verschachtelte Stapel in derselben Karte zu reduzieren. Nützlich, wenn Sie Karten haben, die zu vielen Stapeln in derselben Datei gehören.",
    ALGORITHM: "Algorithmus",
    CHECK_ALGORITHM_WIKI:
        'Weiterführende Informationen: <a href="${algoUrl}">Implementierung des Algorithmus</a> (english).',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Basis der Schwierigkeit",
    BASE_EASE_DESC: "Minimum ist 130. Empfohlen wird ca. 250.",
    BASE_EASE_MIN_WARNING: "Basis der Schwierigkeit muss mindestens 130 sein.",
    LAPSE_INTERVAL_CHANGE:
        "Anpassungsfaktor des Intervalls wenn eine Notiz / Karte 'Schwer' abgeschlossen wird",
    LAPSE_INTERVAL_CHANGE_DESC: "neuesIntervall = altesIntervall * anpassungsfaktor / 100.",
    EASY_BONUS: "Einfachheit-Bonus",
    EASY_BONUS_DESC:
        "Der Einfachheit-Bonus gibt an um welchen Faktor (in Prozent) das Intervall länger sein soll, wenn eine Notiz / Karte 'Einfach' statt 'Gut' abgeschlossen wird. Minimum ist 100%.",
    EASY_BONUS_MIN_WARNING: "Der Einfachheit-Bonus muss mindestens 100 sein.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Maximale Intervall in Tagen",
    MAX_INTERVAL_DESC:
        "Das maximale Intervall (in Tagen) für Wiederholungen. Standard sind 100 Jahre.",
    MAX_INTERVAL_MIN_WARNING: "Das maximale Interall muss mindestens ein Tag sein.",
    MAX_LINK_CONTRIB: "Maximaler Einfluss von Links",
    MAX_LINK_CONTRIB_DESC:
        "Maximaler Einfluss der Einfachheiten verlinkter Notizen zur gewichteten initialen Einfachheit einer neuen Lernkarte.",
    FUZZING: "Fuzzing",
    FUZZING_DESC:
        "When enabled, this adds a small random delay to the new interval time to prevent cards from sticking together and always being reviewed on the same day.",
    SWITCH_SHORT_TERM: "Switch to Short-term Scheduler",
    SWITCH_SHORT_TERM_DESC:
        "When disabled, this allow user to skip the short-term scheduler and directly switch to the long-term scheduler.",
    LOGGING: "Protokollierung",
    DISPLAY_SCHEDULING_DEBUG_INFO: "Informationen zum Debugging in der Entwicklerkonsole anzeigen",
    DISPLAY_PARSER_DEBUG_INFO:
        "Informationen zum parser Debugging in der Entwicklerkonsole anzeigen",
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
    "FLASHCARD_INCORRECT (EASY)_LABEL": "Incorrect (Easy) Button Text",
    FLASHCARD_AGAIN_DESC: 'Customize the label for the "Again" Button',
    FLASHCARD_BLACKOUT_DESC: 'Customize the label for the "Blackout" Button',
    FLASHCARD_INCORRECT_DESC: 'Customize the label for the "Incorrect" Button',
    "FLASHCARD_INCORRECT (EASY)_DESC": 'Customize the label for the "Incorrect (Easy)" Button',
    UNTRACK_WITH_REVIEWTAG: "UntrackWithReviewTag",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Anstehende Notizen zur Wiederholung",
    CLOSE: "Schliessen",
    NEW: "Neu",
    YESTERDAY: "Gestern",
    TODAY: "Heute",
    TOMORROW: "Morgen",

    // stats-modal.tsx
    STATS_TITLE: "Statistiken",
    MONTH: "Monat",
    QUARTER: "Quartal",
    YEAR: "Jahr",
    LIFETIME: "Lebenslang",
    FORECAST: "Prognose",
    FORECAST_DESC: "Anzahl der künftig anstehenden Karten",
    SCHEDULED: "Anstehend",
    DAYS: "Tage",
    NUMBER_OF_CARDS: "Anzahl der Karten",
    REVIEWS_PER_DAY: "Durchschnitt: ${avg} Wiederholungen/Tag",
    INTERVALS: "Intervalle",
    INTERVALS_DESC: "Intervalle bis Wiederholungen anstehen",
    COUNT: "Anzahl",
    INTERVALS_SUMMARY: "Durchschnittliches Intervall: ${avg}, Längstes Intervall: ${longest}",
    EASES: "Schwierigkeit",
    EASES_SUMMARY: "Durchschnittliche Schwierigkeit: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Kategorisierung",
    CARD_TYPES_DESC: "Verlegte Karten eingeschlossen",
    CARD_TYPE_NEW: "Neu",
    CARD_TYPE_YOUNG: "Jung",
    CARD_TYPE_MATURE: "Ausgereift",
    CARD_TYPES_SUMMARY: "Insgesamt ${totalCardsCount} Karten",
    SEARCH: "Search",
    PREVIOUS: "Previous",
    NEXT: "Next",
    REVIEWED_TODAY: "Reviewed today",
    REVIEWED_TODAY_DESC: "counts of cards/notes you have reviewed today",
    NEW_LEARNED: "New Learned",
    DUE_REVIEWED: "due Reviewed",
    REVIEWED_TODAY_SUMMARY: "Total Reviewed today: ${totalreviewedCount}",
    DATE: "Date",
};
