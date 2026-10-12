import type { Lang } from '../i18n/ui';
import type { IconName } from '../components/icons';

/**
 * Project gallery categories. A category is shown as a filter only when at least
 * one published project uses it, so empty categories never appear.
 */
export const CATEGORY_IDS = ['railings', 'stairs', 'canopies', 'doors-fencing', 'structures', 'custom'] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

export const categories: Record<CategoryId, { label: Record<Lang, string>; icon: IconName }> = {
  railings: { label: { bg: 'Парапети', en: 'Railings & balustrades' }, icon: 'railing' },
  stairs: { label: { bg: 'Стълби', en: 'Stairs' }, icon: 'stairs' },
  canopies: { label: { bg: 'Козирки', en: 'Canopies' }, icon: 'canopy' },
  'doors-fencing': { label: { bg: 'Врати, огради и решетки', en: 'Doors, gates & grilles' }, icon: 'door' },
  structures: { label: { bg: 'Метални конструкции', en: 'Metal structures' }, icon: 'structure' },
  custom: { label: { bg: 'Нестандартни изделия', en: 'Custom fabrication' }, icon: 'custom' },
};
