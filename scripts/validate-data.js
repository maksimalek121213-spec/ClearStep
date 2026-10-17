#!/usr/bin/env node
/* Structural content checks for the static ClearStep curriculum. Run: node scripts/validate-data.js */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const context = { console };
context.window = context;
vm.createContext(context);
const sources = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((src) => src.startsWith("data/"));
for (const src of sources) {
  vm.runInContext(fs.readFileSync(path.join(root, src), "utf8"), context, { filename: src });
}

const data = JSON.parse(vm.runInContext(
  `JSON.stringify({units:COURSES.flatMap(course=>course.units),questions:QUESTION_BANK,vocab:CS_VOCAB,vocabExtra:CS_VOCAB_EXTRA,modules:MODULES,sections:SECTIONS,uz:CS_UZ,mathHints:CS_MATH_HINTS,mathRuExplanationIds:CS_MATH_RU_EXPLANATION_IDS})`,
  context
));
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const unitIds = new Set(data.units.map((unit) => unit.id));
const questionIds = new Set();
const questionSignatures = new Set();
const mathRuExplanationIds = new Set(data.mathRuExplanationIds);
const mathQuestions = data.questions.filter((question) => question.section === "MATH");
const allVocabularyWords = [];

check(data.units.length >= 48, `Expected at least 48 modules, found ${data.units.length}`);
const sectionIds = new Set(data.sections.map((section) => section.id));
for (const section of data.sections) {
  const sectionModules = data.modules.filter((module) => module.section === section.id);
  check(sectionModules.length > 0, `${section.id}: section has no modules`);
  const sectionUnitIds = new Set(sectionModules.map((module) => module.unit));
  const sectionQuestions = data.questions.filter((question) => sectionUnitIds.has(question.unitId));
  check(sectionQuestions.length >= 3, `${section.id}: section test has fewer than 3 questions`);
  check(!!section.title?.en && !!section.title?.ru && !!section.title?.uz, `${section.id}: section title missing a language`);
}
for (const module of data.modules) check(sectionIds.has(module.section), `${module.id}: missing learning section`);
for (const unit of data.units) {
  const bank = data.questions.filter((question) => question.unitId === unit.id);
  const lesson = unit.lesson;
  check(bank.length >= 10, `${unit.id}: expected 10 questions, found ${bank.length}`);
  check(new Set(bank.map((question) => question.difficulty)).size >= 2, `${unit.id}: questions lack difficulty variety`);
  const unitWords = data.vocab[unit.id] || [];
  check(unitWords.length >= 20, `${unit.id}: fewer than 20 vocabulary cards`);
  check(new Set(unitWords.map((word) => String(word[0] || "").toLowerCase())).size === unitWords.length, `${unit.id}: duplicate word inside vocabulary topic`);
  for (const word of unitWords) {
    check(!!word[0] && !!word[1] && !!word[2], `${unit.id}: vocabulary card missing word, translation, or definition`);
    allVocabularyWords.push(String(word[0] || "").toLowerCase());
  }
  check(!!unit.title?.en && !!unit.title?.ru && !!unit.title?.uz, `${unit.id}: title missing a language`);
  check(["en", "ru", "uz"].every((language) => Array.isArray(unit.objectives?.[language]) && unit.objectives[language].length > 0), `${unit.id}: learning objectives missing a language`);
  check(!!lesson && !!lesson.summary?.en && !!lesson.summary?.ru && !!lesson.summary?.uz, `${unit.id}: lesson summary missing a language`);
  check((lesson?.rules || []).length >= 3, `${unit.id}: fewer than 3 lesson rules`);
  check((lesson?.examples || []).length >= 3, `${unit.id}: fewer than 3 worked examples`);
  check((lesson?.mistakes || []).length >= 2, `${unit.id}: fewer than 2 typical mistakes`);
  check(!!lesson?.recap?.en && !!lesson?.recap?.ru && !!lesson?.recap?.uz, `${unit.id}: lesson recap missing a language`);
  for (const rule of lesson?.rules || []) check(!!rule.t?.uz && !!rule.d?.uz, `${unit.id}: Uzbek rule text missing`);
  for (const example of lesson?.examples || []) check(!!example.s?.en && !!example.s?.ru && !!example.s?.uz, `${unit.id}: example explanation missing a language`);
  for (const mistake of lesson?.mistakes || []) check(typeof mistake === "string" || (!!mistake.en && !!mistake.ru && !!mistake.uz), `${unit.id}: typical mistake missing a language`);
}

