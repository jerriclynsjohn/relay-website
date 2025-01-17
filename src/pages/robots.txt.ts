import type { APIRoute } from 'astro';

import { TOP_NAVIGATION } from '@config';

const robots = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', TOP_NAVIGATION.landing).href}
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { 'Content-Type': 'text/plain' }
  });
