// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set the site URL for custom domain
  site: 'https://ouassil-dahimene.dev',
  // No base path needed for custom domain
  base: '/',

  integrations: [react(), mdx(), sitemap()],

  // Output as static site for GitHub Pages
  output: 'static',

  // Ensure trailing slashes
  trailingSlash: 'always',

  // Build options
  build: {
    assets: '_astro'
  },

  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
