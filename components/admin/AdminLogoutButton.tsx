"use client";

import { useRouter } from "next/navigation";

const sessionCookieName = "git_admin_session";

function secureCookieSuffix() {
  return window.location.protocol === "https:" ? "; Secure" : "";
}

export default function AdminLogoutButton({ compact = false }: { compact?: boolean }) {
  const router = useRouter();

  function logout() {
    document.cookie = `${sessionCookieName}=; path=/; max-age=0; SameSite=Strict${secureCookieSuffix()}`;
    router.replace("/admin/login");
  }

  return (
    <button type="button" className={compact ? "admin-logout admin-logout--compact" : "admin-logout"} onClick={logout}>
      Logout
    </button>
  );
}
