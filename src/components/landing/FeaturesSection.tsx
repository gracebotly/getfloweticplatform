"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe, Plug, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Globe,
    iconBg: 'bg-violet-500',
    cardBg: 'bg-violet-50 dark:bg-violet-950/40',
    title: 'Your brand. Their portal.',
    description:
      'Upload your logo, set your domain, pick your colors. Every client portal looks like you built it from scratch — Getflowetic is completely invisible.',
  },
  {
    icon: Plug,
    iconBg: 'bg-blue-500',
    cardBg: 'bg-blue-50 dark:bg-blue-950/40',
    title: 'Connect in 60 seconds.',
    description:
      'Paste your Vapi, Retell, Make, or n8n API key. Your agents and workflows are indexed instantly — no code, no webhooks, nothing to configure.',
  },
  {
    icon: CreditCard,
    iconBg: 'bg-emerald-500',
    cardBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    title: 'Charge clients directly.',
    description:
      'Set your price, connect Stripe, gate access. Your clients pay you monthly — without you ever touching an invoice or chasing a payment.',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-amber-500',
    cardBg: 'bg-amber-50 dark:bg-amber-950/40',
    title: 'Clients see live data, not you.',
    description:
      'Real-time call volumes, workflow runs, and success rates — all in their portal, under your brand. No more "how is my agent doing?" emails.',
  },
];

export const FeaturesSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Your Clients Deserve Better Than a Google Doc
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Give every client a portal that looks like a product — branded, billed, and live in under a minute.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`${feature.cardBg} rounded-2xl p-8 border`}
            >
              <div className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
