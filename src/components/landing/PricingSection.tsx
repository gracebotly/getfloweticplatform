"use client"

import { useState } from "react"
import Link from "next/link"

const STARTER_FEATURES = [
  "5 client portals",
  "Full white-label (logo, colors, domain, footer)",
  "Custom domain included",
  "All platforms: Vapi, Retell, Make, n8n",
  "Stripe Connect — charge your clients",
  "Magic link + Stripe-gated access",
  "Revenue dashboard",
  "1 team seat",
  "5% platform fee on client revenue",
  "7-day free trial (no card) or 14-day (card)",
]

const PRO_FEATURES = [
  "15 client portals",
  "Everything in Starter",
  "Custom domain included",
  "Unlimited team members",
  "2% platform fee on client revenue",
  "Priority support",
  "14-day free trial (card required)",
]

const FEE_MATH = {
  starter: {
    label: "Starter math",
    example:
      "Agency billing $3K/mo to clients pays $150/mo for Getflowetic + 5% fee ($150) = $300/mo total cost.",
  },
  pro: {
    label: "Pro math",
    example:
      "Agency billing $6K/mo to clients pays $300/mo + 2% fee ($120) = $420/mo total. Saves $180/mo vs. Starter fee alone.",
  },
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  const starterPrice = annual ? 127 : 150
  const proPrice = annual ? 255 : 300

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Simple pricing. No hidden fees.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Two plans. Both include full white-label from day one of your paid plan. The fee drop at Pro pays for
            itself at volume.
          </p>

          {/* Annual toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !annual ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                annual ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Annual
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Starter */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-500">For agencies getting their first portals live.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-gray-900">${starterPrice}</span>
              <span className="text-gray-400 text-sm">/mo{annual ? " billed annually" : ""}</span>
            </div>
            <Link
              href="/signup"
              className="mt-6 block w-full py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold text-sm text-center hover:bg-blue-50 transition-colors"
            >
              Start free — 7 days, no card
            </Link>
            <ul className="mt-8 space-y-3">
              {STARTER_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed">{FEE_MATH.starter.example}</p>
            </div>
          </div>

          {/* Pro */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top right, #3b82f6, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="text-lg font-semibold text-white">Pro</h3>
              <p className="mt-1 text-sm text-white/50">For agencies scaling client revenue.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">${proPrice}</span>
                <span className="text-white/40 text-sm">/mo{annual ? " billed annually" : ""}</span>
              </div>
              <Link
                href="/signup"
                className="mt-6 block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm text-center transition-colors"
              >
                Start free — 14 days with card
              </Link>
              <ul className="mt-8 space-y-3">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-white/40 leading-relaxed">{FEE_MATH.pro.example}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee note */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Cancel anytime. No long-term contracts. Custom domain included on all paid plans from day one.
        </p>
      </div>
    </section>
  )
}
