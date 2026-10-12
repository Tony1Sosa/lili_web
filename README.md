# Строителна компания БГ / Railing Inox — website

Bilingual (Bulgarian / English) static website for a metal-fabrication company: railings,
stairs, canopies, fire-resistant doors, fences, metal structures, custom fabrication, powder
coating and metalworking. It replaces the WordPress site at railing-inox.com. The audit is in
[`docs/AUDIT.md`](docs/AUDIT.md).

- **Stack:** [Astro 7](https://astro.build) (static output, almost no client-side JavaScript),
  plain CSS with design tokens, self-hosted fonts (Manrope, IBM Plex Mono). There is no runtime
  server.
- **Hosting:** GitHub Pages, deployed by GitHub Actions (`.github/workflows/deploy.yml`).
- **Expected URL:** https://tony1sosa.github.io/lili_web/ (the root detects the visitor's
  language and opens `/bg/` or `/en/`).

| Document | Purpose |
|---|---|
| [`docs/AUDIT.md`](docs/AUDIT.md) | Audit of the old site: platform, URL inventory, problems, recommendations |
| [`docs/FACTS-TO-CONFIRM.md`](docs/FACTS-TO-CONFIRM.md) | Company facts that are unpublished or shown as placeholders until confirmed |
| [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md) | How to update contacts, logo, photos, projects and texts |
| [`docs/legacy-media-manifest.md`](docs/legacy-media-manifest.md) | Photos on the old site to migrate from the WordPress backup |

---

## 1. Publish on GitHub Pages — steps in the GitHub website

The repository files are ready. These settings can only be changed in GitHub's web interface:

1. **Create the `main` branch.** The work is on `claude/gallant-heisenberg-lknalc`. On the
   repository page open the branch selector, type `main` and choose
   **Create branch: main from claude/gallant-heisenberg-lknalc**. Alternatively, merge a pull
   request into `main`.
2. **Make `main` the default branch:** *Settings → General → Default branch → `main`*.
3. **Enable Pages through Actions:** *Settings → Pages → Build and deployment → Source:
   **GitHub Actions***.
4. **Run the deployment:** *Actions → "Deploy to GitHub Pages" → Run workflow → Branch:
   `main`*. Every later push to `main` deploys automatically.
5. **Verify:** when the run finishes (green tick), the deploy job shows the URL. Open
   https://tony1sosa.github.io/lili_web/ and check that:
   - the root redirects to `/bg/` or `/en/`;
   - the menu, the language switch (BG/EN) and the project filters work;
   - a deep link such as `/lili_web/en/projects/inox-railings/` loads directly and after a
     refresh;
   - a wrong address such as `/lili_web/xyz/` shows the bilingual 404 page.

Optional repository **variables** (*Settings → Secrets and variables → Actions →
Variables*). They are public values, not secrets:

| Variable | Value | Effect |
|---|---|---|
| `FORM_ENDPOINT` | e.g. `https://formspree.io/f/abcdwxyz` | Activates the quote form (section 3) |
| `ALLOW_INDEXING` | `true` | Allows search-engine indexing. **Leave unset** while the site shows placeholder data or runs on github.io next to the old site. |

Changing a variable takes effect on the next deployment (re-run the workflow).

## 2. How the deployment works

`.github/workflows/deploy.yml`:

- **Push to `main`:** `npm ci` → `astro check` → `astro build` → output checks → upload `dist/`
  → deploy with the official `actions/deploy-pages`.
- **Pull request to `main`:** the same checks and build, but **nothing is published**.
- **Manual run:** *Run workflow*; it only deploys when run on `main`.
- **Permissions:** `contents: read` by default. Only the deploy job gets
  `pages: write` + `id-token: write`.
- `actions/configure-pages` supplies the real site URL and base path (`/lili_web`). After a
  custom domain is added, the base path becomes empty automatically, with no code change.

## 3. Quote form (needs an external form service)

GitHub Pages cannot run server code, so the form posts to an external form service. The
integration is provider-neutral: any endpoint that accepts a multipart `POST` and returns
JSON with a 2xx status works. It has been tested with Formspree's response format.

**Behaviour:**
- Fields are validated in the browser, with Bulgarian or English messages.
- The success message is shown **only after the service confirms receipt**.
- Provider and network errors are shown, and the entered data is kept.
- Spam protection: a honeypot field (`_gotcha`) plus the provider's own filtering.
- Without JavaScript the browser posts the form directly to the service.
- **Until `FORM_ENDPOINT` is set, the form is visible but disabled**, with a notice asking
  visitors to call or e-mail. It never pretends to send anything.
- File upload is not offered. Free form plans usually don't include it, and visitors are told
  they can reply to the confirmation e-mail with drawings or photos.

**Recommended setup (Formspree):**
1. Create an account at https://formspree.io with the company inbox that should receive
   requests, then create a form. Copy the endpoint (`https://formspree.io/f/xxxxxxx`).
