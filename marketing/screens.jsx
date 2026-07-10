/* KindGifts marketing — Home / How It Works / Campaign screens. */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { GiftCTA, Button, WhatsAppButton, Card, Badge, VerifiedBadge, ProgressBar, TrustChip, StatBlock, Money, Input } = NS;
const Icon = window.KGIcon;
const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };

const Eyebrow = ({ children, dark }) => <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", color: dark ? "var(--pink-300)" : "var(--pink-500)", marginBottom: 14 }}>{children}</div>;
const H2 = ({ children, style }) => <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-.02em", ...style }}>{children}</h2>;

/* ============ HOME ============ */
function Home({ go }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "radial-gradient(120% 120% at 80% 0%, var(--olive-50), var(--cream) 55%)", paddingBottom: 8 }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 48, alignItems: "center", padding: "64px 24px 72px" }} className="kg-hero-grid">
          <div>
            <Eyebrow>Simple · Transparent · Secure</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 5.4vw, 60px)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-.025em", color: "var(--text-strong)" }}>
              Medical Crowdfunding, Powered by <span style={{ color: "var(--pink-500)" }}>Community Kindness.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--text-body)", marginTop: 20, maxWidth: 520 }}>
              No one should face a medical crisis alone. KindGifts connects patients in need of critical cancer and healthcare funding with a global community ready to support them. Backed by Sebeccly Cancer Care's 20-year legacy of trust, we transform medical bills into gifts of hope.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
              <GiftCTA type="need" size="lg" onClick={() => go("need")} />
              <GiftCTA type="give" size="lg" onClick={() => go("campaign")} />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 22, alignItems: "center", color: "var(--text-muted)", fontSize: 14 }}>
              <VerifiedBadge size="sm" label="Every campaign verified" /> · <span>100% of vetted funds go to care</span>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-2xl)", background: "var(--olive-100)", boxShadow: "var(--shadow-lg)", overflow: "hidden" }}>
              <img src={window.KG_PHOTO(window.KGP.hero, 800, 1000, "faces")} alt="Community holding hands in Lagos, Nigeria" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <Card padding={16} style={{ position: "absolute", left: -20, bottom: 28, width: 230, boxShadow: "var(--shadow-lg)" }}>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8, fontWeight: 600 }}>Ada's radiotherapy</div>
              <ProgressBar raised={6500000} goal={10500000} height={9} />
            </Card>
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section style={{ background: "var(--olive-700)", color: "var(--text-on-dark)", padding: "56px 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 44, alignItems: "center" }} className="kg-trust-grid">
            <div>
              <Eyebrow dark>Institutional-grade trust</Eyebrow>
              <H2 style={{ color: "var(--cream)", fontSize: 30 }}>Protecting your generosity every step of the way.</H2>
              <p style={{ color: "color-mix(in srgb, var(--cream) 84%, transparent)", marginTop: 14, lineHeight: 1.65, fontSize: 15 }}>
                Established in 2006, Sebeccly Cancer Care is a trusted nonprofit dedicated to expanding access to life-saving treatment. Backed by its 20-year legacy, KindGifts merges advanced AI pre-vetting and corporate KYC with independent medical oversight.
              </p>
              <p style={{ color: "color-mix(in srgb, var(--cream) 84%, transparent)", marginTop: 12, lineHeight: 1.65, fontSize: 15 }}>
                Through alliances with tier-1 commercial banks, accredited auditors, and fintech compliance partners, every transaction is legally safeguarded and fully auditable — all the way to the hospital bill.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--pink-300)", marginBottom: 14 }}>10 proof points behind every gift</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[["shield-check","20 Years of Institutional Trust"],["scan-face","AI-Driven Fraud Pre-Vetting"],["id-card","Government-Level Identity Vetting"],["stethoscope","Independent Clinical Audits"],["heart-handshake","Direct Patient Consultations"],["users","Bi-Weekly Board Oversight"],["layers","Milestone-Based Disbursements"],["file-check","Mandatory Utilization Audits"],["eye","Public Transparency Reporting"],["landmark","Absolute Donor Escrow Security"]].map(([ic, l]) => (
                  <TrustChip key={l} icon={<Icon name={ic} size={16} color="var(--cream)" />} label={l} />
                ))}
              </div>
              <button onClick={() => go("proof")} style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 18, background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 700, color: "var(--pink-300)" }}>Learn more about the 10 proof points <Icon name="arrow-right" size={16} color="var(--pink-300)" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Why we exist / philosophy */}
      <section style={{ ...wrap, padding: "72px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow>The KindGifts philosophy</Eyebrow>
          <H2>It takes a village to raise funds — but the village needs structure to survive.</H2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-body)", marginTop: 18 }}>
            By combining fintech compliance, clinical audits, and strict escrow banking, KindGifts ensures every Naira donated is mathematically and clinically guaranteed to go toward saving a real human life. We don't stop people from giving — we give them a reason to trust again.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 44 }} className="kg-3col">
          {[["shield-check","Fintech Compliance","KYC / NIN / BVN verification bypasses middlemen and proxy accounts."],["stethoscope","Healthtech Oversight","AI document checks and independent clinical audits confirm every bill."],["landmark","Escrow Banking","Funds route directly to partner hospitals — never a personal lump sum."]].map(([ic, t, d]) => (
            <Card key={t} interactive style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--olive-50)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic} size={24} color="var(--olive-600)" /></span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--text-body)" }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <ScamStory />
      <FraudTable />
      <ProcessFlow />

      {/* Getting started */}
      <section style={{ background: "var(--ivory)", padding: "72px 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
            <Eyebrow>Getting started is simple</Eyebrow>
            <H2>Three steps from crisis to care.</H2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="kg-3col">
            {[["1","Launch Your Campaign","Set up your page and share your unique link with family, friends, and WhatsApp communities in under 10 minutes."],["2","Secure Verification","Our clinical and KYC teams review medical reports behind the scenes to protect privacy and prevent fraud."],["3","Direct-to-Care Payouts","Funds are disbursed in full, directly to partnered hospitals and oncology centres, to secure treatment."]].map(([n, t, d]) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--pink-500)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, fontFamily: "var(--font-display)" }}>{n}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, color: "var(--text-strong)" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--text-body)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee transparency */}
      <section style={{ ...wrap, padding: "24px 24px 72px" }}>
        <PathsExplainer go={go} />
        <Card padding={0} style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: 24 }} className="kg-fee-grid">
          <div style={{ padding: 44 }}>
            <Eyebrow>Our commitment</Eyebrow>
            <H2 style={{ fontSize: 30 }}>Low costs, maximum impact.</H2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-body)", marginTop: 14 }}>
              KindGifts is free to join — no application or subscription fee. To keep the platform secure and sustainable, we retain a <strong style={{ color: "var(--text-strong)" }}>7–10% nonprofit support fee</strong> plus a standard <strong style={{ color: "var(--text-strong)" }}>2% processing fee</strong>.
            </p>
            <div style={{ marginTop: 24 }}><GiftCTA type="give" onClick={() => go("campaign")} /></div>
          </div>
          <div style={{ background: "var(--olive-700)", color: "var(--cream)", padding: 44, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 600 }}>2-for-1</div>
            <p style={{ margin: 0, lineHeight: 1.6, fontSize: 15, color: "color-mix(in srgb, var(--cream) 85%, transparent)" }}>For every ₦1 contributed through fees, Sebeccly raises an average of ₦1 more for patients — through corporate partnerships, matching-gift campaigns, and fundraising vouchers.</p>
          </div>
        </Card>
      </section>

      {/* Closing CTA */}
      <ClosingCTA go={go} />
    </div>
  );
}

