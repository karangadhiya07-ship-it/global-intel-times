type Env = { DB: D1Database };
type ArticleRow = Record<string, unknown>;

const json = (body: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: { "content-type": "application/json", ...(init.headers || {}) },
  });

export const onRequestGet: PagesFunction<Env> = async ({ env, params }) => {
  const article = await env.DB.prepare("SELECT * FROM articles WHERE id = ?").bind(params.id).first<ArticleRow>();
  if (!article) return json({ error: "Article not found" }, { status: 404 });
  return json({ article });
};

export const onRequestPut: PagesFunction<Env> = async ({ env, params, request }) => {
  const article = (await request.json()) as Record<string, unknown>;
  const now = new Date().toISOString();

  await env.DB.prepare(
    `UPDATE articles SET
      title = ?, slug = ?, category = ?, summary = ?, body = ?, author = ?,
      featured_image_url = ?, video_url = ?, tags = ?, seo_title = ?,
      seo_description = ?, status = ?, featured = ?, breaking = ?, updated_at = ?,
      published_at = CASE WHEN ? = 'published' THEN COALESCE(published_at, ?) ELSE published_at END
    WHERE id = ?`
  )
    .bind(
      article.title || "",
      article.slug || "",
      article.category || "World",
      article.summary || "",
      article.body || "",
      article.author || "",
      article.featuredImageUrl || "",
      article.videoUrl || "",
      article.tags || "",
      article.seoTitle || "",
      article.seoDescription || "",
      article.status || "draft",
      article.featured ? 1 : 0,
      article.breaking ? 1 : 0,
      now,
      article.status || "draft",
      now,
      params.id
    )
    .run();

  return json({ ok: true });
};

export const onRequestDelete: PagesFunction<Env> = async ({ env, params }) => {
  await env.DB.prepare("DELETE FROM articles WHERE id = ?").bind(params.id).run();
  return json({ ok: true });
};
