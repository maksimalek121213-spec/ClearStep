const fs = require("node:fs");
const CS_RW_EXPECTED = [
  { "Expression of Ideas": 8, "Standard English Conventions": 7, "Craft and Structure": 7, "Information and Ideas": 5 },
  { "Expression of Ideas": 7, "Standard English Conventions": 6, "Craft and Structure": 7, "Information and Ideas": 7 }
];
const CS_MATH_EXPECTED = [
  { Algebra: 6, "Advanced Math": 6, "Problem-Solving and Data Analysis": 5, "Geometry and Trigonometry": 5 },
  { Algebra: 6, "Advanced Math": 5, "Problem-Solving and Data Analysis": 6, "Geometry and Trigonometry": 5 }
];

const vm = require("node:vm");
const html = fs.readFileSync("index.html", "utf8");
const context = vm.createContext({ window: {}, console });
for (const match of html.matchAll(/<script src="(data\/[^"]+\.js)"/g)) {
  vm.runInContext(fs.readFileSync(match[1], "utf8"), context, { filename: match[1] });
}
vm.runInContext(fs.readFileSync("js/sat-simulation.js", "utf8"), context, { filename: "js/sat-simulation.js" });
const modules = JSON.parse(vm.runInContext("JSON.stringify(window.CS_SAT.build(QUESTION_BANK, rows => rows))", context));
const ids = modules.flatMap(module => module.questions.map(question => question.id));
if (modules.map(module => module.questions.length).join(",") !== "27,27,22,22") throw new Error("Unexpected question count by module.");
if (modules.map(module => module.minutes).join(",") !== "32,32,35,35") throw new Error("Unexpected module time limits.");
if (new Set(ids).size !== 98) throw new Error("Simulation contains duplicate question IDs.");
if (modules.slice(2).some(module => module.questions.filter(question => question.type === "spr").length !== 5)) throw new Error("Each Math module must contain five numeric response questions.");
for (const module of modules) {
  const expected = module.section === "RW" ? CS_RW_EXPECTED[module.number - 1] : CS_MATH_EXPECTED[module.number - 1];
  const actual = Object.fromEntries([...new Set(module.questions.map(question => question.domain))].map(domain => [domain, module.questions.filter(question => question.domain === domain).length]));
  for (const [domain, count] of Object.entries(expected)) if (actual[domain] !== count) throw new Error(`${module.section} module ${module.number}: unexpected count for ${domain}.`);
}
let rejectedSmallPool = false;
try { vm.runInContext("window.CS_SAT.build([], rows => rows)", context); } catch { rejectedSmallPool = true; }
if (!rejectedSmallPool) throw new Error("Planner accepted a bank without the required SAT domains.");
console.log("PASS: SAT plan creates 27/27 RW and 22/22 Math questions, preserves domain quotas, includes 10 SPR items, has 98 unique IDs, and rejects undersized banks.");

