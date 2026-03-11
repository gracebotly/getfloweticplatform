import Link from "next/link"

const FOOTER_LINKS = {
  Product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
  ],
  Access: [
    { label: "Sign up", href: "/signup" },
    { label: "Sign in", href: "/login" },
    { label: "Start free trial", href: "/signup" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Help center", href: "/control-panel/help" },
    { label: "Contact us", href: "mailto:hello@getflowetic.com" },
  ],
  Legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of service", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
}

export function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-lg">Getflowetic</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              The white-label platform for AI automation agencies. Turn your workflows and voice agents into branded
              client portals — and charge for them.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white/90 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Getflowetic. All rights reserved.</p>
          <p className="text-xs text-white/20">Built for AI automation agencies.</p>
        </div>
      </div>
    </footer>
  )
}
