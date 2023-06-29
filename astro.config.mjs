import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
 
export default defineConfig({
  output: 'static',
  integrations: [react()],
  adapter: vercelStatic(),
});