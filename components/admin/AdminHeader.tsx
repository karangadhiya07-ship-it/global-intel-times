import Link from "next/link";

export default function AdminHeader({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <header className="admin-header">
      <div>
        {eyebrow && <p>{eyebrow}</p>}
        <h1>{title}</h1>
      </div>
      <Link href="/" className="admin-header-link">
        View site
      </Link>
    </header>
  );
}
