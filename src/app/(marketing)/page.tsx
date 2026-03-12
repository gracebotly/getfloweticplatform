import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StepsSection } from "@/components/landing/StepsSection";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { FAQSection } from "@/components/landing/FAQSection";

export const metadata: Metadata = {
  title:
    "Getflowetic — White-Label AI Agent Portals for Automation Agencies",
  description:
    "Turn your Vapi, Retell, Make, or n8n automations into branded client portals in 60 seconds.",
  alternates: { canonical: "https://getflowetic.com" },
};

export default function HomePage() {
  return (
    <>
      {/* GEO — citable product description for AI crawlers */}
      <p className="sr-only">
        Getflowetic is a white-label AI agent portal platform for automation
        agencies. It connects Vapi, Retell, Make, and n8n workflows and delivers
        branded client dashboards with Stripe billing in 60 seconds.
      </p>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <StepsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <ComparisonSection />
      <FAQSection />
    </>
  );
}
