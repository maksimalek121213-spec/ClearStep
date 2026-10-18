#!/usr/bin/env node
/* Exercise the production backup sanitizer and HTML text escaper with hostile and malformed backups. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appPath = path.resolve(__dirname, "..", "app.js");
const app = fs.readFileSync(appPath, "utf8");
const escMatch = app.match(/^const esc=.*;$/m);
const helpersStart = app.indexOf("const okObj=");
const helpersEnd = app.indexOf("\nfunction load()", helpersStart);
assert.ok(escMatch && helpersStart >= 0 && helpersEnd > helpersStart, "Could not locate production sanitizer helpers");

const context = {
  S: { study: { intervals: [1, 3, 7, 14] } },
  LANGS: ["en", "ru", "uz"],
  COURSES: [{ id: "course-1" }],
  SECTIONS: [{ id: "EN" }],
  qid: (id) => id === 1 ? { id: 1 } : null,
  unitOf: (id) => id === "u1" ? { id } : null,
  localStorage: { getItem: () => null }
};
vm.createContext(context);
vm.runInContext(`${escMatch[0]}\n${app.slice(helpersStart, helpersEnd)}\nglobalThis.__clean=clean; globalThis.__esc=esc;`, context, { filename: appPath });

const attack = `<img src=x onerror="alert(1)">${"x".repeat(600)}`;
const backup = {
  v: 2,
  goal: 10,
  upd: 123,
  lang: "ru",
  a: [
    { id: 1, ts: 123, sel: attack, ok: false, mode: "practice", first: true },
    { id: 99999, ts: 123, ok: true }
  ],
  m: {
    1: { stage: 9, fails: -1, note: attack, flag: true, due: 123, done: false, why: "unexpected", lastWrong: attack },
    99999: { note: "unknown question" }
  },
  lc: { u1: 123, unknown: 456 },
  d: { EN: 5, unexpected: 99 },
  ut: { u1: [{ ts: 123, c: 2, n: 2, w: [1] }] },
  st: { "course-1": [{ ts: 123, c: 1, n: 1, w: [1], ids: [1] }] },
  words: { "u1-0": "known", "bad key": "again" },
  prefs: { theme: "unexpected", fontSize: "xlarge" },
  study: { track: "unexpected", level: 9, minutes: 2, practiceN: 100, difficulty: "unexpected", practiceSeconds: 1, shuffleAnswers: "true", intervals: [1, 2, 5, 10] }
};

const clean = context.__clean;
const sanitized = clean(backup);
assert.ok(sanitized, "Valid version 2 backup should be accepted");
assert.equal(sanitized.a.length, 1, "Unknown question attempts should be discarded");
assert.equal(sanitized.a[0].sel.length, 40, "Answer strings should be bounded");
assert.equal(Object.keys(sanitized.m).length, 1, "Unknown notebook question IDs should be discarded");
assert.equal(sanitized.m[1].stage, 4, "Review stage should be clamped");
assert.equal(sanitized.m[1].fails, 0, "Negative failure counts should be clamped");
assert.equal(sanitized.m[1].why, null, "Unknown mistake categories should be discarded");
assert.equal(sanitized.m[1].note.length, 500, "Notes should be bounded");
assert.deepEqual(Object.keys(sanitized.d), ["EN"], "Unknown diagnostic keys should be discarded");
assert.equal(sanitized.study.track, "combined", "Invalid study preferences should fall back to safe defaults");
assert.deepEqual(Array.from(sanitized.study.intervals), [1, 2, 5, 10], "Supported review intervals should survive import");
assert.deepEqual(Object.keys(sanitized.words), ["u1-0"], "Unknown vocabulary-state keys should be discarded");

const escaped = context.__esc(sanitized.m[1].note);
assert.ok(!escaped.includes("<img"), "Imported notes must be escaped before HTML rendering");
assert.ok(escaped.includes("&lt;img"), "Escaped note should remain readable as text");
const roundTrip = clean(JSON.parse(JSON.stringify(sanitized)));
assert.deepEqual(JSON.parse(JSON.stringify(roundTrip)), JSON.parse(JSON.stringify(sanitized)), "Sanitized backup should survive an export/import JSON round-trip");
assert.equal(clean({ ...backup, v: 3 }), null, "Unsupported backup versions should be rejected");
assert.equal(clean({ ...backup, a: "not an array" }), null, "Malformed backup shape should be rejected");

console.log("PASS: import sanitizer filters unknown records, bounds user fields, escapes hostile notes, and round-trips valid progress.");
