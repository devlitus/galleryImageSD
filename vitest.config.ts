import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default getViteConfig(defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
}));
