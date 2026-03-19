import Link from "next/link";

const accent = "#3c83f5";
const accentLight = "#e8f0fe";
const accentBorder = "#93bbfa";
const border = "#e8e4e0";
const bg = "#faf9f7";
const card = "#ffffff";
const textPrimary = "#1a1a1a";
const textSecondary = "#555";
const textMuted = "#888";
const green = "#059669";
const red = "#dc2626";
const serif: React.CSSProperties = { fontFamily: "'Lora', Georgia, serif" };
const sans: React.CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" };

const p = (text: React.ReactNode, extra?: React.CSSProperties) => (
  <p style={{ ...serif, fontSize: "1rem", lineHeight: 1.85, color: textPrimary, marginBottom: "1.4rem", ...extra }}>{text}</p>
);

const h2 = (id: string, text: string) => (
  <h2 id={id} style={{ ...serif, fontSize: "1.45rem", fontWeight: 700, color: textPrimary, marginTop: "3rem", marginBottom: "0.9rem", paddingTop: "1rem", borderTop: `2px solid ${border}` }}>{text}</h2>
);

export function Blog2Content() {
  const toc = [
    { id: "can-you-white-label", label: "Can you white label n8n?" },
    { id: "embed-license", label: "What does n8n's white label license include?" },
    { id: "embed-pricing", label: "How much does n8n white label pricing cost?" },
    { id: "what-agencies-need", label: "What agencies actually need vs. what n8n offers" },
    { id: "recurring-revenue", label: "How to build recurring revenue without the embed license" },
    { id: "branded-dashboard", label: "How to give clients a branded n8n dashboard" },
    { id: "best-solution", label: "What is the best n8n white label solution for small agencies?" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div style={{ ...serif, color: textPrimary, lineHeight: 1.85 }}>

      {/* ── TABLE OF CONTENTS ── */}
      <nav style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: "1.25rem 1.5rem", margin: "1.5rem 0 2.5rem" }}>
        <p style={{ ...sans, fontSize: "0.8rem", fontWeight: 700, color: textMuted, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.6rem" }}>In this article</p>
        <ol style={{ ...sans, fontSize: "0.88rem", margin: 0, paddingLeft: "1.2rem", lineHeight: 2 }}>
          {toc.map(({ id, label }) => (
            <li key={id}><a href={`#${id}`} style={{ color: accent, textDecoration: "none" }}>{label}</a></li>
          ))}
        </ol>
      </nav>

      {/* ── LEAD ── */}
      {p(<>Can you <strong>white label n8n</strong>? Technically, yes. But n8n&apos;s official white-label path is an enterprise embed license that runs around $50,000 per year, requires a custom sales conversation, and was built for companies reselling n8n as part of their own software product. It&apos;s not built for a 3-person automation agency that wants to show a client what their workflows are doing.</>, { fontSize: "1.05rem" })}
      {p("For most agencies selling n8n workflows to clients, the real question isn't whether you can white-label the n8n editor. It's whether you can give your client a branded dashboard that shows them what their money is buying. Those are different problems. This guide covers both.")}

      {/* ── SECTION 1 ── */}
      {h2("can-you-white-label", "Can you white label n8n?")}
      {p("Yes, with a big asterisk.")}
      {p("n8n operates under a Sustainable Use License. You can self-host it for free and use it for your own internal business purposes. You can build workflows, run automations, connect APIs. All of that is free and legal.")}
      {p("The license draws a clear line when you start exposing n8n to external users. If you want to host n8n and let your clients log into the editor, or rebrand the n8n interface and sell access to it, you need their embed license. That's their commercial reselling path.")}
      {p("Here's the problem. Most automation agencies don't need their clients inside the n8n editor at all. Your client doesn't want to see workflow nodes and webhook configs. They want to see a dashboard that says their lead qualification automation ran 342 times last month with a 94% success rate. The n8n editor and a client-facing reporting portal are completely different products.")}
      {p("That distinction matters because it changes what you actually need to buy.")}

      {/* ── SECTION 2 ── */}
      {h2("embed-license", "What does n8n's white label license actually include?")}
      {p("n8n calls it the embed license. It's designed for software companies that want to build n8n into their own product and give end users access to the workflow editor under a different brand.")}
      {p("What you get:")}
      {[
        "Unlimited n8n instances, workflows, and executions",
        "Permission to remove n8n branding from the interface",
        "Permission to host the editor for your end users",
        "Direct support from n8n's team",
      ].map((item, i) => (
        <p key={i} style={{ ...sans, fontSize: "0.92rem", color: textSecondary, marginBottom: "0.5rem", paddingLeft: "1.2rem", position: "relative" as const }}>
          <span style={{ position: "absolute" as const, left: 0, color: accent }}>•</span> {item}
        </p>
      ))}
      {p("What it doesn't give you: a client-facing analytics dashboard, Stripe billing integration, or a way to display workflow performance to non-technical users. The embed license gives you the editor. Everything else is on you to build.", { marginTop: "1rem" })}
      {p("If you're a venture-backed SaaS company embedding n8n as a core part of your platform, the embed license makes sense. If you're an agency with 5 to 20 clients who just need to see what their automations are doing, it's overkill.")}

      {/* ── SECTION 3 ── */}
      {h2("embed-pricing", "How much does n8n white label pricing cost?")}
      {p("n8n doesn't publish embed pricing publicly. You have to contact their sales team for a custom quote. The price depends on execution volume.")}
      {p(<>Multiple sources in the n8n community, including posts on Skool&apos;s AI Automation Society, consistently cite approximately <strong>$50,000 per year</strong> as the starting point. That&apos;s regardless of your revenue. Whether you&apos;re making $5K/month or $50K/month, the embed license costs the same.</>)}

      {/* ── PRICING COMPARISON TABLE ── */}
      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Path", "Annual Cost", "What You Get", "Who It's For"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["n8n Embed License", "~$50,000/yr", "White-labeled editor, unlimited instances, direct support", "SaaS companies embedding n8n"],
              ["n8n Self-Hosted (free)", "$0 + server costs", "Full n8n editor for internal use, unlimited executions", "Agencies running workflows internally"],
              ["n8n Cloud Starter", "~$240/yr", "Hosted editor, 2,500 executions/month", "Solo builders testing n8n"],
              ["Dashboard layer (e.g. Getflowetic)", "$1,188/yr ($99/mo)", "Branded client portal with n8n data, Stripe billing, magic links", "Agencies charging clients for workflow access"],
            ] as const).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${border}`, verticalAlign: "top", background: i % 2 === 1 ? bg : card, fontWeight: j === 0 ? 700 : 400, fontSize: "0.84rem" }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {p("For a 5-person agency billing $10K/month, the embed license eats $4,200 per month before you've paid rent. A dashboard layer at $99/month pays for itself the moment one client pays $149 for portal access.")}

      {/* ── SECTION 4 ── */}
      {h2("what-agencies-need", "What do agencies actually need vs. what n8n natively offers?")}
      {p("This is where most agencies get confused. They search for \"n8n white label\" because they want to give their clients something professional. But what they actually need isn't white-labeled n8n. It's a reporting layer that sits on top of n8n.")}
      {p("Here's the disconnect:")}

      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["What agencies want", "What n8n provides natively", "The gap"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Branded portal clients log into", "Admin editor UI", "No client-facing view exists"],
              ["Execution reports in plain language", "Execution logs with technical details", "Logs aren't client-ready"],
              ["ROI metrics (hours saved, cost reduced)", "Success/failure counts", "No business context translation"],
              ["Stripe billing so clients pay monthly", "Nothing", "Zero billing infrastructure"],
              ["Per-client data isolation", "Single workspace", "No multi-tenant filtering"],
              ["60-second setup per new client", "Manual API configuration", "No setup wizard"],
            ] as const).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${border}`, verticalAlign: "top", background: i % 2 === 1 ? bg : card, fontWeight: j === 0 ? 700 : 400, fontSize: "0.84rem" }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {p("n8n is a brilliant workflow engine. It's not a client delivery tool. Agencies keep searching for white-label options because nobody has clearly explained this gap until now.")}
      {p(<>This same gap exists on the voice agent side too. If you&apos;re curious, there&apos;s a full breakdown in the <Link href="/blog/best-white-label-ai-dashboard-agencies" style={{ color: accent }}>best white-label AI dashboard comparison</Link>.</>)}

      {/* ── SECTION 5 ── */}
      {h2("recurring-revenue", "How do n8n agencies build recurring revenue without the enterprise embed license?")}
      {p("The model is simpler than most people think. You don't need the embed license. You don't need to let clients into the n8n editor. You need three things:")}

      {[
        { num: "1", title: "Self-host n8n for free.", body: "n8n's Community Edition runs on any server with Docker. Unlimited executions, zero license cost. Your only expense is the VPS, which starts at $5 to $20/month depending on load. This is where your workflows live. Your clients never see it." },
        { num: "2", title: "Build the workflows your clients need.", body: "Lead qualification, CRM enrichment, appointment booking, email sequences, invoice processing. Whatever the client is paying for. These run inside your n8n instance on your infrastructure." },
        { num: "3", title: "Add a branded dashboard layer on top.", body: "This is the part that turns invisible backend work into a visible, billable product. A dashboard that reads from n8n's API, shows execution data in plain English, and sits behind a Stripe paywall under your brand. The client logs in, sees their workflow performance, and pays you monthly for access." },
      ].map(({ num, title, body }) => (
        <div key={num} style={{ display: "flex", gap: "1rem", margin: "1.25rem 0" }}>
          <div style={{ ...sans, fontWeight: 800, fontSize: "1.3rem", color: accent, lineHeight: 1.4, flexShrink: 0, width: 28, textAlign: "center" as const }}>{num}</div>
          <div>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.95rem", color: textPrimary, marginBottom: "0.3rem" }}>{title}</p>
            <p style={{ ...serif, fontSize: "0.93rem", color: textSecondary, marginBottom: 0, lineHeight: 1.75 }}>{body}</p>
          </div>
        </div>
      ))}

      {p("That's it. Three layers. n8n handles the automation. The dashboard handles the client experience. Stripe handles the money.", { marginTop: "1.5rem" })}

      {/* ── REVENUE MATH ── */}
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: "1.5rem", margin: "2rem 0" }}>
        <p style={{ ...sans, fontSize: "0.78rem", fontWeight: 700, color: textMuted, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "0.75rem" }}>The recurring revenue math</p>
        <div style={{ ...sans, fontSize: "0.92rem", lineHeight: 2, color: textPrimary }}>
          <p style={{ marginBottom: "0.3rem" }}>n8n self-hosted: <strong>$0/month</strong> (free Community Edition)</p>
          <p style={{ marginBottom: "0.3rem" }}>VPS hosting: <strong>$20/month</strong> (handles 10+ client workflows easily)</p>
          <p style={{ marginBottom: "0.3rem" }}>Dashboard layer: <strong>$99/month</strong> (Getflowetic Starter)</p>
          <p style={{ marginBottom: "0.3rem", borderTop: `1px solid ${border}`, paddingTop: "0.5rem" }}>Your total cost: <strong>$119/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>&nbsp;</p>
          <p style={{ marginBottom: "0.3rem" }}>Client 1 pays: <strong>$149/month</strong> for dashboard access</p>
          <p style={{ marginBottom: "0.3rem" }}>Client 2 pays: <strong>$149/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>Client 3 pays: <strong>$149/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>Client 4 pays: <strong>$149/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>Client 5 pays: <strong>$149/month</strong></p>
          <p style={{ marginBottom: "0.3rem", borderTop: `1px solid ${border}`, paddingTop: "0.5rem" }}>Dashboard revenue: <strong style={{ color: green }}>$745/month</strong></p>
          <p style={{ marginBottom: 0 }}>Net margin: <strong style={{ color: green }}>$626/month</strong> (84% margin)</p>
        </div>
      </div>

      {p("And this is just the dashboard fee. Most agencies also charge a separate retainer for building and maintaining the workflows. The dashboard is a second revenue stream on top of your existing service fee.")}

      {/* ── SECTION 6 ── */}
      {h2("branded-dashboard", "How do you give clients a branded n8n dashboard?")}
      {p(<>Here&apos;s the step-by-step. This walkthrough uses <Link href="https://app.getflowetic.com/auth" style={{ color: accent }}>Getflowetic</Link> because it&apos;s currently the only platform with native n8n support. If another option launches, I&apos;ll update this section.</>)}

      {[
        { step: "Step 1", title: "Self-host n8n and build your workflows.", body: "If you haven't already, deploy n8n using Docker on a VPS. DigitalOcean, Hetzner, and Railway all work. Build the automation workflows your clients are paying for. Make sure they're running reliably before you show anything to a client." },
        { step: "Step 2", title: "Connect your n8n instance to Getflowetic.", body: "In Getflowetic's setup wizard, enter your n8n instance URL and API key. The platform pulls your workflow list and execution data automatically. Takes about 30 seconds." },
        { step: "Step 3", title: "Brand the portal.", body: "Upload your agency logo, pick your brand colors, name the portal. The client sees your identity on every page. No Getflowetic branding. No n8n branding. Just your agency." },
        { step: "Step 4", title: "Configure Stripe billing.", body: "Connect your Stripe account. Set the monthly price you want to charge for portal access. When the client opens the link, they hit a checkout page before seeing the dashboard. Payment goes directly to your Stripe account." },
        { step: "Step 5", title: "Send the magic link.", body: "Generate a secure link and send it to your client. They click, pay if required, and land on a branded dashboard showing execution counts, success rates, recent activity, and estimated ROI. No passwords, no onboarding friction." },
      ].map(({ step, title, body }) => (
        <div key={step} style={{ background: card, border: `1px solid ${border}`, borderRadius: 10, padding: "1.25rem 1.5rem", margin: "1rem 0", borderLeft: `4px solid ${accent}` }}>
          <p style={{ ...sans, fontSize: "0.72rem", fontWeight: 700, color: accent, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "0.2rem" }}>{step}</p>
          <p style={{ ...sans, fontWeight: 700, fontSize: "0.93rem", color: textPrimary, marginBottom: "0.4rem" }}>{title}</p>
          <p style={{ ...serif, fontSize: "0.9rem", color: textSecondary, marginBottom: 0, lineHeight: 1.75 }}>{body}</p>
        </div>
      ))}

      {p("Total time from connecting n8n to sharing the first client portal: under 5 minutes if your workflows are already running.")}

      {/* ── SECTION 7 ── */}
      {h2("best-solution", "What is the best n8n white label solution for small agencies?")}
      {p("If you're running n8n workflows for clients and want to give them a branded reporting experience, the options right now are:")}

      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Option", "Cost", "n8n Support", "Stripe Billing", "Setup Time"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Getflowetic", "$99/mo", true, true, "60 seconds"],
              ["n8n Embed License", "~$50K/yr", "Full editor", "Build your own", "Weeks"],
              ["Custom build (Bubble, Retool, etc.)", "$10K–$50K", "DIY via API", "DIY", "1–3 months"],
              ["Looker Studio / DashThis", "$0–$50/mo", false, false, "Hours"],
              ["VoiceAIWrapper", "$29/mo", false, true, "Hours"],
            ] as const).map((row, i) => (
              <tr key={i}>
                {(row as unknown as (string | boolean)[]).map((cell, j) => (
                  <td key={j} style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${border}`, verticalAlign: "top", background: i % 2 === 1 ? bg : card, fontWeight: j === 0 ? 700 : 400, fontSize: "0.84rem" }}>
                    {cell === true ? <span style={{ color: green, fontWeight: 700 }}>✓ Native</span>
                     : cell === false ? <span style={{ color: red, fontWeight: 700 }}>✗ None</span>
                     : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {p("Looker Studio and DashThis are generic reporting tools. You can technically wire them to n8n's API, but they're not built for this use case. There's no white-labeling, no Stripe billing, no per-client data isolation out of the box. You'd spend weeks building what a purpose-built tool does in a minute.")}
      {p("VoiceAIWrapper is solid, but it's voice-only. If your stack includes n8n, it can't represent that work in a client view.")}
      {p("The custom build path is always an option. But at $10K minimum and months of development time, it only makes sense once you've got 50+ clients and specific requirements that no existing tool covers. Don't build custom while you're still proving the model works.")}

      {/* ── FAQ ── */}
      {h2("faq", "Frequently asked questions")}
      <div style={{ marginTop: "1rem" }}>
        {[
          ["Can you white label n8n?", "Technically yes, through n8n's embed license. But it costs around $50,000/year and is designed for SaaS companies embedding the editor into their own products. For agencies that need a client-facing reporting portal, a dashboard layer like Getflowetic is the practical path. It connects to n8n's API and generates branded portals without requiring the embed license."],
          ["What does n8n's white label license actually include?", "The embed license lets you remove n8n branding, host the editor for end users, and integrate n8n into your own software. It includes unlimited instances, workflows, and executions. It does not include a client-facing dashboard, Stripe billing, or multi-tenant data isolation. Those are separate builds."],
          ["How much does n8n white label pricing cost?", "n8n doesn't publish embed pricing. Community sources consistently report approximately $50,000 per year as the starting point, with pricing based on execution volume. You need to contact n8n's sales team for a custom quote."],
          ["How do n8n agencies build recurring revenue without the embed license?", "Self-host n8n for free, build client workflows, then add a branded dashboard layer. Charge clients $149 to $299/month for portal access showing their workflow performance and ROI. Five clients at $149/month generates $745/month in recurring revenue from a $99/month tool investment."],
          ["Can I use n8n commercially without the embed license?", "Yes, for internal business purposes. n8n's Sustainable Use License allows free self-hosted use for your own operations. You cannot expose n8n's interface to external users or resell access to the editor without the embed license. A separate dashboard tool that reads n8n data via API is a different product."],
          ["How long does it take to set up a branded n8n dashboard?", "Under 60 seconds with Getflowetic once your n8n instance is running and your workflows are built. The setup wizard handles branding, workflow selection, Stripe billing, and magic link generation."],
          ["Is Getflowetic the only option for n8n agencies?", "For a purpose-built n8n client dashboard with white-labeling and billing, yes, right now. Alternatives are the embed license ($50K/year), a custom build ($10K+), or generic reporting tools that require manual API wiring and don't include billing."],
        ].map(([q, a]) => (
          <div key={q} style={{ borderBottom: `1px solid ${border}`, padding: "1.25rem 0" }}>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.97rem", marginBottom: "0.5rem" }}>{q}</p>
            <p style={{ ...serif, fontSize: "0.93rem", lineHeight: 1.75, color: textSecondary, marginBottom: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "3rem 0" }}/>

      {/* ── CLOSING ── */}
      {p("The n8n white-label question is really two questions disguised as one. Do you need to resell the n8n editor under your brand? That's the embed license, and it costs accordingly. Do you need to show clients what their n8n workflows are doing in a way that justifies a monthly fee? That's a dashboard layer, and it's a fraction of the cost.")}
      {p("Most agencies need the second thing. The workflows are already running. The value is already being delivered. What's missing is the visibility that turns project work into recurring revenue.")}
      {p(<>If you want to try it, <Link href="https://app.getflowetic.com/auth" style={{ color: accent, textDecoration: "underline", textUnderlineOffset: "3px" }}>Getflowetic has a free trial</Link>, no card required. Connect your n8n instance and have your first client portal live in under a minute.</>)}

    </div>
  );
}
