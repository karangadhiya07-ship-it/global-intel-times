type Env = { DB: D1Database };
type ArticleRow = Record<string, unknown>;

const json = (body: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: { "content-type": "application/json", ...(init.headers || {}) },
  });

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) => {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const statement = status
    ? env.DB.prepare("SELECT * FROM articles WHERE status = ? ORDER BY updated_at DESC").bind(status)
    : env.DB.prepare("SELECT * FROM articles ORDER BY updated_at DESC");
  const { results } = await statement.all<ArticleRow>();
  return json({ articles: results || [] });
};

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const article = (await request.json()) as Record<string, unknown>;
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  await env.DB.prepare(
    `INSERT INTO articles (
      id, title, slug, category, summary, body, author, featured_image_url,
      video_url, tags, seo_title, seo_description, status, featured, breaking,
      created_at, updated_at, published_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      id,
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
      now,
      article.status === "published" ? now : null
    )
    .run();

  return json({ id }, { status: 201 });
};
