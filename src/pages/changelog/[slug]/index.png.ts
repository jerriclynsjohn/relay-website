import type { Author } from '@types';
import type { APIRoute } from 'astro';
import type { CollectionEntry } from 'astro:content';

import { getCollection, getEntry } from 'astro:content';

import { generateOgImageForChangelog } from '@utils/og/generateOgImages';
import { slugifyStr } from '@utils/slugify';

export async function getStaticPaths() {
  const changelogs = await getCollection('changelog').then((changelog) =>
    changelog.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return Promise.all(
    changelogs.map(async (changelog) => {
      const author = await getEntry('author', changelog.data.author.id);

      return {
        params: { slug: slugifyStr(changelog.data.title) },
        props: {
          changelog: changelog,
          author: author.data
        }
      };
    })
  );
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForChangelog(
      props.changelog as CollectionEntry<'changelog'>,
      props.author as Author
    ),
    {
      headers: { 'Content-Type': 'image/png' }
    }
  );
