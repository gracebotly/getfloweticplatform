import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { ProductCallout } from "@/components/blog/ProductCallout";
import { Blog1Content } from "@/components/blog/Blog1Content";
import { Blog2Content } from "@/components/blog/Blog2Content";

type BlogHowToStep = {
  name: string;
  text: string;
};

type BlogHowTo = {
  name: string;
  description: string;
  steps: BlogHowToStep[];
};

const mdxComponents = {
  ProductCallout,
  Blog1Content,
  Blog2Content,
};

// SSG — pre-render every post at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Per-post metadata injected into static HTML
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://getflowetic.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.ogImage
        ? [{ url: post.ogImage, width: 1200, height: 630 }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const rawPostPath = [path.join(blogDir, `${slug}.mdx`), path.join(blogDir, `${slug}.md`)].find((candidate) =>
    fs.existsSync(candidate)
  );
  const rawPostData = rawPostPath
    ? (matter(fs.readFileSync(rawPostPath, "utf-8")).data as { howto?: BlogHowTo })
    : {};

  // FAQPage JSON-LD — rendered from frontmatter FAQ array
  const faqSchema =
    post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  // HowTo JSON-LD — rendered from frontmatter howto object (tutorial posts only)
  const howtoData = rawPostData.howto;
  const howtoSchema =
    howtoData && howtoData.steps?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: howtoData.name,
          description: howtoData.description,
          step: howtoData.steps.map((s: { name: string; text: string }, i: number) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }
      : null;

  // Article JSON-LD — tells crawlers this is a published article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.ogImage
      ? `https://getflowetic.com${post.ogImage}`
      : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Getflowetic",
      url: "https://getflowetic.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Getflowetic",
      url: "https://getflowetic.com",
      logo: {
        "@type": "ImageObject",
        url: "https://getflowetic.com/og-image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://getflowetic.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="pt-16">
      {/* JSON-LD — in static HTML, readable by all crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howtoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }}
        />
      )}

      {/* Hero Image */}
      {post.ogImage && (
        <div className="w-full overflow-hidden" style={{ maxHeight: 420 }}>
          <img
            src={post.ogImage}
            alt={post.title}
            className="w-full object-cover"
            style={{ maxHeight: 420 }}
          />
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Category + Read Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            {post.category}
          </span>
          {post.readTime && (
            <>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock size={11} />
                {post.readTime}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author Bar */}
        <div className="flex items-center gap-3 pb-8 mb-10 border-b">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold text-sm">G</span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{post.author}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Article Body — MDXRemote compiles MDX on server */}
        <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-img:rounded-2xl prose-img:shadow-md prose-h2:text-2xl prose-h3:text-xl prose-table:text-sm">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Clean divider before related posts */}
        <div className="mt-16 mb-16 border-t" />

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group block border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  {relPost.ogImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relPost.ogImage}
                        alt={relPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {relPost.category}
                    </span>
                    <h4 className="font-semibold text-foreground mt-1 text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {relPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                View all articles <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
