import { v2 } from 'cloudinary';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  try {
    v2.config({
      cloud_name: "djhxmjnb4",
      api_key: "119358423775835",
      api_secret: "A3XEnIkTXAwVqIArCwHMU34iorE"
    });
    const result = await v2.search.expression("folder:imageSD").sort_by("public_id", "desc").max_results(30).execute();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Search error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
