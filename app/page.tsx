type Article = {
  id: string;
  category: string;
  headline: string;
  summary: string;
  author: string;
  time: string;
  publishedDate?: string;
  breaking?: boolean;
};

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Disclaimer", href: "#disclaimer" },
];

const leadStory: Article = {
  id: "lead-1",
  category: "World",
  headline:
    "Global Powers Recalibrate Strategy as Alliances Shift Across Three Continents",
  summary:
    "Diplomats and policy analysts describe a period of unusual realignment, with new trade corridors, security partnerships, and energy agreements reshaping long-standing assumptions about influence in Europe, Asia, and the Americas.",
  author: "Elena Vasquez",
  time: "12 min read",
  publishedDate: "June 30, 2026",
  breaking: true,
};

const heroSecondary: Article[] = [
  {
    id: "latest-headline-1",
    category: "Business",
    headline:
      "Manufacturers Invest in Regional Supply Networks to Reduce Volatility",
    summary:
      "Companies are building dual sourcing models and near-shore production capacity after years of disruption.",
    author: "James Okonkwo",
    time: "24 min ago",
    publishedDate: "June 30, 2026",
  },
  {
    id: "latest-headline-2",
    category: "Technology",
    headline:
      "Enterprise AI Assistants Move Deeper Into Regulated Industries",
    summary:
      "Legal, health, and financial firms report measured rollouts focused on compliance and auditability.",
    author: "Priya Mehta",
    time: "41 min ago",
    publishedDate: "June 30, 2026",
  },
  {
    id: "latest-headline-3",
    category: "Finance",
    headline:
      "Central Banks Signal Caution as Inflation Data Sends Mixed Signals",
    summary:
      "Markets are pricing in a slower path of rate adjustments amid uneven price pressures.",
    author: "Robert Chen",
    time: "1 hr ago",
    publishedDate: "June 30, 2026",
  },
  {
    id: "latest-headline-4",
    category: "World",
    headline: "Summit Delegates Debate Maritime Security Cooperation Framework",
    summary:
      "Proposals include shared patrol standards and coordinated response protocols for commercial shipping lanes.",
    author: "Maria Santos",
    time: "2 hrs ago",
    publishedDate: "June 30, 2026",
  },
  {
    id: "latest-headline-5",
    category: "Markets",
    headline: "Bond Investors Watch Fiscal Plans as Spending Priorities Shift",
    summary:
      "Investors are assessing how infrastructure and defense outlays may affect borrowing costs over the next year.",
    author: "Thomas Wright",
    time: "3 hrs ago",
    publishedDate: "June 30, 2026",
  },
  {
    id: "latest-headline-6",
    category: "Opinion",
    headline: "Local Journalism Remains Essential to Global Understanding",
    summary:
      "National narratives often miss granular reporting that explains how policy actually reaches communities.",
    author: "Nina Kowalski",
    time: "4 hrs ago",
    publishedDate: "June 30, 2026",
  },
];

const topStories: Article[] = [
  {
    id: "top-1",
    category: "Business",
    headline:
      "Manufacturers Invest in Regional Supply Networks to Reduce Volatility",
    summary:
      "Companies are building dual sourcing models and near-shore production capacity after years of disruption.",
    author: "James Okonkwo",
    time: "8 min read",
  },
  {
    id: "top-2",
    category: "Technology",
    headline:
      "Enterprise Adoption of AI Assistants Accelerates in Regulated Industries",
    summary:
      "Legal, health, and financial firms report measured rollouts focused on compliance and auditability.",
    author: "Priya Mehta",
    time: "6 min read",
  },
  {
    id: "top-3",
    category: "Finance",
    headline:
      "Central Banks Signal Caution as Inflation Data Sends Mixed Signals",
    summary:
      "Markets are pricing in a slower path of rate adjustments amid uneven price pressures.",
    author: "Robert Chen",
    time: "7 min read",
  },
  {
    id: "top-4",
    category: "Opinion",
    headline:
      "The Case for Rebuilding Public Trust in Economic Forecasting",
    summary:
      "Institutions must explain uncertainty more clearly if they expect citizens to follow policy guidance.",
    author: "Editorial Board",
    time: "5 min read",
  },
];

