"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus T.',
    role: 'Founder, Voice AI Agency',
    content: 'I connected my Vapi account and had a white-labeled dashboard live for my first client in under 5 minutes. They thought I built it from scratch. Worth every dollar.',
  },
  {
    name: 'Priya K.',
    role: 'AI Automation Consultant',
    content: 'My clients used to ask me weekly how their workflows were performing. Now they log into their own portal and see everything in real-time. The questions stopped.',
  },
  {
    name: 'James R.',
    role: 'n8n Automation Agency Owner',
    content: 'The Stripe integration alone saved me 3 hours a month in invoicing. Clients just pay through the portal. Everything is automated. It basically runs itself.',
  },
  {
    name: 'Yemi A.',
    role: 'Founder, Make.com Specialist Agency',
    content: 'I was charging $500/month for clients with zero visibility into their automations. Now I charge $750 and give them a dashboard. Nobody has questioned the price increase.',
  },
  {
    name: 'Tyler M.',
    role: 'Retell AI Partner',
    content: 'The white-labeling is complete. My clients see my logo, my colors, my domain. Getflowetic is completely invisible. That\'s exactly what I needed.',
  },
  {
    name: 'Sofia L.',
    role: 'AI Agency Owner',
    content: 'I used to send monthly PDF reports manually. Now clients have live dashboards. My agency looks 10x more professional and I spend zero time on reporting.',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-80 md:w-96">
    <div className="bg-card rounded-2xl p-6 border h-full flex flex-col">
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <p className="text-muted-foreground flex-1 mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
          <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
        </div>
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
);

export const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

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
            Why AI Agencies Choose <span className="text-primary">Getflowetic</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Agencies are replacing custom dashboards and Notion docs with branded portals their clients actually pay for.
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
            className="flex group"
          >
            <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
