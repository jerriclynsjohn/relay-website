import type { CollectionEntry } from 'astro:content';

import { SCHEDULED_BLOG_MARGIN } from '@config';

const postFilter = ({ data }: CollectionEntry<'blog'>) => {
  const isPublishTimePassed =
    Date.now() > new Date(data.pubDatetime).getTime() - SCHEDULED_BLOG_MARGIN;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;
