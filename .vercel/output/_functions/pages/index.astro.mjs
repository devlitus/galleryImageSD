/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from '../chunks/astro/server_CTvTv_3p.mjs';
import { $ as $$Layout } from '../chunks/Layout_BapuAfH2.mjs';
export { renderers } from '../renderers.mjs';

const $$GalleryImage = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("http://localhost:4321/api/search");
  const data = await response.json();
  const { resources } = data;
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mr-auto ml-auto p-4"> ${response.status === 200 && resources.map(({ secure_url, filename }) => renderTemplate`<img${addAttribute(secure_url, "src")}${addAttribute(filename, "alt")} class="w-full h-64 object-cover rounded-lg">`)} </div> </div>`;
}, "D:/dev/galleryImageSD/src/components/GalleryImage.astro", void 0);

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Imagenes con SD" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white dark:bg-gray-900 transition-colors duration-200"> <div class="min-h-screen flex pt-10 justify-center"> ${renderComponent($$result2, "GalleryImage", $$GalleryImage, {})} </div> </main> ` })}`;
}, "D:/dev/galleryImageSD/src/pages/index.astro", void 0);

const $$file = "D:/dev/galleryImageSD/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
