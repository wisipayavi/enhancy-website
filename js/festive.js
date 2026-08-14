/* ============================================================
   Enhency — Independence Day festive glimpse (auto date-gated)
   Active window: 15–19 August (IST). On 20 Aug it stops
   injecting anything, so the site returns to normal automatically.
   Self-contained: injects its own styles (no CSS file dependency).
   Preview any time with ?festive=1  ·  force off with ?festive=0
   ============================================================ */
(function () {
  "use strict";
  if (window.__enhFestive) return;
  window.__enhFestive = true;

  // Window boundaries in UTC for IST midnight (IST = UTC+5:30)
  // 15 Aug 2026 00:00 IST == 14 Aug 2026 18:30 UTC
  // 20 Aug 2026 00:00 IST == 19 Aug 2026 18:30 UTC
  var START = Date.UTC(2026, 7, 14, 18, 30, 0);
  var END = Date.UTC(2026, 7, 19, 18, 30, 0);

  var q = "";
  try { q = (new URLSearchParams(location.search)).get("festive") || ""; } catch (e) {}
  var forceOn = /^(1|on|yes|true)$/i.test(q);
  var forceOff = /^(0|off|no|false)$/i.test(q);

  var now = Date.now();
  var active = forceOn || (!forceOff && now >= START && now < END);
  if (!active) return; // outside the window: nothing renders, site is normal

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("festive");

  /* ---- self-contained styles ---- */
  function injectStyles() {
    if (document.getElementById("enhFestiveCss")) return;
    var css =
      ".festive-strip{height:4px;width:100%;background:linear-gradient(90deg,#FF9933 0 33.33%,#fff 33.33% 66.66%,#138808 66.66% 100%)}" +
      ".festive-ribbon{position:relative;display:flex;align-items:center;justify-content:center;gap:.6rem;padding:.5rem 2.8rem .5rem 1rem;font-size:.9rem;color:#0b1b34;background:linear-gradient(180deg,#fff,#f6f8fc);border-bottom:1px solid #e6ebf3}" +
      ".festive-ribbon p{margin:0;line-height:1.35;text-align:center}" +
      ".festive-ribbon b{color:#c2410c}" +
      ".festive-ribbon .jaihind{color:#138808;font-weight:700}" +
      ".festive-chakra{width:22px;height:22px;flex:none;display:inline-flex}" +
      ".festive-chakra svg{width:100%;height:100%;animation:chakraSpin 9s linear infinite}" +
      "@keyframes chakraSpin{to{transform:rotate(360deg)}}" +
      ".festive-close{position:absolute;right:.7rem;top:50%;transform:translateY(-50%);background:transparent;border:0;font-size:1.35rem;line-height:1;color:#6b7790;cursor:pointer;padding:0 .2rem}" +
      ".festive-close:hover{color:#0b1b34}" +
      "@media(max-width:600px){.festive-ribbon{font-size:.76rem;padding:.5rem 2.2rem .5rem .6rem;gap:.45rem}.festive-chakra{width:18px;height:18px}}" +
      ".festive-petals{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:2}" +
      ".festive-petal{position:absolute;top:-18px;width:9px;height:9px;border-radius:2px 6px 2px 6px;opacity:0;animation-name:petalFall;animation-timing-function:ease-in;animation-fill-mode:forwards}" +
      "@keyframes petalFall{0%{transform:translateY(-14px) translateX(0) rotate(0);opacity:0}12%{opacity:.82}100%{transform:translateY(var(--fall,380px)) translateX(var(--sway,18px)) rotate(300deg);opacity:0}}" +
      "@media(prefers-reduced-motion:reduce){.festive-chakra svg{animation:none}.festive-petals{display:none}}";
    var st = document.createElement("style");
    st.id = "enhFestiveCss";
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* ---- Ashoka Chakra (24 spokes) ---- */
  function chakra() {
    var spokes = "";
    for (var i = 0; i < 24; i++) {
      spokes += '<line x1="20" y1="20" x2="20" y2="5" stroke="#000080" stroke-width="1.1" transform="rotate(' + (i * 15) + ' 20 20)"/>';
    }
    return '<svg viewBox="0 0 40 40" aria-hidden="true">' +
      '<circle cx="20" cy="20" r="15.5" fill="none" stroke="#000080" stroke-width="2"/>' +
      spokes + '<circle cx="20" cy="20" r="2.6" fill="#000080"/></svg>';
  }

  /* ---- Top strip + greeting ribbon ---- */
  function buildBar() {
    var bar = document.createElement("div");
    bar.className = "festive-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Independence Day greeting");
    var strip = '<div class="festive-strip" aria-hidden="true"></div>';
    var ribbon = "";
    if (sessionStorage.getItem("enhFestiveClosed") !== "1") {
      ribbon =
        '<div class="festive-ribbon">' +
          '<span class="festive-chakra">' + chakra() + "</span>" +
          '<p>Happy <b>80th Independence Day</b> 🇮🇳 — Enhency salutes the spirit of a self-reliant, Digital India. <span class="jaihind">Jai Hind!</span></p>' +
          '<button class="festive-close" aria-label="Dismiss greeting">×</button>' +
        "</div>";
    }
    bar.innerHTML = strip + ribbon;
    document.body.insertBefore(bar, document.body.firstChild);
    var close = bar.querySelector(".festive-close");
    if (close) {
      close.addEventListener("click", function () {
        try { sessionStorage.setItem("enhFestiveClosed", "1"); } catch (e) {}
        var r = bar.querySelector(".festive-ribbon");
        if (r) r.remove();
      });
    }
  }

  /* ---- Gentle, brief tricolor petal drift in the hero ---- */
  function heroPetals() {
    if (reduce) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;
    var layer = document.createElement("div");
    layer.className = "festive-petals";
    layer.setAttribute("aria-hidden", "true");
    var colors = ["#FF9933", "#ffffff", "#138808", "#000080"];
    for (var i = 0; i < 16; i++) {
      var p = document.createElement("i");
      p.className = "festive-petal";
      var c = colors[i % colors.length];
      p.style.background = c;
      if (c === "#ffffff") p.style.boxShadow = "0 0 0 1px rgba(11,27,52,.10)";
      p.style.left = (Math.random() * 96 + 2).toFixed(1) + "%";
      p.style.setProperty("--fall", (260 + Math.random() * 220).toFixed(0) + "px");
      p.style.setProperty("--sway", ((Math.random() * 46) - 23).toFixed(0) + "px");
      p.style.animationDuration = (4.2 + Math.random() * 2.6).toFixed(2) + "s";
      p.style.animationDelay = (Math.random() * 2.4).toFixed(2) + "s";
      layer.appendChild(p);
    }
    hero.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 9500); // one-time drift, not a loop
  }

  function boot() {
    injectStyles();
    buildBar();
    heroPetals();
  }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
