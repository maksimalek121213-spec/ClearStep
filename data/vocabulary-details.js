/* Vocabulary detail layer: part of speech and an original example sentence (with a Russian translation)
   for individual cards. Keyed by module unit id, then by the card's headword exactly as in CS_VOCAB.
   Cards without an entry here simply show the translation and definition, as before.
   Pilot: module 1 (all 20 cards). scripts/validate-data.js checks that every entry points to a real card,
   that the example contains the headword, and reports coverage. */
window.CS_VOCAB_DETAIL = {
  m01: {
    "sentence": { pos: "noun", ex: "Every sentence should start with a capital letter.", ex_ru: "Каждое предложение должно начинаться с заглавной буквы." },
    "subject": { pos: "noun", ex: "In \"Anna reads books\", the subject is Anna.", ex_ru: "В предложении «Anna reads books» подлежащее — Anna." },
    "predicate": { pos: "noun", ex: "The predicate of this sentence is \"reads books\".", ex_ru: "Сказуемое в этом предложении — «reads books»." },
    "clause": { pos: "noun", ex: "This sentence has two clauses: it rained, and we stayed home.", ex_ru: "В этом предложении две части: шёл дождь, и мы остались дома." },
    "phrase": { pos: "noun", ex: "The phrase \"in the morning\" tells us when something happens.", ex_ru: "Словосочетание «in the morning» говорит нам, когда что-то происходит." },
    "object": { pos: "noun", ex: "In \"Tom kicked the ball\", the object is the ball.", ex_ru: "В предложении «Tom kicked the ball» дополнение — the ball." },
    "complement": { pos: "noun", ex: "In \"She is a doctor\", \"a doctor\" is the complement.", ex_ru: "В предложении «She is a doctor» именная часть сказуемого — «a doctor»." },
    "modifier": { pos: "noun", ex: "In \"a small cat\", the word small is a modifier.", ex_ru: "В словосочетании «a small cat» слово small — определение." },
    "word order": { pos: "noun", ex: "English word order is usually subject, verb, object.", ex_ru: "Порядок слов в английском обычно такой: подлежащее, глагол, дополнение." },
    "statement": { pos: "noun", ex: "\"The shop opens at nine\" is a statement.", ex_ru: "«The shop opens at nine» — это утверждение." },
    "question": { pos: "noun", ex: "\"Where do you live?\" is a question.", ex_ru: "«Where do you live?» — это вопрос." },
    "negative sentence": { pos: "noun", ex: "\"She does not like tea\" is a negative sentence.", ex_ru: "«She does not like tea» — это отрицательное предложение." },
    "imperative": { pos: "noun", ex: "\"Close the door, please\" is an imperative.", ex_ru: "«Close the door, please» — это повелительное предложение." },
    "exclamation": { pos: "noun", ex: "\"What a beautiful day!\" is an exclamation.", ex_ru: "«What a beautiful day!» — это восклицание." },
    "sentence fragment": { pos: "noun", ex: "\"Because it was raining\" is a sentence fragment.", ex_ru: "«Because it was raining» — это фрагмент предложения." },
    "independent clause": { pos: "noun", ex: "\"I like tea\" is an independent clause.", ex_ru: "«I like tea» — это главная часть предложения." },
    "dependent clause": { pos: "noun", ex: "\"Because I was tired\" is a dependent clause.", ex_ru: "«Because I was tired» — это зависимая часть предложения." },
    "subject–verb agreement": { pos: "noun", ex: "Subject–verb agreement means we say \"she walks\", not \"she walk\".", ex_ru: "Согласование подлежащего и сказуемого значит, что мы говорим «she walks», а не «she walk»." },
    "complete thought": { pos: "noun", ex: "A sentence must express a complete thought.", ex_ru: "Предложение должно выражать законченную мысль." },
    "sentence boundary": { pos: "noun", ex: "A full stop marks a sentence boundary.", ex_ru: "Точка обозначает границу предложения." }
  }
};
