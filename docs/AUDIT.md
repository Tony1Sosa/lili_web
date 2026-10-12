# Audit — railing-inox.com (existing website)

Audit date: 2026-10-12
Sources: page source of 8 pages supplied by the site owner (Home, Products & Services,
Our team, Gallery, Business directions, Counterparties, Clients, Contact) and search-engine
index entries for pages that were not supplied. The live domain could not be fetched
directly from the build environment (network policy), so everything below is based on
that HTML and on indexed snippets. Items marked **(unverified)** come only from search
snippets.

---

## 1. Platform and technical stack

| Component | Version found | Notes |
|---|---|---|
| WordPress | 5.7.x (`wp-includes … ver=5.7.20`) | Released 2021. Long out of date. |
| Theme | "Invento" (`/wp-content/themes/invento/`) | Theme demo logo text "Invento" is still in the header (hidden with CSS). |
| WPML | 4.4.10 (`stt:7,1,3` = bg, en, de) | Languages via `?lang=en` / `?lang=de` query parameter. |
| Yoast SEO | 16.1.1 | Schema `WebSite @id` misconfigured as `http://www.railing-inox.com/?lang=de/#website`. |
| WPBakery Page Builder | 5.5.4 | Unrendered shortcode `[vc_column_text]` visible on the homepage. |
| Slider Revolution | 5.4.8 | Very old; older Slider Revolution versions had public security advisories. |
| Contact Form 7 | 5.4 | Fields: name, email, subject, message. No consent checkbox or visible spam protection. |
| WP Rocket | — | Page cache present (cache timestamp ≈ 2026-10-11, so the site is live). |
| GDPR Cookie Consent (cookie-law-info) | 2.0.1 | Banner says third-party analytics cookies are used; no analytics script is present in the supplied HTML. |
| Image Watermark | 1.6.6 | Disables right-click and drag on images. |
| Google Maps JS API | — | Loaded with an **empty API key** (`?key&ver=1.0`), so the contact map is most likely broken. |
| Fonts | Google Fonts (Roboto, Raleway, Lato), Font Awesome 4.4, Fontello | Loaded from Google's servers, which has GDPR implications in the EU. |
| jQuery | 3.5.1 + migrate | About 25 scripts per page. |

**Hosting:** unknown (no host headers available). PHP/MySQL hosting is implied by WordPress.

## 2. Page and URL inventory

Bulgarian is the default language at the root. English and German use the same path plus
`?lang=en` / `?lang=de`, but some translations have **different slugs** (shown below).

| Page (BG title) | BG URL | EN URL (from hreflang) |
|---|---|---|
| Начало | `/` | `/?lang=en` |
| Продукти и услуги | `/продукти-и-услуги/` (+ `/page/2/`) | `/продукти-и-услуги/?lang=en` |
| Нашият екип | `/нашият-екип/` | `/нашият-екип/?lang=en` |
| Галерия | `/галерия/` | `/headers/галерия/?lang=en` ← odd parent path |
| Бизнес направления | `/партньори/` | `/партньори/?lang=en` |
| Контрагенти | `/контрагенти/` | `/контрагенти/?lang=en` |
| Клиенти | `/клиенти-2/` | `/клиенти/?lang=en` |
| Контакти | `/контакт/` | `/контакти/?lang=en` |
| За нас (EN) **(unverified)** | — | `/about-us/?lang=en` |

Portfolio entries (custom post type `portfolio`). Each has a Cyrillic BG slug; several slugs
**do not match their content**, a leftover from an earlier site structure:

