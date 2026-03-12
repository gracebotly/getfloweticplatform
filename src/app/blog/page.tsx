import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Getflowetic Blog</h1>
      <ul className="list-disc pl-6">
        <li>
          <Link href="/blog/best-white-label-ai-dashboard-agencies" className="text-primary underline">
            Best White-Label AI Dashboard for Agencies
          </Link>
        </li>
      </ul>
    </main>
  );
}
