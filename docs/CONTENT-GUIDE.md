# Content guide — updating the website without a developer

Everything below can be done in the GitHub web interface. Open a file, click the
pencil icon, edit, then **Commit changes**. Every commit to `main` rebuilds and
republishes the site automatically, usually within 2–3 minutes. If an edit has a mistake (for example a
missing comma in a JSON file), the build stops, the live site stays as it was, and the
error appears in the **Actions** tab.

All text exists in two languages: every `"bg"` value needs a matching `"en"` value.

---

## 1. Contact details, logo, company data

File: [`src/data/company.ts`](../src/data/company.ts)

| What | Field | Example |
|---|---|---|
| Phone | `contact.phone` | `phone: '+359 88 461 9013',` |
| Second number | `contact.mobile` | `mobile: '+359 88 461 9112',` |
| E-mail | `contact.email` | `email: 'office@railing-inox.com',` |
| Address | `contact.address` | `address: { bg: 'гр. София, ул. …', en: 'Sofia, … St.' },` |
| Map link | `contact.mapUrl` | `mapUrl: 'https://maps.google.com/?q=…',` |
| Working hours | `contact.hours` | already filled in |
| Facebook / Instagram | `social.facebook`, `social.instagram` | full URL |
| ЕИК (UIC) for the privacy notice | `legal.uic` | `uic: '123456789',` |
| Certificate confirmed | `certification.verified` | `true` hides the "contact us for certificate details" note |

`null` means "not confirmed yet". The site then shows a marked placeholder such as
`[телефон]` instead of a real value, and never makes it clickable.

**Logo.** Replace `public/brand/logo.svg` with the new logo, keeping the same file name.
If the file is a PNG, change `logo.src` to `'brand/logo.png'` and set `width`/`height`
to the image's size. If the logo artwork already contains the company name, set
`includesName: true`, then set `isPlaceholder: false`.

## 2. Adding photos to an existing project

1. Prepare the photos. Use originals, landscape where possible, ideally no more than 2500 px wide.
2. On GitHub, open `src/assets/projects/<project-name>/`, e.g. `src/assets/projects/inox-railings/`.
3. **Add file → Upload files**, then drag the photos in and commit.
4. Name the files `01-…jpg`, `02-…jpg`, … to set the order. The first photo is the cover.
5. Recommended: add a short description of each photo for accessibility and search engines
   in the project's JSON file (`src/content/projects/inox-railings.json`):

```json
"imageAlt": {
  "01-stairwell.jpg": { "bg": "Парапет от инокс и стъкло на вътрешно стълбище", "en": "Stainless steel and glass railing on an interior staircase" }
}
```

Developers can run `npm run photos` before committing. It rotates photos correctly, shrinks
very large ones and removes hidden metadata such as GPS location.

**Only publish photos of your own work.** No stock photos, no AI-generated images, and no
photos of a client's property without their consent.

## 3. Adding a new project

1. Copy an existing file in `src/content/projects/`, e.g. `grilles.json`, to a new name,
   e.g. `office-building-railings.json`. The file name becomes the web address:
   `/bg/projects/office-building-railings/`. Use lowercase Latin letters, digits and hyphens only.
2. Edit the fields:

| Field | Meaning |
|---|---|
| `status` | `"published"` to show it, `"draft"` to hide it |
| `order` | sort order (smaller = earlier) |
| `featured` | `true` = may appear on the homepage (the first six featured projects are shown) |
| `category` | gallery filter: `railings`, `stairs`, `canopies`, `doors-fencing`, `structures`, `custom` |
| `services` | related services (file names from `src/content/services/`, without `.json`) |
| `title`, `summary` | required, in both languages |
| `description`, `materials` | optional — only verified facts |
| `cover`, `imageAlt` | optional (see above) |

3. Create the folder `src/assets/projects/office-building-railings/` and upload the photos.

Do not add client names, addresses, dates or technical figures unless they are confirmed
and the client agrees.

A category appears as a gallery filter only once at least one published project uses it.

## 4. Services (products & services pages)

One JSON file per service in `src/content/services/`. Text, bullet lists (`includes`,
`applications`, `materials`), an optional `note` and the search description
(`seoDescription`) can all be edited there.

## 5. Page texts

Longer page texts live at the top of each page file in `src/pages/[lang]/`, in a
`copy = { bg: {…}, en: {…} }` block — e.g. `index.astro` (home), `about.astro`,
`manufacturing.astro`, `contact.astro`, `privacy.astro`. Shared interface words (menu,
buttons, form labels) are in `src/i18n/ui.ts`.

## 6. Homepage hero photo (optional)

Upload one landscape photo of your own work to `src/assets/hero/`. When the folder
contains a photo, it replaces the specification panel next to the hero heading.
