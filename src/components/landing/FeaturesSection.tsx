import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Database, Sparkles, Mail, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Unified Data Sources',
    description: 'Connect all your databases, APIs, and services in one place. Manage everything from a single dashboard.',
    color: 'bg-amber-50 dark:bg-amber-950',
    iconBg: 'bg-amber-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Describe what you want in plain English and let our AI build dashboards and reports automatically.',
    color: 'bg-blue-50 dark:bg-blue-950',
    iconBg: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    icon: Mail,
    title: 'Automated Alerts',
    description: 'Set up email or Slack notifications for your metrics. Never miss critical changes in your data.',
    color: 'bg-green-50 dark:bg-green-950',
    iconBg: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
  },
  {
    icon: CreditCard,
    title: 'One-Click Sharing',
    description: 'Share dashboards with clients and teammates. Control access with simple permission settings.',
    color: 'bg-purple-50 dark:bg-purple-950',
    iconBg: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
];

export const FeaturesSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need To
            <br />
            <span className="text-primary">Control Your Data</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your business with unified metrics and AI-powered analytics—all in one place.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`${feature.color} rounded-2xl p-8 border`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 relative">
                  <div className="h-40 rounded-xl overflow-hidden border">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className={`${feature.iconBg} p-3 rounded-xl absolute -bottom-4 left-4 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
