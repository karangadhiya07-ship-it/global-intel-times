import Image from "next/image";
import Link from "next/link";
import {
  Article,
  ArticleContentBlock,
  ArticleImage,
  ArticleVideo,
  getAdjacentArticles,
  getArticlePath,
  getRelatedArticles,
} from "@/lib/articles";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

function ImageFrame({ image, priority = false }: { image: ArticleImage; priority?: boolean }) {
  if (image.src.startsWith("placeholder:")) {
    return (
      <figure className="article-media article-media--placeholder">
        <div className="article-media-placeholder" aria-label={image.alt}>
          <span>{image.src.replace("placeholder:", "")}</span>
        </div>
        {(image.caption || image.credit) && (
          <figcaption>
            {image.caption}
            {image.credit && <span> Credit: {image.credit}</span>}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="article-media">
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={900}
        priority={priority}
      />
      {(image.caption || image.credit) && (
        <figcaption>
          {image.caption}
          {image.credit && <span> Credit: {image.credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

function VideoEmbed({ video }: { video: ArticleVideo }) {
  if (video.type === "youtube") {
    return (
      <figure className="article-video">
        <iframe
          src={video.src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </figure>
    );
  }

  return (
    <figure className="article-video">
      <video controls poster={video.poster?.startsWith("placeholder:") ? undefined : video.poster}>
        <source src={video.src} />
        Your browser does not support the video tag.
      </video>
      <figcaption>{video.title}</figcaption>
    </figure>
  );
}

function RichContentBlock({ block }: { block: ArticleContentBlock }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "paragraph":
      return <p>{block.text}</p>;
    case "quote":
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.attribution && <cite>{block.attribution}</cite>}
        </blockquote>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return <ImageFrame image={block.image} />;
    case "video":
      return <VideoEmbed video={block.video} />;
    default:
      return null;
  }
}

function ShareButtons({ article }: { article: Article }) {
  const path = getArticlePath(article);
  const shareText = encodeURIComponent(article.headline);
  const shareUrl = encodeURIComponent(path);

  return (
    <div className="article-share" aria-label="Share article">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}>Facebook</a>
      <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}>X</a>
      <a href={`mailto:?subject=${shareText}&body=${shareUrl}`}>Email</a>
    </div>
  );
}

function ArticleGallery({ images }: { images: ArticleImage[] }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="article-gallery" aria-labelledby="article-gallery-heading">
      <h2 id="article-gallery-heading">Image Gallery</h2>
      <div className="article-gallery-grid">
        {images.map((image) => (
          <ImageFrame key={`${image.src}-${image.alt}`} image={image} />
        ))}
      </div>
    </section>
  );
}

function RelatedArticles({ article }: { article: Article }) {
  const relatedArticles = getRelatedArticles(article);

  return (
    <section className="article-related" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading">Related Articles</h2>
      <div className="article-related-grid">
        {relatedArticles.map((relatedArticle) => (
          <article key={relatedArticle.id}>
            <p>{relatedArticle.category}</p>
            <h3>
              <Link href={getArticlePath(relatedArticle)}>{relatedArticle.headline}</Link>
            </h3>
            <span>{relatedArticle.readingTime}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArticleNavigation({ article }: { article: Article }) {
  const { previousArticle, nextArticle } = getAdjacentArticles(article);

  return (
    <nav className="article-navigation" aria-label="Article navigation">
      {previousArticle ? (
        <Link href={getArticlePath(previousArticle)} rel="prev">
          <span>Previous Article</span>
          {previousArticle.headline}
        </Link>
      ) : (
        <span />
      )}
      {nextArticle ? (
        <Link href={getArticlePath(nextArticle)} rel="next">
          <span>Next Article</span>
          {nextArticle.headline}
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default function ArticlePage({ article }: { article: Article }) {
  return (
    <article className="article-page">
      <header className="article-header">
        <ImageFrame image={article.heroImage} priority />
        <div className="article-header-copy">
          <p className="article-category-badge">{article.category}</p>
          <h1>{article.headline}</h1>
          <p>{article.summary}</p>
          <div className="article-meta-line">
            <span>By {article.author}</span>
            <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
            <span>{article.readingTime}</span>
          </div>
          <ShareButtons article={article} />
        </div>
      </header>

      {article.video && <VideoEmbed video={article.video} />}

      <div className="article-body">
        {article.content.map((block, index) => (
          <RichContentBlock key={`${block.type}-${index}`} block={block} />
        ))}
      </div>

      <ArticleGallery images={article.galleryImages} />
      <RelatedArticles article={article} />
      <ArticleNavigation article={article} />
    </article>
  );
}
