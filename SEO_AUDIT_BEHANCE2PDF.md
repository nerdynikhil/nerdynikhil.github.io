# Behance2PDF — SEO Audit & Action Plan

**Date:** 2026-07-23
**Scope:** `www.nerdynikhil.com/behance2pdf` landing page + `github.com/nerdynikhil/Behance2PDF` repo
**Goal:** Double down on organic traffic while the product has momentum.

---

## TL;DR — Top 5 things to do this week

1. **Fix rendering: page-specific meta tags are invisible to scrapers.** The site is a client-rendered SPA; `curl https://www.nerdynikhil.com/behance2pdf` returns the generic portfolio `<title>` and zero OG tags. Every link shared on Twitter/X, LinkedIn, Slack, WhatsApp, Discord shows the wrong preview — and this is a product that spreads via link-sharing in design communities. Prerender the route at build time.
2. **Publish to the Chrome Web Store.** The CWS is the single biggest search surface for "behance to pdf" intent, and CWS listings rank in Google itself. Manual unpacked install kills 90%+ of conversion. It's a $5 one-time developer fee.
3. **Expand landing page content to target actual search queries.** The page is ~120 words and never mentions image downloading — half the product's keyword surface is missing.
4. **Add `SoftwareApplication` + `FAQPage` JSON-LD** to the landing page.
5. **Fix the GitHub repo metadata:** homepage URL points to a dead GitHub Pages URL, topics list is empty, description omits the image-download feature. GitHub repos rank extremely well for tool queries — this is free ranking power being left on the table.

---

## 1. Critical: Client-side rendering hides all SEO tags

**Finding.** `react-helmet-async` injects title/description/OG/JSON-LD after hydration. The HTML served to crawlers and scrapers is the empty shell with the portfolio's default title. Googlebot can render JS (slowly, second-wave indexing), but Twitter/LinkedIn/Slack/WhatsApp scrapers **do not run JS at all** — link previews are broken today.

**Fix options (pick one):**
- **Easiest:** Build-time prerendering of static routes — e.g. `vite-plugin-prerender`, or a small post-build script that renders each route with `react-dom/server` (or Puppeteer) and writes real HTML files. Vercel serves the static file per-route instead of the catch-all rewrite.
- Heavier: migrate to a framework with SSG (Astro/Next). Not necessary for a portfolio of static pages, but the long-term clean answer.

**Acceptance test:** `curl -s https://www.nerdynikhil.com/behance2pdf | grep og:title` returns the Behance2PDF title. Then re-validate with Twitter Card Validator + LinkedIn Post Inspector.

## 2. Critical: Distribution — Chrome Web Store

- Publish the extension (Manifest V3, $5 one-time fee). The CWS listing itself:
  - Ranks in Google for "behance pdf chrome extension" style queries.
  - Ranks in CWS internal search (title + description keywords matter there).
  - Removes the developer-mode install wall — install conversion will jump.
- CWS listing SEO: title `Behance2PDF – Save Behance Projects as PDF`, first sentence of description containing "download Behance images" and "export Behance project as PDF", 3–5 screenshots, the existing YouTube demo as promo video.
- Once live, change the landing page CTA from the GitHub link to the CWS link. (Today the button says "Add to Chrome" but goes to GitHub — mismatched intent that costs trust and conversions.)

## 3. On-page: landing page (`/behance2pdf`)

### Keyword targets (map before writing copy)
| Intent | Query examples | Where to target |
|---|---|---|
| Primary | behance to pdf, save behance project as pdf, behance pdf export | `<title>`, H1, intro |
| Secondary | download behance images, behance image downloader, behance downloader | Feature section + its own H2 |
| Tertiary | export behance portfolio, save behance portfolio offline, behance offline | FAQ / use-case copy |
| Long-tail | how to save a behance project as pdf | FAQ question verbatim |

### Changes
- **Title tag:** `Behance2PDF — Save Behance Projects as PDF & Download Images (Free Chrome Extension)` (currently omits "free", "Chrome extension" and the entire image-download feature).
- **Meta description:** rewrite to ~150 chars covering both features + "free": *"Free Chrome extension to save any Behance project as a high-quality PDF or download all its images in one click. No account, no tracking."*
- **H1 stays `Behance2PDF`**, but the subtitle should carry keywords: "Save any Behance project as a high-quality PDF — or download every image in one click."
- **Add content sections** (target 500–800 words total):
  - "How it works" — 3 numbered steps (matches "how to save behance as pdf" queries).
  - "Download all images from a Behance project" — its own H2; the feature exists in the product but is absent from the page.
  - **FAQ** — 5–6 questions phrased as real queries: *How do I save a Behance project as a PDF? Is Behance2PDF free? Does it work with all Behance layouts? Can I download images in original resolution? Is my data tracked?* Mark up with `FAQPage` JSON-LD.
