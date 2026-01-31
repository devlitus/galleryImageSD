import type { APIRoute } from "astro";
import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_APIKEY, CLOUDINARY_APISECRET, CLOUDINARY_CLOUDNAME } from "src/constants/constanst";

export const GET: APIRoute = async ({ url }) => {
  try {
    const cursor = url.searchParams.get("cursor");

    cloudinary.config({
      cloud_name: CLOUDINARY_CLOUDNAME,
      api_key: CLOUDINARY_APIKEY,
      api_secret: CLOUDINARY_APISECRET,
      secure: true,
    });

    const searchExpression = cloudinary.search
      .expression("folder:imageSD")
      .sort_by("public_id", "desc")
      .max_results(20);

    if (cursor) {
      searchExpression.next_cursor(cursor);
    }

    const result = await searchExpression.execute();

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
