/**
 * Old WordPress URLs (railing-inox.com) → new pages.
 *
 * Static hosting cannot send HTTP 301 responses, so each old path gets a tiny
 * page that redirects immediately (JavaScript + <meta refresh> fallback) and
 * points its canonical link at the new URL. The old site chose the language with
 * ?lang=en / ?lang=de; the redirect page reads that and picks /en/ or /bg/.
 * German had no separate version on the new site, so ?lang=de goes to English.
 *
 * These only take effect once the new site is served from railing-inox.com.
 * Paths are listed decoded (Cyrillic) — exactly as WordPress produced them.
 */
import type { Lang } from '../i18n/ui';

export interface LegacyRedirect {
  /** Old path without leading/trailing slashes. */
  from: string;
  /** New path inside a language, e.g. "projects/inox-railings" ("" = home). */
  to: string;
  /** Language used when the old URL has no ?lang= parameter. */
  defaultLang: Lang;
}

const bg = (from: string, to: string): LegacyRedirect => ({ from, to, defaultLang: 'bg' });
const en = (from: string, to: string): LegacyRedirect => ({ from, to, defaultLang: 'en' });

export const legacyRedirects: LegacyRedirect[] = [
  // Main pages
  bg('продукти-и-услуги', 'products'),
  bg('продукти-и-услуги/page/2', 'products'),
  bg('нашият-екип', 'about'),
  bg('галерия', 'projects'),
  en('headers/галерия', 'projects'),
  bg('партньори', 'about'),
  bg('контрагенти', 'about'),
  bg('клиенти-2', 'about'),
  bg('клиенти', 'about'),
  bg('контакт', 'contact'),
  bg('контакти', 'contact'),
  en('about-us', 'about'),

  // Older product pages still in search indexes
  bg('изделия-услуги/парапети/парапети-инокс', 'products/railings'),
  bg('изделия-услуги/парапети', 'products/railings'),
  bg('изделия-услуги/огради', 'products/gates-fences-grilles'),
  bg('изделия-услуги/порти-гаражни-врати', 'products/gates-fences-grilles'),
  bg('изделия-услуги', 'products'),

  // Portfolio entries
  bg('portfolio/прикачен-инвентар-за-тежка-механизац', 'projects/heavy-machinery-attachments'),
  en('portfolio/attachments-for-heavy-machinery', 'projects/heavy-machinery-attachments'),
  bg('portfolio/мебели', 'projects/metal-furniture'),
  bg('portfolio/нестандартни-метални-решения', 'projects/inox-glass-railings'),
  en('portfolio/railings-from-inox-and-glass', 'projects/inox-glass-railings'),
  bg('portfolio/метални-конструкции', 'projects/inox-railings'),
  bg('portfolio/решетки', 'projects/grilles'),
  bg('portfolio/метални-пожароустойчиви-врати', 'projects/fire-resistant-doors'),
  en('portfolio/metal-fire-resistant-doors', 'projects/fire-resistant-doors'),
  bg('portfolio/външни-евакуационни-и-противопожарн', 'projects/fire-escape-stairs'),
  en('portfolio/external-emergency-and-fire-stairs', 'projects/fire-escape-stairs'),
  bg('portfolio/прави-и-вити-стълби', 'projects/straight-spiral-stairs'),
  en('portfolio/gerade-und-geschwungene-treppen', 'projects/straight-spiral-stairs'),
  bg('portfolio/огради', 'projects/gates-and-fences'),
  en('portfolio/doors-and-fences', 'projects/gates-and-fences'),
  bg('portfolio/козирки-от-поликарбонат', 'projects/polycarbonate-canopies'),
  en('portfolio/polycarbonate-visors', 'projects/polycarbonate-canopies'),
  bg('portfolio/стъклени-козирки', 'projects/glass-canopies'),
  bg('portfolio/steel-railings', 'projects/black-metal-railings'),
  en('portfolio/black-metal-railings', 'projects/black-metal-railings'),
  en('portfolio/railings-from-aluminum', 'projects/aluminium-railings'),
  bg('portfolio', 'projects'),
];
