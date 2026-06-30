import { AdminArticlePreview, adminCategories } from "@/lib/admin";
import FieldGroup from "@/components/admin/FieldGroup";

type ArticleFormProps = {
  mode: "new" | "edit";
  article?: AdminArticlePreview;
};

export default function ArticleForm({ mode, article }: ArticleFormProps) {
  return (
    <form className="admin-form" aria-label={mode === "new" ? "New article form" : "Edit article form"}>
      <div className="admin-form-grid">
        <section className="admin-panel admin-form-primary">
          <FieldGroup label="Title" htmlFor="title">
            <input id="title" name="title" type="text" defaultValue={article?.title} placeholder="Article headline" />
          </FieldGroup>
          <FieldGroup label="Slug" htmlFor="slug" hint="Static preview only. Saving is not connected yet.">
            <input id="slug" name="slug" type="text" defaultValue={article?.slug} placeholder="article-slug" />
          </FieldGroup>
          <FieldGroup label="Summary" htmlFor="summary">
            <textarea id="summary" name="summary" rows={4} placeholder="Short dek or article summary" />
          </FieldGroup>
          <FieldGroup label="Full article body" htmlFor="body" hint="Supports markdown-like drafting conventions for headings, quotes, lists, images, and videos.">
            <textarea id="body" name="body" rows={14} placeholder="Write the full article body here..." />
          </FieldGroup>
        </section>

        <aside className="admin-panel admin-form-secondary">
          <FieldGroup label="Category" htmlFor="category">
            <select id="category" name="category" defaultValue={article?.category ?? "World"}>
              {adminCategories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </FieldGroup>
          <FieldGroup label="Author" htmlFor="author">
            <input id="author" name="author" type="text" defaultValue={article?.author} placeholder="Reporter name" />
          </FieldGroup>
          <FieldGroup label="Featured image URL" htmlFor="featured-image">
            <input id="featured-image" name="featuredImage" type="url" placeholder="https://example.com/image.jpg" />
          </FieldGroup>
          <FieldGroup label="Video URL" htmlFor="video-url">
            <input id="video-url" name="videoUrl" type="url" placeholder="YouTube or self-hosted video URL" />
          </FieldGroup>
          <FieldGroup label="Tags" htmlFor="tags">
            <input id="tags" name="tags" type="text" placeholder="policy, markets, analysis" />
          </FieldGroup>
          <FieldGroup label="SEO title" htmlFor="seo-title">
            <input id="seo-title" name="seoTitle" type="text" defaultValue={article?.title} />
          </FieldGroup>
          <FieldGroup label="SEO description" htmlFor="seo-description">
            <textarea id="seo-description" name="seoDescription" rows={3} placeholder="Search preview description" />
          </FieldGroup>
          <FieldGroup label="Status" htmlFor="status">
            <select id="status" name="status" defaultValue={article?.status ?? "draft"}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </FieldGroup>
          <div className="admin-checkbox-list" aria-label="Article flags">
            <label>
              <input type="checkbox" name="featured" defaultChecked={article?.featured} />
              Featured
            </label>
            <label>
              <input type="checkbox" name="breaking" defaultChecked={article?.breaking} />
              Breaking
            </label>
          </div>
          <button type="button" className="admin-button">
            {mode === "new" ? "Create draft preview" : "Update draft preview"}
          </button>
          <p className="admin-form-note">UI only. Data persistence will be added in a later CMS phase.</p>
        </aside>
      </div>
    </form>
  );
}
