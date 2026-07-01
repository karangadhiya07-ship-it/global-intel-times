type Env = { DB: D1Database };
const json = (body: unknown, init: ResponseInit = {}) => new Response(JSON.stringify(body), { ...init, headers: { "content-type": "application/json", ...(init.headers || {}) } });
export const onRequestGet: PagesFunction<Env> = async ({ env, params }) => {
  const path = Array.isArray(params.path) ? params.path : [params.path].filter(Boolean);
  const [category, slug] = path;
  if (!category || !slug) return json({ error: "Missing route" }, { status: 400 });
  const article = await env.DB.prepare("SELECT * FROM articles WHERE category = ? AND slug = ? AND status = 'published'").bind(category, slug).first<Record<string, unknown>>();
  if (!article) return json({ error: "Article not found" }, { status: 404 });
  return json({ article });
};
