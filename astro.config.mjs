// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const mode = process.env.NODE_ENV ?? 'development';
const { SITE_URL } = loadEnv(mode, process.cwd(), '');
const site = SITE_URL?.trim() || 'https://momenfawzy.com';

if (site) {
  const parsedSite = new URL(site);

  if (!['http:', 'https:'].includes(parsedSite.protocol)) {
    throw new Error('SITE_URL must use the http or https protocol.');
  }
}

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site,
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname !== '/contact-tree/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
