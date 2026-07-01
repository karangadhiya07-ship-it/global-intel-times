"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import StatusBadge from "@/components/admin/StatusBadge";

type CmsArticle = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  status: "draft" | "published";
  featured: number | boolean;
  breaking: number | boolean;
  updated_at?: string;
};

export default function AdminArticlesManager() {
  const [articles, setArticles] = useState<CmsArticle[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [message, setMessage] = useState("Loading articles…");

  async function loadArticles() {
    const response = await fetch("/api/articles", { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load articles");
    const result = await response.json();
    setArticles(result.articles || []);
    setMessage("");
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadArticles().catch((error) => setMessage(error instanceof Error ? error.message : "Unable to load articles"));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        const matchesSearch = `${article.title} ${article.slug} ${article.author}`.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || article.category === category;
        const matchesStatus = status === "all" || article.status === status;
        return matchesSearch && matchesCategory && matchesStatus;
      }),
    [articles, category, search, status]
  );

  async function deleteArticle(id: string) {
    const response = await fetch(`/api/articles/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setMessage("Unable to delete article.");
      return;
    }
    setArticles((current) => current.filter((article) => article.id !== id));
    setMessage("Article deleted.");
  }

  return (
    <>
      <form className="admin-toolbar" aria-label="Article filters">
        <label>
          <span>Search</span>
          <input type="search" name="search" placeholder="Search articles" value={search} onChange={(event) => setSearch(event.target.value)} />
        </label>
        <label>
          <span>Category</span>
          <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All categories</option>
            <option value="World">World</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
        <label>
          <span>Status</span>
          <select name="status" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">All statuses</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </form>

      {message && <p className="admin-form-note" role="status">{message}</p>}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Author</th>
              <th>Status</th>
              <th>Flags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.slug}</td>
                <td>{article.author}</td>
                <td><StatusBadge status={article.status} /></td>
                <td>{[article.featured && "Featured", article.breaking && "Breaking"].filter(Boolean).join(", ") || "None"}</td>
                <td>
                  <div className="admin-row-actions">
                    <Link href={`/admin/articles/${article.id}/edit`}>Edit</Link>
                    <button type="button" onClick={() => deleteArticle(article.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
