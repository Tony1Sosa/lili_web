# Facts that need company confirmation

Nothing in this list is published as fact on the new site until it is confirmed. Contact
details are shown as clearly marked placeholders, as requested. Edit
`src/data/company.ts` once each item is confirmed.

| # | Item | What the sources say | Status on the new site |
|---|---|---|---|
| 1 | **Company / brand name** | Old site: "Рейлинг Инокс ООД … part of „Строителна Компания БГ" ЕООД". Project brief: "Строителна компания БГ". | Brand shown as **Строителна компания БГ**, with "Railing Inox" as the metalwork brand. One setting in `company.ts`. |
| 2 | **Founding year** | Homepage: Railing Inox est. **2003**. Directory listing (all.biz): **2008**. BuildingWeek exhibitor profile: business since **1994**, "Railing Inox" created **2007**, group merged **2012**. | **Not published.** |
| 3 | **Parent company founding** | "Строителна Компания БГ ЕООД основана през 2012" (homepage). | Not published (depends on #2). |
| 4 | **Address** | Old site: **гр. София, ул. Атанас Хранов 71Д (партер)**; map pin 42.70543, 23.28602. Directory (all.biz): **ул. Осогово 68, партер**, and its phone 02 468 2067 appears on the old team page, so it is the same business. | **Placeholder.** |
| 5 | **Phone numbers** | 0700 50 507 (contact page); +359 884 619 013 and +359 884 619 112 (footer and contact page); +359 887 906 190 (English homepage, per search index); 02 468 2067 and 02 483 1483 (team page). | **Placeholder.** Please choose one main number and optionally one mobile number. |
| 6 | **E-mail** | railing.inox@gmail.com (footer and contact page). Team members use `skbg.*@gmail.com` addresses. | **Placeholder.** A domain address (e.g. office@…) is recommended. |
| 7 | **Working hours** | Mon–Fri 08:30–17:30 (contact page). | Published as shown; easy to edit. |
| 8 | **EN 1090-1 / EN 1090-2 certification** | Stated on the homepage. Certificate number, issuing body, execution class and expiry date are unknown. | Published as a company statement, **marked for verification**. Before the site goes live on the main domain, confirm it is valid and provide the certificate number or PDF. |
| 9 | **Powder coating max. length 7500 mm, full RAL range** | Homepage. | Published (company statement). |
| 10 | **Equipment** | Plasma cutter; press brake up to 3100 mm; double-pulse water-cooled MIG/MAG welder with separate wire feeder for aluminium; stainless-steel grinding/finishing machine; turning and milling. | Published without model names or capacities beyond those stated. Please add the plasma cutting table size, maximum thickness and press-brake tonnage if you want them shown. |
| 11 | **Counters** 2352 clients / 2156 projects / 4 countries | Homepage animation. The figures are internally inconsistent. | **Not published.** |
| 12 | **Production for partners in Germany, Austria, Switzerland** | Old portfolio filter category. | Project entry kept as **draft** (hidden). |
| 13 | **Heavy-machinery attachments — production since 2017, mainly for a JCB dealer in Bulgaria** | Search-index snippet of the English portfolio page. | Service shown generically. Year and dealer **not published**. |
| 14 | **Client logos** (Technopolis, Praktiker, Bokal, IV Ceilings, Barage Group) | Clients page. | **Not published.** Showing a client's logo needs that client's permission. |
| 15 | **Supplier / counterparty logos** (incl. thyssenkrupp) | Counterparties page. | **Not published.** |
| 16 | **Team members** (office secretary, manager for European clients, designer — page last edited April 2020) | Team page. | **Not published.** Please confirm current staff, roles and consent before team profiles are added. |
| 17 | **Related businesses** (stroitelna-compania-bg.com, courtier.bg, milenium-imoti.com) | Business directions page. | Not linked. Please confirm whether they should appear on the About page. |
| 18 | **Social profiles** | Facebook: facebook.com/Railing-INOX-265990604113624/ ; Instagram: instagram.com/railing.inox/ | Placeholders in config. Please confirm both are still active. |
| 19 | **Logo** | Old site uses theme demo text; new logo under negotiation. | Placeholder at `public/brand/logo.svg`. Replace the file and keep the same name. |
| 20 | **Legal entity details for the privacy notice** (ЕИК/UIC, registered address, data-protection contact) | Not on the old site. | Placeholder in the privacy notice. |
| 21 | **Railing variants** — wooden handrails, stainless cables, aluminium railings, automated gates and garage doors | Search-index snippets of older pages. | Mentioned in service texts as options. Please confirm they are still offered. |
| 22 | **Hot-dip galvanising for outdoor black-metal railings** | Search-index snippet ("recommended"). | Mentioned as a recommendation. Please confirm whether it is done in-house or by a partner. |
| 23 | **"How we work" steps** (enquiry → clarification and, if needed, site visit/measurement → quotation → fabrication in Sofia → installation) | Written for the new site from the services the old site describes. | Published. Confirm the steps, and whether site measurement is offered and free of charge. |
| 24 | **Privacy notice** — retention period, form provider, legal review | Draft written for this site's actual behaviour (no cookies, no analytics, Formspree, GitHub Pages). | Published with placeholders `[ЕИК]`, `[адрес]`, `[срок]`. Have it reviewed before go-live. |
| 25 | **Company description and page texts** | Drafted in BG and EN from the old site's own wording, as requested ("company description: placeholder"). | Published as draft copy. Edit in `src/pages/[lang]/*.astro` and `src/content/`. |

## What the old site claims that the new site deliberately leaves out

- The animated counters (2352 / 2156 / 4) — see #11.
- Founding years — see #2.
- Client and supplier logos — see #14–15.
- Named employees with personal phone numbers and e-mail addresses — see #16.
