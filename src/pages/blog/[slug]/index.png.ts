import type { Author } from '@types';
import type { APIRoute } from 'astro';
import type { CollectionEntry } from 'astro:content';

import { getCollection, getEntry } from 'astro:content';

import { generateOgImageForBlog } from '@utils/generateOgImages';
import { slugifyStr } from '@utils/slugify';

export async function getStaticPaths() {
  const blogs = await getCollection('blog').then((blog) =>
    blog.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return Promise.all(
    blogs.map(async (blog) => {
      const author = await getEntry('author', blog.data.author.id);
      console.log(author);
      return {
        params: { slug: slugifyStr(blog.data.title) },
        props: {
          blog: blog,
          author: author.data
        }
      };
    })
  );
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForBlog(
      props.blog as CollectionEntry<'blog'>,
      props.author as Author
    ),
    {
      headers: { 'Content-Type': 'image/png' }
    }
  );
