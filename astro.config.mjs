import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

const devPreview = {
  name: "dev-preview",
  hooks: {
    "astro:config:setup": ({ command, injectRoute }) => {
      if (command !== "dev") {
        return;
      }

      injectRoute({
        entrypoint: "./src/preview/notes/preview/[slug].astro",
        pattern: "/notes/preview/[slug]",
        prerender: false,
      });
      injectRoute({
        entrypoint: "./src/preview/notes/preview/photography/[slug].astro",
        pattern: "/notes/preview/photography/[slug]",
        prerender: false,
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    preact({ compat: true }),
    devPreview,
  ],

  output: "static",

  prefetch: {
    prefetchAll: true,
  },

  site: "https://nadav.is",
  image: {
    domains: ["cms.nadav.is"],
  }
});

