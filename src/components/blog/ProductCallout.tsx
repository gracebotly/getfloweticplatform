import Link from "next/link";

export function ProductCallout() {
  return (
    <div className="not-prose my-8 rounded-2xl border bg-primary/5 p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
            Getflowetic
          </p>
          <p className="text-base font-bold text-foreground leading-snug">
            White-label client portals for Vapi, Retell, Make, and n8n — in 60 seconds.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            7-day free trial. No credit card required.
          </p>
        </div>
        <Link
          href="https://app.getflowetic.com/auth"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap flex-shrink-0"
        >
          Start Free Trial
        </Link>
      </div>
    </div>
  );
}
