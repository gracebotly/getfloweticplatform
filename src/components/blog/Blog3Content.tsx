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
const amber = "#d97706";

const serif: React.CSSProperties = { fontFamily: "'Lora', Georgia, serif" };
const sans: React.CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" };

const p = (text: React.ReactNode, extra?: React.CSSProperties) => (
  <p style={{ ...serif, fontSize: "1rem", lineHeight: 1.85, color: textPrimary, marginBottom: "1.4rem", ...extra }}>{text}</p>
);

const h2 = (id: string, text: string) => (
  <h2 id={id} style={{ ...serif, fontSize: "1.45rem", fontWeight: 700, color: textPrimary, marginTop: "3rem", marginBottom: "0.9rem", paddingTop: "1rem", borderTop: `2px solid ${border}` }}>{text}</h2>
);

export function Blog3Content() {
  const toc = [
    { id: "white-label-option", label: "Does Make.com have a white label option?" },
    { id: "make-pricing", label: "What is Make.com's white label pricing?" },
    { id: "make-money-reselling", label: "Can you make money reselling Make automations?" },
    { id: "three-approaches", label: "Three ways agencies try to solve this (and why they fail)" },
    { id: "branded-dashboard", label: "How to create a branded Make.com dashboard for clients" },
    { id: "white-label-apps", label: "How do you make money with white label automation apps?" },
    { id: "best-alternative", label: "What is the best Make.com white label alternative?" },
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
      {p(<>Does <strong>Make.com have a white label option</strong>? Yes, technically. Make has an OEM White Label program. But it&apos;s built for enterprise software companies embedding Make into their own platforms. It requires a direct sales conversation, custom pricing that isn&apos;t published anywhere, and isn&apos;t accessible to small or mid-size automation agencies. If you&apos;re a 3-to-10-person agency reselling Make automations to clients, the OEM program isn&apos;t designed for you.</>, { fontSize: "1.05rem" })}
      {p("What most agencies actually need is simpler. They want to show clients what their Make workflows are doing, under the agency's brand, with a Stripe payment gate attached. That's not white-labeling Make. That's adding a client delivery layer on top of it. This guide breaks down what Make offers, what it doesn't, and how agencies are building recurring revenue from Make automations right now.")}

      {/* ── SECTION 1 ── */}
      {h2("white-label-option", "Does Make.com have a white label option for agencies?")}
      {p("Make.com does have a white-label product. They call it the OEM White Label program, and it has its own documentation on Make's Developer Hub. With it, you get a fully branded instance of the Make platform, complete with custom colors, your own domain, and the ability to manage users and roles under your brand.")}
      {p("Here's the catch. It's an enterprise product. Make doesn't list pricing for it publicly. You can't sign up online. You contact their sales team, explain your use case, and they give you a custom quote. Community reports suggest it's priced in the five-figure range annually, similar to n8n's embed license.")}
      {p("The OEM program is designed for software companies that want to embed Make's automation engine inside their own SaaS product. Think: a CRM that offers built-in workflow automation powered by Make under the hood. That's the intended customer.")}
      {p("If you're running an automation agency and you just want your clients to see a branded dashboard showing their scenario results, the OEM program is like renting an aircraft carrier to cross a river. It solves a different problem at a different scale.")}

      {/* ── SECTION 2 ── */}
      {h2("make-pricing", "What is Make.com's white label pricing?")}
      {p("Make doesn't publish OEM white-label pricing. You have to contact sales. Multiple community posts from agencies trying to get quotes report difficulty even reaching the right team.")}
      {p("Here's what Make does publish for their standard plans:")}

      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Plan", "Price (annual)", "Credits/Month", "Best For"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Free", "$0", "1,000", "Testing and evaluation"],
              ["Core", "$10.59/mo", "10,000", "Solo builders, basic automations"],
              ["Pro", "$18.82/mo", "10,000", "Advanced features, priority execution"],
              ["Teams", "$34.12/mo", "10,000", "Team collaboration, shared templates"],
              ["Enterprise", "Custom", "Custom", "SSO, audit logs, compliance"],
              ["OEM White Label", "Custom (sales only)", "Custom", "Software companies embedding Make"],
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

      {p(<>Notice that all paid plans start with the same 10,000 credits. Higher tiers unlock features, not more volume. If you need more credits, you buy add-on packs at roughly $9 per 10,000 extra credits. Every module action in a scenario costs one credit. A 5-step scenario processing 100 items uses 500 credits per run.</>)}
      {p("This is important for agencies because your client's workflows run on your Make account. You absorb the credit cost. If a client's lead qualification scenario runs 200 times a day with 6 steps each, that's 1,200 credits per day from one client alone. At 36,000 credits per month, you've blown past the base allocation and you're buying overage packs.")}
      {p("The per-credit pricing isn't the problem. The problem is that Make has no built-in way to pass that cost to your client under your brand. You need a separate billing layer for that.")}

      {/* ── SECTION 3 ── */}
      {h2("make-money-reselling", "Can you make money reselling Make.com automations?")}
      {p("Yes. Plenty of agencies do. But the ones making real recurring revenue aren't just selling the automation. They're selling the outcome, wrapped in a professional delivery experience.")}
      {p("Here's the difference.")}

      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Approach", "What client sees", "Typical price", "Churn risk"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Sell the build (project)", "A completed workflow, then nothing", "$1,500–$5,000 one-time", "High (no ongoing value visible)"],
              ["Sell the service (retainer)", "Monthly emails saying 'things are running'", "$500–$1,500/month", "Medium (value is invisible)"],
              ["Sell the product (portal + billing)", "A branded dashboard with live results and monthly fee", "$199–$499/month", "Low (client sees ROI daily)"],
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

      {p("The third approach is how you build recurring revenue that sticks. Your client opens a dashboard every Monday, sees that their lead enrichment scenario ran 412 times with a 96% success rate, and understands exactly what their $299/month is buying. That's a client who doesn't cancel.")}
      {p(<>The same model works for <Link href="/blog/can-you-white-label-n8n-agency-recurring-revenue" style={{ color: accent }}>n8n agencies</Link>. Different platform, identical delivery problem.</>)}

      {/* ── SECTION 4 ── */}
      {h2("three-approaches", "Three ways agencies try to solve this today (and why they fail)")}

      {[
        {
          num: "1",
          title: "Give the client their own Make account.",
          body: "This is the most common approach and the worst one for your business. The client sees Make's interface, understands the tool, and eventually asks why they're paying you when they could hire a freelancer for $50/hour. You've trained your client to replace you. Worse, they see Make's pricing and realize your markup. The moment they log into Make, your premium positioning evaporates."
        },
        {
          num: "2",
          title: "Build a custom dashboard with Retool, Bubble, or code.",
          body: "This works in theory but costs $10,000 to $50,000 in development and takes months. Then Make updates their API (which they do regularly), and your dashboard breaks. The maintenance burden is real. One agency on Skool described paying a developer $2,500 to build a dashboard that took 14 days and needed constant patches every time Make changed something."
        },
        {
          num: "3",
          title: "Use GoHighLevel and connect Make via webhooks.",
          body: "GoHighLevel has its own automation engine, so some agencies try to bridge the two. But GHL wasn't built to display Make execution data. You end up hacking together a reporting view that's fragile and limited. It works for appointment booking flows where GHL is already the CRM, but it can't show granular Make scenario performance in any meaningful way."
        },
      ].map(({ num, title, body }) => (
        <div key={num} style={{ display: "flex", gap: "1rem", margin: "1.25rem 0" }}>
          <div style={{ ...sans, fontWeight: 800, fontSize: "1.3rem", color: accent, lineHeight: 1.4, flexShrink: 0, width: 28, textAlign: "center" as const }}>{num}</div>
          <div>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.95rem", color: textPrimary, marginBottom: "0.3rem" }}>{title}</p>
            <p style={{ ...serif, fontSize: "0.93rem", color: textSecondary, marginBottom: 0, lineHeight: 1.75 }}>{body}</p>
          </div>
        </div>
      ))}

      {p("All three approaches share the same flaw: they either expose the underlying tool or cost more than the problem is worth. What agencies need is a purpose-built layer that sits between Make and the client.", { marginTop: "1.5rem" })}

      {/* ── SECTION 5 ── */}
      {h2("branded-dashboard", "How do agencies create branded Make.com dashboards for clients?")}
      {p(<>The practical path for most agencies is a client portal layer that connects to Make&apos;s API, pulls scenario execution data, and displays it under your brand. <Link href="https://app.getflowetic.com/auth" style={{ color: accent }}>Getflowetic</Link> is currently the only tool with native Make integration built specifically for this use case.</>)}
      {p("Here's how it works:")}

      {[
        { step: "Step 1", title: "Connect your Make.com account.", body: "In Getflowetic's wizard, enter your Make API key. The platform pulls your scenario list and recent execution data. Takes about 30 seconds." },
        { step: "Step 2", title: "Select which scenarios to expose.", body: "You probably don't want the client seeing every scenario on your account. Pick the ones relevant to their business. A lead qualification client sees their lead scenarios. An email automation client sees their email workflows." },
        { step: "Step 3", title: "Apply your agency branding.", body: "Upload your logo, set your colors, name the portal. The client sees your brand on every page. No Make branding. No Getflowetic branding." },
        { step: "Step 4", title: "Set up Stripe billing.", body: "Connect your Stripe account. Set the monthly price. The client pays you directly before they can access the dashboard. You control the margin entirely." },
        { step: "Step 5", title: "Share the link.", body: "Generate a magic link or client login URL. Send it to your client. They click, pay, and land on a branded dashboard showing execution counts, success rates, recent activity, and estimated ROI." },
      ].map(({ step, title, body }) => (
        <div key={step} style={{ background: card, border: `1px solid ${border}`, borderRadius: 10, padding: "1.25rem 1.5rem", margin: "1rem 0", borderLeft: `4px solid ${accent}` }}>
          <p style={{ ...sans, fontSize: "0.72rem", fontWeight: 700, color: accent, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "0.2rem" }}>{step}</p>
          <p style={{ ...sans, fontWeight: 700, fontSize: "0.93rem", color: textPrimary, marginBottom: "0.4rem" }}>{title}</p>
          <p style={{ ...serif, fontSize: "0.9rem", color: textSecondary, marginBottom: 0, lineHeight: 1.75 }}>{body}</p>
        </div>
      ))}

      {/* ── REVENUE MATH ── */}
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: "1.5rem", margin: "2rem 0" }}>
        <p style={{ ...sans, fontSize: "0.78rem", fontWeight: 700, color: textMuted, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: "0.75rem" }}>The recurring revenue math for Make agencies</p>
        <div style={{ ...sans, fontSize: "0.92rem", lineHeight: 2, color: textPrimary }}>
          <p style={{ marginBottom: "0.3rem" }}>Make.com Pro plan: <strong>$18.82/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>Credit overage packs (est. 2 clients): <strong>~$18/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>Dashboard layer (Getflowetic): <strong>$99/month</strong></p>
          <p style={{ marginBottom: "0.3rem", borderTop: `1px solid ${border}`, paddingTop: "0.5rem" }}>Your total cost: <strong>$135.82/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>&nbsp;</p>
          <p style={{ marginBottom: "0.3rem" }}>Client 1 pays: <strong>$199/month</strong> for branded automation portal</p>
          <p style={{ marginBottom: "0.3rem" }}>Client 2 pays: <strong>$199/month</strong></p>
          <p style={{ marginBottom: "0.3rem" }}>Client 3 pays: <strong>$199/month</strong></p>
          <p style={{ marginBottom: "0.3rem", borderTop: `1px solid ${border}`, paddingTop: "0.5rem" }}>Dashboard revenue: <strong style={{ color: green }}>$597/month</strong></p>
          <p style={{ marginBottom: 0 }}>Net margin: <strong style={{ color: green }}>$461.18/month</strong> (77% margin)</p>
        </div>
      </div>

      {p("And again, this is just the dashboard fee. Most agencies charge a separate setup fee ($1,500 to $5,000) and an ongoing management retainer on top of the portal access. The portal is a second revenue stream, not the only one.")}

      {/* ── SECTION 6 ── */}
      {h2("white-label-apps", "How do you make money with white label automation apps?")}
      {p("This is one of the most searched questions in the Make.com keyword cluster, so let's answer it directly.")}
      {p("You make money with white-label automation apps by doing three things:")}
      {p(<><strong>Build once, sell many times.</strong> A lead qualification workflow that works for one real estate agency works for fifty. You build the scenario template once in Make. Each new client gets a copy customized to their CRM and data sources. Your marginal cost per new client is near zero.</>)}
      {p(<><strong>Charge for the outcome, not the tool.</strong> Your client doesn&apos;t care that you use Make. They care that 200 leads got qualified last month without them lifting a finger. Price accordingly. $199/month for automated lead qualification is a bargain compared to a part-time hire at $2,000/month.</>)}
      {p(<><strong>Make the value visible.</strong> A branded portal showing &quot;342 leads qualified this month, 94% accuracy, estimated $8,400 in saved labor&quot; is what turns a client from &quot;maybe I&apos;ll cancel&quot; to &quot;this is the best money I spend.&quot; That visibility is the retention engine. Without it, you&apos;re just hoping they remember why they hired you.</>)}
      {p(<>For a deeper walkthrough of the full business model, there&apos;s a comparison of all the dashboard options in the <Link href="/blog/best-white-label-ai-dashboard-agencies" style={{ color: accent }}>best white-label AI dashboard guide</Link>.</>)}

      {/* ── SECTION 7 ── */}
      {h2("best-alternative", "What is the best Make.com white label alternative for small agencies?")}
      {p("If you need a branded way to deliver Make automation results to clients, here are the real options:")}

      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Option", "Cost", "Make Support", "Stripe Billing", "Setup Time"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Getflowetic", "$99/mo", true, true, "60 seconds"],
              ["Make OEM White Label", "Custom ($$$$)", "Full platform", "Build your own", "Weeks+"],
              ["Custom build (Retool, Bubble)", "$10K–$50K", "DIY via API", "DIY", "1–3 months"],
              ["Looker Studio", "$0", false, false, "Hours (manual wiring)"],
              ["GoHighLevel + webhooks", "$97–$497/mo", "Partial (webhooks only)", "GHL billing", "Days"],
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

      {p("Looker Studio can technically display Make data if you pipe execution logs into Google Sheets or BigQuery first. But there's no white-labeling, no billing, and no per-client data isolation. You'd spend days wiring something that breaks every time your data structure changes.")}
      {p("GoHighLevel is a solid CRM but it's not a Make reporting tool. The overlap is only useful if GHL is already your client's CRM and the Make scenarios feed data back into it.")}
      {p("The custom build path is always an option for agencies with budget and patience. But $10K minimum plus ongoing developer maintenance makes it hard to justify until you've proven the model works with 20+ clients first.")}

      {/* ── FAQ ── */}
      {h2("faq", "Frequently asked questions")}
      <div style={{ marginTop: "1rem" }}>
        {[
          ["Does Make.com have a white label option for agencies?", "Make has an OEM White Label program, but it's built for enterprise software companies embedding Make into their own products. It requires a custom sales process and isn't accessible to small automation agencies. There's no self-serve white-label plan on Make's pricing page."],
          ["What is Make.com's white label pricing?", "Not published. Make's OEM program is quote-based and requires direct sales contact. Standard plans range from free to $34.12/month for Teams. Enterprise and OEM pricing sit above that tier and are negotiated individually."],
          ["Can you make money reselling Make.com automations?", "Yes. The key is selling the outcome, not the tool. Build workflows in Make, wrap the results in a branded client portal with a monthly fee, and never give clients direct Make access. Agencies typically charge $199 to $499/month for managed automation services with dashboard access."],
          ["How do I show Make.com results to clients without giving them access?", "Use a dashboard layer that connects to Make's API and displays execution data under your brand. Getflowetic does this natively. The client sees a branded portal with scenario performance, success rates, and ROI metrics. They never see Make's interface."],
          ["What is the best way to productize Make.com automations?", "Build a repeatable workflow template, customize it per client, then deliver it through a branded portal with Stripe billing. Your client pays monthly to access the dashboard showing what their automations are doing. This turns project work into recurring SaaS-style revenue."],
          ["Does Make.com charge per operation?", "Make recently switched from operations to credits, but the billing model is the same. Every module action costs one credit. A 5-step scenario processing 100 items uses 500 credits per run. If you run client workflows on your Make account, you absorb this cost. Your client fee needs to cover it plus your margin."],
          ["How is this different from the n8n white-label approach?", "The concept is identical. The platform mechanics differ. n8n is self-hosted and free for internal use, so your workflow cost is just server hosting. Make is cloud-based with per-credit billing, so your workflow cost scales with volume. Both need the same dashboard layer for client delivery."],
        ].map(([q, a]) => (
          <div key={q} style={{ borderBottom: `1px solid ${border}`, padding: "1.25rem 0" }}>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.97rem", marginBottom: "0.5rem" }}>{q}</p>
            <p style={{ ...serif, fontSize: "0.93rem", lineHeight: 1.75, color: textSecondary, marginBottom: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "3rem 0" }}/>

      {/* ── CLOSING ── */}
      {p("Make.com is a powerful automation engine. But it wasn't built to be your client delivery tool. The OEM program exists for a different type of customer at a different price point. For agencies that need a branded way to show clients what their Make workflows are doing and charge monthly for it, the answer is a dashboard layer, not a white-label license.")}
      {p("The workflows are already running. The value is already there. What's missing is the client-facing experience that turns invisible backend work into visible, recurring revenue.")}
      {p(<>If you want to try it, <Link href="https://app.getflowetic.com/auth" style={{ color: accent, textDecoration: "underline", textUnderlineOffset: "3px" }}>Getflowetic has a free trial</Link>, no card required. Connect your Make account and have your first branded client portal live in under a minute.</>)}

    </div>
  );
}
