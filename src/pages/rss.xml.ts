import rss from '@astrojs/rss';

import { getCollection } from 'astro:content';

import getSortedBlogs from '@utils/blog/getSortedBlogs';
import getSortedChangelogs from '@utils/changelog/getSortedChangelogs';

import { SITE_DATA } from '@config';

export async function GET() {
  const blogs = await getCollection('blog', ({ data }) => !data.draft);
  const sortedBlogs = getSortedBlogs(blogs);

  const changelogs = await getCollection('changelog', ({ data }) => !data.draft);
  const sortedChangelogs = getSortedChangelogs(changelogs);

  return rss({
    title: SITE_DATA.product.name,
    description: SITE_DATA.product.description,
    site: SITE_DATA.product.url,
    items: [
      ...sortedBlogs.map(({ data, slug }) => ({
        link: `blog/${slug}/`,
        title: data.title,
        description: data.description,
        pubDate: new Date(data.modDatetime ?? data.pubDatetime)
      })),
      ...sortedChangelogs.map(({ data, slug }) => ({
        link: `changelog/${slug}/`,
        title: data.title,
        description: data.description,
        pubDate: new Date(data.modDatetime ?? data.pubDatetime)
      }))
    ]
  });
}
