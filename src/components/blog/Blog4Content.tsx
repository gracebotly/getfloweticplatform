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
      {p("The good news is the market has options now. There are at least six platforms that solve this problem at different price points and with different strengths. This guide covers all of them honestly, shows you the setup process, and breaks down the math on turning Vapi into recurring revenue.")}

      {/* ── SECTION 1 ── */}
      {h2("can-you-white-label", "Can you white label Vapi?")}
      {p("Not directly. Vapi is an API platform built for developers. It handles the voice AI infrastructure, call routing, and speech processing. It does this really well. But it was never designed to be a client-facing product.")}
      {p("Here's what that means in practice. Vapi's dashboard shows API keys, webhook configs, assistant JSON, and raw call logs. You can't hand that to a dental practice owner and say \"here's your portal.\" They'd close the tab in five seconds.")}
      {p("Vapi does have an enterprise tier for companies that want custom deployments with HIPAA compliance and higher concurrency. But that's a sales conversation starting well above what most small agencies can justify.")}
      {p("A Vapi staff member put it plainly in their own community forum: \"You will need to build your own UI and connect Vapi with the backend.\" They then pointed people to third-party platforms like ChatDash and TIXAE Agents (now Convocore). So even Vapi's team acknowledges you need something else for client-facing portals.")}
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

      {/* ── SECTION 3 — VIDEO SETUP WALKTHROUGH ── */}
      {h2("setup-steps", "How do you set up a branded Vapi client portal?")}
      {p("I recorded a full walkthrough showing the exact process. This covers connecting your Vapi account, setting your branding, creating a client portal, configuring Stripe billing with per-minute markup, and sending the client their login link.")}

      <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", margin: "1.5rem 0 2rem", borderRadius: 12, overflow: "hidden", border: `1px solid ${border}` }}>
        <iframe
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          src="https://www.youtube.com/embed/l-2JSK8OkQQ?si=E3ztPYDbgosoyL2r"
          title="How to White Label Vapi AI Voice Agents"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>



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
      {p("There are six real platforms for giving Vapi clients a branded dashboard right now. Each takes a different approach. Here's the honest breakdown with pricing verified directly from each platform's site as of March 2026.")}

      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.82rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Platform", "Starts At", "Vapi Support", "Other Providers", "Make / n8n", "Stripe Billing"].map(h => (
                <th key={h} style={{ padding: "0.7rem 0.8rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.75rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Getflowetic", "$99/mo", "✓", "Retell", "✓ Both", "✓"],
              ["Voicerr", "$28/mo", "✓", "Retell", "✗", "✓"],
              ["Vapify", "$29/mo", "✓", "Retell (new)", "✗", "✓"],
              ["VoiceAIWrapper", "$29/mo", "✓", "Retell, ElevenLabs, Deepgram, Bolna, Ultravox", "✗", "✓"],
              ["ChatDash", "$120/mo", "✓", "Retell, Voiceflow, Botpress", "✗", "✓"],
              ["Convocore", "$20/mo + $200 WL", "Own infra", "Own infra + multi-channel", "✗", "Built-in"],
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

      {p("Let me be honest about each one.")}

      {p(<><strong>Voicerr</strong> ($28/mo) is one of the cheapest entry points with a surprisingly complete feature set. It includes unlimited clients, unlimited assistants, unlimited white-label websites, a workflow builder, outbound batch calling campaigns, a lead finder, and Stripe billing with usage-based auto-rebilling. It supports both Vapi and Retell. At $28/month for all of that, the value-to-price ratio is hard to beat if you&apos;re voice-only.</>, {})}

      {p(<><strong>Vapify</strong> ($29/mo Starter, $69 Business, $149 Scale, $399 Enterprise) is the original Vapi wrapper and an official Vapi integration partner listed on Vapi&apos;s own docs. The Starter plan gets you one sub-account with full white-label and Stripe rebilling. The Business plan at $69/month adds five sub-accounts and batch calling. Good for agencies that want human support included, as every paid plan comes with expert calls. Recently added Retell support too.</>, {})}

      {p(<><strong>VoiceAIWrapper</strong> ($29/mo Starter, $79 Growth, $249 Scale, $499 Pro) has grown into the most multi-provider option. It supports six voice providers: Vapi, Retell, ElevenLabs, Deepgram, Bolna, and Ultravox. Claims 1,000+ agencies and SOC 2 Type II compliance. If your agency runs multiple voice providers and you want everything under one dashboard, this is the strongest pick. Unlimited client portals start at the $249/month Scale plan. But like the others above, it&apos;s voice-only. No <Link href="/blog/can-you-white-label-n8n-agency-recurring-revenue" style={{ color: accent }}>n8n</Link> or <Link href="/blog/make-com-white-label-pricing-automation-agencies" style={{ color: accent }}>Make</Link> support.</>, {})}

      {p(<><strong>ChatDash</strong> (starts at $120/mo) is listed on Vapi&apos;s official integrations page and covers call logs, analytics, knowledge base management, and Stripe billing. It also supports Retell, Voiceflow, and Botpress. The white-label includes custom domains and branding. More expensive than the wrappers above, but offers a broader integration set across chatbot and voice platforms. HIPAA compliance is available as a $200/month add-on.</>, {})}

      {p(<><strong>Convocore</strong> (formerly TIXAE Agents, $20/mo base + $200/mo white-label add-on) takes a different approach. It&apos;s not a Vapi wrapper. It uses its own voice infrastructure and adds multi-channel support including WhatsApp, Instagram, Messenger, and Telegram. Pricing is credits-based. Vapi staff originally recommended the TIXAE Agents version of this product in their forum, but since rebranding to Convocore, it positions itself more as a Vapi alternative than a complement. Worth looking at if you&apos;re open to using a different voice engine and want multi-channel in one platform.</>, {})}

      {p(<><strong>Getflowetic</strong> ($99/mo) is the only option that covers Vapi and Retell alongside Make and n8n in one branded portal. If your agency stack spans voice and workflows, or if you plan to expand beyond voice-only, this is the gap it fills. <Link href="https://app.getflowetic.com/auth" style={{ color: accent }}>Free trial here</Link>, no card needed.</>, {})}

      {p(<>If you&apos;re considering leaving Vapi entirely for better per-minute economics, platforms like Trillet ($99–$299/mo, $0.09/min all-in) and Synthflow (now pay-as-you-go with enterprise white-label) own their own voice stacks. Lower per-minute costs, but you&apos;re rebuilding on a different platform. That&apos;s a separate decision from adding a dashboard to your existing Vapi setup.</>, {})}

      {/* ── SECTION 6 — PRICING ── */}
      {h2("pricing", "What does Vapi white label pricing look like for agencies?")}
      {p("Let's separate two things that get confused constantly: what Vapi charges you, and what the dashboard layer costs.")}

      {p(<><strong>What Vapi charges (your cost):</strong></>, {})}
      {p("Vapi's pricing is usage-based. The headline rate is $0.05/minute for orchestration. But that's just the platform fee. You also pay separately for your LLM (like GPT-4o at roughly $0.06–$0.10/min), speech-to-text, text-to-speech, and telephony. In production, most agencies land between $0.13 and $0.33 per minute total. Vapi gives you $10 in free credits to start.")}

      {p(<><strong>What the dashboard layer costs (verified March 2026):</strong></>, {})}
      <div style={{ overflowX: "auto", margin: "1rem 0 1.5rem", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Platform", "Entry Price", "Unlimited Clients At", "Key Strength"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Voicerr", "$28/mo", "$28/mo (all plans)", "Most features per dollar"],
              ["Vapify", "$29/mo", "$399/mo (Enterprise)", "Official Vapi partner, expert support"],
              ["VoiceAIWrapper", "$29/mo", "$249/mo (Scale)", "6 voice providers in one dashboard"],
              ["Getflowetic", "$99/mo", "$99/mo", "Voice + workflow (Make, n8n) in one portal"],
              ["ChatDash", "$120/mo", "Varies by plan", "Broad chatbot platform support"],
              ["Convocore", "$220/mo total", "$220/mo + $15/extra client", "Multi-channel (voice + chat + social)"],
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

      {p(<>The important number isn&apos;t what the dashboard costs you. It&apos;s what you charge clients on top of it. A $28/month Voicerr account pays for itself the moment one client pays $149/month for portal access. Everything after that is margin. For a side-by-side comparison that includes workflow platforms too, there&apos;s a full breakdown in the <Link href="/blog/best-white-label-ai-dashboard-agencies" style={{ color: accent }}>best white-label AI dashboard guide</Link>.</>)}

      {/* ── SECTION 7 — DECISION FRAMEWORK ── */}
      {h2("decision", "Quick decision framework")}
      {p("Too many options? Here's how to narrow it down fast.")}

      {[
        ["Are you Vapi-only and testing the model with your first few clients?", "Start with Voicerr ($28/mo) or Vapify ($29/mo). Both get you a working white-label portal with Stripe billing for under $30. Validate that clients will pay for dashboard access before you invest more."],
        ["Do you run Vapi alongside Make, n8n, or Retell?", "Getflowetic is the only platform that covers voice and workflow analytics in one branded portal. That matters when clients want one dashboard for everything, not separate logins."],
        ["Do you use multiple voice providers (Vapi + Retell + ElevenLabs)?", "VoiceAIWrapper supports six providers from one dashboard. If provider flexibility is your edge, this is the strongest multi-provider option at $29/month to start."],
        ["Do your clients need chat, WhatsApp, Instagram, and voice together?", "Convocore covers all channels from one platform. But you're leaving Vapi behind and using their own voice infrastructure instead. Different engine, same agency model."],
      ].map(([q, a]) => (
        p(<><strong>{q}</strong> {a}</>, {})
      ))}

      {/* ── FAQ ── */}
      {h2("faq", "Vapi white label dashboard FAQ")}
      <div style={{ marginTop: "1rem" }}>
        {[
          ["Can you white label Vapi?", "Vapi doesn't offer a white-label version of its dashboard for agencies. You connect Vapi's API to a white-label portal platform like Getflowetic, VoiceAIWrapper, Vapify, Voicerr, or ChatDash. The client sees your brand. Vapi's own staff has acknowledged this gap and points to third-party solutions in their community forum."],
          ["What is a Vapi white label dashboard?", "It's a branded client portal showing your AI voice agent results under your agency's brand. The dashboard displays call volume, success rates, cost per call, and transcripts. Your client logs in and sees their data, your logo, your colors. No Vapi branding is visible anywhere."],
          ["How do agencies charge for Vapi voice agent services?", "Most charge $500 to $3,000 per month depending on call volume and complexity. The typical model combines a monthly portal fee ($99 to $299) with a per-minute markup. Vapi's real production cost is $0.13 to $0.33 per minute (not the $0.05 headline). Agencies bill clients $0.25 to $0.50 per minute and keep the margin."],
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
      {p("A branded portal closes that gap. Pick the one that matches your stack, validate with one paying client, and scale from there. The agencies making recurring revenue from voice AI in 2026 aren't the ones with the fanciest agents. They're the ones who made the work visible.")}
      {p(<>If you want to skip the custom build and start charging clients this week, <Link href="https://app.getflowetic.com/auth" style={{ color: accent, textDecoration: "underline", textUnderlineOffset: "3px" }}>Getflowetic has a free trial</Link>, no card required.</>)}

    </div>
  );
}
