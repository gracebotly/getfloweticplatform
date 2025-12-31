import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { TrustedBySection } from '@/components/landing/TrustedBySection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { StepsSection } from '@/components/landing/StepsSection';
import { IntegrationsSection } from '@/components/landing/IntegrationsSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { ComparisonSection } from '@/components/landing/ComparisonSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { FooterSection } from '@/components/landing/FooterSection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <StepsSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <PricingSection />
        <ComparisonSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Landing;
