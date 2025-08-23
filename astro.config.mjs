import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    preact({ compat: true }),
  ],

  prefetch: {
    prefetchAll: true,
  },

  site: "https://nadav.is",
  adapter: vercel({
    isr: {
      // 24 hours
      expiration: 60 * 60 * 24,
    },
  }),
  image: {
    domains: ["cms.nadav.is"],
  }
});

