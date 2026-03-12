"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { UserPlus, Database, Share2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Connect Your Platform',
    description: 'Paste your API key for Vapi, Retell, Make, or n8n. Getflowetic connects in seconds and automatically indexes all your agents and workflows — no setup scripts, no webhooks.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
  },
  {
    number: '02',
    icon: Database,
    title: 'Build a Branded Portal',
    description: 'Our AI wizard walks you through creating a client dashboard in under 60 seconds. Choose what to show, set your access type (magic link or paid), and apply your branding.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
  {
    number: '03',
    icon: Share2,
    title: 'Share It & Get Paid',
    description: 'Send your client a link. They log into a portal that looks like you built it from scratch. You charge them monthly through your connected Stripe account. Done.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
];

export const StepsSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            From API Key to Paid Client Portal in 60 Seconds
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            No custom code. No third-party dashboard tools. No Notion docs. Just connect, configure, and deliver.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="bg-card rounded-2xl p-8 border shadow-sm"
            >
              <div className="mb-4 text-foreground font-bold text-lg">
                {step.number}. {step.title}
              </div>
              <p className="text-muted-foreground mb-6">{step.description}</p>
              <div className="h-48 rounded-xl overflow-hidden relative">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-primary/90 p-3 rounded-xl">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
