/* ClearStep roadmap: 48 original modules plus 3 supplementary SAT Math modules.
   Structure only: levels, tracks, sections, module titles (EN / RU / UZ).
   `unit` links a module to an existing lesson + question bank in data/curriculum.js (COURSES).
   Every current roadmap module links to a lesson and question bank.
   To add modules later (60, 80, 100): push more rows into MODULE_ROWS and, if needed, new levels/sections. Nothing else changes. */
const LEVELS = [
  { id: 1, title: { en: "Level 1 · Foundations", ru: "Уровень 1 · Основы", uz: "1-daraja · Asoslar" },
    sub: { en: "English basics and basic math. Language level about A1–A2.", ru: "Основы английского и базовая математика. Языковой уровень примерно A1–A2.", uz: "Ingliz tili asoslari va asosiy matematika. Til darajasi taxminan A1–A2." } },
  { id: 2, title: { en: "Level 2 · Core Skills", ru: "Уровень 2 · Основные навыки", uz: "2-daraja · Asosiy ko‘nikmalar" },
    sub: { en: "Confident English, complex grammar, systematic SAT preparation. About B1–B2.", ru: "Уверенный английский, сложная грамматика, системная подготовка к SAT. Примерно B1–B2.", uz: "Ishonchli ingliz tili, murakkab grammatika, SAT’ga tizimli tayyorgarlik. Taxminan B1–B2." } },
  { id: 3, title: { en: "Level 3 · Advanced and SAT Mastery", ru: "Уровень 3 · Продвинутый уровень и SAT", uz: "3-daraja · Ilg‘or daraja va SAT" },
    sub: { en: "Advanced language skills and targeted work on hard SAT questions. About C1.", ru: "Продвинутые языковые навыки и работа над сложными вопросами SAT. Примерно C1.", uz: "Ilg‘or til ko‘nikmalari va murakkab SAT savollari ustida ishlash. Taxminan C1." } }
];
const TRACKS = [
  { id: "GE", title: { en: "General English", ru: "General English", uz: "General English" } },
  { id: "RW", title: { en: "SAT Reading & Writing", ru: "SAT Чтение и Письмо", uz: "SAT Reading & Writing" } },
  { id: "MATH", title: { en: "SAT Math", ru: "SAT Математика", uz: "SAT Matematika" } }
];
/* Sections: the unit of a future Section Test. General English has two sections per level (4 neighbouring modules each). */
const SECTIONS = [
  { id: "L1-GE-A", level: 1, track: "GE", title: { en: "Verbs and Sentence Basics", ru: "Глаголы и основы предложения", uz: "Fe’llar va gap asoslari" } },
  { id: "L1-GE-B", level: 1, track: "GE", title: { en: "Nouns, Modifiers and Connectors", ru: "Существительные, определения и связки", uz: "Otlar, aniqlovchilar va bog‘lovchilar" } },
  { id: "L1-RW", level: 1, track: "RW", title: { en: "Reading & Writing Foundations", ru: "Основы чтения и письма", uz: "O‘qish va yozish asoslari" } },
  { id: "L1-MATH", level: 1, track: "MATH", title: { en: "Math Foundations", ru: "Основы математики", uz: "Matematika asoslari" } },
  { id: "L2-GE-A", level: 2, track: "GE", title: { en: "Advanced Verb Forms and Clauses", ru: "Сложные глагольные формы и придаточные", uz: "Murakkab fe’l shakllari va ergash gaplar" } },
  { id: "L2-GE-B", level: 2, track: "GE", title: { en: "Agreement, Cohesion and Vocabulary", ru: "Согласование, связность и лексика", uz: "Moslashuv, bog‘liqlik va lug‘at" } },
  { id: "L2-RW", level: 2, track: "RW", title: { en: "SAT Reading & Writing Core", ru: "SAT Чтение и Письмо: основа", uz: "SAT Reading & Writing: asosiy qism" } },
  { id: "L2-MATH", level: 2, track: "MATH", title: { en: "SAT Math Core", ru: "SAT Математика: основа", uz: "SAT Matematika: asosiy qism" } },
  { id: "L3-GE-A", level: 3, track: "GE", title: { en: "Advanced Grammar and Vocabulary", ru: "Продвинутая грамматика и лексика", uz: "Ilg‘or grammatika va lug‘at" } },
  { id: "L3-GE-B", level: 3, track: "GE", title: { en: "Reading, Argument and Review", ru: "Чтение, аргументация и повторение", uz: "O‘qish, dalillash va takrorlash" } },
  { id: "L3-RW", level: 3, track: "RW", title: { en: "SAT Reading & Writing Advanced", ru: "SAT Чтение и Письмо: продвинутый уровень", uz: "SAT Reading & Writing: ilg‘or daraja" } },
  { id: "L3-MATH", level: 3, track: "MATH", title: { en: "SAT Math Advanced", ru: "SAT Математика: продвинутый уровень", uz: "SAT Matematika: ilg‘or daraja" } }
];
/* [number, section id, EN, RU, UZ, linked unit id or null] */
const MODULE_ROWS = [
  [1, "L1-GE-A", "Sentence Structure and Word Order", "Структура предложения и порядок слов", "Gap tuzilishi va so‘z tartibi", "m01"],
  [2, "L1-GE-A", "Parts of Speech, Pronouns and Basic Verbs", "Части речи, местоимения и базовые глаголы", "So‘z turkumlari, olmoshlar va asosiy fe’llar", "m02"],
  [3, "L1-GE-A", "Present Simple and Present Continuous", "Present Simple и Present Continuous", "Present Simple va Present Continuous", "m03"],
  [4, "L1-GE-A", "Past Simple, Past Continuous and Basic Future Forms", "Past Simple, Past Continuous и базовые формы будущего", "Past Simple, Past Continuous va oddiy kelasi zamon shakllari", "m04"],
  [5, "L1-GE-B", "Questions, Negatives, Auxiliary Verbs and Basic Modals", "Вопросы, отрицания, вспомогательные и базовые модальные глаголы", "Savollar, inkor, yordamchi va asosiy modal fe’llar", "m05"],
  [6, "L1-GE-B", "Nouns, Articles, Determiners and Quantifiers", "Существительные, артикли, определители и количественные слова", "Otlar, artikllar, aniqlovchilar va miqdor so‘zlari", "m06"],
  [7, "L1-GE-B", "Adjectives, Adverbs, Comparisons and Prepositions", "Прилагательные, наречия, сравнения и предлоги", "Sifatlar, ravishlar, qiyoslash va predloglar", "m07"],
  [8, "L1-GE-B", "Connectors, Basic Paragraph Logic and Essential Punctuation", "Связки, логика абзаца и основная пунктуация", "Bog‘lovchilar, abzats mantig‘i va asosiy tinish belgilari", "m08"],
  [9, "L1-RW", "Vocabulary in Context and Word Families", "Лексика в контексте и семьи слов", "Kontekstda lug‘at va so‘z oilalari", "m09"],
  [10, "L1-RW", "Main Ideas, Key Details and Basic Inferences", "Главная мысль, ключевые детали и простые выводы", "Asosiy g‘oya, muhim tafsilotlar va oddiy xulosalar", "m10"],
  [11, "L1-RW", "Sentence Boundaries and Foundational Punctuation", "Границы предложений и базовая пунктуация", "Gap chegaralari va asosiy tinish belgilari", "u-bounds"],
  [12, "L1-RW", "Introduction to Evidence and Logical Transitions", "Введение в доказательства и логические переходы", "Dalillarga kirish va mantiqiy o‘tishlar", "m12"],
  [13, "L1-MATH", "Linear Equations and One-Variable Inequalities", "Линейные уравнения и неравенства с одной переменной", "Chiziqli tenglamalar va bir o‘zgaruvchili tengsizliklar", "u-alg"],
  [14, "L1-MATH", "Ratios, Rates, Percentages and Unit Conversions", "Отношения, скорости, проценты и перевод единиц", "Nisbatlar, tezliklar, foizlar va birliklarni o‘zgartirish", "u-data"],
  [15, "L1-MATH", "Linear Relationships, Coordinates, Graphs and Slope", "Линейные зависимости, координаты, графики и наклон", "Chiziqli bog‘lanishlar, koordinatalar, grafiklar va qiyalik", "m15"],
  [16, "L1-MATH", "Basic Statistics, Tables and Data Interpretation", "Базовая статистика, таблицы и анализ данных", "Asosiy statistika, jadvallar va ma’lumotlarni tahlil qilish", "m16"],
  [17, "L2-GE-A", "Perfect Tenses and Sequence of Tenses", "Perfect-времена и согласование времён", "Perfect zamonlar va zamonlar muvofiqligi", "m17"],
  [18, "L2-GE-A", "Modal Verbs and Conditional Sentences", "Модальные глаголы и условные предложения", "Modal fe’llar va shart gaplar", "m18"],
  [19, "L2-GE-A", "Passive Voice and Reported Speech", "Страдательный залог и косвенная речь", "Majhul nisbat va ko‘chirma gap", "m19"],
  [20, "L2-GE-A", "Relative, Noun and Adverbial Clauses", "Определительные, подлежащные и обстоятельственные придаточные", "Aniqlovchi, ot va holat ergash gaplar", "m20"],
  [21, "L2-GE-B", "Gerunds, Infinitives and Verb Patterns", "Герундий, инфинитив и модели управления глаголов", "Gerund, infinitiv va fe’l qoliplari", "m21"],
  [22, "L2-GE-B", "Subject–Verb Agreement, Modifiers and Parallel Structure", "Согласование подлежащего и сказуемого, модификаторы и параллелизм", "Ega va kesim moslashuvi, modifikatorlar va parallel tuzilma", "m22"],
  [23, "L2-GE-B", "Advanced Connectors, Cohesion and Paragraph Structure", "Сложные связки, связность и структура абзаца", "Murakkab bog‘lovchilar, bog‘liqlik va abzats tuzilishi", "m23"],
  [24, "L2-GE-B", "Vocabulary, Collocations, Word Formation and Nuance", "Лексика, коллокации, словообразование и оттенки значения", "Lug‘at, kollokatsiyalar, so‘z yasalishi va ma’no nozikliklari", "m24"],
  [25, "L2-RW", "Central Ideas, Evidence and Inferences", "Центральные идеи, доказательства и выводы", "Markaziy g‘oyalar, dalillar va xulosalar", "u-info"],
  [26, "L2-RW", "Text Structure, Author's Purpose and Paired Passages", "Структура текста, цель автора и парные тексты", "Matn tuzilishi, muallif maqsadi va juft matnlar", "u-craft"],
  [27, "L2-RW", "Transitions and Rhetorical Synthesis", "Переходы и риторический синтез", "O‘tishlar va ritorik sintez", "u-trans"],
  [28, "L2-RW", "Command of Evidence, Including Quantitative Information", "Работа с доказательствами, включая количественные данные", "Dalillar bilan ishlash, jumladan miqdoriy ma’lumotlar", "m28"],
  [29, "L2-MATH", "Systems of Equations and Inequalities", "Системы уравнений и неравенств", "Tenglamalar va tengsizliklar sistemalari", "m29"],
  [30, "L2-MATH", "Quadratic Equations and Polynomials", "Квадратные уравнения и многочлены", "Kvadrat tenglamalar va ko‘phadlar", "u-adv"],
  [31, "L2-MATH", "Exponential Functions and Nonlinear Relationships", "Показательные функции и нелинейные зависимости", "Ko‘rsatkichli funksiyalar va nochiziqli bog‘lanishlar", "m31"],
  [32, "L2-MATH", "Geometry: Angles, Triangles, Circles and Trigonometry Foundations", "Геометрия: углы, треугольники, окружности и основы тригонометрии", "Geometriya: burchaklar, uchburchaklar, aylanalar va trigonometriya asoslari", "u-geom"],
  [33, "L3-GE-A", "Advanced Syntax, Complex Sentences and Punctuation", "Сложный синтаксис, сложные предложения и пунктуация", "Murakkab sintaksis, qo‘shma gaplar va tinish belgilari", "m33"],
  [34, "L3-GE-A", "Advanced Tenses, Voice, Agreement and Modifier Errors", "Сложные времена, залог, согласование и ошибки модификаторов", "Murakkab zamonlar, nisbat, moslashuv va modifikator xatolari", "m34"],
  [35, "L3-GE-A", "Academic Vocabulary, Word Formation and Precise Word Choice", "Академическая лексика, словообразование и точный выбор слов", "Akademik lug‘at, so‘z yasalishi va aniq so‘z tanlash", "m35"],
  [36, "L3-GE-A", "Argument Structure, Cohesion and Advanced Revision", "Структура аргумента, связность и углублённая редактура", "Dalil tuzilishi, bog‘liqlik va chuqur tahrir", "m36"],
  [37, "L3-GE-B", "Nuance, Contextual Meaning, Connotation and Author's Tone", "Оттенки, контекстное значение, коннотация и тон автора", "Ma’no nozikligi, kontekstual ma’no, konnotatsiya va muallif ohangi", "m37"],
  [38, "L3-GE-B", "Complex Reading Passages and Advanced Reading Strategies", "Сложные тексты и продвинутые стратегии чтения", "Murakkab matnlar va ilg‘or o‘qish strategiyalari", "m38"],
  [39, "L3-GE-B", "Summarizing, Paraphrasing and Evidence-Based Writing", "Краткий пересказ, перефразирование и письмо с опорой на доказательства", "Qisqacha bayon, parafraz va dalillarga asoslangan yozuv", "m39"],
  [40, "L3-GE-B", "Integrated Advanced Grammar Review and Error Diagnosis", "Комплексный повтор грамматики и диагностика ошибок", "Ilg‘or grammatikani umumlashtirish va xatolar diagnostikasi", "m40"],
  [41, "L3-RW", "Standard English Conventions: Advanced Sentence Boundaries and Grammar", "Нормы стандартного английского: сложные границы предложений и грамматика", "Standart ingliz tili qoidalari: murakkab gap chegaralari va grammatika", "u-form"],
  [42, "L3-RW", "Craft and Structure: Words in Context, Text Purpose and Structure", "Craft and Structure: слова в контексте, цель и структура текста", "Craft and Structure: kontekstda so‘zlar, matn maqsadi va tuzilishi", "m42"],
  [43, "L3-RW", "Information and Ideas: Evidence, Inferences and Cross-Text Connections", "Information and Ideas: доказательства, выводы и связи между текстами", "Information and Ideas: dalillar, xulosalar va matnlararo bog‘lanishlar", "m43"],
  [44, "L3-RW", "Expression of Ideas: Transitions, Rhetorical Synthesis and Revision", "Expression of Ideas: переходы, риторический синтез и редактирование", "Expression of Ideas: o‘tishlar, ritorik sintez va tahrir", "m44"],
  [45, "L3-MATH", "Advanced Algebra, Systems and Inequalities", "Продвинутая алгебра, системы и неравенства", "Ilg‘or algebra, sistemalar va tengsizliklar", "m45"],
  [46, "L3-MATH", "Nonlinear Equations, Quadratics, Equivalent Expressions and Exponentials", "Нелинейные уравнения, квадратные, равносильные выражения и показательные", "Nochiziqli tenglamalar, kvadratlar, ekvivalent ifodalar va ko‘rsatkichlilar", "m46"],
  [47, "L3-MATH", "Advanced Ratios, Percentages, Statistics, Probability and Data Analysis", "Сложные отношения, проценты, статистика, вероятность и анализ данных", "Ilg‘or nisbatlar, foizlar, statistika, ehtimollik va ma’lumotlar tahlili", "m47"],
  [48, "L3-MATH", "Geometry, Circles, Right Triangles, Trigonometry and Mixed Applications", "Геометрия, окружности, прямоугольные треугольники, тригонометрия и смешанные задачи", "Geometriya, aylanalar, to‘g‘ri burchakli uchburchaklar, trigonometriya va aralash masalalar", "m48"],
  [49, "L1-MATH", "Number Properties, Fractions and Exponents", "Свойства чисел, дроби и степени", "Son xossalari, kasrlar va darajalar", "m49"],
  [50, "L2-MATH", "Function Notation, Composition and Transformations", "Функции, композиция и преобразования", "Funksiya yozuvi, kompozitsiya va o‘zgartirishlar", "m50"],
  [51, "L3-MATH", "Rational and Radical Equations", "Рациональные уравнения и уравнения с корнями", "Ratsional va ildizli tenglamalar", "m51"]
];
const MODULES = MODULE_ROWS.map(function (r) {
  var sec = SECTIONS.find(function (s) { return s.id === r[1]; });
  return { n: r[0], id: "m" + (r[0] < 10 ? "0" : "") + r[0], section: r[1], level: sec.level, track: sec.track,
    title: { en: r[2], ru: r[3], uz: r[4] }, unit: r[5] || null };
});
