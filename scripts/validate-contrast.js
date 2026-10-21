const fs = require("node:fs");

const css = fs.readFileSync("styles.css", "utf8");
const blocks = {
  light: css.match(/:root\s*\{([\s\S]*?)\n\}/)?.[1],
  dark: css.match(/:root\[data-theme="dark"\]\s*\{([\s\S]*?)\n\}/)?.[1],
};
if (!blocks.light || !blocks.dark) throw new Error("Could not find light and dark theme token blocks.");

function tokens(block) {
  return Object.fromEntries([...block.matchAll(/--([\w-]+):\s*(#[\da-f]{6}|rgba?\([^)]*\))\s*;/gi)]
    .map(([, name, value]) => [name, value]));
}
function color(value) {
  if (/^#/.test(value)) return [1, 3, 5].map(i => parseInt(value.slice(i, i + 2), 16) / 255).concat(1);
  const m = value.match(/rgba?\(([^)]+)\)/i);
  if (!m) throw new Error(`Unsupported color token: ${value}`);
  const parts = m[1].split(/[,/ ]+/).filter(Boolean).map(Number);
  return parts.length === 3 ? [...parts.map(n => n / 255), 1] : [...parts.slice(0, 3).map(n => n / 255), parts[3]];
}
function composite(fg, bg) {
  const a = fg[3];
  return [0, 1, 2].map(i => fg[i] * a + bg[i] * (1 - a)).concat(1);
}
function luminance(c) {
  const v = c.slice(0, 3).map(x => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const failures = [];
for (const [theme, block] of Object.entries(blocks)) {
  const t = tokens(block);
  const base = color(t["bg-app"]);
  const surface = color(t["bg-surface-solid"] || t["bg-elevated"]);
  const cases = [
    ["primary text / app", "ink-primary", "bg-app"],
    ["secondary text / app", "ink-secondary", "bg-app"],
    ["muted text / app", "ink-muted", "bg-app"],
    ["accent text / app", "accent-text", "bg-app"],
    ["button text / accent", "ink-on-accent", "accent"],
    ["button text / accent hover", "ink-on-accent", "accent-hover"],
  ];
  for (const [name, fgKey, bgKey] of cases) {
    const score = contrast(color(t[fgKey]), color(t[bgKey]));
    if (score < 4.5) failures.push(`${theme}: ${name} is ${score.toFixed(2)}:1 (needs 4.5:1)`);
  }
  for (const status of ["ok", "warn", "err"]) {
    const bg = composite(color(t[`${status}-bg`]), surface);
    const score = contrast(color(t[status]), bg);
    if (score < 4.5) failures.push(`${theme}: ${status} text / status background is ${score.toFixed(2)}:1 (needs 4.5:1)`);
  }
  console.log(`${theme}: text, buttons, and status token pairs meet 4.5:1`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("PASS: 18 theme contrast pairs meet WCAG AA normal-text threshold.");
}
