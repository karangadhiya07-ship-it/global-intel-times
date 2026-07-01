"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { adminCategories } from "@/lib/admin";
import FieldGroup from "@/components/admin/FieldGroup";

type CmsArticle = {
  id?: string;
  title?: string;
  slug?: string;
  category?: string;
  summary?: string;
  body?: string;
  author?: string;
  featured_image_url?: string;
  video_url?: string;
  tags?: string;
  seo_title?: string;
  seo_description?: string;
  status?: "draft" | "published";
  featured?: number | boolean;
  breaking?: number | boolean;
};

type ArticleFormProps = {
  mode: "new" | "edit";
  articleId?: string;
};

async function uploadFile(file: File | null) {
  if (!file || file.size === 0) return "";
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch("/api/uploads", { method: "POST", body: formData });
  if (!response.ok) throw new Error("Upload failed");
  const result = await response.json();
  return String(result.url || "");
}

export default function ArticleForm({ mode, articleId }: ArticleFormProps) {
  const router = useRouter();
  const [article, setArticle] = useState<CmsArticle>({});
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!articleId) return;
    let cancelled = false;
    fetch(`/api/articles/${articleId}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Article not found"))))
      .then((result) => {
        if (!cancelled) setArticle(result.article || {});
      })
      .catch(() => {
        if (!cancelled) setMessage("Unable to load article from D1.");
      });
    return () => {
      cancelled = true;
    };
  }, [articleId]);

  async function saveArticle(form: HTMLFormElement, status: "draft" | "published") {
    setBusy(true);
    setMessage("");

    try {
      const formData = new FormData(form);
      const featuredImageUrl =
        (await uploadFile(formData.get("featuredImage") as File | null)) || String(formData.get("existingFeaturedImageUrl") || "");
      const videoUrl =
        (await uploadFile(formData.get("videoFile") as File | null)) || String(formData.get("existingVideoUrl") || "");

      const payload = {
        title: String(formData.get("title") || ""),
        slug: String(formData.get("slug") || ""),
        category: String(formData.get("category") || "World"),
        summary: String(formData.get("summary") || ""),
        body: String(formData.get("body") || ""),
        author: String(formData.get("author") || ""),
        featuredImageUrl,
        videoUrl,
        tags: String(formData.get("tags") || ""),
        seoTitle: String(formData.get("seoTitle") || ""),
        seoDescription: String(formData.get("seoDescription") || ""),
        status,
        featured: formData.get("featured") === "on",
        breaking: formData.get("breaking") === "on",
      };

      const endpoint = articleId ? `/api/articles/${articleId}` : "/api/articles";
      const response = await fetch(endpoint, {
        method: articleId ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Save failed");
      const result = await response.json();
      setMessage(status === "published" ? "Article published." : "Draft saved.");
      if (!articleId && result.id) router.replace(`/admin/articles/${result.id}/edit`);
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save article.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      key={article.id || "new-article"}
      className="admin-form"
      aria-label={mode === "new" ? "New article form" : "Edit article form"}
      onSubmit={(event) => {
        event.preventDefault();
        saveArticle(event.currentTarget, "draft");
      }}
    >
      <div className="admin-form-grid">
        <section className="admin-panel admin-form-primary">
          <FieldGroup label="Title" htmlFor="title">
            <input id="title" name="title" type="text" defaultValue={article.title} placeholder="Article headline" required />
          </FieldGroup>
          <FieldGroup label="Slug" htmlFor="slug">
            <input id="slug" name="slug" type="text" defaultValue={article.slug} placeholder="article-slug" required />
          </FieldGroup>
          <FieldGroup label="Summary" htmlFor="summary">
            <textarea id="summary" name="summary" rows={4} defaultValue={article.summary} placeholder="Short dek or article summary" />
          </FieldGroup>
          <FieldGroup label="Full article body" htmlFor="body">
            <textarea id="body" name="body" rows={14} defaultValue={article.body} placeholder="Write the full article body here..." />
          </FieldGroup>
        </section>

        <aside className="admin-panel admin-form-secondary">
          <FieldGroup label="Category" htmlFor="category">
            <select id="category" name="category" defaultValue={article.category ?? "World"}>
              {adminCategories.map((category) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </FieldGroup>
          <FieldGroup label="Author" htmlFor="author">
            <input id="author" name="author" type="text" defaultValue={article.author} placeholder="Reporter name" />
          </FieldGroup>
          <FieldGroup label="Featured image upload" htmlFor="featured-image">
            <input id="featured-image" name="featuredImage" type="file" accept="image/*" />
            <input type="hidden" name="existingFeaturedImageUrl" value={article.featured_image_url || ""} />
          </FieldGroup>
          <FieldGroup label="Video upload" htmlFor="video-file">
            <input id="video-file" name="videoFile" type="file" accept="video/*" />
            <input type="hidden" name="existingVideoUrl" value={article.video_url || ""} />
          </FieldGroup>
          <FieldGroup label="Tags" htmlFor="tags">
            <input id="tags" name="tags" type="text" defaultValue={article.tags} placeholder="policy, markets, analysis" />
          </FieldGroup>
          <FieldGroup label="SEO title" htmlFor="seo-title">
            <input id="seo-title" name="seoTitle" type="text" defaultValue={article.seo_title || article.title} />
          </FieldGroup>
          <FieldGroup label="SEO description" htmlFor="seo-description">
            <textarea id="seo-description" name="seoDescription" rows={3} defaultValue={article.seo_description} placeholder="Search preview description" />
          </FieldGroup>
          <FieldGroup label="Status" htmlFor="status">
            <select id="status" name="status" defaultValue={article.status ?? "draft"}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </FieldGroup>
          <div className="admin-checkbox-list" aria-label="Article flags">
            <label><input type="checkbox" name="featured" defaultChecked={Boolean(article.featured)} /> Featured</label>
            <label><input type="checkbox" name="breaking" defaultChecked={Boolean(article.breaking)} /> Breaking</label>
          </div>
          <div className="admin-form-actions">
            <button type="submit" className="admin-button admin-button--secondary" disabled={busy}>Save Draft</button>
            <button
              type="button"
              className="admin-button"
              disabled={busy}
              onClick={(event) => {
                if (event.currentTarget.form) saveArticle(event.currentTarget.form, "published");
              }}
            >
              Publish
            </button>
          </div>
          {message && <p className="admin-form-note" role="status">{message}</p>}
        </aside>
      </div>
    </form>
  );
}
