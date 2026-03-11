export function TrustBand() {
  const stats = [
    { number: "60s", label: "Portal live in 60 seconds" },
    { number: "4", label: "Platforms supported" },
    { number: "100%", label: "White-labeled from day one of paid plan" },
    { number: "0%", label: "Getflowetic branding on paid plans" },
  ]

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="mt-1 text-sm text-gray-500 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
