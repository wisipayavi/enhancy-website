/* ============================================================
   Enhency — Generic interior page renderer
   Reads window.PAGE_ID, finds PAGES[id], renders into #page.
   Special templates: contact, login.
   ============================================================ */

const ICONS = {
  tick: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
  pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
};
const ICON_CYCLE = ["bolt", "layers", "pulse", "shield", "grid", "code"];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const btn = (b, cls) => (b ? `<a class="btn ${cls}" href="${b.href}">${esc(b.t)}</a>` : "");

function cardsGrid(cards, cols) {
  const c = cols || (cards.length % 3 === 0 ? 3 : cards.length === 4 ? 4 : 3);
  return `<div class="grid cols-${c}">${cards
    .map((card, i) => `<article class="card reveal">
      <div class="card-ic">${ICONS[ICON_CYCLE[i % ICON_CYCLE.length]]}</div>
      <h3>${esc(card.t)}</h3><p>${esc(card.d)}</p>
    </article>`)
    .join("")}</div>`;
}

function capList(caps) {
  return `<div class="cap-list">${caps
    .map((c) => `<div class="cap-item"><span class="tick">${ICONS.tick}</span>
      <div><b>${esc(c.t)}</b><span>${esc(c.d)}</span></div></div>`)
    .join("")}</div>`;
}

/* ---- decorative visuals (no 3D on interior pages) ---- */
function mockDashboard(title) {
  const rows = ["UPI · Acquiring", "IMPS · Beneficiary", "NACH · Mandate", "Verification · eKYC"];
  return `<div class="mock reveal">
    <div class="mock-head"><i class="d"></i><i class="d"></i><i class="d"></i><span class="t">${esc(title || "Operations Console")}</span></div>
    <div class="mock-body">
      <div class="mock-bars">${[42, 68, 55, 80, 62, 90, 73].map((h) => `<i style="height:${h}%"></i>`).join("")}</div>
      ${rows.map((r, i) => `<div class="mock-row"><span class="ml"><span class="pin">${String(i + 1).padStart(2, "0")}</span>${r}</span><span class="mock-badge">Live</span></div>`).join("")}
    </div>
  </div>`;
}
function codeBlock() {
  return `<div class="code-block reveal">
    <div class="cb-head"><i class="d"></i><i class="d"></i><i class="d"></i><span class="t">POST /v1/payments</span></div>
    <pre><code><span class="c">// Initiate a UPI collect request</span>
<span class="k">const</span> res = <span class="k">await</span> enhency.payments.<span class="k">create</span>({
  rail: <span class="s">"upi"</span>,
  flow: <span class="s">"collect"</span>,
  amount: <span class="s">14900</span>,
  vpa: <span class="s">"merchant@enhency"</span>,
  webhook: <span class="s">"https://api.acme.in/hooks"</span>
});
<span class="c">// → { id, status: "pending", routed_via }</span></code></pre>
  </div>`;
}
function netVisual() {
  return `<div class="hero-visual-frame reveal" style="min-height:360px">
    <div class="vf-head"><i class="vf-dot live"></i> Payment network · live routing</div>
    <svg viewBox="0 0 400 320" width="100%" height="100%" style="position:absolute;inset:0" aria-hidden="true">
      <g stroke="#cdd9f0" stroke-width="1.5" fill="none">
        <path d="M70 90 L200 160 L330 80"/><path d="M70 230 L200 160 L330 240"/>
        <path d="M70 90 L70 230"/><path d="M330 80 L330 240"/><path d="M200 160 L200 60"/>
      </g>
      <g fill="#1d4ed8">
        <circle cx="200" cy="160" r="12"/><circle cx="70" cy="90" r="8"/><circle cx="330" cy="80" r="8"/>
        <circle cx="70" cy="230" r="8"/><circle cx="330" cy="240" r="8"/><circle cx="200" cy="60" r="8" fill="#0ea5e9"/>
      </g>
    </svg>
    <div class="vf-stats">
      <div class="vf-stat"><b>99.99%</b><span>Uptime</span></div>
      <div class="vf-stat"><b>&lt;120ms</b><span>Routing</span></div>
      <div class="vf-stat"><b>24×7</b><span>Monitoring</span></div>
    </div>
  </div>`;
}
/* Context-aware visuals: built from each page's own content */
function statusBadge(i) { return ["Live", "Active", "Healthy", "Ready"][i % 4]; }

