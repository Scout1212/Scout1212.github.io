import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is a "feature" on the program. One Markdown file per project
// in src/content/features/. The body holds the long-form sections.
const media = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  poster: z.string().optional(), // only for videos
  wide: z.boolean().default(false), // landscape screenshots in the gallery
});

const features = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    reel: z.number(), // order on the program, 1 = top billing
    logline: z.string(), // one sentence, shown on the home page
    status: z.enum(['Now showing', 'In production']),
    released: z.coerce.string(), // human-readable date range, e.g. "Feb – Mar 2025"
    genres: z.array(z.string()),
    poster: media, // thumbnail on the home page
    trailer: media.optional(), // hero video or image on the project page
    // 3D models shown on the screen instead of a trailer (binary STL files in public/)
    viewer: z
      .object({
        models: z.array(
          z.object({
            name: z.string(),
            file: z.string(),
            blurb: z.string(),
            up: z.enum(['x', 'y', 'z', '-x', '-y', '-z']).default('z'),
          }),
        ),
        caption: z.string().optional(),
      })
      .optional(),
    // Group projects: who did what. Leave empty for solo work ("Directed by Robert Zamora").
    team: z
      .array(z.object({ name: z.string(), role: z.string(), href: z.string().optional(), me: z.boolean().default(false) }))
      .default([]),
    context: z.string().optional(), // e.g. "Class project"
    credits: z.array(z.object({ role: z.string(), value: z.string() })),
    gallery: z.array(media).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    note: z.string().optional(), // small archival note, e.g. lost documentation
    cast: z.array(z.object({ name: z.string(), role: z.string(), src: z.string() })).default([]),
    soundtrack: z.object({ title: z.string(), src: z.string() }).optional(),
  }),
});

export const collections = { features };
