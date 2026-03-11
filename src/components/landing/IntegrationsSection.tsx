const PLATFORMS = [
  {
    name: "Vapi",
    type: "Voice AI",
    description:
      "Connect your Vapi assistants. Clients get call analytics, success rates, sentiment tracking, and full call logs.",
    color: "bg-purple-50 border-purple-100",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    name: "Retell",
    type: "Voice AI",
    description:
      "Connect your Retell agents. Same rich voice analytics dashboard — call volume, outcomes, performance trends.",
    color: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "Make",
    type: "Workflow",
    description:
      "Connect your Make scenarios. Client reporting portal shows execution counts, error rates, and run history. Sell scenarios as products.",
    color: "bg-violet-50 border-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    name: "n8n",
    type: "Workflow",
    description:
      "Connect your n8n instance. Full workflow analytics and the ability to wrap any workflow into a client-facing product page.",
    color: "bg-orange-50 border-orange-100",
    badge: "bg-orange-100 text-orange-700",
  },
]

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Built for the tools agencies actually use
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Native integrations with the four platforms powering most AI automation agencies today. More coming.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORMS.map((platform) => (
            <div key={platform.name} className={`rounded-2xl border p-6 ${platform.color}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-gray-900">{platform.name}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${platform.badge}`}>
                  {platform.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{platform.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          More integrations planned — Voiceflow, VAPI Squads, and others.
        </p>
      </div>
    </section>
  )
}