const latestStories: Article[] = [
  {
    id: "latest-1",
    category: "World",
    headline: "Summit Delegates Debate Framework for Maritime Security Cooperation",
    summary:
      "Proposals include shared patrol standards and coordinated response protocols for commercial shipping lanes.",
    author: "Maria Santos",
    time: "4 min read",
  },
  {
    id: "latest-2",
    category: "Business",
    headline: "Retailers Report Strong Start to Summer as Consumer Confidence Stabilizes",
    summary:
      "Spending patterns suggest households are prioritizing essentials while selectively upgrading discretionary purchases.",
    author: "David Park",
    time: "3 min read",
  },
  {
    id: "latest-3",
    category: "Technology",
    headline: "Chip Designers Focus on Efficiency as Data Center Demand Surges",
    summary:
      "New architectures emphasize performance per watt amid rising electricity costs and sustainability targets.",
    author: "Amira Hassan",
    time: "5 min read",
  },
  {
    id: "latest-4",
    category: "Finance",
    headline: "Bond Markets Watch Fiscal Plans as Governments Outline Spending Priorities",
    summary:
      "Investors are assessing how infrastructure and defense outlays may affect borrowing costs over the next year.",
    author: "Thomas Wright",
    time: "4 min read",
  },
  {
    id: "latest-5",
    category: "Opinion",
    headline: "Why Local Journalism Remains Essential to Global Understanding",
    summary:
      "National narratives often miss the granular reporting that explains how policy actually reaches communities.",
    author: "Nina Kowalski",
    time: "6 min read",
  },
];

const sectionArticles: Record<string, Article[]> = {
  World: [
    {
      id: "world-1",
      category: "World",
      headline: "Border Communities Adapt to New Cross-Border Trade Procedures",
      summary:
        "Local officials describe a learning curve as updated documentation requirements take effect.",
      author: "Carlos Mendez",
      time: "5 min read",
    },
    {
      id: "world-2",
      category: "World",
      headline: "Humanitarian Groups Expand Logistics Hubs in Coastal Regions",
      summary:
        "Pre-positioned supplies aim to shorten response times during seasonal weather events.",
      author: "Fatima Al-Rashid",
      time: "4 min read",
    },
  ],
  Business: [
    {
      id: "business-1",
      category: "Business",
      headline: "Small Exporters Turn to Digital Platforms to Reach New Markets",
      summary:
        "Entrepreneurs report growing access to buyers in regions previously dominated by larger firms.",
      author: "Lisa Nguyen",
      time: "5 min read",
    },
    {
      id: "business-2",
      category: "Business",
      headline: "Workplace Flexibility Policies Evolve as Companies Refine Hybrid Models",
      summary:
        "Executives balance employee preferences with collaboration needs and real estate costs.",
      author: "Michael Torres",
      time: "4 min read",
    },
  ],
  Technology: [
    {
      id: "tech-1",
      category: "Technology",
      headline: "Open Standards Gain Support in Interoperable Health Data Projects",
      summary:
        "Developers argue shared formats will reduce fragmentation across hospital systems.",
      author: "Daniel Kim",
      time: "6 min read",
    },
    {
      id: "tech-2",
      category: "Technology",
      headline: "Cybersecurity Teams Adopt Continuous Verification for Remote Access",
      summary:
        "Zero-trust approaches replace one-time login checks as workforces remain distributed.",
      author: "Sarah O'Brien",
      time: "5 min read",
    },
  ],
  Finance: [
    {
      id: "finance-1",
      category: "Finance",
      headline: "Pension Funds Reassess Portfolio Mix Amid Shifting Rate Outlook",
      summary:
        "Allocators seek balance between yield, liquidity, and long-term liability matching.",
      author: "Andrew Blake",
      time: "5 min read",
    },
    {
      id: "finance-2",
      category: "Finance",
      headline: "Community Banks Emphasize Relationship Lending in Tighter Credit Cycle",
      summary:
        "Regional institutions highlight local knowledge as a competitive advantage.",
      author: "Helen Strauss",
      time: "4 min read",
    },
  ],
  Opinion: [
    {
      id: "opinion-1",
      category: "Opinion",
      headline: "Editorial: Transparency Should Guide the Next Wave of AI Regulation",
      summary:
        "Policymakers can protect innovation while requiring clear disclosure of automated decision systems.",
      author: "Editorial Board",
      time: "4 min read",
    },
    {
      id: "opinion-2",
      category: "Opinion",
      headline: "Guest Essay: Cities Must Plan for Heat Before It Becomes a Crisis",
      summary:
        "Urban designers outline practical steps to reduce exposure in neighborhoods with limited tree cover.",
      author: "Dr. Yuki Tanaka",
      time: "7 min read",
    },
  ],
};

