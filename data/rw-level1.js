/* SAT Reading & Writing, Level 1: modules 9-10 (original material). Loaded before app.js. */
(function () {
 var course = COURSES.find(function (c) { return c.id === "rw-sat"; });
 course.units.push(
  {
   "id": "m09",
   "domain": "Craft and Structure",
   "skill": "Words in context and word families",
   "title": {
    "en": "Module 9: Vocabulary in Context and Word Families",
    "ru": "Модуль 9: Лексика в контексте и семьи слов"
   },
   "objectives": {
    "en": [
     "Use the sentence around a word to work out its meaning",
     "Choose the word that fits the logic and tone of a sentence",
     "Recognise word families and choose the correct word form"
    ],
    "ru": [
     "Использовать окружающее предложение, чтобы понять значение слова",
     "Выбирать слово, которое подходит по логике и тону предложения",
     "Узнавать семьи слов и выбирать правильную форму слова"
    ]
   },
   "lesson": {
    "summary": {
     "en": "Many words have more than one meaning, so the context decides which one is meant. Look for clues: a definition, a contrast (but, although, unlike), an example or a result. A word family groups words built from one root, such as decide, decision, decisive and decisively. The ending shows the part of speech, and the sentence tells you which form is needed.",
     "ru": "У многих слов несколько значений, поэтому значение определяет контекст. Ищите подсказки: определение, контраст (but, although, unlike), пример или следствие. Семья слов объединяет слова с одним корнем, например decide, decision, decisive и decisively. Окончание показывает часть речи, а предложение подсказывает, какая форма нужна."
    },
    "rules": [
     {
      "t": {
       "en": "Context clues",
       "ru": "Подсказки контекста"
      },
      "d": {
       "en": "Read the whole sentence. Definitions, examples, synonyms, contrasts and results all point to the meaning.",
       "ru": "Прочитайте предложение целиком. Определения, примеры, синонимы, контрасты и следствия подсказывают значение."
      }
     },
     {
      "t": {
       "en": "Several meanings",
       "ru": "Несколько значений"
      },
      "d": {
       "en": "A common word can have an unusual meaning: in She runs a bakery, runs means manages, not moves fast. Choose the meaning that fits.",
       "ru": "У обычного слова может быть необычное значение: в She runs a bakery слово runs значит «управляет», а не «бежит». Выбирайте подходящее значение."
      }
     },
     {
      "t": {
       "en": "Contrast words",
       "ru": "Слова контраста"
      },
      "d": {
       "en": "But, although, however and unlike signal an opposite: Unlike her talkative brother, Mia is reserved (quiet).",
       "ru": "But, although, however и unlike указывают на противоположное: Unlike her talkative brother, Mia is reserved (молчаливая)."
      }
     },
     {
      "t": {
       "en": "Tone and precision",
       "ru": "Тон и точность"
      },
      "d": {
       "en": "The right word fits meaning, strength and tone. Hasty suggests carelessness; prompt means quick and effective.",
       "ru": "Нужное слово подходит по смыслу, силе и тону. Hasty намекает на небрежность, а prompt значит «быстрый и эффективный»."
      }
     },
     {
      "t": {
       "en": "Word families",
       "ru": "Семьи слов"
      },
      "d": {
       "en": "Endings show the job: -tion, -ment, -ness make nouns (decision, movement, kindness); -ive, -ful, -ous make adjectives (decisive, helpful); -ly makes adverbs (decisively). After the, a, her or his use a noun; after a verb use an adverb.",
       "ru": "Окончания показывают роль: -tion, -ment, -ness образуют существительные (decision, movement, kindness); -ive, -ful, -ous — прилагательные (decisive, helpful); -ly — наречия (decisively). После the, a, her, his нужно существительное, а после глагола — наречие."
      }
     }
    ],
    "examples": [
     {
      "p": "The scientist's explanation was so lucid that even beginners understood it immediately.",
      "s": {
       "en": "Beginners understood immediately is the result, so lucid means clear. The pattern so ... that links a quality to its result.",
       "ru": "Новички поняли сразу — это следствие, поэтому lucid значит «ясный». Конструкция so ... that связывает качество с его результатом."
      }
     },
     {
      "p": "Unlike her talkative brother, Mia is reserved and rarely speaks first.",
      "s": {
       "en": "Unlike signals a contrast with talkative, so reserved means quiet and private.",
       "ru": "Unlike указывает на контраст со словом talkative, поэтому reserved значит «сдержанная, немногословная»."
      }
     },
     {
      "p": "The manager acted decisively and made a quick decision.",
      "s": {
       "en": "Decisively is an adverb describing the verb acted. Decision is a noun after the adjective quick.",
       "ru": "Decisively — наречие, оно описывает глагол acted. Decision — существительное после прилагательного quick."
      }
     }
    ],
    "mistakes": [
     {
      "en": "Choosing the most familiar meaning without checking: runs does not always mean moves fast.",
      "ru": "Выбор самого привычного значения без проверки: runs не всегда значит «бежит»."
     },
     {
      "en": "Ignoring contrast words and choosing a word that agrees instead of contrasts.",
      "ru": "Игнорирование слов контраста и выбор слова, которое согласуется, а не противопоставляется."
     },
     {
      "en": "Picking a word that sounds impressive but has the wrong strength or tone, such as catastrophe for a small delay.",
      "ru": "Выбор эффектного слова неподходящей силы или тона, например catastrophe для небольшой задержки."
     },
     {
      "en": "Wrong word form: a wise decide. Correct: a wise decision.",
      "ru": "Неверная форма слова: a wise decide. Верно: a wise decision."
     }
    ],
    "recap": {
     "en": "Read the whole sentence, find the clue, predict a meaning before looking at the options, and check that the word form fits its job.",
     "ru": "Прочитайте предложение целиком, найдите подсказку, предположите значение до просмотра вариантов и проверьте, что форма слова подходит по роли."
    }
   }
  },
  {
   "id": "m10",
   "domain": "Information and Ideas",
   "skill": "Main idea, key details and inferences",
   "title": {
    "en": "Module 10: Main Ideas, Key Details and Basic Inferences",
    "ru": "Модуль 10: Главная мысль, ключевые детали и простые выводы"
   },
   "objectives": {
    "en": [
     "State the main idea of a short text in one sentence",
     "Tell key details from minor ones and find details that support an idea",
     "Draw an inference that the text supports without going beyond it"
    ],
    "ru": [
     "Формулировать главную мысль короткого текста одним предложением",
     "Отличать ключевые детали от второстепенных и находить детали, поддерживающие мысль",
     "Делать вывод, который подтверждается текстом, не выходя за его рамки"
    ]
   },
   "lesson": {
    "summary": {
     "en": "The main idea is what the whole text is mostly about. Details support it with facts, examples or reasons. An inference is a conclusion that the text makes very likely without stating it directly. On the SAT the right answer is always supported by the text itself, so avoid choices that are too extreme, too narrow or not mentioned.",
     "ru": "Главная мысль — то, о чём в основном весь текст. Детали подтверждают её фактами, примерами или причинами. Вывод — заключение, которое текст делает очень вероятным, не говоря о нём прямо. На SAT правильный ответ всегда подтверждается самим текстом, поэтому избегайте вариантов, которые слишком категоричны, слишком узки или не упомянуты."
    },
    "rules": [
     {
      "t": {
       "en": "Main idea",
       "ru": "Главная мысль"
      },
      "d": {
       "en": "Ask: what point should I remember? The main idea covers the whole text, not one sentence. Check the first and last sentences and words such as however, but and so.",
       "ru": "Спросите: что стоит запомнить? Главная мысль охватывает весь текст, а не одно предложение. Проверьте первое и последнее предложения и слова however, but, so."
      }
     },
     {
      "t": {
       "en": "Key details",
       "ru": "Ключевые детали"
      },
      "d": {
       "en": "Details give facts, examples or reasons. A key detail directly supports the main idea; a minor detail is extra information.",
       "ru": "Детали дают факты, примеры или причины. Ключевая деталь напрямую поддерживает главную мысль, второстепенная — просто дополнительная информация."
      }
     },
     {
      "t": {
       "en": "Inference",
       "ru": "Вывод"
      },
      "d": {
       "en": "An inference is a logical step from what the text says: wet streets and umbrellas suggest rain. The clues must be in the text.",
       "ru": "Вывод — логический шаг от сказанного в тексте: мокрые улицы и зонты намекают на дождь. Подсказки должны быть в тексте."
      }
     },
     {
      "t": {
       "en": "Trap answers",
       "ru": "Ловушки"
      },
      "d": {
       "en": "Wrong choices are often too extreme (always, never, all), too narrow (one detail only), or true in real life but not in the text.",
       "ru": "Неверные варианты часто слишком категоричны (always, never, all), слишком узки (одна деталь) или верны в жизни, но не в тексте."
      }
     },
     {
      "t": {
       "en": "Prove it",
       "ru": "Докажите"
      },
      "d": {
       "en": "Before you choose, find the words in the text that support your answer. If you cannot, the choice is probably wrong.",
       "ru": "Прежде чем выбрать, найдите в тексте слова, подтверждающие ваш ответ. Если не нашли, вариант, скорее всего, неверный."
      }
     }
    ],
    "examples": [
     {
      "p": "Honeybees visit hundreds of flowers each day. As they move from flower to flower, they carry pollen, which helps many plants produce seeds.",
      "s": {
       "en": "The main idea is that bees help plants make seeds by carrying pollen. Hundreds of flowers is a detail: it supports the idea but is not the point.",
       "ru": "Главная мысль: пчёлы помогают растениям образовывать семена, перенося пыльцу. Сотни цветов — деталь: она поддерживает мысль, но не является главной."
      }
     },
     {
      "p": "The museum's new exhibit opened on Saturday. By noon, the line stretched around the block, and staff had to bring in extra tickets.",
      "s": {
       "en": "The inference is that the exhibit was popular. The text never says popular, but a long line and extra tickets make it very likely.",
       "ru": "Вывод: выставка была популярна. Слово popular в тексте не встречается, но длинная очередь и дополнительные билеты делают это очень вероятным."
      }
     },
     {
      "p": "Some people think that robots will take every job. In fact, studies suggest that technology usually changes jobs rather than ending them.",
      "s": {
       "en": "A choice saying robots will take every job is too extreme, and it is the view the author rejects.",
       "ru": "Вариант «роботы заберут все профессии» слишком категоричен, и это мнение автор отвергает."
      }
     }
    ],
    "mistakes": [
     {
      "en": "Choosing an interesting detail instead of the main idea.",
      "ru": "Выбор интересной детали вместо главной мысли."
     },
     {
      "en": "Going beyond the text: adding facts that are true in real life but not stated.",
      "ru": "Выход за рамки текста: добавление фактов, верных в жизни, но не сказанных в тексте."
     },
     {
      "en": "Choosing extreme words (always, never, all) when the text says usually.",
      "ru": "Выбор категоричных слов (always, never, all), когда в тексте usually."
     },
     {
      "en": "Confusing the view the author rejects with the author's own view.",
      "ru": "Путаница между мнением, которое автор отвергает, и его собственным."
     }
    ],
    "recap": {
     "en": "Find what the whole text is about, separate key details from minor ones, and choose conclusions that the text itself supports. Be careful with extreme and unstated choices.",
     "ru": "Найдите, о чём весь текст, отделите ключевые детали от второстепенных и выбирайте выводы, которые подтверждает сам текст. Осторожнее с категоричными и не упомянутыми вариантами."
    }
   }
  }
 );
 QUESTION_BANK.push(
{"id":901,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Words in context","difficulty":"Easy","type":"mc","p":"The path was so narrow that only one person could walk along it at a time.","q":"As used in the text, what does \"narrow\" most nearly mean?","o":["Hard to find","Covered with grass","Having little width","Steep"],"c":2,"e":"Only one person could walk along the path at a time, so it had little width. The text says nothing about it being hard to find, grassy or steep.","e_ru":"По тропе мог пройти только один человек одновременно, значит, она была узкой. О том, что её трудно найти, что она заросла травой или крутая, в тексте ничего нет.","t":"Use the result in the sentence to find the meaning.","t_ru":"Используйте следствие в предложении, чтобы понять значение.","reviewed":true},
{"id":902,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Word families","difficulty":"Easy","type":"mc","q":"She spoke very ___ about her plans.","o":["enthusiastically","enthusiastic","enthusiasm","enthusiast"],"c":0,"e":"Spoke is a verb, so we need an adverb: enthusiastically. Enthusiasm and enthusiast are nouns, and enthusiastic is an adjective.","e_ru":"Spoke — глагол, значит нужно наречие: enthusiastically. Enthusiasm и enthusiast — существительные, а enthusiastic — прилагательное.","t":"An adverb (-ly) describes a verb.","t_ru":"Наречие (-ly) описывает глагол.","reviewed":true},
{"id":903,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Word families","difficulty":"Easy","type":"mc","q":"The ___ of the new library surprised everyone.","o":["opened","openly","opens","opening"],"c":3,"e":"After The we need a noun, and the noun form is opening. Openly is an adverb, and opens and opened are verb forms.","e_ru":"После The нужно существительное: opening. Openly — наречие, а opens и opened — формы глагола.","t":"After the, use a noun.","t_ru":"После the нужно существительное.","reviewed":true},
{"id":904,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Words in context","difficulty":"Easy","type":"mc","p":"After a long hike, the travelers were exhausted and needed to rest.","q":"As used in the text, what does \"exhausted\" most nearly mean?","o":["Very hungry","Very tired","Very lost","Very happy"],"c":1,"e":"After a long hike the travelers needed to rest, so exhausted means very tired.","e_ru":"После долгого похода путникам нужно было отдохнуть, значит, exhausted означает «очень уставшие».","t":"The next part of the sentence often explains the word.","t_ru":"Следующая часть предложения часто объясняет слово.","reviewed":true},
{"id":905,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Words in context","difficulty":"Medium","type":"mc","p":"Unlike her talkative brother, Mia is reserved and rarely speaks first.","q":"As used in the text, what does \"reserved\" most nearly mean?","o":["Booked in advance","Lazy","Rude","Quiet and private"],"c":3,"e":"Unlike signals a contrast with talkative, so reserved means quiet and private. Booked in advance is another meaning of reserved but does not fit a person here.","e_ru":"Unlike указывает на контраст со словом talkative, поэтому reserved значит «сдержанная, немногословная». «Забронированный» — другое значение, но к человеку здесь не подходит.","t":"Contrast words (unlike, but) point to an opposite meaning.","t_ru":"Слова контраста (unlike, but) указывают на противоположное значение.","reviewed":true},
{"id":906,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Word families","difficulty":"Medium","type":"mc","q":"The manager acted ___ and solved the problem in minutes.","o":["decisively","decision","decisive","decide"],"c":0,"e":"Acted is a verb, so we need an adverb: decisively. Decision is a noun, decisive is an adjective and decide is a verb.","e_ru":"Acted — глагол, значит нужно наречие: decisively. Decision — существительное, decisive — прилагательное, decide — глагол.","t":"Verb + adverb.","t_ru":"Глагол + наречие.","reviewed":true},
{"id":907,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Words in context","difficulty":"Medium","type":"mc","p":"She runs a small bakery on the corner of the street, and she employs five people.","q":"As used in the text, what does \"runs\" most nearly mean?","o":["Moves quickly on foot","Flows","Manages","Competes in a race"],"c":2,"e":"She employs five people, so she is the manager of the bakery. Runs means manages here, not moves fast.","e_ru":"Она нанимает пять человек, значит, она управляет пекарней. Runs здесь означает «руководит», а не «бежит».","t":"A common word can have a less common meaning; check the context.","t_ru":"У обычного слова может быть менее обычное значение: проверьте контекст.","reviewed":true},
{"id":908,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Words in context","difficulty":"Medium","type":"mc","p":"The scientist's explanation was so lucid that even beginners understood it immediately.","q":"As used in the text, what does \"lucid\" most nearly mean?","o":["Long","Clear","Complicated","Brief"],"c":1,"e":"Even beginners understood it immediately, so the explanation was clear. Complicated is the opposite, and the text does not say it was long or brief.","e_ru":"Даже новички поняли объяснение сразу, значит, оно было ясным. Complicated означает противоположное, а о длине в тексте ничего не сказано.","t":"So ... that links a quality with its result.","t_ru":"Конструкция so ... that связывает качество с его результатом.","reviewed":true},
{"id":909,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Word families","difficulty":"Medium","type":"mc","q":"Her ___ to help the new students made everyone feel welcome.","o":["willingness","willing","willingly","unwilling"],"c":0,"e":"After the possessive Her we need a noun: willingness. Willing and unwilling are adjectives, and willingly is an adverb.","e_ru":"После притяжательного Her нужно существительное: willingness. Willing и unwilling — прилагательные, willingly — наречие.","t":"After her, his or their, use a noun.","t_ru":"После her, his, their нужно существительное.","reviewed":true},
{"id":910,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Words in context","difficulty":"Hard","type":"mc","p":"Although the first plan was costly and complicated, the second was inexpensive and straightforward.","q":"As used in the text, what does \"straightforward\" most nearly mean?","o":["Dishonest","Aggressive","Directly ahead","Simple and easy to follow"],"c":3,"e":"Although signals a contrast: the second plan was the opposite of costly and complicated, so straightforward means simple. Directly ahead is a literal meaning that does not fit a plan.","e_ru":"Although указывает на контраст: второй план был противоположностью дорогого и сложного, значит, straightforward — «простой и понятный». «Прямо впереди» — буквальное значение, к плану не подходит.","t":"A contrast pair tells you the meaning.","t_ru":"Пара противопоставлений подсказывает значение.","reviewed":true},
{"id":911,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Words in context","difficulty":"Hard","type":"mc","p":"The mayor's ___ response to the flood saved many homes; within hours, crews had arrived with sandbags and pumps.","q":"Which choice completes the text with the most logical and precise word?","o":["hasty","careless","prompt","delayed"],"c":2,"e":"Crews arrived within hours, so the response was quick and effective: prompt. Hasty suggests carelessness, and careless and delayed contradict the success described.","e_ru":"Бригады прибыли в течение нескольких часов, значит, реакция была быстрой и эффективной: prompt. Hasty намекает на небрежность, а careless и delayed противоречат описанному успеху.","t":"Choose the word that matches both meaning and tone.","t_ru":"Выбирайте слово, подходящее и по смыслу, и по тону.","reviewed":true},
{"id":912,"section":"RW","unitId":"m09","domain":"Craft and Structure","skill":"Word families","difficulty":"Hard","type":"mc","q":"Find the mistake: The scientists were impressed by the accurately of the data.","o":["were impressed should be impressed","accurately should be accuracy","by should be with","the should be a"],"c":1,"e":"After the we need a noun, so accurately (an adverb) should be accuracy.","e_ru":"После the нужно существительное, поэтому accurately (наречие) нужно заменить на accuracy.","t":"Check that the word form fits its job.","t_ru":"Проверьте, что форма слова подходит по роли.","reviewed":true},
{"id":1001,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Main idea","difficulty":"Easy","type":"mc","p":"Honeybees visit hundreds of flowers each day. As they move from flower to flower, they carry pollen, which helps many plants produce seeds.","q":"Which choice best states the main idea of the text?","o":["Honeybees live in large groups.","Honeybees help plants make seeds by carrying pollen.","Plants cannot grow without sunlight.","Flowers open early in the morning."],"c":1,"e":"The whole text is about how bees carry pollen and help plants make seeds. The other choices are not discussed.","e_ru":"Весь текст о том, как пчёлы переносят пыльцу и помогают растениям образовывать семена. Остальное в тексте не обсуждается.","t":"The main idea covers the whole text.","t_ru":"Главная мысль охватывает весь текст.","reviewed":true},
{"id":1002,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Key details","difficulty":"Easy","type":"mc","p":"Maya trains for the school marathon every morning before class. She runs five kilometers on weekdays and ten on Saturdays, and she rests on Sundays.","q":"According to the text, how far does Maya run on Saturdays?","o":["Five kilometers","Seven kilometers","She does not run","Ten kilometers"],"c":3,"e":"The text says she runs ten kilometers on Saturdays. Five kilometers is the weekday distance.","e_ru":"В тексте сказано, что по субботам она бежит десять километров. Пять километров — это будни.","t":"For detail questions, find the exact words in the text.","t_ru":"В вопросах о деталях найдите точные слова в тексте.","reviewed":true},
{"id":1003,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Inferences","difficulty":"Easy","type":"mc","p":"When Omar left for school, the sky was clear. When he came home, his coat was dripping and his shoes were soaked.","q":"Which inference is best supported by the text?","o":["Omar walked to school every day.","Omar forgot his lunch.","It rained while Omar was out.","The sky was cloudy in the morning."],"c":2,"e":"A clear sky in the morning and soaked clothes in the afternoon make rain very likely. The text says nothing about lunch or walking every day, and it contradicts a cloudy morning.","e_ru":"Ясное небо утром и промокшая одежда днём делают дождь очень вероятным. Об обеде и ежедневных прогулках в тексте нет ни слова, а облачное утро противоречит тексту.","t":"An inference must be supported by clues in the text.","t_ru":"Вывод должен опираться на подсказки в тексте.","reviewed":true},
{"id":1004,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Main idea","difficulty":"Easy","type":"mc","p":"Recycling aluminum cans uses far less energy than making new ones. Because of this, many cities now place recycling bins on busy streets to make recycling easier.","q":"Which choice best states the main idea of the text?","o":["Recycling aluminum saves energy, so cities encourage it.","Busy streets are dangerous for walkers.","Aluminum cans are cheap to make.","Cities no longer need new cans."],"c":0,"e":"The text links the energy savings to the cities' decision to add bins. The other choices are not stated: nothing about danger, cost or cities no longer needing cans.","e_ru":"Текст связывает экономию энергии с решением городов поставить контейнеры. Остальное не сказано: ни об опасности, ни о стоимости, ни о том, что новые банки больше не нужны.","t":"A main idea joins the key points of the text.","t_ru":"Главная мысль объединяет ключевые мысли текста.","reviewed":true},
{"id":1005,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Key details","difficulty":"Medium","type":"mc","p":"The town's library, built in 1925, was nearly closed in 2018 because of low attendance. Then volunteers started a weekly reading club for children, and within a year the number of visitors had doubled.","q":"According to the text, what helped increase the number of library visitors?","o":["A new building","Lower prices for books","A weekly reading club for children","New opening hours"],"c":2,"e":"The text says that after volunteers started a weekly reading club for children, the number of visitors doubled. The other options are not mentioned.","e_ru":"В тексте сказано, что после того как волонтёры начали еженедельный детский читательский клуб, число посетителей удвоилось. Остальное не упоминается.","t":"The detail after then or after often explains the change.","t_ru":"Деталь после слов then или after часто объясняет перемену.","reviewed":true},
{"id":1006,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Inferences","difficulty":"Medium","type":"mc","p":"The museum's new exhibit opened on Saturday. By noon, the line stretched around the block, and staff had to bring in extra tickets.","q":"Which inference is best supported by the text?","o":["The museum charges no entry fee.","The exhibit was popular with visitors.","The staff disliked the exhibit.","The exhibit will close next week."],"c":1,"e":"A line around the block and extra tickets show that many people wanted to attend, so the exhibit was popular. The text does not mention the fee, the staff's opinion or a closing date.","e_ru":"Очередь вокруг квартала и дополнительные билеты показывают, что многие хотели попасть, значит, выставка была популярна. О плате, мнении сотрудников и дате закрытия не сказано.","t":"Look for clues that make the conclusion very likely.","t_ru":"Ищите подсказки, которые делают вывод очень вероятным.","reviewed":true},
{"id":1007,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Main idea","difficulty":"Medium","type":"mc","p":"Many people believe that talent alone makes a great musician. However, interviews with professional violinists show that most of them practiced for hours every day for years before they became successful.","q":"Which choice best states the main idea of the text?","o":["Talent is the only thing that matters for musicians.","Few people are interested in becoming musicians.","Violins are harder to play than other instruments.","Great musicians usually succeed through years of regular practice."],"c":3,"e":"The text contrasts the belief that talent alone matters with what violinists report: years of daily practice. Choice A is the belief the author challenges, and the others are not discussed.","e_ru":"Текст противопоставляет мнение, что важен только талант, рассказам скрипачей о годах ежедневной практики. Вариант A — мнение, которое автор оспаривает, остальное не обсуждается.","t":"After however, the author's real point usually follows.","t_ru":"После however обычно следует настоящая мысль автора.","reviewed":true},
{"id":1008,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Key details","difficulty":"Medium","type":"mc","p":"Arctic terns migrate farther than any other bird. Each year they fly from their breeding grounds in the Arctic to the Antarctic and back again, a round trip of about 70,000 kilometers.","q":"According to the text, which detail best shows how far arctic terns migrate?","o":["Their round trip is about 70,000 kilometers.","They breed in the Arctic.","They travel to the Antarctic.","They fly in large flocks."],"c":0,"e":"The round trip of about 70,000 kilometers directly measures the distance. The Arctic breeding grounds and the trip to the Antarctic are true details but give no distance, and flocks are not mentioned.","e_ru":"Круговой маршрут около 70 000 километров прямо показывает расстояние. Места гнездования в Арктике и путь в Антарктику — верные детали, но расстояния они не дают, а о стаях не говорится.","t":"Choose the detail that answers the exact question.","t_ru":"Выбирайте деталь, которая отвечает именно на заданный вопрос.","reviewed":true},
{"id":1009,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Inferences","difficulty":"Medium","type":"mc","p":"Nadia checked the recipe twice, measured each ingredient carefully, and set a timer for exactly twenty minutes. When the cake came out, she still wrote notes on how to improve it.","q":"Which choice is best supported by the text?","o":["Nadia dislikes cooking.","Nadia is careful and wants to improve her baking.","Nadia always burns her cakes.","Nadia is baking for a competition."],"c":1,"e":"Checking the recipe, measuring carefully and writing notes show that she is careful and wants to get better. Nothing in the text says she dislikes cooking, burns cakes or is in a competition.","e_ru":"Проверка рецепта, точные измерения и заметки показывают, что она аккуратна и хочет совершенствоваться. О том, что она не любит готовить, подгорает торт или участвует в конкурсе, в тексте нет ни слова.","t":"Combine several clues into one conclusion.","t_ru":"Объедините несколько подсказок в один вывод.","reviewed":true},
{"id":1010,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Main idea","difficulty":"Hard","type":"mc","p":"Some people think that robots will soon take every job. In fact, studies of past technologies suggest that machines usually change the kind of work people do rather than eliminate work entirely.","q":"Which choice best states the main idea of the text?","o":["New technology tends to change jobs rather than end them.","Robots will soon take every job.","Studies of technology are unreliable.","People should avoid using machines."],"c":0,"e":"The author rejects the idea that robots will take every job and says technology usually changes work. Choice A is the view the author argues against, and the other choices are not supported.","e_ru":"Автор отвергает мысль, что роботы заберут все профессии, и говорит, что технологии обычно меняют работу. Вариант A — мнение, с которым автор спорит, остальные варианты текстом не подтверждаются.","t":"Do not confuse the view the author rejects with the author's view.","t_ru":"Не путайте мнение, которое автор отвергает, с его собственным.","reviewed":true},
{"id":1011,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Inferences","difficulty":"Hard","type":"mc","p":"Although the village had no road for centuries, it was never isolated. Traders arrived by river each spring, carrying salt, cloth and news from distant towns.","q":"Which inference is best supported by the text?","o":["Traders came every season.","The village produced salt.","The villagers never travelled.","The river connected the village to other places."],"c":3,"e":"Traders came by river with goods and news, so the river connected the village to other places. Every season is too extreme (the text says each spring), and the text does not say the village produced salt or that villagers never travelled.","e_ru":"Торговцы приплывали по реке с товарами и новостями, значит, река связывала деревню с другими местами. «Каждый сезон» — слишком сильно (в тексте «каждую весну»), а о том, что деревня добывала соль или жители никуда не ездили, не сказано.","t":"Avoid choices that stretch the text (every, never, all).","t_ru":"Избегайте вариантов, которые преувеличивают текст (every, never, all).","reviewed":true},
{"id":1012,"section":"RW","unitId":"m10","domain":"Information and Ideas","skill":"Key details","difficulty":"Hard","type":"mc","p":"In 2019, a school replaced its plastic water bottles with refill stations. Within a year it had saved an estimated 30,000 bottles from the trash, and students reported that the water tasted just as good.","q":"Which detail from the text best supports the idea that the refill stations were successful?","o":["The school started in 2019.","The stations were made of plastic.","About 30,000 bottles were kept out of the trash in a year.","Students had to bring their own bottles."],"c":2,"e":"The number of bottles kept out of the trash (about 30,000 in a year) is concrete evidence of success. The start date, the material of the stations and bringing bottles do not show how well they worked.","e_ru":"Количество бутылок, не попавших в мусор (около 30 000 за год), — конкретное доказательство успеха. Год начала, материал станций и необходимость приносить бутылки не показывают, насколько хорошо они работали.","t":"Strong evidence is specific and measurable.","t_ru":"Сильное доказательство конкретно и измеримо.","reviewed":true}
 );
})();
