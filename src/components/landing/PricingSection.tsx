import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  'Unlimited data sources',
  'Unlimited dashboards',
  'AI-powered insights',
  'Team collaboration',
  'Email & Slack alerts',
  'API access',
  'Priority support',
  'Custom integrations',
  'SSO & security',
];

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const price = isAnnual ? 29 : 39;

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
            One Price. Simple.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            We've kept things simple here. Try Flowetic free for 14 days. No credit card required.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-muted rounded-full p-1 flex">
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
            </button>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 border shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">Pro Plan</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-foreground">${price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + 0.05 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/connections" className="block">
              <Button className="w-full rounded-full" size="lg">
                Try for Free
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
