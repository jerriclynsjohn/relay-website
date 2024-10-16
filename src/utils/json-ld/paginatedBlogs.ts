import type { Blog } from '@types';

import { TOP_NAVIGATION } from '@config';

export function paginatedBlogs(blogs: Blog[]) {
  return blogs.map((blog) => ({
    '@type': 'BlogPosting',
    '@id': blog.url,
    url: blog.url,
    headline: blog.headline,
    description: blog.description,
    datePublished: blog.datePublished,
    dateModified: blog.dateModified,
    author: {
      '@type': 'Person',
      name: blog.author.name,
      jobTitle: blog.author.jobTitle,
      url: blog.author.url
    },
    image: {
      '@type': 'ImageObject',
      url: blog.image,
      width: 1200,
      height: 630
    },
    publisher: {
      '@id': `${TOP_NAVIGATION.landing}/#organization`
    }
  }));
}
