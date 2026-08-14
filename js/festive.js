/* ============================================================
   Enhency — Independence Day festive glimpse (auto date-gated)
   Active window: 14–19 August (IST). On 20 Aug it stops
   injecting anything, so the site returns to normal automatically.
   Self-contained: injects its own styles (no CSS file dependency).
   Preview any time with ?festive=1  ·  force off with ?festive=0
   ============================================================ */
(function () {
  "use strict";
  if (window.__enhFestive) return;
  window.__enhFestive = true;

  // Window boundaries in UTC for IST midnight (IST = UTC+5:30)
  // 14 Aug 2026 00:00 IST == 13 Aug 2026 18:30 UTC  (live from now)
  // 20 Aug 2026 00:00 IST == 19 Aug 2026 18:30 UTC  (auto-reverts)
  var START = Date.UTC(2026, 7, 13, 18, 30, 0);
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
      ".festive-bar{animation:festiveDrop .7s cubic-bezier(.16,.84,.44,1) both}" +
      "@keyframes festiveDrop{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}" +
      ".festive-strip{position:relative;height:4px;width:100%;overflow:hidden;background:linear-gradient(90deg,#FF9933 0 33.33%,#fff 33.33% 66.66%,#138808 66.66% 100%)}" +
      ".festive-strip::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,transparent 40%,rgba(255,255,255,.9) 50%,transparent 60%);transform:translateX(-100%);animation:festiveShine 3.8s ease-in-out infinite}" +
      "@keyframes festiveShine{0%{transform:translateX(-100%)}55%,100%{transform:translateX(200%)}}" +
      ".festive-ribbon{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;gap:.7rem;padding:.55rem 2.8rem .55rem 1rem;font-size:.92rem;color:#0b1b34;background:linear-gradient(180deg,#ffffff,#eef4ff)}" +
      ".festive-ribbon::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-120%);animation:festiveSheen 5.5s ease-in-out infinite;pointer-events:none}" +
      "@keyframes festiveSheen{0%{transform:translateX(-120%)}45%,100%{transform:translateX(120%)}}" +
      ".festive-ribbon .festive-ico{display:inline-flex;align-items:center;gap:.45rem;flex:none}" +
      ".festive-msg{position:relative;line-height:1.35;text-align:center;transition:opacity .45s ease,transform .45s ease;min-width:0}" +
      ".festive-msg.out{opacity:0;transform:translateY(-4px)}" +
      ".festive-ribbon b{color:#c2410c}" +
      ".festive-ribbon .jaihind{color:#138808;font-weight:800;letter-spacing:.2px}" +
      ".festive-chakra{width:22px;height:22px;flex:none;display:inline-flex}" +
      ".festive-chakra svg{width:100%;height:100%;animation:chakraSpin 8s linear infinite}" +
      "@keyframes chakraSpin{to{transform:rotate(360deg)}}" +
      ".festive-flag{width:26px;height:22px;flex:none;display:inline-flex}" +
      ".festive-flag .cloth{transform-origin:0 50%;animation:flagWave 2.6s ease-in-out infinite}" +
      "@keyframes flagWave{0%,100%{transform:skewY(0) scaleX(1)}25%{transform:skewY(-3.2deg) scaleX(.98)}50%{transform:skewY(0) scaleX(1)}75%{transform:skewY(3.2deg) scaleX(.98)}}" +
      ".festive-close{position:absolute;right:.6rem;top:50%;transform:translateY(-50%);background:transparent;border:0;font-size:1.35rem;line-height:1;color:#6b7790;cursor:pointer;padding:0 .25rem;z-index:2}" +
      ".festive-close:hover{color:#0b1b34}" +
      "@media(max-width:600px){.festive-ribbon{font-size:.75rem;padding:.55rem 2rem .55rem .55rem;gap:.45rem}.festive-chakra{width:18px;height:18px}.festive-flag{width:22px;height:18px}}" +
      ".festive-confetti{position:fixed;left:0;top:0;width:100%;height:0;z-index:1150;pointer-events:none}" +
      ".festive-confetti i{position:fixed;top:-16px;width:8px;height:13px;border-radius:1px;opacity:0;animation-name:confettiFall;animation-timing-function:cubic-bezier(.3,.2,.4,1);animation-fill-mode:forwards}" +
      "@keyframes confettiFall{0%{opacity:0;transform:translateY(-10px) rotate(0)}8%{opacity:1}100%{opacity:0;transform:translateY(102vh) translateX(var(--drift,30px)) rotate(var(--spin,540deg))}}" +
      ".festive-petals{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:2}" +
      ".festive-petal{position:absolute;top:-18px;width:9px;height:9px;border-radius:2px 6px 2px 6px;opacity:0;animation-name:petalFall;animation-timing-function:ease-in;animation-fill-mode:forwards}" +
      "@keyframes petalFall{0%{transform:translateY(-14px) translateX(0) rotate(0);opacity:0}12%{opacity:.82}100%{transform:translateY(var(--fall,380px)) translateX(var(--sway,18px)) rotate(300deg);opacity:0}}" +
      "@media(prefers-reduced-motion:reduce){.festive-bar{animation:none}.festive-strip::after,.festive-ribbon::after,.festive-chakra svg,.festive-flag .cloth{animation:none}.festive-msg{transition:none}.festive-petals,.festive-confetti{display:none}}";
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

  /* ---- Small waving tricolour flag ---- */
  function flag() {
    return '<svg viewBox="0 0 34 28" aria-hidden="true">' +
      '<line x1="3" y1="1" x2="3" y2="27" stroke="#7a5230" stroke-width="2.2" stroke-linecap="round"/>' +
      '<g class="cloth">' +
        '<rect x="4" y="2" width="26" height="6" fill="#FF9933"/>' +
        '<rect x="4" y="8" width="26" height="6" fill="#ffffff"/>' +
        '<rect x="4" y="14" width="26" height="6" fill="#138808"/>' +
        '<circle cx="17" cy="11" r="2.4" fill="none" stroke="#000080" stroke-width=".8"/>' +
      '</g></svg>';
  }

  /* ---- Rotating patriotic messages ---- */
  var MESSAGES = [
    'Happy <b>80th Independence Day</b> 🇮🇳 &nbsp;<span class="jaihind">Jai Hind!</span>',
    'Celebrating the spirit of a <b>self-reliant, Digital India</b> 🇮🇳',
    '<b>Freedom to build.</b> Freedom to innovate. &nbsp;<span class="jaihind">Jai Hind!</span>',
    'Enhency salutes every builder of <b>New India</b> 🇮🇳'
  ];

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
          '<span class="festive-ico"><span class="festive-flag">' + flag() + '</span>' +
            '<span class="festive-chakra">' + chakra() + '</span></span>' +
          '<span class="festive-msg">' + MESSAGES[0] + '</span>' +
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

    // rotate messages (skipped under reduced motion)
    var msg = bar.querySelector(".festive-msg");
    if (msg && !reduce && MESSAGES.length > 1) {
      var idx = 0;
      setInterval(function () {
        if (!document.body.contains(msg)) return;
        msg.classList.add("out");
        setTimeout(function () {
          idx = (idx + 1) % MESSAGES.length;
          msg.innerHTML = MESSAGES[idx];
          msg.classList.remove("out");
        }, 460);
      }, 4200);
    }
  }

  /* ---- One-time tricolour confetti burst on load ---- */
  function confettiBurst() {
    if (reduce) return;
    var layer = document.createElement("div");
    layer.className = "festive-confetti";
    layer.setAttribute("aria-hidden", "true");
    var colors = ["#FF9933", "#ffffff", "#138808", "#000080"];
    for (var i = 0; i < 46; i++) {
      var p = document.createElement("i");
      var c = colors[i % colors.length];
      p.style.background = c;
      if (c === "#ffffff") p.style.boxShadow = "0 0 0 1px rgba(11,27,52,.12)";
      p.style.left = (Math.random() * 98).toFixed(1) + "%";
      p.style.setProperty("--drift", ((Math.random() * 120) - 60).toFixed(0) + "px");
      p.style.setProperty("--spin", (360 + Math.random() * 540).toFixed(0) + "deg");
      p.style.animationDuration = (2.8 + Math.random() * 1.8).toFixed(2) + "s";
      p.style.animationDelay = (Math.random() * 0.9).toFixed(2) + "s";
      if (i % 3 === 0) { p.style.width = "7px"; p.style.height = "7px"; p.style.borderRadius = "50%"; }
      layer.appendChild(p);
    }
    document.body.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 6000);
  }

  /* ---- Gentle tricolour petal drift in the hero ---- */
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
    setTimeout(function () { layer.remove(); }, 9500);
  }

  function boot() {
    injectStyles();
    buildBar();
    confettiBurst();
    heroPetals();
  }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
