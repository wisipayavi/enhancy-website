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

function navItemHtml(key, menu) {
  const wide = menu.groups.reduce((n, g) => n + g.items.length, 0) > 5;
  return `<div class="nav-item">
    <a class="nav-link" href="#" aria-haspopup="true">${menu.label}<i class="caret"></i></a>
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
      <span>Build with <span class="heart">♥</span> for financial infrastructure</span>
    </div>
  </div>`;
}

renderHeader();
renderFooter();
