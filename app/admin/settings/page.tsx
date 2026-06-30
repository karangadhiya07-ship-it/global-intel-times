import AdminLayout from "@/components/admin/AdminLayout";
import FieldGroup from "@/components/admin/FieldGroup";

export default function AdminSettingsPage() {
  return (
    <AdminLayout title="Settings" eyebrow="Publication controls">
      <section className="admin-panel admin-settings-panel">
        <form className="admin-form">
          <FieldGroup label="Publication name" htmlFor="publication-name">
            <input id="publication-name" name="publicationName" type="text" defaultValue="Global Intel Times" />
          </FieldGroup>
          <FieldGroup label="Default SEO description" htmlFor="default-description">
            <textarea
              id="default-description"
              name="defaultDescription"
              rows={4}
              defaultValue="Original reporting and analysis on world affairs, business, technology, finance, and opinion."
            />
          </FieldGroup>
          <FieldGroup label="Editorial contact" htmlFor="editorial-contact">
            <input id="editorial-contact" name="editorialContact" type="email" defaultValue="newsroom@globalinteltimes.com" />
          </FieldGroup>
          <FieldGroup label="Static export mode" htmlFor="export-mode" hint="Kept enabled for Cloudflare Pages static export compatibility.">
            <select id="export-mode" name="exportMode" defaultValue="enabled">
              <option value="enabled">Enabled</option>
            </select>
          </FieldGroup>
          <button className="admin-button" type="button">Save settings preview</button>
        </form>
      </section>
    </AdminLayout>
  );
}
