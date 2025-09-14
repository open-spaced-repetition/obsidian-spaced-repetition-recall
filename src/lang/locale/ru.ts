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
    GOOD: "Помню",
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
    SETTINGS_HEADER: "Интервальное Повторение с Вспоминанием",
    GROUP_TAGS_FOLDERS: "Теги и папки",
    GROUP_FLASHCARD_REVIEW: "Изучение карточек",
    GROUP_FLASHCARD_SEPARATORS: "Разделители карточек",
    GROUP_DATA_STORAGE: "Хранение данных планирования",
    GROUP_DATA_STORAGE_DESC: "Выберите, где хранить данные планирования",
    GROUP_FLASHCARDS_NOTES: "Карточки и заметки",
    GROUP_CONTRIBUTING: "Участие в разработке",
    CHECK_WIKI: 'Для дополнительной информации посетите: <a href="${wikiUrl}">Документацию</a>.',
    GITHUB_DISCUSSIONS:
        'Посмотрите <a href="${discussionsUrl}">Обсуждения</a> для помощи, отзывов и общих дискуссий.',
    GITHUB_ISSUES:
        'Сообщите о проблеме <a href="${issuesUrl}">здесь</a>, если у вас есть запрос на функцию или сообщение об ошибке.',
    GITHUB_ISSUES_MODIFIED_PLUGIN:
        'Сообщите о проблеме <a href="${issuesUrl}">здесь</a> касательно этого модифицированного sr-плагина, если у вас есть запрос на функцию или сообщение об ошибке.',
    GITHUB_SOURCE_CODE:
        'Исходный код проекта доступен на <a href="${githubProjectUrl}">GitHub</a>.',
    CODE_CONTRIBUTION_INFO:
        'Внести свой вклад в <a href="${codeContributionUrl}">код плагина</a>.',
    TRANSLATION_CONTRIBUTION_INFO:
        'Перевести плагин на <a href="${translationContributionUrl}">другой язык</a>',
    FOLDERS_TO_IGNORE: "Игнорируемые папки",
    FOLDERS_TO_IGNORE_DESC:
        "Введите пути к папкам или глобальным шаблонам на отдельных строках, например: Templates/Scripts или **/*.excalidraw.md. Эта настройка общая для карточек и заметок.",
    OBSIDIAN_INTEGRATION: "Интеграция с Obsidian",
    FLASHCARDS: "Карточки",
    FLASHCARD_EASY_LABEL: 'Текст кнопки "Легко"',
    FLASHCARD_GOOD_LABEL: 'Текст кнопки "Помню"',
    FLASHCARD_HARD_LABEL: 'Текст кнопки "Сложно"',
    FLASHCARD_EASY_DESC: 'Настроить ярлык для кнопки "Легко"',
    FLASHCARD_GOOD_DESC: 'Настроить ярлык для кнопки "Помню"',
    FLASHCARD_HARD_DESC: 'Настроить ярлык для кнопки "Сложно"',
    REVIEW_BUTTON_DELAY: "Задержка нажатия кнопки (мс)",
    REVIEW_BUTTON_DELAY_DESC: "Добавить задержку к кнопкам повторения перед тем, как их можно будет нажать снова.",
    FLASHCARD_TAGS: "Теги карточек",
    FLASHCARD_TAGS_DESC:
        "Введите теги, разделённые пробелами или новыми строками, например: #карточки #колода2 #колода3.",
    CONVERT_FOLDERS_TO_DECKS: "Конвертировать папки в колоды и подколоды?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "Это альтернатива указанным выше тегам карточек.",
    INLINE_SCHEDULING_COMMENTS:
        "Сохранять комментарий планирования в той же строке, что и последняя строка карточки?",
    INLINE_SCHEDULING_COMMENTS_DESC: "HTML комментарии не будут нарушать форматирование списка",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Скрывать родственные карточки до следующего дня?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Родственные карточки - те, которые образованы из одного текста, пример: закрытые карточки ([...])",
    BURY_SIBLINGS_TILL_NEXT_DAY_BY_NOTE_REVIEW: "Скрывать родственные карточки до следующего дня при повторении заметок",
    MULTI_CLOZE: "включить мульти-закрытые карточки?",
    MULTI_CLOZE_DESC: "Объединить новые/просроченные родственные закрытые карточки в одну карточку.",
    SHOW_CARD_CONTEXT: "Показывать контекст в карточках?",
    SHOW_CARD_CONTEXT_DESC: "например: Заголовок > Раздел 1 > Подраздел > ... > Подраздел",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Показывать время следующего повторения на кнопках",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Полезно знать, на какое время в будущем откладываются ваши карточки.",
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
    DISABLE_CLOZE_CARDS: "Выключить закрытые карточки (пример: [...])?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Конвертировать ==выделенный текст== в закрытые карточки (пример: [...])?",
    CONVERT_HIGHLIGHTS_TO_CLOZES_DESC:
        'Добавить/удалить <code>${defaultPattern}</code> в ваши "Шаблоны закрытых карточек"',
    CONVERT_BOLD_TEXT_TO_CLOZES: "Конвертировать **жирный текст** в закрытые карточки (пример: [...])?",
    CONVERT_BOLD_TEXT_TO_CLOZES_DESC:
        'Добавить/удалить <code>${defaultPattern}</code> в ваши "Шаблоны закрытых карточек"',
    CONVERT_CURLY_BRACKETS_TO_CLOZES:
        "Конвертировать {{фигурные скобки}} в закрытые карточки (пример: [...])?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES_DESC:
        'Добавить/удалить <code>${defaultPattern}</code> в ваши "Шаблоны закрытых карточек"',
    CLOZE_PATTERNS: "Шаблоны закрытых карточек",
    CLOZE_PATTERNS_DESC:
        'Введите шаблоны закрытых карточек, разделенные переводами строк. Посмотрите <a href="${docsUrl}">документацию</a> для ознакомления.',
    INLINE_CARDS_SEPARATOR: "Разделитель для внутристрочных карточек",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Внимание: после изменения этого параметра вам потребуется вручную изменить разделители в существующих карточках.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Разделитель для обратных однострочных карточек",
    MULTILINE_CARDS_SEPARATOR: "Разделитель для многострочных карточек",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Разделитель для обратных многострочных карточек",
    MULTILINE_CARDS_END_MARKER: "Символы, обозначающие конец закрытых карточек и многострочных карточек",
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
        "Включите параметры обзора в меню Файл (т.е.: Изучение: Легко, Помню, Сложно)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Если вы отключите параметры обзора в меню Файл, вы сможете просматривать свои заметки с помощью команд плагина и, если вы их задали, соответствующих горячих клавиш.",
    MAX_N_DAYS_REVIEW_QUEUE: "Наибольшее количество дней для отображение на панели справа",
    MIN_ONE_DAY: "Количество дней не меньше 1.",
    VALID_NUMBER_WARNING: "Пожалуйста, введите подходящее число.",
    UI: "Пользовательский интерфейс",
    OPEN_IN_TAB: "Открывать в новой вкладке",
    OPEN_IN_TAB_DESC: "Отключите, чтобы открывать плагин в модальном окне",
    SHOW_STATUS_BAR: "Показывать строку состояния",
    SHOW_STATUS_BAR_DESC:
        "Отключите, чтобы скрыть статус повторения карточек в строке состояния Obsidian",
    SHOW_RIBBON_ICON: "Показывать иконку на панели инструментов",
    SHOW_RIBBON_ICON_DESC: "Отключите, чтобы скрыть иконку плагина с панели инструментов Obsidian",
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
    LOAD_BALANCE: "Включить балансировщик нагрузки",
    LOAD_BALANCE_DESC: `Слегка корректирует интервал, чтобы количество повторений в день было более постоянным.
        Это похоже на размытие в Anki, но вместо случайности выбирает день с наименьшим количеством повторений.
        Отключается для малых интервалов.`,
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
    DISPLAY_PARSER_DEBUG_INFO: "Показывать отладочную информацию парсера в консоли разработчика",
    SCHEDULING: "Планирование",
    EXPERIMENTAL: "Экспериментальные",
    HELP: "Помощь",
    STORE_IN_NOTES: "В заметках",

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
    SEARCH: "Поиск",
    PREVIOUS: "Предыдущий",
    NEXT: "Следующий",
    REVIEWED_TODAY: "Повторено сегодня",
    REVIEWED_TODAY_DESC: "количество карточек/заметок, которые вы повторили сегодня",
    NEW_LEARNED: "Новых изучено",
    DUE_REVIEWED: "Просроченных повторено",
    REVIEWED_TODAY_SUMMARY: "Всего повторено сегодня: ${totalreviewedCount}",
    DATE: "Дата",

    // data.ts
    DATA_TAGGED_FILE_CANT_UNTRACK:
        "это файл с тегом, нельзя отменить отслеживание таким образом. Вы можете удалить тег #review в файле заметки.",
    DATA_UNTRACKED_ITEMS: "Отменено отслеживание ${numItems} элементов${nulrstr}",
    DATA_UNABLE_TO_SAVE: "Не удалось сохранить файл данных!",
    DATA_FOLDER_UNTRACKED:
        "В папке ${folderPath}, ${totalRemoved} файлов больше не отслеживаются для повторения",
    DATA_ADDED_REMOVED_ITEMS: "Добавлено ${totalAdded} новых элементов, удалено ${totalRemoved} элементов.",
    DATA_ADDED_REMOVED_ITEMS_SHORT: "Добавлено ${added} новых элементов, удалено ${removed} элементов.",
    DATA_FILE_UPDATE:
        "${filePath} обновлен - строка: ${lineNo}\nДобавлено: ${added} новых карточек, удалено ${removed} карточек.",
    DATA_ALL_ITEMS_UPDATED: "Все элементы были обновлены.",

    // reviewView.ts
    NEXT_REVIEW_MINUTES: "Можно повторить через ${interval} минут",
    NEXT_REVIEW_HOURS: "Можно повторить через ${interval} часов",

    // location_switch.ts
    DATA_FILE_MOVED_SUCCESS: "Файл данных успешно перемещен!",
    DATA_FILE_DELETE_OLD_FAILED: "Не удалось удалить старый файл данных, удалите его вручную.",
    DATA_FILE_MOVE_FAILED: "Не удалось переместить файл данных!",
    DATA_LOST_WARNING: "Некоторые данные потеряны, смотрите консоль для подробностей.",

    // algorithms_switch.ts
    ALGORITHM_SWITCH_FAILED: "Конвертация не удалась, восстановлен старый алгоритм и данные, пожалуйста, сообщите об этом.",
    ALGORITHM_SWITCH_SUCCESS: "Конвертация завершена, из-за различных параметров алгоритма последующие интервалы повторения будут скорректированы",

    // trackFileEvents.ts
    MENU_TRACK_ALL_NOTES: "Отслеживать все заметки",
    MENU_UNTRACK_ALL_NOTES: "Не отслеживать все заметки",
    MENU_TRACK_NOTE: "Отслеживать заметку",
    MENU_UNTRACK_NOTE: "Не отслеживать заметку",

    // info.ts
    ITEM_INFO_TITLE: "Информация об элементе",
    CARDS_IN_NOTE: "Карточки в этой заметке",
    SAVE_ITEM_INFO: "Сохранить",
    SAVE_ITEM_INFO_TOOLTIP: "сохранить только информацию об элементах текущей заметки",
    CLOSE_ITEM_INFO: "Закрыть",
    LINE_NO: "Строка:",
    NEXT_REVIEW: "Следующее повторение:",
    NEW_CARD: "Новая карточка",
    ITEM_DATA_INFO: "Информация о данных элемента",

    // cardBlockIDSetting.ts
    CARD_BLOCK_ID: "ID блока карточки",
    CARD_BLOCK_ID_DESC: "использовать ID блока карточки вместо номера строки и хеша текста.<br><b>Если включено, ID блока будет добавлен после текста карточки. И ID блока останется в заметке после отключения.</b>",
    CARD_BLOCK_ID_CONFIRM: "**Если включено, ID блока будет добавлен после текста карточки. И ID блока останется в заметке после отключения.** \n\nРекомендация: сделайте резервную копию хранилища перед включением. Или попробуйте в тестовом хранилище. \n\nПосле включения настройки ID блока будут добавлены после всех карточек. Даже если настройка будет отключена, добавленные ID блоков останутся в заметке и не будут удалены.\n\nРекомендуется **сначала сделать резервную копию** библиотеки заметок или попробовать в тестовой библиотеке.",

    // mixQueueSetting.ts
    MIX_QUEUE: "Смешанная очередь",
    MIX_QUEUE_DESC: "смешивать просроченные и новые заметки при повторении. **Первый** слайдер для общего количества, второй слайдер для количества просроченных. А количество новых = (общее - просроченные).",

    // dataLocation.ts
    DATA_LOCATION_PLUGIN_FOLDER: "В папке плагина",
    DATA_LOCATION_ROOT_FOLDER: "В папке хранилища",
    DATA_LOCATION_SPECIFIED_FOLDER: "В указанной ниже папке",
    DATA_LOCATION_SAVE_ON_NOTE_FILE: "Сохранить в файле заметки",

    // locationSetting.ts
    DATA_LOCATION_WARNING_TO_NOTE: "БУДЬТЕ ОСТОРОЖНЫ!!!\nЕсли вы подтвердите это, все ваши данные планирования из `tracked_files.json` будут конвертированы в заметки, что изменит множество ваших файлов заметок одновременно.\nПожалуйста, убедитесь, что настройки тегов карточек и заметок соответствуют тому, что вы используете.",
    DATA_LOCATION_WARNING_OTHER_ALGO: "если вы хотите сохранять данные в файле заметки, вы **должны** использовать алгоритм по умолчанию.",
    DATA_LOCATION_WARNING_TO_TRACKED: "БУДЬТЕ ОСТОРОЖНЫ!!!\nЕсли вы подтвердите это, все ваши данные планирования из заметок (которые будут удалены одновременно) будут конвертированы В `tracked_files.json`.",

    // trackSetting.ts
    UNTRACK_WITH_REVIEWTAG_DESC: "При удалении тега повторения в заметке синхронно отменить отслеживание, чтобы заметка больше не повторялась<br><b>включено</b>: синхронная операция отмены отслеживания;<br><b>отключено</b>: После удаления тега повторения нужно отменить отслеживание еще раз, прежде чем заметка перестанет повторяться. (как в предыдущей версии)",

    // commands.ts
    CMD_ITEM_INFO: "Информация об элементе",
    CMD_TRACK_NOTE: "Отслеживать заметку",
    CMD_UNTRACK_NOTE: "Не отслеживать заметку",
    CMD_RESCHEDULE: "Перепланировать",
    CMD_POSTPONE_CARDS: "Отложить карточки",
    CMD_POSTPONE_NOTES: "Отложить заметки",
    CMD_POSTPONE_ALL: "Отложить всё",
    CMD_POSTPONE_NOTE_MANUAL: "Отложить эту заметку на x дней",
    CMD_POSTPONE_CARDS_MANUAL: "Отложить карточки в этой заметке на x дней",
    CMD_BUILD_QUEUE: "Построить очередь",
    CMD_REVIEW: "Изучать",
    CMD_PRINT_VIEW_STATE: "Вывести состояние вида",
    CMD_PRINT_EPHEMERAL_STATE: "Вывести временное состояние",
    CMD_CLEAR_QUEUE: "Очистить очередь",
    CMD_QUEUE_ALL: "Добавить всё в очередь",
    CMD_PRINT_DATA: "Вывести данные",
    CMD_UPDATE_ITEMS: "Обновить элементы",
    CMD_INPUT_POSITIVE_NUMBER: "Пожалуйста, введите положительное число",
    CMD_NOTE_POSTPONED: "Эта заметка была отложена на ${days} дней",

    // anki.ts
    ANKI_ALGORITHM_DESC: 'Алгоритм, используемый для интервального повторения. Для получения дополнительной информации см. <a href="https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html">алгоритм Anki</a>.',
    STARTING_EASE: "Начальная лёгкость",
    STARTING_EASE_DESC: "Начальная лёгкость, присваиваемая элементу.",
    STARTING_EASE_ERROR: "Начальная лёгкость должна быть положительным числом.",
    STARTING_EASE_WARNING: "Начальная лёгкость менее 1.3 не рекомендуется.",
    EASY_BONUS_ANKI: "Бонус за лёгкость",
    EASY_BONUS_ANKI_DESC: "Бонусный множитель для элементов, отмеченных как лёгкие.",
    EASY_BONUS_ANKI_ERROR: "Бонус за лёгкость должен быть числом больше или равным 1.",
    LAPSE_INTERVAL_MODIFIER: "Модификатор интервала при ошибке",
    LAPSE_INTERVAL_MODIFIER_DESC: "Коэффициент для изменения интервала повторения, когда элемент отмечен как неправильный.",
    LAPSE_INTERVAL_ERROR: "Интервал при ошибке должен быть положительным числом.",
    GRADUATING_INTERVAL: "Интервал выпуска",
    GRADUATING_INTERVAL_DESC: "Интервал (в днях) до следующего повторения после отметки нового элемента как 'Хорошо'.",
    GRADUATING_INTERVAL_ERROR: "Интервал должен быть положительным числом.",
    EASY_INTERVAL: "Интервал для лёгких",
    EASY_INTERVAL_DESC: "Интервал (в днях) до следующего повторения после отметки нового элемента как 'Легко'.",
    EASY_INTERVAL_ERROR: "Интервал должен быть положительным числом.",

    // scheduling_default.ts
    DEFAULT_ALGORITHM_DESC: 'Алгоритм, используемый для интервального повторения. Для получения дополнительной информации см. <a href="https://www.stephenmwangi.com/obsidian-spaced-repetition/algorithms/">модифицированный алгоритм Anki</a>.',

    // supermemo.ts
    SM2_ALGORITHM_DESC: 'Алгоритм, используемый для интервального повторения. В настоящее время использует те же параметры, что и алгоритм Anki (отличается только метод обработки алгоритма). Для получения дополнительной информации см. <a href="https://www.supermemo.com/en/archives1990-2015/english/ol/sm2">алгоритм SM2</a>.',

    // fsrs.ts
    FSRS_ALGORITHM_DESC: 'Алгоритм, используемый для интервального повторения. Для получения дополнительной информации см. <a href="https://github.com/open-spaced-repetition/ts-fsrs">алгоритм FSRS</a>.',
    FSRS_W_PARAM_DESC: 'См. <a href="https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm">FSRS V6 Документацию</a> и <a href="https://open-spaced-repetition.github.io/anki_fsrs_visualizer">визуализацию параметров FSRS w</a> для настройки различных параметров.',

    POST_ISSUE_MODIFIED_PLUGIN: 'Сообщите о проблеме <a href="${issue_url}">здесь</a> касательно этого модифицированного sr-плагина с фоновым цветом для настроек.',

    // donation.ts
    DONATION_TEXT: "Это хобби-проект. Если он вам помогает, можете угостить меня напитком или чаем с пузырьками",

    // locationSetting.ts
    FOLDER_PLACEHOLDER: "Пример: папка1/папка2",
    SAVE_BUTTON: "Сохранить",
    LOCATION_CHANGE_FINISHED: "Изменение местоположения завершено.",
};
