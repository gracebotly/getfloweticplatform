import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Resources for AI Automation Agencies",
  description:
    "Guides, comparisons, and playbooks for automation agencies building with Vapi, Retell, Make, and n8n.",
  alternates: { canonical: "https://getflowetic.com/blog" },
};

function PostImagePlaceholder({
  category,
  size = "featured",
}: {
  category: string;
  size?: "featured" | "card";
}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-foreground/[0.03] gap-3 p-6">
      <span
        className={`font-semibold text-primary uppercase tracking-widest text-center leading-tight ${
          size === "featured" ? "text-xs" : "text-[10px]"
        }`}
      >
        {category}
      </span>
      <div
        className={`rounded-full bg-primary/10 flex items-center justify-center ${
          size === "featured" ? "w-12 h-12" : "w-8 h-8"
        }`}
      >
        <span
          className={`font-bold text-primary ${
            size === "featured" ? "text-lg" : "text-sm"
          }`}
        >
          GF
        </span>
      </div>
    </div>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="pt-16">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Resources for AI Agencies
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Guides, comparisons, and playbooks for automation agencies building
            with Vapi, Retell, Make, and n8n.
          </p>
        </div>

        {/* Featured Post — Option A editorial spotlight */}
        {featured && (
          <div className="mb-16">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300">
                {/* Image zone */}
                <div className="aspect-video md:aspect-auto min-h-[280px] overflow-hidden relative">
                  {featured.ogImage ? (
                    <img
                      src={featured.ogImage}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <PostImagePlaceholder
                      category={featured.category}
                      size="featured"
                    />
                  )}
                </div>
                {/* Content zone */}
                <div className="p-8 md:p-10 flex flex-col justify-center bg-card">
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                    {featured.category} · Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>
                      {new Date(featured.publishedAt).toLocaleDateString(
                        "en-US",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}
                    </span>
                    {featured.readTime && (
                      <>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {featured.readTime}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200">
                    Read article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Latest Posts Grid */}
        {rest.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-foreground">
                Latest Articles
              </h2>
              <span className="text-sm text-muted-foreground">
                {rest.length} article{rest.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <div className="rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      {/* Card image */}
                      <div className="aspect-video overflow-hidden flex-shrink-0">
                        {post.ogImage ? (
                          <img
                            src={post.ogImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <PostImagePlaceholder
                            category={post.category}
                            size="card"
                          />
                        )}
                      </div>
                      {/* Card content */}
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                          {post.category}
                        </span>
                        <h2 className="font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-4 border-t">
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric", year: "numeric" }
                            )}
                          </span>
                          {post.readTime && (
                            <>
                              <span>·</span>
                              <span className="flex items-center gap-1">
                                <Clock size={10} />
                                {post.readTime}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}

        {posts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground">Articles coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}
