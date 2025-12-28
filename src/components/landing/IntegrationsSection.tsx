import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import integrationsVisual from '@/assets/integrations-visual.png';

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

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={integrationsVisual} 
                alt="Connected data platforms and integrations visualization" 
                className="w-full h-auto"
              />
              {/* Floating integration badges */}
              <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[200px]">
                {integrations.slice(0, 3).map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                    className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5 border shadow-lg"
                  >
                    <div className={`${integration.color} w-5 h-5 rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-[10px]">
                        {integration.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-foreground">{integration.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
