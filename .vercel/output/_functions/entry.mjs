import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B6GncjUZ.mjs';
import { manifest } from './manifest_pHvSApAG.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/search.astro.mjs');
const _page2 = () => import('./pages/api/upload.astro.mjs');
const _page3 = () => import('./pages/upload.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.13_rollup@4.27.2_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/search.ts", _page1],
    ["src/pages/api/upload.ts", _page2],
    ["src/pages/upload.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b64933e4-de74-41ed-b586-89d2519404e1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
