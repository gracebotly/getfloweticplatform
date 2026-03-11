import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What does "white-label" mean exactly?',
    answer: 'It means your client portals show your agency\'s branding — your logo, your colors, your domain — with zero mention of Getflowetic. Your clients think you built the platform. The only time Getflowetic branding appears is during your free trial. The moment you subscribe, it\'s gone.',
  },
  {
    question: 'Do my clients need accounts on Vapi, Retell, Make, or n8n?',
    answer: 'No. Your clients only ever see the portal you share with them. They log in to a branded dashboard — they never touch, see, or even know about the underlying platforms you use. All the tech stays on your side.',
  },
  {
    question: 'How does client billing work?',
    answer: 'You connect your own Stripe account to Getflowetic via Stripe Connect. When you gate a client portal behind a payment, your clients pay you directly — the money goes to your Stripe account. Getflowetic automatically collects a small platform fee (5% on Starter, 2% on Pro).',
  },
  {
    question: 'What happens during the free trial?',
    answer: 'Starter comes with a 7-day free trial — no card required. Pro comes with a 14-day free trial with a card on file. During the trial, your client portals show Getflowetic branding. The moment you subscribe, they flip to your brand immediately.',
  },
  {
    question: 'How fast can I get my first portal live?',
    answer: 'Most agencies have their first white-labeled portal live within 60 seconds of connecting their platform. You paste your API key, our wizard walks you through portal setup, and you share a link. That\'s it.',
  },
  {
    question: 'Can I charge different amounts to different clients?',
    answer: 'Yes. Every portal you create can have its own pricing — free access via magic link, or a custom monthly subscription amount gated by Stripe. You set the price per portal.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'Currently: Vapi, Retell AI, Make, and n8n. These cover the vast majority of AI voice agent and automation agency workflows. More integrations — including Voiceflow and others — are on the roadmap.',
  },
];

export const FAQSection = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="faq" ref={ref} className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-center">
            Everything agencies ask before switching from custom dashboards and manual reporting.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