| Portfolio title | Filter category | BG slug | Known EN/DE URL |
|---|---|---|---|
| Прикачен инвентар за тежка механизация | Прикачен инвентар… | `/portfolio/прикачен-инвентар-за-тежка-механизац/` (truncated) | `/portfolio/attachments-for-heavy-machinery/?lang=en` |
| Мебели | Нестандартни метални изделия | `/portfolio/мебели/` | — |
| Парапети INOX и стъкло | Парапети | `/portfolio/нестандартни-метални-решения/` ← mismatched slug | `/portfolio/railings-from-inox-and-glass/?lang=en` |
| Парапети INOX | Парапети | `/portfolio/метални-конструкции/` ← mismatched slug | — |
| Решетки | Решетки | `/portfolio/решетки/` | — |
| Метални пожароустойчиви врати | Метални пожароустойчиви врати | `/portfolio/метални-пожароустойчиви-врати/` | `/portfolio/metal-fire-resistant-doors/?lang=en` |
| Външни евакуационни и противопожарни стълби | Вътрешни и външни стълби | `/portfolio/външни-евакуационни-и-противопожарн/` (truncated) | `/portfolio/external-emergency-and-fire-stairs/?lang=en` |
| Прави и вити стълби | Вътрешни и външни стълби | `/portfolio/прави-и-вити-стълби/` | `/portfolio/gerade-und-geschwungene-treppen/?lang=de` |
| Врати и огради | Огради | `/portfolio/огради/` | `/portfolio/doors-and-fences/?lang=en` |
| Козирки от поликарбонат | Козирки | `/portfolio/козирки-от-поликарбонат/` | `/portfolio/polycarbonate-visors/?lang=en` |
| Стъклени козирки | Козирки | `/portfolio/стъклени-козирки/` | — |
| Парапети от черен метал | Парапети | `/portfolio/steel-railings/` | `/portfolio/black-metal-railings/?lang=en` |
| Railings from aluminum **(unverified)** | Парапети | unknown | `/portfolio/railings-from-aluminum/?lang=en` |

Older pages that are still indexed **(unverified)**: `/изделия-услуги/парапети/парапети-инокс/`,
`/изделия-услуги/огради/`, `/изделия-услуги/порти-гаражни-врати/`.

Filter categories on "Продукти и услуги": Вътрешни и външни стълби, Козирки, Метални
пожароустойчиви врати, Нестандартни метални изделия, Огради, Парапети, Прикачен инвентар за
тежка механизация, Производство за Партньори в Германия, Австрия и Швейцария, Решетки.
Page 2 of the portfolio ("Load More") was not supplied.

No analytics or search-traffic data was available, so it is unknown which pages get visitors.

## 3. Content inventory (what can be reused)

**Company text (homepage and footer):** "Рейлинг Инокс ООД е динамична компания, създадена през
2003 г. за да поеме производството на метални изделия. Предлагаме, както стандартни изделия по
каталог, така и индивидуални и уникални проекти… Ние сме част от Компанията „Строителна
Компания БГ" ЕООД основана през 2012, обединяваща всички наши бизнес направления в едно."

