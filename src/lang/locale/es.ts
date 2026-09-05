// Spanish - Español.

export default {
    // flashcard-modal.tsx
    DECKS: "Mazos",
    DUE_CARDS: "Tarjetas Vencidas",
    NEW_CARDS: "Tarjetas Nuevas",
    TOTAL_CARDS: "Tarjetas Totales",
    BACK: "Atrás",
    SKIP: "Saltar",
    EDIT_CARD: "Editar Tarjeta",
    RESET_CARD_PROGRESS: "Reiniciar progreso de la tarjeta",
    RESET: "Reset",
    HARD: "Difícil",
    GOOD: "Bien",
    EASY: "Fácil",
    SHOW_ANSWER: "Mostrar Respuesta",
    CARD_PROGRESS_RESET: "El progreso de la tarjeta se ha reiniciado.",
    SAVE: "Guardar",
    CANCEL: "Cancelar",
    NO_INPUT: "Se ha proveído entrada.",
    CURRENT_EASE_HELP_TEXT: "Facilidad Actual: ",
    CURRENT_INTERVAL_HELP_TEXT: "Intervalo Actual: ",
    CARD_GENERATED_FROM: "Generado Desde: ${notePath}",
    OPEN_NOTE: "Open Note",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Abrir nota para revisión",
    REVIEW_CARDS: "Revisar Tarjetas",
    REVIEW_DIFFICULTY_FILE_MENU: "Revisar: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "Revisar nota como ${difficulty}",
    CRAM_ALL_CARDS: "Selecciona un mazo a memorizar",
    REVIEW_ALL_CARDS: "Revisar tarjetas de todas las notas",
    REVIEW_CARDS_IN_NOTE: "Revisar tarjetas en esta nota",
    CRAM_CARDS_IN_NOTE: "Memorizar tarjetas en esta nota",
    VIEW_STATS: "Ver estadísticas",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR: "Revisar: ${dueNotesCount} nota(s), ${dueFlashcardsCount} tarjetas vencidas",
    SYNC_TIME_TAKEN: "La sincronización tomó ${t} milisegundos",
    NOTE_IN_IGNORED_FOLDER: "La nota está guardada en un directorio ignorado (revisa los ajustes).",
    PLEASE_TAG_NOTE: "Por favor etiquete apropiadamente la nota para revisión (en los ajustes).",
    RESPONSE_RECEIVED: "Respuesta Recibida",
    NO_DECK_EXISTS: "No existen mazos para: ${deckName}",
    ALL_CAUGHT_UP: "¡Estás al día! 😃",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} día(s)",
    MONTHS_STR_IVL: "${interval} mes(es)",
    YEARS_STR_IVL: "${interval} año(s)",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}a",
    HOURS_STR_IVL: "${interval}hour(s)",
    MINUTES_STR_IVL: "${interval}minute(s)",
    HOURS_STR_IVL_MOBILE: "${interval}h",
    MINUTES_STR_IVL_MOBILE: "${interval}min",

    // settings.ts
    SETTINGS_HEADER: "Extensión de Repetición Espaciada",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: 'Para más información revisa la <a href="${wikiUrl}">wiki</a>.',
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
    FOLDERS_TO_IGNORE: "Directorios a ignorar",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Tarjetas de Memorización",
    FLASHCARD_EASY_LABEL: "Texto del botón: Fácil",
    FLASHCARD_GOOD_LABEL: "Texto del botón: Bien",
    FLASHCARD_HARD_LABEL: "Texto del botón: Difícil",
    FLASHCARD_EASY_DESC: "Personalize la etiqueta para el botón: Fácil",
    FLASHCARD_GOOD_DESC: "Personalize la etiqueta para el botón: Bien",
    FLASHCARD_HARD_DESC: "Personalize la etiqueta para el botón: Difícil",
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "Etiquetas de las Tarjetas de Memorización",
    FLASHCARD_TAGS_DESC:
        "Escriba las etiquetas separadas por espacios o saltos de línea, por ejemplo, #memorizar #mazo2 #mazo3",
    CONVERT_FOLDERS_TO_DECKS: "¿Convertir directorios a mazos y submazos?",
    CONVERT_FOLDERS_TO_DECKS_DESC:
        "Esta es una opción alternativa a las etiquetas de las Tarjetas de Memorización.",
    INLINE_SCHEDULING_COMMENTS:
        "¿Guardar el comentario para programación de las tarjetas en la última línea?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Activar esto hará que los comentarios HTML no rompan el formato de las listas.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "¿Enterrar tarjetas hermanas hasta el siguiente día?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Los hermanos son tarjetas generadas del mismo texto de la tarjeta, por ejemplo, deletreos de huecos (cloze deletions en inglés)",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW:
        "Bury sibling cards until the next day by note review",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "¿Mostrar contexto en las tarjetas?",
    SHOW_CARD_CONTEXT_DESC: "Por Ejemplo: Título > Cabecera > Sub-Cabecera > ... > Sub-Cabecera",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Porcentaje de la altura de las tarjetas de memoria",
    CARD_MODAL_SIZE_PERCENT_DESC: "Debería ser establecido en 100% si tienes imágenes grandes",
    RESET_DEFAULT: "Reiniciar a la configuración por defecto",
    CARD_MODAL_WIDTH_PERCENT: "Porcentaje del ancho de las tarjetas de memoria",
    RANDOMIZE_CARD_ORDER: "¿Aleatorizar el orden de las tarjetas para revisión?",
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
    DISABLE_CLOZE_CARDS: "¿Deshabilitar deletreo de huecos en las tarjetas?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "¿Convertir ==resaltados== a deletreo de huecos?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        'Añadir/eliminar el <code>${defaultPattern}</code> de tus "Patrones de Deletreo de Huecos"',
    CONVERT_BOLD_TEXT_TO_CLOZES: "¿Convertir **texto en negrita** a deletreo de huecos?",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        'Añadir/eliminar el <code>${defaultPattern}</code> de tus "Patrones de Deletreo de Huecos"',
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "¿Convertir {{llaves rizadas}} a deletreo de huecos?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        'Añadir/eliminar el <code>${defaultPattern}</code> de tus "Patrones de Deletreo de Huecos"',
    CLOZE_PATTERNS: "Patrones de deletreo de huecos",
    CLOZE_PATTERNS_DESC:
        'Escriba los patrones de deletreo de huecos separados por saltos de línea. . Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "Separador de tarjetas de memorización en línea",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Note que después de cambiar este ajuste, tendrá que cambiar manualmente todas las notas que tenga.",
    INLINE_REVERSED_CARDS_SEPARATOR:
        "Separador de tarjetas de memorización para tarjetas de notas invertidas",
    MULTILINE_CARDS_SEPARATOR: "Separador para tarjetas de memorización multilínea",
    MULTILINE_REVERSED_CARDS_SEPARATOR:
        "Separador para tarjetas de memorización multilínea invertidas",
    MULTILINE_CARDS_END_MARKER:
        "Caracteres que denotan el fin de los clozes y tarjetas didácticas de varias líneas",
    NOTES: "Notes",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Activar panel de revisión de notas al arrancar",
    TAGS_TO_REVIEW: "Etiquetas a revisar",
    TAGS_TO_REVIEW_DESC:
        "Escriba las etiquetas separadas por espacios o saltos de líneas, por ejemplo, #revisión #etiqueta2 #etiqueta3.",
    OPEN_RANDOM_NOTE: "Abrir una nota al azar para revisar",
    OPEN_RANDOM_NOTE_DESC:
        "Cuando deshabilita esto, las notas son ordenadas por importancia (Algoritmo PageRank).",
    AUTO_NEXT_NOTE: "Abrir la siguiente nota automáticamente después de una revisión",
    MAX_N_DAYS_REVIEW_QUEUE: "Número máximo de días a mostrar en el panel derecho.",
    MIN_ONE_DAY: "El número de días debe ser al menos uno.",
    VALID_NUMBER_WARNING: "Por favor especifique un número válido.",
    UI: "User Interface",
    OPEN_IN_TAB: "Open in new tab",
    OPEN_IN_TAB_DESC: "Turn this off to open the plugin in a modal window",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "Habilita las opciones de revisión en el menú Archivo (por ejemplo: Revisar: Fácil, Bien, Difícil)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Si desactivas las opciones de revisión en el menú Archivo, puedes revisar tus notas usando los comandos del plugin y, si los definiste, las teclas rápidas asociadas.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "Los árboles de mazos deberían ser expandidos al inicio.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Desactiva esto para contraer mazos anidados en la misma tarjeta. Útil si tienes tarjetas que pertenecen a muchos mazos en el mismo archivo.",
    ALGORITHM: "Algoritmo",
    CHECK_ALGORITHM_WIKI:
        'Para más información, revisa la <a href="${algoUrl}">implementación del algoritmo</a>.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Base ease",
    BASE_EASE_DESC: "El mínimo es 130, es preferible que esté aproximado a 250.",
    BASE_EASE_MIN_WARNING: "La facilidad base de las tarjetas debe ser al menos 130.",
    LAPSE_INTERVAL_CHANGE:
        "El intervalo cambiará cuando se revise una tarjeta o nota como Difícil.",
    LAPSE_INTERVAL_CHANGE_DESC: "NuevoInterval = ViejoIntervalo * CambioDeIntervalo / 100.",
    EASY_BONUS: "Bonificación para Fácil",
    EASY_BONUS_DESC:
        "La bonificación para Fácil te permite establecer la diferencia entre intervalos al responder Bien y Fácil en las tarjetas o notas (mínimo = 100%).",
    EASY_BONUS_MIN_WARNING: "El bono de facilidad debe ser al menos 100.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Intervalo máximo en días",
    MAX_INTERVAL_DESC:
        "Te permite establecer un límite mayor en el intervalo (por defecto es de 100 años).",
    MAX_INTERVAL_MIN_WARNING: "El intervalo máximo debe ser de al menos un día.",
    MAX_LINK_CONTRIB: "Contribución máxima de las notas vinculadas.",
    MAX_LINK_CONTRIB_DESC:
        "Contribución máxima de la facilidad ponderada de las notas vinculadas a la facilidad inicial.",
    FUZZING: "Fuzzing",
    FUZZING_DESC:
        "When enabled, this adds a small random delay to the new interval time to prevent cards from sticking together and always being reviewed on the same day.",
    SWITCH_SHORT_TERM: "Switch to Short-term Scheduler",
    SWITCH_SHORT_TERM_DESC:
        "When disabled, this allow user to skip the short-term scheduler and directly switch to the long-term scheduler.",
    LOGGING: "Registro",
    DISPLAY_SCHEDULING_DEBUG_INFO:
        "¿Mostrar información de depuración en la consola de desarrollador",
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
    NOTES_REVIEW_QUEUE: "Cola de notas a revisar",
    CLOSE: "Cerrar",
    NEW: "Nuevo",
    YESTERDAY: "Ayer",
    TODAY: "Hoy",
    TOMORROW: "Mañana",

    // stats-modal.tsx
    STATS_TITLE: "Estadísticas",
    MONTH: "Mes",
    QUARTER: "Trimestre o Cuatrimestre",
    YEAR: "Año",
    LIFETIME: "Tiempo de Vida",
    FORECAST: "Pronóstico",
    FORECAST_DESC: "El número de tarjetas vencidas en el futuro",
    SCHEDULED: "Programado",
    DAYS: "Días",
    NUMBER_OF_CARDS: "Número de tarjetas",
    REVIEWS_PER_DAY: "Carga: ${avg} Revisiones por día",
    INTERVALS: "Intervalos",
    INTERVALS_DESC: "Retrasos hasta que las revisiones se muestren de nuevo",
    COUNT: "Conteo",
    INTERVALS_SUMMARY: "Intervalo de carga: ${avg}, Intervalo mayor: ${longest}",
    EASES: "Facilidad",
    EASES_SUMMARY: "Carga de Facilidad: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Tipos de tarjetas",
    CARD_TYPES_DESC: "Esto incluye también a las tarjetas enterradas, si las hay",
    CARD_TYPE_NEW: "Nueva",
    CARD_TYPE_YOUNG: "Joven",
    CARD_TYPE_MATURE: "Madura",
    CARD_TYPES_SUMMARY: "Tarjetas Totales: ${totalCardsCount}",
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
