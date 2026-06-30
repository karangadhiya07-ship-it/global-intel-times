const categories = [
  "World",
  "Business",
  "Technology",
  "Politics",
  "Finance",
  "Markets",
  "Sports",
  "Health",
  "Science",
  "Opinion",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="text-sm">Tuesday, June 30, 2026</p>
          <h1 className="mt-4 font-serif text-5xl font-bold md:text-7xl">
            Global Intel Times
          </h1>
          <p className="mt-3 text-sm tracking-[0.25em] text-gray-600">
            ORIGINAL JOURNALISM · GLOBAL PERSPECTIVE
          </p>
        </div>

        <nav className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5 px-6 py-4 text-sm font-semibold">
          {categories.map((category) => (
            <a key={category} href="#" className="hover:underline">
              {category}
            </a>
          ))}
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr_1fr]">
        <article>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest">
            Featured
          </p>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Global Intelligence for a Fast-Changing World
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            Global Intel Times is an original news and analysis platform focused
            on world affairs, business, technology, finance, markets, politics,
            science, health, and culture.
          </p>
        </article>

        <aside className="border-l border-gray-300 pl-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest">
            Editor&apos;s Note
          </p>
          <h3 className="font-serif text-2xl font-bold">
            Built for original publishing
          </h3>
          <p className="mt-3 text-gray-700">
            No RSS. No scraping. No copied content. This website is ready for a
            clean AdSense-friendly publishing workflow.
          </p>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl border-t border-gray-300 px-6 py-10">
        <h2 className="mb-6 font-serif text-3xl font-bold">Latest</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.slice(0, 6).map((category) => (
            <article key={category} className="border-t border-black pt-4">
              <p className="text-xs font-bold uppercase">{category}</p>
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Original {category} analysis coming soon
              </h3>
              <p className="mt-3 text-gray-700">
                Publish your own article from the upcoming admin dashboard.
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-black px-6 py-8 text-center text-sm text-gray-600">
        © 2026 Global Intel Times. Original journalism only.
      </footer>
    </main>
  );
}
