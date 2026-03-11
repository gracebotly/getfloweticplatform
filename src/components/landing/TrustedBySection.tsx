import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import stripeLogo from '@/assets/logos/stripe.svg';

const logos = [
  { name: 'Vapi' },
  { name: 'Retell AI' },
  { name: 'Make' },
  { name: 'n8n' },
  { name: 'Stripe', logo: stripeLogo },
  { name: 'More coming soon' },
];



export const TrustedBySection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-foreground mb-10"
        >
          Works With Your Existing Stack
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-10"
        >
          Connect the platforms you already use. No rebuilding, no migration.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee gap-16 items-center group-hover:[animation-play-state:paused]">
            {logos.map((logo) => (
              <div key={logo.name} className="flex-shrink-0 px-4">
                {logo.logo ? (
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex animate-marquee gap-16 items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
            {logos.map((logo) => (
              <div key={logo.name} className="flex-shrink-0 px-4">
                {logo.logo ? (
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
