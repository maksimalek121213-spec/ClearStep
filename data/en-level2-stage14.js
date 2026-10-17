/* General English, Level 2: modules 18-19. Original bilingual lessons and questions. */
(function () {
  var course = COURSES.find(function (c) { return c.id === "en-core"; });
  if (!course) {
    course = { id: "en-core", title: { en: "General English: Core Skills", ru: "Общий английский: основные навыки" }, subtitle: { en: "Level 2 grammar and language skills", ru: "Грамматика и языковые навыки уровня 2" }, section: "EN", units: [] };
    COURSES.push(course);
  }
  var modules = [
    {
      id: "m18", domain: "General English", skill: "Modal verbs and conditional sentences",
      title: { en: "Module 18: Modal Verbs and Conditional Sentences", ru: "Модуль 18: Модальные глаголы и условные предложения" },
      objectives: { en: ["Use modals for ability, advice, obligation, permission, and possibility", "Choose zero, first, second, or third conditional forms", "Use modal perfect forms to discuss past possibility and obligation"], ru: ["Использовать модальные глаголы для способности, совета, обязанности, разрешения и вероятности", "Выбирать формы условных предложений нулевого, первого, второго и третьего типов", "Использовать модальные Perfect-формы для обсуждения прошлых возможностей и обязанностей"] },
      lesson: {
        summary: { en: "Modal verbs add meaning such as ability, permission, advice, necessity, or probability. A modal is followed by the base verb without to (can go, should study); have to and ought to are common exceptions. Conditionals connect a condition to a result: zero conditional for general truths, first for real future possibilities, second for unreal or unlikely present/future situations, and third for unreal past situations.", ru: "Модальные глаголы выражают способность, разрешение, совет, необходимость или вероятность. После модального глагола обычно следует начальная форма без to (can go, should study); have to и ought to — распространённые исключения. Условные конструкции связывают условие и результат: нулевой тип — общие истины, первый — реальные возможности в будущем, второй — нереальные или маловероятные ситуации сейчас/в будущем, третий — нереальные ситуации в прошлом." },
        rules: [
          { t: { en: "Common modals", ru: "Основные модальные глаголы" }, d: { en: "Can/could show ability or possibility; may/might show permission or possibility; should/ought to give advice; must expresses strong obligation or deduction. Mustn't means prohibited, while don't have to means unnecessary.", ru: "Can/could выражают способность или возможность; may/might — разрешение или вероятность; should/ought to — совет; must — строгую обязанность или логический вывод. Mustn't означает запрет, а don't have to — отсутствие необходимости." } },
          { t: { en: "Conditional patterns", ru: "Формы условных предложений" }, d: { en: "Zero: if + present, present. First: if + present, will + base verb. Second: if + past, would + base verb. Third: if + past perfect, would have + past participle. Do not normally put will in the if-clause.", ru: "Нулевой тип: if + Present, Present. Первый: if + Present, will + начальная форма. Второй: if + Past, would + начальная форма. Третий: if + Past Perfect, would have + третья форма. Обычно не ставьте will в придаточной части с if." } },
          { t: { en: "Modal perfect", ru: "Модальный Perfect" }, d: { en: "Modal + have + past participle looks back: might have missed (possible), must have forgotten (strong deduction), should have called (past advice/regret).", ru: "Модальный глагол + have + третья форма относится к прошлому: might have missed (возможно, пропустил), must have forgotten (вероятно, забыл), should have called (следовало позвонить)." } }
        ],
        examples: [
          { p: "If the weather is clear tomorrow, we ___ (watch) the meteor shower.", s: { en: "If the weather is clear tomorrow, we will watch it. This is a real future possibility: present simple in the if-clause and will in the result.", ru: "If the weather is clear tomorrow, we will watch it. Это реальная возможность в будущем: Present Simple в части с if и will в результате." } },
          { p: "If I ___ (know) her number, I would call her.", s: { en: "Use knew in the if-clause. The second conditional uses past simple for an unreal present situation and would + base verb for its result.", ru: "В части с if используем knew. Во втором типе Past Simple обозначает нереальную ситуацию сейчас, а результат строится с would + начальная форма." } },
          { p: "You ___ have told us earlier; we could have helped.", s: { en: "Should have told expresses that telling us was the right action, but it did not happen.", ru: "Should have told означает, что правильным действием было сообщить нам, но этого не произошло." } }
        ],
        mistakes: [
          { en: "Mustn't and don't have to are not interchangeable: prohibition vs. no necessity.", ru: "Mustn't и don't have to не взаимозаменяемы: запрет и отсутствие необходимости." },
          { en: "Using will after if in a standard first conditional: use If it rains, we will stay home.", ru: "Ставить will после if в стандартном первом типе: правильно If it rains, we will stay home." },
          { en: "Adding to after most modals: say can swim, not can to swim.", ru: "Добавлять to после большинства модальных глаголов: can swim, а не can to swim." }
        ],
        recap: { en: "Identify the speaker's meaning before choosing a modal. For a conditional, decide whether the situation is general, real future, unreal present/future, or unreal past.", ru: "Сначала определите смысл, затем выбирайте модальный глагол. Для условной конструкции решите, является ли ситуация общей, реальной будущей, нереальной настоящей/будущей или нереальной прошлой." }
      },
      questions: [
        ["You ___ wear safety glasses in the laboratory; it is a strict rule.",["must","might","could","would"],0,"Easy","Obligation"],
        ["You ___ bring lunch today; the school is providing it.",["must","don't have to","mustn't","should"],1,"Easy","Necessity"],
        ["If it rains tomorrow, we ___ the match indoors.",["played","would play","will play","had played"],2,"Easy","First conditional"],
        ["If I had more free time, I ___ another language.",["learn","will learn","had learned","would learn"],3,"Easy","Second conditional"],
        ["The lights are on and I can hear music. They ___ be home.",["must","shouldn't","would","might have"],0,"Medium","Deduction"],
        ["If he ___ his alarm, he would not have missed the bus.",["sets","would set","had set","has set"],2,"Medium","Third conditional"],
        ["You ___ save a copy before editing the file; it is good advice.",["should","mustn't","couldn't","might"],0,"Medium","Advice"],
        ["If water reaches 100°C at sea level, it ___.",["will boil","would boil","boiled","boils"],3,"Medium","Zero conditional"],
        ["Employees ___ share their passwords; company policy forbids it.",["don't have to","could","would","mustn't"],3,"Medium","Prohibition"],
        ["If Maya had taken the earlier train, she ___ here now.",["will be","would be","would have been","is"],1,"Hard","Mixed conditional"],
        ["The package is not here. The courier ___ it at the wrong address.",["should deliver","might have delivered","must deliver","would deliver"],1,"Hard","Modal perfect"],
        ["You can borrow my notes ___ you return them tomorrow.",["although","unless","provided that","despite"],2,"Hard","Condition link" ]
      ]
    },
    {
      id: "m19", domain: "General English", skill: "Passive voice and reported speech",
      title: { en: "Module 19: Passive Voice and Reported Speech", ru: "Модуль 19: Страдательный залог и косвенная речь" },
      objectives: { en: ["Form passive sentences with be + past participle", "Choose active or passive voice based on focus and known agents", "Report statements and questions with accurate tense, pronoun, and word order changes"], ru: ["Строить пассивные предложения с be + третья форма", "Выбирать активный или пассивный залог в зависимости от фокуса и известности деятеля", "Передавать утверждения и вопросы в косвенной речи, меняя время, местоимения и порядок слов"] },
      lesson: {
        summary: { en: "Use the passive when the receiver of an action matters more than the doer, or when the doer is unknown. Form it with the correct tense of be + past participle: The samples were tested. Reported speech tells what someone said without quoting the exact words. When the reporting verb is in the past, the tense often moves one step back; pronouns and time/place words may also change. Reported questions use statement word order and no question mark inside the clause.", ru: "Пассивный залог используется, когда важнее объект действия, чем исполнитель, или исполнитель неизвестен. Он строится из нужной формы be + третья форма: The samples were tested. Косвенная речь передаёт чужие слова без точной цитаты. Если глагол сообщения стоит в прошлом, время часто сдвигается на шаг назад; также могут измениться местоимения и указатели времени/места. В косвенных вопросах используется порядок слов утверждения." },
        rules: [
          { t: { en: "Passive form", ru: "Форма пассива" }, d: { en: "Object + be in the required tense + past participle. Keep the tense on be: writes → is written; wrote → was written; will write → will be written. Add by + agent only when useful.", ru: "Дополнение + be в нужном времени + третья форма. Время выражается через be: writes → is written; wrote → was written; will write → will be written. Исполнителя с by добавляйте, только если он важен." } },
          { t: { en: "Reported statements", ru: "Косвенные утверждения" }, d: { en: "Use say/tell + (that) + clause. With a past reporting verb, present often shifts to past, will to would, and present perfect to past perfect. Do not backshift when the statement is still true or the context makes the timing clear.", ru: "Используйте say/tell + (that) + предложение. После глагола сообщения в прошлом Present часто сдвигается в Past, will — в would, Present Perfect — в Past Perfect. Не обязательно сдвигать время, если утверждение всё ещё верно или контекст ясно задаёт время." } },
          { t: { en: "Reported questions", ru: "Косвенные вопросы" }, d: { en: "Use ask + if/whether for yes/no questions or keep the question word. Use subject-before-verb order: She asked where I lived (not where did I live).", ru: "Используйте ask + if/whether для вопросов да/нет или сохраните вопросительное слово. Порядок слов — подлежащее перед глаголом: She asked where I lived, а не where did I live." } }
        ],
        examples: [
          { p: "Active: The engineers tested the bridge in May. Rewrite to focus on the bridge.", s: { en: "The bridge was tested in May (by the engineers). The object becomes the subject; was tested preserves past simple.", ru: "The bridge was tested in May (by the engineers). Дополнение становится подлежащим, а was tested сохраняет Past Simple." } },
          { p: "Direct: Luis said, “I am preparing the charts.” Report the statement later.", s: { en: "Luis said (that) he was preparing the charts. I changes to he, and am preparing shifts to was preparing after said.", ru: "Luis said (that) he was preparing the charts. I меняется на he, а am preparing после said сдвигается в was preparing." } },
          { p: "Direct: “Where do you store the files?” Nina asked me.", s: { en: "Nina asked me where I stored the files. Keep where, remove do, and use statement word order.", ru: "Nina asked me where I stored the files. Сохраняем where, убираем do и используем порядок слов утверждения." } }
        ],
        mistakes: [
          { en: "Leaving out be in a passive: the report was written, not the report written.", ru: "Пропускать be в пассиве: the report was written, а не the report written." },
          { en: "Keeping question inversion in reported questions: say asked where she was, not asked where was she.", ru: "Сохранять инверсию в косвенном вопросе: asked where she was, а не asked where was she." },
          { en: "Changing every tense mechanically: check whether the statement remains true and whether the reporting verb is past.", ru: "Механически менять каждое время: проверьте, остаётся ли утверждение верным и стоит ли глагол сообщения в прошлом." }
        ],
        recap: { en: "Passive = be + past participle. Reported clauses use statement word order; adjust tense and reference words to the reporting context.", ru: "Пассив = be + третья форма. В косвенной речи используйте порядок слов утверждения и меняйте время и указатели с учётом контекста." }
      },
      questions: [
        ["The new library ___ in 2022.",["was opened","opened","has opening","is open"],0,"Easy","Past passive"],
        ["The final results ___ tomorrow.",["announce","will announce","will be announced","were announced"],2,"Easy","Future passive"],
        ["The instructions ___ in three languages.",["writes","are written","wrote","has writing"],1,"Easy","Present passive"],
        ["Direct: Omar said, “I am tired.” Reported: Omar said that he ___ tired.",["is","has been","will be","was"],3,"Easy","Backshift"],
        ["The painting ___ by a local artist last year.",["was restored","restored","has restore","is restoring"],0,"Medium","Passive with agent"],
        ["All applications must ___ by Friday.",["submit","submitted","be submitting","be submitted"],3,"Medium","Modal passive"],
        ["Direct: “I will call you,” Maya said. Maya said that she ___ call me.",["will","has","had","would"],3,"Medium","Reported future"],
        ["Direct: “Where does the bus stop?” he asked. He asked where the bus ___.",["does stop","did stop","stops","stop"],2,"Medium","Reported question"],
        ["The road ___ when the storm began, so drivers used another route.",["was being repaired","repaired","has repaired","is repair"],0,"Medium","Past continuous passive"],
        ["Direct: “Have you finished the experiment?” the teacher asked. The teacher asked whether we ___ the experiment.",["finished","have finished","had finished","will finish"],2,"Hard","Reported yes-no question"],
        ["The team ___ the data before the report was published.",["analyzed","had analyzed","has analyze","will analyze"],1,"Hard","Past perfect sequence"],
        ["Direct: “Do not touch the samples,” the guide told us. The guide warned us ___ the samples.",["to touch","not to touch","that not touch","don't touch"],1,"Hard","Reported command" ]
      ]
    }
  ];
  var explanations = {
    m18: [
      ["Must expresses a binding rule, and the sentence explicitly calls it strict.", "Must выражает обязательное правило, и в условии прямо сказано, что оно строгое.", "Match the modal to the strength of the obligation.", "Соотнесите модальный глагол со строгостью обязанности."],
      ["Don't have to means lunch is unnecessary to bring; mustn't would mean bringing it is forbidden.", "Don't have to означает, что обед приносить не нужно; mustn't означало бы запрет.", "Separate lack of necessity from prohibition.", "Различайте отсутствие необходимости и запрет."],
      ["A real possibility tomorrow uses present simple in the if-clause and will in the result: will play.", "Реальная возможность завтра требует Present Simple в части с if и will в результате: will play.", "Use the first conditional for a plausible future condition.", "Используйте первый тип для реального условия в будущем."],
      ["This is an unreal present situation, so the result uses would + base verb: would learn.", "Это нереальная ситуация сейчас, поэтому результат строится с would + начальная форма: would learn.", "Second conditional: if + past, would + base verb.", "Второй тип: if + Past, would + начальная форма."],
      ["The lights and music are strong evidence, so must be home is the best deduction.", "Свет и музыка дают веские основания для вывода, поэтому лучше всего подходит must be home.", "Must can express a confident conclusion from evidence.", "Must может выражать уверенный вывод на основе данных."],
      ["The missed bus is a past result of an unreal condition; the if-clause needs past perfect had set.", "Пропущенный автобус — прошлый результат нереального условия; в части с if нужен Past Perfect had set.", "Third conditional: if + past perfect, would have + participle.", "Третий тип: if + Past Perfect, would have + третья форма."],
      ["Should gives advice, and should is followed directly by the base verb save.", "Should выражает совет, после него сразу ставится начальная форма save.", "Most modals take a bare infinitive.", "После большинства модальных глаголов ставится инфинитив без to."],
      ["A general scientific fact uses present simple in both clauses: water boils.", "Для общего научного факта Present Simple используется в обеих частях: water boils.", "Use the zero conditional for general truths.", "Используйте нулевой тип для общих истин."],
      ["Company policy forbids sharing passwords, so mustn't expresses prohibition.", "Правила компании запрещают делиться паролями, поэтому mustn't выражает запрет.", "Mustn't means do not do it; don't have to means it is optional.", "Mustn't означает запрет; don't have to означает, что действие необязательно."],
      ["The unreal past action would change the present result, so would be here is a mixed conditional.", "Нереальное действие в прошлом изменило бы нынешний результат, поэтому would be here — смешанный тип.", "A past condition can have a present result.", "У прошлого условия может быть результат в настоящем."],
      ["The missing package allows a past possibility, so might have delivered is appropriate.", "Отсутствие посылки допускает предположение о прошлом, поэтому подходит might have delivered.", "Modal + have + participle expresses a possibility about the past.", "Модальный глагол + have + третья форма выражает вероятность в прошлом."],
      ["Provided that introduces a condition: borrowing is allowed on the condition that the notes are returned.", "Provided that вводит условие: конспекты можно взять, если их вернуть.", "Use provided that to mean only if this condition is met.", "Provided that означает «при условии, что»." ]
    ],
    m19: [
      ["The opening happened in 2022, so past be (was) + past participle (opened) forms the passive.", "Открытие произошло в 2022 году, поэтому пассив строится как was + третья форма opened.", "Keep the original tense when changing active to passive.", "При переходе в пассив сохраните исходное время."],
      ["The adverb tomorrow sets a future time; the passive form is will be + announced.", "Tomorrow указывает на будущее; пассивная форма — will be + announced.", "Future passive: will be + past participle.", "Будущий пассив: will be + третья форма."],
      ["Instructions receive the action, and a general present statement takes are written.", "Инструкции испытывают действие; для общего утверждения в настоящем используем are written.", "Present passive: am/is/are + past participle.", "Пассив в настоящем: am/is/are + третья форма."],
      ["After said in the past, am usually backshifts to was; I changes to he.", "После said в прошлом am обычно сдвигается в was; I меняется на he.", "Check both tense and pronoun changes in reported speech.", "В косвенной речи проверьте и время, и местоимение."],
      ["The painting receives the action in a finished past time: was restored.", "Картина является объектом действия в завершённом прошлом: was restored.", "Past passive: was/were + past participle.", "Пассив в прошедшем: was/were + третья форма."],
      ["A modal passive uses modal + be + past participle: must be submitted.", "Пассив после модального глагола строится как modal + be + третья форма: must be submitted.", "Keep be after the modal in a passive construction.", "В пассивной конструкции после модального глагола оставляйте be."],
      ["Will commonly backshifts to would after the past reporting verb said.", "После глагола сообщения said в прошлом will обычно сдвигается в would.", "Reported future: will → would when backshifting.", "Будущее в косвенной речи: will → would при сдвиге времени."],
      ["Reported questions use statement order: the bus stops, without do-support or inversion.", "В косвенном вопросе используется порядок слов утверждения: the bus stops, без do и инверсии.", "Keep the question word but remove direct-question word order.", "Сохраните вопросительное слово, но уберите порядок прямого вопроса."],
      ["The repair was in progress when the storm began, so past continuous passive was being repaired fits.", "Ремонт шёл, когда начался шторм, поэтому подходит Past Continuous Passive was being repaired.", "Past continuous passive: was/were being + past participle.", "Пассив длительного прошедшего: was/were being + третья форма."],
      ["The teacher asked about a completed action before the past reporting point; have finished backshifts to had finished.", "Учитель спросил о завершённом действии до момента сообщения; have finished сдвигается в had finished.", "A past reporting verb often shifts present perfect to past perfect.", "После глагола сообщения в прошлом Present Perfect часто сдвигается в Past Perfect."],
      ["The analysis was completed before publication, so had analyzed marks the earlier past action.", "Анализ завершили до публикации, поэтому had analyzed обозначает более раннее прошлое действие.", "Use past perfect to clarify which past event happened first.", "Используйте Past Perfect, чтобы показать, какое прошлое событие было раньше."],
      ["A negative reported command uses told + object + not to + verb: warned us not to touch.", "Отрицательная команда в косвенной речи строится told + дополнение + not to + глагол: warned us not to touch.", "Report commands with to or not to + base verb.", "Передавайте команды с помощью to или not to + начальная форма." ]
    ]
  };
  modules.forEach(function (m) {
    if (course.units.some(function (u) { return u.id === m.id; })) return;
    var questions = m.questions;
    delete m.questions;
    course.units.push(m);
    questions.forEach(function (row, i) {
      var q = row[0], options = row[1], correct = row[2], difficulty = row[3], skill = row[4];
      var ex = explanations[m.id][i];
      QUESTION_BANK.push({ id: 1061 + (m.id === "m19" ? 12 : 0) + i, section: "EN", unitId: m.id, domain: "General English", skill: skill, difficulty: difficulty, type: "mc", q: q, o: options, c: correct,
        e: ex[0], e_ru: ex[1], t: ex[2], t_ru: ex[3] });
    });
  });
})();