2. In the form's settings, verify the target e-mail address and optionally enable extra spam
   filtering.
3. Add the repository variable `FORM_ENDPOINT` = that URL and re-run the deployment.
4. Send a test request from the live site and confirm it arrives.

**Cost and privacy:** Formspree has a free plan with a monthly submission limit; paid plans
add higher limits and file uploads. Check the current pricing before choosing. Submissions
are processed by Formspree (USA). The privacy page (`/bg/privacy/`) already describes this.
If you choose another provider, update section 4 of that page.

## 4. Languages

- Every page exists at `/bg/…` and `/en/…` with identical slugs, so the BG/EN switch always
  opens the same page in the other language.
- The root `/` picks the language in this order: `?lang=` from old links; the visitor's
  previous explicit choice, stored in `localStorage` only after they click BG/EN; the browser's
  preferred languages (any Bulgarian → `/bg/`, otherwise `/en/`). It does **not** use IP
  geolocation, which would need a server and is unreliable for language.
- Each page declares `lang`, `hreflang` alternates (bg, en, x-default) and Open Graph locales.
- German existed on the old site. The project scope is BG + EN; old `?lang=de` links redirect
  to English. To add a language later, see the comment at the top of `src/i18n/ui.ts`.

## 5. Moving to the real domain later (railing-inox.com)

1. In *Settings → Pages → Custom domain*, enter `www.railing-inox.com` and save. GitHub
   creates the domain check and offers **Enforce HTTPS** once DNS works.
2. At the DNS provider, add `CNAME www → tony1sosa.github.io`. For the bare domain, add the
   GitHub Pages `A`/`AAAA` records listed in GitHub's documentation ("Managing a custom domain
   for your GitHub Pages site").
3. Re-run the deployment. The base path becomes `/` and canonical URLs use the new domain
   automatically.
4. When content is confirmed, set `ALLOW_INDEXING=true`.
5. **SEO migration:** the build already contains redirect pages for the old WordPress URLs
   (`/продукти-и-услуги/`, `/portfolio/…`, `/контакт/`, `?lang=en` variants…; see
   `src/data/legacy-redirects.ts`). They redirect immediately and point their canonical link at
   the new page. GitHub Pages cannot send real HTTP 301 responses. If you need them, put a CDN
   such as Cloudflare in front, or keep the domain on a host that supports redirects.
6. Keep a full backup of the old WordPress site (files + database) before switching DNS.

## 6. Local development

Requirements: Node.js **22.12 or newer** (see `.nvmrc`) and npm.

```bash
npm ci              # install exact dependency versions from package-lock.json
npm run dev         # http://localhost:4321/lili_web/
npm run check       # type-check (Astro + TypeScript)
npm run build       # production build into dist/
npm run preview     # serve dist/ locally
npm run photos      # resize/rotate/strip metadata of uploaded photos
```

Copy `.env.example` to `.env` to test the form endpoint or the root-domain build locally
(`BASE_PATH=`).

## 7. Project structure

```
src/
  data/company.ts          contact details, brand, logo — placeholders until confirmed
  data/categories.ts       gallery categories
  data/legacy-redirects.ts old WordPress URL → new page
  content/services/*.json  9 product & service pages (BG + EN)
  content/projects/*.json  portfolio entries (BG + EN, published/draft)
  assets/projects/<slug>/  project photos (picked up automatically)
  assets/hero/             optional homepage photo
  i18n/                    UI dictionary and language helpers
  components/              header, footer, cards, form, lightbox, …
  pages/[lang]/            all pages, generated for bg and en
  pages/index.astro        language detection at the root
  pages/404.astro          bilingual not-found page
  pages/[...legacy].astro  redirect pages for old URLs
public/brand/logo.svg      placeholder logo (replace)
public/og-default.png      default social-sharing image
```

## 8. Troubleshooting

| Problem | Cause / fix |
|---|---|
| Workflow fails at **Configure GitHub Pages** ("Get Pages site failed") | Pages is not enabled. Do step 1.3 (Source: GitHub Actions). |
| Deploy job: "Branch … is not allowed to deploy to github-pages" | The `github-pages` environment only allows the default branch. Make `main` the default branch (step 1.2), or edit *Settings → Environments → github-pages → Deployment branches*. |
| Build fails after editing a JSON file | Open the failed run in **Actions**. The log names the file and field (e.g. missing `"en"` text, a trailing comma, an unknown category). |
| Site loads without styles or images | The base path is wrong. Make sure the deployment ran through the workflow, not "Deploy from a branch". |
| Form shows "not active yet" | `FORM_ENDPOINT` is not set, or doesn't start with `https://`. Set it and re-run the deployment. |
| New photos don't appear | They must be in `src/assets/projects/<exact-project-file-name>/`, with extension jpg/jpeg/png/webp/avif, and the deployment must have run. |
