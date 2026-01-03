import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import platform logos
import postgresqlLogo from '@/assets/logos/postgresql.svg';
import mysqlLogo from '@/assets/logos/mysql.svg';
import mongodbLogo from '@/assets/logos/mongodb.svg';
import googleCloudLogo from '@/assets/logos/google-cloud.svg';
import awsLogo from '@/assets/logos/aws.svg';
import redisLogo from '@/assets/logos/redis.svg';
import slackLogo from '@/assets/logos/slack.svg';
import stripeLogo from '@/assets/logos/stripe.svg';
import snowflakeLogo from '@/assets/logos/snowflake.svg';
import salesforceLogo from '@/assets/logos/salesforce.svg';
import hubspotLogo from '@/assets/logos/hubspot.svg';
import tableauLogo from '@/assets/logos/tableau.svg';

const integrations = [
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'Stripe', logo: stripeLogo },
  { name: 'Google Cloud', logo: googleCloudLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Salesforce', logo: salesforceLogo },
  { name: 'HubSpot', logo: hubspotLogo },
  { name: 'Snowflake', logo: snowflakeLogo },
  { name: 'Redis', logo: redisLogo },
  { name: 'Tableau', logo: tableauLogo },
  { name: 'Slack', logo: slackLogo },
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
              <div className="animate-marquee-vertical hover:[animation-play-state:paused] flex flex-col gap-3">
                {duplicatedIntegrations.map((integration, index) => (
                  <div
                    key={`${integration.name}-${index}`}
                    className="flex items-center gap-4 bg-card rounded-xl px-4 py-3 border shadow-sm"
                  >
                    {/* Logo */}
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-background p-1.5">
                      <img 
                        src={integration.logo} 
                        alt={integration.name} 
                        className="w-full h-full object-contain"
                      />
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
