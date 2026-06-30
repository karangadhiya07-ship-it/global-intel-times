import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import StatusBadge from "@/components/admin/StatusBadge";
import { adminArticles } from "@/lib/admin";

export default function AdminArticlesPage() {
  return (
    <AdminLayout title="Articles" eyebrow="Content library">
      <section className="admin-panel">
        <div className="admin-section-heading">
          <div>
            <p>Static preview data</p>
            <h2>All articles</h2>
          </div>
          <Link href="/admin/articles/new" className="admin-button admin-button--secondary">
            New article
          </Link>
        </div>

        <form className="admin-toolbar" aria-label="Article filters">
          <label>
            <span>Search</span>
            <input type="search" name="search" placeholder="Search articles" />
          </label>
          <label>
            <span>Category</span>
            <select name="category" defaultValue="all">
              <option value="all">All categories</option>
              <option value="World">World</option>
              <option value="Business">Business</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
            </select>
          </label>
          <label>
            <span>Status</span>
            <select name="status" defaultValue="all">
              <option value="all">All statuses</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
        </form>
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
              {adminArticles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.slug}</td>
                  <td>{article.author}</td>
                  <td>
                    <StatusBadge status={article.status} />
                  </td>
                  <td>{[article.featured && "Featured", article.breaking && "Breaking"].filter(Boolean).join(", ") || "None"}</td>
                  <td>
                    <div className="admin-row-actions">
                      <Link href={`/admin/articles/${article.id}/edit`}>Edit</Link>
                      <button type="button">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}
