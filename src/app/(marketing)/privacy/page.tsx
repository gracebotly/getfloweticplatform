import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Getflowetic — how we collect, use, and protect your data.',
  alternates: { canonical: 'https://getflowetic.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: March 13, 2026</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
          <p>
            Getflowetic ("Company," "we," "us," or "our") operates the website located at{' '}
            <a href="https://getflowetic.com" className="text-primary hover:underline">getflowetic.com</a>{' '}
            and the web application at{' '}
            <a href="https://app.getflowetic.com" className="text-primary hover:underline">app.getflowetic.com</a>{' '}
            (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our Service. Please read this policy carefully. If you do not agree with its
            terms, please discontinue use of the Service.
          </p>
          <p className="mt-3">
            This policy applies to all users of Getflowetic, including agency operators who create client portals
            and their end clients who access those portals.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>

          <h3 className="text-base font-semibold text-foreground mb-2">2.1 Information You Provide Directly</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name and email address (account registration)</li>
            <li>Payment information — processed and stored securely by Stripe; we do not store full card numbers</li>
            <li>API keys for third-party platforms (Vapi, Retell, Make, n8n) — stored encrypted and used solely to connect your account</li>
            <li>Business name, logo, and branding assets you upload for white-label portals</li>
            <li>Communications you send to us at hello@getflowetic.com</li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">2.2 Information Collected Automatically</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address, browser type, operating system, and device identifiers</li>
            <li>Pages visited, time spent on pages, and referring URLs</li>
            <li>Usage data including portal creation events, workflow execution counts, and feature interactions</li>
            <li>Session cookies and authentication tokens</li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">2.3 Information from Third-Party Platforms</h3>
          <p>
            When you connect a third-party platform (Vapi, Retell, Make, or n8n) using your API key,
            Getflowetic retrieves metadata about your agents and workflows — such as names, execution counts,
            and performance statistics — solely to display that data in your client portals. We do not access,
            store, or process the underlying content of your automations beyond what is necessary to render dashboard views.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>To create and manage your Getflowetic account</li>
            <li>To provision, operate, and maintain white-label client portals</li>
            <li>To process subscription payments and platform fee transactions through Stripe</li>
            <li>To communicate with you about your account, billing, and Service updates</li>
            <li>To provide customer support</li>
            <li>To detect, prevent, and address security incidents and fraud</li>
            <li>To analyze aggregate usage patterns and improve the Service</li>
            <li>To comply with applicable legal obligations</li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information to third parties. We do not use your data for
            cross-context behavioral advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. How We Share Your Information</h2>
          <p>We share your information only in the following circumstances:</p>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.1 Service Providers</h3>
          <p>
            We share data with trusted third-party vendors who help us operate the Service. These vendors
            are contractually bound to use your data only as directed and may not use it for their own purposes.
            Current service providers include:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Stripe</strong> — payment processing and subscription management</li>
            <li><strong>Supabase</strong> — database hosting and authentication</li>
            <li><strong>Vercel</strong> — application hosting and content delivery</li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.2 Third-Party Platforms You Connect</h3>
          <p>
            When you connect Vapi, Retell, Make, or n8n, your API key is transmitted to those platforms
            to retrieve your agent data. Your use of those platforms is governed by their respective
            privacy policies and terms of service.
          </p>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.3 Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law, court order, or governmental
            authority, or if we believe in good faith that disclosure is necessary to protect our rights,
            your safety, or the safety of others.
          </p>

          <h3 className="text-base font-semibold text-foreground mb-2 mt-4">4.4 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of all or a portion of our assets, your information
            may be transferred as part of that transaction. We will notify you via email or a prominent notice
            on our website before your data is transferred and becomes subject to a different privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to operate and improve our Service. The types of cookies
            we use include:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Essential cookies</strong> — required for authentication and core Service functionality</li>
            <li><strong>Functional cookies</strong> — remember your preferences and session state</li>
            <li><strong>Analytics cookies</strong> — help us understand how the Service is used in aggregate</li>
          </ul>
          <p className="mt-3">
            You may disable cookies through your browser settings, though doing so may affect your ability
            to use certain features of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as necessary to
            provide the Service. Upon account deletion, we will delete or anonymize your personal data
            within 30 days, except where we are required to retain it for legal, tax, or fraud prevention purposes.
            Billing records may be retained for up to 7 years as required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption in transit (TLS),
            encryption at rest for sensitive fields (including API keys), and access controls limiting
            who on our team can access user data. However, no method of transmission over the internet
            or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
          <p className="mt-3">
            If you discover a security vulnerability, please report it to{' '}
            <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">hello@getflowetic.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Right to Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Right to Correction</strong> — request correction of inaccurate personal data</li>
            <li><strong>Right to Deletion</strong> — request deletion of your personal data</li>
            <li><strong>Right to Portability</strong> — request your data in a machine-readable format</li>
            <li><strong>Right to Object</strong> — object to processing of your data for certain purposes</li>
            <li><strong>Right to Non-Retaliation</strong> — exercise your rights without penalty or degraded service</li>
          </ul>
          <p className="mt-3">
            California residents may have additional rights under the California Consumer Privacy Act (CCPA/CPRA).
            We do not sell or share personal information as defined under the CCPA.
          </p>
          <p className="mt-3">
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">hello@getflowetic.com</a>.
            We will respond within 45 days. You will not be required to create an account to submit a request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Children's Privacy</h2>
          <p>
            The Service is intended for business use only and is not directed at individuals under the age of 18.
            We do not knowingly collect personal information from children. If you believe we have inadvertently
            collected information from a child, please contact us immediately at{' '}
            <a href="mailto:hello@getflowetic.com" className="text-primary hover:underline">hello@getflowetic.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the "Last updated"
            date at the top of this page and notify active users via email if the changes are material.
            Your continued use of the Service after the effective date of any update constitutes your
            acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
            please contact us at:
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
