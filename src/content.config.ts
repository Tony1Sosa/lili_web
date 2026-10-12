import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_IDS } from './data/categories';
import { icons } from './components/icons';

/** A text in both site languages. Both are required so no page ever mixes languages. */
const localized = z.object({ bg: z.string().min(1), en: z.string().min(1) });
const localizedList = z.object({ bg: z.array(z.string().min(1)), en: z.array(z.string().min(1)) });

const iconName = z.enum(Object.keys(icons) as [keyof typeof icons, ...(keyof typeof icons)[]]);

/**
 * Products & services — one JSON file per service in src/content/services/.
 * The file name is the URL slug: railings.json -> /bg/products/railings/
 */
const services = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/services' }),
  schema: z.object({
    order: z.number(),
    icon: iconName,
    title: localized,
    summary: localized,
    intro: localized,
    includes: localizedList,
    applications: localizedList.optional(),
    materials: localizedList.optional(),
    note: localized.optional(),
    seoDescription: localized,
  }),
});

/**
 * Projects (portfolio) — one JSON file per project in src/content/projects/.
 * Photos are picked up automatically from src/assets/projects/<file-name>/.
 * Only add facts that have been verified — no invented clients, places or dates.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    status: z.enum(['published', 'draft']),
    order: z.number(),
    featured: z.boolean().default(false),
    category: z.enum(CATEGORY_IDS),
    services: z.array(reference('services')).min(1),
    title: localized,
    summary: localized,
    description: localized.optional(),
    materials: localizedList.optional(),
    /** File name inside the project's photo folder to use as the cover (defaults to the first photo). */
    cover: z.string().optional(),
    /** Per-photo alternative text, keyed by file name. Recommended for every photo. */
    imageAlt: z.record(z.string(), localized).optional(),
    /** Where the content came from on the old WordPress site (documentation only, not rendered). */
    legacy: z
      .object({
        urls: z.array(z.string()).default([]),
        images: z.array(z.string()).default([]),
      })
      .optional(),
  }),
});

export const collections = { services, projects };
