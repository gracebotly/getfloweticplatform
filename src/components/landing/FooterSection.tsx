import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Support', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
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
                <span className="text-sm text-background/80">Connections</span>
              </div>
              <div className="text-2xl font-bold text-background">24</div>
              <div className="text-xs text-background/60">Active sources</div>
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
                <span className="text-sm text-background/80">Growth</span>
              </div>
              <div className="text-2xl font-bold text-background">+47%</div>
              <div className="text-xs text-background/60">This month</div>
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
              Ready to take control of your data?
            </h2>
            <p className="text-background/70 mb-8 max-w-lg mx-auto">
              Join thousands of teams using Flowetic to unify their data and gain actionable insights.
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Get Started Free
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-semibold">Flowetic</span>
            </Link>
            <p className="text-background/60 text-sm">
              Unified data control for modern teams.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Flowetic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
