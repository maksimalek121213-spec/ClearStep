
/* ==========================================================================
   INTERACTIVE CURSOR SPOTLIGHT & TACTILE RIPPLE ENGINE
   ========================================================================== */
document.addEventListener("pointermove", e => {
  const el = e.target.closest(".card, .choice-btn, .nav-btn, .btn-secondary");
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", (e.clientX - r.left) + "px");
  el.style.setProperty("--my", (e.clientY - r.top) + "px");
}, { passive: true });

document.addEventListener("pointerdown", e => {
  const btn = e.target.closest(".btn, .choice-btn, .nav-btn");
  if (!btn || btn.disabled) return;
  const r = btn.getBoundingClientRect();
  const sz = Math.max(r.width, r.height);
  const w = document.createElement("span");
  w.className = "cs-ripple";
  w.style.width = w.style.height = sz + "px";
  w.style.left = (e.clientX - r.left - sz / 2) + "px";
  w.style.top = (e.clientY - r.top - sz / 2) + "px";
  btn.appendChild(w);
  setTimeout(() => w.remove(), 660);
});

