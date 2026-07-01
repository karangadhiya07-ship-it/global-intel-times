type Env = { MEDIA_BUCKET: R2Bucket };

export const onRequestGet: PagesFunction<Env> = async ({ env, params }) => {
  const path = Array.isArray(params.path) ? params.path.join("/") : params.path;
  if (!path) return new Response("Not found", { status: 404 });
  const object = await env.MEDIA_BUCKET.get(path);
  if (!object) return new Response("Not found", { status: 404 });
  return new Response(object.body, {
    headers: {
      "content-type": object.httpMetadata?.contentType || "application/octet-stream",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};
