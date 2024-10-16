import type { Changelog } from '@types';

import { TOP_NAVIGATION } from '@config';

export function paginatedChangelogs(changelogs: Changelog[]) {
  return changelogs.map((changelog) => ({
    '@type': 'BlogPosting',
    '@id': changelog.url,
    url: changelog.url,
    headline: changelog.headline,
    description: changelog.description,
    datePublished: changelog.datePublished,
    author: {
      '@type': 'Person',
      name: changelog.author.name,
      jobTitle: changelog.author.jobTitle,
      url: changelog.author.url
    },
    image: {
      '@type': 'ImageObject',
      url: changelog.image,
      width: 1200,
      height: 630
    },
    publisher: {
      '@id': `${TOP_NAVIGATION.landing}/#organization`
    }
  }));
}