function ClosingCTA({ go }) {
  return (
    <section style={{ background: "linear-gradient(140deg, var(--pink-600) 0%, var(--pink-800) 100%)", color: "#fff", padding: "72px 0", textAlign: "center" }}>
      <div style={{ ...wrap, maxWidth: 720 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,4.5vw,46px)", fontWeight: 600, lineHeight: 1.1, color: "#fff" }}>Be a part of the miracle today.</h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16, color: "color-mix(in srgb, #fff 92%, transparent)" }}>Whether you are starting your journey toward healing or lifting someone else's burden, your community is waiting for you.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
          <button onClick={() => go("need")} style={{ height: 56, padding: "0 32px", borderRadius: "var(--radius-pill)", border: "1.5px solid rgba(255,255,255,.6)", background: "rgba(255,255,255,.12)", color: "#fff", fontWeight: 700, fontSize: 17, cursor: "pointer" }}>🎁 Need a Gift</button>
          <button onClick={() => go("campaign")} style={{ height: 56, padding: "0 32px", borderRadius: "var(--radius-pill)", border: "none", background: "#fff", color: "var(--pink-600)", fontWeight: 700, fontSize: 17, cursor: "pointer", boxShadow: "var(--shadow-md)" }}>❤️ Give a Gift</button>
        </div>
      </div>
    </section>
  );
}

/* ---- Our Why: the anatomy of a medical scam (Save Ify) ---- */
function ScamStory() {
  return (
    <section style={{ background: "var(--olive-800)", color: "var(--cream)", padding: "72px 0" }}>
      <div style={{ ...wrap, maxWidth: 940 }}>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--pink-300)", marginBottom: 14 }}>Our why · a short story</div>
        <H2 style={{ color: "var(--cream)" }}>The anatomy of a medical scam.</H2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 22, fontSize: 16.5, lineHeight: 1.75, color: "color-mix(in srgb, var(--cream) 88%, transparent)", maxWidth: 900 }}>
          <p style={{ margin: 0 }}>A viral post tore through Nigerian social media. An influencer with over two million followers posted a tearful video from a hospital room, beside a young woman said to be fighting stage-3 breast cancer, holding a sign: <em>"Save Ify. ₦10 million needed for urgent surgery."</em></p>
          <p style={{ margin: 0 }}>Moved by the plea, kindhearted Nigerians rallied. Within 48 hours — from executives giving ₦500,000 to market women sending their last ₦1,000 — the target was surpassed, reaching <strong style={{ color: "var(--cream)" }}>₦14 million</strong>. Then the silence was deafening. No updates, no receipts, no photos of recovery.</p>
          <p style={{ margin: 0 }}>When journalists investigated, the truth broke Ify's heart. The influencer had taken ₦7 million for a car down-payment and sent Ify just ₦500,000 (4%). Ify had already completed surgery months earlier under a free state initiative — the "bills" posted online were digitally altered: date, hospital name, and fees all changed. She had shared her real documents in good faith; they were manipulated and used to raise money behind her back.</p>
          <p style={{ margin: 0 }}>Elsewhere, a genuine patient crowdfunded ₦5 million for radiotherapy that cost ₦2.5 million. Under family pressure, he diverted ₦3 million to rent and school fees and abandoned treatment. The village had rallied — but without structure and accountability, the village had been deceived. The next week, a truly indigent patient couldn't raise ₦200,000 for life-saving chemotherapy.</p>
          <p style={{ margin: 0, color: "var(--cream)", fontWeight: 600 }}>KindGifts doesn't stop people from giving. We give them a reason to trust again — replacing loose, unregulated appeals with a strict, AI-powered, medically audited pipeline, so every single Naira goes exactly where it belongs.</p>
        </div>
      </div>
    </section>
  );
}

