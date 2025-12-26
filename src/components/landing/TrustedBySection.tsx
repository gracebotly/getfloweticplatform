import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const logos = [
  { name: 'Acme Corp', width: 'w-24' },
  { name: 'Startup Inc', width: 'w-28' },
  { name: 'Tech Co', width: 'w-20' },
  { name: 'Data Labs', width: 'w-24' },
  { name: 'Cloud Nine', width: 'w-28' },
];

export const TrustedBySection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-foreground mb-10"
        >
          Built for freelancers, consultants, and small businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`${logo.width} h-10 bg-muted rounded flex items-center justify-center`}
            >
              <span className="text-muted-foreground font-semibold text-sm">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
