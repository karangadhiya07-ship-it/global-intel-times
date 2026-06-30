import AdminLayout from "@/components/admin/AdminLayout";
import { adminMediaFiles } from "@/lib/admin";

export default function AdminMediaPage() {
  return (
    <AdminLayout title="Media" eyebrow="Library">
      <div className="admin-two-column">
        <section className="admin-panel">
          <div className="admin-section-heading">
            <div>
              <p>Image and video assets</p>
              <h2>Media library</h2>
            </div>
          </div>
          <div className="admin-media-grid">
            {adminMediaFiles.map((file) => (
              <article key={file.id} className="admin-media-card">
                <div className="admin-media-thumb" aria-label={`${file.type} placeholder`}>
                  {file.type}
                </div>
                <div>
                  <h3>{file.title}</h3>
                  <p>{file.url}</p>
                  <span>{file.uploadedAt} · Used in {file.usedIn}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="admin-panel">
          <div className="admin-section-heading">
            <div>
              <p>UI only</p>
              <h2>Upload media</h2>
            </div>
          </div>
          <div className="admin-upload-box" role="button" tabIndex={0} aria-label="Upload media placeholder">
            <strong>Drop files here</strong>
            <span>Images and videos will be connected when storage is added.</span>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
