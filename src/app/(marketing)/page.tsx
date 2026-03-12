import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Getflowetic — White-Label AI Agent Portals for Automation Agencies",
  description:
    "Turn your Vapi, Retell, Make, or n8n automations into branded client portals in 60 seconds.",
  alternates: { canonical: "https://getflowetic.com" },
};

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
        <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
          For AI Automation Agencies
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          White-Label Your AI Agents
          <br />
          <span className="text-blue-600">in 60 Seconds</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Connect Vapi, Retell, Make, or n8n. Get a branded client portal with
          real-time dashboards and Stripe billing — instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free — No Card Required
          </Link>
          <Link
            href="/#how-it-works"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* PLACEHOLDER SECTIONS — replaced with full landing copy in Phase 3 */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600">Section content goes here.</p>
        </div>
      </section>

      <section id="features" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-gray-600">Section content goes here.</p>
        </div>
      </section>

      <section id="integrations" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrations</h2>
          <p className="text-gray-600">Vapi, Retell, Make, n8n — coming here.</p>
        </div>
      </section>

      <section id="pricing" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-gray-600">Pricing tiers go here.</p>
        </div>
      </section>
    </div>
  );
}