/* ---- How KindGifts prevents each scam ---- */
function FraudTable() {
  const rows = [
    ["Document alteration & bill inflation", "Scammers edit old medical reports — changing names or multiplying invoice costs to pocket the excess.", "AI pre-vetting scans document metadata to detect manipulation, then independent clinical partners cross-verify bills directly with the hospital."],
    ["Deceptive middlemen & influencer \u201ccuts\u201d", "Third-party fundraisers exploit a patient's story, open a personal account, and siphon off large \u201cmanagement fees.\u201d", "Direct patient KYC bypasses middlemen entirely: campaigns require the beneficiary's NIN and BVN, and funds sit in tier-1 bank escrow."],
    ["Fund diversion for non-medical use", "Once a lump sum hits a personal account, funds get spent on rent, fees, or luxuries — leaving treatment incomplete.", "Funds are never released to a personal account before vetting. After the ₦500,000 threshold and full review, money routes to the treating hospital and vetted beneficiary accounts."],
    ["Cash refund schemes", "Patients who raised money externally demand cash \u201crefunds\u201d from cancer centres for treatment they no longer need.", "Under our compliance framework, funds are designated for active care. If a plan changes, funds are legally locked and protected under escrow policy."],
    ["\u201cGhost campaigns\u201d & no accountability", "Once money is raised, the creator goes silent — donors never learn whether the patient was treated.", "After disbursement, beneficiaries must upload hospital receipts confirming utilisation. These are published live on the Public Transparency Hub for donors to audit."],
  ];
  return (
    <section style={{ ...wrap, padding: "72px 24px" }}>
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
        <Eyebrow>Countermeasures</Eyebrow>
        <H2>How we shut down each scam.</H2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", marginTop: 14 }}>KindGifts cuts off the exact loopholes online scammers use to exploit philanthropic people.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {rows.map(([scam, wild, fix], i) => (
          <Card key={scam} padding={0} style={{ overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.1fr 1.3fr" }} className="kg-fraud-row">
              <div style={{ padding: 22, borderRight: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--pink-50)", color: "var(--pink-600)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontWeight: 700, fontSize: 15.5, color: "var(--text-strong)", lineHeight: 1.35 }}>{scam}</span>
                </div>
              </div>
              <div style={{ padding: 22, borderRight: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", marginBottom: 6 }}>In the wild</div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)" }}>{wild}</p>
              </div>
              <div style={{ padding: 22, background: "var(--olive-50)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--success)", marginBottom: 6 }}><Icon name="shield-check" size={14} color="var(--success)" /> How we prevent it</div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--text-strong)" }}>{fix}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---- Operational process flow (5 steps + escrow safeguard) ---- */
function ProcessFlow() {
  const steps = [
    ["scan-face", "AI Pre-Vetting & Rapid Launch", "Within 60 seconds", "On upload, our AI scans medical reports and invoices — analysing metadata for alterations, checking for duplicate invoice numbers, and flagging discrepancies before a campaign goes live."],
    ["id-card", "Bank & Identity KYC Compliance", "Triggered at ₦500,000", "NIN and BVN are validated against government databases to eliminate alias and proxy fraud. Full vetting triggers automatically at the ₦500,000 milestone, and the beneficiary submits a Guarantors' Form."],
    ["stethoscope", "Independent Clinical Audit & Consultation", "Within 7 days", "Our clinical partners contact the treating oncologist and hospital directly to verify diagnosis and costs, with a gentle consultation to confirm the medical timeline — stripping away deceptive middlemen."],
    ["banknote", "Full Fund Disbursement", "100% payout to care", "Once approved by our bi-weekly medical and compliance board, funds release in full — routed through tier-1 banking partners directly to the verified healthcare facility."],
    ["eye", "Public Transparency Hub Audit", "Post-disbursement", "The patient uploads verified hospital receipts confirming utilisation. Anonymized receipts and reports are published openly, giving the village of donors real-time proof of impact."],
  ];
  return (
    <section style={{ background: "var(--ivory)", padding: "72px 0" }}>
      <div style={{ ...wrap, maxWidth: 900 }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
          <Eyebrow>The operational process flow</Eyebrow>
          <H2>Enforcing donor integrity, end to end.</H2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map(([ic, t, tag, d], i) => (
            <div key={t} style={{ display: "flex", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--olive-600)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={22} color="#fff" /></span>
                {i < steps.length - 1 && <span style={{ width: 2, flex: 1, background: "var(--border-strong)", margin: "6px 0" }} />}
              </div>
              <div style={{ paddingBottom: 30 }}>
                <span style={{ display: "block", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--pink-600)" }}>{tag}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, color: "var(--text-strong)", margin: "3px 0 0" }}>{t}</h3>
                <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.65, color: "var(--text-body)" }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--info-bg)", borderRadius: "var(--radius-lg)", padding: 20, display: "flex", gap: 12 }}>
          <Icon name="lock" size={22} color="var(--info)" />
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--sand-700)" }}><strong>The escrow safeguard:</strong> if a campaign fails vetting or is flagged for misrepresentation, funds are legally locked in escrow — never handed to applicants. They are returned to donors or rerouted to another strictly verified patient in urgent need.</p>
        </div>
      </div>
    </section>
  );
}

/* ---- Two paths: patient vs supporter ---- */
function PathsExplainer({ go }) {
  return (
    <div>
      <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 32px" }}>
        <Eyebrow>Give a gift today</Eyebrow>
        <H2 style={{ fontSize: 32 }}>Two ways to stand with a patient.</H2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="kg-3col">
        <Card style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "4px solid var(--olive-500)" }}>
          <div style={{ fontSize: 34 }}>🎁</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--text-strong)" }}>If you are a patient: you need a gift</h3>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--text-body)" }}>Share your medical journey with a secure, supportive network. Setting up a campaign is entirely free. We walk with you to help secure the funds needed for your radiotherapy, surgery, and recovery.</p>
          <div style={{ marginTop: "auto", paddingTop: 6 }}><GiftCTA type="need" onClick={() => go("need")} /></div>
        </Card>
        <Card style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "4px solid var(--pink-500)" }}>
          <div style={{ fontSize: 34 }}>❤️</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--text-strong)" }}>If you are a supporter: you give a gift</h3>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--text-body)" }}>Browse 100% verified medical campaigns. Your donation isn't just a transaction — it is a life-saving gift that goes directly toward radiotherapy, surgery, or related patient welfare.</p>
          <div style={{ marginTop: "auto", paddingTop: 6 }}><GiftCTA type="give" onClick={() => go("campaign")} /></div>
        </Card>
      </div>
    </div>
  );
}

