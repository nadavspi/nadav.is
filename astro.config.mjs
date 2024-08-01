import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), preact({ compat: true })],
  prefetch: {
    prefetchAll: true
  },
  site: "https://nadav.is",
});
