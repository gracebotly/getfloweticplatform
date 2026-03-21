"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/* ─── Mockup 1: White-Label Portal Preview ─────────────────────────── */
const WhiteLabelMockup = () => (
  <div className="bg-card border rounded-2xl shadow-lg overflow-hidden">
    {/* Fake browser chrome */}
    <div className="bg-muted/60 border-b px-4 py-2.5 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 bg-background rounded-md px-3 py-1 mx-8">
        <span className="text-[10px] text-muted-foreground font-mono">clients.apex-ai.com/dashboard</span>
      </div>
    </div>

    {/* Portal UI */}
    <div className="p-5">
      {/* Agency branded header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Apex AI Solutions</p>
            <p className="text-[10px] text-muted-foreground">Client Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-emerald-600 font-medium dark:text-emerald-400">Live</span>
        </div>
      </div>

      {/* Metric cards row */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="bg-muted/40 rounded-lg p-2.5">
          <p className="text-[10px] text-muted-foreground">Total Calls</p>
          <p className="text-lg font-bold text-foreground">847</p>
          <p className="text-[9px] text-emerald-600 dark:text-emerald-400">+12% this week</p>
        </div>
        <div className="bg-muted/40 rounded-lg p-2.5">
          <p className="text-[10px] text-muted-foreground">Success Rate</p>
          <p className="text-lg font-bold text-foreground">94.2%</p>
          <p className="text-[9px] text-emerald-600 dark:text-emerald-400">+3.1% vs last month</p>
        </div>
        <div className="bg-muted/40 rounded-lg p-2.5">
          <p className="text-[10px] text-muted-foreground">Est. Savings</p>
          <p className="text-lg font-bold text-foreground">$12.4k</p>
          <p className="text-[9px] text-muted-foreground">This month</p>
        </div>
      </div>

      {/* Mini chart placeholder */}
      <div className="bg-muted/30 rounded-lg p-3 flex items-end gap-1 h-16">
        {[35, 42, 38, 55, 48, 62, 58, 70, 65, 72, 68, 78].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-primary/20 rounded-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

/* ─── Mockup 2: Platform Connection ─────────────────────────────────── */
const ConnectMockup = () => (
  <div className="bg-card border rounded-2xl shadow-lg p-5">
    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">Connect Your Platform</p>

    {/* Platform selector */}
    <div className="grid grid-cols-2 gap-2 mb-4">
      {[
        { name: 'Vapi', logo: '/assets/logos/vapi.svg', connected: true },
        { name: 'Retell AI', logo: '/assets/logos/retell.svg', connected: false },
        { name: 'Make', logo: '/assets/logos/make.svg', connected: false },
        { name: 'n8n', logo: '/assets/logos/n8n.svg', connected: false },
      ].map((platform) => (
        <div
          key={platform.name}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 border transition-colors ${
            platform.connected
              ? 'border-primary bg-primary/5'
              : 'border-border bg-background hover:bg-muted/40'
          }`}
        >
          <div className="w-7 h-7 rounded-lg bg-background border flex items-center justify-center p-1 shrink-0">
            <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain" />
          </div>
          <span className="text-xs font-medium text-foreground">{platform.name}</span>
          {platform.connected && (
            <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          )}
        </div>
      ))}
    </div>

    {/* API key field */}
    <div className="mb-3">
      <label className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium mb-1 block">API Key</label>
      <div className="bg-muted rounded-lg px-3 py-2.5 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
        <span className="text-xs text-muted-foreground font-mono truncate">sk-vapi-8f2a••••••••••••••••</span>
      </div>
    </div>

    {/* Status row */}
    <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-2">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Connected</span>
      </div>
      <span className="text-[10px] text-emerald-600 dark:text-emerald-400">3 agents indexed</span>
    </div>
  </div>
);

/* ─── Mockup 3: Stripe Billing Gate ─────────────────────────────────── */
const BillingMockup = () => (
  <div className="bg-card border rounded-2xl shadow-lg overflow-hidden">
    {/* Portal header */}
    <div className="bg-muted/40 border-b px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
          <span className="text-white font-bold text-[9px]">A</span>
        </div>
        <span className="text-xs font-semibold text-foreground">Apex AI Solutions</span>
      </div>
      <span className="text-[10px] text-muted-foreground">Portal Access</span>
    </div>

    <div className="p-5">
      {/* Pricing card */}
      <div className="border rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Voice Analytics Portal</p>
            <p className="text-[10px] text-muted-foreground">Monthly subscription</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-foreground">$149</p>
            <p className="text-[10px] text-muted-foreground">/month</p>
          </div>
        </div>
        <div className="space-y-1.5">
          {['Real-time call analytics', 'Sentiment analysis', 'Transcript history'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <svg className="w-2 h-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[10px] text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stripe-style payment form */}
      <div className="space-y-2.5 mb-4">
        <div className="bg-muted rounded-lg px-3 py-2.5">
          <span className="text-[10px] text-muted-foreground">sarah@techstartup.com</span>
        </div>
        <div className="bg-muted rounded-lg px-3 py-2.5 flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">•••• •••• •••• 4242</span>
          <div className="flex items-center gap-1">
            <div className="w-6 h-4 rounded-sm bg-indigo-700 flex items-center justify-center">
              <span className="text-[6px] text-white font-bold">VISA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary rounded-lg px-3 py-2.5 text-center">
        <span className="text-xs font-semibold text-primary-foreground">Subscribe — $149/mo</span>
      </div>

      {/* Revenue note */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        <img src="/assets/logos/stripe.svg" alt="Stripe" className="h-3 w-auto opacity-50" />
        <span className="text-[9px] text-muted-foreground">Paid directly to your Stripe account</span>
      </div>
    </div>
  </div>
);

/* ─── Mockup 4: Live Analytics Dashboard ────────────────────────────── */
const AnalyticsMockup = () => (
  <div className="bg-card border rounded-2xl shadow-lg p-5">
    <div className="flex items-center justify-between mb-4">
      <p className="text-xs font-semibold text-foreground">Call Performance</p>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] text-emerald-600 font-medium dark:text-emerald-400">Live</span>
      </div>
    </div>

    {/* Chart */}
    <div className="flex items-end gap-[3px] h-24 mb-4">
      {[
        { h: 40, label: 'Mon' },
        { h: 55, label: 'Tue' },
        { h: 48, label: 'Wed' },
        { h: 70, label: 'Thu' },
        { h: 62, label: 'Fri' },
        { h: 45, label: 'Sat' },
        { h: 78, label: 'Sun' },
      ].map((bar, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full bg-primary/80 rounded-sm transition-all"
            style={{ height: `${bar.h}%` }}
          />
          <span className="text-[8px] text-muted-foreground">{bar.label}</span>
        </div>
      ))}
    </div>

    {/* Metric rows */}
    <div className="space-y-2">
      {[
        { label: 'Avg. call duration', value: '3m 24s', change: '+8%', positive: true },
        { label: 'Calls answered', value: '847', change: '+12%', positive: true },
        { label: 'Missed calls', value: '23', change: '-31%', positive: true },
        { label: 'Avg. sentiment', value: '4.6 / 5', change: '+0.3', positive: true },
      ].map((metric) => (
        <div key={metric.label} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
          <span className="text-[10px] text-muted-foreground">{metric.label}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-foreground">{metric.value}</span>
            <span className={`text-[9px] font-medium ${
              metric.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
            }`}>
              {metric.change}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Recent activity */}
    <div className="mt-4 pt-3 border-t">
      <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium mb-2">Recent Calls</p>
      <div className="space-y-2">
        {[
          { name: 'Sarah Chen', time: '2 min ago', duration: '4:12', status: 'Completed' },
          { name: 'Mike Johnson', time: '8 min ago', duration: '2:45', status: 'Completed' },
          { name: 'Lisa Park', time: '14 min ago', duration: '6:03', status: 'Completed' },
        ].map((call) => (
          <div key={call.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-[8px] text-primary font-bold">{call.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-[10px] font-medium text-foreground">{call.name}</p>
                <p className="text-[8px] text-muted-foreground">{call.time}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-medium text-foreground">{call.duration}</p>
              <p className="text-[8px] text-emerald-600 dark:text-emerald-400">{call.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Feature data ──────────────────────────────────────────────────── */
const features = [
  {
    tag: 'White-Label',
    title: 'Your logo. Your colors. Zero Getflowetic branding.',
    description:
      'Upload your logo, pick your hex codes, connect your domain. Every client portal looks like you spent six months building it. The moment you subscribe, our name disappears completely.',
    mockup: WhiteLabelMockup,
  },
  {
    tag: 'Connect',
    title: 'Paste one API key. Your agents appear instantly.',
    description:
      'Vapi, Retell, Make, or n8n. Pick your platform, paste the key, and your voice agents or workflows are indexed in seconds. No webhooks to configure. No code to write.',
    mockup: ConnectMockup,
  },
  {
    tag: 'Billing',
    title: 'Your clients pay you. Not us.',
    description:
      'Connect your Stripe account. Set a monthly price. Gate any portal behind a payment. The money goes to your bank account. Getflowetic collects a small platform fee automatically. You never send another invoice.',
    mockup: BillingMockup,
  },
  {
    tag: 'Analytics',
    title: 'Real-time dashboards replace monthly reports.',
    description:
      'Call volumes, workflow success rates, sentiment scores, response times. Your clients see live data in their portal whenever they want. The weekly "how is my agent doing?" emails stop on day one.',
    mockup: AnalyticsMockup,
  },
];

/* ─── Main Section ──────────────────────────────────────────────────── */
export const FeaturesSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="features" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Your Clients Deserve Better Than a Google Doc
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Four things that turn your AI agents from a service into a product your clients actually pay for.
          </p>
        </motion.div>

        {/* Stacked Feature Rows */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            const MockupComponent = feature.mockup;

            return (
              <motion.div
                key={feature.tag}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Text — always first in DOM for mobile, visually reordered on desktop */}
                <div className={isReversed ? 'md:order-2' : ''}>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                    {feature.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Mockup */}
                <div className={isReversed ? 'md:order-1' : ''}>
                  <MockupComponent />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
