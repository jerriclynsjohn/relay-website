import { defineCollection, z } from 'astro:content';

const changelog = defineCollection({
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

const legals = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional()
  })
});

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});
export const collections = {
  changelog: changelog,
  legals: legals,
  posts: postsCollection
};
