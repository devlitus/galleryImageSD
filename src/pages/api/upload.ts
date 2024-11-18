import type { APIRoute } from "astro";
import { v2 as cloudinary } from "cloudinary";

export const POST: APIRoute = async ({ request }) => {
  try {
    cloudinary.config({
      cloud_name: import.meta.env.CLOUDINARY_CLOUDNAME,
      api_key: import.meta.env.CLOUDINARY_APIKEY,
      api_secret: import.meta.env.CLOUDINARY_APISECRET,
    });

    const blob = await request.blob();

    const dataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });

    const result = await cloudinary.uploader.upload(dataUrl, {
      folder: "image_SD",
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
