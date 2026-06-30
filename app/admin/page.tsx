import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import StatusBadge from "@/components/admin/StatusBadge";
import { adminArticles, adminCategories } from "@/lib/admin";

export default function AdminDashboardPage() {
  const publishedCount = adminArticles.filter((article) => article.status === "published").length;
  const draftCount = adminArticles.filter((article) => article.status === "draft").length;

  return (
    <AdminLayout title="Dashboard" eyebrow="Global Intel Times CMS">
      <section className="admin-metrics" aria-label="CMS overview">
        <article>
          <span>Total articles</span>
          <strong>{adminArticles.length}</strong>
        </article>
        <article>
          <span>Published</span>
          <strong>{publishedCount}</strong>
        </article>
        <article>
          <span>Drafts</span>
          <strong>{draftCount}</strong>
        </article>
        <article>
          <span>Categories</span>
          <strong>{adminCategories.length}</strong>
        </article>
      </section>

      <section className="admin-panel">
        <div className="admin-section-heading">
          <div>
            <p>Editorial queue</p>
            <h2>Recent articles</h2>
          </div>
          <Link href="/admin/articles/new" className="admin-button admin-button--secondary">
            New article
          </Link>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {adminArticles.map((article) => (
                <tr key={article.id}>
                  <td>
                    <Link href={`/admin/articles/${article.id}/edit`}>{article.title}</Link>
                  </td>
                  <td>{article.category}</td>
                  <td>
                    <StatusBadge status={article.status} />
                  </td>
                  <td>{article.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}
