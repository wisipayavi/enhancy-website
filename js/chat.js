/* ============================================================
   Enhency — Lead-capture chat assistant (no backend)
   Guides visitors about Enhency products, qualifies the need,
   collects name/email/company and emails the lead to business@enhency.com
   via FormSubmit (same no-backend service used by the contact form).
   ============================================================ */
(function () {
  "use strict";
  if (window.__enhChat) return;
  window.__enhChat = true;

  var LEAD_EMAIL = "business@enhency.com"; // change here to reroute leads
  var AJAX = "https://formsubmit.co/ajax/" + LEAD_EMAIL;

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var TOPICS = {
    upi: "Enhency offers a full UPI stack — Acquiring, Issuing, and TPAP (SDK/S2S) — plus IMPS and NACH. API-first, so banks, fintechs & TPAPs go live fast. 🚀",
    merchant: "Our Merchant Suite, Soundbox & QR, and POS cover onboarding, collections, settlement and reconciliation — one platform for merchant payments. 🏪",
    banking: "Enhency Mobile and Digital Banking let you launch secure banking apps & websites with hosting, SSL, domains and software. 📱",
    risk: "Verification Suite (eKYC · CKYC · Video KYC) and Enhency Shield (EFRM · I4C) power secure onboarding and fraud prevention. 🛡️",
  };

  var st = { stage: "idle", data: {}, opened: false };

  /* ---------- build UI ---------- */
  var fab = document.createElement("button");
  fab.className = "enh-fab";
  fab.setAttribute("aria-label", "Chat with Enhency");
  fab.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.3L3 21l1.2-4.5A8.4 8.4 0 1 1 21 11.5Z"/></svg><span class="enh-fab-dot"></span>';

  var panel = document.createElement("div");
  panel.className = "enh-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Enhency assistant");
  panel.innerHTML =
    '<div class="enh-head">' +
      '<span class="enh-ava">✦</span>' +
      '<div class="enh-htxt"><b>Enhency Assistant</b><span>Typically replies in a few minutes</span></div>' +
      '<button class="enh-close" aria-label="Close">&times;</button>' +
    "</div>" +
    '<div class="enh-body" id="enhBody"></div>' +
    '<form class="enh-foot" id="enhFoot" autocomplete="off">' +
      '<input id="enhInput" type="text" placeholder="Type a message…" aria-label="Message" />' +
      '<button type="submit" class="enh-send" aria-label="Send">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3 11 14"/><path d="M22 3 15 21l-4-7-7-4 18-7Z"/></svg>' +
      "</button>" +
    "</form>";

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  var body = panel.querySelector("#enhBody");
  var input = panel.querySelector("#enhInput");
  var foot = panel.querySelector("#enhFoot");

  /* ---------- helpers ---------- */
  function scroll() { body.scrollTop = body.scrollHeight; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function bubble(text, who) {
    var d = document.createElement("div");
    d.className = "enh-msg " + who;
    d.innerHTML = esc(text);
    body.appendChild(d);
    scroll();
  }
  function botSay(text, delay) {
    var typing = document.createElement("div");
    typing.className = "enh-msg bot enh-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing);
    scroll();
    setTimeout(function () {
      typing.remove();
      bubble(text, "bot");
    }, delay || 550);
  }
  function quick(items) {
    var wrap = document.createElement("div");
    wrap.className = "enh-qr";
    items.forEach(function (it) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "enh-chip";
      b.textContent = it.label;
      b.addEventListener("click", function () {
        // remove the quick replies once chosen
        bubble(it.label, "user");
        wrap.remove();
        it.fn();
      });
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
    scroll();
  }

  function showMenu() {
    st.stage = "menu";
    setTimeout(function () {
      quick([
        { label: "UPI & Payments", fn: function () { topic("upi"); } },
        { label: "Merchant & POS", fn: function () { topic("merchant"); } },
        { label: "Banking & Mobile", fn: function () { topic("banking"); } },
        { label: "KYC & Fraud", fn: function () { topic("risk"); } },
        { label: "💬 Talk to sales", fn: function () { startLead(""); } },
      ]);
    }, 700);
  }

  function topic(key) {
    st.data.interest = key;
    botSay(TOPICS[key]);
    setTimeout(function () {
      quick([
        { label: "Yes, contact me", fn: function () { startLead(key); } },
        { label: "Ask something else", fn: function () { botSay("Sure — what else can I help with?"); showMenu(); } },
      ]);
    }, 750);
  }

  function startLead(interest) {
    if (interest) st.data.interest = interest;
    st.stage = "name";
    botSay("Great! Let's get your details so our team can reach out. What's your name?");
    input.placeholder = "Your name";
    input.focus();
  }

  function routeKeyword(t) {
    var s = t.toLowerCase();
    if (/upi|payment|collect|imps|nach|issuing|acquir|tpap/.test(s)) return topic("upi");
    if (/merchant|qr|pos|soundbox|settle|reconcil|store/.test(s)) return topic("merchant");
    if (/bank|mobile|app|website|hosting|ssl/.test(s)) return topic("banking");
    if (/kyc|verif|fraud|risk|shield|ckyc|onboard/.test(s)) return topic("risk");
    if (/pric|cost|demo|sales|contact|quote|buy|talk/.test(s)) return startLead("");
    botSay("Got it 👍 Let me connect you with our team for the best answer.");
    setTimeout(function () { startLead(""); }, 700);
  }

  function submitLead() {
    st.stage = "submitting";
    botSay("Sending your details… ⏳", 300);
    var d = st.data;
    var fd = new FormData();
    fd.append("name", d.name || "");
    fd.append("email", d.email || "");
    fd.append("company", d.company || "");
    fd.append("phone", d.phone || "");
    fd.append("interest", d.interest || "general");
    fd.append("_subject", "New chat lead — Enhency website");
    fd.append("_template", "table");
    fd.append("_captcha", "false");
    fd.append(
      "message",
      "New lead from the website chat assistant.\n" +
        "Interest: " + (d.interest || "-") + "\n" +
        "Name: " + (d.name || "-") + "\n" +
        "Email: " + (d.email || "-") + "\n" +
        "Company: " + (d.company || "-") + "\n" +
        "Phone: " + (d.phone || "-")
    );
    fetch(AJAX, { method: "POST", headers: { Accept: "application/json" }, body: fd })
      .then(function (r) { if (!r.ok) throw new Error("bad"); return r.json().catch(function () { return {}; }); })
      .then(function () {
        st.stage = "done";
        botSay("Thanks " + (d.name || "") + "! 🎉 Your details are with our team — we'll reach out at " + d.email + " within one business day.");
        input.placeholder = "Conversation complete ✓";
        input.disabled = true;
      })
      .catch(function () {
        st.stage = "done";
        botSay("Thanks " + (d.name || "") + "! I couldn't reach the server just now — please email business@enhency.com directly and we'll respond fast.");
      });
  }

  /* ---------- input handling ---------- */
  function handleText(t) {
    bubble(t, "user");
    switch (st.stage) {
      case "name":
        st.data.name = t;
        st.stage = "email";
        botSay("Thanks " + t + "! What's your business email?");
        input.placeholder = "you@company.com";
        break;
      case "email":
        if (!EMAIL_RE.test(t)) { botSay("Hmm, that doesn't look like a valid email — could you re-enter it?"); break; }
        st.data.email = t;
        st.stage = "company";
        botSay("Which company are you with? (type 'skip' if you prefer)");
        input.placeholder = "Company name";
        break;
      case "company":
        st.data.company = /^skip$/i.test(t) ? "" : t;
        st.stage = "phone";
        botSay("A phone number to reach you? (optional — type 'skip')");
        input.placeholder = "Phone (optional)";
        break;
      case "phone":
        st.data.phone = /^skip$/i.test(t) ? "" : t;
        input.placeholder = "Type a message…";
        submitLead();
        break;
      case "done":
        botSay("Our team will be in touch soon. Meanwhile, feel free to explore the site! 🙌");
        break;
      default:
        routeKeyword(t);
    }
  }

  foot.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = input.value.trim();
    if (!t || input.disabled) return;
    input.value = "";
    handleText(t);
  });

  /* ---------- open / close ---------- */
  function openChat() {
    panel.classList.add("open");
    fab.classList.add("hidden");
    if (!st.opened) {
      st.opened = true;
      botSay("Hi 👋 I'm the Enhency assistant. What are you looking to build?", 400);
      showMenu();
    }
    setTimeout(function () { if (!input.disabled) input.focus(); }, 200);
  }
  function closeChat() {
    panel.classList.remove("open");
    fab.classList.remove("hidden");
  }
  fab.addEventListener("click", openChat);
  panel.querySelector(".enh-close").addEventListener("click", closeChat);
})();
