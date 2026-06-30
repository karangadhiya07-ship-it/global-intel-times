import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { getAllArticles, getArticleByRoute, getArticlePath } from "@/lib/articles";

type ArticleRouteParams = {
  category: string;
  slug: string;
};

type ArticleRouteProps = {
  params: Promise<ArticleRouteParams>;
};

const siteUrl = "https://globalinteltimes.com";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleByRoute(category, slug);

  if (!article) {
    return {
      title: "Article Not Found | Global Intel Times",
    };
  }

  const path = getArticlePath(article);
  const url = new URL(path, siteUrl).toString();
  const imageUrl = article.heroImage.src.startsWith("placeholder:")
    ? new URL("/opengraph-image", siteUrl).toString()
    : new URL(article.heroImage.src, siteUrl).toString();

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.seoDescription,
      url,
      siteName: "Global Intel Times",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
      section: article.category,
      tags: article.keywords,
      images: [
        {
          url: imageUrl,
          alt: article.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function ArticleRoute({ params }: ArticleRouteProps) {
  const { category, slug } = await params;
  const article = getArticleByRoute(category, slug);

  if (!article) {
    notFound();
  }

  const articleUrl = new URL(getArticlePath(article), siteUrl).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.headline,
    description: article.summary,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Global Intel Times",
    },
    mainEntityOfPage: articleUrl,
    keywords: article.keywords,
    articleSection: article.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ArticlePage article={article} />
    </>
  );
}
