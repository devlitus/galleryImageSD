/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_CTvTv_3p.mjs';
import { $ as $$Layout } from '../chunks/Layout_BapuAfH2.mjs';
export { renderers } from '../renderers.mjs';

const $$DropZone = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="uploadForm" class="w-full"> <div id="dropZone" class="w-full min-h-[300px] flex flex-col justify-center text-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"> <div class="drop-zone__prompt flex items-center flex-col gap-4"> <p class="text-gray-600 dark:text-gray-300">
Arrastra y suelta imágenes aquí
</p> <p class="text-gray-500 dark:text-gray-400">o</p> <button type="button" id="selectFiles" class="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
Seleccionar archivos
</button> </div> <input type="file" id="fileInput" class="hidden" accept="image/*" multiple> <div id="preview" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full mt-6"></div> </div> <button type="submit" class="w-full mt-4 px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed" id="submitButton" disabled>
Subir imágenes
</button> </form> `;
}, "D:/dev/galleryImageSD/src/components/DropZone.astro", void 0);

const $$Upload = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Subir imagen" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex pt-32 justify-center dark:bg-gray-900 transition-colors duration-200"> <div class="w-full max-w-2xl"> ${renderComponent($$result2, "DropZone", $$DropZone, {})} </div> </div> ` })}`;
}, "D:/dev/galleryImageSD/src/pages/upload.astro", void 0);

const $$file = "D:/dev/galleryImageSD/src/pages/upload.astro";
const $$url = "/upload";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Upload,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
