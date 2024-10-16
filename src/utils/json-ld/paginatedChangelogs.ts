import type { Changelog } from '@types';

import { TOP_NAVIGATION } from '@config';

export function paginatedChangelogs(changelogs: Changelog[]) {
  return changelogs.map((changelog, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Article',
      '@id': changelog.url,
      url: changelog.url,
      headline: changelog.headline,
      datePublished: changelog.datePublished,
      description: changelog.description,
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
    }
  }));
}
