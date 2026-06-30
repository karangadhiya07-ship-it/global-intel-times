"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const sessionStorageKey = "git_admin_session";

function hasAdminSession() {
  return window.localStorage.getItem(sessionStorageKey) === "demo-authenticated";
}

export default function AdminAuthGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (pathname === "/admin/login") {
        setAuthorized(true);
        setChecked(true);
        return;
      }

      if (hasAdminSession()) {
        setAuthorized(true);
        setChecked(true);
        return;
      }

      router.replace("/admin/login");
      setChecked(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname, router]);

  if (!checked) {
    return <div className="admin-auth-loading">Checking admin session…</div>;
  }

  if (!authorized) {
    return <div className="admin-auth-loading">Redirecting to admin login…</div>;
  }

  return <>{children}</>;
}
