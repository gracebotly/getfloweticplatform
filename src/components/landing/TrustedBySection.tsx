import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

const logos = [
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'Google Cloud', logo: googleCloudLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Redis', logo: redisLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Stripe', logo: stripeLogo },
  { name: 'Snowflake', logo: snowflakeLogo },
  { name: 'Salesforce', logo: salesforceLogo },
  { name: 'HubSpot', logo: hubspotLogo },
  { name: 'Tableau', logo: tableauLogo },
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
          Built for freelancers, consultants, and small businesses.
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
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee gap-16 items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
            {logos.map((logo) => (
              <div key={logo.name} className="flex-shrink-0 px-4">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
