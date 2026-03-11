"use client"

import { useState } from "react"

const FAQS = [
  {
    q: "What platforms does Getflowetic connect to?",
    a: "Vapi, Retell AI, Make, and n8n — the four platforms most AI automation agencies are already using. You connect via API key (Vapi, Retell, Make) or instance URL + API key (n8n). More integrations are planned.",
  },
  {
    q: "Do my clients need to know about Vapi or n8n?",
    a: "No. Your clients only ever see the portal you share with them. The underlying platform — Vapi, Retell, Make, n8n — is never mentioned. They see your logo, your colors, and your domain. Not a hint of the underlying tech.",
  },
  {
    q: "What does 'white-label' actually mean here?",
    a: "Every client-facing page is branded to you. Your logo, your primary color, your welcome message, your footer, and your custom domain. On all paid plans, the portal URL is your domain — not getflowetic.com. During the free trial, clients see Getflowetic branding. The moment you subscribe, it's 100% yours.",
  },
  {
    q: "How does Stripe Connect work?",
    a: "You connect your Stripe account in Settings. When you create a Stripe-gated portal, your clients pay you directly through Stripe. Getflowetic automatically collects a small platform fee (5% on Starter, 2% on Pro) from each transaction. You receive the rest. Tax forms are handled by Stripe.",
  },
  {
    q: "How many client portals do I get?",
    a: "Starter includes 5 client portals. Pro includes 15. Each portal is a separate branded dashboard for a separate client — you can have a different look, different data source, and different access type for each one.",
  },
  {
    q: "What's the difference between a magic link and a Stripe-gated portal?",
    a: "Magic link portals are free-access — you send your client a link and they can view their dashboard with no payment required. Stripe-gated portals require payment before access. You can have both types across your portals — some free, some paid.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts, no cancellation fees. Your subscription continues until the end of the billing period. We're confident you'll stay because your clients will ask you to.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Questions agencies actually ask
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
