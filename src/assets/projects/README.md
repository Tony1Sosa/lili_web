# Project photos

Each folder here belongs to the project with the same name in `src/content/projects/`.

Put the original photos (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`) straight into the
project's folder. The website finds them automatically when it is built:

- Photos are shown in file-name order. Prefix them `01-…`, `02-…` to control the order.
- The first photo is the cover unless `"cover": "file-name.jpg"` is set in the project's JSON.
- Responsive WebP/AVIF versions are generated at build time. Upload the originals, up to
  about 2500 px on the long side. Run `npm run photos` to shrink larger files.
- Add a description for every photo under `"imageAlt"` in the project's JSON (both languages).

Only upload photos of the company's own work. Do not use stock or AI-generated images.
