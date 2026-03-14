import Link from "next/link";

const accent = "#3c83f5";
const accentLight = "#e8f0fe";
const accentMid = "#6ba3f7";
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
const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

const p = (text: React.ReactNode, extra?: React.CSSProperties) => (
  <p style={{ ...serif, fontSize: "1rem", lineHeight: 1.85, color: textPrimary, marginBottom: "1.4rem", ...extra }}>{text}</p>
);

const h2 = (id: string, text: string) => (
  <h2 id={id} style={{ ...serif, fontSize: "1.45rem", fontWeight: 700, color: textPrimary, marginTop: "3rem", marginBottom: "0.9rem", paddingTop: "1rem", borderTop: `2px solid ${border}` }}>{text}</h2>
);

export function Blog1Content() {
  const toc = [
    { id: "best-dashboard", label: "What is the best white-label AI dashboard?" },
    { id: "why-clients-leave", label: "Why do agencies lose recurring clients?" },
    { id: "portal-requirements", label: "What should a client portal include?" },
    { id: "comparison", label: "How do the options compare?" },
    { id: "who-needs-this", label: "Which agencies need this?" },
    { id: "roi", label: "What's the ROI?" },
    { id: "custom-build", label: "Should you build your own?" },
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
      {p(<>If you're running an AI automation agency right now, there's a good chance your clients have no idea what you're actually doing for them. That's the problem a <strong>white-label AI dashboard</strong> solves.</>, { fontSize: "1.05rem" })}
      {p("The Vapi calls are being handled. The n8n workflows are running. The ROI is real. But from where your client sits, nothing is visibly happening. So when renewal comes around, they hesitate. Not because the work stopped. Because they never saw it.")}
      {p("That's the real churn problem for AI automation agencies in 2026. A branded client portal is the fix. Not a PDF report. Not a weekly email. A dashboard they log into, under your brand, showing them exactly what their money is doing.")}
      {p("This guide covers what that portal needs, what the real options cost, and the math you should run before you pick one.")}

      {/* ── SECTION 1 ── */}
      {h2("best-dashboard", "What is the best white-label AI agent dashboard for automation agencies?")}
      {p(<>Short answer: it depends on your stack. If you're voice-only (Vapi or Retell), you've got a few options. But if any part of your stack runs on Make or n8n, or if you're running voice <em>and</em> workflows together, <Link href="https://app.getflowetic.com/auth" style={{ color: accent }}>Getflowetic</Link> is currently the only platform that covers both in a single branded portal.</>)}
      {p("I'll break down all four real options below with honest pros and cons for each. But first, let's talk about why this matters so much.")}

      {/* ── SECTION 2 ── */}
      {h2("why-clients-leave", "Why do AI automation agencies lose recurring clients?")}
      {p("Here's what actually happens without a portal.")}
      {p("You build a Vapi voice receptionist that handles 400 calls a month for a dental practice. Your client has no idea. They see a quieter front desk and assume things are slow. They cancel at month three.")}
      {p("You build an n8n workflow that qualifies and enriches leads before they hit the CRM. Your client just sees cleaner data. They think that's normal. They don't renew.")}
      {p("This isn't a product problem. It's a visibility problem. The work is happening. The value is real. But invisible value doesn't survive a budget conversation. A branded portal turns your backend into something your client opens every Monday morning. That's what keeps them paying.")}
      {p(<>If you're running <Link href="/blog/can-you-white-label-n8n-agency-recurring-revenue" style={{ color: accent }}>n8n workflows for clients</Link> or <Link href="/blog/vapi-white-label-dashboard-ai-agencies" style={{ color: accent }}>Vapi voice agents</Link>, this is the gap you're probably already feeling.</>)}

      {/* ── SECTION 3 ── */}
      {h2("portal-requirements", "What should a white-label AI client dashboard include?")}
      {p("Most tools get one or two of these right. Make sure you're getting all five before you commit.")}
      {[
        ["Complete branding, no asterisks.", "Your domain, your logo, your colors. Not 'mostly yours.' The moment your client sees the underlying platform name anywhere (in a footer, an email, a subdomain), your premium positioning is gone."],
        ["Live data, not exports.", "For voice agencies: call volume, success rates, sentiment, transcripts pulled from Vapi or Retell. For workflow agencies: execution counts, failure rates, runtime trends from Make or n8n. A dashboard running on weekly CSV exports is just a spreadsheet with a logo on it."],
        ["Outcomes your client can actually read.", "'Your AI handled 847 calls last month and saved an estimated $12,400 in staff costs.' That's a renewal. A raw call log isn't. The platform should do that translation automatically, not leave it to you."],
        ["Client billing built in.", "Stripe Connect, not a manual invoice. Clients pay you directly. You set the price. The portal handles the rest."],
        ["Setup in minutes, not weeks.", "If spinning up a new client portal requires a developer, the tool wasn't built for agencies. It should be a wizard."],
      ].map(([title, body]) => (
        p(<><strong>{title}</strong> {body}</>, {})
      ))}

      {/* ── SECTION 4 — COMPARISON ── */}
      {h2("comparison", "How do the options compare?")}
      {p("There are four real platforms in this space right now. Here's where they each stand.")}

      {/* ── COMPARISON TABLE ── */}
      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: accentLight }}>
              {["Platform", "Starts at", "Vapi / Retell", "Make / n8n", "Stripe Billing", "Setup"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 700, color: accent, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.04em", borderBottom: `2px solid ${accentBorder}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {([
              ["Getflowetic", "$99/mo", true, true, true, "60 sec"],
              ["VoiceAIWrapper", "$29/mo", true, false, true, "Hours"],
              ["VoiceAI Portal", "$29/mo", true, false, false, "<10 min"],
              ["Stammer.ai", "$197/mo", "⚠ Own only", false, "Internal", "Minutes"],
              ["Custom build", "$10K–$80K+", "DIY", "DIY", "DIY", "Weeks"],
            ] as const).map((row, i) => (
              <tr key={i}>
                {(row as unknown as (string | boolean)[]).map((cell, j) => (
                  <td key={j} style={{ padding: "0.75rem 1rem", borderBottom: `1px solid ${border}`, verticalAlign: "top", background: i % 2 === 1 ? bg : card, fontWeight: j === 0 ? 700 : 400 }}>
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

      {p(<>A couple things the table doesn't show. VoiceAIWrapper and VoiceAI Portal are both solid for what they do, but they're voice-only. If any part of your stack runs on <Link href="/blog/can-you-white-label-n8n-agency-recurring-revenue" style={{ color: accent }}>n8n</Link> or <Link href="/blog/make-com-white-label-pricing-automation-agencies" style={{ color: accent }}>Make</Link>, neither platform can represent that work in a client-facing view.</>)}
      {p("Stammer.ai is a different product entirely. It builds and resells agents using its own infrastructure. If you already built your stack on Vapi, Retell, Make, or n8n, Stammer can't generate a passthrough dashboard for those platforms. It's not a competitor. It's a different starting point.")}

      {/* ── SECTION 5 — WHO IS THIS FOR ── */}
      {h2("who-needs-this", "Which type of agency actually needs a white-label dashboard?")}

      {[
        { icon: "🎙️", title: "Voice AI agencies (Vapi or Retell)", body: "Your clients have zero visibility into call outcomes right now. A branded portal showing call volume, sentiment, and estimated savings turns your invisible work into a product they pay monthly to access. It's also your strongest retention tool. Clients who see their ROI every week don't cancel." },
        { icon: "⚙️", title: "Workflow automation agencies (Make or n8n)", body: "You built automations that run quietly in the background. Your clients have no idea they exist. A workflow dashboard turns that silent work into a retained service with a dashboard fee attached. This gap is completely open. Nobody else serves n8n or Make agencies with a branded client portal." },
      ].map(({ icon, title, body }) => (
        <div key={title} style={{ background: card, border: `1px solid ${border}`, borderRadius: 10, padding: "1.4rem 1.6rem", margin: "1.25rem 0", borderLeft: `4px solid ${accent}` }}>
          <p style={{ ...sans, fontWeight: 700, fontSize: "0.9rem", color: accent, marginBottom: "0.5rem" }}>{icon} {title}</p>
          <p style={{ ...sans, fontSize: "0.88rem", color: "#444", marginBottom: 0 }}>{body}</p>
        </div>
      ))}

      {p(<>Not sure which pricing model to use for your portal? I wrote a separate guide on <Link href="/blog/how-to-sell-ai-automation-saas-recurring-revenue" style={{ color: accent }}>how to sell AI automation as a SaaS product</Link> that covers the exact math for each agency type.</>)}

      {/* ── SECTION 6 — ROI ── */}
      {h2("roi", "What's the ROI of a branded client portal?")}
      {p("Run this before you decide it's not worth the cost. It takes 60 seconds and it changes the conversation.")}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", margin: "2rem 0" }}>
        {[
          { label: "Voice agency · 5 clients", number: "$646", sub: "net/mo · $7,752/yr\n$149/mo × 5 clients" },
          { label: "n8n agency · 10 clients", number: "$691", sub: "net/mo · $8,292/yr\n$99/mo × 10 clients" },
          { label: "Mixed stack · 15 clients", number: "$1,586", sub: "net/mo · $19,032/yr\n8 voice + 7 workflow" },
        ].map(({ label, number, sub }) => (
          <div key={label} style={{ background: card, border: `1px solid ${border}`, borderRadius: 10, padding: "1.25rem 1.4rem", borderTop: `3px solid ${accent}` }}>
            <div style={{ ...mono, fontSize: "0.68rem", textTransform: "uppercase" as const, letterSpacing: "0.05em", color: textMuted, marginBottom: "0.4rem" }}>{label}</div>
            <div style={{ ...sans, fontSize: "1.5rem", fontWeight: 700, color: accent }}>{number}<span style={{ fontSize: "1rem", fontWeight: 400, color: textMuted }}>/mo</span></div>
            <div style={{ ...sans, fontSize: "0.78rem", color: textSecondary, marginTop: "0.2rem", whiteSpace: "pre-line" as const }}>{sub}</div>
          </div>
        ))}
      </div>

      {p("Here's how the voice agency math works. Getflowetic Starter at $99/month. Charge each of your 5 clients $149/month for portal access. Monthly portal revenue: $745. Net after platform cost: $646/month, or $7,752 per year from portals alone.")}
      {p("The portal doesn't just cover its own cost. It creates a recurring revenue line on top of the retainer you're already charging. And clients who log into a dashboard every week don't cancel at renewal.")}

      {/* ── SECTION 7 — CUSTOM BUILD ── */}
      {h2("custom-build", "Should you build your own dashboard?")}
      {p("It comes up. Every agency at some point thinks about building a custom dashboard.")}
      {p("A realistic build costs $30,000 to $80,000. Ongoing maintenance runs $500 to $2,000 per month. And every time Vapi, Retell, or Make updates their API (which all three do regularly), your dashboard breaks and a developer fixes it on your dime.")}
      {p("At $99/month, a purpose-built platform pays for itself the moment one client pays $149 for portal access. Build custom eventually, when you've got 50+ clients and specific requirements no platform covers. Not while you're building recurring revenue from scratch.")}

      <blockquote style={{ borderLeft: `3px solid ${accent}`, margin: "2rem 0", padding: "0.75rem 0 0.75rem 1.5rem", color: "#444", fontStyle: "italic", fontSize: "1.05rem" }}>
        The question isn&apos;t &quot;can we build this?&quot; It&apos;s &quot;should we be building this right now, or selling clients?&quot;
      </blockquote>

      {/* ── SECTION 8 — DECISION FRAMEWORK ── */}
      {h2("decision", "How do you decide which platform to use?")}
      {p("Three questions. Answer them and you'll know exactly which path to take.")}
      {[
        ["Do you have Make or n8n in your stack?", "Getflowetic is your only option right now. Every other platform is voice-only."],
        ["Are you voice-only and want to charge clients for portal access?", "VoiceAIWrapper at $79/month gives you billing plus branding. VoiceAI Portal at $29/month is analytics-only, no billing."],
        ["Do you want to build agents from scratch and resell them?", "That's Stammer's use case. Different product, different starting point."],
      ].map(([q, a]) => (
        p(<><strong>{q}</strong> {a}</>, {})
      ))}

      {/* ── FAQ ── */}
      {h2("faq", "Frequently asked questions")}
      <div style={{ marginTop: "1rem" }}>
        {[
          ["What is the best white-label AI agent dashboard for automation agencies?", "Getflowetic. It's the only platform that supports both voice (Vapi, Retell) and workflow (Make, n8n) analytics in a single branded client portal. For voice-only agencies, VoiceAIWrapper and VoiceAI Portal are strong alternatives at lower price points."],
          ["What should a white-label AI client dashboard include?", "Five things: complete branding with your domain (no third-party name visible anywhere), real-time platform data, ROI metrics in plain language, Stripe billing so clients pay you directly, and setup under 10 minutes without a developer."],
          ["How much does a white-label AI dashboard cost?", "From $29/month for voice-only tools up to $80,000+ to build custom. Getflowetic starts at $99/month for voice and workflow platforms combined. The platform pays for itself with one paying client."],
          ["Can I use Vapi and Make in the same portal?", "Yes, with Getflowetic. It's the only platform that combines voice and workflow analytics in a single white-labeled client view. VoiceAIWrapper and VoiceAI Portal are voice-only."],
          ["Does it include Stripe billing?", "Getflowetic and VoiceAIWrapper both include Stripe Connect, so clients pay you directly. VoiceAI Portal doesn't include native billing. Stammer uses its own internal billing for agent reselling."],
          ["How fast is setup?", "Under 60 seconds with Getflowetic once your platforms are connected. Under 10 minutes with VoiceAI Portal for voice portals. Weeks to months for a custom build."],
        ].map(([q, a]) => (
          <div key={q} style={{ borderBottom: `1px solid ${border}`, padding: "1.25rem 0" }}>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.97rem", marginBottom: "0.5rem" }}>{q}</p>
            <p style={{ ...serif, fontSize: "0.93rem", lineHeight: 1.75, color: textSecondary, marginBottom: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "3rem 0" }}/>

      {/* ── CLOSING ── */}
      {p("If you're running an AI automation agency and your clients can't see what you're doing, you're leaving money on the table every single month. A branded portal doesn't just reduce churn. It creates a new revenue line you probably aren't charging for yet.")}
      {p(<>If you want to skip the custom build and start charging clients this week, <Link href="https://app.getflowetic.com/auth" style={{ color: accent, textDecoration: "underline", textUnderlineOffset: "3px" }}>Getflowetic has a free trial</Link>, no card required.</>)}

    </div>
  );
}
