import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

// TODO: Replace this demo auth with real server-side authentication before production.
const temporaryAdminCredentials = {
  username: "admin",
  password: "admin123",
};

export default function AdminLoginPage() {
  return (
    <main className="admin-login-page">
      <section className="admin-login-card" aria-labelledby="admin-login-heading">
        <p>Global Intel Times CMS</p>
        <h1 id="admin-login-heading">Admin Login</h1>
        <span>Use the temporary admin credentials until production authentication is configured.</span>
        <Suspense fallback={<div className="admin-auth-loading">Loading login…</div>}>
          <AdminLoginForm
            expectedUsername={temporaryAdminCredentials.username}
            expectedPassword={temporaryAdminCredentials.password}
          />
        </Suspense>
      </section>
    </main>
  );
}
