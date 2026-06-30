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
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Slug</th>
                <th>Author</th>
                <th>Status</th>
                <th>Flags</th>
                <th>Edit</th>
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
                    <Link href={`/admin/articles/${article.id}/edit`}>Edit</Link>
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
