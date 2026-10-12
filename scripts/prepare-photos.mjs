#!/usr/bin/env node
/**
 * Prepares uploaded photos for the repository:
 *   - rotates them according to the camera's EXIF orientation,
 *   - shrinks anything larger than 2560 px on the long side,
 *   - removes metadata (including GPS location) from the files.
 *
 * Usage:  npm run photos            (processes src/assets/projects and src/assets/hero)
 *         npm run photos -- --dry   (only reports what would change)
 *
 * The website build creates the responsive WebP/AVIF versions itself; this script
 * only keeps the originals in the repository at a sensible size.
 */
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const ROOTS = ['src/assets/projects', 'src/assets/hero'];
const MAX = 2560;
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const dry = process.argv.includes('--dry');

async function* walk(dir) {
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (EXT.has(extname(entry.name).toLowerCase())) yield path;
  }
}

let changed = 0;
let checked = 0;
for (const root of ROOTS) {
  for await (const file of walk(root)) {
    checked++;
    const meta = await sharp(file).metadata();
    const longSide = Math.max(meta.width ?? 0, meta.height ?? 0);
    const needsResize = longSide > MAX;
    const hasMetadata = Boolean(meta.exif) || (meta.orientation ?? 1) !== 1;
    if (!needsResize && !hasMetadata) continue;

    const before = (await stat(file)).size;
    console.log(`${dry ? '[dry] ' : ''}${file}: ${meta.width}×${meta.height}${needsResize ? ` → max ${MAX}px` : ''}${hasMetadata ? ', strip metadata' : ''}`);
    changed++;
    if (dry) continue;

    const ext = extname(file).toLowerCase();
    let pipeline = sharp(file).rotate().resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true });
    if (ext === '.png') pipeline = pipeline.png({ compressionLevel: 9 });
    else if (ext === '.webp') pipeline = pipeline.webp({ quality: 88 });
    else pipeline = pipeline.jpeg({ quality: 86, mozjpeg: true });

    const tmp = `${file}.tmp`;
    await pipeline.toFile(tmp);
    await unlink(file);
    await rename(tmp, file);
    const after = (await stat(file)).size;
    console.log(`   ${(before / 1024 / 1024).toFixed(1)} MB → ${(after / 1024 / 1024).toFixed(1)} MB`);
  }
}
console.log(`\n${checked} photo(s) checked, ${changed} ${dry ? 'would be ' : ''}updated.`);
