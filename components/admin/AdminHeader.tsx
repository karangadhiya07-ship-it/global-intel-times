import Link from "next/link";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export default function AdminHeader({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <header className="admin-header">
      <div>
        {eyebrow && <p>{eyebrow}</p>}
        <h1>{title}</h1>
      </div>
      <div className="admin-header-actions">
        <Link href="/" className="admin-header-link">
          View site
        </Link>
        <AdminLogoutButton />
      </div>
    </header>
  );
}
