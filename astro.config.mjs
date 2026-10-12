// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deployment target.
 *
 * SITE_URL  – origin of the published site (no trailing slash).
 * BASE_PATH – sub-path the site is served from. "/lili_web" for the GitHub Pages
 *             project URL, "" (empty) for a custom domain or user site.
 *
 * The GitHub Actions workflow fills both from actions/configure-pages, so a custom
 * domain added later in the repository settings is picked up automatically.
 */
const SITE_URL = (process.env.SITE_URL || 'https://tony1sosa.github.io').replace(/\/+$/, '');
const BASE_PATH = normalizeBase(process.env.BASE_PATH ?? '/lili_web');

/** @param {string} value */
function normalizeBase(value) {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}` : '/';
}

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Legacy redirect pages and the language-detection root are not content pages.
      filter: (page) => /\/(bg|en)\//.test(new URL(page).pathname),
      i18n: {
        defaultLocale: 'bg',
        locales: { bg: 'bg-BG', en: 'en' },
      },
    }),
  ],
  image: {
    // Generated sizes for responsive images (px).
    breakpoints: [480, 768, 1080, 1440, 1920],
  },
});
