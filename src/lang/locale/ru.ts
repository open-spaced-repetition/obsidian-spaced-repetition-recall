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
    REVIEW_NOTE_DIFFICULTY_CMD: "Изучить заметку как \"${difficulty}\"",
    REVIEW_ALL_CARDS: "Повторить все карточки во всех заметках",
    CRAM_ALL_CARDS: "Выбрать колоду для интенсивного повторения",
    REVIEW_CARDS_IN_NOTE: "Повторить карточки в этой заметке",
    CRAM_CARDS_IN_NOTE: "Зубрить карточки в этой заметке",
    VIEW_STATS: "Посмотреть статистику",
    OPEN_REVIEW_QUEUE_VIEW: "Открыть очередь повторения заметок на боковой панели",
    STATUS_BAR: "Повторение: ${dueNotesCount} заметок, ${dueFlashcardsCount} карточек",
    SYNC_TIME_TAKEN: "Время синхронизации ${t}мс",
    NOTE_IN_IGNORED_FOLDER: "Заметка сохранена в игнорируемой папке (проверьте настройки).",
    NOTE_IN_IGNORED_TAGS: "Заметка сохранена с игнорируемым тегом (проверьте настройки).",
    PLEASE_TAG_NOTE: "Пожалуйста, добавьте правильный тег к заметке для повторения (проверьте настройки).",
    RESPONSE_RECEIVED: "Ответ получен",
    NO_DECK_EXISTS: "Колода ${deckName} не существует",
    ALL_CAUGHT_UP: "Отлично! Вы справились со всеми повторениями!\nВремя изучить что-то новое:D",

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
    SETTINGS_HEADER: "Плагин Spaced Repetition Recall - Настройки",
    HELP: "Помощь",
    DEVELOPER: "Разработчик",
    GROUP_TAGS_FOLDERS: "Теги и Папки",
    GROUP_FLASHCARD_REVIEW: "Повторение карточек",
    GROUP_FLASHCARD_SEPARATORS: "Разделители карточек",
    GROUP_DATA_STORAGE: "Хранение данных планирования",
    GROUP_FLASHCARDS_NOTES: "Карточки и заметки",
    GROUP_CONTRIBUTING: "Участие в проекте",
    CHECK_WIKI: 'Для получения дополнительной информации посетите <a href="${wiki_url}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Посетите раздел <a href="${discussions_url}">обсуждений</a> для получения помощи, обратной связи и общих дискуссий.',
    GITHUB_ISSUES:
        'Создайте issue <a href="${issues_url}">здесь</a>, если у вас есть запрос на функцию или сообщение об ошибке.',
    GITHUB_SOURCE_CODE:
        'Исходный код проекта доступен на <a href="${github_project_url}">GitHub</a>',
    CODE_CONTRIBUTION_INFO:
        'Информация о <a href="${code_contribution_url}">вкладе в проекта</a>',
    TRANSLATION_CONTRIBUTION_INFO:
        'Информация о <a href="${translation_contribution_url}">переводе плагина</a> на ваш язык',
    PROJECT_CONTRIBUTIONS:
        'Создайте issue <a href="${issues_url}">здесь</a>, если у вас есть запрос на функцию или сообщение об ошибке',
    FOLDERS_TO_IGNORE: "Игнорируемые папки",
    FOLDERS_TO_IGNORE_DESC: `Введите пути папок, каждый на новой строке, например: Templates Meta/Scripts.
Обратите внимание, что эта настройка общая для карточек и заметок.`,
    TAGS_TO_IGNORE: "Игнорируемые теги",
    TAGS_TO_IGNORE_DESC: `Введите теги, разделённые новыми строками, например: #excalidraw.
Обратите внимание, что эта настройка общая для карточек и заметок.`,
    FLASHCARDS: "Карточки",
    FLASHCARD_EASY_LABEL: 'Текст кнопки "Легко"',
    FLASHCARD_GOOD_LABEL: 'Текст кнопки "Помню"',
    FLASHCARD_HARD_LABEL: 'Текст кнопки "Сложно"',
    FLASHCARD_EASY_DESC: 'Настроить ярлык для кнопки "Легко"',
    FLASHCARD_GOOD_DESC: 'Настроить ярлык для кнопки "Помню"',
    FLASHCARD_HARD_DESC: 'Настроить ярлык для кнопки "Сложно"',
    FLASHCARD_TAGS: "Теги карточек",
    FLASHCARD_TAGS_DESC:
        "Введите теги, разделённые пробелами или новыми строками, например: #flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "Конвертировать папки в колоды и подколоды?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "Это альтернатива указанным выше тегам карточек.",
    INLINE_SCHEDULING_COMMENTS: "Сохранять комментарий планирования в той же строке, что и последняя строка карточки?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "HTML комментарии не будут нарушать форматирование списка",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Скрывать родственные карточки до следующего дня?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Родственные карточки создаются из одного текста, например: закрытые карточки ([...])",
    MULTI_CLOZE: "Разрешить многострочные закрытые карточки?",
    MULTI_CLOZE_DESC: "Объединить новые/просроченные родственные закрытые в одну карточку.",
    SHOW_CARD_CONTEXT: "Показывать контекст в карточках (Во время повторения)?",
    SHOW_CARD_CONTEXT_DESC: "например: Заголовок > Подзаголовок 1 > Подподзаголовок > ... > Подподзаголовок",
    CARD_MODAL_HEIGHT_PERCENT: "Высота карточки в процентах",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Установите 100% на мобильных устройствах, если нужно просматривать большие изображения",
    RESET_DEFAULT: "Сбросить по умолчанию",
    CARD_MODAL_WIDTH_PERCENT: "Ширина карточки в процентах",
    RANDOMIZE_CARD_ORDER: "Случайный порядок карточек при изучении?",
    REVIEW_CARD_ORDER_WITHIN_DECK: "Порядок карточек в колоде при изучении",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL:
        "Последовательно в колоде (сначала все новые карточки)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL:
        "Последовательно в колоде (сначала все просроченные карточки)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "Случайно в колоде (сначала все новые карточки)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "Случайно в колоде (сначала все просроченные карточки)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "Случайные колоды и карточки",
    REVIEW_DECK_ORDER: "Порядок колод при повторении",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL:
        "Последовательно (после завершения предыдущей колоды)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM:
        "Случайно (после завершения предыдущей колоды)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "Случайные карточка из случайной колоды",
    DISABLE_CLOZE_CARDS: "Отключить закрытые карточки ([...])?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Конвертировать ==выделения== в пропуски?",
    CONVERT_BOLD_TEXT_TO_CLOZES: "Конвертировать **жирный текст** в пропуски?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES:
        "Конвертировать {{фигурные скобки}} в пропуски?",
    INLINE_CARDS_SEPARATOR: "Разделитель для однострочных карточек",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Внимание: после изменения этого параметра вам потребуется вручную изменить разделители в существующих карточках.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Разделитель для обратных однострочных карточек",
    MULTILINE_CARDS_SEPARATOR: "Разделитель для многострочных карточек",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Разделитель для обратных многострочных карточек",
    MULTILINE_CARDS_END_MARKER: "Символы, обозначающие конец закрытых и многострочных карточек",
    NOTES: "Заметки",
    REVIEW_PANE_ON_STARTUP: "Открывать панель повторения заметок при запуске",
    TAGS_TO_REVIEW: "Теги для изучения",
    TAGS_TO_REVIEW_DESC:
        "Введите теги, разделённые пробелами или новыми строками, например: #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Открывать случайную заметку для повторения",
    OPEN_RANDOM_NOTE_DESC: "При отключении заметки будут отсортированы по важности (PageRank).",
    AUTO_NEXT_NOTE: "Автоматически открывать следующую заметку после повторения",
    DISABLE_FILE_MENU_REVIEW_OPTIONS:
        "Отключить опции повторения в меню файла, например: Повторение: Легко Помню Сложно",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "После отключения вы сможете использовать горячие клавиши для повторения. Перезапустите Obsidian для применения изменений.",
    MAX_N_DAYS_REVIEW_QUEUE: "Максимальное количество дней для отображения на панели справа",
    MIN_ONE_DAY: "Количество дней должно быть не менее 1.",
    VALID_NUMBER_WARNING: "Пожалуйста, введите корректное число.",
    UI_PREFERENCES: "Настройки пользовательского интерфейса",
    OPEN_AS_TAB: "Режим вкладки",
    OPEN_AS_TAB_DESC:
        "Если включено, интерфейс повторения откроется во вкладке, если отключено — в модальном окне.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE:
        "Дерево колод должно изначально отображаться развёрнутым",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Отключите этот параметр, чтобы свернуть вложенные колоды в одной карточке. Полезно, если у вас есть карточки, принадлежащие многим колодам в одном файле.",
    ALGORITHM: "Алгоритм",
    CHECK_ALGORITHM_WIKI:
        'Для получения дополнительной информации см. <a href="${algo_url}">реализацию алгоритма</a>.',
    BASE_EASE: "Базовая лёгкость",
    BASE_EASE_DESC: "минимум = 130, рекомендуется около 250.",
    BASE_EASE_MIN_WARNING: "Базовая лёгкость должна быть не менее 130.",
    LAPSE_INTERVAL_CHANGE:
        'Изменение интервала при отметке карточки/заметки как "Сложно"',
    LAPSE_INTERVAL_CHANGE_DESC: "новыйИнтервал = старыйИнтервал * изменениеИнтервала / 100.",
    EASY_BONUS: "Бонус за \"Легко\"",
    EASY_BONUS_DESC:
        "Бонус за \"Легко\" устанавливает разницу в интервалах между ответами \"Помню\" и \"Легко\" для карточки/заметки (минимум = 100%).",
    EASY_BONUS_MIN_WARNING: 'Бонус за "Легко" должен быть не менее 100.',
    MAX_INTERVAL: "Максимальный интервал в днях",
    MAX_INTERVAL_DESC:
        "Устанавливает верхний предел интервала повторения (по умолчанию = 100 лет).",
    MAX_INTERVAL_MIN_WARNING: "Максимальный интервал должен быть не менее 1 дня.",
    MAX_LINK_CONTRIB: "Максимальный вклад ссылок",
    MAX_LINK_CONTRIB_DESC:
        "Максимальный вклад взвешенной \"Лёгкости\" связанных заметок в исходную \"Лёгкость\".",
    FUZZING: "Размытие",
    FUZZING_DESC:
        "При включении добавляет небольшую случайную задержку к новому времени интервала, чтобы предотвратить скопление карточек и их повторение в один день.",
    SWITCH_SHORT_TERM: "Переключиться на краткосрочное планирование",
    SWITCH_SHORT_TERM_DESC:
        "При отключении позволяет пользователю пропустить краткосрочное планирование и сразу перейти к долгосрочному.",
    LOGGING: "Журналирование",
    DISPLAY_DEBUG_INFO: "Отображать отладочную информацию в консоли разработчика",
    DISPLAY_PARSER_DEBUG_INFO:
        "Отображать отладочную информацию парсера в консоли разработчика",

    DATA_LOC: "Расположение данных",
    DATA_LOC_DESC: "Где хранить файл данных для элементов интервального повторения.",
    DATA_FOLDER: "Папка для `tracked_files.json`",
    NEW_PER_DAY: "Новых в день",
    NEW_PER_DAY_DESC: "Максимальное количество новых (неповторённых) заметок, добавляемых в очередь каждый день. Установите -1 для отсутствия ограничений.",
    NEW_PER_DAY_NAN: "Должно быть числом",
    NEW_PER_DAY_NEG: "Новых в день должно быть -1 или больше.",
    REPEAT_ITEMS: "Повторять элементы",
    REPEAT_ITEMS_DESC: "Должны ли элементы, отмеченные как неправильные, повторяться до правильного ответа?",
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

    FLASHCARD_AGAIN_LABEL: "Текст кнопки \"Снова\"",
    FLASHCARD_BLACKOUT_LABEL: "Текст кнопки \"Забыл\"",
    FLASHCARD_INCORRECT_LABEL: "Текст кнопки \"Неправильно\"",
    "FLASHCARD_INCORRECT (EASY)_LABEL": "Текст кнопки \"Неправильно (Легко)\"",
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
    INTERVALS_SUMMARY: "Средний интервал: ${avg}, Самый длинный интервал: ${longest}",
    EASES: "Прогресс Изучения",
    EASES_SUMMARY: "Средняя лёгкость: ${avgEase}",
    CARD_TYPES: "Типы карточек",
    CARD_TYPES_DESC: "Включая скрытые карточки, если таковые имеются",
    CARD_TYPE_NEW: "Новых",
    CARD_TYPE_YOUNG: "Повторяемых",
    CARD_TYPE_MATURE: "Изученных",
    CARD_TYPES_SUMMARY: "Всего карточек: ${totalCardsCount}",
    REVIEWED_TODAY: "Повторено сегодня",
    REVIEWED_TODAY_DESC: "Количество карточек/заметок, которые вы повторили сегодня",
    NEW_LEARNED: "Новых изучено",
    DUE_REVIEWED: "Просроченных повторено",
    REVIEWED_TODAY_SUMMARY: "Всего повторено сегодня: ${totalreviewedCount}",
    DATE: "Дата",

    // cardBlockIDSetting.ts
    CARD_BLOCK_ID: "ID блока карточки",
    CARD_BLOCK_ID_DESC: "Использовать ID блока карточки вместо номера строки и хеша текста.<br><b>Если установлено True, ID блока будет добавлен после текста карточки. И ID блока останется в заметке после сброса на False.</b>",
    CARD_BLOCK_ID_CONFIRM: "**Если установлено True, ID блока будет добавлен после текста карточки. И ID блока останется в заметке после сброса на False.** \n\nРекомендация: сделайте резервную копию вашего хранилища перед установкой True. Или попробуйте в песочнице.\n\nУстановка включения приведет к добавлению blockid ко всем карточкам, даже если позже отключить, добавленные blockid останутся в заметке и не будут удалены.\n\nРекомендуется **сначала сделать резервную копию** хранилища заметок или попробовать в песочнице.",

    // mixQueueSetting.ts
    MIX_QUEUE: "Смешанная очередь",
    MIX_QUEUE_DESC: "Смешивать просроченные и новые заметки при повторении. **Первый** слайдер для общего количества, второй слайдер для количества просроченных. А количество новых = (общее - просроченные).",

    // trackSetting.ts
    UNTRACK_WITH_REVIEWTAG_DESC: "При удалении тега повторения из заметки синхронно выполнять операцию untrack, чтобы больше не повторять эту заметку<br><b>true</b>: синхронная операция untrack;<br><b>false</b>: после удаления тега повторения нужно снова выполнить untrack, чтобы не повторять эту заметку. (как в предыдущей версии)",

    // dataLocation.ts
    DATA_LOCATION_PLUGIN_FOLDER: "В папке плагина",
    DATA_LOCATION_ROOT_FOLDER: "В папке хранилища",
    DATA_LOCATION_SPECIFIED_FOLDER: "В указанной ниже папке",
    DATA_LOCATION_SAVE_ON_NOTE_FILE: "Сохранить в файле заметки",

    // fsrs.ts
    FSRS_ALGORITHM_DESC: "Алгоритм, используемый для интервального повторения. Для получения дополнительной информации см. <a href=\"https://github.com/open-spaced-repetition/ts-fsrs\">алгоритм FSRS</a>.",
    FSRS_W_PARAM_DESC: "Смотрите <a href=\"https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm\">FSRS V6 WIKI</a> и <a href=\"https://open-spaced-repetition.github.io/anki_fsrs_visualizer\">визуализацию параметров FSRS w</a> для настройки различных параметров.",

    // anki.ts
    ANKI_ALGORITHM_DESC: "Алгоритм, используемый для интервального повторения. Для получения дополнительной информации см. <a href=\"https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html\">алгоритм Anki</a>.",
    STARTING_EASE: "Начальная лёгкость",
    STARTING_EASE_DESC: "Начальная лёгкость, присваиваемая элементу.",
    STARTING_EASE_ERROR: "Начальная лёгкость должна быть положительным числом.",
    STARTING_EASE_WARNING: "Начальная лёгкость менее 1.3 не рекомендуется.",
    EASY_BONUS_ANKI: "Бонус за \"Легко\"",
    EASY_BONUS_ANKI_DESC: "Бонусный множитель для элементов, отмеченных как легкие.",
    EASY_BONUS_ANKI_ERROR: "Бонус за \"Легко\" должен быть числом больше или равным 1.",
    LAPSE_INTERVAL_MODIFIER: "Модификатор интервала провала",
    LAPSE_INTERVAL_MODIFIER_DESC: "Коэффициент для изменения интервала повторения, когда элемент отмечен как неправильный.",
    LAPSE_INTERVAL_ERROR: "Интервал провала должен быть положительным числом.",
    GRADUATING_INTERVAL: "Интервал выпуска",
    GRADUATING_INTERVAL_DESC: "Интервал (в днях) до следующего повторения после отметки нового элемента как 'Хорошо'.",
    GRADUATING_INTERVAL_ERROR: "Интервал должен быть положительным числом.",
    EASY_INTERVAL: "Интервал \"Легко\"",
    EASY_INTERVAL_DESC: "Интервал (в днях) до следующего повторения после отметки нового элемента как 'Легко'.",
    EASY_INTERVAL_ERROR: "Интервал должен быть положительным числом.",

    // scheduling_default.ts
    DEFAULT_ALGORITHM_DESC: "Алгоритм, используемый для интервального повторения. Для получения дополнительной информации см. <a href=\"https://www.stephenmwangi.com/obsidian-spaced-repetition/algorithms/\">модифицированный алгоритм Anki</a>.",

    // supermemo.ts
    SM2_ALGORITHM_DESC: "Алгоритм, используемый для интервального повторения. В настоящее время использует те же параметры, что и алгоритм Anki (отличается только способ обработки алгоритма). Для получения дополнительной информации см. <a href=\"https://www.supermemo.com/en/archives1990-2015/english/ol/sm2\">алгоритм SM2</a>.",

    // info.ts
    ITEM_INFO_TITLE: "Информация об элементе",
    CARDS_IN_NOTE: "Карточки в этой заметке",
    SAVE_ITEM_INFO: "Сохранить",
    SAVE_ITEM_INFO_TOOLTIP: "сохранить только информацию об элементе текущей заметки",
    CLOSE_ITEM_INFO: "Закрыть",
    LINE_NO: "НомерСтроки:",
    NEXT_REVIEW: "СледующееПовторение:",
    NEW_CARD: "НоваяКарточка",
    ITEM_DATA_INFO: "Информация о данных элемента",

    // locationSetting.ts
    DATA_LOCATION_WARNING_TO_NOTE: "ОСТОРОЖНО!!!\nЕсли вы подтвердите это, все ваши данные планирования из `tracked_files.json` будут преобразованы в заметку, что изменит множество ваших файлов заметок одновременно.\nПожалуйста, убедитесь, что настройки тегов карточек и заметок соответствуют тому, что вы используете.",
    DATA_LOCATION_WARNING_OTHER_ALGO: "если вы хотите сохранить данные в файле заметки, вы **должны** использовать алгоритм по умолчанию.",
    DATA_LOCATION_WARNING_TO_TRACKED: "ОСТОРОЖНО!!!\nЕсли вы подтвердите это, все ваши данные планирования из заметки (которые будут удалены одновременно) будут преобразованы В `tracked_files.json`.",

    // settings.ts - additional strings
    POST_ISSUE_MODIFIED_PLUGIN: "Создать <a href=\"${issue_url}\">issue</a> об этом модифицированном sr-плагине с фоновым цветом для настроек.",

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
    CMD_REVIEW: "Повторение",
    CMD_PRINT_VIEW_STATE: "Вывести состояние вида",
    CMD_PRINT_EPHEMERAL_STATE: "Вывести эфемерное состояние",
    CMD_CLEAR_QUEUE: "Очистить очередь",
    CMD_QUEUE_ALL: "Поставить всё в очередь",
    CMD_PRINT_DATA: "Вывести данные",
    CMD_UPDATE_ITEMS: "Обновить элементы",
    CMD_INPUT_POSITIVE_NUMBER: "пожалуйста, введите положительное число",
    CMD_NOTE_POSTPONED: "Эта заметка была отложена на ${days} дней",

    // trackFileEvents.ts
    MENU_TRACK_ALL_NOTES: "Отслеживать все заметки",
    MENU_UNTRACK_ALL_NOTES: "Не отслеживать все заметки",
    MENU_TRACK_NOTE: "Отслеживать заметку",
    MENU_UNTRACK_NOTE: "Не отслеживать заметку",

    // data.ts
    DATA_TAGGED_FILE_CANT_UNTRACK: "это файл с тегом, нельзя отменить отслеживание таким образом. Вы можете удалить тег #review в файле заметки.",
    DATA_UNTRACKED_ITEMS: "Отменено отслеживание ${numItems} элементов${nulrstr}",
    DATA_UNABLE_TO_SAVE: "Невозможно сохранить файл данных!",
    DATA_FOLDER_UNTRACKED: "В папке ${folderPath} больше не отслеживается ${totalRemoved} файлов",
    DATA_ADDED_REMOVED_ITEMS: "Добавлено ${totalAdded} новых элементов, удалено ${totalRemoved} элементов.",
    DATA_ADDED_REMOVED_ITEMS_SHORT: "Добавлено ${added} новых элементов, удалено ${removed} элементов.",
    DATA_FILE_UPDATE: "${filePath} обновлен - строка: ${lineNo}\nДобавлено: ${added} новых элементов карточек, удалено ${removed} элементов карточек.",
    DATA_ALL_ITEMS_UPDATED: "все элементы были обновлены.",
};
