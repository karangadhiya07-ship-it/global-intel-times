import AdminLayout from "@/components/admin/AdminLayout";
import ArticleForm from "@/components/admin/ArticleForm";

export default function NewArticlePage() {
  return (
    <AdminLayout title="New article" eyebrow="Compose">
      <ArticleForm mode="new" />
    </AdminLayout>
  );
}
