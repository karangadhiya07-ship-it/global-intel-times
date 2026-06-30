import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  const expectedUsername = process.env.ADMIN_USERNAME ?? "";
  const expectedPassword = process.env.ADMIN_PASSWORD ?? "";

  return (
    <main className="admin-login-page">
      <section className="admin-login-card" aria-labelledby="admin-login-heading">
        <p>Global Intel Times CMS</p>
        <h1 id="admin-login-heading">Admin Login</h1>
        <span>Use the configured ADMIN_USERNAME and ADMIN_PASSWORD credentials.</span>
        <Suspense fallback={<div className="admin-auth-loading">Loading login…</div>}>
          <AdminLoginForm expectedUsername={expectedUsername} expectedPassword={expectedPassword} />
        </Suspense>
      </section>
    </main>
  );
}
