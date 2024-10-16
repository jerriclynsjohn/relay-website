import { glob } from 'astro/loaders';

import { defineCollection, reference, z } from 'astro:content';

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/legals' }),
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional()
  })
});

const author = defineCollection({
  loader: glob({ pattern: '**/*.yml', base: './src/content/author' }),
  schema: z.object({
    name: z.string(),
    jobTitle: z.string(),
    url: z.string(),
    image: z
      .object({
        url: z.string(),
        width: z.number().optional(),
        height: z.number().optional()
      })
      .optional(),
    socials: z
      .object({
        linkedin: z.string().optional(),
        x: z.string().optional()
      })
      .optional()
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      author: reference('author'),
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
  author,
  blog
};
