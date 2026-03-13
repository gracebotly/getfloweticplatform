import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Getflowetic — the rules governing your use of our platform.',
  alternates: { canonical: 'https://getflowetic.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: March 13, 2026</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you,"
            or "your") and Getflowetic ("Company," "we," "us," or "our") governing your access to and use of
            the Getflowetic platform available at{' '}
            <a href="https://getflowetic.com" className="text-primary hover:underline">getflowetic.com</a>{' '}
            and{' '}
            <a href="https://app.getflowetic.com" className="text-primary hover:underline">app.getflowetic.com</a>{' '}
            (collectively, the "Service").
          </p>
          <p className="mt-3">
            By creating an account or using the Service in any way, you confirm that you have read,
            understood, and agree to be bound by these Terms and our{' '}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
            If you do not agree, you may not use the Service. You must be at least 18 years old
            and authorized to enter into this agreement on behalf of yourself or your business.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
          <p>
            Getflowetic is a white-label client portal platform for AI automation agencies. The Service
            allows agencies to connect third-party automation platforms (including Vapi, Retell, Make, and n8n),
            generate branded client dashboards, and collect subscription payments from their clients via
            Stripe Connect.
          </p>
          <p className="mt-3">
            <strong>Getflowetic is a portal layer, not a replacement for underlying platforms.</strong>{' '}
            We do not guarantee the availability, performance, or accuracy of data from Vapi, Retell,
            Make, n8n, or any other third-party platform you connect. Interruptions in those platforms
            will affect data displayed in client portals, and Getflowetic bears no liability for such interruptions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Account Registration</h2>
          <p>
            You must create an account to use the Service. You agree to provide accurate, current, and complete
            information during registration and to keep that information up to date. You are responsible for
            maintaining the confidentiality of your account credentials and for all activity that occurs under
            your account. You must notify us immediately at{' '}
            <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">hello@getflowetic.com</a>{' '}
            if you suspect unauthorized access to your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Subscriptions, Billing, and Fees</h2>

          <h3 className="text-base font-semibold text-foreground mb-2">4.1 Subscription Plans</h3>
          <p>
            Getflowetic offers paid subscription plans billed on a monthly basis. Current plan pricing
            is displayed on the{' '}
            <a href="/#pricing" className="text-primary hover:underline">Pricing page</a>.
            Prices are in US dollars and are subject to change with 30 days&apos; advance notice to active subscribers.
          </p>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.2 Free Trial</h3>
          <p>
            New accounts receive a free trial period as described on the Pricing page at the time of registration.
            Trial terms may vary. No card is required to begin a trial, but adding a payment method may extend
            your trial period. At the end of your trial, your account will be automatically charged the
            applicable subscription fee unless you cancel before the trial ends.
          </p>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.3 Platform Fees</h3>
          <p>
            In addition to your subscription fee, Getflowetic charges a platform fee on client payments
            processed through your connected Stripe account. The applicable rate depends on your plan:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Agency plan:</strong> 5% platform fee on client payments</li>
            <li><strong>Scale plan:</strong> 2% platform fee on client payments</li>
            <li><strong>Enterprise plan:</strong> No platform fee (custom terms apply)</li>
          </ul>
          <p className="mt-3">
            Platform fees are automatically deducted from client payments at the time of transaction.
            You acknowledge and accept these fees as a condition of using Stripe Connect through the Service.
          </p>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.4 Payment Processing</h3>
          <p>
            Subscription fees are processed by Stripe. By subscribing, you authorize Getflowetic to charge
            your payment method on a recurring monthly basis until you cancel. You must provide a valid
            payment method and keep it current. If a payment fails, your account may be suspended or downgraded.
          </p>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.5 Cancellation and Refunds</h3>
          <p>
            You may cancel your subscription at any time through your account settings. Cancellation takes
            effect at the end of your current billing period — you retain access to the Service until that date.
            Subscription fees are non-refundable except as required by applicable law or at our sole discretion
            on a case-by-case basis. To request a refund, contact{' '}
            <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">hello@getflowetic.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Clients and Client Portals</h2>
          <p>
            You are solely responsible for your relationships with your clients. Getflowetic provides
            the technical infrastructure for client portals, but you are the service provider to your clients.
            You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>You have the right and authority to offer services to your clients using the Service</li>
            <li>You will comply with all applicable laws governing your client relationships, including data protection laws</li>
            <li>You will not use the Service to defraud, mislead, or harm your clients</li>
            <li>Your clients' use of portals is subject to your own terms and privacy policies, which you are responsible for providing</li>
          </ul>
          <p className="mt-3">
            Getflowetic is not a party to agreements between you and your clients and bears no liability
            for disputes arising from those relationships.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Violate any applicable local, state, national, or international law or regulation</li>
            <li>Transmit any content that is unlawful, harmful, defamatory, or fraudulent</li>
            <li>Attempt to gain unauthorized access to any part of the Service or its systems</li>
            <li>Reverse engineer, decompile, or extract source code from the Service</li>
            <li>Use the Service to build a competing product or service</li>
            <li>Circumvent or attempt to circumvent platform fees owed under these Terms</li>
            <li>Resell access to the Service without our written permission</li>
          </ul>
          <p className="mt-3">
            We reserve the right to suspend or terminate your account immediately for violations of this section.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Intellectual Property</h2>
          <p>
            The Service, including its software, design, and content (excluding content you provide),
            is owned by Getflowetic and protected by copyright, trademark, and other intellectual property laws.
            You are granted a limited, non-exclusive, non-transferable license to use the Service for your
            internal business purposes during your subscription term.
          </p>
          <p className="mt-3">
            You retain ownership of all content, branding assets, and data you upload to the Service.
            By uploading content, you grant Getflowetic a limited license to store, process, and display
            that content solely to provide the Service to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Integrations</h2>
          <p>
            The Service integrates with third-party platforms including Vapi, Retell, Make, n8n, and Stripe.
            Your use of those platforms is governed entirely by their own terms of service and privacy policies.
            Getflowetic makes no representations about those platforms and is not responsible for their
            availability, accuracy, security, or actions. If a third-party platform changes its API or
            discontinues service, Getflowetic will use commercially reasonable efforts to maintain functionality
            but cannot guarantee uninterrupted integration.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE
            OF HARMFUL COMPONENTS. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GETFLOWETIC AND ITS OFFICERS, DIRECTORS,
            EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED
            TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES.
          </p>
          <p className="mt-3">
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE
            TERMS OR THE SERVICE EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING
            THE CLAIM OR (B) ONE HUNDRED US DOLLARS ($100).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Getflowetic and its affiliates, officers,
            directors, employees, and agents from and against any claims, liabilities, damages, losses,
            and expenses (including reasonable legal fees) arising out of or related to: (a) your use of
            the Service in violation of these Terms; (b) your relationship with your clients; (c) any content
            you submit or transmit through the Service; or (d) your violation of any applicable law or
            third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">12. Termination</h2>
          <p>
            We may suspend or terminate your account and access to the Service at any time, with or without
            cause, with or without notice, at our sole discretion. Upon termination, your right to use the
            Service ceases immediately. We will retain your data for 30 days following termination in case
            you wish to export it, after which it will be deleted in accordance with our{' '}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
          <p className="mt-3">
            You may terminate your account at any time by contacting us at{' '}
            <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">hello@getflowetic.com</a>{' '}
            or through your account settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">13. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States,
            without regard to conflict of law principles. Any dispute arising out of or relating to these Terms
            or the Service shall first be attempted to be resolved through good-faith negotiation. If unresolved
            within 30 days, disputes shall be submitted to binding arbitration under the rules of the American
            Arbitration Association (AAA), conducted in English. The arbitration award shall be final and
            binding. Nothing in this section prevents either party from seeking emergency injunctive relief
            in a court of competent jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">14. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. When we make material changes, we will
            update the "Last updated" date at the top of this page and notify active subscribers via email
            at least 14 days before the changes take effect. Your continued use of the Service after the
            effective date constitutes your acceptance of the updated Terms. If you do not agree to the
            updated Terms, you must stop using the Service and cancel your subscription before the
            effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">15. Miscellaneous</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and
            Getflowetic regarding the Service and supersede all prior agreements. If any provision of these
            Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of
            that right or provision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">16. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="mt-3">
            <strong>Getflowetic</strong><br />
            Email:{' '}
            <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">
              hello@getflowetic.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
