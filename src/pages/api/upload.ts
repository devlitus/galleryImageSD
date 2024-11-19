import type { APIRoute } from "astro";
import { v2 as cloudinary, type UploadApiOptions } from "cloudinary";

const UPLOAD_OPTIONS: UploadApiOptions = {
  folder: "imageSD",
  allowed_formats: ["jpg", "jpeg", "png"],
  async: true,
  access_mode: "public",
  format: "auto",
  type: "upload",
};

const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const CHUNK_SIZE = 8192; // 8KB chunks
  const uint8Array = new Uint8Array(buffer);
  let binary = "";

  for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE) {
    const chunk = uint8Array.slice(
      i,
      Math.min(i + CHUNK_SIZE, uint8Array.length)
    );
    binary += String.fromCharCode.apply(null, Array.from(chunk));
  }

  return btoa(binary);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    cloudinary.config({
      cloud_name: import.meta.env.CLOUDINARY_CLOUDNAME,
      api_key: import.meta.env.CLOUDINARY_APIKEY,
      api_secret: import.meta.env.CLOUDINARY_APISECRET,
    });

    const file = await request.blob();
    const arrayBuffer = await file.arrayBuffer();
    const base64String = arrayBufferToBase64(arrayBuffer);
    const dataUrl = `data:${file.type};base64,${base64String}`;

    const result = await cloudinary.uploader.upload(dataUrl, {
      ...UPLOAD_OPTIONS,
      public_id: `image-${Date.now()}`,
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(
      JSON.stringify({
        error: "Error al subir la imagen",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
