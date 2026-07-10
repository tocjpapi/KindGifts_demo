/* KindGifts web app — Donor post-donation success + 7-step Vetting Progress tracker. */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { Button, WhatsAppButton, Card, Badge, VerifiedBadge, ProgressBar, Money, StatBlock, CampaignCard, Input, GiftCTA } = NS;
const Icon = window.KGWIcon;

/* ---------- Donor campaign discovery grid ---------- */
function Discovery() {
  const CAMPAIGNS = [
    { name: "Help Ada complete her radiotherapy", need: "20 sessions of radiotherapy at LUTH, Lagos", raised: 6500000, goal: 10500000, cat: "Oncology", img: window.KG_PHOTO(window.KGP.ada, 640, 400, "faces") },
    { name: "Emeka's chemotherapy fund", need: "6 cycles of chemotherapy at UCH Ibadan", raised: 320000, goal: 8000000, cat: "Oncology", img: window.KG_PHOTO(window.KGP.community, 640, 400, "entropy") },
    { name: "A new heart valve for Ngozi", need: "Cardiac surgery at UNTH Enugu", raised: 4200000, goal: 6500000, cat: "Cardiac", img: window.KG_PHOTO(window.KGP.hero, 640, 400, "entropy") },
    { name: "Baby Tari's incubator care", need: "Neonatal intensive care, 4 weeks", raised: 890000, goal: 2400000, cat: "Paediatric", img: window.KG_PHOTO(window.KGP.ada, 641, 400, "faces") },
    { name: "Musa's kidney dialysis", need: "Ongoing dialysis at NNPC Hospital Kaduna", raised: 1750000, goal: 3000000, cat: "Renal", img: window.KG_PHOTO(window.KGP.community, 641, 400, "entropy") },
    { name: "Restore Blessing's sight", need: "Corneal transplant at LUTH", raised: 980000, goal: 1500000, cat: "Surgery", img: window.KG_PHOTO(window.KGP.hero, 642, 400, "entropy") },
  ];
  const CATS = ["All", "Oncology", "Cardiac", "Paediatric", "Renal", "Surgery"];
  const [cat, setCat] = React.useState("All");
  const [q, setQ] = React.useState("");
  const shown = CAMPAIGNS.filter((c) =>
    (cat === "All" || c.cat === cat) &&
    (q.trim() === "" || (c.name + " " + c.need).toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div style={{ maxWidth: 1160, margin: "0 auto", padding: "36px 20px 90px" }}>
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 28px" }}>
        <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--pink-600)" }}>Give a Gift</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.1, margin: "8px 0 0" }}>Become someone's medical miracle today.</h1>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--text-body)", marginTop: 12 }}>Browse verified medical campaigns. Every single kobo goes directly toward life-saving cancer care and medical treatments.</p>
      </div>

      {/* Search + category filter */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: "1 1 260px", maxWidth: 380, background: "var(--white)", border: "1.5px solid var(--border-strong)", borderRadius: "var(--radius-pill)", padding: "11px 16px" }}>
          <Icon name="search" size={18} color="var(--text-muted)" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by patient name, diagnosis, or hospital..." style={{ border: "none", outline: "none", background: "transparent", flex: 1, fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-strong)" }} />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{ padding: "9px 16px", borderRadius: "var(--radius-pill)", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, border: `1.5px solid ${cat === c ? "var(--olive-600)" : "var(--border-strong)"}`, background: cat === c ? "var(--olive-600)" : "var(--white)", color: cat === c ? "#fff" : "var(--text-body)" }}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }} className="kgw-3col">
        {shown.map((c) => (
          <CampaignCard key={c.name} name={c.name} need={c.need} raised={c.raised} goal={c.goal} image={c.img} onGive={() => { window.location.href = "../marketing/index.html#campaign"; }} />
        ))}
      </div>
      {shown.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-muted)" }}>
          <Icon name="search-x" size={32} color="var(--text-muted)" />
          <p style={{ marginTop: 12, fontSize: 15 }}>No campaigns match your search. Try another term or category.</p>
        </div>
      )}
    </div>
  );
}

