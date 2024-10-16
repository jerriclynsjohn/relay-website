import type { CollectionEntry } from 'astro:content';

import getSortedPosts from './getSortedBlogs';
import { slugifyAll } from './slugify';

const getBlogsByTag = (posts: CollectionEntry<'blog'>[], tag: string) =>
  getSortedPosts(posts.filter((post) => slugifyAll(post.data.tags).includes(tag)));

export default getBlogsByTag;
