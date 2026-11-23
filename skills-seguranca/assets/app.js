const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
if (burger && links) {
  const setOpen = (open) => {
    links.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? burger.getAttribute("data-close") : burger.getAttribute("data-open"));
  };
  burger.addEventListener("click", () => setOpen(!links.classList.contains("open")));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

const progress = document.getElementById("progress");
const sticky = document.getElementById("stickyCta");
const hero = document.getElementById("top");
const secs = [...document.querySelectorAll("main section[id]")];
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
  if (links) {
    let cur = "";
    secs.forEach(s => { if (s.offsetTop - 120 <= window.scrollY) cur = s.id; });
    links.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
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
