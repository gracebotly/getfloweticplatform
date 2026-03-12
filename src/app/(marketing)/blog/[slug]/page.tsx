import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";

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

  // FAQPage JSON-LD — crawled by ChatGPT and Perplexity as a GEO signal
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${post.title.split(":")[0]}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: post.description,
        },
      },
    ],
  };

  return (
    <div className="pt-16">
      {/* JSON-LD — in static HTML, readable by all crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Category + Read Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            {post.category}
          </span>
          {post.readTime && (
            <>
              <span className="text-gray-300 text-xs">·</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock size={11} />
                {post.readTime}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author Bar */}
        <div className="flex items-center gap-3 pb-8 mb-10 border-b">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-bold text-sm">G</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Article Body — MDXRemote compiles MDX on server, prose from @tailwindcss/typography */}
        <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-img:rounded-2xl prose-img:shadow-md prose-h2:text-2xl prose-h3:text-xl">
          <MDXRemote source={post.content} />
        </div>

        {/* CTA Box */}
        <div className="mt-16 rounded-2xl border bg-blue-50 p-8 md:p-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to white-label your AI automations?
          </h3>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto">
            Connect your Vapi, Retell, Make, or n8n workflows and deliver
            branded client portals in 60 seconds.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free — No Card Required
          </Link>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
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
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                      {relPost.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mt-1 text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium hover:gap-3 transition-all duration-200"
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
