import type { APIRoute } from "astro";
import { v2 as cloudinary } from "cloudinary";

export const GET: APIRoute = async () => {
  try {
    cloudinary.config({
      cloud_name: import.meta.env.CLOUDINARY_CLOUDNAME,
      api_key: import.meta.env.CLOUDINARY_APIKEY,
      api_secret: import.meta.env.CLOUDINARY_APISECRET,
    });

    const result = await cloudinary.search
      .expression("folder:imageSD")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Search error:", error);
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
