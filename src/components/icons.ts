/**
 * Inline line icons (24×24, stroke = currentColor). Rendered by Icon.astro.
 * Kept as plain SVG markup to avoid an icon-font or icon-library dependency.
 */
export const icons = {
  // Interface
  'arrow-right': '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  'arrow-left': '<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>',
  'chevron-left': '<path d="M15 5l-7 7 7 7"/>',
  'chevron-right': '<path d="M9 5l7 7-7 7"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  close: '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5"/><path d="M12 16.5h.01"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9s1.3-6.4 3.8-9z"/>',
  external: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  expand: '<path d="M4 9V4h5"/><path d="M20 9V4h-5"/><path d="M4 15v5h5"/><path d="M20 15v5h-5"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',

  // Contact
  phone:
    '<path d="M21 16.5v3a1.5 1.5 0 0 1-1.6 1.5A17 17 0 0 1 3 4.6 1.5 1.5 0 0 1 4.5 3h3a1.5 1.5 0 0 1 1.5 1.3c.1.9.4 1.8.7 2.6a1.5 1.5 0 0 1-.4 1.6L8 9.8a13 13 0 0 0 6.2 6.2l1.3-1.3a1.5 1.5 0 0 1 1.6-.4c.8.3 1.7.6 2.6.7a1.5 1.5 0 0 1 1.3 1.5z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
  'map-pin': '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',

  // Products & categories
  railing:
    '<path d="M3 6h18"/><path d="M5 6v14"/><path d="M19 6v14"/><path d="M5 10h14"/><path d="M5 13.5h14"/><path d="M5 17h14"/><path d="M3 20h18"/>',
  stairs: '<path d="M3 21h4v-4h4v-4h4V9h4V5h2"/><path d="M4 14L18 3"/><path d="M4 14v3"/><path d="M18 3v3"/>',
  canopy: '<path d="M4 3v18"/><path d="M4 7l17 2.5"/><path d="M4 13l14.5-3.7"/><path d="M8 21v-7h5v7"/>',
  door: '<rect x="6" y="3" width="12" height="18" rx="0.5"/><path d="M15 11.5v2"/><path d="M3 21h18"/><path d="M9 6.5h6"/>',
  fence:
    '<path d="M5 21V7l2-3 2 3v14"/><path d="M10 21V7l2-3 2 3v14"/><path d="M15 21V7l2-3 2 3v14"/><path d="M3 10h18"/><path d="M3 17h18"/>',
  structure: '<path d="M2.5 10.5L12 4l9.5 6.5"/><path d="M5 9v12"/><path d="M19 9v12"/><path d="M3 21h18"/><path d="M5 12l7-5 7 5"/><path d="M9 21v-5h6v5"/>',
  custom:
    '<path d="M14.5 5.5a4 4 0 0 0-5 5L3.5 16.5a1.8 1.8 0 0 0 2.5 2.5l6-6a4 4 0 0 0 5-5L14.6 10.4l-2.3-.7-.7-2.3z"/>',
  powder:
    '<path d="M4 9h9v5H4z"/><path d="M13 11.5h3"/><path d="M7 14l-1 6h3"/><path d="M18.5 8l2-1.2"/><path d="M18.5 11.5h2.5"/><path d="M18.5 15l2 1.2"/>',
  cut: '<path d="M4 20l7-7"/><path d="M11 13l3.5-3.5 2 2L13 15z"/><path d="M17.5 3.5v2.5"/><path d="M21 7.5h-2.5"/><path d="M20.5 4l-1.8 1.8"/>',
  bend: '<path d="M3 18h7l4-8h7"/><path d="M14 2.5v4.5"/><path d="M12 5l2 2 2-2"/>',
  weld: '<path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z"/>',
  mill: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 3v2"/><path d="M12 19v2"/><path d="M3 12h2"/><path d="M19 12h2"/>',
  grind: '<circle cx="9" cy="15" r="5"/><circle cx="9" cy="15" r="1.2"/><path d="M12.5 11.5L20 4"/><path d="M17 4h3v3"/>',
  ruler: '<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l1.8 1.8"/><path d="M10 10l1.2 1.2"/><path d="M13 7l1.8 1.8"/>',
  truck: '<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3.5V16h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/>',
  message: '<path d="M4 4h16v12H9l-5 4z"/><path d="M8 8.5h8"/><path d="M8 12h5"/>',
  document: '<path d="M6 3h8.5L19 7.5V21H6z"/><path d="M14 3v5h5"/><path d="M9 13h7"/><path d="M9 17h5"/>',
  factory: '<path d="M3 21V10l6 4v-4l6 4V5h6v16z"/><path d="M7 18h2"/><path d="M12 18h2"/><path d="M17 18h1"/>',
  shield: '<path d="M12 3l7 3v5.5c0 4.4-3 8-7 9.5-4-1.5-7-5.1-7-9.5V6z"/><path d="M9 12l2 2 4-4.5"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 16.5l9 5 9-5"/>',
} as const;

export type IconName = keyof typeof icons;
