(function (global) {
  "use strict";
  const RW = ["Expression of Ideas", "Standard English Conventions", "Craft and Structure", "Information and Ideas"];
  const MATH = ["Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry"];
  function take(bank, section, quota, used, shuffle, type) {
    const result = [];
    for (const [domain, count] of quota) {
      const pool = bank.filter(q => q.section === section && q.domain === domain && !used.has(q.id) && (!type || q.type === type));
      if (pool.length < count) throw new Error(`Not enough ${type || "questions"} in ${domain}`);
      const picked = shuffle(pool).slice(0, count);
      picked.forEach(q => used.add(q.id));
      result.push(...picked);
    }
    return shuffle(result);
  }
  function build(bank, shuffle) {
    const used = new Set(), modules = [];
    const rw = [
      [[RW[0], 8], [RW[1], 7], [RW[2], 7], [RW[3], 5]],
      [[RW[0], 7], [RW[1], 6], [RW[2], 7], [RW[3], 7]]
    ];
    rw.forEach((quota, i) => modules.push({ section: "RW", number: i + 1, minutes: 32, questions: take(bank, "RW", quota, used, shuffle) }));
    const spr = [
      [[MATH[0], 2], [MATH[1], 1], [MATH[2], 1], [MATH[3], 1]],
      [[MATH[0], 1], [MATH[1], 1], [MATH[2], 2], [MATH[3], 1]]
    ];
    const mc = [
      [[MATH[0], 4], [MATH[1], 5], [MATH[2], 4], [MATH[3], 4]],
      [[MATH[0], 5], [MATH[1], 4], [MATH[2], 4], [MATH[3], 4]]
    ];
    spr.forEach((quota, i) => {
      const questions = [...take(bank, "MATH", quota, used, shuffle, "spr"), ...take(bank, "MATH", mc[i], used, shuffle, "mc")];
      modules.push({ section: "MATH", number: i + 1, minutes: 35, questions: shuffle(questions) });
    });
    return modules;
  }
  global.CS_SAT = { build, rwDomains: RW, mathDomains: MATH };
})(window);