/* ---------- Donor post-donation success ---------- */
function DonorSuccess() {
  const shell = { maxWidth: 620, margin: "0 auto", padding: "40px 20px 90px", textAlign: "center" };
  const campaignLink = "https://kindgifts.org/c/ada-radiotherapy";
  const shareText = `Hello, I am using KindGifts to raise funds for my treatment. Please consider reading my story, giving a gift if you can, or sharing this link with your network. Thank you for your love and support: ${campaignLink}`;
  const shareWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank", "noopener");
  return (
    <div style={shell}>
      <div style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--pink-50)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontSize: 40 }}>❤️</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, color: "var(--text-strong)", marginTop: 18, lineHeight: 1.1 }}>Thank you for your life-changing gift!</h1>
      <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--text-body)", marginTop: 14 }}>
        You have just eased a massive burden for <strong style={{ color: "var(--text-strong)" }}>Ada</strong> and brought her one step closer to recovery. An official receipt has been sent to your email.
      </p>

      <Card style={{ marginTop: 24, textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid var(--border-subtle)" }}>
          <img src={window.KG_PHOTO(window.KGP.ada, 96, 96, "faces")} alt="Ada" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
          <div style={{ flex: 1 }}><div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 15 }}>Ada Okafor</div><div style={{ fontSize: 13, color: "var(--text-muted)" }}>Radiotherapy · LUTH</div></div>
          <VerifiedBadge size="sm" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontWeight: 700, color: "var(--text-strong)" }}>Your gift</span>
          <Money amount={25000} size="lg" color="var(--pink-600)" />
        </div>
        <ProgressBar raised={6525000} goal={10500000} height={12} />
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, fontSize: 13, color: "var(--text-muted)" }}>
          <Icon name="shield-check" size={15} color="var(--success)" /> Held in tier-1 bank escrow · released to LUTH only after vetting.
        </div>
      </Card>

      {/* Prompt to create a donor account after the gift */}
      <Card style={{ marginTop: 20, textAlign: "left", background: "var(--pink-50)", border: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Icon name="user-plus" size={20} color="var(--pink-600)" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)", margin: 0 }}>Create your donor account</h2>
        </div>
        <p style={{ margin: "0 0 16px", fontSize: 14, lineHeight: 1.55, color: "var(--text-body)" }}>Save your details to follow Ada's recovery, keep all your receipts in one place, and give again in one tap.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Input label="Full name" placeholder="Your name" />
          <Input label="Email address" type="email" placeholder="you@example.com" />
          <Input label="Phone number" prefix="+234" type="tel" placeholder="801 234 5678" />
        </div>
        <div style={{ marginTop: 16 }}><GiftCTA type="give" block label="Create My Account" /></div>
        <p style={{ margin: "12px 0 0", fontSize: 12.5, textAlign: "center", color: "var(--text-muted)" }}>No thanks — your receipt is already on its way by email.</p>
      </Card>

      <div style={{ background: "var(--olive-50)", borderRadius: "var(--radius-lg)", padding: 20, marginTop: 20, textAlign: "left", display: "flex", gap: 12, alignItems: "flex-start" }}>
        <Icon name="trending-up" size={22} color="var(--olive-600)" />
        <div>
          <div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 15 }}>Want to double your impact?</div>
          <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--text-body)" }}>Share Ada's story with your network so others can give a gift too.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
        <WhatsAppButton label="Share This Campaign" block size="lg" onClick={shareWhatsApp} />
        <Button variant="secondary" block leadingIcon={<Icon name="download" size={18} />}>Download receipt</Button>
        <button style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 14, fontFamily: "var(--font-sans)" }}>Follow Ada's recovery →</button>
      </div>
    </div>
  );
}

