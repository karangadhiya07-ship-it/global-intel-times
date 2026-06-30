"use client";

import { useRouter } from "next/navigation";

const sessionStorageKey = "git_admin_auth";

export default function AdminLogoutButton({ compact = false }: { compact?: boolean }) {
  const router = useRouter();

  function logout() {
    window.localStorage.removeItem(sessionStorageKey);
    router.replace("/admin/login");
  }

  return (
    <button type="button" className={compact ? "admin-logout admin-logout--compact" : "admin-logout"} onClick={logout}>
      Logout
    </button>
  );
}
