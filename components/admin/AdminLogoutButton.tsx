"use client";

import { useRouter } from "next/navigation";

const sessionCookieName = "git_admin_session";

export default function AdminLogoutButton({ compact = false }: { compact?: boolean }) {
  const router = useRouter();

  function logout() {
    document.cookie = `${sessionCookieName}=; path=/; max-age=0; SameSite=Lax`;
    router.replace("/admin/login");
  }

  return (
    <button type="button" className={compact ? "admin-logout admin-logout--compact" : "admin-logout"} onClick={logout}>
      Logout
    </button>
  );
}
