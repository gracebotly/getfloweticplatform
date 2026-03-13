"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            No custom code. No third-party tools. No Notion docs. Just connect, configure, and deliver.
          </p>
        </motion.div>

        {/* Steps + Connectors */}
        <div className="relative">

          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[88px] left-[calc(16.666%+32px)] right-[calc(16.666%+32px)] h-px bg-border z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">

            {/* Step 01 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Step number bubble */}
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-6 shadow-md">
                01
              </div>

              {/* UI Mockup — API Key Input */}
              <div className="w-full bg-card border rounded-2xl p-5 shadow-sm mb-6 text-left">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Connect Your Platform</p>
                <div className="flex gap-2 mb-3">
                  {['Vapi', 'Retell', 'Make', 'n8n'].map((p) => (
                    <span key={p} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 font-medium">{p}</span>
                  ))}
                </div>
                <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-muted-foreground font-mono truncate">sk-vapi-••••••••••••••••</span>
                </div>
                <div className="bg-primary rounded-lg px-3 py-2 text-center">
                  <span className="text-xs font-semibold text-primary-foreground">Connect →</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Paste your API key</h3>
              <p className="text-sm text-muted-foreground">
                Connect Vapi, Retell, Make, or n8n. Your agents and workflows are indexed in seconds.
              </p>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-6 shadow-md">
                02
              </div>

              {/* UI Mockup — Portal Wizard */}
              <div className="w-full bg-card border rounded-2xl p-5 shadow-sm mb-6 text-left">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Portal Wizard</p>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Portal name</span>
                    <span className="text-xs font-medium text-foreground">Apex AI Dashboard</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Access type</span>
                    <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 font-medium">Magic Link</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Billing</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5 font-medium dark:bg-emerald-900 dark:text-emerald-300">Stripe Connected</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5 mb-1">
                  <div className="bg-primary h-1.5 rounded-full w-4/5" />
                </div>
                <p className="text-xs text-muted-foreground">Step 4 of 5 — almost done</p>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Configure your portal</h3>
              <p className="text-sm text-muted-foreground">
                The wizard walks you through branding, access, and billing in under 60 seconds.
              </p>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-6 shadow-md">
                03
              </div>

              {/* UI Mockup — Magic Link Sent */}
              <div className="w-full bg-card border rounded-2xl p-5 shadow-sm mb-6 text-left">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Portal Ready</p>
                <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Magic link created</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono truncate">app.apex-ai.com/client/sarah</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xs">S</span>
                  </div>
                  <span>Sarah logged in · <span className="text-emerald-600 dark:text-emerald-400 font-medium">Active</span></span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">Send the link. Get paid.</h3>
              <p className="text-sm text-muted-foreground">
                Your client gets a branded portal. You collect monthly recurring revenue through Stripe.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