function consoleCard(title, rows) {
  const list = (rows || []).slice(0, 4);
  return `<div class="mock reveal">
    <div class="mock-head"><i class="d"></i><i class="d"></i><i class="d"></i><span class="t">${esc(title)}</span></div>
    <div class="mock-body">
      <div class="mock-bars">${[46, 70, 58, 82, 64, 90, 74].map((h) => `<i style="height:${h}%"></i>`).join("")}</div>
      ${list.map((r, i) => `<div class="mock-row"><span class="ml"><span class="pin">${String(i + 1).padStart(2, "0")}</span>${esc(r)}</span><span class="mock-badge">${statusBadge(i)}</span></div>`).join("")}
    </div>
  </div>`;
}

function flowCard(title, steps) {
  const s = (steps || []).slice(0, 4);
  return `<div class="mock reveal">
    <div class="mock-head"><i class="d"></i><i class="d"></i><i class="d"></i><span class="t">${esc(title)}</span></div>
    <div class="mock-body"><div class="flow-pipe">
      ${s.map((step, i) => `<div class="flow-node"><span class="fn-dot">${i + 1}</span><span>${esc(step)}</span></div>${i < s.length - 1 ? '<div class="flow-arrow">↓</div>' : ""}`).join("")}
    </div></div>
  </div>`;
}

const RAIL = {
  "upi-stack": ["POST /v1/upi/collect", "Initiate a UPI collect request", [["rail", '"upi"'], ["flow", '"collect"'], ["amount", "14900"], ["vpa", '"merchant@enhency"']]],
  "acquiring-upi-stack": ["POST /v1/upi/acquire", "Accept a merchant UPI payment", [["mode", '"qr"'], ["amount", "49900"], ["merchant_id", '"mer_8x2k"']]],
  "issuing-upi-stack": ["POST /v1/upi/authorize", "Authorize an issuer-side UPI debit", [["account", '"ac_91f0"'], ["amount", "14900"], ["currency", '"INR"']]],
  "tpap-stack": ["POST /v1/tpap/transactions", "Start a TPAP UPI payment", [["flow", '"intent"'], ["vpa", '"user@enhency"'], ["amount", "9900"]]],
  "imps-stack": ["POST /v1/imps/transfer", "Send an IMPS transfer", [["ifsc", '"HDFC0000123"'], ["account", '"50100xxxx"'], ["amount", "250000"]]],
  "nach": ["POST /v1/nach/mandates", "Register a NACH mandate", [["max_amount", "500000"], ["frequency", '"monthly"'], ["account", '"50100xxxx"']]],
  "verification-suite": ["POST /v1/kyc/verify", "Run an eKYC verification", [["type", '"ekyc"'], ["id_number", '"XXXX1234"'], ["consent", "true"]]],
  "enhency-shield": ["POST /v1/risk/evaluate", "Score a transaction for risk", [["txn_id", '"txn_4a9"'], ["amount", "99900"], ["signals", '"device,velocity"']]],
  "merchant-suite": ["POST /v1/merchants", "Onboard a merchant", [["name", '"Acme Retail"'], ["mcc", '"5411"'], ["settlement", '"t+1"']]],
  "communication": ["POST /v1/messages", "Send a transactional message", [["channel", '"whatsapp"'], ["to", '"+9198xxxxxx"'], ["template", '"txn_alert"']]],
  "soundbox-qr": ["POST /v1/qr", "Create a dynamic UPI QR", [["type", '"dynamic"'], ["amount", "19900"], ["soundbox", "true"]]],
  "pos": ["POST /v1/pos/charge", "Charge on a POS terminal", [["terminal_id", '"tid_77"'], ["amount", "129900"], ["mode", '"card"']]],
  "digital-banking": ["POST /v1/banking/accounts", "Provision a banking profile", [["product", '"savings"'], ["kyc", '"verified"']]],
  "enhency-mobile": ["POST /v1/mobile/session", "Start a mobile banking session", [["device_id", '"dev_2k"'], ["auth", '"biometric"']]],
  "payment-gateway-orchestration": ["POST /v1/payments", "Route with orchestration", [["amount", "49900"], ["routing", '"smart"'], ["retries", "true"]]],
  "payment-link": ["POST /v1/payment-links", "Create a payment link", [["amount", "250000"], ["purpose", '"Invoice #1042"'], ["notify", '"email,sms"']]],
  "payment-form": ["POST /v1/checkout/forms", "Create a hosted checkout form", [["amount", "49900"], ["currency", '"INR"'], ["theme", '"light"']]],
  "tpv": ["POST /v1/tpv/validate", "Validate a bank account", [["ifsc", '"ICIC0000456"'], ["account", '"00112233"'], ["name", '"Jane Doe"']]],
  "docs": ["POST /v1/payments", "Your first API call", [["rail", '"upi"'], ["amount", "14900"], ["currency", '"INR"']]],
  _default: ["POST /v1/payments", "Create a payment", [["rail", '"upi"'], ["amount", "14900"], ["currency", '"INR"']]],
};

