"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const sectionAnchors: Record<string, string> = {
  'How It Works': '#how-it-works',
  'Features': '#features',
  'Integrations': '#integrations',
  'Pricing': '#pricing',
  'FAQ': '#faq',
};

const footerLinks = {
  Sections: ['How It Works', 'Features', 'Integrations', 'Pricing', 'FAQ'],
  Information: ['Blog', 'Cookies', 'Contact'],
};

export const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section with Decorative Elements */}
        <div className="relative mb-16 pb-16 border-b border-background/10">
          {/* Floating Decorative Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -12 }}
            whileInView={{ opacity: 1, x: 0, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-4 md:left-16 top-0 hidden md:block"
          >
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-background/20 w-40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-sm text-background/80">Portals Live</span>
              </div>
              <div className="text-2xl font-bold text-background">47</div>
              <div className="text-xs text-background/60">Across agencies</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-4 md:right-16 top-8 hidden md:block"
          >
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-background/20 w-44">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-background/80">Avg. Client MRR</span>
              </div>
              <div className="text-2xl font-bold text-background">$850</div>
              <div className="text-xs text-background/60">Per portal sold</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-8 md:right-32 bottom-24 hidden lg:block"
          >
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-3 border border-background/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center text-xs font-bold">✓</div>
                <span className="text-sm text-background/80">Report sent!</span>
              </div>
            </div>
          </motion.div>

          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Turn Your AI Agents Into a Product?
            </h2>
            <p className="text-background/70 mb-8 max-w-lg mx-auto">
              Connect your first platform, get a white-labeled client portal, and start charging — in under 60 seconds.
            </p>
            <Link href="https://app.getflowetic.com/signup">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Get Started — No Card Required
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-semibold">Getflowetic</span>
            </Link>
            <p className="text-background/60 text-sm">
              White-label AI services for automation agencies
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {link === 'Contact' ? (
                      <Link
                        href="/contact"
                        className="text-background/60 hover:text-background transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    ) : link === 'Blog' ? (
                      <Link
                        href="/blog"
                        className="text-background/60 hover:text-background transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    ) : link === 'FAQ' ? (
                      <a
                        href="#faq"
                        className="text-background/60 hover:text-background transition-colors text-sm"
                      >
                        {link}
                      </a>
                    ) : (
                      <a
                        href={
                          category === 'Sections'
                            ? sectionAnchors[link] ?? '#'
                            : '#'
                        }
                        className="text-background/60 hover:text-background transition-colors text-sm"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2026 Getflowetic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
