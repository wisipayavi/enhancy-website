/* ============================================================
   Enhency — Navigation + Footer config and renderer
   Shared across every page. Renders into #site-header / #site-footer.
   ============================================================ */

const NAV = {
  products: {
    label: "Products",
    groups: [
      {
        label: "UPI",
        items: [
          { t: "UPI Stack", d: "Acquiring, issuing & TPAP infrastructure", href: "upi-stack.html" },
          { t: "Acquiring UPI Stack", d: "Merchant acquiring at scale", href: "acquiring-upi-stack.html" },
          { t: "Issuing UPI Stack", d: "Issuer-side transaction processing", href: "issuing-upi-stack.html" },
          { t: "UPI TPAP (SDK/S2S)", d: "Launch scalable UPI apps", href: "tpap-stack.html" },
        ],
      },
      {
        label: "Core rails & risk",
        items: [
          { t: "IMPS Stack", d: "Real-time money movement", href: "imps-stack.html" },
          { t: "NACH", d: "Automated mandate & file processing", href: "nach.html" },
          { t: "Verification Suite", d: "eKYC · CKYC · Video KYC", href: "verification-suite.html" },
          { t: "Enhency Shield", d: "Fraud prevention — EFRM · I4C", href: "enhency-shield.html" },
        ],
      },
    ],
  },
  solutions: {
    label: "Solutions",
    groups: [
      {
        label: "Merchant & acceptance",
        items: [
          { t: "Merchant Suite", d: "Onboarding, payments & settlement", href: "merchant-suite.html" },
          { t: "Soundbox & QR", d: "Merchant collection infrastructure", href: "soundbox-qr.html" },
          { t: "POS", d: "In-store payment acceptance", href: "pos.html" },
          { t: "Communication", d: "SMS · WhatsApp · Email · Campaigns", href: "communication.html" },
        ],
      },
      {
        label: "Banking & payments",
        items: [
          { t: "Digital Banking", d: "Websites, hosting, SSL & software", href: "digital-banking.html" },
          { t: "Enhency Mobile", d: "Mobile banking platform", href: "enhency-mobile.html" },
          { t: "Gateway Orchestration", d: "Routing, retries & failover", href: "payment-gateway-orchestration.html" },
          { t: "Payment Link", d: "Shareable payment collection", href: "payment-link.html" },
          { t: "Payment Form", d: "Hosted checkout experiences", href: "payment-form.html" },
          { t: "TPV", d: "Third-party banking validation", href: "tpv.html" },
        ],
      },
    ],
  },
  resources: {
    label: "Resources",
    groups: [
      {
        label: "Resources",
        items: [
          { t: "Docs", d: "APIs, SDKs, webhooks & sandbox", href: "docs.html" },
          { t: "Blog", d: "Payments & infrastructure insights", href: "blog.html" },
          { t: "Careers", d: "Build the future with us", href: "careers.html" },
          { t: "Case Studies", d: "Real-world use cases", href: "case-studies.html" },
          { t: "Login", d: "Merchant · Partner · Developer", href: "login.html" },
        ],
      },
    ],
  },
  about: {
    label: "About",
    groups: [
      {
        label: "Company",
        items: [
          { t: "Company", d: "Our mission, vision & philosophy", href: "company.html" },
          { t: "Contact", d: "Sales, partnerships & support", href: "contact.html" },
        ],
      },
    ],
  },
};

const LOGO_SVG = `<svg class="logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="enhGrad" x1="4" y1="6" x2="36" y2="34" gradientUnits="userSpaceOnUse">
      <stop stop-color="#33d0d8"/><stop offset="1" stop-color="#3aa0e6"/>
    </linearGradient>
  </defs>
  <!-- ring with right-side gap -->
  <path d="M28 8.5A15 15 0 1 0 31.5 28" stroke="url(#enhGrad)" stroke-width="4.4" stroke-linecap="round"/>
  <!-- inner flow / bolt mark -->
  <path d="M22.5 12.5 13 20.2h6.2l-1.7 7.3 9.5-7.7H20.8l1.7-7.3Z" fill="url(#enhGrad)"/>
</svg>`;

function dropdownHtml(menu, wide) {
  let inner = "";
  menu.groups.forEach((g) => {
    if (menu.groups.length > 1 || g.label) inner += `<div class="group-label">${g.label}</div>`;
    g.items.forEach((it) => {
      inner += `<a href="${it.href}"><span class="d-title">${it.t}</span><span class="d-desc">${it.d}</span></a>`;
    });
  });
  return `<div class="dropdown${wide ? " wide" : ""}">${inner}</div>`;
}

const CURRENT_FILE = location.pathname.split("/").pop() || "index.html";
const TOP_HREF = {
  products: "index.html#products",
  solutions: "index.html#solutions",
  resources: "docs.html",
  about: "company.html",
};
function menuIsActive(menu) {
  return menu.groups.some((g) => g.items.some((it) => it.href === CURRENT_FILE));
}