**Services stated on the homepage:** fabrication and installation of railings, canopies,
interior and exterior metal stairs, fire-resistant doors, grilles, small metal halls ("метални
халета"); EN 1090-1 and EN 1090-2 certification; powder coating up to 7500 mm length in the full
RAL range.

**Equipment stated on the homepage:** plasma cutting machine; press brake up to 3100 mm; MIG/MAG
welder with double pulse and water cooling, with a separate wire feeder for aluminium; machine
for surface finishing (grinding) of stainless steel; turning and milling services.

**Location statement:** production base in Sofia; orders across Bulgaria and abroad.

**Working hours (contact page):** Monday–Friday, 08:30–17:30.

**Team page (last modified 2020-04-08):** three people, with personal phone numbers and e-mail
addresses: an office secretary, a manager for European clients and a designer. One profile uses
a placeholder image (`nothing1.jpg`). Another uses a file named like a stock photo
(`inzhener-pto-photo-9f02.jpg`). Personal contact details were **not** copied into this
repository.

**Business directions:** links and logos for stroitelna-compania-bg.com, courtier.bg (insurance)
and milenium-imoti.com (real estate).

**Counterparties:** 8 supplier/partner logos with no names or alt text (one is thyssenkrupp).

**Clients:** 5 logos linking to Technopolis, Praktiker, Bokal, IV Ceilings and Barage Group.

**Gallery:** 95 photos uploaded March–April 2020. None have alt text or categories. File names
are listed in [`legacy-media-manifest.md`](legacy-media-manifest.md).

**Social:** Facebook page `facebook.com/Railing-INOX-265990604113624/`; Instagram
`instagram.com/railing.inox/` (mislabelled "LinkedIn" in the footer); RSS link points to `#`.

## 4. Problems found

### Branding and content
- Header logo is the theme's demo text "Invento"; the real logo is not used in the header.
  The favicon is a cropped screenshot (`Screen-Shot-2018-11-19…`).
- Raw shortcode `[vc_column_text]` is visible at the top of the homepage.
- The homepage hero image has an empty caption block.
- Counters start at 0 and are animated to **2352 "satisfied clients"**, **2156 "completed
  projects"** and **4 "countries"**. These are unsupported claims, and they are inconsistent:
  more satisfied clients than completed projects.
- The "Business directions" page is mostly empty paragraphs (`&nbsp;` × 5); its OG description is
  just whitespace.
- One portfolio cover is a scanned document (`scan0001-1.jpg`).
- Copyright and "developed by" footer areas are empty.

### Technical, SEO and accessibility
- `maximum-scale=1` in the viewport meta disables pinch-zoom (fails WCAG 1.4.4).
- All gallery images have `alt=""`; logo grids have no alt text.
- Mixed `http://` and `https://` internal links and hreflang URLs.
- Inconsistent translation slugs (`/клиенти-2/` vs `/клиенти/?lang=en`, `/headers/галерия/`).
- Portfolio slugs that don't match content (glass railings at `…/нестандартни-метални-решения/`).
- Every page title is suffixed with the same long English string
  "RailingInox | Railings made of inox and aluminum, visors, metal products", including
  Bulgarian pages.
- Yoast schema points the WebSite entity at the German URL; the SearchAction is broken.
- The Google Maps embed has no API key.
- Right-click is disabled on images.
- Heavy front end: jQuery plus about 25 plugin scripts, Revolution Slider, three Google Font
  families, two icon fonts.
- Outdated core and plugins, which is a security risk.

### Company information conflicts (must be confirmed — not published)
See [`FACTS-TO-CONFIRM.md`](FACTS-TO-CONFIRM.md).

## 5. Preserve / improve / remove

**Preserve**
- The service range, equipment list, EN 1090 statement (after confirmation) and powder coating
  capability.
- Portfolio structure and its real photos (the photos must be supplied from the WordPress
  uploads backup; see the manifest).
- Bulgarian and English content.
- Existing URLs, via redirects when the new site moves to the real domain.
- Working hours and the contact channels (after confirmation).

**Improve**
- Clear navigation: Home, Products & Services, Projects, Manufacturing, About, Contact.
- A filterable project portfolio with real photos, categories and descriptive alt text.
- A quote form with service selection, consent and spam protection.
- Proper multilingual SEO: unique BG/EN titles, hreflang, canonical URLs and a sitemap.
- Performance: no jQuery, no sliders, self-hosted fonts, responsive WebP/AVIF images.

**Remove or replace**
- The "Invento" demo logo, the shortcode leak and the unsupported counters.
- Client and supplier logos, until the company confirms permission to show them.
- The team page's personal contact details, until the people are confirmed.
- The disabled zoom, the right-click blocking and the broken Google Map.
- The German version. The project configuration specifies BG + EN only; German URLs are
  redirected to the English equivalents. The i18n setup lets German be added back later.

## 6. Recommended structure

```
/                      language detection → /bg/ or /en/ (x-default)
/bg/ , /en/            Home
/{lang}/products/                 Products & Services overview
/{lang}/products/{service}/       9 service pages
/{lang}/projects/                 Filterable portfolio
/{lang}/projects/{project}/       Project detail pages (photos + lightbox)
/{lang}/manufacturing/            Equipment & capabilities
/{lang}/about/                    Company, group, approach
/{lang}/contact/                  Contact details + quote form
/{lang}/privacy/                  Privacy notice
/404.html                         Bilingual not-found page
```

## 7. Recommended implementation

**Static site built with Astro, deployed to GitHub Pages through GitHub Actions.**

Why not keep WordPress: the target host is GitHub Pages, which cannot run PHP or MySQL. The
existing WordPress install is also several major versions behind and depends on abandoned
page-builder and slider plugins. Modernising it would effectively mean a full theme rebuild
anyway.

Why Astro:
- It produces static HTML with zero JavaScript by default.
- It has built-in i18n routing and image optimisation (responsive WebP/AVIF).
- Content collections are validated by a schema, so a bad edit fails the build.
- Base-path support works for GitHub Pages project URLs.

Projects and services live in JSON files. Photos are added by dropping files into a folder,
with no redesign needed.

The quote form posts to an external form service (Formspree by default; the endpoint is
configurable) because GitHub Pages has no backend.

**Migration note:** the old WordPress site is not modified. When the new site moves to
railing-inox.com, the legacy-URL redirect pages included in the build preserve the old
Cyrillic paths. Plan to keep the old WordPress uploads folder as a backup.
