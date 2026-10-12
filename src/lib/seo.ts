import type { Lang } from '../i18n/ui';
import { localePath, useTranslations } from '../i18n/utils';
import { company } from '../data/company';
import { absoluteUrl } from './url';

export interface Crumb {
  label: string;
  href: string;
}

/** schema.org BreadcrumbList for a page: Home › …parents › current page. */
export function breadcrumbJsonLd(lang: Lang, parents: Crumb[], current: Crumb, site: URL | undefined) {
  const t = useTranslations(lang);
  const items = [{ label: t('crumb.home'), href: localePath(lang) }, ...parents, current];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href, site),
    })),
  };
}

/**
 * schema.org Organization. Only confirmed data is included: placeholder (null)
 * contact fields and the placeholder logo are left out on purpose.
 */
export function organizationJsonLd(lang: Lang, site: URL | undefined) {
  const c = company.contact;
  const sameAs = [company.social.facebook, company.social.instagram].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName[lang],
    alternateName: [company.brand[lang], company.metalworkBrand],
    url: absoluteUrl(localePath(lang), site),
    ...(company.logo.isPlaceholder ? {} : { logo: absoluteUrl(company.logo.src, site) }),
    ...(c.phone ? { telephone: c.phone } : {}),
    ...(c.email ? { email: c.email } : {}),
    ...(c.address
      ? { address: { '@type': 'PostalAddress', streetAddress: c.address[lang], addressLocality: c.city[lang], addressCountry: 'BG' } }
      : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}
