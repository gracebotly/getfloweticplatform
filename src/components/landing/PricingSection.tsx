import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const starterFeatures = [
  '5 white-labeled client portals',
  'Custom domain (your brand URL)',
  'All platforms: Vapi, Retell, Make, n8n',
  'Stripe Connect — charge your clients directly',
  'Real-time client dashboards',
  'Magic link + Stripe Gate access',
  'Revenue dashboard',
  '1 team seat',
  '5% platform fee on client payments',
];

const proFeatures = [
  '15 white-labeled client portals',
  'Everything in Starter',
  'Unlimited team members',
  'Priority support',
  '2% platform fee — pays for itself at scale',
];

const STARTER_MONTHLY = 150;
const PRO_MONTHLY = 300;
const ANNUAL_DISCOUNT = 0.17; // ~2 months free

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const starterPrice = isAnnual ? Math.round(STARTER_MONTHLY * (1 - ANNUAL_DISCOUNT)) : STARTER_MONTHLY;
  const proPrice = isAnnual ? Math.round(PRO_MONTHLY * (1 - ANNUAL_DISCOUNT)) : PRO_MONTHLY;

  return (
    <section id="pricing" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Simple Pricing. Real Revenue.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Every paid plan includes full white-labeling, custom domain, and Stripe billing. No asterisks.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-muted rounded-full p-1 flex items-center gap-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isAnnual
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isAnnual
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Trial Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mb-10"
        >
          During your free trial, client portals show Getflowetic branding. Once you subscribe, it&apos;s 100% your brand — no asterisks.
        </motion.p>

        {/* Two Plan Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl p-8 border shadow-sm h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">Starter</h3>
                <p className="text-sm text-muted-foreground">For agencies launching their first white-label product.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-foreground">${starterPrice}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {isAnnual ? 'Billed annually' : 'Billed monthly'}
                {' · '}7-day free trial (no card required)
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {starterFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/auth" className="block mt-auto">
                <Button variant="outline" className="w-full rounded-full" size="lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div className="bg-primary rounded-2xl p-8 shadow-xl h-full flex flex-col relative overflow-hidden">
              {/* Most Popular badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-1">Pro</h3>
                <p className="text-sm text-primary-foreground/70">For growing agencies billing clients at scale.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-primary-foreground">${proPrice}</span>
                <span className="text-primary-foreground/70">/month</span>
              </div>
              <p className="text-xs text-primary-foreground/60 mb-6">
                {isAnnual ? 'Billed annually' : 'Billed monthly'}
                {' · '}14-day free trial (card required)
              </p>

              {/* Fee math callout */}
              <div className="bg-white/10 rounded-xl p-3 mb-6 text-xs text-primary-foreground/80">
                💡 At $6K/mo in client billing, the 2% fee saves you $180/mo vs Starter — the Pro plan pays for itself.
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/auth" className="block mt-auto">
                <Button variant="secondary" className="w-full rounded-full" size="lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All plans include full white-labeling and custom domain from day one of your paid subscription. Questions?{' '}
          <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">
            hello@getflowetic.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};
