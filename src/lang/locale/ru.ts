// Перевод на русский язык

// @ytatichno Сафронов Максим
// https://github.com/ytatichno

// Микко Ведру
// https://github.com/mikkovedru

// Калашников Иван
// https://github.com/Steindvart

// https://github.com/Riffaells

export default {
    // flashcard-modal.tsx
    DECKS: "Колоды",
    DUE_CARDS: "Повторяемые карточки",
    NEW_CARDS: "Новые карточки",
    TOTAL_CARDS: "Всего карточек",
    BACK: "Назад",
    SKIP: "Пропустить",
    EDIT_CARD: "Редактировать карточку",
    RESET_CARD_PROGRESS: "Сбросить прогресс карточки",
    RESET: "Сбросить",
    HARD: "Сложно",
    GOOD: "Нормально",
    EASY: "Легко",
    SHOW_ANSWER: "Показать ответ",
    CARD_PROGRESS_RESET: "Сбросить прогресс изучения карточки",
    SAVE: "Сохранить",
    CANCEL: "Отмена",
    NO_INPUT: "Нет входных данных.",
    CURRENT_EASE_HELP_TEXT: "Текущая лёгкость: ",
    CURRENT_INTERVAL_HELP_TEXT: "Текущий интервал: ",
    CARD_GENERATED_FROM: "Создано из: ${notePath}",
    OPEN_NOTE: "Открыть заметку",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Открыть заметку для повторения",
    REVIEW_CARDS: "Изучать карточки",
    REVIEW_DIFFICULTY_FILE_MENU: "Изучить: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: 'Изучить заметку как "${difficulty}"',
    REVIEW_ALL_CARDS: "Повторить все карточки во всех заметках",
    CRAM_ALL_CARDS: "Выбрать колоду для интенсивного повторения",
    REVIEW_CARDS_IN_NOTE: "Повторить карточки в этой заметке",
    CRAM_CARDS_IN_NOTE: "Зубрить карточки в этой заметке",
    VIEW_STATS: "Посмотреть статистику",
    OPEN_REVIEW_QUEUE_VIEW: "Открыть очередь повторения заметок на боковой панели",
    STATUS_BAR: "Повторить: ${dueNotesCount} заметок, ${dueFlashcardsCount} карточек",
    SYNC_TIME_TAKEN: "Синхронизация заняла ${t}мс",
    NOTE_IN_IGNORED_FOLDER: "Заметка сохранена в игнорируемую папку (см. настройки).",
    PLEASE_TAG_NOTE: "Для изучения, пожалуйста, правильно пометьте заметку тегом (см. настройки).",
    RESPONSE_RECEIVED: "Ответ получен.",
    NO_DECK_EXISTS: "Не существует уровня ${deckName}",
    ALL_CAUGHT_UP: "Молодец! Ты справился и дошел до конца! :D",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} дней",
    MONTHS_STR_IVL: "${interval} месяцев",
    YEARS_STR_IVL: "${interval} лет",
    DAYS_STR_IVL_MOBILE: "${interval}д.",
    MONTHS_STR_IVL_MOBILE: "${interval}м.",
    YEARS_STR_IVL_MOBILE: "${interval}г.",
    HOURS_STR_IVL: "${interval} часов",
    MINUTES_STR_IVL: "${interval} минут",
    HOURS_STR_IVL_MOBILE: "${interval}ч",
    MINUTES_STR_IVL_MOBILE: "${interval}мин",

    // settings.ts
    SETTINGS_HEADER: "Spaced Repetition",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: 'Для дополнительной информации посетите: <a href="${wikiUrl}">wiki</a>.',
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
    FOLDERS_TO_IGNORE: "Игнорируемые папки",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Карточки",
    FLASHCARD_EASY_LABEL: 'Текст кнопки "Легко"',
    FLASHCARD_GOOD_LABEL: 'Текст кнопки "Помню"',
    FLASHCARD_HARD_LABEL: 'Текст кнопки "Сложно"',
    FLASHCARD_EASY_DESC: 'Настроить ярлык для кнопки "Легко"',
    FLASHCARD_GOOD_DESC: 'Настроить ярлык для кнопки "Помню"',
    FLASHCARD_HARD_DESC: 'Настроить ярлык для кнопки "Сложно"',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "Теги карточек",
    FLASHCARD_TAGS_DESC:
        "Введите теги, разделённые пробелами или новыми строками, например: #flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "Конвертировать папки в колоды и подколоды?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "Это альтернатива указанным выше тегам карточек.",
    INLINE_SCHEDULING_COMMENTS:
        "Сохранять комментарий планирования в той же строке, что и последняя строка карточки?",
    INLINE_SCHEDULING_COMMENTS_DESC: "HTML комментарии не будут нарушать форматирование списка",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Скрывать родственные карточки до следующего дня?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Родственные карточки - те, которые образованы из одного текста, пример: карточки с пропусками ([...])",
    MULTI_CLOZE: "enable multi-cloze card?",
    MULTI_CLOZE_DESC: "Combine new/ondue sibling clozes into one card.",
    SHOW_CARD_CONTEXT: "Показывать контекст (уровень) в карточках (во время повторения)?",
    SHOW_CARD_CONTEXT_DESC: "пример: Title > Heading 1 > Subheading > ... > Subheading",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Высота карточки в процентах",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Установите 100% на мобильных устройствах, если нужно просматривать большие изображения",
    RESET_DEFAULT: "Сбросить по умолчанию",
    CARD_MODAL_WIDTH_PERCENT: "Ширина карточки в процентах",
    RANDOMIZE_CARD_ORDER: "Случайный порядок карточек при изучении?",
    REVIEW_CARD_ORDER_WITHIN_DECK: "Порядок карточек в колоде при изучении",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "Последовательно в колоде (сначала все новые карточки)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL:
        "Последовательно в колоде (сначала все просроченные карточки)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "Случайно в колоде (сначала все новые карточки)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "Случайно в колоде (сначала все просроченные карточки)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "Случайные колоды и карточки",
    REVIEW_DECK_ORDER: "Порядок колод при повторении",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL:
        "Последовательно (после завершения предыдущей колоды)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM:
        "Случайно (после изучения всех карт из предыдущей колоды)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "Случайная карта из случайной колоды",
    DISABLE_CLOZE_CARDS: "Выключить карты с пропусками (пример: [...])?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Конвертировать ==выделенный текст== в пропуски (пример: [...])?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        'Добавить/удалить <code>${defaultPattern}</code> в ваши "Шаблоны пропусков"',
    CONVERT_BOLD_TEXT_TO_CLOZES: "Конвертировать **жирный текст** в пропуски (пример: [...])?",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        'Добавить/удалить <code>${defaultPattern}</code> в ваши "Шаблоны пропусков"',
    CONVERT_CURLY_BRACKETS_TO_CLOZES:
        "Конвертировать {{фигурные скобки}} в пропуски (пример: [...])?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        'Добавить/удалить <code>${defaultPattern}</code> в ваши "Шаблоны пропусков"',
    CLOZE_PATTERNS: "Шаблоны пропусков",
    CLOZE_PATTERNS_DESC:
        'Введите шаблоны пропусков, разделенные переводами строк. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "Разделитель для внутристрочных карточек",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Внимание: после изменения этого параметра вам потребуется вручную изменить разделители в существующих карточках.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Разделитель для обратных однострочных карточек",
    MULTILINE_CARDS_SEPARATOR: "Разделитель для многострочных карточек",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Разделитель для обратных многострочных карточек",
    MULTILINE_CARDS_END_MARKER: "Символы, обозначающие конец закрытых и многострочных карточек",
    NOTES: "Заметки",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Включить панель изучения карточек при запуске программы",
    TAGS_TO_REVIEW: "Теги для изучения",
    TAGS_TO_REVIEW_DESC:
        "Введите теги, разделенные Enter-ами или пробелами, например: #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Открыть случайную заметку для изучения",
    OPEN_RANDOM_NOTE_DESC: "Если выключить, то заметки будут отсортированы по важности (PageRank).",
    AUTO_NEXT_NOTE: "После изучения автоматически открывать следующую заметку",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "Включите параметры обзора в меню Файл (т.е.: Изучение: Легко, Нормально, Сложно)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Если вы отключите параметры обзора в меню Файл, вы сможете просматривать свои заметки с помощью команд плагина и, если вы их задали, соответствующих горячих клавиш.",
    MAX_N_DAYS_REVIEW_QUEUE: "Наибольшее количество дней для отображение на панели справа",
    MIN_ONE_DAY: "Количество дней не меньше 1.",
    VALID_NUMBER_WARNING: "Пожалуйста, введите подходящее число.",
    UI: "User Interface",
    OPEN_IN_TAB: "Open in new tab",
    OPEN_IN_TAB_DESC: "Turn this off to open the plugin in a modal window",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "Дерево колод должно изначально отображаться развёрнутым",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Отключите этот параметр, чтобы свернуть вложенные колоды в одной карточке. Полезно, если у вас есть карточки, принадлежащие многим колодам в одном файле.",
    ALGORITHM: "Алгоритм",
    CHECK_ALGORITHM_WIKI:
        'За дополнительной информацией обращайтесь к <a href="${algoUrl}">реализация алгоритма</a>.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Базовая Лёгкость",
    BASE_EASE_DESC: "минимум = 130, предпочтительно около 250.",
    BASE_EASE_MIN_WARNING: "Лёгкость должна быть минимум 130.",
    LAPSE_INTERVAL_CHANGE: 'Изменение интервала при отметке карточки/заметки как "Сложно"',
    LAPSE_INTERVAL_CHANGE_DESC: "новыйИнтервал = старыйИнтервал * изменениеИнтервала / 100.",
    EASY_BONUS: 'Бонус за "Легко"',
    EASY_BONUS_DESC:
        "Бонус за Легко позволяет вам установить разницу в промежутках между ответами Хорошо и Легко на карточке/заметке (мин. = 100%).",
    EASY_BONUS_MIN_WARNING: 'Бонус за "Легко" должен быть не меньше 100.',
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Максимальный интервал повторения в днях",
    MAX_INTERVAL_DESC:
        "Устанавливает верхний предел интервала повторения (по умолчанию = 100 лет).",
    MAX_INTERVAL_MIN_WARNING: "Максимальный интервал должен быть не менее 1 дня.",
    MAX_LINK_CONTRIB: "Максимальный вклад ссылок",
    MAX_LINK_CONTRIB_DESC:
        'Максимальный вклад взвешенной "Лёгкости" связанных заметок в исходную "Лёгкость".',
    FUZZING: "Размытие",
    FUZZING_DESC:
        "При включении добавляет небольшую случайную задержку к новому времени интервала, чтобы предотвратить скопление карточек и их повторение в один день.",
    SWITCH_SHORT_TERM: "Переключиться на краткосрочное планирование",
    SWITCH_SHORT_TERM_DESC:
        "При отключении позволяет пользователю пропустить краткосрочное планирование и сразу перейти к долгосрочному.",
    LOGGING: "Журналирование",
    DISPLAY_SCHEDULING_DEBUG_INFO: "Отображать отладочную информацию в консоли разработчика",
    DISPLAY_PARSER_DEBUG_INFO: "Show the parser's debugging information on the developer console",
    SCHEDULING: "Scheduling",
    EXPERIMENTAL: "Experimental",
    HELP: "Help",
    STORE_IN_NOTES: "In the notes",

    DATA_LOC: "Расположение данных",
    DATA_LOC_DESC: "Где хранить файл данных для элементов интервального повторения.",
    DATA_FOLDER: "Папка для `tracked_files.json`",
    NEW_PER_DAY: "Новых в день",
    NEW_PER_DAY_DESC:
        "Максимальное количество новых (неповторённых) заметок, добавляемых в очередь каждый день. Установите -1 для отсутствия ограничений.",
    NEW_PER_DAY_NAN: "Должно быть числом",
    NEW_PER_DAY_NEG: "Новых в день должно быть -1 или больше.",
    REPEAT_ITEMS: "Повторять элементы",
    REPEAT_ITEMS_DESC:
        "Должны ли элементы, отмеченные как неправильные, повторяться до правильного ответа?",
    ALGORITHMS_CONFIRM:
        "Переключение алгоритмов может сбросить или повлиять на время повторения существующих элементов. Это изменение необратимо. Изменение алгоритмов вступает в силу только после перезапуска или перезагрузки плагина. Вы уверены, что хотите переключить алгоритм?",
    ALGORITHMS_DESC:
        'Алгоритм, используемый для интервального повторения. Для получения дополнительной информации см. <a href="https://github.com/martin-jw/obsidian-recall">алгоритмы</a>.',
    CONVERT_TRACKED_TO_DECK: "Конвертировать отслеживаемые заметки в колоды?",
    REVIEW_FLOATBAR: "Плавающая панель ответов при повторении",
    REVIEW_FLOATBAR_DESC:
        "Работает только при включённом автоматическом переходе к следующей заметке. Показывается при повторении заметки через клик по строке состояния/боковой панели/команде.",
    REVIEW_NOTE_DIRECTLY: "Повторять заметку напрямую?",
    REVIEW_NOTE_DIRECTLY_DESC:
        "При повторении заметки через клик по строке состояния или команде открывать её напрямую, без необходимости выбирать тег",
    INTERVAL_SHOWHIDE: "Отображать интервал следующего повторения",
    INTERVAL_SHOWHIDE_DESC: "Отображать ли интервал следующего повторения на кнопках ответов.",
    REQUEST_RETENTION: "Запрашиваемое удержание",
    REQUEST_RETENTION_DESC:
        "Вероятность (в процентах), что вы ожидаете вспомнить ответ при следующем повторении",
    REVLOG_TAGS: "Теги для вывода в журнал повторений",
    REVLOG_TAGS_DESC:
        "Теги для вывода в журнал повторений, могут быть тегами карточек или/и заметок. По умолчанию пусто - все выводятся в журнал без разделения по тегам",

    FLASHCARD_AGAIN_LABEL: 'Текст кнопки "Снова"',
    FLASHCARD_BLACKOUT_LABEL: 'Текст кнопки "Забыл"',
    FLASHCARD_INCORRECT_LABEL: 'Текст кнопки "Неправильно"',
    "FLASHCARD_INCORRECT (EASY)_LABEL": 'Текст кнопки "Неправильно (Легко)"',
    FLASHCARD_AGAIN_DESC: 'Настроить ярлык для кнопки "Снова"',
    FLASHCARD_BLACKOUT_DESC: 'Настроить ярлык для кнопки "Забыл"',
    FLASHCARD_INCORRECT_DESC: 'Настроить ярлык для кнопки "Неправильно"',
    "FLASHCARD_INCORRECT (EASY)_DESC": 'Настроить ярлык для кнопки "Неправильно (Легко)"',
    UNTRACK_WITH_REVIEWTAG: "Не отслеживать с тегом повторения",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Очередь заметок на повторение",
    CLOSE: "Закрыть",
    NEW: "Новые",
    YESTERDAY: "Вчерашние",
    TODAY: "Сегодняшние",
    TOMORROW: "Завтрашние",

    // stats-modal.tsx
    STATS_TITLE: "Статистика",
    MONTH: "Месяц",
    QUARTER: "Квартал",
    YEAR: "Год",
    LIFETIME: "За всё время",
    FORECAST: "Прогноз",
    FORECAST_DESC: "Количество карточек, которые предстоит повторить",
    SCHEDULED: "Запланировано",
    DAYS: "Дни",
    NUMBER_OF_CARDS: "Количество карточек",
    REVIEWS_PER_DAY: "Среднее: ${avg} повторений/день",
    INTERVALS: "Интервалы",
    INTERVALS_DESC: "Интервалы до следующего повторения",
    COUNT: "Количество",
    INTERVALS_SUMMARY: "Средний промежуток: ${avg}, Самый длинный промежуток: ${longest}",
    EASES: "Прогресс изучения",
    EASES_SUMMARY: "Среднее значение прогресса: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Типы карточек",
    CARD_TYPES_DESC: "Включая скрытые карточки, если таковые имеются",
    CARD_TYPE_NEW: "Новых",
    CARD_TYPE_YOUNG: "Повторяемых",
    CARD_TYPE_MATURE: "Изученных",
    CARD_TYPES_SUMMARY: "Всего карточек: ${totalCardsCount}",
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
