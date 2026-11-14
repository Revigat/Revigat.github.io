/* Destino de todo botão [data-cta]. Troque só o atributo data-cta no <body>. */
const CTA_URL = document.body.getAttribute("data-cta") || "";

document.querySelectorAll("[data-cta]").forEach(el => {
  if (CTA_URL) el.setAttribute("href", CTA_URL);
});

function isCheckout(url) {
  try {
    const host = new URL(url, window.location.href).hostname;
    return host === "pay.kiwify.com.br" || host === "pay.kiwify.com";
  } catch (_) {
    return false;
  }
}

if (isCheckout(CTA_URL)) {
  const CART_NAV_DELAY_MS = 300;
  function trackAddToCartAndGo(event) {
    const el = event.currentTarget;
    if (!el || !el.hasAttribute("data-cta")) return;
    try {
      if (typeof window.rdt === "function") window.rdt("track", "AddToCart");
    } catch (_) {}
    if (event.type !== "click") return;
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof event.button === "number" && event.button !== 0) return;
    if (el.target && el.target !== "_self") return;
    const href = el.href;
    if (!href) return;
    event.preventDefault();
    window.setTimeout(() => { window.location.assign(href); }, CART_NAV_DELAY_MS);
  }
  document.querySelectorAll("a[data-cta]").forEach(el => {
    el.addEventListener("click", trackAddToCartAndGo);
    el.addEventListener("auxclick", trackAddToCartAndGo);
  });
}

const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
if (burger && links) {
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? burger.getAttribute("data-close") : burger.getAttribute("data-open"));
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", burger.getAttribute("data-open"));
  }));
}

const progress = document.getElementById("progress");
const sticky = document.getElementById("stickyCta");
const hero = document.getElementById("top");
function onScroll() {
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  if (sticky && hero) {
    const passed = hero.getBoundingClientRect().bottom < 80;
    if (passed) { sticky.hidden = false; sticky.classList.add("show"); }
    else { sticky.classList.remove("show"); sticky.hidden = true; }
  }
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
}

document.querySelectorAll(".faq").forEach(item => {
  const btn = item.querySelector("button");
  const ans = item.querySelector(".ans");
  if (!btn || !ans) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faq button").forEach(b => b.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".faq .ans").forEach(a => a.classList.remove("open"));
    if (!open) { btn.setAttribute("aria-expanded", "true"); ans.classList.add("open"); }
  });
});

(function () {
  const c = document.getElementById("net");
  if (!c || reduce) return;
  const ctx = c.getContext("2d");
  const small = window.matchMedia("(max-width: 640px)");
  let w, h, pts, running = false;
  function resize() {
    const r = c.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = c.width = Math.floor(r.width * dpr);
    h = c.height = Math.floor(r.height * dpr);
    c.style.width = r.width + "px";
    c.style.height = r.height + "px";
    const n = Math.min(70, Math.floor((r.width * r.height) / 18000));
    pts = Array.from({ length: Math.max(n, 12) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * 0.22 * dpr,
      vy: (Math.random() - .5) * 0.22 * dpr
    }));
    draw(false);
  }
  function draw(move) {
    if (!pts) return;
    ctx.clearRect(0, 0, w, h);
    const max = 140 * Math.min(window.devicePixelRatio || 1, 2);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    for (let i = 0; i < pts.length; i++) {
      const pt = pts[i];
      if (move) {
        pt.x += pt.vx; pt.y += pt.vy;
        if (pt.x < 0 || pt.x > w) pt.vx *= -1;
        if (pt.y < 0 || pt.y > h) pt.vy *= -1;
      }
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 1.4 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34,211,238,.55)";
      ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j];
        const dx = pt.x - q.x, dy = pt.y - q.y, d = Math.hypot(dx, dy);
        if (d < max) {
          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = "rgba(59,130,246," + (0.16 * (1 - d / max)) + ")";
          ctx.lineWidth = dpr;
          ctx.stroke();
        }
      }
    }
  }
  function loop() {
    if (reduce || small.matches) { running = false; draw(false); return; }
    running = true;
    const visible = hero && hero.getBoundingClientRect().bottom > 0 && hero.getBoundingClientRect().top < window.innerHeight;
    if (!document.hidden && visible) draw(true);
    requestAnimationFrame(loop);
  }
  resize();
  if (!small.matches) loop();
  small.addEventListener("change", () => { if (!running && !small.matches) loop(); else draw(false); });
  window.addEventListener("resize", resize, { passive: true });
})();
