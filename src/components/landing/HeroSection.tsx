"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import dashboardPreview from '@/assets/flowetic-dashboard-screenshot.png';
import { useRef } from 'react';

const floatingLogos = [
  { name: 'Vapi', position: 'top-32 left-[10%]', delay: 0 },
  { name: 'Retell AI', position: 'top-24 right-[10%]', delay: 0.2 },
  { name: 'Make', position: 'top-72 left-[5%]', delay: 0.4 },
  { name: 'n8n', position: 'top-64 right-[8%]', delay: 0.6 },
];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Floating Brand Logos */}
      {floatingLogos.map((item, index) => (
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
            className="bg-card px-4 py-3 rounded-2xl shadow-xl border"
          >
            <span className="text-sm font-semibold text-foreground">{item.name}</span>
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
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
                alt="User" 
                className="w-6 h-6 rounded-full border-2 border-background object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                alt="User" 
                className="w-6 h-6 rounded-full border-2 border-background object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                alt="User" 
                className="w-6 h-6 rounded-full border-2 border-background object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              Trusted by 10+ AI automation agencies
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
            Your AI Agent.
            <br />
            <span className="text-primary">Your Brand. Your Revenue.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your Vapi, Retell, Make, or n8n workflows — get a fully white-labeled client portal in 60 seconds. Your clients pay you directly via Stripe. Your brand. Their dashboard. Your revenue.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center mt-10"
        >
          <Link href="https://app.getflowetic.com/auth">
            <Button size="lg" className="rounded-full px-8 text-base">
              Start Free — No Card Required
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">7-day free trial · White-label from day one</p>
        </motion.div>

        {/* Dashboard Preview with 3D Scroll Animation */}
        <div ref={containerRef} className="mt-16" style={{ perspective: '1200px' }}>
          <motion.div
            style={{
              rotateX,
              scale,
              opacity,
              transformOrigin: 'center bottom',
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img 
              src={dashboardPreview} 
              alt="Getflowetic — White-labeled client portal dashboard for AI automation agencies" 
              className="w-full h-auto rounded-2xl shadow-2xl border mx-auto max-w-5xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
