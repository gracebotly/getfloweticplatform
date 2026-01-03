import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const integrations = [
  { name: 'PostgreSQL', color: 'bg-blue-500', letter: 'P' },
  { name: 'MySQL', color: 'bg-orange-500', letter: 'M' },
  { name: 'MongoDB', color: 'bg-green-600', letter: 'M' },
  { name: 'Stripe', color: 'bg-purple-500', letter: 'S' },
  { name: 'Google Analytics', color: 'bg-amber-500', letter: 'G' },
  { name: 'AWS', color: 'bg-orange-600', letter: 'A' },
  { name: 'Salesforce', color: 'bg-sky-500', letter: 'S' },
  { name: 'HubSpot', color: 'bg-orange-500', letter: 'H' },
  { name: 'Snowflake', color: 'bg-cyan-500', letter: 'S' },
  { name: 'BigQuery', color: 'bg-blue-600', letter: 'B' },
  { name: 'Tableau', color: 'bg-indigo-500', letter: 'T' },
  { name: 'Slack', color: 'bg-purple-600', letter: 'S' },
];

const duplicatedIntegrations = [...integrations, ...integrations];

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

            {/* Right - Vertical Marquee */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] overflow-hidden"
            >
              {/* Top gradient fade */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-muted/30 to-transparent z-10 pointer-events-none" />
              
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-muted/30 to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling container */}
              <div className="animate-marquee-vertical hover:[animation-play-state:paused] flex flex-col gap-3">
                {duplicatedIntegrations.map((integration, index) => (
                  <div
                    key={`${integration.name}-${index}`}
                    className="flex items-center gap-4 bg-card rounded-xl px-4 py-3 border shadow-sm"
                  >
                    {/* Icon */}
                    <div className={`${integration.color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                      <span className="text-white font-bold text-sm">
                        {integration.letter}
                      </span>
                    </div>
                    
                    {/* Name */}
                    <span className="text-foreground font-medium flex-1">
                      {integration.name}
                    </span>
                    
                    {/* Accent dot */}
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