- **Canonical tag:** the `SEO` component emits no `<link rel="canonical">`. Add it (use the `url` prop). Do this site-wide.
- **JSON-LD:** the page passes no `jsonLd` today. Add `SoftwareApplication` schema: `applicationCategory: BrowserApplication`, `operatingSystem: Chrome`, `offers: { price: 0 }`, author, screenshot, aggregateRating once CWS reviews exist.
- **OG image:** currently the 1024×1024 icon with `twitter:card = summary_large_image` — square images crop badly. Create a 1200×630 branded card (icon + tagline on the blue background) and use it for `og:image`/`twitter:image`.
- **Video SEO:** the repo already has a YouTube demo (`rSJaOjvNGz0`). Embed or link it on the landing page (YouTube is the #2 search engine; the video should point back to the landing page in its description). Add `VideoObject` JSON-LD for the install walkthrough. Also: remove `autoPlay` on the mp4 or add `preload="none"` + a `poster` — it currently downloads on page load and hurts LCP/CWV.
- **Internal linking:** ensure the homepage links to `/behance2pdf` with descriptive anchor text ("Behance to PDF Chrome extension", not just "Behance2PDF"). Consider a short blog post ("How to save Behance projects as PDF — 3 ways") that links to the page; the blog already ranks for teardown content.

## 4. Technical / site-wide

- **Sitemap:** `/behance2pdf` is present ✓, but every `lastmod` is `2026-03-11`. Update `lastmod` when pages actually change (stale uniform dates get ignored); drop `changefreq`/`priority` if you like — Google ignores both.
- **robots.txt** fine ✓.
- **Search Console:** verify the property (if not already), submit sitemap, then track queries/impressions for `/behance2pdf` — this is the feedback loop for everything above.
- **Fonts:** Google Fonts CSS is render-blocking; consider self-hosting Inter (the `public/fonts` dir already exists) — minor CWV win.
- **`og:site_name`** missing in the SEO component — add `content="Nikhil Barik"`.

## 5. Off-page (highest leverage after CWS)

- **Directories & listings:** AlternativeTo (as "Behance downloader" alternative), Product Hunt launch, chrome-stats/extension directories, awesome-chrome-extensions lists on GitHub (PR yourself in).
- **Communities:** r/graphic_design, r/Design, designer Discords, dribbble/behance forums — answer "how do I save a behance project offline" threads with a genuine answer + link. These threads themselves rank on Google.
- **The YouTube demo** is an underused asset: retitle it to the query ("How to Save Behance Projects as PDF — Free Chrome Extension"), keyword-rich description, link to landing page + repo.

---

## 6. GitHub repo changes (`nerdynikhil/Behance2PDF`)

GitHub pages rank strongly for tool-intent queries; the repo is also the current install destination, so it doubles as the conversion page.

### Repo settings (5 minutes, do first)
- **Homepage URL:** currently `https://nerdynikhil.github.io/Behance2PDF/` (redirects/dead). Change to `https://www.nerdynikhil.com/behance2pdf`.
- **Topics:** currently empty. Add: `chrome-extension`, `behance`, `pdf`, `pdf-export`, `pdf-generation`, `image-downloader`, `behance-downloader`, `design-tools`, `portfolio`, `browser-extension`. Topics power GitHub search and topic pages that Google indexes.
- **Description:** currently only mentions PDF. Change to: `Chrome extension to save Behance projects as high-quality PDFs or bulk-download all images — one click, no tracking.`
- **Create a Release** (v1.x) with a prebuilt ZIP attached — easier install than "Download ZIP from Code button", and Releases get indexed too.

### README changes
1. **Keyword-bearing tagline under the H1.** Current bold line is good; extend it to name both intents explicitly: *"The free Chrome extension to convert any Behance project to PDF or download all Behance images in one click."* The first ~160 chars of a README act as the meta description in Google results.
2. **Add badges** under the title: MIT license, GitHub stars, latest release, "Chrome Web Store" (once published). Social proof + scannability.
3. **Add a prominent link to the landing page** near the top (`🌐 Website: www.nerdynikhil.com/behance2pdf`) — this is a backlink from a high-authority domain (github.com) and funnels repo visitors to the polished page. Currently the README never links to the site at all.
4. **Restructure the intro paragraph around search phrasing.** Work in the phrases people type: "behance to pdf", "download behance images", "save behance project offline". Keep it natural — one paragraph, not a keyword list.
5. **Add an FAQ section** mirroring the landing page FAQ (README FAQs rank as snippets: "Is it free?", "Why isn't it on the Chrome Web Store?", "Does it work with all project layouts?"). The "why not on CWS" question is currently unanswered and is the #1 objection.
6. **Demo section:** keep the YouTube thumbnail link ✓, but give the link descriptive anchor/alt text ("Watch: how to save a Behance project as PDF") instead of just "Behance2PDF Demo".
7. **Install section:** point step 1 at the Release ZIP instead of Code → Download ZIP. When CWS publishing lands, the store button goes here at the top.
8. **Add a "Star the repo" call-to-action** at the end — stars drive GitHub trending/search ranking and are your social proof on every directory listing.
9. **Add a short "Who is this for" / use-cases section** (design students archiving references, freelancers saving portfolios for client decks, hiring managers saving candidate portfolios) — each use case is a long-tail query cluster.
10. **Keep MIT license + issues link** ✓ (already good).

---

## Prioritized roadmap

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Prerender routes so meta/OG ship in HTML | 🔥🔥🔥 | Medium |
| 2 | Publish to Chrome Web Store | 🔥🔥🔥 | Medium |
| 3 | Repo settings: homepage, topics, description | 🔥🔥 | 5 min |
| 4 | Landing page copy expansion + FAQ + JSON-LD | 🔥🔥 | Low |
| 5 | 1200×630 OG image | 🔥 | Low |
| 6 | README overhaul (section above) | 🔥🔥 | Low |
| 7 | Canonical tags + og:site_name site-wide | 🔥 | Low |
| 8 | Search Console setup + sitemap resubmit | 🔥 | Low |
| 9 | YouTube video retitle + description links | 🔥 | Low |
| 10 | Directory submissions + community answers | 🔥🔥 (compounding) | Ongoing |
