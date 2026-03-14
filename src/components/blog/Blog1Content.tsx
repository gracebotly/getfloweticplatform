import Link from "next/link";

/* ─── design tokens (mirror the HTML) ─── */
const accent = "#7c3aed";
const accentLight = "#ede9fe";
const accentMid = "#a78bfa";
const accentBorder = "#c4b5fd";
const border = "#e8e4e0";
const bg = "#faf9f7";
const card = "#ffffff";
const calloutBg = "#f5f3ff";
const textPrimary = "#1a1a1a";
const textSecondary = "#555";
const textMuted = "#888";
const green = "#059669";
const red = "#dc2626";
const yellow = "#fde047";

const serif: React.CSSProperties = { fontFamily: "'Lora', Georgia, serif" };
const sans: React.CSSProperties = { fontFamily: "'DM Sans', system-ui, sans-serif" };
const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };

export function Blog1Content() {
  return (
    <div style={{ ...serif, color: textPrimary, lineHeight: 1.85 }}>
      {/* ── HERO SVG ── */}
      <figure
        style={{
          margin: "2rem 0 2.5rem",
          borderRadius: 16,
          overflow: "hidden",
          background: accentLight,
          minHeight: 280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${border}`,
        }}
      >
        <svg
          viewBox="0 0 680 300"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", maxHeight: 300 }}
        >
          <rect width="680" height="300" fill={accentLight} />
          {/* desk */}
          <rect x="100" y="205" width="480" height="18" rx="4" fill={accentBorder} />
          <rect x="140" y="223" width="18" height="55" fill={accentMid} />
          <rect x="522" y="223" width="18" height="55" fill={accentMid} />
          {/* stacked papers */}
          <rect x="120" y="168" width="80" height="10" rx="2" fill="#fff" stroke={accent} strokeWidth="1.5" />
          <rect x="118" y="161" width="82" height="10" rx="2" fill="#f5f3ff" stroke={accent} strokeWidth="1.5" />
          <rect x="122" y="154" width="78" height="10" rx="2" fill="#fff" stroke={accent} strokeWidth="1.5" />
          {/* sticky notes */}
          <rect x="155" y="145" width="28" height="28" rx="3" fill={yellow} />
          <rect x="190" y="152" width="24" height="24" rx="3" fill="#86efac" />
          {/* person */}
          <circle cx="340" cy="135" r="38" fill="#fff" stroke={textPrimary} strokeWidth="2.5" />
          <rect x="302" y="170" width="76" height="38" rx="12" fill="#fff" stroke={textPrimary} strokeWidth="2.5" />
          <circle cx="328" cy="130" r="4" fill={textPrimary} />
          <circle cx="352" cy="130" r="4" fill={textPrimary} />
          <path d="M325 150 Q340 143 355 150" stroke={textPrimary} strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* robot */}
          <rect x="460" y="148" width="64" height="56" rx="12" fill={accent} />
          <circle cx="492" cy="137" r="22" fill={accent} />
          <circle cx="483" cy="134" r="5" fill={accentLight} />
          <circle cx="501" cy="134" r="5" fill={accentLight} />
          <path d="M483 147 Q492 153 501 147" stroke={accentLight} strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* tablet */}
          <rect x="510" y="162" width="48" height="34" rx="5" fill="#fff" stroke={textPrimary} strokeWidth="1.5" />
          <rect x="515" y="167" width="38" height="6" rx="2" fill={accentMid} />
          <rect x="515" y="176" width="16" height="14" rx="2" fill={accentLight} />
          <rect x="534" y="176" width="19" height="14" rx="2" fill={accentBorder} />
          {/* sparkles */}
          <text x="430" y="115" fontSize="20" fill={yellow}>
            ✦
          </text>
          <text x="540" y="104" fontSize="14" fill="#86efac">
            ✦
          </text>
        </svg>
        <figcaption
          style={{
            ...sans,
            fontSize: "0.78rem",
            color: textMuted,
            fontStyle: "italic",
            padding: "0.75rem 1.5rem",
            textAlign: "center",
          }}
        >
          Your clients can&apos;t see what your AI is doing. A branded portal fixes that.
        </figcaption>
      </figure>

      {/* ── LEAD PARAGRAPH ── */}
      <p
        style={{
          fontSize: "1.05rem",
          color: "#333",
          fontStyle: "italic",
          borderLeft: `3px solid ${accentMid}`,
          paddingLeft: "1.25rem",
          marginBottom: "1.6rem",
          lineHeight: 1.8,
        }}
      >
        Your clients can&apos;t see what your AI agents are doing. The calls are being handled. The workflows are running. The ROI is
        real. But from where your client sits, nothing is visibly happening — so when renewal comes around, they hesitate. Not
        because the work stopped. Because they never saw it.
      </p>
      <p style={{ marginBottom: "1.4rem" }}>
        That&apos;s the actual churn problem for AI automation agencies in 2026. A branded client portal is the fix — not a PDF
        report, not a weekly email, but a dashboard they log into under your brand showing exactly what their money is doing.
      </p>
      <p style={{ marginBottom: "1.4rem" }}>
        This guide covers what that portal needs to include, what the real options cost, and the math to run before you choose
        one.
      </p>

      {/* ── PRODUCT CALLOUT ── */}
      <div
        style={{
          background: calloutBg,
          border: `1.5px solid ${accentBorder}`,
          borderRadius: 12,
          padding: "1.5rem 1.75rem",
          margin: "2.5rem 0",
          display: "flex",
          gap: "1.25rem",
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: "1.6rem", flexShrink: 0, marginTop: "0.1rem" }}>⚡</span>
        <div>
          <p style={{ ...sans, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.35rem", color: accent }}>
            Getflowetic — White-Label Portals in 60 Seconds
          </p>
          <p style={{ ...sans, fontSize: "0.9rem", marginBottom: "0.75rem", color: "#444" }}>
            Connect Vapi, Retell, Make, or n8n. Generate a branded client dashboard with Stripe billing. The only platform
            supporting both voice AND workflow analytics in one portal.
          </p>
          <Link
            href="https://app.getflowetic.com/auth"
            style={{
              ...sans,
              display: "inline-block",
              fontSize: "0.82rem",
              fontWeight: 700,
              background: accent,
              color: "white",
              padding: "0.45rem 1rem",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Start Free Trial →
          </Link>
        </div>
      </div>

      {/* ── SECTION 1 ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        What should a white-label AI client dashboard actually include?
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>Most platforms get one or two of these right. Make sure you are getting all five before you commit.</p>
      {[
        [
          "Complete branding — no asterisks.",
          "Your logo, your domain, your colors. Not \"mostly yours.\" Your client should genuinely think you built this. Partial white-labeling — where the underlying platform name is still visible somewhere — actively undermines premium pricing.",
        ],
        [
          "Real-time platform data.",
          "For voice agencies: call volume, success rates, sentiment, and transcripts from Vapi or Retell. For workflow agencies: execution counts, failure rates, and runtime trends from Make or n8n. A dashboard running on weekly CSV exports is a spreadsheet with a logo on it.",
        ],
        [
          "ROI metrics your client actually understands.",
          "\"847 calls handled this month, saving an estimated $12,400 in staff costs\" is a renewal. A raw call log is not. The platform should do that translation automatically.",
        ],
        [
          "Stripe billing built in.",
          "If you want to charge clients monthly for portal access — and you should — the platform needs Stripe Connect so payments go directly to your account.",
        ],
        [
          "Setup under 10 minutes without a developer.",
          "If a new client portal requires engineering time, the tool was not built for agencies. The setup should be a wizard, not a project.",
        ],
      ].map(([title, body]) => (
        <p key={title} style={{ marginBottom: "1.4rem" }}>
          <strong>{title}</strong> {body}
        </p>
      ))}

      {/* ── SECTION 2 — DECISION TREE SVG ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        How much does a white-label AI dashboard cost?
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>Four real options in 2026. Price range: $29/month to $80,000+ to build your own.</p>

      <figure
        style={{
          margin: "2rem 0",
          borderRadius: 14,
          overflow: "hidden",
          background: bg,
          border: `1px solid ${border}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxHeight: 280 }}>
          <rect width="660" height="280" fill={bg} />
          <text
            x="330"
            y="28"
            textAnchor="middle"
            fontFamily="'DM Sans',sans-serif"
            fontWeight="700"
            fontSize="12"
            fill={textPrimary}
            letterSpacing="1"
          >
            WHICH DASHBOARD FITS YOUR AGENCY?
          </text>
          {/* start box */}
          <rect x="255" y="45" width="150" height="44" rx="8" fill={card} stroke={textPrimary} strokeWidth="2" />
          <text x="330" y="63" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="11" fill={textPrimary}>
            YOUR AI STACK
          </text>
          <text x="330" y="79" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="10" fill={textSecondary}>
            Vapi · Retell · Make · n8n
          </text>
          {/* arrow down */}
          <line x1="330" y1="89" x2="330" y2="113" stroke={textPrimary} strokeWidth="2" />
          <polygon points="330,118 325,108 335,108" fill={textPrimary} />
          {/* diamond */}
          <polygon points="330,118 395,153 330,188 265,153" fill="#f5f3ff" stroke={accent} strokeWidth="2" />
          <text x="330" y="149" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="10" fill={accent}>
            VOICE
          </text>
          <text x="330" y="162" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="10" fill={accent}>
            ONLY?
          </text>
          {/* left — YES */}
          <line x1="265" y1="153" x2="155" y2="153" stroke={textPrimary} strokeWidth="2" />
          <polygon points="150,153 162,148 162,158" fill={textPrimary} />
          <text x="210" y="146" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={textMuted}>
            YES
          </text>
          {/* right — NO */}
          <line x1="395" y1="153" x2="505" y2="153" stroke={textPrimary} strokeWidth="2" />
          <polygon points="510,153 498,148 498,158" fill={textPrimary} />
          <text x="450" y="146" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={textMuted}>
            NO
          </text>
          {/* VoiceAIWrapper */}
          <rect x="30" y="123" width="120" height="58" rx="8" fill={card} stroke={textPrimary} strokeWidth="2" />
          <text x="90" y="145" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="10" fill={textPrimary}>
            VOICEAIWRAPPER
          </text>
          <text x="90" y="159" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="9" fill={textSecondary}>
            $29–$499/mo
          </text>
          <text x="90" y="173" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={green}>
            Billing ✓
          </text>
          {/* VoiceAI Portal */}
          <rect x="30" y="198" width="120" height="58" rx="8" fill={card} stroke={textPrimary} strokeWidth="2" />
          <text x="90" y="220" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="10" fill={textPrimary}>
            VOICE AI PORTAL
          </text>
          <text x="90" y="234" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="9" fill={textSecondary}>
            $29/mo
          </text>
          <text x="90" y="248" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={red}>
            No billing
          </text>
          <line x1="90" y1="181" x2="90" y2="198" stroke={textPrimary} strokeWidth="1.5" />
          {/* Getflowetic — highlighted */}
          <rect x="508" y="117" width="132" height="74" rx="8" fill={accent} />
          <text x="574" y="139" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="11" fill="#fff">
            GETFLOWETIC
          </text>
          <text x="574" y="154" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="9" fill={accentLight}>
            $99–$299/mo
          </text>
          <text x="574" y="168" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={accentBorder}>
            Voice + Workflows ✓
          </text>
          <text x="574" y="182" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={accentBorder}>
            Billing ✓
          </text>
          {/* recommended badge */}
          <rect x="532" y="104" width="84" height="17" rx="8" fill={yellow} />
          <text x="574" y="116" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="9" fill={textPrimary}>
            ★ RECOMMENDED
          </text>
        </svg>
        <figcaption
          style={{
            ...sans,
            fontSize: "0.78rem",
            color: textMuted,
            fontStyle: "italic",
            marginTop: "0.75rem",
            textAlign: "center",
          }}
        >
          Decision tree: which white-label dashboard fits your agency stack?
        </figcaption>
      </figure>

      {/* ── COMPARISON TABLE ── */}
      <div style={{ overflowX: "auto", margin: "2rem 0", borderRadius: 10, border: `1px solid ${border}` }}>
        <table style={{ width: "100%", borderCollapse: "collapse", ...sans, fontSize: "0.84rem" }}>
          <thead>
            <tr style={{ background: "#f3f0ff" }}>
              {["Platform", "Starting Price", "Vapi / Retell", "Make / n8n", "Stripe Billing", "Setup"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "0.75rem 1rem",
                    textAlign: "left",
                    fontWeight: 700,
                    color: accent,
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    borderBottom: `2px solid ${accentBorder}`,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Getflowetic", "$99/mo", true, true, true, "60 sec"],
              ["VoiceAIWrapper", "$29/mo", true, false, true, "Hours"],
              ["VoiceAI Portal", "$29/mo", true, false, false, "<10 min"],
              ["Stammer.ai", "$197/mo", "⚠ Own only", false, "Internal", "Minutes"],
              ["Custom build", "$10K–$80K+", "DIY", "DIY", "DIY", "Weeks"],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "0.75rem 1rem",
                      borderBottom: `1px solid ${border}`,
                      verticalAlign: "top",
                      background: i % 2 === 1 ? bg : card,
                      fontWeight: j === 0 ? 700 : 400,
                    }}
                  >
                    {cell === true ? (
                      <span style={{ color: green, fontWeight: 700 }}>✓ Native</span>
                    ) : cell === false ? (
                      <span style={{ color: red, fontWeight: 700 }}>✗ None</span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginBottom: "1.4rem" }}>
        <strong>The thing no other comparison says out loud:</strong> Stammer.ai builds AI agents for you using its own
        infrastructure. If you already built your stack on Vapi, Retell, Make, or n8n, Stammer cannot generate a passthrough
        dashboard for those platforms. It is a genuinely great product — just not for this use case. VoiceAIWrapper and VoiceAI
        Portal are the same story: excellent for voice-only stacks, completely absent for workflow agencies.
      </p>

      {/* ── SECTION 3 — SCENARIOS ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        Which AI automation agencies actually need this?
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>Not everyone. Here is who this is actually built for.</p>

      {[
        {
          icon: "🎙️",
          title: "Voice AI agencies (Vapi or Retell)",
          body: "You built AI phone receptionists, sales dialers, or appointment setters. Your clients have zero visibility into call outcomes. A branded analytics portal turns your invisible backend into a visible, chargeable product clients log in to check — and reduces churn because clients who see ROI weekly don't cancel.",
        },
        {
          icon: "⚙️",
          title: "Workflow automation agencies (Make or n8n)",
          body: "You built a lead qualification workflow or CRM enrichment pipeline. It runs quietly and your clients have no idea what it's doing. A workflow dashboard shows them execution counts, failure rates, and time saved — turning a one-time project into a recurring retainer. This market is completely open. Nobody else serves n8n agencies with a white-labeled client portal.",
        },
        {
          icon: "🔀",
          title: "Mixed-stack agencies (voice + workflows)",
          body: "You use Vapi for inbound voice and n8n for backend automation. Your clients get one consolidated portal showing both — one login, one branded view, one monthly fee. Getflowetic is the only platform that aggregates voice and workflow data in a single white-labeled portal.",
        },
      ].map(({ icon, title, body }) => (
        <div
          key={title}
          style={{
            background: card,
            border: `1px solid ${border}`,
            borderRadius: 10,
            padding: "1.4rem 1.6rem",
            margin: "1.25rem 0",
            borderLeft: `4px solid ${accent}`,
          }}
        >
          <p style={{ ...sans, fontWeight: 700, fontSize: "0.9rem", color: accent, marginBottom: "0.5rem" }}>
            {icon} {title}
          </p>
          <p style={{ ...sans, fontSize: "0.88rem", color: "#444", marginBottom: 0 }}>{body}</p>
        </div>
      ))}

      {/* ── SECTION 4 — ROI ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        What is the ROI of a branded client portal?
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>Run this math before you decide it is not worth the platform cost.</p>

      {/* ROI scale SVG */}
      <figure
        style={{
          margin: "2rem 0",
          borderRadius: 14,
          overflow: "hidden",
          background: card,
          border: `1px solid ${border}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxHeight: 220 }}>
          <rect width="560" height="220" fill="#fff" />
          <rect x="274" y="60" width="12" height="110" rx="4" fill={accentBorder} stroke={accent} strokeWidth="1.5" />
          <rect x="230" y="168" width="100" height="12" rx="6" fill={accent} />
          <line x1="100" y1="85" x2="460" y2="108" stroke={textPrimary} strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="107" cy="115" rx="50" ry="12" fill="#f5f3ff" stroke={textPrimary} strokeWidth="2" />
          <line x1="107" y1="85" x2="107" y2="115" stroke={textPrimary} strokeWidth="2" />
          <ellipse cx="107" cy="102" rx="22" ry="7" fill={yellow} stroke={textPrimary} strokeWidth="1.5" />
          <rect x="85" y="86" width="44" height="16" fill={yellow} stroke={textPrimary} strokeWidth="1.5" />
          <ellipse cx="107" cy="86" rx="22" ry="7" fill="#fef9c3" stroke={textPrimary} strokeWidth="1.5" />
          <text x="107" y="93" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fontWeight="700" fill={textPrimary}>
            $99/mo
          </text>
          <ellipse cx="453" cy="150" rx="60" ry="13" fill="#f5f3ff" stroke={textPrimary} strokeWidth="2" />
          <line x1="453" y1="108" x2="453" y2="150" stroke={textPrimary} strokeWidth="2" />
          <ellipse cx="453" cy="120" rx="36" ry="30" fill={yellow} stroke={textPrimary} strokeWidth="2" />
          <text x="453" y="118" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="10" fontWeight="700" fill={textPrimary}>
            $745
          </text>
          <text x="453" y="131" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={textSecondary}>
            /mo
          </text>
          <ellipse cx="453" cy="90" rx="10" ry="6" fill={accent} />
          <rect x="490" y="130" width="46" height="42" rx="10" fill={accent} />
          <circle cx="513" cy="120" r="18" fill={accent} />
          <circle cx="506" cy="118" r="4" fill={accentLight} />
          <circle cx="520" cy="118" r="4" fill={accentLight} />
          <path d="M506 128 Q513 134 520 128" stroke={accentLight} strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="390" y="75" fontSize="16" fill={yellow}>
            ✦
          </text>
          <text x="430" y="60" fontSize="11" fill="#86efac">
            ✦
          </text>
        </svg>
        <figcaption
          style={{
            ...sans,
            fontSize: "0.78rem",
            color: textMuted,
            fontStyle: "italic",
            marginTop: "0.75rem",
            textAlign: "center",
          }}
        >
          The math: $99/month platform cost. $745/month in portal revenue from 5 clients.
        </figcaption>
      </figure>

      {/* ROI cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", margin: "2rem 0" }}>
        {[
          {
            label: "Scenario 1 · Voice, 5 clients",
            number: "$646",
            sub: "net/mo after $99 Getflowetic\n($149/mo × 5 clients)",
          },
          {
            label: "Scenario 2 · n8n, 10 clients",
            number: "$691",
            sub: "net/mo after $299 Pro plan\n($99/mo × 10 clients)",
          },
          {
            label: "Scenario 3 · Mixed, 15 clients",
            number: "$1,586",
            sub: "net/mo · $19K/yr new\nrecurring revenue",
          },
        ].map(({ label, number, sub }) => (
          <div
            key={label}
            style={{
              background: card,
              border: `1px solid ${border}`,
              borderRadius: 10,
              padding: "1.25rem 1.4rem",
              borderTop: `3px solid ${accent}`,
            }}
          >
            <div
              style={{
                ...mono,
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: textMuted,
                marginBottom: "0.4rem",
              }}
            >
              {label}
            </div>
            <div style={{ ...sans, fontSize: "1.5rem", fontWeight: 700, color: accent }}>
              {number}
              <span style={{ fontSize: "1rem", fontWeight: 400, color: textMuted }}>/mo</span>
            </div>
            <div style={{ ...sans, fontSize: "0.78rem", color: textSecondary, marginTop: "0.2rem", whiteSpace: "pre-line" }}>{sub}</div>
          </div>
        ))}
      </div>

      <p style={{ marginBottom: "1.4rem" }}>
        The portal does not just cover its own cost. It creates a new recurring revenue line on top of the retainer you are
        already charging — and it reduces churn, because clients who log in to a dashboard every week do not cancel at renewal.
      </p>

      {/* ── SECTION 5 — COMPETITOR CARDS ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        Stammer.ai vs VoiceAIWrapper vs VoiceAI Portal vs Getflowetic
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>Here is what each one actually is, based on their current live product.</p>

      {[
        {
          price: "$197 – $497 /mo",
          name: "Stammer.ai",
          body: "A white-label AI agent builder. Agencies use Stammer to build and resell chat and voice AI agents under their own brand. Well-established — 1,300+ agency customers and strong community. What it does not do: Stammer builds agents using its own infrastructure. If you already built agents on Vapi, Retell, Make, or n8n, Stammer cannot generate a passthrough analytics dashboard for those platforms.",
          verdict:
            "✓ Best for agencies who want to build and resell AI agents from scratch. ✗ Not for agencies with existing Vapi/Retell/Make/n8n stacks who need client reporting.",
          highlight: false,
        },
        {
          price: "$29 – $499 /mo",
          name: "VoiceAIWrapper",
          body: "A white-label wrapper for voice AI providers. Connect Vapi, Retell, ElevenLabs, Bolna, Deepgram, or Ultravox — and give clients a branded portal under your domain. No per-minute markup. SOC2, GDPR, HIPAA compliant. Stripe billing built in. What it does not do: no Make or n8n workflow analytics at all. If any part of your stack is workflow-based, VoiceAIWrapper cannot represent that work in a client dashboard.",
          verdict: "✓ Best choice for voice-only agencies at any budget who want billing included. ✗ Not for workflow agencies.",
          highlight: false,
        },
        {
          price: "$29 /mo",
          name: "VoiceAI Portal",
          body: "A clean voice analytics portal for Retell, Vapi, and ElevenLabs agencies. Standout feature: automatic ROI calculation showing clients how much they saved versus a human receptionist ($32,000–$45,000/year per agent). Magic link login. Setup under 10 minutes. What it does not do: voice-only, no workflows, and no native billing — you cannot charge clients through the portal itself.",
          verdict: "✓ Best for voice-only agencies on a tight budget who only need analytics and ROI proof. ✗ Not suitable if you need billing or workflow dashboards.",
          highlight: false,
        },
        {
          price: "$99 – $299 /mo",
          name: "Getflowetic ← The One That Covers the Full Stack",
          body: "The white-label monetization layer for AI automation agencies. Connects Vapi, Retell, Make, and n8n — and delivers branded client dashboards with Stripe Connect billing. Custom domain on the Professional plan means clients see clients.youragency.com, not getflowetic.com. What it does not do: not designed for agencies who want to build and resell agents from scratch. Getflowetic is a dashboard layer for agencies that already built their stack.",
          verdict:
            "✓ Best for any agency using Vapi, Retell, Make, or n8n who wants a branded recurring-revenue portal. The only option if you run a workflow or mixed-stack agency.",
          highlight: true,
        },
      ].map(({ price, name, body, verdict, highlight }) => (
        <div
          key={name}
          style={{
            background: card,
            border: highlight ? `2px solid ${accent}` : `1px solid ${border}`,
            borderRadius: 12,
            padding: "1.5rem 1.75rem",
            margin: "1.5rem 0",
          }}
        >
          <span
            style={{
              ...mono,
              display: "inline-block",
              fontSize: "0.68rem",
              background: accentLight,
              color: accent,
              padding: "0.2rem 0.55rem",
              borderRadius: 4,
              marginBottom: "0.75rem",
            }}
          >
            {price}
          </span>
          <h3 style={{ ...sans, fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem", marginTop: 0 }}>{name}</h3>
          <p style={{ ...serif, fontSize: "0.95rem", marginBottom: "0.6rem", lineHeight: 1.75 }}>{body}</p>
          <div
            style={{
              ...sans,
              fontSize: "0.83rem",
              background: "#f7f7f5",
              borderRadius: 6,
              padding: "0.6rem 0.9rem",
              marginTop: "0.75rem",
              color: textSecondary,
              borderLeft: `3px solid ${accentMid}`,
            }}
          >
            {verdict}
          </div>
        </div>
      ))}

      {/* ── SECTION 6 — CUSTOM BUILD ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        Should you build a custom dashboard instead?
      </h2>

      {/* Custom build Jenga SVG */}
      <figure
        style={{
          margin: "2rem 0",
          borderRadius: 14,
          overflow: "hidden",
          background: card,
          border: `1px solid ${border}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxHeight: 200 }}>
          <rect width="560" height="200" fill="#fff" />
          <rect x="60" y="175" width="440" height="6" rx="3" fill={border} />
          <rect x="195" y="145" width="90" height="30" rx="5" fill={accentLight} stroke={accent} strokeWidth="2" transform="rotate(-3,240,160)" />
          <text x="240" y="165" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={accent}>
            {"{ API }"}
          </text>
          <rect x="200" y="115" width="80" height="30" rx="5" fill="#ddd6fe" stroke={accent} strokeWidth="2" transform="rotate(4,240,130)" />
          <text x="240" y="134" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={accent}>
            webhook
          </text>
          <rect x="205" y="85" width="72" height="30" rx="5" fill={accentLight} stroke={accent} strokeWidth="2" transform="rotate(-5,241,100)" />
          <text x="241" y="104" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={accent}>
            billing
          </text>
          <rect x="210" y="55" width="64" height="30" rx="5" fill="#ddd6fe" stroke={accent} strokeWidth="2" transform="rotate(6,242,70)" />
          <text x="242" y="74" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill={accent}>
            dashboard
          </text>
          <circle cx="150" cy="110" r="22" fill="#fff" stroke={textPrimary} strokeWidth="2" />
          <circle cx="143" cy="106" r="3" fill={textPrimary} />
          <circle cx="157" cy="106" r="3" fill={textPrimary} />
          <path d="M143 118 Q150 113 157 118" stroke={textPrimary} strokeWidth="2" fill="none" />
          <ellipse cx="165" cy="100" rx="4" ry="6" fill="#bfdbfe" />
          <rect x="128" y="132" width="44" height="44" rx="10" fill="#fff" stroke={textPrimary} strokeWidth="2" />
          <rect x="390" y="50" width="100" height="80" rx="6" fill="#fff" stroke={textPrimary} strokeWidth="2" />
          <rect x="390" y="50" width="100" height="22" rx="6" fill={red} />
          <text x="440" y="66" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="10" fill="#fff">
            6 MONTHS
          </text>
          <text x="440" y="87" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontWeight="700" fontSize="12" fill={textPrimary}>
            LATER
          </text>
          <rect x="320" y="140" width="40" height="36" rx="8" fill={accent} />
          <circle cx="340" cy="132" r="16" fill={accent} />
          <circle cx="334" cy="130" r="3.5" fill={accentLight} />
          <circle cx="346" cy="130" r="3.5" fill={accentLight} />
          <path d="M334 140 Q340 136 346 140" stroke={accentLight} strokeWidth="2" fill="none" />
          <text x="80" y="80" fontSize="18" fill={yellow} opacity="0.7">
            $
          </text>
          <text x="95" y="55" fontSize="14" fill={yellow} opacity="0.5">
            $
          </text>
          <text x="65" y="55" fontSize="11" fill={yellow} opacity="0.4">
            $
          </text>
        </svg>
        <figcaption
          style={{
            ...sans,
            fontSize: "0.78rem",
            color: textMuted,
            fontStyle: "italic",
            marginTop: "0.75rem",
            textAlign: "center",
          }}
        >
          Custom dashboards look affordable on paper. Then you add six months of developer time.
        </figcaption>
      </figure>

      <p style={{ marginBottom: "1.4rem" }}>
        Custom development is a legitimate choice for large agencies with genuinely specific requirements. But the real cost is
        rarely what it appears.
      </p>
      <p style={{ marginBottom: "1.4rem" }}>
        Initial build: $30,000–$80,000. Ongoing maintenance: $500–$2,000/month. Time to first client portal: 4–12 weeks. And
        then Vapi updates their API and something breaks at 11pm on a Sunday.
      </p>
      <p style={{ marginBottom: "1.4rem" }}>
        At $99/month, Getflowetic pays for itself with one client paying $149/month for portal access. The custom build does not
        pay for itself until you have dozens of clients — and requires developer time you almost certainly do not have right now.
      </p>

      <blockquote
        style={{
          borderLeft: `3px solid ${accent}`,
          margin: "2rem 0",
          padding: "0.75rem 0 0.75rem 1.5rem",
          color: "#444",
          fontStyle: "italic",
          fontSize: "1.05rem",
        }}
      >
        The right question is not &quot;can we build this?&quot; It&apos;s &quot;should we be building this, or selling clients right now?&quot;
      </blockquote>

      {/* ── SECTION 7 — DECISION FRAMEWORK ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        The short decision framework
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>If you are still deciding, answer these three questions.</p>
      {[
        ["Do you have a workflow stack (Make or n8n)?", "If yes: Getflowetic is your only option. Every other platform is voice-only."],
        [
          "Are you voice-only and want to charge clients for portal access?",
          "VoiceAIWrapper at $79/month (Growth) gives you billing plus branding. VoiceAI Portal at $29/month is analytics-only with no billing.",
        ],
        [
          "Do you want to build agents from scratch and resell them?",
          "That is Stammer's use case — strong product, different job to be done.",
        ],
        ["Do you use multiple platforms and want everything in one branded view?", "Getflowetic."],
      ].map(([q, a]) => (
        <p key={q} style={{ marginBottom: "1.4rem" }}>
          <strong>{q}</strong> {a}
        </p>
      ))}

      {/* ── FAQ ── */}
      <h2
        style={{
          ...serif,
          fontSize: "1.45rem",
          fontWeight: 700,
          marginTop: "3rem",
          marginBottom: "0.9rem",
          paddingTop: "1rem",
          borderTop: `2px solid ${border}`,
        }}
      >
        Frequently asked questions
      </h2>
      <div style={{ marginTop: "1rem" }}>
        {[
          [
            "What is the best white-label AI agent dashboard for automation agencies?",
            "Getflowetic is the only white-label dashboard platform that supports both voice (Vapi, Retell) and workflow (Make, n8n) platforms in a single branded portal. For voice-only agencies, VoiceAIWrapper and VoiceAI Portal are strong alternatives at lower price points.",
          ],
          [
            "What should a white-label AI client dashboard include?",
            "Complete branding with your domain (no third-party name visible), real-time data from your AI platforms, ROI metrics in plain language, Stripe billing so clients pay you directly, and setup under 10 minutes without a developer.",
          ],
          [
            "How much does a white-label AI dashboard cost?",
            "Options range from $29/month (VoiceAI Portal, voice-only, no billing) to $497/month (Stammer Full SaaS, agent builder). Getflowetic starts at $99/month and supports both voice and workflow platforms. Custom builds cost $10,000–$80,000+ upfront.",
          ],
          [
            "Can I white-label both Vapi and Make in the same dashboard?",
            "Yes, with Getflowetic. No other platform currently supports both voice (Vapi, Retell) and workflow (Make, n8n) analytics in one white-labeled client portal.",
          ],
          [
            "Do white-label dashboards include Stripe billing?",
            "Getflowetic and VoiceAIWrapper both include Stripe Connect so clients pay you directly. VoiceAI Portal does not include native billing. Stammer uses its own internal billing for agent reselling.",
          ],
          [
            "How long does it take to set up a client portal?",
            "With Getflowetic: under 60 seconds once your platforms are connected. VoiceAI Portal: under 10 minutes for voice portals. VoiceAIWrapper: a few hours to configure. Custom builds: weeks to months.",
          ],
        ].map(([q, a]) => (
          <div key={q} style={{ borderBottom: `1px solid ${border}`, padding: "1.25rem 0" }}>
            <p style={{ ...sans, fontWeight: 700, fontSize: "0.97rem", marginBottom: "0.5rem" }}>{q}</p>
            <p style={{ ...serif, fontSize: "0.93rem", lineHeight: 1.75, color: textSecondary, marginBottom: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "3rem 0" }} />

      {/* ── FOOTER CTA ── */}
      <div
        style={{
          background: calloutBg,
          border: `1.5px solid ${accentBorder}`,
          borderRadius: 12,
          padding: "1.5rem 1.75rem",
          display: "flex",
          gap: "1.25rem",
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: "1.6rem", flexShrink: 0, marginTop: "0.1rem" }}>🚀</span>
        <div>
          <p style={{ ...sans, fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.35rem", color: accent }}>
            Ready to turn your AI stack into a recurring revenue product?
          </p>
          <p style={{ ...sans, fontSize: "0.9rem", marginBottom: "0.75rem", color: "#444" }}>
            Getflowetic connects your existing Vapi, Retell, Make, or n8n setup and generates a branded client portal in 60
            seconds. 7-day free trial, no credit card required.
          </p>
          <Link
            href="https://app.getflowetic.com/auth"
            style={{
              ...sans,
              display: "inline-block",
              fontSize: "0.82rem",
              fontWeight: 700,
              background: accent,
              color: "white",
              padding: "0.45rem 1rem",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Start Free Trial →
          </Link>
        </div>
      </div>
    </div>
  );
}
