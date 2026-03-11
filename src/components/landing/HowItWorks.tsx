const STEPS = [
  {
    number: "01",
    title: "Connect your platform",
    description:
      "Paste your Vapi, Retell, Make, or n8n API key. Getflowetic pulls in all your agents, assistants, and workflows automatically. Takes about 30 seconds.",
    detail: "Supported: Vapi · Retell · Make · n8n",
  },
  {
    number: "02",
    title: "Pick what to show your client",
    description:
      "Choose an agent or workflow. Pick a portal type — client reporting, workflow service, or both. Name it. Done. Your portal is live in under 60 seconds.",
    detail: "Magic link or Stripe-gated access — your choice",
  },
  {
    number: "03",
    title: "Share and get paid",
    description:
      "Your client opens a link. They see their data in a branded dashboard — your logo, your colors, your domain. If you charge for access, Stripe handles it. You keep the revenue.",
    detail: "Stripe Connect built in. Platform fee: 5% Starter · 2% Pro",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            From connection to client portal in 60 seconds
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            No custom development. No rebuilding your stack. Just connect what you already have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              <p className="mt-3 text-xs text-blue-600 font-medium">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
