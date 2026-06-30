import { ReactNode } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

type AdminLayoutProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function AdminLayout({ title, eyebrow, children }: AdminLayoutProps) {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <div className="admin-main">
        <AdminHeader title={title} eyebrow={eyebrow} />
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
