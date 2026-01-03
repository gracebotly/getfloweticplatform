import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    content: 'Before Flowetic I spent hours compiling reports from different sources. Now I have everything in one place and can focus on actual analysis.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Data Analyst',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    content: 'The AI-powered dashboards are incredible. I describe what I need, and Flowetic builds it for me. My productivity has tripled.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Startup Founder',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face',
    content: 'Setting up data pipelines used to take my team weeks. With Flowetic, we connected all our sources in a single afternoon.',
  },
  {
    name: 'David Park',
    role: 'Operations Lead',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    content: 'The automated alerts have been a game-changer. We catch issues before they become problems, and our response time has improved dramatically.',
  },
  {
    name: 'Alex Thompson',
    role: 'Marketing Director',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    content: 'Finally, a tool that makes data accessible to non-technical users. Our marketing team now makes data-driven decisions without waiting on engineering.',
  },
  {
    name: 'Lisa Wang',
    role: 'Finance Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    content: 'The real-time sync across all our financial tools has eliminated manual reconciliation. We save 20+ hours every month.',
  },
];

export const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Teams <span className="text-primary">❤️</span> Flowetic
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how teams are transforming their data workflows
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <div className="bg-card rounded-2xl p-6 border h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground flex-1 mb-6">
                    "{testimonial.content}"
                  </p>
                    <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
