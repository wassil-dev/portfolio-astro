// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Set the site URL for GitHub Pages
  site: 'https://wassil-dev.github.io',
  // Deploying to repository: portfolio-v4
  base: '/portfolio-v4',

  integrations: [react(), mdx()],

  // Output as static site for GitHub Pages
  output: 'static',

  // Ensure trailing slashes for GitHub Pages
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
