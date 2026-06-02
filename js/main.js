/* ============================================================
   Enhency — UI behaviour: mobile nav, scroll reveal, counters, forms
   ============================================================ */
(function () {
  "use strict";

  /* Scroll reveal */
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add("in");
                io.unobserve(en.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        )
      : null;

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (io) io.observe(el);
      else el.classList.add("in");
    });
  }

  /* Animated counters */
  function runCounters() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      if (el.dataset.done) return;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const dur = 1400;
      const start = performance.now();
      el.dataset.done = "1";
      function tick(now) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target % 1 === 0 ? Math.round(target * eased) : (target * eased).toFixed(2);
        el.textContent = val + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  // trigger counters when their band enters view
  function bindCounters() {
    const band = document.querySelector("[data-counter-band]");
    if (!band || !("IntersectionObserver" in window)) {
      runCounters();
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            runCounters();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(band);
  }

  /* Contact / demo form (no backend — friendly confirmation) */
  function bindForms() {
    document.querySelectorAll("form#contactForm").forEach((form) => {
      if (form.dataset.bound) return;
      form.dataset.bound = "1";
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const note = form.querySelector("#formNote");
        if (note) note.hidden = false;
        form.querySelectorAll("input, textarea, select, button").forEach((f) => (f.disabled = true));
      });
    });
  }

  /* Back-to-top button (injected by nav.js) */
  function bindToTop() {
    const btn = document.getElementById("toTop");
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = "1";
    const onScroll = () => btn.classList.toggle("show", window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    onScroll();
  }

  /* Subtle cursor parallax tilt for the isometric hero scene */
  function bindParallax() {
    const hero = document.querySelector(".hero");
    const iso = document.querySelector(".iso");
    if (!hero || !iso || iso.dataset.bound) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Skip parallax on touch / coarse-pointer devices (no hover) to avoid jank
    if (window.matchMedia && (window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches)) return;
    iso.dataset.bound = "1";
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      const nx = px / r.width - 0.5;
      const ny = py / r.height - 0.5;
      iso.style.transform = `rotateX(${(-ny * 6).toFixed(2)}deg) rotateY(${(nx * 8).toFixed(2)}deg)`;
      hero.style.setProperty("--mx", px + "px");
      hero.style.setProperty("--my", py + "px");
    });
    hero.addEventListener("pointerleave", () => {
      iso.style.transform = "";
      hero.style.removeProperty("--mx");
      hero.style.removeProperty("--my");
    });
  }

  /* Cursor-follow spotlight on cards (delegated, rAF-throttled) */
  function bindCardSpotlight() {
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;
    if (document.body.dataset.spotBound) return;
    document.body.dataset.spotBound = "1";
    let raf = 0, pending = null;
    document.addEventListener(
      "pointermove",
      (e) => {
        const card = e.target.closest ? e.target.closest(".card") : null;
        if (!card) return;
        pending = { card, x: e.clientX, y: e.clientY };
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (!pending) return;
          const r = pending.card.getBoundingClientRect();
          pending.card.style.setProperty("--mx", pending.x - r.left + "px");
          pending.card.style.setProperty("--my", pending.y - r.top + "px");
        });
      },
      { passive: true }
    );
  }

  function init() {
    observeReveals();
    bindCounters();
    bindForms();
    bindToTop();
    bindParallax();
    bindCardSpotlight();
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);

  // re-run after render.js injects interior page content
  document.addEventListener("page:rendered", () => {
    observeReveals();
    bindCounters();
    bindForms();
  });
})();
