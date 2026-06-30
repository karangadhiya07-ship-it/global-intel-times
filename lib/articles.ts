export type ArticleCategory = "world" | "business" | "technology" | "finance" | "opinion";

export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
};

export type ArticleVideo = {
  type: "youtube" | "self-hosted";
  src: string;
  title: string;
  poster?: string;
};

export type ArticleContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; image: ArticleImage }
  | { type: "video"; video: ArticleVideo };

export type Article = {
  id: string;
  slug: string;
  category: ArticleCategory;
  headline: string;
  summary: string;
  content: ArticleContentBlock[];
  author: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  heroImage: ArticleImage;
  galleryImages: ArticleImage[];
  video?: ArticleVideo;
  featured: boolean;
  breaking: boolean;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

const placeholderImage = (label: string): ArticleImage => ({
  src: `placeholder:${label}`,
  alt: `${label} image placeholder`,
  caption: `${label} visual placeholder for production imagery.`,
});

export const articles: Article[] = [
  {
    id: "world-global-powers-recalibrate-strategy",
    slug: "global-powers-recalibrate-strategy",
    category: "world",
    headline: "Global Powers Recalibrate Strategy as Alliances Shift Across Three Continents",
    summary:
      "Diplomats and policy analysts describe a period of unusual realignment, with new trade corridors, security partnerships, and energy agreements reshaping assumptions about influence.",
    author: "Elena Vasquez",
    publishedDate: "2026-06-30",
    updatedDate: "2026-06-30",
    readingTime: "12 min read",
    heroImage: placeholderImage("Global diplomacy"),
    galleryImages: [placeholderImage("Summit floor"), placeholderImage("Maritime corridor"), placeholderImage("Trade delegation")],
    video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Global strategy briefing",
    },
    featured: true,
    breaking: true,
    seoTitle: "Global Powers Recalibrate Strategy as Alliances Shift",
    seoDescription:
      "Analysis of the alliances, trade corridors, and security partnerships reshaping geopolitical influence across three continents.",
    keywords: ["global affairs", "diplomacy", "alliances", "security", "trade"],
    content: [
      {
        type: "paragraph",
        text: "A broad realignment is taking shape across diplomatic capitals as governments reassess long-standing assumptions about trade, security, energy, and regional influence.",
      },
      { type: "heading", text: "A wider map of influence" },
      {
        type: "paragraph",
        text: "Officials involved in the talks describe a practical turn toward issue-based coalitions. The shift is less about formal blocs and more about durable coordination on maritime rules, critical minerals, defense production, and energy resilience.",
      },
      {
        type: "quote",
        text: "The defining question is no longer who belongs to which camp. It is who can reliably deliver capacity when systems come under stress.",
        attribution: "Senior diplomatic adviser",
      },
      {
        type: "list",
        items: [
          "Trade corridors are being evaluated for redundancy and political risk.",
          "Security partnerships are expanding around maritime and cyber resilience.",
          "Energy agreements increasingly include storage, grid, and financing provisions.",
        ],
      },
      { type: "image", image: placeholderImage("Regional negotiations") },
      { type: "heading", text: "The economic dimension" },
      {
        type: "paragraph",
        text: "Business leaders say the new diplomacy is already influencing capital allocation. Infrastructure, shipping, and advanced manufacturing projects are being assessed through a geopolitical lens once reserved for defense planning.",
      },
      {
        type: "video",
        video: {
          type: "self-hosted",
          src: "/videos/global-briefing-placeholder.mp4",
          title: "Self-hosted briefing placeholder",
          poster: "placeholder:Briefing poster",
        },
      },
    ],
  },
  {
    id: "business-manufacturers-invest",
    slug: "manufacturers-invest",
    category: "business",
    headline: "Manufacturers Invest in Regional Supply Networks to Reduce Volatility",
    summary:
      "Companies are building dual sourcing models and near-shore production capacity after years of disruption.",
    author: "James Okonkwo",
    publishedDate: "2026-06-30",
    updatedDate: "2026-06-30",
    readingTime: "8 min read",
    heroImage: placeholderImage("Regional manufacturing"),
    galleryImages: [placeholderImage("Factory line"), placeholderImage("Logistics hub")],
    featured: false,
    breaking: false,
    seoTitle: "Manufacturers Invest in Regional Supply Networks",
    seoDescription:
      "How manufacturers are redesigning supply chains with regional production, dual sourcing, and risk controls.",
    keywords: ["manufacturing", "supply chains", "business", "logistics"],
    content: [
      { type: "paragraph", text: "Manufacturers are moving from emergency fixes to permanent redesigns of their supply networks." },
      { type: "heading", text: "Regional capacity becomes strategic" },
      { type: "paragraph", text: "Executives say new investments are intended to preserve flexibility without abandoning global scale." },
      { type: "quote", text: "Resilience has become a board-level investment category.", attribution: "Operations executive" },
      { type: "list", items: ["Dual sourcing", "Near-shore assembly", "Inventory analytics"] },
    ],
  },
  {
    id: "technology-enterprise-ai",
    slug: "enterprise-ai",
    category: "technology",
    headline: "Enterprise Adoption of AI Assistants Accelerates in Regulated Industries",
    summary:
      "Legal, health, and financial firms report measured rollouts focused on compliance and auditability.",
    author: "Priya Mehta",
    publishedDate: "2026-06-29",
    updatedDate: "2026-06-30",
    readingTime: "6 min read",
    heroImage: placeholderImage("Enterprise AI"),
    galleryImages: [placeholderImage("Audit dashboard")],
    video: {
      type: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Enterprise AI explainer",
    },
    featured: false,
    breaking: false,
    seoTitle: "Enterprise AI Adoption Accelerates in Regulated Industries",
    seoDescription:
      "A look at how regulated industries are deploying AI assistants with compliance, auditability, and governance controls.",
    keywords: ["AI", "enterprise", "technology", "compliance"],
    content: [
      { type: "paragraph", text: "Regulated companies are adopting AI assistants through phased pilots that emphasize governance and audit trails." },
      { type: "heading", text: "Guardrails before scale" },
      { type: "paragraph", text: "Teams are pairing productivity goals with strict data handling rules, internal evaluations, and human review." },
      { type: "video", video: { type: "youtube", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Enterprise AI explainer" } },
    ],
  },
];

export function getAllArticles() {
  return articles;
}

export function getArticleByRoute(category: string, slug: string) {
  return articles.find((article) => article.category === category && article.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 3) {
  return articles
    .filter((candidate) => candidate.id !== article.id && candidate.category === article.category)
    .concat(articles.filter((candidate) => candidate.id !== article.id && candidate.category !== article.category))
    .slice(0, limit);
}

export function getAdjacentArticles(article: Article) {
  const index = articles.findIndex((candidate) => candidate.id === article.id);

  return {
    previousArticle: index > 0 ? articles[index - 1] : undefined,
    nextArticle: index >= 0 && index < articles.length - 1 ? articles[index + 1] : undefined,
  };
}

export function getArticlePath(article: Article) {
  return `/${article.category}/${article.slug}`;
}