/* ---------- 7-step Vetting Progress tracker (green = done, red = pending) ---------- */
function VettingTracker() {
  const steps = [
    ["rocket", "Campaign launched", "Page live in under 10 minutes and shareable.", "done"],
    ["scan-face", "AI pre-vetting passed", "Documents scanned for manipulation before going live.", "done"],
    ["heart-handshake", "Fundraising live", "Sharing with family, friends & WhatsApp communities.", "done"],
    ["flag", "Milestone reached · ₦500,000", "Full vetting is triggered at the funding milestone.", "done"],
    ["id-card", "KYC · NIN / BVN validated", "Identity & bank details confirmed against government databases.", "active"],
    ["stethoscope", "Clinical audit & consultation", "Zoho consultation booked with our clinical partner team.", "pending"],
    ["banknote", "Board approval & 100% disbursement", "Bi-weekly board sign-off, then full release to the hospital.", "pending"],
  ];
  const doneCount = steps.filter(s => s[3] === "done").length;
  const meta = {
    done: { ring: "var(--success)", bg: "var(--success)", fg: "#fff", chipTone: "success", chip: "Completed" },
    active: { ring: "var(--pink-500)", bg: "var(--pink-50)", fg: "var(--pink-600)", chipTone: "pink", chip: "In progress" },
    pending: { ring: "var(--danger)", bg: "#fff", fg: "var(--danger)", chipTone: "danger", chip: "Pending" },
  };
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "28px 20px 90px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, color: "var(--text-strong)" }}>Verification progress</h1>
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-muted)" }}>{doneCount} of {steps.length} steps complete</span>
      </div>
      <p style={{ color: "var(--text-body)", fontSize: 15, marginTop: 0, marginBottom: 24, lineHeight: 1.6 }}>
        Follow every step from launch to disbursement. <span style={{ color: "var(--success)", fontWeight: 700 }}>Green</span> is done, <span style={{ color: "var(--danger)", fontWeight: 700 }}>red</span> is still pending — no funds are released until vetting is complete.
      </p>

      <Card padding={26}>
        {steps.map(([ic, t, d, st], i) => {
          const m = meta[st];
          return (
            <div key={t} style={{ display: "flex", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: m.bg, color: m.fg, border: `2px solid ${m.ring}`, boxShadow: st === "active" ? "0 0 0 4px var(--pink-100)" : "none" }}>
                  {st === "done" ? <Icon name="check" size={20} color="#fff" /> : <Icon name={ic} size={19} color={m.fg} />}
                </span>
                {i < steps.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 22, background: st === "done" ? "var(--success)" : "var(--border-strong)", margin: "6px 0" }} />}
              </div>
              <div style={{ paddingBottom: i < steps.length - 1 ? 22 : 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700, fontSize: 16.5, color: "var(--text-strong)" }}>{t}</span>
                  <Badge tone={m.chipTone}>{m.chip}</Badge>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--text-body)" }}>{d}</p>
                {st === "active" && <div style={{ marginTop: 12 }}><Button variant="outline" size="sm" leadingIcon={<Icon name="upload" size={15} />}>Upload Guarantors' Form</Button></div>}
                {st === "pending" && ic === "stethoscope" && <div style={{ marginTop: 12 }}><Button variant="secondary" size="sm" leadingIcon={<Icon name="calendar" size={15} />}>Book consultation (Zoho)</Button></div>}
              </div>
            </div>
          );
        })}
      </Card>

      {/* Controlled disbursement note */}
      <div style={{ background: "var(--info-bg)", borderRadius: "var(--radius-lg)", padding: 18, marginTop: 20, display: "flex", gap: 12 }}>
        <Icon name="lock" size={20} color="var(--info)" />
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--sand-700)" }}><strong>Controlled disbursement:</strong> for ongoing withdrawals, you'll upload receipts showing how prior funds were spent before the next release is approved.</p>
      </div>
    </div>
  );
}

window.KGWFlows = { DonorSuccess, VettingTracker, Discovery };
})();
