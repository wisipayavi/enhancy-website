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

function vbars(seed) {
  const out = [];
  for (let k = 0; k < 7; k++) out.push(38 + Math.round(54 * Math.abs(Math.sin((seed + 1) * 1.7 + k * 0.9))));
  return out;
}
function consoleCard(title, rows, seed) {
  const list = (rows || []).slice(0, 4);
  return `<div class="mock reveal">
    <div class="mock-head"><i class="d"></i><i class="d"></i><i class="d"></i><span class="t">${esc(title)}</span></div>
    <div class="mock-body">
      <div class="mock-bars">${vbars(seed || 0).map((h) => `<i style="height:${h}%"></i>`).join("")}</div>
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

function viz(title, svg) {
  return `<div class="mock reveal"><div class="mock-head"><i class="d"></i><i class="d"></i><i class="d"></i><span class="t">${esc(title)}</span></div><div class="viz">${svg}</div></div>`;
}

/* Product-specific illustrations (original line art) */
const SVG_UPI = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="36" y="34" width="116" height="182" rx="16" fill="#fff" stroke="#e6ebf3"/><rect x="36" y="34" width="116" height="26" rx="13" fill="#eef3fb"/><circle cx="94" cy="112" r="26" fill="#eafaf0" stroke="#22c55e" stroke-width="2"/><path d="M82 112l8 8 16-18" stroke="#22c55e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="64" y="154" width="58" height="8" rx="4" fill="#cdd9f0"/><rect x="76" y="170" width="34" height="6" rx="3" fill="#e3e9f3"/><path d="M168 124h66" stroke="#1d4ed8" stroke-width="3" stroke-dasharray="7 7"/><path d="M230 117l12 7-12 7z" fill="#1d4ed8"/><rect x="256" y="54" width="126" height="126" rx="14" fill="#fff" stroke="#e6ebf3"/><g fill="#0b1b34"><rect x="270" y="68" width="26" height="26" rx="4"/><rect x="342" y="68" width="26" height="26" rx="4"/><rect x="270" y="140" width="26" height="26" rx="4"/><rect x="310" y="74" width="8" height="8"/><rect x="324" y="96" width="8" height="8"/><rect x="310" y="124" width="8" height="8"/><rect x="342" y="124" width="8" height="8"/><rect x="356" y="148" width="8" height="8"/><rect x="328" y="150" width="8" height="8"/></g><g fill="#fff"><rect x="276" y="74" width="14" height="14" rx="2"/><rect x="348" y="74" width="14" height="14" rx="2"/><rect x="276" y="146" width="14" height="14" rx="2"/></g><g fill="#1d4ed8"><rect x="280" y="78" width="6" height="6"/><rect x="352" y="78" width="6" height="6"/><rect x="280" y="150" width="6" height="6"/></g><text x="319" y="206" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#1d4ed8">Scan &amp; Pay · UPI</text></svg>`;
const SVG_IMPS = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(40,86)"><path d="M5 40 L55 14 L105 40" fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linejoin="round"/><g stroke="#1d4ed8" stroke-width="3"><path d="M16 44v40M40 44v40M64 44v40M88 44v40"/></g><path d="M2 88h106" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round"/></g><g transform="translate(270,86)"><path d="M5 40 L55 14 L105 40" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-linejoin="round"/><g stroke="#0ea5e9" stroke-width="3"><path d="M16 44v40M40 44v40M64 44v40M88 44v40"/></g><path d="M2 88h106" stroke="#0ea5e9" stroke-width="3" stroke-linecap="round"/></g><path d="M170 146h80" stroke="#22c55e" stroke-width="3" stroke-dasharray="7 7"/><path d="M246 139l12 7-12 7z" fill="#22c55e"/><circle cx="210" cy="146" r="17" fill="#eafaf0" stroke="#22c55e" stroke-width="2"/><text x="210" y="152" text-anchor="middle" font-size="16" font-weight="800" fill="#22c55e" font-family="Inter,sans-serif">₹</text><rect x="176" y="36" width="68" height="26" rx="13" fill="#eef3fb"/><text x="210" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8" font-family="Inter,sans-serif">24×7</text></svg>`;
const SVG_NACH = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="34" width="180" height="150" rx="12" fill="#fff" stroke="#e6ebf3"/><g fill="#cdd9f0"><rect x="130" y="58" width="140" height="8" rx="4"/><rect x="130" y="78" width="110" height="8" rx="4"/></g><rect x="170" y="118" width="100" height="46" rx="8" fill="#eef3fb"/><text x="220" y="146" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8" font-family="Inter,sans-serif">Auto-debit</text><g stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round"><path d="M134 126l7 7 14-16"/><path d="M134 150l7 7 14-16"/></g><g transform="translate(300,150)"><circle cx="0" cy="0" r="26" fill="#fff" stroke="#1d4ed8" stroke-width="2"/><path d="M-9 -4a10 10 0 1 1 1 12" fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round"/><path d="M-12 -10v8h8" fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g><text x="210" y="214" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Mandate · recurring</text></svg>`;
const SVG_KYC = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="64" y="50" width="200" height="130" rx="12" fill="#fff" stroke="#e6ebf3"/><rect x="82" y="72" width="60" height="74" rx="8" fill="#eef3fb"/><circle cx="112" cy="96" r="15" fill="#cdd9f0"/><path d="M90 140c4-15 40-15 44 0z" fill="#cdd9f0"/><g fill="#cdd9f0"><rect x="158" y="80" width="86" height="9" rx="4"/><rect x="158" y="100" width="70" height="9" rx="4"/><rect x="158" y="120" width="80" height="9" rx="4"/></g><circle cx="266" cy="160" r="30" fill="#eafaf0" stroke="#22c55e" stroke-width="3"/><path d="M252 160l9 9 18-20" stroke="#22c55e" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="170" y="214" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Identity verified · eKYC</text></svg>`;
const SVG_SHIELD = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M210 36l72 26v56c0 46-72 72-72 72s-72-26-72-72V62z" fill="#eef3fb" stroke="#1d4ed8" stroke-width="3"/><path d="M176 150a34 34 0 0 1 68 0" fill="none" stroke="#dce6f6" stroke-width="9" stroke-linecap="round"/><path d="M176 150a34 34 0 0 1 52 -27" fill="none" stroke="#22c55e" stroke-width="9" stroke-linecap="round"/><line x1="210" y1="150" x2="228" y2="130" stroke="#0b1b34" stroke-width="3" stroke-linecap="round"/><circle cx="210" cy="150" r="4" fill="#0b1b34"/><text x="210" y="184" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8" font-family="Inter,sans-serif">Low risk</text><text x="210" y="232" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Fraud &amp; risk monitoring</text></svg>`;
const SVG_MERCHANT = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64 84l14-30h120l14 30z" fill="#eef3fb" stroke="#1d4ed8" stroke-width="2"/><rect x="72" y="84" width="132" height="104" rx="6" fill="#fff" stroke="#e6ebf3"/><rect x="90" y="118" width="44" height="70" fill="#eef3fb"/><rect x="144" y="118" width="46" height="34" rx="4" fill="#eafaf0"/><g><rect x="236" y="56" width="120" height="36" rx="8" fill="#fff" stroke="#e6ebf3"/><circle cx="258" cy="74" r="9" fill="#1d4ed8"/><rect x="276" y="70" width="62" height="8" rx="4" fill="#cdd9f0"/><rect x="236" y="106" width="120" height="36" rx="8" fill="#fff" stroke="#e6ebf3"/><circle cx="258" cy="124" r="9" fill="#0ea5e9"/><rect x="276" y="120" width="62" height="8" rx="4" fill="#cdd9f0"/><rect x="236" y="156" width="120" height="36" rx="8" fill="#fff" stroke="#e6ebf3"/><circle cx="258" cy="174" r="9" fill="#22c55e"/><rect x="276" y="170" width="62" height="8" rx="4" fill="#cdd9f0"/></g><text x="210" y="222" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Onboard · collect · settle</text></svg>`;
const SVG_COMMS = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="62" y="46" width="210" height="48" rx="14" fill="#fff" stroke="#e6ebf3"/><path d="M84 94v16l16-16z" fill="#fff" stroke="#e6ebf3"/><circle cx="86" cy="70" r="10" fill="#1d4ed8"/><rect x="106" y="66" width="140" height="8" rx="4" fill="#cdd9f0"/><text x="300" y="75" font-size="12" font-weight="700" fill="#1d4ed8" font-family="Inter,sans-serif">SMS</text><rect x="106" y="106" width="210" height="48" rx="14" fill="#fff" stroke="#e6ebf3"/><path d="M296 154v16l-16-16z" fill="#fff" stroke="#e6ebf3"/><circle cx="130" cy="130" r="10" fill="#22c55e"/><rect x="150" y="126" width="140" height="8" rx="4" fill="#cdd9f0"/><text x="74" y="135" font-size="12" font-weight="700" fill="#22c55e" font-family="Inter,sans-serif">WA</text><rect x="62" y="166" width="210" height="48" rx="14" fill="#fff" stroke="#e6ebf3"/><circle cx="86" cy="190" r="10" fill="#d97706"/><rect x="106" y="186" width="140" height="8" rx="4" fill="#cdd9f0"/><text x="290" y="195" font-size="12" font-weight="700" fill="#d97706" font-family="Inter,sans-serif">Email</text></svg>`;
const SVG_QR = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="58" y="52" width="128" height="128" rx="14" fill="#fff" stroke="#e6ebf3"/><g fill="#0b1b34"><rect x="72" y="66" width="26" height="26" rx="4"/><rect x="146" y="66" width="26" height="26" rx="4"/><rect x="72" y="140" width="26" height="26" rx="4"/><rect x="112" y="74" width="8" height="8"/><rect x="126" y="98" width="8" height="8"/><rect x="112" y="126" width="8" height="8"/><rect x="146" y="126" width="8" height="8"/><rect x="158" y="148" width="8" height="8"/></g><g fill="#fff"><rect x="78" y="72" width="14" height="14" rx="2"/><rect x="152" y="72" width="14" height="14" rx="2"/><rect x="78" y="146" width="14" height="14" rx="2"/></g><g fill="#1d4ed8"><rect x="82" y="76" width="6" height="6"/><rect x="156" y="76" width="6" height="6"/><rect x="82" y="150" width="6" height="6"/></g><rect x="244" y="78" width="92" height="80" rx="12" fill="#0a1733"/><circle cx="290" cy="118" r="22" fill="#13306e"/><circle cx="290" cy="118" r="8" fill="#0ea5e9"/><rect x="260" y="90" width="8" height="8" rx="2" fill="#22c55e"/><g stroke="#0ea5e9" stroke-width="3" fill="none" stroke-linecap="round"><path d="M346 108a16 16 0 0 1 0 20"/><path d="M357 98a30 30 0 0 1 0 40"/></g><text x="210" y="212" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">QR collect · soundbox alert</text></svg>`;
const SVG_POS = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="36" width="120" height="180" rx="16" fill="#0a1733"/><rect x="164" y="52" width="92" height="58" rx="8" fill="#13306e"/><rect x="176" y="64" width="60" height="8" rx="4" fill="#3a5da8"/><rect x="176" y="80" width="40" height="8" rx="4" fill="#2a4583"/><g fill="#13306e"><rect x="164" y="124" width="26" height="22" rx="5"/><rect x="197" y="124" width="26" height="22" rx="5"/><rect x="230" y="124" width="26" height="22" rx="5"/><rect x="164" y="152" width="26" height="22" rx="5"/><rect x="197" y="152" width="26" height="22" rx="5"/><rect x="230" y="152" width="26" height="22" rx="5"/></g><rect x="196" y="190" width="84" height="44" rx="6" fill="#1d4ed8" transform="rotate(8 238 212)"/><rect x="206" y="204" width="26" height="8" rx="2" fill="#9bc1ff" transform="rotate(8 238 212)"/><text x="120" y="232" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Tap · dip · pay</text></svg>`;
const SVG_BANKWEB = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="44" y="48" width="252" height="170" rx="12" fill="#fff" stroke="#e6ebf3"/><rect x="44" y="48" width="252" height="32" rx="12" fill="#eef3fb"/><g fill="#cdd9f0"><circle cx="64" cy="64" r="4"/><circle cx="78" cy="64" r="4"/><circle cx="92" cy="64" r="4"/></g><rect x="120" y="58" width="120" height="14" rx="7" fill="#fff" stroke="#e6ebf3"/><rect x="126" y="61" width="8" height="8" rx="2" fill="#22c55e"/><rect x="64" y="98" width="100" height="100" rx="8" fill="#eef3fb"/><rect x="178" y="98" width="100" height="46" rx="8" fill="#eef3fb"/><rect x="178" y="152" width="100" height="46" rx="8" fill="#eafaf0"/><rect x="300" y="86" width="72" height="124" rx="14" fill="#fff" stroke="#e6ebf3"/><rect x="312" y="100" width="48" height="32" rx="6" fill="#1d4ed8"/><rect x="312" y="140" width="48" height="8" rx="4" fill="#cdd9f0"/><rect x="312" y="154" width="34" height="8" rx="4" fill="#e3e9f3"/><text x="210" y="238" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Web · SSL · hosting</text></svg>`;
const SVG_MOBILE = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="158" y="28" width="120" height="200" rx="20" fill="#fff" stroke="#e6ebf3"/><rect x="174" y="50" width="88" height="56" rx="10" fill="#1d4ed8"/><text x="218" y="73" text-anchor="middle" font-size="11" fill="#bcd2ff" font-family="Inter,sans-serif">Balance</text><text x="218" y="93" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" font-family="Inter,sans-serif">₹ 1,24,900</text><rect x="174" y="118" width="40" height="40" rx="10" fill="#eef3fb"/><rect x="222" y="118" width="40" height="40" rx="10" fill="#eef3fb"/><rect x="174" y="166" width="40" height="40" rx="10" fill="#eef3fb"/><rect x="222" y="166" width="40" height="40" rx="10" fill="#eafaf0"/><text x="218" y="244" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Mobile banking</text></svg>`;
const SVG_ROUTING = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="58" cy="125" r="22" fill="#1d4ed8"/><text x="58" y="130" text-anchor="middle" font-size="11" fill="#fff" font-family="Inter,sans-serif">Pay</text><g stroke="#cdd9f0" stroke-width="3" fill="none"><path d="M84 125C150 125 150 60 220 60"/><path d="M84 125h136"/><path d="M84 125C150 125 150 190 220 190"/></g><path d="M84 125C150 125 150 60 220 60" stroke="#22c55e" stroke-width="3" fill="none"/><rect x="222" y="42" width="130" height="36" rx="8" fill="#eafaf0" stroke="#22c55e"/><text x="287" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="#22c55e" font-family="Inter,sans-serif">Gateway A ✓</text><rect x="222" y="107" width="130" height="36" rx="8" fill="#fff" stroke="#e6ebf3"/><text x="287" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Gateway B</text><rect x="222" y="172" width="130" height="36" rx="8" fill="#fff" stroke="#e6ebf3"/><text x="287" y="195" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Gateway C</text><text x="150" y="238" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Smart routing · retries</text></svg>`;
const SVG_LINK = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="66" y="74" width="288" height="46" rx="23" fill="#fff" stroke="#e6ebf3"/><g stroke="#1d4ed8" stroke-width="3" fill="none" stroke-linecap="round"><path d="M96 97a13 13 0 0 1 13-13h12"/><path d="M128 97a13 13 0 0 0-13 13h-6"/></g><rect x="150" y="92" width="138" height="10" rx="5" fill="#cdd9f0"/><rect x="298" y="82" width="44" height="30" rx="8" fill="#1d4ed8"/><text x="320" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">Pay</text><g transform="translate(210,165)"><g stroke="#cdd9f0" stroke-width="2"><path d="M-38 -6l26-14M12 -20l26 14"/></g><circle cx="-50" cy="0" r="14" fill="#eafaf0" stroke="#22c55e"/><circle cx="0" cy="-26" r="14" fill="#eef3fb" stroke="#1d4ed8"/><circle cx="50" cy="0" r="14" fill="#fff" stroke="#0ea5e9"/></g><text x="210" y="226" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Shareable payment link</text></svg>`;
const SVG_FORM = `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="120" y="34" width="180" height="192" rx="14" fill="#fff" stroke="#e6ebf3"/><text x="140" y="66" font-size="13" font-weight="700" fill="#0b1b34" font-family="Inter,sans-serif">Checkout</text><rect x="140" y="80" width="140" height="30" rx="8" fill="#f6f8fc" stroke="#e6ebf3"/><rect x="140" y="118" width="140" height="30" rx="8" fill="#f6f8fc" stroke="#e6ebf3"/><rect x="140" y="156" width="66" height="30" rx="8" fill="#f6f8fc" stroke="#e6ebf3"/><rect x="214" y="156" width="66" height="30" rx="8" fill="#f6f8fc" stroke="#e6ebf3"/><rect x="140" y="196" width="140" height="20" rx="8" fill="#1d4ed8"/><text x="210" y="244" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Hosted payment form</text></svg>`;
const SVG_TPV = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="66" y="86" width="184" height="40" rx="8" fill="#fff" stroke="#e6ebf3"/><text x="84" y="111" font-size="13" font-family="Inter,sans-serif" fill="#0b1b34">A/C 0011•••2233</text><path d="M256 106h44" stroke="#1d4ed8" stroke-width="3" stroke-dasharray="6 6"/><path d="M296 99l12 7-12 7z" fill="#1d4ed8"/><g transform="translate(300,70)"><path d="M5 36 L40 16 L75 36" fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linejoin="round"/><g stroke="#1d4ed8" stroke-width="3"><path d="M16 40v30M40 40v30M64 40v30"/></g><path d="M2 74h76" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round"/></g><circle cx="158" cy="168" r="26" fill="#eafaf0" stroke="#22c55e" stroke-width="3"/><path d="M146 168l8 8 16-18" stroke="#22c55e" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="210" y="224" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Account validated · TPV</text></svg>`;
const SVG_BLOG = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="46" width="280" height="46" rx="10" fill="#fff" stroke="#e6ebf3"/><rect x="82" y="58" width="34" height="22" rx="5" fill="#1d4ed8"/><rect x="128" y="60" width="150" height="8" rx="4" fill="#cdd9f0"/><rect x="128" y="74" width="100" height="6" rx="3" fill="#e3e9f3"/><rect x="70" y="100" width="280" height="46" rx="10" fill="#fff" stroke="#e6ebf3"/><rect x="82" y="112" width="34" height="22" rx="5" fill="#0ea5e9"/><rect x="128" y="114" width="150" height="8" rx="4" fill="#cdd9f0"/><rect x="128" y="128" width="120" height="6" rx="3" fill="#e3e9f3"/><rect x="70" y="154" width="280" height="46" rx="10" fill="#fff" stroke="#e6ebf3"/><rect x="82" y="166" width="34" height="22" rx="5" fill="#22c55e"/><rect x="128" y="168" width="150" height="8" rx="4" fill="#cdd9f0"/><rect x="128" y="182" width="90" height="6" rx="3" fill="#e3e9f3"/><text x="210" y="226" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Insights &amp; updates</text></svg>`;
const SVG_CAREERS = `<svg viewBox="0 0 420 230" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(120,86)"><circle cx="0" cy="0" r="26" fill="#eef3fb" stroke="#1d4ed8" stroke-width="2"/><circle cx="0" cy="-6" r="9" fill="#1d4ed8"/><path d="M-14 14c2-12 26-12 28 0z" fill="#1d4ed8"/></g><g transform="translate(210,76)"><circle cx="0" cy="0" r="30" fill="#eafaf0" stroke="#22c55e" stroke-width="2"/><circle cx="0" cy="-7" r="10" fill="#22c55e"/><path d="M-16 16c2-13 30-13 32 0z" fill="#22c55e"/></g><g transform="translate(300,86)"><circle cx="0" cy="0" r="26" fill="#fff" stroke="#0ea5e9" stroke-width="2"/><circle cx="0" cy="-6" r="9" fill="#0ea5e9"/><path d="M-14 14c2-12 26-12 28 0z" fill="#0ea5e9"/></g><g fill="#cdd9f0"><rect x="92" y="138" width="56" height="8" rx="4"/><rect x="180" y="138" width="60" height="8" rx="4"/><rect x="274" y="138" width="56" height="8" rx="4"/></g><text x="210" y="196" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Build with our team</text></svg>`;
const SVG_CHART = `<svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="56" y="44" width="304" height="156" rx="12" fill="#fff" stroke="#e6ebf3"/><g stroke="#eef3fb" stroke-width="1"><path d="M76 86h264M76 122h264M76 158h264"/></g><path d="M76 168 140 148 200 156 260 118 320 78 320 188 76 188z" fill="#1d4ed8" opacity=".06"/><polyline points="76,168 140,148 200,156 260,118 320,78" fill="none" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><g fill="#22c55e"><circle cx="140" cy="148" r="4"/><circle cx="260" cy="118" r="4"/><circle cx="320" cy="78" r="4"/></g><text x="210" y="226" text-anchor="middle" font-size="13" font-weight="700" fill="#5b6478" font-family="Inter,sans-serif">Operational outcomes</text></svg>`;

const VISUALS = {
  "upi-stack": () => viz("UPI payment flow", SVG_UPI),
  "acquiring-upi-stack": () => viz("Merchant UPI acceptance", SVG_UPI),
  "issuing-upi-stack": () => viz("Issuer authorization", SVG_UPI),
  "tpap-stack": () => viz("TPAP app payment", SVG_UPI),
  "imps-stack": () => viz("Real-time money movement", SVG_IMPS),
  "nach": () => viz("Mandate & auto-debit", SVG_NACH),
  "verification-suite": () => viz("Digital onboarding", SVG_KYC),
  "enhency-shield": () => viz("Fraud & risk monitoring", SVG_SHIELD),
  "merchant-suite": () => viz("Merchant operations", SVG_MERCHANT),
  "communication": () => viz("Multi-channel messaging", SVG_COMMS),
  "soundbox-qr": () => viz("QR & soundbox", SVG_QR),
  "pos": () => viz("POS acceptance", SVG_POS),
  "digital-banking": () => viz("Digital banking platform", SVG_BANKWEB),
  "enhency-mobile": () => viz("Mobile banking", SVG_MOBILE),
  "payment-gateway-orchestration": () => viz("Gateway orchestration", SVG_ROUTING),
  "payment-link": () => viz("Payment link", SVG_LINK),
  "payment-form": () => viz("Hosted checkout", SVG_FORM),
  "tpv": () => viz("Account validation", SVG_TPV),
  "blog": () => viz("Knowledge hub", SVG_BLOG),
  "careers": () => viz("Careers at Enhency", SVG_CAREERS),
  "case-studies": () => viz("Case studies", SVG_CHART),
};

function heroVisual(p, id) {
  if (VISUALS[id]) return VISUALS[id]();
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
      const seed = (id ? id.length : 0) + i * 3 + s.title.length;
      const vis = i % 2 === 0 ? consoleCard(s.title, labels, seed) : flowCard(s.title, labels);
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
