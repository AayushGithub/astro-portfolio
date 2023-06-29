import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [sitemap(), prefetch()],
  site: 'https://aayushgandhi.com'
});