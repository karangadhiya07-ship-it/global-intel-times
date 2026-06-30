export type AdminArticleStatus = "draft" | "published";

export type AdminArticlePreview = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  status: AdminArticleStatus;
  updatedAt: string;
  featured: boolean;
  breaking: boolean;
};

export type AdminCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  articleCount: number;
};

export const adminArticles: AdminArticlePreview[] = [
  {
    id: "article-001",
    title: "Global Powers Recalibrate Strategy as Alliances Shift",
    slug: "global-powers-recalibrate-strategy",
    category: "World",
    author: "Elena Vasquez",
    status: "published",
    updatedAt: "2026-06-30",
    featured: true,
    breaking: true,
  },
  {
    id: "article-002",
    title: "Manufacturers Invest in Regional Supply Networks",
    slug: "manufacturers-invest",
    category: "Business",
    author: "James Okonkwo",
    status: "draft",
    updatedAt: "2026-06-29",
    featured: false,
    breaking: false,
  },
  {
    id: "article-003",
    title: "Enterprise AI Assistants Accelerate in Regulated Industries",
    slug: "enterprise-ai",
    category: "Technology",
    author: "Priya Mehta",
    status: "published",
    updatedAt: "2026-06-29",
    featured: false,
    breaking: false,
  },
];

export const adminCategories: AdminCategory[] = [
  {
    id: "cat-world",
    name: "World",
    slug: "world",
    description: "Diplomacy, security, global governance, and international affairs.",
    articleCount: 12,
  },
  {
    id: "cat-business",
    name: "Business",
    slug: "business",
    description: "Corporate strategy, trade, labor, industry, and markets.",
    articleCount: 8,
  },
  {
    id: "cat-technology",
    name: "Technology",
    slug: "technology",
    description: "Enterprise systems, AI, cybersecurity, platforms, and infrastructure.",
    articleCount: 6,
  },
  {
    id: "cat-finance",
    name: "Finance",
    slug: "finance",
    description: "Banking, policy, rates, capital markets, and investment trends.",
    articleCount: 5,
  },
];

export function getAdminArticle(id: string) {
  return adminArticles.find((article) => article.id === id);
}
