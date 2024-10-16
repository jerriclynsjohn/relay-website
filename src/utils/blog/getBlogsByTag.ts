import type { CollectionEntry } from 'astro:content';

import { slugifyAll } from '../slugify';
import getSortedPosts from './getSortedBlogs';

const getBlogsByTag = (posts: CollectionEntry<'blog'>[], tag: string) =>
  getSortedPosts(posts.filter((post) => slugifyAll(post.data.tags).includes(tag)));

export default getBlogsByTag;