function railCode(id) {
  const spec = RAIL[id] || RAIL._default;
  const body = spec[2].map((p) => `  ${p[0]}: <span class="s">${p[1]}</span>,`).join("\n");
  return `<div class="code-block reveal">
    <div class="cb-head"><i class="d"></i><i class="d"></i><i class="d"></i><span class="t">${spec[0]}</span></div>
    <pre><code><span class="c">// ${spec[1]}</span>
<span class="k">const</span> res = <span class="k">await</span> enhency.api.<span class="k">post</span>({
${body}
});
<span class="c">// → { id, status, created_at }</span></code></pre>
  </div>`;
}

function heroVisual(p, id) {
  const kind = p.hero.visual;
  if (kind === "code") return railCode(id);
  if (kind === "network") return netVisual();
  const rows = p.overview && p.overview.cards ? p.overview.cards.map((c) => c.t) : [];
  const name = p.crumb && p.crumb.length ? p.crumb[p.crumb.length - 1].t : "Console";
  return consoleCard(name + " · console", rows);
}

function crumbHtml(crumb) {
  if (!crumb) return "";
  return `<nav class="breadcrumb"><a href="index.html">Home</a> ${crumb
    .map((c) => ` › ${c.href ? `<a href="${c.href}">${esc(c.t)}</a>` : esc(c.t)}`)
    .join("")}</nav>`;
}

