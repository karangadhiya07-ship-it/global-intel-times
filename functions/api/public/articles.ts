type Env = { DB: D1Database };
const json = (body: unknown, init: ResponseInit = {}) => new Response(JSON.stringify(body), { ...init, headers: { "content-type": "application/json", ...(init.headers || {}) } });
export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const { results } = await env.DB.prepare("SELECT * FROM articles WHERE status = 'published' ORDER BY published_at DESC, updated_at DESC").all<Record<string, unknown>>();
  return json({ articles: results || [] });
};
