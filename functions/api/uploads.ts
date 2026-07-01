type Env = { MEDIA_BUCKET: R2Bucket };

const json = (body: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: { "content-type": "application/json", ...(init.headers || {}) },
  });

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return json({ error: "Missing file" }, { status: 400 });
  }

  const key = `uploads/${Date.now()}-${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
  await env.MEDIA_BUCKET.put(key, file.stream(), {
    httpMetadata: { contentType: file.type || "application/octet-stream" },
  });

  return json({ key, url: `/api/uploads/${key}` });
};
