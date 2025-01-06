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
      dsn: "https://82af31d911269e2fe20cb3358364e7d0@o4508578388639744.ingest.de.sentry.io/4508578394800208",
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