function navItemHtml(key, menu) {
  const wide = menu.groups.reduce((n, g) => n + g.items.length, 0) > 5;
  const active = menuIsActive(menu) ? " active" : "";
  return `<div class="nav-item">
    <a class="nav-link${active}" href="${TOP_HREF[key]}" aria-haspopup="true">${menu.label}<i class="caret"></i></a>
    ${dropdownHtml(menu, wide)}
  </div>`;
}

function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  host.innerHTML = `
  <div class="container nav">
    <a class="brand" href="index.html">${LOGO_SVG} <span class="brand-word">Enhency</span></a>
    <nav class="nav-menu" id="navMenu" aria-label="Primary">
      ${navItemHtml("products", NAV.products)}
      ${navItemHtml("solutions", NAV.solutions)}
      ${navItemHtml("resources", NAV.resources)}
      ${navItemHtml("about", NAV.about)}
    </nav>
    <div class="nav-actions">
      <a class="btn btn-secondary btn-sm" href="login.html">Login</a>
      <a class="btn btn-primary btn-sm" href="contact.html">Book a Demo</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>`;
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  const col = (title, items) =>
    `<div class="footer-col"><h4>${title}</h4>${items
      .map((i) => `<a href="${i.href}">${i.t}</a>`)
      .join("")}</div>`;

  host.innerHTML = `
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="brand" href="index.html">${LOGO_SVG} Enhency</a>
        <p>Modern payment & banking infrastructure for financial businesses.</p>
      </div>
      ${col("Products", [
        { t: "UPI Stack", href: "upi-stack.html" },
        { t: "IMPS Stack", href: "imps-stack.html" },
        { t: "NACH", href: "nach.html" },
        { t: "Verification Suite", href: "verification-suite.html" },
        { t: "Enhency Shield", href: "enhency-shield.html" },
      ])}
      ${col("Solutions", [
        { t: "Merchant Suite", href: "merchant-suite.html" },
        { t: "Communication", href: "communication.html" },
        { t: "Soundbox & QR", href: "soundbox-qr.html" },
        { t: "POS", href: "pos.html" },
        { t: "Digital Banking", href: "digital-banking.html" },
        { t: "Gateway Orchestration", href: "payment-gateway-orchestration.html" },
      ])}
      ${col("Resources", [
        { t: "Docs", href: "docs.html" },
        { t: "Blog", href: "blog.html" },
        { t: "Careers", href: "careers.html" },
        { t: "Case Studies", href: "case-studies.html" },
      ])}
      ${col("Company", [
        { t: "About", href: "company.html" },
        { t: "Contact", href: "contact.html" },
        { t: "Login", href: "login.html" },
      ])}
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Enhency Technologies Private Limited. All rights reserved.</span>
      <div class="footer-social">
        <a href="#" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.25 8.25h4.5V24H.25V8.25ZM8.25 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.13c0-1.46-.03-3.35-2.04-3.35-2.04 0-2.35 1.6-2.35 3.25V24h-4.5V8.25Z"/></svg></a>
        <a href="#" aria-label="X" title="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.3 8.34L23 22h-6.4l-5-6.54L5.8 22H2.7l7.8-8.92L1.6 2H8.2l4.52 5.98L18.9 2Zm-1.12 18h1.7L7.3 3.9H5.5L17.78 20Z"/></svg></a>
        <a href="#" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg></a>
      </div>
      <span class="footer-visits">👁 <strong id="visitCount">…</strong> visits · Built with <span class="heart">♥</span></span>
    </div>
  </div>`;
}

/* Lightweight website visit counter (works on static hosting).
   Uses a free no-auth hit counter; falls back to a per-browser count. */
function runVisitCounter() {
  const el = document.getElementById("visitCount");
  if (!el) return;
  const ns = "enhency-wisipayavi", key = "visits";
  const counted = sessionStorage.getItem("enhVisitCounted");
  const url = "https://abacus.jasoncameron.dev/" + (counted ? "get" : "hit") + "/" + ns + "/" + key;
  fetch(url)
    .then((r) => r.json())
    .then((d) => {
      if (!d || typeof d.value !== "number") throw new Error("bad");
      el.textContent = d.value.toLocaleString();
      sessionStorage.setItem("enhVisitCounted", "1");
    })
    .catch(() => {
      let n = parseInt(localStorage.getItem("enhVisits") || "0", 10);
      if (!counted) {
        n += 1;
        localStorage.setItem("enhVisits", String(n));
        sessionStorage.setItem("enhVisitCounted", "1");
      }
      el.textContent = n.toLocaleString();
    });
}

/* Inject favicon + theme-color into <head>, and a back-to-top button. */
function injectExtras() {
  if (!document.querySelector('link[rel="icon"]')) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = "assets/favicon.svg";
    document.head.appendChild(link);
  }
  if (!document.querySelector('meta[name="theme-color"]')) {
    const m = document.createElement("meta");
    m.name = "theme-color";
    m.content = "#0a1733";
    document.head.appendChild(m);
  }
  if (!document.getElementById("toTop")) {
    const b = document.createElement("button");
    b.id = "toTop";
    b.className = "to-top";
    b.setAttribute("aria-label", "Back to top");
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15 6-6 6 6"/></svg>';
    document.body.appendChild(b);
  }
}

renderHeader();
renderFooter();
injectExtras();
runVisitCounter();
