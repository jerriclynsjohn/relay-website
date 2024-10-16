import type { Author } from '@types';

export function authorJSONLD(author: Author) {
  return {
    '@type': 'Person',
    name: author.name,
    url: author.url,
    image: {
      '@type': 'ImageObject',
      url: author.image.url,
      width: author.image.width,
      height: author.image.height
    },
    sameAs: Object.values(author.socials)
  };
}