function HeroSection({
  featured,
  secondary,
  strip,
}: {
  featured: Article;
  secondary: Article[];
  strip: Article[];
}) {
  return (
    <section className="hero" aria-label="Featured stories">
      <div className="hero-layout">
        <article className="hero-lead">
          <div className="hero-lead-copy">
            <p className="hero-category">{featured.category}</p>
            <h1 className="hero-lead-headline">
              <a href="#">{featured.headline}</a>
            </h1>
            <p className="hero-lead-summary">{featured.summary}</p>
            <div className="hero-lead-meta" aria-label="Featured story details">
              <span>By {featured.author}</span>
              <span aria-hidden="true">|</span>
              <span>{featured.time}</span>
              {featured.publishedDate && (
                <>
                  <span aria-hidden="true">|</span>
                  <time dateTime="2026-06-30">{featured.publishedDate}</time>
                </>
              )}
            </div>
          </div>

          <figure className="hero-photo hero-photo--lead">
            <span className="hero-photo-label">Image Placeholder</span>
          </figure>

          <a href="#" className="hero-continue-link">
            Continue Reading
          </a>
        </article>

        <aside className="hero-latest" aria-label="Latest headlines">
          <div className="hero-latest-heading">
            <p>Latest Headlines</p>
          </div>
          <ol className="hero-latest-list">
            {secondary.map((article) => (
              <li key={article.id}>
                <a href="#" className="hero-latest-link">
                  <span className="hero-latest-badge">{article.category}</span>
                  <h2>{article.headline}</h2>
                  <time dateTime="2026-06-30">{article.time}</time>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <div className="hero-news-strip" aria-label="More top stories">
        {strip.map((article) => (
          <article className="hero-strip-card" key={article.id}>
            <a href="#" className="hero-strip-link">
              <figure className="hero-photo hero-photo--strip">
                <span className="hero-photo-label">Image Placeholder</span>
              </figure>
              <div className="hero-strip-body">
                <p className="hero-category">{article.category}</p>
                <h2>{article.headline}</h2>
                <p>{article.summary}</p>
                <div className="hero-strip-meta">
                  <span>{article.author}</span>
                  <span aria-hidden="true">|</span>
                  <span>{article.time}</span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  size = "default",
}: {
  article: Article;
  size?: "default" | "compact" | "lead";
}) {
  const headlineClass =
    size === "lead"
      ? "article-headline text-3xl sm:text-4xl lg:text-5xl mt-3"
      : size === "compact"
        ? "article-headline text-lg sm:text-xl mt-2"
        : "article-headline text-xl sm:text-2xl mt-2";

  const summaryClass =
    size === "lead"
      ? "article-summary mt-4 text-base sm:text-lg max-w-3xl"
      : size === "compact"
        ? "article-summary mt-2 text-sm line-clamp-2"
        : "article-summary mt-3 text-sm sm:text-base";

  return (
    <article className={size === "lead" ? "" : "section-rule-light pt-4"}>
      <p className="article-kicker">{article.category}</p>
      <h3 className={headlineClass}>
        <a href="#">{article.headline}</a>
      </h3>
      <p className={summaryClass}>{article.summary}</p>
      <p className="article-meta mt-3">
        {article.author} · {article.time}
      </p>
    </article>
  );
}

function SectionBlock({
  id,
  title,
  articles,
}: {
  id: string;
  title: string;
  articles: Article[];
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 sm:py-10">
      <div className="section-rule mb-6">
        <h2 className="section-heading text-2xl sm:text-3xl">{title}</h2>
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
  return (
    <>
      <main className="flex-1">
        <div className="content-container">
          <HeroSection featured={leadStory} secondary={heroSecondary} strip={topStories} />

          <div
            className="ad-slot ad-slot-leaderboard my-6 sm:my-8"
            role="complementary"
            aria-label="Advertisement"
          >
            Advertisement
          </div>

          {/* Top Stories */}
          <section id="top-stories" className="scroll-mt-24 py-8 sm:py-10">
            <div className="section-rule mb-6">
              <h2 className="section-heading text-2xl sm:text-3xl">
                Top Stories
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {topStories.map((article) => (
                <ArticleCard key={article.id} article={article} size="compact" />
              ))}
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12 py-4">
            <div>
              {/* Latest */}
              <section id="latest" className="scroll-mt-24 py-8 sm:py-10 border-t border-[var(--color-rule-strong)]">
                <div className="section-rule mb-6">
                  <h2 className="section-heading text-2xl sm:text-3xl">Latest</h2>
                </div>
                <div className="divide-y divide-[var(--color-rule)]">
                  {latestStories.map((article) => (
                    <div key={article.id} className="py-5 first:pt-0">
                      <ArticleCard article={article} size="compact" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Category sections */}
              <SectionBlock
                id="world"
                title="World"
                articles={sectionArticles.World}
              />
              <SectionBlock
                id="business"
                title="Business"
                articles={sectionArticles.Business}
              />
              <SectionBlock
                id="technology"
                title="Technology"
                articles={sectionArticles.Technology}
              />
              <SectionBlock
                id="finance"
                title="Finance"
                articles={sectionArticles.Finance}
              />
              <SectionBlock
                id="opinion"
                title="Opinion"
                articles={sectionArticles.Opinion}
              />
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
