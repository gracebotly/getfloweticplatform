import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

const otherToolsPainPoints = [
  "Clients ask 'how is my AI agent doing?' every week",
  'Monthly PDF reports take hours to produce manually',
  'No professional way to charge clients for portal access',
  'Building a custom dashboard costs $10K+ and months of dev time',
  'Clients see Vapi, Retell, or n8n in the URL — no professional brand'
];

const floweticBenefits = [
  'Clients have a live dashboard — questions stop immediately',
  'Real-time portals replace monthly reports entirely',
  'Built-in Stripe billing — charge clients directly from the portal',
  'White-labeled portal live in 60 seconds — no dev work needed',
  '100% your brand — custom domain, logo, colors, and footer'
];

export const ComparisonSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Before vs. After Getflowetic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI agencies that switch stop spending time on manual reporting and start charging for professional client access.
          </p>
        </motion.div>

        {/* Comparison Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                {/* Other Tools Column */}
                <div className="p-6 md:p-8 bg-muted/50">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-6">
                    Without Getflowetic
                  </h3>
                  <ul className="space-y-4">
                    {otherToolsPainPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-3 h-3 text-destructive" />
                        </div>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Flowetic Column */}
                <div className="p-6 md:p-8 bg-card border-l-4 border-primary">
                  <h3 className="text-lg font-semibold text-primary mb-6">
                    With Getflowetic
                  </h3>
                  <ul className="space-y-4">
                    {floweticBenefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
