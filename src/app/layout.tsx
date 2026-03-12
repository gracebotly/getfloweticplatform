import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Getflowetic — White-Label AI Agent Portals for Automation Agencies",
    template: "%s | Getflowetic",
  },
  description:
    "Turn your Vapi, Retell, Make, or n8n automations into branded client portals in 60 seconds. White-label dashboards, Stripe billing, and real-time analytics for AI automation agencies.",
  metadataBase: new URL("https://getflowetic.com"),
  openGraph: {
    type: "website",
    siteName: "Getflowetic",
    title: "Getflowetic — White-Label AI Agent Portals for Automation Agencies",
    description:
      "Turn your Vapi, Retell, Make, or n8n automations into branded client portals in 60 seconds.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Getflowetic",
    title: "Getflowetic — White-Label AI Agent Portals for Automation Agencies",
    description:
      "Turn your Vapi, Retell, Make, or n8n automations into branded client portals in 60 seconds.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://getflowetic.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