for (const question of data.questions) {
  check(Number.isInteger(question.id) && !questionIds.has(question.id), `Duplicate or invalid question ID: ${question.id}`);
  questionIds.add(question.id);
  check(unitIds.has(question.unitId), `Question ${question.id}: unknown module ${question.unitId}`);
  check(!!question.q && !!question.e && !!question.t, `Question ${question.id}: prompt, explanation, or takeaway missing`);
  const signature = JSON.stringify([question.p || "", question.q, question.o || [], question.ans || []]);
  check(!questionSignatures.has(signature), `Question ${question.id}: duplicate full prompt and answer set`);
  questionSignatures.add(signature);
  if (question.type === "spr") check(Array.isArray(question.ans) && question.ans.length > 0, `Question ${question.id}: numeric answer missing`);
  else check(Array.isArray(question.o) && question.o.length >= 2 && Number.isInteger(question.c) && question.c >= 0 && question.c < question.o.length, `Question ${question.id}: answer options or correct index invalid`);
  if (question.section === "MATH") {
    check(!!question.q_uz && !!question.e_uz && !!question.h_uz && !!question.t_uz, `Math question ${question.id}: Uzbek prompt, explanation, hint, or takeaway missing`);
    check(!!(question.h || data.mathHints?.[question.unitId]?.en), `Math question ${question.id}: no English hint or unit scaffold`);
    check(!!(question.h || data.mathHints?.[question.unitId]?.ru), `Math question ${question.id}: no Russian hint or unit scaffold`);
    check(!!(question.h_uz || data.mathHints?.[question.unitId]?.uz), `Math question ${question.id}: no Uzbek hint or unit scaffold`);
    if (question.type !== "spr") check(Array.isArray(question.o_uz) && question.o_uz.length === question.o.length, `Math question ${question.id}: Uzbek answer choices missing`);
    if (mathRuExplanationIds.has(question.id)) check(!!question.e_ru && question.e_ru.length >= 35, `Math question ${question.id}: Russian worked explanation missing`);
  }
}

const vocabularyTopicsByLevel = {};
for (const level of [1, 2, 3]) {
  const extraTopics = Object.values(data.vocabExtra).filter((topic) => topic.level === level);
  const geUnits = data.modules.filter((module) => module.track === "GE" && module.level === level);
  const count = extraTopics.length + geUnits.length;
  vocabularyTopicsByLevel[level] = count;
  check(count >= 40 && count <= 50, `English level ${level}: expected 40–50 vocabulary topics, found ${count}`);
  for (const topic of extraTopics) {
    check(topic.words.length >= 20, `English vocabulary topic at level ${level}: fewer than 20 words`);
    check(new Set(topic.words.map((word) => String(word[0] || "").toLowerCase())).size === topic.words.length, `English vocabulary topic ${topic.title?.en}: duplicate word within topic`);
    for (const word of topic.words) {
      check(!!word[0] && !!word[1] && !!word[2], `English vocabulary topic ${topic.title?.en}: vocabulary card missing word, translation, or definition`);
      allVocabularyWords.push(String(word[0] || "").toLowerCase());
    }
  }
}

