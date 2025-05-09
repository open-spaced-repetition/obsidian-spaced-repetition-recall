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
    NOTE_IN_IGNORED_TAGS: "Note is saved with ignored tag (check settings).",
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
    SETTINGS_HEADER: "Extensión de Repetición Espaciada - Ajustes",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: 'Para más información revisa la <a href="${wiki_url}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussions_url}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issues_url}">here</a> if you have a feature request or a bug-report.',
    GITHUB_SOURCE_CODE:
        'Project source code available on <a href="${github_project_url}">GitHub</a>',
    CODE_CONTRIBUTION_INFO:
        'Information on <a href="${code_contribution_url}">code contributions</a>',
    TRANSLATION_CONTRIBUTION_INFO:
        'Information on <a href="${translation_contribution_url}">translating the plugin</a> to your language',
    PROJECT_CONTRIBUTIONS:
        'Raise an issue <a href="${issues_url}">here</a> if you have a feature request or a bug-report',
    FOLDERS_TO_IGNORE: "Directorios a ignorar",
    FOLDERS_TO_IGNORE_DESC: `Escriba las rutas de los directorios separadas por saltos de línea, por ejemplo, Plantillas Extra/Guiones.
Note that this setting is common to both Flashcards and Notes.`,
    TAGS_TO_IGNORE: "Tags to ignore",
    TAGS_TO_IGNORE_DESC: `Enter tags separated by newlines i.e. #excalidraw.
Note that this setting is common to both Flashcards and Notes.`,
    FLASHCARDS: "Tarjetas de Memorización",
    FLASHCARD_EASY_LABEL: "Texto del botón: Fácil",
    FLASHCARD_GOOD_LABEL: "Texto del botón: Bien",
    FLASHCARD_HARD_LABEL: "Texto del botón: Difícil",
    FLASHCARD_EASY_DESC: "Personalize la etiqueta para el botón: Fácil",
    FLASHCARD_GOOD_DESC: "Personalize la etiqueta para el botón: Bien",
    FLASHCARD_HARD_DESC: "Personalize la etiqueta para el botón: Difícil",
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
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "¿Mostrar contexto en las tarjetas?",
    SHOW_CARD_CONTEXT_DESC: "Por Ejemplo: Título > Cabecera > Sub-Cabecera > ... > Sub-Cabecera",
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
    CONVERT_BOLD_TEXT_TO_CLOZES: "¿Convertir **texto en negrita** a deletreo de huecos?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "¿Convertir {{llaves rizadas}} a deletreo de huecos?",
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
    REVIEW_PANE_ON_STARTUP: "Activar panel de revisión de notas al arrancar",
    TAGS_TO_REVIEW: "Etiquetas a revisar",
    TAGS_TO_REVIEW_DESC:
        "Escriba las etiquetas separadas por espacios o saltos de líneas, por ejemplo, #revisión #etiqueta2 #etiqueta3.",
    OPEN_RANDOM_NOTE: "Abrir una nota al azar para revisar",
    OPEN_RANDOM_NOTE_DESC:
        "Cuando deshabilita esto, las notas son ordenadas por importancia (Algoritmo PageRank).",
    AUTO_NEXT_NOTE: "Abrir la siguiente nota automáticamente después de una revisión",
    DISABLE_FILE_MENU_REVIEW_OPTIONS:
        "Deshabilitar opciones de revisión en el menú de archivo, por ejemplo, Revisión: Fácil Bien Difícil",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Después de deshabilitarlo, puede hacer las revisiones utilizando atajos de teclado. Reinicie Obsidian después de cambiar esto.",
    MAX_N_DAYS_REVIEW_QUEUE: "Número máximo de días a mostrar en el panel derecho.",
    MIN_ONE_DAY: "El número de días debe ser al menos uno.",
    VALID_NUMBER_WARNING: "Por favor especifique un número válido.",
    UI_PREFERENCES: "Preferencias de la interfaz de usuario.",
    OPEN_AS_TAB: "Modo de pestaña",
    OPEN_AS_TAB_DESC:
        "Si esta opción está activada, la interfaz de repaso se abrirá como una pestaña. Si está desactivada, se abrirá como una ventana modal.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "Los árboles de mazos deberían ser expandidos al inicio.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Desactiva esto para contraer mazos anidados en la misma tarjeta. Útil si tienes tarjetas que pertenecen a muchos mazos en el mismo archivo.",
    ALGORITHM: "Algoritmo",
    CHECK_ALGORITHM_WIKI:
        'Para más información, revisa la <a href="${algo_url}">implementación del algoritmo</a>.',
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
    DISPLAY_DEBUG_INFO: "¿Mostrar información de depuración en la consola de desarrollador",
    DISPLAY_PARSER_DEBUG_INFO:
        "Display debugging information for the parser on the developer console",

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
    NOTES_REVIEW_QUEUE: "Cola de notas a revisar",
    CLOSE: "Cerrar",
    NEW: "Nuevo",
    YESTERDAY: "Ayer",
    TODAY: "Hoy",
    TOMORROW: "Mañana",

    // stats-modal.tsx
    STATS_TITLE: "Estadísticas",
    MONTH: "Mes",
    QUARTER: "Trimestre o Cuatrimestre", // En Inglés: Quarter.
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
    CARD_TYPES: "Tipos de tarjetas",
    CARD_TYPES_DESC: "Esto incluye también a las tarjetas enterradas, si las hay",
    CARD_TYPE_NEW: "Nueva",
    CARD_TYPE_YOUNG: "Joven",
    CARD_TYPE_MATURE: "Madura",
    CARD_TYPES_SUMMARY: "Tarjetas Totales: ${totalCardsCount}",
    REVIEWED_TODAY: "Reviewed today",
    REVIEWED_TODAY_DESC: "counts of cards/notes you have reviewed today",
    NEW_LEARNED: "New Learned",
    DUE_REVIEWED: "due Reviewed",
    REVIEWED_TODAY_SUMMARY: "Total Reviewed today: ${totalreviewedCount}",
    DATE: "Date",
};
