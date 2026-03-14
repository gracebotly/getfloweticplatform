"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const agencyFeatures = [
  '5 client portals',
  'Custom domain',
  'All platforms: Vapi, Retell, Make, n8n',
  'Accept payments with Stripe Connect',
  'Real-time client dashboards and analytics',
  'Magic link creation',
  'Revenue dashboard',
  '1 team seat',
  '5% platform fee on client payments',
];

const scaleFeatures = [
  'Everything in Agency',
  '15 client portals',
  'Unlimited team members',
  'Custom onboarding',
  'Loom support responses',
  '2% platform fee on client payments',
];

const enterpriseFeatures = [
  'Everything in Scale',
  'Unlimited portals',
  'No platform fee',
  'Custom integrations',
  'Custom dashboard changes',
  'API access (coming soon)',
];

export const PricingSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="pricing" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            You Built the Agent. Now Get Paid.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            White-label client portals, Stripe billing, and branded dashboards — ready in 60 seconds.
          </p>
        </motion.div>

        {/* Three Plan Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">

          {/* Agency */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex"
          >
            <div className="bg-card rounded-2xl p-8 border shadow-sm flex flex-col w-full">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">Agency</h3>
                <p className="text-sm text-muted-foreground mt-1">For agencies landing their first white-label clients.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-foreground">$149</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Link href="https://app.getflowetic.com/signup" className="block mt-4">
                <Button variant="outline" className="w-full rounded-full" size="lg">
                  Free →
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground text-center mt-2">
                14-day free trial · No contracts · Cancel anytime
              </p>
              <ul className="space-y-3 mt-8 flex-1">
                {agencyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Scale */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex"
          >
            <div className="bg-primary rounded-2xl p-8 shadow-xl flex flex-col w-full">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-primary-foreground">Scale</h3>
                <p className="text-sm text-primary-foreground/70 mt-1">For agencies billing clients at scale.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-bold text-primary-foreground">$299</span>
                <span className="text-primary-foreground/70">/month</span>
              </div>
              <Link href="https://app.getflowetic.com/signup" className="block mt-4">
                <Button variant="secondary" className="w-full rounded-full" size="lg">
                  Free →
                </Button>
              </Link>
              <p className="text-xs text-primary-foreground/60 text-center mt-2">
                14-day free trial · No contracts · Cancel anytime
              </p>
              <ul className="space-y-3 mt-8 flex-1">
                {scaleFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-primary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex"
          >
            <div className="bg-card rounded-2xl p-8 border shadow-sm flex flex-col w-full">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">Enterprise</h3>
                <p className="text-sm text-muted-foreground mt-1">Unlimited portals. No platform fee. Built around you.</p>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-foreground">Custom</span>
              </div>
              <Link href="/contact" className="block mt-4 w-full rounded-full border border-input bg-background px-6 py-3 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground text-center">
                Talk to Us →
              </Link>
              <p className="text-xs text-muted-foreground text-center mt-2 invisible">
                &nbsp;
              </p>
              <ul className="space-y-3 mt-8 flex-1">
                {enterpriseFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Questions?{' '}
          <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">
            hello@getflowetic.com
          </a>
        </motion.p>

      </div>
    </section>
  );
};
