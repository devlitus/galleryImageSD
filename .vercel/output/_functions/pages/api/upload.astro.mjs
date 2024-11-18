import { v2 } from 'cloudinary';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    v2.config({
      cloud_name: "djhxmjnb4",
      api_key: "119358423775835",
      api_secret: "A3XEnIkTXAwVqIArCwHMU34iorE"
    });
    const blob = await request.blob();
    const dataUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
    const result = await v2.uploader.upload(dataUrl, {
      folder: "image_SD"
    });
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
