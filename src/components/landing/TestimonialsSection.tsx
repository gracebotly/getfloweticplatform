import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    avatar: 'SC',
    content: 'Before Flowetic I spent hours compiling reports from different sources. Now I have everything in one place and can focus on actual analysis.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Data Analyst',
    avatar: 'MJ',
    content: 'The AI-powered dashboards are incredible. I describe what I need, and Flowetic builds it for me. My productivity has tripled.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Startup Founder',
    avatar: 'ER',
    content: 'Setting up data pipelines used to take my team weeks. With Flowetic, we connected all our sources in a single afternoon.',
  },
  {
    name: 'David Park',
    role: 'Operations Lead',
    avatar: 'DP',
    content: 'The automated alerts have been a game-changer. We catch issues before they become problems, and our response time has improved dramatically.',
  },
];

export const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-muted/30">
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

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex-shrink-0 w-80 md:w-96 snap-center"
              >
                <div className="bg-card rounded-2xl p-6 border h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground flex-1 mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
