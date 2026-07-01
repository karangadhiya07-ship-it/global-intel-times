import { notFound } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import ArticleForm from "@/components/admin/ArticleForm";
import { adminArticles, getAdminArticle } from "@/lib/admin";

type EditArticleProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return adminArticles.map((article) => ({ id: article.id }));
}

export default async function EditArticlePage({ params }: EditArticleProps) {
  const { id } = await params;
  const article = getAdminArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <AdminLayout title="Edit article" eyebrow={article.title}>
      <ArticleForm mode="edit" articleId={article.id} />
    </AdminLayout>
  );
}
