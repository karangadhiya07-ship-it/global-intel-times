import { AdminArticleStatus } from "@/lib/admin";

export default function StatusBadge({ status }: { status: AdminArticleStatus }) {
  return <span className={`admin-status admin-status--${status}`}>{status}</span>;
}
