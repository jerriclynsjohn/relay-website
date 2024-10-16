import type { Author } from '@types';

import { type CollectionEntry } from 'astro:content';

import { Resvg } from '@resvg/resvg-js';
import postOgImage from './og-templates/blog';
import siteOgImage from './og-templates/site';

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForBlog(
  blog: CollectionEntry<'blog'>,
  author: Author
) {
  const svg = await postOgImage(blog, author);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}
