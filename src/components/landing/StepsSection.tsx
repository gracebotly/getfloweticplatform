import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { UserPlus, Database, Share2 } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Create Free Account',
    description: 'Add your details and preferences in under 2 minutes.',
  },
  {
    number: 2,
    icon: Database,
    title: 'Connect Your Data',
    description: 'Link databases, APIs, or upload files with a few clicks.',
  },
  {
    number: 3,
    icon: Share2,
    title: 'Share & Analyze',
    description: 'Build dashboards and share insights with your team.',
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Get Started In 3 Simple Steps
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Set up in minutes, connect your data sources, and make it easy to gain insights.
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
              <div className="h-48 bg-muted/50 rounded-xl flex items-center justify-center">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
