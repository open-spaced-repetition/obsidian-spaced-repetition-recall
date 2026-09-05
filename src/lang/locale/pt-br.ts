// Português do Brasil

export default {
    // flashcard-modal.tsx
    DECKS: "Baralhos",
    DUE_CARDS: "Cartas para Colocar em Dia",
    NEW_CARDS: "Novas Cartas",
    TOTAL_CARDS: "Total de Cartas",
    BACK: "Voltar",
    SKIP: "Pular",
    EDIT_CARD: "Editar Cartão",
    RESET_CARD_PROGRESS: "Reiniciar o Progresso da Carta",
    RESET: "Reset",
    HARD: "Difícil",
    GOOD: "OK",
    EASY: "Fácil",
    SHOW_ANSWER: "Mostrar Resposta",
    CARD_PROGRESS_RESET: "O Progresso da Carta foi reiniciado",
    SAVE: "Salvar",
    CANCEL: "Cancelar",
    NO_INPUT: "Nenhuma entrada fornecida.",
    CURRENT_EASE_HELP_TEXT: "Facilidade atual: ",
    CURRENT_INTERVAL_HELP_TEXT: "Intervalo atual: ",
    CARD_GENERATED_FROM: "Gerada a partir de: ${notePath}",
    OPEN_NOTE: "Open Note",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Abrir uma nota para revisar",
    REVIEW_CARDS: "Revisar flashcards",
    REVIEW_DIFFICULTY_FILE_MENU: "Revisão: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "Revisar nota como ${difficulty}",
    CRAM_ALL_CARDS: "Selecione um baralho para revisar",
    REVIEW_ALL_CARDS: "Revisar flashcards de todas as notas",
    REVIEW_CARDS_IN_NOTE: "Revisar flashcards nessa nota",
    CRAM_CARDS_IN_NOTE: "Revisar todas as flashcards nessa nota",
    VIEW_STATS: "Ver estatísticas",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR:
        "Revisão: ${dueNotesCount} nota(s), ${dueFlashcardsCount} Carta(s) para colocar em dia",
    SYNC_TIME_TAKEN: "Sincronização levou ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "Nota é salva na pasta ignorada (cheque as configurações).",
    PLEASE_TAG_NOTE: "Por favor etiquete a nota apropriadamente para revisar (nas configurações).",
    RESPONSE_RECEIVED: "Resposta recebida.",
    NO_DECK_EXISTS: "Nenhum baralho existe para ${deckName}",
    ALL_CAUGHT_UP: "Você colocou tudo em dia agora :D.",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} dia(s)",
    MONTHS_STR_IVL: "${interval} mês(es)",
    YEARS_STR_IVL: "${interval} ano(s)",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}a",
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
    CHECK_WIKI: 'Para mais informações, cheque a <a href="${wikiUrl}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussionsUrl}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issuesUrl}">here</a> if you have a feature request or a bug report.',
    GITHUB_ISSUES_MODIFIED_PLUGIN:
        'Raise an <a href="${issuesUrl}">issue</a> about this modified sr-plugin if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE: "The project's source code is available on <a href=\"${githubProjectUrl}\">GitHub</a>.",
    CODE_CONTRIBUTION_INFO: "<a href=\"${codeContributionUrl}\">Here's</a> how to contribute code to the plugin.",
    TRANSLATION_CONTRIBUTION_INFO: "<a href=\"${translationContributionUrl}\">Here's</a> how to translate the plugin to another language.",
    FOLDERS_TO_IGNORE: "Pastas para ignorar",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Flashcards",
    FLASHCARD_EASY_LABEL: "Texto do Botão de Fácil",
    FLASHCARD_GOOD_LABEL: "Texto do Botão de OK",
    FLASHCARD_HARD_LABEL: "Texto do Botão de Difícil",
    FLASHCARD_EASY_DESC: 'Customize o rótulo para o botão de "Fácil"',
    FLASHCARD_GOOD_DESC: 'Customize o rótulo para o botão de "OK"',
    FLASHCARD_HARD_DESC: 'Customize o rótulo para o botão de "Difícil"',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "Etiquetas dos Flashcards",
    FLASHCARD_TAGS_DESC:
        "Insira etiquetas separadas por espaços ou quebras de linha ex: #flashcards #baralho2 #baralho3.",
    CONVERT_FOLDERS_TO_DECKS: "Converter pastas para baralhos e sub-baralhos?",
    CONVERT_FOLDERS_TO_DECKS_DESC:
        "Isso é uma alternativa para a opção de etiqueta dos Flashcards em cima.",
    INLINE_SCHEDULING_COMMENTS:
        "Salvar comentários de agendamento na mesma linha que a última linha do flashcard?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Ligar isso vai fazer com que os comentários em HTML não quebrem a formatação de listas.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Enterrar cartas irmãs até o próximo dia?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Cartas irmãs são geradas pelo texto da mesma carta ex: omissão de palavras",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW:
        "Bury sibling cards until the next day by note review",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "Mostrar contexto nas cartas?",
    SHOW_CARD_CONTEXT_DESC: "ex: Título > Cabeçalho 1 > Subcabeçalho > ... > Subcabeçalho",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Porcentagem da Altura do Flashcard",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Deveria estar configurado em 100% em dispositivos móveis ou se você tem imagens muito grandes",
    RESET_DEFAULT: "Reiniciar para a pré-definição",
    CARD_MODAL_WIDTH_PERCENT: "Porcentagem de Largura do Flashcard",
    RANDOMIZE_CARD_ORDER: "Aleatorizar a ordem das cartas durante a revisão?",
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
    DISABLE_CLOZE_CARDS: "Desabilitar cartas que usam omissão de palavras?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Converter ==marca-texto== em omissões?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        'Adiciona/remove o <code>${defaultPattern}</code> dos seus "Padrões de Omissão"',
    CONVERT_BOLD_TEXT_TO_CLOZES: "Converter **texto em negrito** em omissões?",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        'Adiciona/remove o <code>${defaultPattern}</code> dos seus "Padrões de Omissão"',
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "Converter {{chaves}} em omissões?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        'Adiciona/remove o <code>${defaultPattern}</code> dos seus "Padrões de Omissão"',
    CLOZE_PATTERNS: "Padrões de Omissão",
    CLOZE_PATTERNS_DESC: "Entre os padrões de omissão separados por quebras de linha",
    INLINE_CARDS_SEPARATOR: "Separador para flashcards inline",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Note que depois de mudar isso você vai ter que manualmente mudar quaisquer flashcards que você tenha.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Separador para flashcards inline reversos",
    MULTILINE_CARDS_SEPARATOR: "Separador para flashcards de múltiplas linhas",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Separador para flashcards de múltiplas linhas reversos",
    MULTILINE_CARDS_END_MARKER: "Caracteres que denotam o fim de clozes e flashcards multilinha",
    NOTES: "Notas",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Habilitar painel de revisão de notas na inicialização",
    TAGS_TO_REVIEW: "Etiquetas para revisar",
    TAGS_TO_REVIEW_DESC:
        "Insira etiquetas separadas por espaços ou quebra de linhas ex: #revisar #etiqueta2 #etiqueta3.",
    OPEN_RANDOM_NOTE: "Abrir uma nota aleatória para revisar",
    OPEN_RANDOM_NOTE_DESC:
        "Quando você desabilitar isso, as notas vão ser ordenadas por importância (PageRank).",
    AUTO_NEXT_NOTE: "Abrir a próxima nota automaticamente depois de uma revisão",
    MAX_N_DAYS_REVIEW_QUEUE: "Número máximo de dias para exibir no painel direito",
    MIN_ONE_DAY: "O número de dias deve ser pelo menos 1.",
    VALID_NUMBER_WARNING: "Por favor Insira um número válido.",
    UI: "User Interface",
    OPEN_IN_TAB: "Open in new tab",
    OPEN_IN_TAB_DESC: "Turn this off to open the plugin in a modal window",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC: "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "Ative as opções de revisão no menu Arquivo (ex.: Revisão: Fácil, OK, Difícil)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Se você desativar as opções de revisão no menu Arquivo, poderá revisar suas anotações usando os comandos do plugin e, se os tiver definido, as teclas de atalho associadas.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE:
        "Árvores de baralhos devem inicialmente ser exibidas como expandidas",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Desabilite isso para colapsar baralhos que estão um dentro do outro na mesma carta. Útil se você tem cartas que pertencem a muitos baralhos em um mesmo arquivo.",
    ALGORITHM: "Algorítmo",
    CHECK_ALGORITHM_WIKI:
        'Para mais informações, cheque a <a href="${algoUrl}">implementação do algorítmo</a>.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Facilidade base",
    BASE_EASE_DESC: "mínimo = 130, preferivelmente por volta de 250.",
    BASE_EASE_MIN_WARNING: "A facilidade base deve ser pelo menos 130.",
    LAPSE_INTERVAL_CHANGE:
        "Mudança de intervalo quando você revisa um(a) flashcard/nota como difícil",
    LAPSE_INTERVAL_CHANGE_DESC: "novoIntervalo = velhoIntervalo * mudancaIntervalo / 100.",
    EASY_BONUS: "Bônus de Fácil",
    EASY_BONUS_DESC:
        "O bônus de fácil te permite mudar a diferência entre intervalos de responder OK e Fácil em um(a) flashcard/nota (mínimo = 100%).",
    EASY_BONUS_MIN_WARNING: "O bônus de fácil deve ser pelo menos 100.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Intervalo máximo em dias",
    MAX_INTERVAL_DESC:
        "Te permite colocar um limite máximo no intervalo (pré-definição = 100 anos).",
    MAX_INTERVAL_MIN_WARNING: "O intervalo máximo deve ser pelo menos 1 dia.",
    MAX_LINK_CONTRIB: "Contribuição Máxima de Links",
    MAX_LINK_CONTRIB_DESC:
        "Contribuição máxima da facilidade ponderada das notas linkadas à facilidade inicial.",
    FUZZING: "Fuzzing",
    FUZZING_DESC:
        "When enabled, this adds a small random delay to the new interval time to prevent cards from sticking together and always being reviewed on the same day.",
    SWITCH_SHORT_TERM: "Switch to Short-term Scheduler",
    SWITCH_SHORT_TERM_DESC:
        "When disabled, this allow user to skip the short-term scheduler and directly switch to the long-term scheduler.",
    LOGGING: "Logging",
    DISPLAY_SCHEDULING_DEBUG_INFO: "Mostrar informação de debugging no console de desenvolvimento",
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
    NOTES_REVIEW_QUEUE: "Fila de Notas para Revisar",
    CLOSE: "Fechar",
    NEW: "Novo",
    YESTERDAY: "Ontem",
    TODAY: "Hoje",
    TOMORROW: "Amanhã",

    // stats-modal.tsx
    STATS_TITLE: "Estatísticas",
    MONTH: "Mês",
    QUARTER: "Trimestre",
    YEAR: "Ano",
    LIFETIME: "Tempo Total",
    FORECAST: "Previsão",
    FORECAST_DESC: "O número de cartas a serem colocadas em dia no futuro",
    SCHEDULED: "Agendado",
    DAYS: "Dias",
    NUMBER_OF_CARDS: "Número de cartas",
    REVIEWS_PER_DAY: "Média: ${avg} revisões/dia",
    INTERVALS: "Intervalos",
    INTERVALS_DESC: "Atrasos até que as revisões sejam exibidas de novo",
    COUNT: "Contagem",
    INTERVALS_SUMMARY: "Intervalo em média: ${avg}, Maior intervalo: ${longest}",
    EASES: "Facilidades",
    EASES_SUMMARY: "Facilidade em média: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Tipos de Cartas",
    CARD_TYPES_DESC: "Isso também inclui cartas enterradas, caso existam",
    CARD_TYPE_NEW: "Novo",
    CARD_TYPE_YOUNG: "Jovem",
    CARD_TYPE_MATURE: "Amadurecido",
    CARD_TYPES_SUMMARY: "Total de cartas: ${totalCardsCount}",
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
