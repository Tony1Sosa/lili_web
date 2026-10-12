/**
 * URL helpers that respect the configured base path, so links work both at
 * https://<user>.github.io/<repo>/ and at the root of a custom domain.
 */
const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

/** Prefix a site-relative path with the base path. Always returns a trailing slash for page paths. */
export function url(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+(?:[?#].*)?$/i.test(clean);
  const [pathname, suffix = ''] = splitSuffix(clean);
  const withSlash = isFile || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${BASE}${withSlash}${suffix}`;
}

/** Absolute URL (origin + base + path) for canonical links, Open Graph and sitemaps. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ? site.origin : '';
  return `${origin}${url(path)}`;
}

/** Strip the base path from a pathname (e.g. "/lili_web/bg/about/" -> "/bg/about/"). */
export function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    const rest = pathname.slice(BASE.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname;
}

export const basePath = BASE;

function splitSuffix(path: string): [string, string] {
  const i = path.search(/[?#]/);
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)];
}
