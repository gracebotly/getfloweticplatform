import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { LandingNav } from "@/components/landing/LandingNav"
import { HeroSection } from "@/components/landing/HeroSection"
import { TrustBand } from "@/components/landing/TrustBand"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { IntegrationsSection } from "@/components/landing/IntegrationsSection"
import { PricingSection } from "@/components/landing/PricingSection"
import { FAQSection } from "@/components/landing/FAQSection"
import { FooterCTA } from "@/components/landing/FooterCTA"
import { LandingFooter } from "@/components/landing/LandingFooter"

export default async function HomePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/control-panel/connections')
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <LandingNav />
      <main>
        <HeroSection />
        <TrustBand />
        <HowItWorks />
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <LandingFooter />
    </div>
  )
}
