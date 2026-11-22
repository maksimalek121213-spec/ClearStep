#!/usr/bin/env node
/* Asset size report and budget check. Run: node scripts/measure-assets.js
   Measures what index.html loads (script count, raw and gzip bytes) and fails if a budget is exceeded.
   It measures bytes only; it does not measure real load time on a device. */
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const budgets = { scriptTags: 70, localJsGzipKB: 600, singleFileRawKB: 250, cssGzipKB: 30 };

const srcs = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]);
const local = srcs.filter((s) => !/^https?:/.test(s));
let raw = 0, gz = 0;
const rows = local.map((file) => {
  const buf = fs.readFileSync(path.join(root, file));
  const g = zlib.gzipSync(buf).length;
  raw += buf.length; gz += g;
  return { file, rawKB: buf.length / 1024, gzKB: g / 1024 };
}).sort((a, b) => b.rawKB - a.rawKB);

const css = fs.readFileSync(path.join(root, "styles.css"));
const cssGz = zlib.gzipSync(css).length / 1024;
const errors = [];
const check = (ok, msg) => { if (!ok) errors.push(msg); };
check(srcs.length <= budgets.scriptTags, `${srcs.length} script tags exceeds budget ${budgets.scriptTags}`);
check(gz / 1024 <= budgets.localJsGzipKB, `local JS ${(gz / 1024).toFixed(0)} KB gzip exceeds budget ${budgets.localJsGzipKB} KB`);
check(cssGz <= budgets.cssGzipKB, `styles.css ${cssGz.toFixed(0)} KB gzip exceeds budget ${budgets.cssGzipKB} KB`);
for (const r of rows) check(r.rawKB <= budgets.singleFileRawKB, `${r.file} is ${r.rawKB.toFixed(0)} KB raw, over the ${budgets.singleFileRawKB} KB single-file budget`);

console.log(`Script tags: ${srcs.length} (${local.length} local, ${srcs.length - local.length} remote)`);
console.log(`Local JavaScript: ${(raw / 1024).toFixed(0)} KB raw, ${(gz / 1024).toFixed(0)} KB gzip; styles.css: ${cssGz.toFixed(0)} KB gzip`);
console.log("Largest files:");
for (const r of rows.slice(0, 5)) console.log(`  ${r.rawKB.toFixed(0).padStart(5)} KB raw  ${r.gzKB.toFixed(0).padStart(4)} KB gzip  ${r.file}`);
if (errors.length) { console.error("FAIL:\n- " + errors.join("\n- ")); process.exit(1); }
console.log("PASS: asset budgets respected (bytes only, not load time).");
