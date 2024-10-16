// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import devtoolBreakpoints from 'astro-devtool-breakpoints';

import { defineConfig } from 'astro/config';

import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';

import { TOP_NAVIGATION } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: TOP_NAVIGATION.landing,
  integrations: [
    svelte(),
    mdx(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    devtoolBreakpoints(),
    react()
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: 'Table of contents'
        }
      ]
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: 'min-light', dark: 'night-owl' },
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});
