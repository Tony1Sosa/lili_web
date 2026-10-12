/**
 * Build-time configuration read from environment variables
 * (set as GitHub repository variables for the deploy workflow, or in a local .env).
 */

/** Public form endpoint, e.g. https://formspree.io/f/abcdwxyz. Empty = form not connected yet. */
export const FORM_ENDPOINT: string = (() => {
  const value = (import.meta.env.PUBLIC_FORM_ENDPOINT ?? '').trim();
  return /^https:\/\/[^\s]+$/.test(value) ? value : '';
})();

/** Search-engine indexing. Off by default while the site is a preview with placeholder data. */
export const ALLOW_INDEXING: boolean = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
