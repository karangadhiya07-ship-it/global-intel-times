import AdminLayout from "@/components/admin/AdminLayout";
import FieldGroup from "@/components/admin/FieldGroup";
import { adminCategories } from "@/lib/admin";

export default function AdminCategoriesPage() {
  return (
    <AdminLayout title="Categories" eyebrow="Taxonomy">
      <div className="admin-two-column">
        <section className="admin-panel">
          <div className="admin-section-heading">
            <div>
              <p>Current sections</p>
              <h2>Categories</h2>
            </div>
          </div>
          <div className="admin-category-list">
            {adminCategories.map((category) => (
              <article key={category.id}>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
                <span>{category.articleCount} articles</span>
              </article>
            ))}
          </div>
        </section>

        <section className="admin-panel">
          <div className="admin-section-heading">
            <div>
              <p>UI only</p>
              <h2>Add category</h2>
            </div>
          </div>
          <form className="admin-form">
            <FieldGroup label="Name" htmlFor="category-name">
              <input id="category-name" name="categoryName" type="text" placeholder="Investigations" />
            </FieldGroup>
            <FieldGroup label="Slug" htmlFor="category-slug">
              <input id="category-slug" name="categorySlug" type="text" placeholder="investigations" />
            </FieldGroup>
            <FieldGroup label="Description" htmlFor="category-description">
              <textarea id="category-description" name="categoryDescription" rows={4} />
            </FieldGroup>
            <button className="admin-button" type="button">Create category preview</button>
          </form>
        </section>
      </div>
    </AdminLayout>
  );
}
