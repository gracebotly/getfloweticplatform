"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Plug, Globe, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Plug,
    title: 'Connect Any AI Platform',
    description: 'Paste your Vapi, Retell, Make, or n8n API key. Getflowetic indexes your agents and workflows instantly — no custom code, no webhooks to configure.',
    color: 'bg-blue-50 dark:bg-blue-950',
    iconBg: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
  {
    icon: Globe,
    title: 'Fully White-Labeled Portals',
    description: 'Your logo. Your colors. Your domain. Every client portal is 100% branded as your agency — clients never see Getflowetic, Vapi, or any underlying platform.',
    color: 'bg-violet-50 dark:bg-violet-950',
    iconBg: 'bg-violet-500',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
  {
    icon: CreditCard,
    title: 'Built-In Stripe Billing',
    description: 'Charge your clients monthly — directly to your Stripe account. Set your price, gate portal access, and collect revenue without invoicing tools or payment headaches.',
    color: 'bg-emerald-50 dark:bg-emerald-950',
    iconBg: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Client Dashboards',
    description: 'Clients log into their portal and see live call volumes, workflow executions, success rates, and trends. No more "how is my AI agent doing?" emails from clients.',
    color: 'bg-amber-50 dark:bg-amber-950',
    iconBg: 'bg-amber-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
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
            Everything Your Agency Needs
            <br />
            <span className="text-primary">To Sell & Deliver AI</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop duct-taping Notion docs and screen shares. Give every client a professional portal — branded as yours, paid to you.
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
              className={`${feature.color} rounded-2xl p-8 border`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 relative">
                  <div className="h-40 rounded-xl overflow-hidden border">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className={`${feature.iconBg} p-3 rounded-xl absolute -bottom-4 left-4 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
