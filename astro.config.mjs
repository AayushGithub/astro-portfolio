import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
  integrations: [
    sitemap(),
    prefetch(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  site: "https://aayushgandhi.com",
});
