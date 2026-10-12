import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/url';
import { ALLOW_INDEXING } from '../data/site';

/**
 * robots.txt. Note: crawlers only read robots.txt at the domain root, so this file
 * matters once the site runs on its own domain. While indexing is disabled every
 * page also carries <meta name="robots" content="noindex">.
 */
export const GET: APIRoute = ({ site }) => {
  const body = ALLOW_INDEXING
    ? `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('sitemap-index.xml', site)}\n`
    : `# Preview build: indexing disabled (set PUBLIC_ALLOW_INDEXING=true when the site goes live).\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
