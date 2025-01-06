// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind(),
    sentry({
      sourceMapsUploadOptions: {
        project: "gallery-image",
        authToken: import.meta.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
  }),
});