/* ============ HOW IT WORKS ============ */
function HowItWorks({ go }) {
  const [tab, setTab] = React.useState("policy");
  const tabs = [["policy", "Operational Policy"], ["pricing", "Pricing"], ["sustainability", "Sustainability"]];
  return (
    <div>
      <section style={{ background: "var(--olive-50)", padding: "56px 0 0" }}>
        <div style={{ ...wrap, maxWidth: 820, textAlign: "center" }}>
          <Eyebrow>How KindGifts works</Eyebrow>
          <H2>Launch fast. Verify to disburse.</H2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-body)", marginTop: 16, fontStyle: "italic" }}>"If you want to walk fast, walk alone. If you want to walk far, walk with people." — African proverb</p>
        </div>
        <div style={{ ...wrap, display: "flex", justifyContent: "center", gap: 4, marginTop: 32, borderBottom: "1px solid var(--border-subtle)" }}>
          {tabs.map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} style={{ background: "none", border: "none", borderBottom: `3px solid ${tab === k ? "var(--pink-500)" : "transparent"}`, cursor: "pointer", padding: "14px 20px", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: tab === k ? "var(--text-strong)" : "var(--text-muted)" }}>{l}</button>
          ))}
        </div>
      </section>

      <section style={{ ...wrap, padding: "56px 24px", maxWidth: 880 }}>
        {tab === "policy" && <Policy />}
        {tab === "pricing" && <Pricing go={go} />}
        {tab === "sustainability" && <Sustainability go={go} />}
      </section>
      <ClosingCTA go={go} />
    </div>
  );
}

