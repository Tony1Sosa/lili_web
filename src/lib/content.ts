import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import { categories, CATEGORY_IDS, type CategoryId } from '../data/categories';

export type Service = CollectionEntry<'services'>;
export type ProjectEntry = CollectionEntry<'projects'>;

export interface ProjectPhoto {
  file: string;
  image: ImageMetadata;
  alt: Record<Lang, string>;
}

export interface Project extends ProjectEntry {
  photos: ProjectPhoto[];
  cover: ProjectPhoto | null;
}

// All project photos, discovered at build time: src/assets/projects/<project-id>/<file>
const photoModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

function photosFor(entry: ProjectEntry): ProjectPhoto[] {
  const prefix = `/src/assets/projects/${entry.id}/`;
  const files = Object.keys(photoModules)
    .filter((path) => path.startsWith(prefix))
    .sort((a, b) => collator.compare(a, b));

  return files.map((path, index) => {
    const file = path.slice(prefix.length);
    const custom = entry.data.imageAlt?.[file];
    return {
      file,
      image: photoModules[path].default,
      alt: custom ?? {
        bg: `${entry.data.title.bg} — снимка ${index + 1} от ${files.length}`,
        en: `${entry.data.title.en} — photo ${index + 1} of ${files.length}`,
      },
    };
  });
}

function withPhotos(entry: ProjectEntry): Project {
  const photos = photosFor(entry);
  const cover = photos.find((p) => p.file === entry.data.cover) ?? photos[0] ?? null;
  return { ...entry, photos, cover };
}

/** Published projects, sorted by `order`. Drafts are never built. */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => data.status === 'published');
  return entries.sort((a, b) => a.data.order - b.data.order).map(withPhotos);
}

export async function getServices(): Promise<Service[]> {
  const entries = await getCollection('services');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Categories that have at least one published project, in the configured order. */
export function usedCategories(projects: Project[]): CategoryId[] {
  const used = new Set(projects.map((p) => p.data.category));
  return CATEGORY_IDS.filter((id) => used.has(id));
}

export function categoryLabel(id: CategoryId, lang: Lang): string {
  return categories[id].label[lang];
}

/** Projects related to a given one: same category first, then those sharing a service. */
export function relatedProjects(project: Project, all: Project[], limit = 3): Project[] {
  const others = all.filter((p) => p.id !== project.id);
  const serviceIds = new Set(project.data.services.map((s) => s.id));
  const score = (p: Project) =>
    (p.data.category === project.data.category ? 2 : 0) +
    (p.data.services.some((s) => serviceIds.has(s.id)) ? 1 : 0);
  return others
    .map((p) => ({ p, s: score(p) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s || a.p.data.order - b.p.data.order)
    .slice(0, limit)
    .map(({ p }) => p);
}

/** Projects that list a service. */
export function projectsForService(serviceId: string, all: Project[]): Project[] {
  return all.filter((p) => p.data.services.some((s) => s.id === serviceId));
}

/** Optional homepage hero photo: the first image in src/assets/hero/. */
const heroModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/hero/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);
export const heroImage: ImageMetadata | null =
  Object.keys(heroModules)
    .sort((a, b) => collator.compare(a, b))
    .map((k) => heroModules[k].default)[0] ?? null;
