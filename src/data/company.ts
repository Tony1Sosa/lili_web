/**
 * Company information — the single place to edit contact details and brand data.
 *
 * Values set to `null` are NOT CONFIRMED yet. They render as clearly marked
 * placeholders ("[телефон]") and never as clickable links. Replace `null` with the
 * confirmed value (see docs/FACTS-TO-CONFIRM.md) and the whole site updates.
 */
import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface CompanyInfo {
  brand: Localized;
  legalName: Localized;
  metalworkBrand: string;
  /**
   * Path inside /public. Replace public/brand/logo.svg with the real logo (keep the file name,
   * or change `src`). Set `includesName: true` if the logo artwork already contains the company
   * name — the text name next to it is then hidden visually (kept for screen readers).
   */
  logo: { src: string; width: number; height: number; includesName: boolean; isPlaceholder: boolean };
  contact: {
    phone: string | null;
    mobile: string | null;
    email: string | null;
    address: Localized | null;
    /** City of the production base — stated on the existing website. */
    city: Localized;
    /** Link to a map (Google Maps / OpenStreetMap). Shown only when set. */
    mapUrl: string | null;
    hours: Localized;
  };
  social: { facebook: string | null; instagram: string | null };
  legal: { uic: string | null; registeredAddress: Localized | null };
  /** Shown on the site as a company statement; `verified` flips the "pending verification" note off. */
  certification: { label: string; verified: boolean };
}

export const company: CompanyInfo = {
  brand: { bg: 'Строителна компания БГ', en: 'Stroitelna Compania BG' },
  legalName: { bg: '„Строителна компания БГ“ ЕООД', en: 'Stroitelna Compania BG EOOD' },
  metalworkBrand: 'Railing Inox',
  logo: { src: 'brand/logo.svg', width: 40, height: 40, includesName: false, isPlaceholder: true },

  contact: {
    phone: null, // e.g. '+359 88 461 9013' — conflicting numbers on the old site, see FACTS-TO-CONFIRM #5
    mobile: null,
    email: null, // e.g. 'office@railing-inox.com' — see FACTS-TO-CONFIRM #6
    address: null, // e.g. { bg: 'гр. София, ул. …', en: 'Sofia, … St.' } — see FACTS-TO-CONFIRM #4
    city: { bg: 'София', en: 'Sofia' },
    mapUrl: null,
    hours: { bg: 'Понеделник – петък, 08:30 – 17:30', en: 'Monday – Friday, 08:30 – 17:30' },
  },

  social: {
    facebook: null, // old site: https://www.facebook.com/Railing-INOX-265990604113624/
    instagram: null, // old site: https://www.instagram.com/railing.inox/
  },

  legal: {
    uic: null, // ЕИК / UIC
    registeredAddress: null,
  },

  certification: { label: 'EN 1090-1 / EN 1090-2', verified: false },
};

/** Normalise a phone number for tel: links. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}
