import type { CollectionEntry } from 'astro:content';

import { SCHEDULED_CHANGELOG_MARGIN } from '@config';

const changelogFilter = ({ data }: CollectionEntry<'changelog'>) => {
  const isPublishTimePassed =
    Date.now() > new Date(data.pubDatetime).getTime() - SCHEDULED_CHANGELOG_MARGIN;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default changelogFilter;
