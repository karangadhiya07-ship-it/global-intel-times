# Cloudflare D1 + R2 CMS setup

This project keeps the Next.js site statically exportable and adds a Cloudflare Pages Functions backend for CMS writes.

## Bindings

Create a D1 database and R2 bucket, then bind them in the Cloudflare Pages project:

- D1 binding name: `DB`
- R2 binding name: `MEDIA_BUCKET`

## D1 schema

Run this SQL against the D1 database:

```sql
CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  category TEXT NOT NULL,
  summary TEXT NOT NULL,
  body TEXT NOT NULL,
  author TEXT NOT NULL,
  featured_image_url TEXT,
  video_url TEXT,
  tags TEXT,
  seo_title TEXT,
  seo_description TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  featured INTEGER NOT NULL DEFAULT 0,
  breaking INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  published_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE UNIQUE INDEX IF NOT EXISTS idx_articles_route ON articles(category, slug);
```

## Pages Functions API

- `GET /api/articles` lists articles.
- `POST /api/articles` creates an article.
- `GET /api/articles/:id` reads one article.
- `PUT /api/articles/:id` updates one article.
- `DELETE /api/articles/:id` deletes one article.
- `POST /api/uploads` uploads an image/video to R2.

No secrets are hardcoded. Configure admin authentication separately before production.
