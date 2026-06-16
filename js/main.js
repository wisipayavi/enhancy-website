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

  /* Contact form -> emails the inquiry to support@enhency.com via FormSubmit
     (no backend needed). Submits over AJAX so the page doesn't redirect. */
  function bindForms() {
    document.querySelectorAll("form#contactForm").forEach((form) => {
      if (form.dataset.bound) return;
      form.dataset.bound = "1";
      const note = form.querySelector("#formNote");
      const btn = form.querySelector('button[type="submit"]');
      const endpoint = form.getAttribute("action") || "https://formsubmit.co/support@enhency.com";
      const ajax = endpoint.replace("formsubmit.co/", "formsubmit.co/ajax/");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const original = btn ? btn.textContent : "";
        if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
        if (note) { note.hidden = true; note.style.color = ""; }
        fetch(ajax, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
          .then((res) => { if (!res.ok) throw new Error("bad"); return res.json().catch(() => ({})); })
          .then(() => {
            if (note) { note.hidden = false; note.textContent = "Thanks! Your inquiry has been sent — our team will reply within one business day."; }
            if (btn) btn.textContent = "Sent ✓";
            form.querySelectorAll("input, textarea, select, button").forEach((f) => (f.disabled = true));
          })
          .catch(() => {
            if (note) { note.hidden = false; note.style.color = "#c0392b"; note.textContent = "Couldn't send right now. Please email support@enhency.com directly."; }
            if (btn) { btn.disabled = false; btn.textContent = original; }
          });
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
    const layers = [...iso.querySelectorAll(".iso-layer")];
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      const nx = px / r.width - 0.5;
      const ny = py / r.height - 0.5;
      iso.style.transform = `rotateX(${(-ny * 6).toFixed(2)}deg) rotateY(${(nx * 8).toFixed(2)}deg)`;
      // depth parallax: each layer drifts by its data-depth (more = closer)
      layers.forEach((l) => {
        const dep = parseFloat(l.getAttribute("data-depth")) || 0;
        l.setAttribute("transform", `translate(${(nx * dep).toFixed(1)} ${(ny * dep).toFixed(1)})`);
      });
      hero.style.setProperty("--mx", px + "px");
      hero.style.setProperty("--my", py + "px");
    });
    hero.addEventListener("pointerleave", () => {
      iso.style.transform = "";
      layers.forEach((l) => l.setAttribute("transform", "translate(0 0)"));
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

  /* Live transactions ticker in the hero scene */
  function bindLiveTicker() {
    const el = document.getElementById("liveTxn");
    if (!el || el.dataset.t) return;
    el.dataset.t = "1";
    let n = 124000;
    const fmt = (x) => x.toLocaleString("en-IN");
    setInterval(() => {
      n += Math.floor(Math.random() * 400) + 60;
      if (n > 999000) n = 120000 + Math.floor(Math.random() * 6000);
      el.textContent = fmt(n) + " / min";
    }, 1400);
  }

  /* Rich tooltips for the isometric hero chips */
  function bindChipTips() {
    const iso = document.querySelector(".iso");
    if (!iso || iso.dataset.tips) return;
    // Skip on touch / coarse-pointer devices (tooltips follow the cursor)
    if (window.matchMedia && (window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches)) return;
    iso.dataset.tips = "1";

    const TIPS = {
      UCB: ["Urban Cooperative Banks", "Modern UPI, IMPS & NACH rails for urban cooperative banks — API-first and go-live ready."],
      DCCB: ["District Central Cooperative Banks", "Connect DCCBs to real-time payments with settlement, reconciliation and compliance built in."],
      StCB: ["State Cooperative Banks", "Apex-tier banking infrastructure for state cooperative banks across the network."],
      PACS: ["Primary Agricultural Credit Societies", "Bring last-mile PACS online with digital onboarding and payment acceptance."],
      Soundbox: ["Audio Confirmation Device", "Instant multi-language audio confirmation of every merchant collection."],
      QR: ["Interoperable QR", "Dynamic & static UPI QR for fast, low-cost in-store and online acceptance."],
      POS: ["Point of Sale", "In-store device management with real-time authorization and settlement."],
      PG: ["Payment Gateway", "Unified online checkout — cards, UPI, netbanking & wallets via one integration."],
      UPI: ["Unified Payments Interface", "Full UPI stack — Acquiring, Issuing & TPAP (SDK / S2S) for banks and fintechs."],
      IMPS: ["Immediate Payment Service", "24×7 real-time interbank fund transfers with instant confirmation."],
      NACH: ["National Automated Clearing House", "Bulk recurring debits & credits — mandates, payroll and collections at scale."],
      KYC: ["Verification Suite", "eKYC · CKYC · Video KYC plus fraud prevention for secure onboarding."],
    };

    let tip = null;
    function ensureTip() {
      if (!tip) {
        tip = document.createElement("div");
        tip.className = "enh-tip";
        document.body.appendChild(tip);
      }
      return tip;
    }
    function place(e) {
      if (!tip) return;
      const pad = 16;
      let x = e.clientX + pad;
      let y = e.clientY + pad;
      const w = tip.offsetWidth, h = tip.offsetHeight;
      if (x + w + 8 > window.innerWidth) x = e.clientX - w - pad;
      if (y + h + 8 > window.innerHeight) y = e.clientY - h - pad;
      tip.style.left = x + "px";
      tip.style.top = y + "px";
    }

    iso.addEventListener("pointerover", (e) => {
      const chip = e.target.closest ? e.target.closest(".iso-chip") : null;
      if (!chip) return;
      const t = chip.querySelector("title");
      const key = t ? t.textContent.trim() : "";
      const info = TIPS[key];
      if (!info) return;
      const el = ensureTip();
      el.innerHTML = "<b></b><span></span>";
      el.querySelector("b").textContent = info[0];
      el.querySelector("span").textContent = info[1];
      place(e);
      requestAnimationFrame(() => el.classList.add("show"));
    });
    iso.addEventListener("pointermove", (e) => {
      if (tip && tip.classList.contains("show")) place(e);
    });
    iso.addEventListener("pointerout", (e) => {
      const chip = e.target.closest ? e.target.closest(".iso-chip") : null;
      if (chip && tip) tip.classList.remove("show");
    });
  }

  function init() {
    observeReveals();
    bindCounters();
    bindForms();
    bindToTop();
    bindParallax();
    bindCardSpotlight();
    bindLiveTicker();
    bindChipTips();
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
