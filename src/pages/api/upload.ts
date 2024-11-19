import type { APIRoute } from "astro";
import {
  v2 as cloudinary,
  type UploadApiOptions,
  type UploadApiResponse,
} from "cloudinary";

// Definir las opciones de subida fuera de la función principal
const UPLOAD_OPTIONS: UploadApiOptions = {
  folder: "imageSD",
  allowed_formats: ["jpg", "jpeg", "png"],
  async: true,
  access_mode: "public",
  format: "auto",
  type: "upload",
};

// Función auxiliar para manejar errores
const handleUploadError = (error: unknown) => {
  if (!(error instanceof Error)) {
    return { message: "Error desconocido", status: 500 };
  }

  const { message } = error;

  switch (true) {
    case message.includes("Maximum call stack size exceeded"):
      return {
        message: "La imagen es demasiado grande para procesarla",
        status: 413,
      };
    case message.includes("timeout"):
      return { message: "La subida tardó demasiado tiempo", status: 408 };
    case message.includes("network"):
      return { message: "Error de red al subir la imagen", status: 503 };
    default:
      return { message: "Error al subir la imagen", status: 500 };
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    // Configurar Cloudinary
    cloudinary.config({
      cloud_name: import.meta.env.CLOUDINARY_CLOUDNAME,
      api_key: import.meta.env.CLOUDINARY_APIKEY,
      api_secret: import.meta.env.CLOUDINARY_APISECRET,
    });

    const file = await request.blob();
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Usar async/await con una promesa más limpia
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          ...UPLOAD_OPTIONS,
          public_id: `image-${Date.now()}`,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result as UploadApiResponse);
        }
      );

      uploadStream.end(uint8Array);
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const { message, status } = handleUploadError(error);

    return new Response(
      JSON.stringify({
        error: message,
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
