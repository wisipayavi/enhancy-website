# Enhency — Website

Marketing & product website for **Enhency Technologies Private Limited** — a full-stack
payment and banking infrastructure platform for banks, fintechs, TPAPs, payment
aggregators, and enterprises.

Built as a fast, dependency-free **static site** (HTML + CSS + vanilla JS). The only
runtime dependency is [Three.js](https://threejs.org/) (loaded via CDN import map) which
powers the animated 3D payment-network visual in the home hero.

## Design direction

Follows the brand document: **enterprise-grade, secure, modern, API-first, clean**.
White background, minimal gradients, dashboard-style UI previews, and only subtle,
professional motion (no flashy/gaming-style UI).

## Structure

```
index.html                 Home page (static, with 3D hero)
<product/solution>.html     Thin page shells (e.g. upi-stack.html, merchant-suite.html …)
company.html / contact.html About pages
docs/blog/careers/…         Resource pages
login.html

css/
  styles.css               Full design system
js/
  nav.js                   Renders the shared header (mega-menus) + footer
  pages.js                 Structured content data for every interior page
  render.js                Generic renderer — builds a page from pages.js data
  main.js                  Mobile nav, scroll-reveal, counters, form handling
  hero3d.js                Three.js payment-network animation (home hero)
```

Interior pages are **data-driven**: each `*.html` shell just sets `window.PAGE_ID`, and
`render.js` builds the page from the matching entry in `pages.js`. To edit content, edit
`pages.js` — no HTML changes needed. To add a page, add an entry to `pages.js`, a link in
`nav.js`, and a one-line shell (see any existing interior `*.html`).

## Running locally

No build step. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

(Open via `http://`, not `file://`, so the JS modules / import map load correctly.)
