import Link from "next/link"

export function FooterCTA() {
  return (
    <section className="bg-[#0d1117] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Your clients are waiting for a dashboard. <span className="text-blue-400">Give them one today.</span>
        </h2>
        <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
          Connect your first platform. Build your first portal. Send your first client link — all in under 60
          seconds. No credit card needed to start.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-colors shadow-lg shadow-blue-600/20"
          >
            Start your free trial
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        <p className="mt-5 text-sm text-white/30">
          7-day free trial on Starter · No card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}
