import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, e as renderSlot, f as renderHead, b as addAttribute } from './astro/server_CTvTv_3p.mjs';

const $$IconSun = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg>`;
}, "D:/dev/galleryImageSD/src/components/IconSun.astro", void 0);

const $$IconMoon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg>`;
}, "D:/dev/galleryImageSD/src/components/IconMoon.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white dark:bg-gray-900 transition-colors duration-200"> <div class="flex justify-end p-4 items-center"> <a class="text-white mr-5" href="/">Gallery</a> <!-- Uncomment the following line to enable the upload feature --> <!-- <a class="text-white mr-5" href="/upload">Upload</a> --> <button id="themeToggle" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"> <span id="themeIcon" class="block w-6 h-6"> ${renderComponent($$result, "IconsSun", $$IconSun, {})} ${renderComponent($$result, "IconMoon", $$IconMoon, {})} </span> </button> </div> </header> `;
}, "D:/dev/galleryImageSD/src/components/ThemeToggle.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><script>\n      if (\n        typeof localStorage !== "undefined" &&\n        localStorage.getItem("theme")\n      ) {\n        document.documentElement.classList.add(localStorage.getItem("theme"));\n      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n        document.documentElement.classList.add("dark");\n        localStorage.setItem("theme", "dark");\n      } else {\n        document.documentElement.classList.add("light");\n        localStorage.setItem("theme", "light");\n      }\n    <\/script>', '</head> <body class="min-h-screen"> ', " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), renderSlot($$result, $$slots["default"]));
}, "D:/dev/galleryImageSD/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
