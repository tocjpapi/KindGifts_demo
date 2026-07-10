/* KindGifts marketing — Partner Hospitals / Impact Stories / About & FAQ. */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { Card, Badge, VerifiedBadge, Button, WhatsAppButton, GiftCTA } = NS;
const Icon = window.KGIcon;
const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };
const Eyebrow = ({ children }) => <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--pink-500)", marginBottom: 14 }}>{children}</div>;
const H2 = ({ children, style }) => <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,42px)", fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-.02em", ...style }}>{children}</h2>;

function Partners() {
  const hospitals = [
    ["Lagos University Teaching Hospital", "Oncology Centre", "Lagos", "hospital"],
    ["Sebeccly Cancer Centre", "Comprehensive Cancer Care", "Lagos", "heart-pulse"],
    ["National Hospital Abuja", "Radiotherapy & Diagnostics", "Abuja", "hospital"],
    ["University College Hospital", "Oncology & Surgery", "Ibadan", "hospital"],
    ["Lakeshore Cancer Center", "Medical Oncology", "Lagos", "heart-pulse"],
    ["Aminu Kano Teaching Hospital", "Radiotherapy Unit", "Kano", "hospital"],
    ["Me Cure Diagnostics", "Imaging & Pathology Lab", "Lagos", "microscope"],
    ["Clina-Lancet Laboratories", "Accredited Diagnostic Lab", "Lagos", "microscope"],
  ];
  return (
    <div>
      <section style={{ background: "var(--olive-50)", padding: "56px 0" }}>
        <div style={{ ...wrap, maxWidth: 780, textAlign: "center" }}>
          <Eyebrow>Partner Hospitals</Eyebrow>
          <H2>Funds go directly to accredited care.</H2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-body)", marginTop: 16 }}>KindGifts disburses to treatment centres — never personal accounts. These are the partnered hospitals, oncology centres, and diagnostic labs where gifts become care.</p>
        </div>
      </section>
      <section style={{ ...wrap, padding: "48px 24px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 18 }}>
          {hospitals.map(([n, t, city, ic]) => (
            <Card key={n} interactive style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--olive-50)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic} size={22} color="var(--olive-600)" /></span>
                <VerifiedBadge size="sm" label="Accredited" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.2 }}>{n}</h3>
              <div style={{ fontSize: 14, color: "var(--text-body)" }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", gap: 5, alignItems: "center", marginTop: "auto" }}><Icon name="map-pin" size={14} color="var(--text-muted)" />{city}</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stories() {
  const stories = [
    ["Baby Chidi's surgery", "Recovered", "Thanks to 340 gifts, baby Chidi's heart surgery was fully funded. He is home and thriving with his family.", "👶🏾"],
    ["Dr. Lami completed radiotherapy", "In remission", "After 25 sessions funded by the community, Lami has finished treatment and returned to her clinic.", "👩🏾‍⚕️"],
    ["Emeka's chemotherapy", "Ongoing · fully funded", "Emeka's 6-month chemo plan is fully funded and underway. He shares weekly updates with his 1,200 donors.", "🧑🏾"],
    ["Mama Grace's dialysis", "Recovered", "The village rallied ₦8.4M for a year of dialysis. Mama Grace is stable and back to her market stall.", "👵🏾"],
  ];
  return (
    <div>
      <section style={{ background: "var(--pink-50)", padding: "56px 0" }}>
        <div style={{ ...wrap, maxWidth: 780, textAlign: "center" }}>
          <Eyebrow>Impact Stories</Eyebrow>
          <H2>Gifts in action.</H2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-body)", marginTop: 16 }}>Read the beautiful stories of recovery, healing, and hope made possible by a community that cared.</p>
        </div>
      </section>
      <section style={{ ...wrap, padding: "48px 24px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20 }}>
          {stories.map(([t, status, body, emoji], i) => (
            <Card key={t} interactive padding={0} style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", background: "var(--olive-100)", overflow: "hidden" }}>
                <img src={window.KG_PHOTO(i % 2 === 0 ? window.KGP.community : window.KGP.hero, 560, 350, "entropy")} alt={t} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", left: 12, bottom: 12, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "var(--shadow-sm)" }}>{emoji}</span>
              </div>
              <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                <Badge tone="success">✓ {status}</Badge>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)" }}>{body}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function About() {
  const faqs = [
    ["Are there platform fees?", "KindGifts is free to join — no application or subscription fee. We retain a 7–10% nonprofit support fee plus a 2% processing fee to keep the platform secure, verified, and sustainable."],
    ["How do I upload my medical documents securely?", "Medical reports are uploaded to our private clinical verification team only. They are never posted publicly on your campaign page — they simply let us mark your campaign as verified."],
    ["Can I donate anonymously?", "Yes. Every donation flow includes a 'Hide my name' toggle so you can give anonymously while still receiving your receipt by email."],
    ["When are funds released?", "Full verification is triggered at ₦500,000 raised. After KYC, the Guarantors' Form, and clinical audit pass our bi-weekly board review, 100% of funds are released directly to the partner hospital."],
  ];
  return (
    <section style={{ ...wrap, padding: "56px 24px 72px", maxWidth: 820 }}>
      <Eyebrow>About & FAQ</Eyebrow>
      <H2>About KindGifts by Sebeccly.</H2>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-body)", marginTop: 16 }}>Established in 2006, Sebeccly Cancer Care is a trusted Nigerian nonprofit dedicated to expanding access to life-saving treatment. KindGifts is its medical crowdfunding platform — merging AI pre-vetting, corporate KYC, independent medical oversight, and tier-1 bank escrow into the most secure medical crowdfunding ecosystem in the region.</p>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--text-strong)", margin: "40px 0 16px" }}>Frequently asked questions</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
      </div>
      <Card style={{ marginTop: 32, background: "var(--olive-50)", border: "none", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div><div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>Still have questions?</div><p style={{ margin: "4px 0 0", color: "var(--text-body)", fontSize: 14 }}>Chat with our empathetic support team instantly.</p></div>
        <WhatsAppButton label="Chat with us on WhatsApp" />
      </Card>
    </section>
  );
}
function FAQ({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card padding={0} style={{ overflow: "hidden" }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--text-strong)" }}>
        {q}<span style={{ color: "var(--pink-500)", transform: open ? "rotate(45deg)" : "none", transition: "transform .2s", fontSize: 22, lineHeight: 1 }}>+</span>
      </button>
      {open && <div style={{ padding: "0 20px 18px", fontSize: 15, lineHeight: 1.65, color: "var(--text-body)" }}>{a}</div>}
    </Card>
  );
}

function Transparency() {
  const records = [
    ["Radiotherapy — 20 sessions", "LUTH Oncology", "₦7,000,000", "Mar 2026", "Ada O."],
    ["Chemotherapy — cycles 1–3", "UCH Ibadan", "₦3,600,000", "Feb 2026", "Emeka N."],
    ["Dialysis — 6 months", "National Hospital Abuja", "₦4,200,000", "Jan 2026", "Grace B."],
    ["Mastectomy & recovery", "Lakeshore Cancer Center", "₦2,800,000", "Jan 2026", "Anonymous"],
    ["CT & PET diagnostics", "Me Cure Diagnostics", "₦850,000", "Dec 2025", "Tunde A."],
    ["Immunotherapy — dose 1", "Sebeccly Cancer Centre", "₦5,400,000", "Dec 2025", "Anonymous"],
  ];
  return (
    <div>
      <section style={{ background: "var(--olive-700)", color: "var(--cream)", padding: "56px 0" }}>
        <div style={{ ...wrap, maxWidth: 820, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--pink-300)", marginBottom: 14 }}>Public Transparency Hub</div>
          <H2 style={{ color: "var(--cream)" }}>Proof of life. Proof of impact.</H2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "color-mix(in srgb, var(--cream) 84%, transparent)", marginTop: 16 }}>After funds are disbursed, beneficiaries upload hospital receipts confirming utilisation. Every record below is vetted and anonymized — so the village that gave can audit exactly where its kindness went.</p>
          <div style={{ display: "flex", gap: 36, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <div><div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600 }} className="ff-num">₦2.4B+</div><div style={{ fontSize: 13, opacity: .8 }}>Disbursed to care</div></div>
            <div><div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600 }} className="ff-num">1,240</div><div style={{ fontSize: 13, opacity: .8 }}>Verified utilisation reports</div></div>
            <div><div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600 }} className="ff-num">100%</div><div style={{ fontSize: 13, opacity: .8 }}>Routed to hospitals</div></div>
          </div>
        </div>
      </section>
      <section style={{ ...wrap, padding: "48px 24px 72px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, color: "var(--text-muted)", fontSize: 14 }}>
          <Icon name="file-check" size={16} color="var(--success)" /> Showing latest verified utilisation records
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 16 }}>
          {records.map(([use, facility, amt, date, ben], i) => (
            <Card key={i} interactive style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <VerifiedBadge size="sm" label="Receipt verified" />
                <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{date}</span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.2 }}>{use}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: "var(--text-body)" }}><Icon name="hospital" size={15} color="var(--olive-600)" />{facility}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: 10, marginTop: "auto" }}>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Beneficiary: {ben}</span>
                <span className="ff-num" style={{ fontWeight: 700, color: "var(--pink-600)" }}>{amt}</span>
              </div>
              <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "var(--sand-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "9px 0", fontSize: 13.5, fontWeight: 600, color: "var(--olive-700)", cursor: "pointer", fontFamily: "var(--font-sans)" }}>
                <Icon name="eye" size={15} color="var(--olive-700)" /> View anonymized receipt
              </button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProofPoints({ go }) {
  const points = [
    ["shield-check", "20 Years of Institutional Trust", "Built and managed by Sebeccly Cancer Care, a registered nonprofit with a flawless 20-year track record of clinical advocacy and patient support since 2006."],
    ["scan-face", "AI-Driven Fraud Pre-Vetting", "We deploy advanced AI scanning models to instantly analyze uploaded medical bills and documents, automatically flagging digital alterations, duplicate invoices, or metadata discrepancies."],
    ["id-card", "Government-Level Identity Vetting", "Every beneficiary undergoes strict administrative KYC, integrating official National Identity Number (NIN) validation to completely eliminate identity fraud."],
    ["stethoscope", "Independent Clinical Audits", "We don't just read paperwork; a dedicated independent clinical partner team meticulously audits every medical report, treatment plan, and hospital bill for clinical accuracy."],
    ["heart-handshake", "Direct Patient Consultations", "Before a single kobo is approved for release, our medical partners conduct direct, empathetic consultations with the patient to verify their active care timeline."],
    ["users", "Bi-Weekly Board Oversight", "A specialized medical and compliance board meets every 14 days to collectively review, debate, and formally approve or decline pending applications."],
    ["layers", "Milestone-Based Disbursements", "To prevent fund mismanagement, payouts are restricted to a strict two-stage tranche system (starting with an initial 35%), keeping fundraising tightly aligned with active care."],
    ["file-check", "Mandatory Utilization Audits", "To unlock the second stage of funding, patients must submit verifiable hospital receipts and updated medical reports, proving 100% of the first tranche went directly to care."],
    ["eye", "Public Transparency Reporting", "Every campaign features a live Public Disbursement Hub where anonymized hospital receipts and utilization reports are uploaded, allowing donors to track the exact real-world impact of their gift."],
    ["landmark", "Absolute Donor Escrow Security", "If a campaign is flagged or declined, 100% of the raised funds are legally safeguarded — either routed to another strictly verified indigent patient or returned directly to the donors."],
  ];
  return (
    <div>
      <section style={{ background: "var(--olive-700)", color: "var(--cream)", padding: "64px 0 56px" }}>
        <div style={{ ...wrap, maxWidth: 820, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--pink-300)", marginBottom: 14 }}>The 10 proof points behind every gift</div>
          <H2 style={{ color: "var(--cream)" }}>Why our vetting process reflects best practices.</H2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "color-mix(in srgb, var(--cream) 84%, transparent)", marginTop: 16 }}>Every gift on KindGifts passes through ten deliberate layers of verification, oversight, and accountability — from AI fraud pre-vetting to milestone-based disbursements and public receipts. Here is exactly how your kindness is protected.</p>
        </div>
      </section>
      <section style={{ ...wrap, padding: "56px 24px 72px", maxWidth: 900 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {points.map(([ic, t, d], i) => (
            <Card key={t} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <span className="ff-num" style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 600, color: "var(--pink-500)", lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--olive-50)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic} size={24} color="var(--olive-600)" /></span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.2, marginBottom: 6 }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--text-body)" }}>{d}</p>
              </div>
            </Card>
          ))}
        </div>
        <Card style={{ marginTop: 28, background: "var(--olive-50)", border: "none", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div><div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-strong)" }}>Give with total confidence.</div><p style={{ margin: "4px 0 0", color: "var(--text-body)", fontSize: 14.5 }}>Ten layers of protection stand behind every campaign.</p></div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <GiftCTA type="give" size="md" onClick={() => go && go("campaign")} style={{ height: 46 }} />
            <Button variant="outline" pill onClick={() => go && go("transparency")}>View the Transparency Hub</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

window.KGExtra = { Partners, Stories, About, Transparency, ProofPoints };
})();
