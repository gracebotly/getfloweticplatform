import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Clock } from "lucide-react";

export const revalidate = 86400; // Rebuild daily

export const metadata: Metadata = {
  title: "Blog — Resources for AI Automation Agencies",
  description:
    "Guides, comparisons, and playbooks for automation agencies building with Vapi, Retell, Make, and n8n.",
  alternates: { canonical: "https://getflowetic.com/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="pt-16">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Resources for AI Agencies
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Guides, comparisons, and playbooks for automation agencies building
            with Vapi, Retell, Make, and n8n.
          </p>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="mb-16">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border hover:shadow-xl transition-all duration-300">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-blue-100 to-indigo-50 relative overflow-hidden min-h-[280px]">
                  {featured.ogImage ? (
                    <img
                      src={featured.ogImage}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-blue-200">GF</span>
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                    {featured.category} · Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
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
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Card Grid */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-50 relative overflow-hidden flex-shrink-0">
                      {post.ogImage ? (
                        <img
                          src={post.ogImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-3xl font-bold text-blue-200">GF</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                        {post.category}
                      </span>
                      <h2 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-auto pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 text-xs font-bold">G</span>
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <span>·</span>
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
        )}

        {posts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400">Articles coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}
