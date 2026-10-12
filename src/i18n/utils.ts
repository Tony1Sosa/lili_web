import { LANGS, ui, type Lang, type UiKey } from './ui';
import { stripBase } from '../lib/url';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

/** Static paths for pages that exist in every language: /bg/… and /en/… */
export function langPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

/** Translation function with {placeholder} interpolation. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey, vars?: Record<string, string | number>): string {
    let text: string = ui[lang][key] ?? ui.bg[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) text = text.replaceAll(`{${k}}`, String(v));
    }
    return text;
  };
}

/** Site-relative path for a page in a given language, e.g. ('en', 'projects') -> '/en/projects/'. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Same page in another language (all language versions share the same slugs). */
export function translatePath(pathname: string, to: Lang): string {
  const path = stripBase(pathname);
  const match = path.match(/^\/(bg|en)(\/.*)?$/);
  if (!match) return localePath(to);
  return `/${to}${match[2] ?? '/'}`;
}

/** Bulgarian/English photo count, e.g. "1 снимка" / "12 снимки". */
export function photoCount(lang: Lang, n: number): string {
  const t = useTranslations(lang);
  return n === 1 ? t('projects.photo') : t('projects.photos', { n });
}

export function otherLang(lang: Lang): Lang {
  return lang === 'bg' ? 'en' : 'bg';
}
