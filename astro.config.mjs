// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  // adapter: node({
  //   mode: "standalone",
  // }),
  adapter: vercel(),
});
