/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly CLOUDINARY_APIKEY: string;
  readonly CLOUDINARY_APISECRET: string;
  readonly CLOUDINARY_URL: string;
  readonly CLOUDINARY_CLOUDNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
