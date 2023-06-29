import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [sitemap()],
  site: 'https://aayushgandhi.com'
});