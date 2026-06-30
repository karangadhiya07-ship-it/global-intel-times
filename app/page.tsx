import Link from "next/link";
import { Article, getAllArticles, getArticlePath } from "@/lib/articles";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Disclaimer", href: "#disclaimer" },
];

function formatCategory(category: Article["category"]) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <span className="hero-image-label" aria-label={`${label} image placeholder`}>
      Image Placeholder
    </span>
  );
}

function HomeHero({ featured, latest }: { featured: Article; latest: Article[] }) {
  return (
    <section className="hero" aria-label="Featured stories">
      <div className="hero-grid">
        <article className="hero-featured">
          <Link href={getArticlePath(featured)} className="hero-featured-link group">
            <figure className="hero-image hero-image--lead">
              <ImagePlaceholder label={featured.headline} />
            </figure>
            <div className="hero-featured-body">
              <div className="hero-badges">
                {featured.breaking && <span className="hero-badge hero-badge--breaking">Breaking</span>}
                <span className="hero-badge hero-badge--category">
                  {formatCategory(featured.category)}
                </span>
              </div>
              <h1 className="hero-headline">{featured.headline}</h1>
              <p className="hero-dek">{featured.summary}</p>
              <footer className="hero-byline">
                <span className="hero-byline-author">{featured.author}</span>
                <span className="hero-byline-sep" aria-hidden="true">·</span>
                <time dateTime={featured.publishedDate}>{formatDate(featured.publishedDate)}</time>
                <span className="hero-byline-sep" aria-hidden="true">·</span>
                <span>{featured.readingTime}</span>
              </footer>
            </div>
          </Link>
        </article>

        <aside className="hero-secondary" aria-label="Latest headlines">
          <p className="hero-secondary-label">Latest Headlines</p>
          <ul className="hero-secondary-list">
            {latest.map((article) => (
              <li key={article.id}>
                <article className="hero-secondary-item group">
                  <Link href={getArticlePath(article)} className="hero-secondary-link">
                    <figure className="hero-image hero-image--thumb">
                      <ImagePlaceholder label={article.headline} />
                    </figure>
                    <div className="hero-secondary-content">
                      <span className="hero-badge hero-badge--category hero-badge--sm">
                        {formatCategory(article.category)}
                      </span>
                      <h2 className="hero-secondary-headline">{article.headline}</h2>
                      <footer className="hero-byline hero-byline--compact">
                        <span className="hero-byline-author">{article.author}</span>
                        <span className="hero-byline-sep" aria-hidden="true">·</span>
                        <span>{article.readingTime}</span>
                      </footer>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function LatestHeadlinesStrip({ articles }: { articles: Article[] }) {
  return (
    <section className="latest-strip section-rule" aria-labelledby="latest-strip-heading">
      <div className="latest-strip-heading">
        <p className="section-label">Latest</p>
        <h2 id="latest-strip-heading" className="section-heading text-2xl sm:text-3xl">
          Latest Headlines
        </h2>
      </div>
      <div className="latest-strip-grid">
        {articles.map((article) => (
          <Link href={getArticlePath(article)} className="latest-strip-card" key={article.id}>
            <span>{formatCategory(article.category)}</span>
            <h3>{article.headline}</h3>
            <p>{article.summary}</p>
            <footer>
              {article.author} · {article.readingTime}
            </footer>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="section-rule-light pt-4">
      <p className="article-kicker">{formatCategory(article.category)}</p>
      <h3 className="article-headline text-xl sm:text-2xl mt-2">
        <Link href={getArticlePath(article)}>{article.headline}</Link>
      </h3>
      <p className="article-summary mt-3 text-sm sm:text-base">{article.summary}</p>
      <p className="article-meta mt-3">
        {article.author} · {article.readingTime} · {formatDate(article.publishedDate)}
      </p>
    </article>
  );
}

function SectionBlock({ category, articles }: { category: Article["category"]; articles: Article[] }) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section id={category} className="scroll-mt-24 py-8 sm:py-10">
      <div className="section-rule mb-6">
        <h2 className="section-heading text-2xl sm:text-3xl">{formatCategory(category)}</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const articles = getAllArticles();
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const latest = articles.filter((article) => article.id !== featured.id).slice(0, 6);
  const latestStripArticles = articles.slice(0, 4);
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <>
      <main className="flex-1">
        <div className="content-container">
          <HomeHero featured={featured} latest={latest} />
          <LatestHeadlinesStrip articles={latestStripArticles} />

          <div
            className="ad-slot ad-slot-leaderboard my-6 sm:my-8"
            role="complementary"
            aria-label="Advertisement"
          >
            Advertisement
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12 py-4">
            <div>
              {categories.map((category) => (
                <SectionBlock
                  key={category}
                  category={category}
                  articles={articles.filter((article) => article.category === category)}
                />
              ))}
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-20 space-y-6">
                <div
                  className="ad-slot ad-slot-rectangle"
                  role="complementary"
                  aria-label="Advertisement"
                >
                  Advertisement
                </div>
                <div className="border border-[var(--color-rule)] p-5">
                  <p className="section-label mb-3">Editor&apos;s Note</p>
                  <p className="font-serif text-lg font-bold leading-snug">
                    Built for original publishing
                  </p>
                  <p className="article-summary mt-3 text-sm">
                    Global Intel Times is an independent platform for original
                    reporting and analysis. No syndication, no scraping — just
                    journalism written for readers who value clarity and context.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="site-footer mt-8">
        <div className="content-container py-10 sm:py-12">
          <div className="text-center mb-8">
            <p className="font-serif text-2xl font-bold">Global Intel Times</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] max-w-lg mx-auto">
              Original journalism on world affairs, business, technology,
              finance, and opinion.
            </p>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10"
            aria-label="Footer"
          >
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm text-[var(--color-ink-muted)] border-t border-[var(--color-rule)] pt-8 mb-8">
            <div id="about">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">About</h3>
              <p>
                Global Intel Times is an independent news platform publishing
                original reporting and analysis on global affairs.
              </p>
            </div>
            <div id="contact">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Contact</h3>
              <p>
                For editorial inquiries, reach our newsroom at
                newsroom@globalinteltimes.com.
              </p>
            </div>
            <div id="privacy">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Privacy</h3>
              <p>
                We respect reader privacy and collect only the data necessary to
                operate and improve this site.
              </p>
            </div>
            <div id="terms">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Terms</h3>
              <p>
                By using this site, you agree to our terms governing access,
                content use, and user conduct.
              </p>
            </div>
            <div id="disclaimer" className="sm:col-span-2 lg:col-span-2">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Disclaimer</h3>
              <p>
                Content is provided for informational purposes only and does not
                constitute financial, legal, or professional advice. Placeholder
                articles on this demo site are for layout illustration.
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--color-rule)] pt-6 text-center text-xs text-[var(--color-ink-faint)]">
            <p>© 2026 Global Intel Times. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
