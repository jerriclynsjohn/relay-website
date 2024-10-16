import type { CollectionEntry } from 'astro:content';

import changelogFilter from './changelogFilter';

const getSortedChangelogs = (posts: CollectionEntry<'changelog'>[]) => {
  return posts
    .filter(changelogFilter)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );
};

export default getSortedChangelogs;
