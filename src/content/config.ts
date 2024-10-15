import { glob } from 'astro/loaders';

import { defineCollection, z } from 'astro:content';

import { SITE } from '@config';

const changelog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/changelog' }),
  schema: z.object({
    page: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    })
  })
});

const legal = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/legals' }),
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional()
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blogs' }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(['others']),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: 'OpenGraph image must be at least 1200 X 630 pixels!'
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      editPost: z
        .object({
          disabled: z.boolean().optional(),
          url: z.string().optional(),
          text: z.string().optional(),
          appendFilePath: z.boolean().optional()
        })
        .optional()
    })
});

export const collections = {
  changelog,
  legal,
  blog
};