function Policy() {
  const steps = [
    ["timer", "Fast Launch", "Under 10 minutes", "Set up your profile, share your story, upload your ID and medical documents, and launch your page immediately."],
    ["shield-check", "Secure Verification", "Triggered at ₦500,000", "We check your ID and bank details (KYC/NIN/BVN), you submit a Guarantors' Form, and our medical partners vet your clinical documents with a gentle consultation."],
    ["banknote", "Full Fund Release", "100% payout to care", "Once approved by our bi-weekly medical board, verified funds are released in full — routed directly to partner hospitals."],
    ["eye", "Public Transparency Hub", "Post-disbursement", "You upload receipts confirming utilisation. Anonymized records are published live so donors see real-time proof of impact."],
  ];
  return (
    <div>
      <div style={{ background: "var(--success-bg)", border: "1px solid color-mix(in srgb, var(--success) 25%, transparent)", borderRadius: "var(--radius-lg)", padding: "16px 20px", display: "flex", gap: 12, alignItems: "center", marginBottom: 36 }}>
        <Icon name="lock" size={22} color="var(--success)" />
        <p style={{ margin: 0, fontSize: 15, color: "var(--sand-700)", lineHeight: 1.5 }}>Full verification is triggered once a campaign reaches <strong>₦500,000</strong> in donations — using a three-pronged process: <strong>KYC</strong>, <strong>Clinical Audit</strong>, and the <strong>Guarantors' Form</strong>.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {steps.map(([ic, t, tag, d], i) => (
          <div key={t} style={{ display: "flex", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--olive-600)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={22} color="#fff" /></span>
              {i < steps.length - 1 && <span style={{ width: 2, flex: 1, background: "var(--border-strong)", margin: "6px 0" }} />}
            </div>
            <div style={{ paddingBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-strong)" }}>{t}</h3>
                <Badge tone="pink">{tag}</Badge>
              </div>
              <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.65, color: "var(--text-body)" }}>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pricing({ go }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <H2>Transparent pricing, protected fundraising.</H2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)" }}>The platform is completely free to join — we never charge an application or subscription fee. To keep operations sustainable, we retain a <strong>7–10% nonprofit support fee</strong> on donations, plus a standard <strong>2% transaction processing fee</strong>.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="kg-3col">
        <Card style={{ textAlign: "center" }}><StatBlock align="center" value="Free" label="To launch a campaign" /></Card>
        <Card style={{ textAlign: "center" }}><StatBlock align="center" accent="pink" value="7–10%" label="Nonprofit support fee" /></Card>
        <Card style={{ textAlign: "center" }}><StatBlock align="center" value="2%" label="Processing fee" /></Card>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-body)" }}>These fees fund our AI pre-vetting infrastructure, secure tier-1 banking escrows, independent audits, and clinical verification boards — and fuel the marketing and corporate-partnership engines that turn every ₦1 in fees into an average of ₦2 in additional mobilized funding for patients.</p>
      <div><GiftCTA type="give" onClick={() => go("campaign")} /></div>
    </div>
  );
}

