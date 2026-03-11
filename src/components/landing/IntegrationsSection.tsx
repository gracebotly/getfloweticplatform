import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import platform logos
import stripeLogo from '@/assets/logos/stripe.svg';

const integrations = [
  { name: 'Vapi', description: 'Voice AI agents' },
  { name: 'Retell AI', description: 'Voice agents & analytics' },
  { name: 'Make', description: 'Workflow automation' },
  { name: 'n8n', description: 'Open-source automation' },
  { name: 'Stripe', description: 'Payment infrastructure', logo: stripeLogo },
];

const IntegrationCard = ({ integration }: { integration: typeof integrations[0] }) => (
  <div className="flex items-center gap-4 bg-card rounded-xl px-4 py-3 border shadow-sm">
    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-background p-1.5">
      {integration.logo ? (
        <img
          src={integration.logo}
          alt={integration.name}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-xs font-semibold text-foreground">{integration.name}</span>
      )}
    </div>
    <div className="flex-1">
      <p className="text-foreground font-medium">{integration.name}</p>
      <p className="text-xs text-muted-foreground">{integration.description}</p>
    </div>
    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
  </div>
);

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
                Plug In. Don&apos;t Start Over.
              </h2>
              <p className="text-muted-foreground mb-8">
                Getflowetic connects to the four platforms AI agencies use most. Your existing agents and workflows become client-ready products — nothing needs to be rebuilt.
              </p>
              <Link to="/auth">
                <Button className="rounded-full">Connect Your Stack</Button>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                More integrations coming soon — Voiceflow, AgentOps, and more.
              </p>
            </motion.div>

            {/* Right - Vertical Marquee with Real Logos */}
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
              <div className="flex flex-col group">
                <div className="flex flex-col gap-3 animate-marquee-vertical group-hover:[animation-play-state:paused]">
                  {integrations.map((integration) => (
                    <IntegrationCard key={integration.name} integration={integration} />
                  ))}
                </div>
                <div className="flex flex-col gap-3 animate-marquee-vertical group-hover:[animation-play-state:paused]" aria-hidden="true">
                  {integrations.map((integration) => (
                    <IntegrationCard key={integration.name} integration={integration} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