const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const schema = fs.readFileSync(path.join(root, "supabase/schema.sql"), "utf8");
const config = fs.readFileSync(path.join(root, "js/config.js"), "utf8");
check(!/(?:SUPABASE_ANON_KEY|SUPABASE_KEY)\s*:\s*["'][^"']*(?:service[_-]?role|sb_secret_)/i.test(config), "A Supabase secret/service-role key must never be shipped to the browser");
check(schema.includes("auth.uid()") && schema.includes("enable row level security"), "Supabase schema must enforce authenticated row ownership with RLS");
check(schema.includes("delete_my_account") && schema.includes("on delete cascade"), "Supabase schema must support account deletion and cascading progress removal");
const staticKeys = new Set([...app.matchAll(/T\("((?:[^"\\]|\\.)*)"/g)].map((match) => match[1].replace(/\\"/g, '"')));
const missingUz = [...staticKeys].filter((key) => !Object.prototype.hasOwnProperty.call(data.uz, key));
check(missingUz.length === 0, `Untranslated static Uzbek UI labels: ${missingUz.join(" | ")}`);
check(app.includes("This form copies your feedback but does not send it."), "Feedback modal must accurately say it copies but does not send feedback");
check(!app.includes("There is no server behind this app"), "Obsolete feedback message incorrectly claims there is no server");
const dynamicCases = [
  ["5 of 8 correct", "To‘g‘ri javoblar: 5 / 8."],
  ["2 questions are due for review. Spaced review is what makes progress last.", "Takrorlash vaqti keldi: 2 ta savol. Oraliqli takrorlash bilimni mustahkamlaydi."],
  ["3 more to reach today's goal.", "Kunlik maqsadga yetish uchun yana 3 ta savol qoldi."],
  ["Strengthen: Linear equations", "Ko‘nikmani mustahkamlang: Linear equations"],
  ["Gather evidence: Grammar", "Ko‘nikma bo‘yicha ma’lumot to‘plang: Grammar"],
  ["10 different questions from this module. You need 80% to pass. Explanations appear after you finish, and you can retake the test at any time.", "Ushbu moduldan 10 ta turli savol. O‘tish uchun 80% kerak. Izohlar test tugagach ko‘rsatiladi; testni istalgan vaqtda qayta topshirishingiz mumkin."],
  ["36 mixed questions from this level. Questions are sampled across its available modules. You need 80% to pass.", "Bu darajadagi modullardan 36 ta aralash savol. Savollar mavjud modullardan tanlanadi. O‘tish uchun 80% kerak."],
  ["20 mixed questions from the modules in this section. Each attempt samples easy, medium and hard questions without repeats. You need 80% to pass.", "Ushbu bo‘lim modullaridan 20 ta aralash savol. Har urinishda oson, o‘rta va qiyin savollar takrorlanmasdan tanlanadi. O‘tish uchun 80% kerak."],
  ["50 mixed questions from every unit of every course. A broad check of everything you have studied. You need 80% to pass. Explanations appear after you finish.", "Barcha kurs modullaridan 50 ta aralash savol. Bu o‘rganganlaringizni umumiy tekshiradi. O‘tish uchun 80% kerak. Izohlar test tugagach ko‘rsatiladi."],
  ["4 of12 notebook questions passed all review steps; 2 due now.", "Bloknotdagi 4 / 12 savol barcha takrorlash bosqichlaridan o‘tdi; hozir 2 tasi takrorlanishi kerak."],
  ["1 unanswered. Finish anyway?", "1 ta savol javobsiz. Shunday bo‘lsa ham yakunlaysizmi?"],
  ["Passed: you reached 80%.", "O‘tdingiz: 80% natijaga erishdingiz."],
  ["Not passed yet: 80% is needed. Review the lesson and try again.", "Hozircha o‘tmadingiz: 80% kerak. Izohlarni o‘qing, darsni takrorlang va testni qayta ishlang."],
  ["You missed 2 of 5 questions on this skill. Review the lesson, solve three targeted questions, and revisit this skill tomorrow.", "Bu ko‘nikma bo‘yicha 5 savoldan 2 tasida xato qildingiz. Darsni ko‘rib chiqing, uchta maqsadli savolni yeching va ertaga yana takrorlang."],
  ["Review up to 5 of 9 due questions", "Takrorlash muddati kelgan 9 savoldan 5 tagachasini ko‘rib chiqing"],
  ["Review 2 due questions", "2 ta muddati kelgan savolni takrorlang"],
  ["We sent a sign-in link to learner@example.com. Open it on this device.", "Kirish havolasini learner@example.com manziliga yubordik. Havolani shu qurilmada oching."],
  ["If an account exists for learner@example.com, a reset link is on its way.", "Agar learner@example.com uchun hisob mavjud bo‘lsa, parolni tiklash havolasi yuboriladi."],
  ["Check learner@example.com and confirm your address, then sign in.", "learner@example.com pochtasini tekshiring, manzilni tasdiqlang va tizimga kiring."],
  ["The backup has 12 attempts and4 notebook entries. Your current data will be replaced.", "Zaxira nusxasida 12 urinish va 4 bloknot yozuvi bor. Joriy ma’lumotlaringiz almashtiriladi."]
];
const uzDynamic = context.CS_UZ_DYNAMIC;
for (const [source, expected] of dynamicCases) check(uzDynamic(source) === expected, `Uzbek dynamic message translation failed: ${source}`);

const report = {
  modules: data.units.length,
  questions: data.questions.length,
  vocabularyCards: allVocabularyWords.length,
  uniqueVocabularyWords: new Set(allVocabularyWords).size,
  repeatedVocabularyOccurrences: allVocabularyWords.length - new Set(allVocabularyWords).size,
  englishVocabularyTopicsByLevel: vocabularyTopicsByLevel,
  learningSections: data.sections.length,
  staticUzbekKeys: staticKeys.size,
  dynamicUzbekMessages: dynamicCases.length,
  russianMathWorkedExplanationsAdded: mathRuExplanationIds.size,
  russianMathExplanationCoverage: {
    translated: mathQuestions.filter((question) => question.e_ru && !/^(Навык:|Skill:)/.test(question.e_ru)).length,
    total: mathQuestions.length
  },
  missingUzbekKeys: missingUz,
  errors
};
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
