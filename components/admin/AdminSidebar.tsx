import Link from "next/link";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

const adminLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Articles", href: "/admin/articles" },
  { label: "New Article", href: "/admin/articles/new" },
  { label: "Categories", href: "/admin/categories" },
  { label: "Media", href: "/admin/media" },
  { label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar" aria-label="Admin navigation">
      <Link href="/admin" className="admin-sidebar-brand">
        <span>GIT</span>
        <strong>Editorial CMS</strong>
      </Link>
      <nav>
        {adminLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <AdminLogoutButton compact />
    </aside>
  );
}