/* ---- main interior renderer ---- */
function renderPage(p, id) {
  let html = "";

  // Sub-hero
  html += `<section class="subhero"><div class="container subhero-grid">
    <div>
      ${crumbHtml(p.crumb)}
      <h1>${esc(p.hero.headline)}</h1>
      <p class="lead">${esc(p.hero.text)}</p>
      <div class="hero-cta">${btn(p.hero.primary, "btn-primary")}${btn(p.hero.secondary, "btn-secondary")}</div>
    </div>
    <div class="feature-media">${heroVisual(p, id)}</div>
  </div></section>`;

  // Intro
  if (p.intro) {
    html += `<section class="section"><div class="container">
      <div class="section-head center reveal"><span class="eyebrow">Overview</span>
      <h2>${esc(p.intro.title)}</h2><p class="lead">${esc(p.intro.text)}</p></div>
    </div></section>`;
  }

  // Overview cards
  if (p.overview) {
    html += `<section class="section soft"><div class="container">
      <div class="section-head reveal"><h2>${esc(p.overview.title)}</h2><p class="lead">${esc(p.overview.text)}</p></div>
      ${cardsGrid(p.overview.cards)}
    </div></section>`;
  }

  // Feature sections (alternating)
  if (p.sections && p.sections.length) {
    html += `<section class="section"><div class="container">`;
    p.sections.forEach((s, i) => {
      const labels = s.caps ? s.caps.map((c) => c.t) : [];
      const vis = i % 2 === 0 ? consoleCard(s.title, labels) : flowCard(s.title, labels);
      const media = `<div class="feature-media">${vis}</div>`;
      const body = `<div class="feature-body reveal"><span class="eyebrow">Capability</span>
        <h2>${esc(s.title)}</h2><p class="lead">${esc(s.text)}</p>${capList(s.caps)}</div>`;
      html += `<div class="feature${i % 2 ? " flip" : ""}">${i % 2 ? media + body : body + media}</div>`;
    });
    html += `</div></section>`;
  }

  // Benefits
  if (p.benefits) {
    html += `<section class="section soft"><div class="container">
      <div class="section-head center reveal"><span class="eyebrow">Why Enhency</span><h2>${esc(p.benefits.title)}</h2></div>
      ${cardsGrid(p.benefits.cards)}
    </div></section>`;
  }

  // Developer
  if (p.developer) {
    html += `<section class="section"><div class="container">
      <div class="feature">
        <div class="feature-body reveal"><span class="eyebrow">Developer Experience</span>
          <h2>${esc(p.developer.title)}</h2><p class="lead">${esc(p.developer.text)}</p>
          <div class="tag-row">${p.developer.tags.map((t) => `<span class="tag brand">${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="feature-media">${railCode(id)}</div>
      </div>
    </div></section>`;
  }

  // Security
  if (p.security) {
    html += `<section class="section soft"><div class="container">
      <div class="section-head center reveal"><span class="eyebrow">Security &amp; Infrastructure</span><h2>${esc(p.security.title)}</h2><p class="lead">${esc(p.security.text)}</p></div>
      ${cardsGrid(p.security.cards)}
    </div></section>`;
  }

  // Use cases
  if (p.useCases) {
    html += `<section class="section"><div class="container">
      <div class="section-head center reveal"><span class="eyebrow">Who It's For</span><h2>${esc(p.useCases.title)}</h2></div>
      ${cardsGrid(p.useCases.cards)}
    </div></section>`;
  }

  // CTA band
  if (p.cta) {
    html += `<section class="section"><div class="container"><div class="cta-band reveal"><div class="container">
      <h2>${esc(p.cta.headline)}</h2><p>${esc(p.cta.text)}</p>
      <div class="cta-actions">${btn(p.cta.primary, "btn-on-dark")}${btn(p.cta.secondary, "btn-outline-light")}</div>
    </div></div></div></section>`;
  }

  return html;
}

/* ---- special: contact ---- */
function renderContact() {
  return `<section class="subhero"><div class="container subhero-grid">
    <div>
      ${crumbHtml([{ t: "About", href: "#" }, { t: "Contact" }])}
      <h1>Connect with the Enhency Team</h1>
      <p class="lead">Talk to our team to explore payment infrastructure, banking technology, merchant ecosystems, onboarding systems, fraud prevention, and digital financial platforms designed for modern financial operations.</p>
      <div class="hero-cta"><a class="btn btn-primary" href="#contact-form">Talk to Sales</a><a class="btn btn-secondary" href="#contact-form">Contact Support</a></div>
    </div>
    <div class="feature-media">${consoleCard("Inquiry routing", ["Sales inquiry", "Partnership inquiry", "Technical support", "Merchant support"])}</div>
  </div></section>

  <section class="section"><div class="container">
    <div class="section-head center reveal"><span class="eyebrow">How can we help?</span><h2>We're Here to Help You Build Scalable Financial Experiences</h2>
    <p class="lead">Whether you're exploring payment infrastructure, merchant solutions, onboarding systems, digital banking platforms, or enterprise financial technology, our team is available to support your business, operational, and technical requirements.</p></div>
    <div class="grid cols-3">
      ${[
        ["Sales Inquiry", "Explore Enhency infrastructure for payments, banking, merchant ecosystems, onboarding, fraud prevention, and digital financial experiences."],
        ["Partnership Inquiry", "Explore partnerships across banking ecosystems, fintech infrastructure, payment operations, merchant enablement, and financial innovation."],
        ["Support Contact", "Assistance with operational workflows, infrastructure queries, onboarding, technical integrations, and platform support."],
      ].map((c, i) => `<article class="card reveal"><div class="card-ic">${ICONS[ICON_CYCLE[i]]}</div><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join("")}
    </div>
  </div></section>

  <section class="section soft" id="contact-form"><div class="container">
    <div class="grid cols-2" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Get in Touch</span>
        <h2>Let's Build Modern Financial Infrastructure Together</h2>
        <p class="lead">Share your business requirements, infrastructure needs, partnership inquiries, or operational questions with our team.</p>
        <div class="cap-list" style="margin-top:1.6rem">
          ${[
            ["Sales", "sales@enhency.com"],
            ["Support", "support@enhency.com"],
            ["Business", "hello@enhency.com"],
            ["Working Hours", "Mon–Sat · 9:00 AM – 7:00 PM IST"],
          ].map((r) => `<div class="cap-item"><span class="tick">${ICONS.tick}</span><div><b>${r[0]}</b><span>${r[1]}</span></div></div>`).join("")}
        </div>
      </div>
      <form class="form-card reveal" id="contactForm" novalidate>
        <div class="form-grid">
          <div class="field"><label>Full Name</label><input name="name" type="text" placeholder="Jane Doe" required></div>
          <div class="field"><label>Company Name</label><input name="company" type="text" placeholder="Acme Bank"></div>
        </div>
        <div class="form-grid">
          <div class="field"><label>Business Email</label><input name="email" type="email" placeholder="jane@acme.com" required></div>
          <div class="field"><label>Phone Number</label><input name="phone" type="tel" placeholder="+91 ..."></div>
        </div>
        <div class="field"><label>Inquiry Type</label>
          <select name="type">
            <option>Sales Inquiry</option><option>Partnership Inquiry</option><option>Technical Support</option>
            <option>Merchant Support</option><option>Developer Support</option><option>General Inquiry</option>
          </select>
        </div>
        <div class="field"><label>Message</label><textarea name="message" placeholder="Tell us about your infrastructure needs..." required></textarea></div>
        <button type="submit" class="btn btn-primary btn-block">Submit Inquiry</button>
        <p class="form-note" id="formNote" hidden>Thanks! Our team will get back to you within one business day.</p>
      </form>
    </div>
  </div></section>`;
}

/* ---- special: login ---- */
function renderLogin() {
  const cards = [
    ["Merchant Login", "Access merchant onboarding, payment operations, collections, and transaction visibility.", "Merchant Sign In"],
    ["Partner Login", "Manage partner integrations, ecosystem enablement, and operational workflows.", "Partner Sign In"],
    ["Developer Login", "Access APIs, SDKs, sandbox environments, webhooks, and integration tools.", "Developer Sign In"],
  ];
  return `<section class="subhero"><div class="container" style="text-align:center;padding:clamp(48px,7vw,90px) 0">
    ${crumbHtml([{ t: "Resources", href: "#" }, { t: "Login" }])}
    <h1>Sign in to Enhency</h1>
    <p class="lead" style="margin:1rem auto 0;max-width:560px">Choose your portal to securely access Enhency infrastructure, operations, and developer tools.</p>
  </div></section>
  <section class="section"><div class="container"><div class="grid cols-3">
    ${cards.map((c, i) => `<article class="card reveal" style="text-align:center">
      <div class="card-ic" style="margin-inline:auto">${ICONS[ICON_CYCLE[i]]}</div>
      <h3>${c[0]}</h3><p>${c[1]}</p>
      <a class="btn btn-primary btn-sm" href="#" style="margin-top:1.1rem">${c[2]}</a>
    </article>`).join("")}
  </div>
  <p class="muted" style="text-align:center;margin-top:2rem">New to Enhency? <a href="contact.html">Talk to our team</a> to get started.</p>
  </div></section>`;
}

/* ---- boot ---- */
(function () {
  const host = document.getElementById("page");
  if (!host) return;
  const id = window.PAGE_ID;
  let html = "";
  if (id === "contact") html = renderContact();
  else if (id === "login") html = renderLogin();
  else if (PAGES[id]) {
    html = renderPage(PAGES[id], id);
    document.title = (PAGES[id].crumb ? PAGES[id].crumb[PAGES[id].crumb.length - 1].t : "Enhency") + " — Enhency";
  } else {
    html = `<section class="section"><div class="container"><h1>Page not found</h1></div></section>`;
  }
  host.innerHTML = html;
  // notify main.js that dynamic content is in the DOM
  document.dispatchEvent(new CustomEvent("page:rendered"));
})();
