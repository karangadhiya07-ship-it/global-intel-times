import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminArticlesManager from "@/components/admin/AdminArticlesManager";

export default function AdminArticlesPage() {
  return (
    <AdminLayout title="Articles" eyebrow="Content library">
      <section className="admin-panel">
        <div className="admin-section-heading">
          <div>
            <p>D1 content data</p>
            <h2>All articles</h2>
          </div>
          <Link href="/admin/articles/new" className="admin-button admin-button--secondary">
            New article
          </Link>
        </div>
        <AdminArticlesManager />
      </section>
    </AdminLayout>
  );
}
