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
    question: 'How does the free trial work?',
    answer: 'You get full access to all features for 14 days. No credit card required. After the trial, you can choose to subscribe or your account will be downgraded to the free tier with limited features.',
  },
  {
    question: 'What data sources can I connect?',
    answer: 'Flowetic supports all major databases (PostgreSQL, MySQL, MongoDB), cloud services (AWS, GCP, Azure), SaaS tools (Stripe, HubSpot, Salesforce), and custom APIs. We\'re adding new integrations weekly.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption for all data in transit and at rest. We\'re SOC 2 Type II compliant and never store your raw data—only the aggregated metrics you choose to track.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access continues until the end of your billing period.',
  },
  {
    question: 'Do you offer team plans?',
    answer: 'Yes! The Pro plan includes up to 5 team members. For larger teams, contact us for enterprise pricing with custom limits and features.',
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
