import AdminLayout from "@/components/admin/AdminLayout";
import FieldGroup from "@/components/admin/FieldGroup";

export default function AdminSettingsPage() {
  return (
    <AdminLayout title="Settings" eyebrow="Publication controls">
      <section className="admin-panel admin-settings-panel">
        <form className="admin-form">
          <FieldGroup label="Site name" htmlFor="site-name">
            <input id="site-name" name="siteName" type="text" defaultValue="Global Intel Times" />
          </FieldGroup>
          <FieldGroup label="Logo text" htmlFor="logo-text">
            <input id="logo-text" name="logoText" type="text" defaultValue="Global Intel Times" />
          </FieldGroup>
          <FieldGroup label="Site description" htmlFor="default-description">
            <textarea
              id="default-description"
              name="defaultDescription"
              rows={4}
              defaultValue="Original reporting and analysis on world affairs, business, technology, finance, and opinion."
            />
          </FieldGroup>
          <FieldGroup label="Contact email" htmlFor="editorial-contact">
            <input id="editorial-contact" name="editorialContact" type="email" defaultValue="newsroom@globalinteltimes.com" />
          </FieldGroup>
          <FieldGroup label="SEO defaults" htmlFor="seo-defaults">
            <textarea id="seo-defaults" name="seoDefaults" rows={5} defaultValue="Global Intel Times | Original Journalism & Global Analysis" />
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
