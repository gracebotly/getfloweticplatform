import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Database, BarChart3, Users, Zap } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import dashboardPreview from '@/assets/flowetic-dashboard-screenshot.png';

const floatingIcons = [
  { icon: Database, position: 'top-32 left-[10%]', delay: 0, color: 'bg-foreground' },
  { icon: BarChart3, position: 'top-24 right-[10%]', delay: 0.2, color: 'bg-destructive' },
  { icon: Users, position: 'top-72 left-[5%]', delay: 0.4, color: 'bg-primary' },
  { icon: Zap, position: 'top-64 right-[8%]', delay: 0.6, color: 'bg-purple-500' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: item.delay + 0.5,
            ease: 'easeOut',
          }}
          className={`absolute ${item.position} hidden lg:flex`}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
            className={`${item.color} p-4 rounded-2xl shadow-xl`}
          >
            <item.icon className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary" />
              <div className="w-6 h-6 rounded-full bg-destructive" />
              <div className="w-6 h-6 rounded-full bg-warning" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Trusted by 500+ data teams
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Unified Data Control.
            <br />
            <span className="text-primary">Smarter Insights.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect all your data sources, build powerful dashboards, and get actionable insights—all in one place.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center mt-10"
        >
          <Link to="/auth">
            <Button size="lg" className="rounded-full px-8 text-base">
              Try for Free
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">No card required</p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="relative bg-card rounded-2xl shadow-2xl border overflow-hidden mx-auto max-w-5xl">
            <div className="bg-muted/50 p-4 border-b flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-4 text-sm text-muted-foreground">Flowetic Dashboard</span>
            </div>
            <div className="p-2">
              <img 
                src={dashboardPreview} 
                alt="Flowetic Dashboard Preview showing analytics charts and data visualizations" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
