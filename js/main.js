/* ============================================================
   Enhency — UI behaviour: mobile nav, scroll reveal, counters, forms
   ============================================================ */
(function () {
  "use strict";

  /* Mobile nav toggle (header is injected by nav.js, so query lazily) */
  function bindNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    // On mobile, tapping a top-level item with a dropdown shouldn't navigate to "#"
    menu.querySelectorAll(".nav-item > .nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 860 && link.getAttribute("href") === "#") e.preventDefault();
      });
    });
  }

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

  function init() {
    bindNav();
    observeReveals();
    bindCounters();
    bindForms();
    bindToTop();
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
