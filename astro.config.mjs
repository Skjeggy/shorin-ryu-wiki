import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update `site` and `base` to match your GitHub Pages deployment.
  // Example for a project page: site: 'https://USERNAME.github.io', base: '/REPO_NAME'
  site: 'https://skjeggy.github.io',
  base: '/shorin-ryu-wiki',
  trailingSlash: 'ignore',
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'nb',
    locales: ['nb', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  build: {
    format: 'directory',
  },
});
