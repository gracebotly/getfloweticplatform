import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Getflowetic",
  description:
    "Get in touch with the Getflowetic team. Questions about pricing or the platform? Email us. Ready to talk Enterprise? Book a 30-minute demo.",
  alternates: { canonical: "https://getflowetic.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Questions before signing up? Just want to talk through your setup?
            We&apos;re quick to reply.
          </p>
        </div>

        {/* Two-column split */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — General email */}
          <div className="bg-card rounded-2xl border p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              General Questions
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Got a question about pricing, integrations, or how Getflowetic
              works? Send us an email — we typically respond within a few hours.
            </p>
            <a
              href="mailto:hello@getflowetic.com"
              className="inline-flex items-center gap-2 text-primary font-medium text-lg hover:underline underline-offset-4"
            >
              hello@getflowetic.com
            </a>
            <div className="mt-8 pt-6 border-t space-y-3">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                What we can help with
              </p>
              {[
                "Platform and integration questions",
                "Pricing and plan comparisons",
                "White-label setup guidance",
                "Partnership inquiries",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Enterprise Calendly */}
          <div className="bg-card rounded-2xl border p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Enterprise Demo
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Unlimited portals, no platform fee, custom integrations. If
              you&apos;re scaling a serious agency operation, let&apos;s talk.
              Book a 30-minute call.
            </p>
            <div
              className="calendly-inline-widget w-full rounded-xl overflow-hidden"
              data-url="https://calendly.com/implement-logic/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=09090b&primary_color=6d28d9"
              style={{ minWidth: "280px", height: "660px" }}
            />
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
          </div>

        </div>

        {/* Back link */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </div>

      </div>
    </main>
  );
}
