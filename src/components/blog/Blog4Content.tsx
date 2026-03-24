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

export function Blog4Content() {
  const toc = [
    { id: "can-you-white-label", label: "Can you white label Vapi?" },
    { id: "what-is-vapi-dashboard", label: "What is a Vapi white label dashboard?" },
    { id: "setup-steps", label: "How do you set up a branded Vapi client portal?" },
    { id: "billing", label: "How do you bill clients for Vapi usage under your brand?" },
    { id: "competitors", label: "How do the Vapi white label options compare?" },
    { id: "pricing", label: "What does Vapi white label pricing look like for agencies?" },
    { id: "decision", label: "Quick decision framework" },
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
      {p(<>Vapi doesn&apos;t offer a native white-label client dashboard. If you&apos;re running a voice AI agency on Vapi and want to show clients their call data under your brand, you need a portal layer on top. That&apos;s what a <strong>Vapi white label dashboard</strong> solves.</>, { fontSize: "1.05rem" })}
      {p("Right now, your options are: give clients access to your Vapi account (bad idea), send them screenshots of call logs (not scalable), or build something custom (expensive and slow). None of those let you charge a professional monthly fee for portal access.")}
      {p(<>The good news is the market has matured fast. In early 2025, Vapify was basically the only game in town. In 2026, there are at least eight platforms competing to solve this problem, from $15/month wrappers to $1,400/month agency suites. This guide covers all of them honestly, the setup process, and the math on turning Vapi into recurring revenue.</>)}

      {/* ── SECTION 1 ── */}
      {h2("can-you-white-label", "Can you white label Vapi?")}
      {p("Not directly. Vapi is an API platform built for developers. It handles the voice AI infrastructure, call routing, and speech processing. It does this really well. But it was never designed to be a client-facing product.")}
      {p("Here's what that means in practice. Vapi's dashboard shows API keys, webhook configs, assistant JSON, and raw call logs. You can't hand that to a dental practice owner and say \"here's your portal.\" They'd close the tab in five seconds.")}
      {p("Vapi does have an enterprise tier for companies that want custom deployments with HIPAA compliance and higher concurrency. But that's a sales conversation starting well above what most small agencies can justify.")}
      {p("A Vapi staff member put it plainly in their own community forum: \"You will need to build your own UI and connect Vapi with the backend.\" They then recommended third-party platforms like ChatDash and TIXAE Agents. So even Vapi's team acknowledges you need something else for client-facing portals.")}
      {p(<>The practical answer for most agencies: keep Vapi as your voice AI engine, and add a branded dashboard layer on top that translates raw API data into something clients understand. If you also run <Link href="/blog/can-you-white-label-n8n-agency-recurring-revenue" style={{ color: accent }}>n8n workflows</Link> or <Link href="/blog/make-com-white-label-pricing-automation-agencies" style={{ color: accent }}>Make automations</Link>, some platforms can display all of it in one view.</>)}

      {/* ── SECTION 2 ── */}
      {h2("what-is-vapi-dashboard", "What is a Vapi white label dashboard?")}
      {p("It's a branded portal that sits between your Vapi account and your client. The client logs in, sees your agency's name and logo, and gets a clean view of their voice agent's performance. No Vapi branding visible anywhere.")}
      {p("Think of it this way. Vapi is the engine. The dashboard is the showroom. Your client never sees the engine room. They see the results.")}

      {p(<><strong>What the client sees:</strong></>, {})}
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "1.2rem 1.5rem", margin: "0.5rem 0 1.5rem" }}>
        <ul style={{ ...sans, fontSize: "0.88rem", margin: 0, paddingLeft: "1.2rem", lineHeight: 2, color: textSecondary }}>
          <li>Total calls handled this month (e.g., 847 calls)</li>
          <li>Success rate and average call duration</li>
          <li>Cost per call and estimated savings vs. a human receptionist</li>
          <li>Call transcripts they can search and filter</li>
          <li>Your agency branding on every screen</li>
        </ul>
      </div>

      {p(<><strong>What the client doesn&apos;t see:</strong></>, {})}
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "1.2rem 1.5rem", margin: "0.5rem 0 1.5rem" }}>
        <ul style={{ ...sans, fontSize: "0.88rem", margin: 0, paddingLeft: "1.2rem", lineHeight: 2, color: textSecondary }}>
          <li>Your Vapi API key or account</li>
          <li>Webhook configurations or assistant JSON</li>
          <li>What you actually pay Vapi per minute</li>
          <li>Any mention of Vapi, Getflowetic, or the underlying tech</li>
        </ul>
      </div>

      {p("That separation is everything. The client sees value. You keep your margin. And nobody's Googling your vendor to cut you out of the deal.")}

      {/* ── SECTION 3 — SETUP STEPS ── */}
      {h2("setup-steps", "How do you set up a branded Vapi client portal?")}
      {p(<>The setup process is roughly similar across platforms. I&apos;ll use <Link href="https://app.getflowetic.com/auth" style={{ color: accent }}>Getflowetic</Link> as the example since it covers voice and workflow stacks together, but the general flow applies to Vapify, VoiceAIWrapper, and others too.</>)}

      {[
        { step: 1, title: "Connect your Vapi account using your API key", body: "Paste your Vapi API key into the setup wizard. It pulls your assistants, phone numbers, and call data automatically. Most platforms sync within seconds. No webhooks to configure manually." },
        { step: 2, title: "Set your agency branding", body: "Upload your logo, pick your brand colors, and set your portal name. Some platforms like VoiceAIWrapper and Voicerr also let you connect a custom domain. The client should see your agency identity everywhere. Not Vapi's. Not the platform's. Yours." },
        { step: 3, title: "Create a client portal", body: "Select which Vapi assistant (or assistants) to expose. Choose which metrics appear on the dashboard. Some agencies show everything. Others keep it simple with just call volume, success rate, and estimated ROI. The less noise, the more the client focuses on the value." },
        { step: 4, title: "Set Stripe billing and per-minute markup", body: "Connect your Stripe account. Set your monthly portal fee and your per-minute markup. If Vapi charges you $0.10 per minute, you might bill your client $0.22 per minute. Most platforms handle invoicing and payment collection automatically." },
        { step: 5, title: "Send the client their login URL", body: "Generate a secure login link for your client. They click it, see a branded dashboard, and start tracking their voice agent's performance. Some platforms offer magic links (no password needed), others use standard email/password auth." },
      ].map(({ step, title, body }) => (
        <div key={step} style={{ display: "flex", gap: "1rem", margin: "1.5rem 0", alignItems: "flex-start" }}>
          <div style={{ ...sans, width: 32, height: 32, borderRadius: "50%", background: accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{step}</div>
          <div style={{ flex: 1 }}>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem", color: textPrimary }}>{title}</p>
            <p style={{ ...serif, fontSize: "0.93rem", lineHeight: 1.75, color: textSecondary, marginBottom: 0 }}>{body}</p>
          </div>
        </div>
      ))}

      {p("The first setup takes a few minutes while you upload branding assets and connect Stripe. After that, adding a new client portal is genuinely fast. Most platforms advertise under 60 seconds for repeat setups, and that's roughly accurate.")}

      {/* ── SECTION 4 — BILLING ── */}
      {h2("billing", "How do you bill clients for Vapi usage under your brand?")}
      {p("This is where the recurring revenue model comes together. Most voice AI agencies leave money on the table because they charge a one-time setup fee and never bill for ongoing usage.")}
      {p("Here's what works better.")}

      {p(<><strong>The two-part pricing model:</strong></>, {})}
      <div style={{ background: card, border: `1px solid ${border}`, borderRadius: 10, padding: "1.4rem 1.6rem", margin: "1rem 0 1.5rem" }}>
        <p style={{ ...sans, fontWeight: 700, fontSize: "0.9rem", color: accent, marginBottom: "0.75rem" }}>Monthly portal fee + per-minute markup</p>
        <p style={{ ...sans, fontSize: "0.88rem", color: textSecondary, marginBottom: "0.75rem" }}>
          <strong>Portal access:</strong> $99 to $299/month per client. This covers the dashboard, analytics, and your ongoing management.
        </p>
        <p style={{ ...sans, fontSize: "0.88rem", color: textSecondary, marginBottom: 0 }}>
          <strong>Voice minutes:</strong> Vapi&apos;s total cost (platform + LLM + TTS + STT) runs roughly $0.13 to $0.33 per minute in production. You bill your client $0.25 to $0.50 per minute. The margin is yours.
        </p>
      </div>

      {p("A note on Vapi's actual per-minute cost: the $0.05/minute you see advertised is just the orchestration fee. In production, you're also paying for the language model, speech-to-text, text-to-speech, and telephony. Agencies typically land between $0.13 and $0.33 per minute total depending on which providers they configure. Price your markup against the real number, not the headline.")}

      {p("Let's run the math on a real scenario.")}

      {/* ── ROI TABLE ── */}
      <div style={{ overflowX: "auto", margin: "1.5rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["", "Your Cost", "Client Pays", "Your Margin"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Portal fee (monthly)", "$99 (platform)", "$199/mo", "$100/mo"],
              ["Voice minutes (2,000 min)", "$0.15/min = $300", "$0.30/min = $600", "$300/mo"],
              ["Total per client", "$399/mo", "$799/mo", "$400/mo"],
              ["5 clients", "$1,995/mo", "$3,995/mo", "$2,000/mo"],
            ] as const).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${border}`, background: i === 3 ? accentLight : i % 2 === 1 ? bg : card, fontWeight: j === 0 || i === 3 ? 700 : 400, color: j === 3 && i === 3 ? green : textPrimary }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {p("$2,000 per month in margin from five clients. That's $24,000 per year of recurring revenue. And you haven't written a line of code or hired a developer.")}
      {p("The key insight: without a portal, most agencies only charge the setup fee ($1,500 to $3,000 once). The portal creates a reason to charge monthly. It makes the value visible, which makes the subscription feel justified.")}

      {/* ── SECTION 5 — COMPETITOR COMPARISON ── */}
      {h2("competitors", "How do the Vapi white label options compare?")}
      {p("The market has gotten crowded fast. In early 2025, Vapify was basically the only Vapi-focused wrapper. By March 2026, there are at least eight serious options, each with different strengths. Here's the honest breakdown.")}

      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.82rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Platform", "Price", "Vapi", "Other Voice", "Make / n8n", "Billing", "Best For"].map(h => (
                <th key={h} style={{ padding: "0.7rem 0.8rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Getflowetic", "$99/mo", "✓", "Retell", "✓ Both", "Stripe", "Voice + workflow agencies"],
              ["VoiceAIWrapper", "$29–499/mo", "✓", "Retell, 11Labs, Deepgram, Bolna, Ultravox", "✗", "Stripe", "Multi-provider voice agencies"],
              ["Vapify", "$28–399/mo", "✓", "✗ Vapi only", "✗", "Stripe", "Vapi-only agencies, low budget"],
              ["Voicerr", "$199–299/mo", "✓", "Retell", "✗", "Stripe", "Outbound campaigns, batch calling"],
              ["ChatDash", "$15–50/mo", "✓", "Retell, Voiceflow, Botpress", "✗", "Stripe", "Budget voice-only analytics"],
              ["TIXAE Agents", "$24–124/mo", "✓", "Voiceflow", "✗", "Custom", "Multi-channel (WhatsApp, Discord)"],
              ["Convocore", "$220/mo", "✗ Own infra", "Own infra", "✗", "Built-in", "Voice + chat + social, multi-channel"],
              ["Synthflow", "$899–1,400/mo", "✗ Own infra", "Own infra", "✗", "Stripe", "No-code agent builder + reselling"],
              ["Trillet", "$99–299/mo", "✗ Own infra", "Own infra", "✗", "Built-in", "Native voice platform, low per-min cost"],
              ["Custom build", "$10K–80K+", "DIY", "DIY", "DIY", "DIY", "50+ clients, unique requirements"],
            ] as const).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "0.7rem 0.8rem", borderBottom: `1px solid ${border}`, verticalAlign: "top", background: i % 2 === 1 ? bg : card, fontWeight: j === 0 ? 700 : 400, fontSize: "0.82rem" }}>
                    {cell === "✓" ? <span style={{ color: green, fontWeight: 700 }}>✓</span>
                     : cell === "✗" ? <span style={{ color: red, fontWeight: 700 }}>✗</span>
                     : String(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {p("That's a lot of options. Let me cut through it with honest takes on each.")}

      {p(<><strong>Vapify</strong> ($28–$399/mo) is the original Vapi wrapper and still the cheapest way to get started. It&apos;s listed as an official integration partner on Vapi&apos;s own docs page. Setup is fast, Stripe rebilling works, and it includes batch calling on higher tiers. The limitation: Vapi only. If you ever add Retell, ElevenLabs, or workflow tools, you&apos;ll need a second platform.</>, {})}

      {p(<><strong>VoiceAIWrapper</strong> ($29–$499/mo) has grown into the most feature-complete voice-only wrapper. It supports six providers now: Vapi, Retell, ElevenLabs, Deepgram, Bolna, and Ultravox. Claims 1,000+ agencies and SOC 2 Type II compliance. If your agency runs multiple voice providers, this is the strongest multi-provider option. But like Vapify, it&apos;s voice-only. No <Link href="/blog/can-you-white-label-n8n-agency-recurring-revenue" style={{ color: accent }}>n8n</Link> or <Link href="/blog/make-com-white-label-pricing-automation-agencies" style={{ color: accent }}>Make</Link> support.</>, {})}

      {p(<><strong>Voicerr</strong> ($199–$299/mo) used to be the budget pick at $28/month. That era is over. Pricing jumped 7-10x in 2025. The trade-off: you get batch calling campaigns, a lead finder, an automation lab, and a built-in landing page builder. If outbound calling campaigns are your core service, Voicerr has tools the others don&apos;t. If you just need a client analytics portal, it&apos;s overkill at the new price.</>, {})}

      {p(<><strong>ChatDash</strong> ($15–$50/mo) is the cheapest entry point. It&apos;s listed on Vapi&apos;s official integrations page and covers basic call logs, analytics, and Stripe billing. Some agency owners in Skool communities have mentioned limitations as they scale, but for a first client portal on a tight budget, it works. Also supports Retell, Voiceflow, and Botpress.</>, {})}

      {p(<><strong>TIXAE Agents</strong> ($24–$124/mo) is interesting because Vapi&apos;s own staff recommended it in their community forum. It&apos;s not just a dashboard layer. It&apos;s an agent builder that integrates with Vapi and Voiceflow, plus it deploys across WhatsApp, Discord, Instagram, and web chat. If multi-channel deployment matters to your clients, this is worth looking at.</>, {})}

      {p(<><strong>Convocore</strong> ($220/mo) takes a completely different approach. It doesn&apos;t wrap Vapi. It replaces it. Convocore owns its own voice infrastructure ($0.07/min all-in) and adds chat, WhatsApp, Instagram, Messenger, and Telegram from a single platform. Full white-label with custom domains. The catch: you&apos;re leaving Vapi behind. If you&apos;re committed to Vapi&apos;s specific voice engine, Convocore isn&apos;t the move. If you&apos;re open to switching, the multi-channel angle is strong.</>, {})}

      {p(<><strong>Synthflow</strong> ($899–$1,400/mo for agency) is the enterprise option for agencies that want to build and resell voice agents through a no-code builder with GoHighLevel integration. The white-label works, but some agencies have reported branding leaks (Synthflow name appearing in support tickets, email notifications, and call whispers). At that price point, those issues sting. Worth it if you need the no-code builder. Expensive if you already built your agents on Vapi.</>, {})}

      {p(<><strong>Trillet</strong> ($99–$299/mo) is a newer native platform that owns its voice stack and claims $0.09/min all-in. The agency plan includes unlimited sub-accounts and white-label. They&apos;re aggressively publishing pricing comparison content. Still early, but the economics are interesting if you&apos;re evaluating alternatives to Vapi itself.</>, {})}

      {p(<><strong>Getflowetic</strong> ($99/mo) is the only option that covers Vapi and Retell alongside Make and n8n in one branded portal. If your agency stack spans voice and workflows, or if you plan to expand beyond voice-only, this is the gap it fills. <Link href="https://app.getflowetic.com/auth" style={{ color: accent }}>Free trial here</Link>, no card needed.</>, {})}

      {/* ── SECTION 6 — PRICING ── */}
      {h2("pricing", "What does Vapi white label pricing look like for agencies?")}
      {p("Let's separate two things that get confused constantly: what Vapi charges you, and what the dashboard layer costs.")}

      {p(<><strong>What Vapi charges (your cost):</strong></>, {})}
      {p("Vapi's pricing is usage-based. The headline rate is $0.05/minute for orchestration. But that's just the platform fee. You also pay separately for your LLM (like GPT-4o at roughly $0.06–$0.10/min), speech-to-text, text-to-speech, and telephony. In production, most agencies land between $0.13 and $0.33 per minute total. Vapi gives you $10 in free credits to start.")}

      {p(<><strong>What the dashboard layer costs (range by platform):</strong></>, {})}
      <div style={{ overflowX: "auto", margin: "1rem 0 1.5rem", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Platform", "Monthly Cost", "Clients Included", "Key Limitation"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["ChatDash", "$15–$50/mo", "Varies by plan", "Basic analytics only"],
              ["TIXAE Agents", "$24–$124/mo", "Varies by plan", "Agent builder, not pure dashboard"],
              ["Vapify", "$28–$399/mo", "Unlimited on higher tiers", "Vapi-only, no other providers"],
              ["VoiceAIWrapper", "$29–$499/mo", "Unlimited on $249+ plans", "Voice-only, no workflow support"],
              ["Getflowetic", "$99/mo", "Unlimited", "Newer platform"],
              ["Voicerr", "$199–$299/mo", "Up to 1,000", "Price jumped 7-10x in 2025"],
              ["Synthflow", "$899–$1,400/mo", "Unlimited sub-accounts", "Includes agent builder (may be overkill)"],
            ] as const).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${border}`, background: i % 2 === 1 ? bg : card, fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {p("The important number isn't what the dashboard costs you. It's what you charge clients on top of it. A $99/month platform pays for itself the moment one client pays $199/month for portal access. Everything after that is margin.")}
      {p("One more pricing detail worth knowing: the wrapper platforms (Vapify, VoiceAIWrapper, Voicerr) charge a flat monthly fee and you pay Vapi directly for minutes. The native platforms (Convocore, Synthflow, Trillet) include their own voice infrastructure in the per-minute rate. Different economics, different risk profiles. Wrappers give you more control over the voice stack. Native platforms give you one invoice.")}

      {/* ── SECTION 7 — DECISION FRAMEWORK ── */}
      {h2("decision", "Quick decision framework")}
      {p("There are too many options. Here's how to narrow it down fast.")}

      {[
        ["Are you Vapi-only and testing the model with your first few clients?", "Start with ChatDash ($15/mo) or Vapify ($28/mo). Validate that clients will pay for portal access before you invest more. Either one gets you a working branded dashboard in under an hour."],
        ["Do you run Vapi alongside Make, n8n, or Retell?", "Getflowetic is the only platform that covers voice and workflow analytics in one branded portal. That matters when clients want one dashboard for everything, not separate logins for voice and automation."],
        ["Do you use multiple voice providers (Vapi + Retell + ElevenLabs)?", "VoiceAIWrapper supports six providers from one dashboard. If provider flexibility is your edge, this is the strongest multi-provider option at $29/month to start."],
        ["Do you need outbound campaigns, batch calling, and lead tools?", "Voicerr ($199/mo) or Synthflow ($899+/mo) include campaign management that goes well beyond analytics. If outbound calling is your primary service, those extras earn their keep."],
        ["Are you open to leaving Vapi entirely for better margins?", "Convocore ($220/mo with $0.07/min all-in) or Trillet ($99/mo with $0.09/min) own their voice infrastructure. Lower per-minute costs and multi-channel support. The trade-off: you're rebuilding on a different platform."],
      ].map(([q, a]) => (
        p(<><strong>{q}</strong> {a}</>, {})
      ))}

      {/* ── FAQ ── */}
      {h2("faq", "Vapi white label dashboard FAQ")}
      <div style={{ marginTop: "1rem" }}>
        {[
          ["Can you white label Vapi?", "Vapi doesn't offer a white-label version of its dashboard for agencies. You can connect Vapi's API to a white-label portal platform like Getflowetic, VoiceAIWrapper, Vapify, ChatDash, or TIXAE Agents. The client sees your brand. Vapi's own staff has acknowledged this gap and recommends third-party solutions in their community forum."],
          ["What is a Vapi white label dashboard?", "It's a branded client portal showing your AI voice agent results under your agency's brand. The dashboard displays call volume, success rates, cost per call, and transcripts. Your client logs in and sees their data, your logo, your colors. No Vapi branding is visible anywhere."],
          ["How do agencies charge for Vapi voice agent services?", "Most charge $500 to $3,000 per month depending on call volume and complexity. The typical model combines a monthly portal fee ($99 to $299) with a per-minute markup. Vapi's real production cost is $0.13 to $0.33 per minute (not just the $0.05 headline). Agencies bill clients $0.25 to $0.50 per minute and keep the margin."],
          ["How long does it take to set up a white-label Vapi client portal?", "Under 60 seconds for repeat setups on most platforms once your Vapi API key is connected. First-time setup with branding and Stripe takes 10 to 30 minutes depending on the platform. A custom build takes weeks to months and costs $10,000 or more."],
          ["What metrics should I show clients in a Vapi dashboard?", "Call volume, success rate, average call duration, cost per call vs. human alternative, and searchable transcripts. The most effective portals translate raw data into ROI. Instead of showing 847 calls, show '847 calls handled, saving an estimated $12,400 in staff costs.'"],
          ["Do I need to give clients access to my Vapi account?", "No, and you shouldn't. Giving clients your Vapi login exposes your API keys, assistant configurations, and per-minute costs. A dashboard layer shows them only what they need to see. This also prevents clients from Googling your vendor and trying to cut you out."],
        ].map(([q, a]) => (
          <div key={q} style={{ borderBottom: `1px solid ${border}`, padding: "1.25rem 0" }}>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.97rem", marginBottom: "0.5rem" }}>{q}</p>
            <p style={{ ...serif, fontSize: "0.93rem", lineHeight: 1.75, color: textSecondary, marginBottom: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "3rem 0" }}/>

      {/* ── CLOSING ── */}
      {p("Vapi is a great voice AI engine. Possibly the best one for agencies that want low-level control over their voice stack. But it wasn't built to be the thing your client logs into. That gap is where agencies lose clients, leave money on the table, and struggle to justify monthly fees.")}
      {p("The market now has real options at every price point, from $15/month to $1,400/month. Pick the one that matches your stack, validate with one paying client, and scale from there. The agencies making recurring revenue from voice AI in 2026 aren't the ones with the fanciest agents. They're the ones who made the work visible.")}
      {p(<>If you want to skip the custom build and start charging clients this week, <Link href="https://app.getflowetic.com/auth" style={{ color: accent, textDecoration: "underline", textUnderlineOffset: "3px" }}>Getflowetic has a free trial</Link>, no card required.</>)}

    </div>
  );
}
