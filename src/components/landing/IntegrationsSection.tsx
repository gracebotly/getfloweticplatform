import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const integrations = [
  { name: 'PostgreSQL', color: 'bg-blue-500' },
  { name: 'MySQL', color: 'bg-orange-500' },
  { name: 'Stripe', color: 'bg-purple-500' },
  { name: 'Google', color: 'bg-red-500' },
  { name: 'AWS', color: 'bg-amber-500' },
  { name: 'MongoDB', color: 'bg-green-500' },
];

export const IntegrationsSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="integrations" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Integrations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Connect Any Data Source
              </h2>
              <p className="text-muted-foreground mb-8">
                From databases to APIs to cloud services, connect all your data sources in seconds. No complex setup required.
              </p>
              <Link to="/auth">
                <Button className="rounded-full">Get Started Now</Button>
              </Link>
            </motion.div>

            {/* Right - Integration Icons */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 bg-card rounded-xl p-4 border"
                >
                  <div className={`${integration.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-foreground">{integration.name}</span>
                  <div className="flex-1 bg-muted rounded-full h-2 ml-4">
                    <div 
                      className={`${integration.color} h-2 rounded-full`} 
                      style={{ width: `${60 + Math.random() * 40}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