function Sustainability({ go }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <H2>Keep KindGifts sustainable.</H2>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)" }}>Our primary mission is that your generosity goes directly to patients who need it most — so supporting our operations is entirely optional. We always want the community to prioritise funding active medical campaigns.</p>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)" }}>But maintaining an institutional-grade, AI-vetted ecosystem requires resources. If you'd like to make a voluntary donation to keep the platform operational and free for indigent patients, we deeply appreciate your extra gift.</p>
      <Card style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", background: "var(--olive-50)", border: "none" }}>
        <div><div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-strong)" }}>Support the platform</div><p style={{ margin: "4px 0 0", color: "var(--text-body)", fontSize: 14 }}>Thank you for supporting the operations of KindGifts.</p></div>
        <Button variant="action" pill leadingIcon={<span>❤️</span>}>Donate to Sebeccly</Button>
      </Card>
    </div>
  );
}

/* ============ CAMPAIGN PAGE ============ */
function Campaign({ go }) {
  const [amt, setAmt] = React.useState(25000);
  const [custom, setCustom] = React.useState(false);
  const [customAmt, setCustomAmt] = React.useState("");
  const [anon, setAnon] = React.useState(false);
  const fmtAmt = (s) => { const n = Number(String(s).replace(/[^0-9]/g, "")); return n ? n.toLocaleString() : ""; };
  const presets = [[5000, "Covers basic supportive medications"], [25000, "Contributes toward a radiotherapy session"], [100000, "Funds a major treatment session"]];
  return (
    <section style={{ ...wrap, padding: "40px 24px 72px" }}>
      <button onClick={() => { window.location.href = "../webapp/index.html#discovery"; }} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 14, marginBottom: 20, display: "inline-flex", gap: 6, alignItems: "center", fontFamily: "var(--font-sans)" }}>← Back to campaigns</button>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "start" }} className="kg-campaign-grid">
        {/* Story column */}
        <div>
          <div style={{ aspectRatio: "16/9", borderRadius: "var(--radius-xl)", background: "var(--olive-100)", marginBottom: 20, overflow: "hidden" }}><img src={window.KG_PHOTO(window.KGP.ada, 1000, 560, "faces")} alt="Ada, patient" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
            <VerifiedBadge /><Badge tone="olive">Oncology</Badge><span style={{ fontSize: 14, color: "var(--text-muted)" }}>Lagos University Teaching Hospital</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.1 }}>Help Ada complete her radiotherapy</h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", marginTop: 16 }}>
            Ada is a 34-year-old teacher and mother of two, diagnosed with stage-2 breast cancer. She has completed surgery and now needs 20 sessions of radiotherapy to finish her treatment. Every gift brings her one step closer to going home cancer-free.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", marginTop: 12 }}>
            Funds go directly to LUTH's oncology unit once vetted. Thank you for standing with our family. — <em>The Okafor family</em>
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}><WhatsAppButton label="Share Ada's story" /><Button variant="outline" leadingIcon={<Icon name="link" size={18} />}>Copy link</Button></div>
        </div>

        {/* Donation box */}
        <div style={{ position: "sticky", top: 88 }}>
          <Card padding={24} style={{ boxShadow: "var(--shadow-md)" }}>
            <ProgressBar raised={6500000} goal={10500000} />
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "12px 0 0", display: "flex", gap: 6, alignItems: "flex-start", lineHeight: 1.5 }}><Icon name="shield-check" size={15} color="var(--success)" /> Verified campaign · funds go directly to the beneficiary in full once vetted, or to LUTH.</p>
            <div style={{ height: 1, background: "var(--border-subtle)", margin: "20px 0" }} />
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-strong)", marginBottom: 12 }}>Select gift amount</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {presets.map(([v, note]) => (
                <button key={v} onClick={() => { setAmt(v); setCustom(false); }} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, textAlign: "left", padding: "13px 16px", borderRadius: "var(--radius-md)", cursor: "pointer", border: `1.5px solid ${amt === v && !custom ? "var(--pink-500)" : "var(--border-strong)"}`, background: amt === v && !custom ? "var(--pink-50)" : "var(--white)" }}>
                  <span className="ff-num" style={{ fontWeight: 700, fontSize: 18, color: amt === v && !custom ? "var(--pink-600)" : "var(--text-strong)" }}>₦{v.toLocaleString()}</span>
                  <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{note}</span>
                </button>
              ))}
              <button onClick={() => setCustom(true)} style={{ padding: "13px 16px", borderRadius: "var(--radius-md)", cursor: "pointer", border: `1.5px solid ${custom ? "var(--pink-500)" : "var(--border-strong)"}`, background: custom ? "var(--pink-50)" : "var(--white)", fontWeight: 700, fontSize: 15, color: custom ? "var(--pink-600)" : "var(--text-strong)", textAlign: "left" }}>Custom amount</button>
              {custom && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 16px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--pink-500)", background: "var(--white)" }}>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text-strong)" }}>₦</span>
                  <input autoFocus value={customAmt} onChange={(e) => setCustomAmt(fmtAmt(e.target.value))} inputMode="numeric" placeholder="Enter amount" className="ff-num" style={{ flex: 1, border: "none", outline: "none", background: "transparent", padding: "12px 0", fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 700, color: "var(--text-strong)" }} />
                </div>
              )}
            </div>
            <label style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 16, cursor: "pointer" }}>
              <span onClick={(e) => { e.preventDefault(); setAnon(a => !a); }} style={{ width: 44, height: 26, borderRadius: 999, background: anon ? "var(--olive-600)" : "var(--sand-300)", position: "relative", flexShrink: 0 }}><span style={{ position: "absolute", top: 3, left: anon ? 21 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .2s" }} /></span>
              <span style={{ fontSize: 14, color: "var(--text-body)" }}>Hide my name (Give anonymously)</span>
            </label>
            <div style={{ marginTop: 18 }}><GiftCTA type="give" block size="lg" label={`Give ₦${custom ? (customAmt || "0") : amt.toLocaleString()}`} onClick={() => { window.location.href = "../webapp/index.html#success"; }} /></div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", margin: "12px 0 0" }}>🔒 Secured by tier-1 bank escrow · Paystack</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

window.KGScreens = { Home, HowItWorks, Campaign };
})();
