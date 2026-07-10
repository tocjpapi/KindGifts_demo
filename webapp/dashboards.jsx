/* KindGifts web app — Patient & Donor dashboards (full portals). */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { Button, WhatsAppButton, Card, Badge, VerifiedBadge, ProgressBar, StatBlock, Money, Textarea, FileUpload, Input, CampaignCard } = NS;
const Icon = window.KGWIcon;
const P = window.KGWPortal;
const { Shell, Pad, Table, Td, MiniStat, Panel, SectionLabel, Empty } = P;

/* =====================================================================
   PATIENT PORTAL
   ===================================================================== */
function PatientDashboard() {
  return <Shell
    subtitle="PATIENT PORTAL" tone="light"
    user={{ initials: "AO", name: "Ada Okafor", role: "Patient" }}
    action={<Button variant="primary" size="sm" pill leadingIcon={<Icon name="plus" size={15} color="#fff" />}>New campaign</Button>}
    modules={[
      { key: "home", icon: "layout-dashboard", label: "Dashboard", render: PatHome },
      { key: "campaigns", icon: "megaphone", label: "Campaigns", render: PatCampaigns },
      { key: "records", icon: "folder-heart", label: "Medical Records", render: PatRecords },
      { key: "verify", icon: "shield-check", label: "Verification", render: PatVerify },
      { key: "withdrawals", icon: "banknote", label: "Withdrawals", render: PatWithdrawals },
      { key: "profile", icon: "user", label: "Profile", render: PatProfile },
    ]}
  />;
}

function PatHome() {
  return (
    <Pad>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
        <div><div style={{ fontSize: 13, color: "var(--text-muted)" }}>Welcome back, Ada 👋</div><h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: "var(--text-strong)" }}>Your campaign</h1></div>
        <div style={{ display: "flex", gap: 8 }}><VerifiedBadge /><Badge tone="success">Live</Badge></div>
      </div>
      <Card style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>Help Ada complete her radiotherapy</h3>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>340 gifts</span>
        </div>
        <ProgressBar raised={6500000} goal={10500000} height={14} />
        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}><WhatsAppButton label="Share on WhatsApp" /><Button variant="outline" leadingIcon={<Icon name="link" size={16} />}>Copy link</Button></div>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 18, marginBottom: 18 }} className="kgw-2col">
        <Card><SectionLabel>Verification &amp; disbursement</SectionLabel><Tracker /></Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Card style={{ display: "flex", gap: 24, justifyContent: "space-around" }}><StatBlock value={<Money amount={6500000} size="xl" />} accent="pink" label="Raised" /><StatBlock value="62%" label="of goal" /></Card>
          <Card style={{ background: "var(--olive-50)", border: "none" }}><div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><Icon name="lightbulb" size={20} color="var(--olive-600)" /><div><div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 14 }}>Sharing tip</div><p style={{ margin: "4px 0 0", fontSize: 13.5, lineHeight: 1.5, color: "var(--text-body)" }}>Post your link in family and church WhatsApp groups first — that's where most gifts come from.</p></div></div></Card>
        </div>
      </div>
      <Card><SectionLabel>Post an update</SectionLabel><Textarea rows={3} placeholder="Share how you're doing with your donors…" /><div style={{ marginTop: 12 }}><Button variant="primary" pill>Post update</Button></div></Card>
    </Pad>
  );
}
function Tracker() {
  const steps = [["Threshold reached (₦500,000)", "done"], ["KYC · NIN / BVN verified", "done"], ["Guarantors' Form submitted", "done"], ["Clinical audit & consultation", "active"], ["Board approval (bi-weekly)", "pending"], ["Full release to LUTH", "pending"]];
  return steps.map(([l, st]) => (
    <div key={l} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 0" }}>
      <span style={{ width: 24, height: 24, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: st === "done" ? "var(--success)" : st === "active" ? "var(--warning-bg)" : "var(--sand-100)", color: st === "done" ? "#fff" : st === "active" ? "var(--warning)" : "var(--text-muted)", fontSize: 12, fontWeight: 700, border: st === "active" ? "2px solid var(--warning)" : "none" }}>{st === "done" ? "✓" : st === "active" ? "•" : ""}</span>
      <span style={{ fontSize: 14.5, color: st === "pending" ? "var(--text-muted)" : "var(--text-body)", fontWeight: st === "active" ? 700 : 400 }}>{l}</span>
      {st === "active" && <Badge tone="warning" style={{ marginLeft: "auto" }}>In review</Badge>}
    </div>
  ));
}
function PatCampaigns() {
  const rows = [
    { title: "Help Ada complete her radiotherapy", goal: 10500000, raised: 6500000, status: "Live", tone: "success", gifts: 340 },
    { title: "Ada's follow-up scans (2025)", goal: 1200000, raised: 1200000, status: "Completed", tone: "olive", gifts: 88 },
  ];
  return (
    <Pad>
      <Table cols={["Campaign", "Progress", "Gifts", "Status", ""]}>
        {rows.map((r, i) => {
          const pct = Math.round(r.raised / r.goal * 100);
          return (
            <tr key={i}>
              <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{r.title}</span></Td>
              <Td style={{ minWidth: 200 }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}><Money amount={r.raised} size="xs" /><span style={{ fontWeight: 700, color: "var(--olive-700)" }}>{pct}%</span></div><ProgressBar raised={r.raised} goal={r.goal} showCaption={false} height={8} /></Td>
              <Td>{r.gifts}</Td>
              <Td><Badge tone={r.tone}>{r.status}</Badge></Td>
              <Td><Button variant="ghost" size="sm">Manage</Button></Td>
            </tr>
          );
        })}
      </Table>
      <Card style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", background: "var(--olive-50)", border: "none" }}>
        <div><div style={{ fontWeight: 700, color: "var(--text-strong)" }}>Need to raise for new treatment?</div><p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--text-body)" }}>Launch a new campaign in under 10 minutes.</p></div>
        <Button variant="primary" pill leadingIcon={<Icon name="plus" size={16} color="#fff" />}>Start a new campaign</Button>
      </Card>
    </Pad>
  );
}
function PatRecords() {
  const docs = [
    ["National ID (NIN)", "file-check", "Verified", "success", "Jan 12, 2026"],
    ["Medical report — Oncology", "file-text", "Verified", "success", "Jan 14, 2026"],
    ["Hospital bill — LUTH", "receipt", "Verified", "success", "Jan 14, 2026"],
    ["Guarantors' Form", "file-signature", "Verified", "success", "Jan 20, 2026"],
    ["Follow-up scan report", "scan", "In review", "warning", "Mar 02, 2026"],
  ];
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Documents on file" value="5" />
        <MiniStat label="Verified" value="4" tone="success" />
        <MiniStat label="In review" value="1" tone="warning" />
      </div>
      <Table cols={["Document", "Uploaded", "Status", ""]}>
        {docs.map(([l, ic, st, tone, date], i) => (
          <tr key={i}>
            <Td><div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name={ic} size={17} color="var(--olive-600)" /><span style={{ fontWeight: 600, color: "var(--text-strong)" }}>{l}</span></div></Td>
            <Td>{date}</Td>
            <Td><Badge tone={tone}>{st}</Badge></Td>
            <Td><Button variant="ghost" size="sm" leadingIcon={<Icon name="eye" size={15} />}>View</Button></Td>
          </tr>
        ))}
      </Table>
      <Card style={{ marginTop: 16 }}><SectionLabel>Upload a new document</SectionLabel><FileUpload hint="Medical reports are shared only with our private clinical verification team — never posted publicly." icon="📄" /></Card>
    </Pad>
  );
}
function PatVerify() {
  return (
    <Pad>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18 }} className="kgw-2col">
        <Card><SectionLabel>Verification &amp; disbursement</SectionLabel><Tracker /></Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Card><SectionLabel>Identity (KYC)</SectionLabel>{[["NIN validated", true], ["BVN matched", true], ["Bank account confirmed", true]].map(([l, ok]) => (<div key={l} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", fontSize: 14, color: "var(--text-body)" }}><Icon name={ok ? "check-circle-2" : "circle"} size={17} color={ok ? "var(--success)" : "var(--text-muted)"} />{l}</div>))}</Card>
          <Card style={{ background: "var(--warning-bg)", border: "none" }}><div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><Icon name="clock" size={19} color="var(--warning)" /><div><div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 14 }}>Next step: clinical consultation</div><p style={{ margin: "4px 0 10px", fontSize: 13.5, lineHeight: 1.5, color: "var(--text-body)" }}>Our medical partner will call to confirm your active care timeline before board review.</p><Button variant="outline" size="sm" leadingIcon={<Icon name="video" size={15} />}>Book consultation</Button></div></div></Card>
        </div>
      </div>
    </Pad>
  );
}
function PatWithdrawals() {
  const rows = [
    ["Tranche 1 — initial 35%", 3675000, "Paid to LUTH", "success", "Feb 20, 2026", "KG-DB-4419"],
    ["Tranche 2 — remaining 65%", 6825000, "Awaiting utilization audit", "warning", "—", "—"],
  ];
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Raised" value={<Money amount={6500000} size="sm" />} />
        <MiniStat label="Disbursed to hospital" value={<Money amount={3675000} size="sm" />} tone="success" />
        <MiniStat label="Held in escrow" value={<Money amount={2825000} size="sm" />} tone="warning" />
      </div>
      <div style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "var(--olive-50)", fontSize: 13.5, color: "var(--text-body)", marginBottom: 16, display: "flex", gap: 8, alignItems: "center" }}><Icon name="shield-check" size={17} color="var(--olive-700)" /> Funds are released in tranches <strong style={{ margin: "0 4px" }}>directly to LUTH</strong> — never to a personal account.</div>
      <Table cols={["Tranche", "Amount", "Status", "Date", "Reference"]}>
        {rows.map(([l, amt, st, tone, date, ref], i) => (
          <tr key={i}>
            <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{l}</span></Td>
            <Td><Money amount={amt} size="xs" /></Td>
            <Td><Badge tone={tone}>{st}</Badge></Td>
            <Td>{date}</Td>
            <Td><span style={{ fontFamily: "monospace", fontSize: 12, color: "var(--text-muted)" }}>{ref}</span></Td>
          </tr>
        ))}
      </Table>
      <Card style={{ marginTop: 16 }}><SectionLabel>Unlock tranche 2 — upload utilization proof</SectionLabel><FileUpload hint="Submit hospital receipts and an updated medical report proving tranche 1 went to care." icon="🧾" /></Card>
    </Pad>
  );
}
function PatProfile() {
  return (
    <Pad style={{ maxWidth: 640 }}>
      <Card>
        <SectionLabel>Personal information</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Input label="Full name" value="Ada Okafor" readOnly />
          <Input label="Email address" type="email" value="ada.okafor@example.com" readOnly />
          <Input label="Phone number" prefix="+234" value="801 234 5678" readOnly />
          <Input label="National Identity Number (NIN)" value="•••• •••• 4821" readOnly helper="Verified — locked for your security." />
          <Input label="Hospital of care" value="Lagos University Teaching Hospital (LUTH)" readOnly />
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}><Button variant="primary" pill>Edit details</Button><Button variant="ghost">Change password</Button></div>
      </Card>
    </Pad>
  );
}

/* =====================================================================
   DONOR PORTAL
   ===================================================================== */
function DonorDashboard() {
  return <Shell
    subtitle="DONOR PORTAL" tone="light"
    user={{ initials: "AJ", name: "Adeola Johnson", role: "Donor · Guardian" }}
    action={<Button variant="primary" size="sm" pill leadingIcon={<Icon name="heart" size={15} color="#fff" />}>Give a gift</Button>}
    modules={[
      { key: "home", icon: "layout-dashboard", label: "Dashboard", render: DonHome },
      { key: "discover", icon: "compass", label: "Campaign Discovery", render: DonDiscover },
      { key: "give", icon: "heart-handshake", label: "Donations", render: DonGive },
      { key: "history", icon: "receipt", label: "Donation History", render: DonHistory },
      { key: "saved", icon: "bookmark", label: "Saved Campaigns", render: DonSaved },
    ]}
  />;
}
const FOLLOWED = [
  ["Help Ada complete her radiotherapy", "In treatment", "success", 62],
  ["Baby Chidi's heart surgery", "Recovered", "olive", 100],
  ["Emeka's chemotherapy", "Ongoing", "warning", 44],
];
function DonHome() {
  return (
    <Pad>
      <div style={{ marginBottom: 18 }}><div style={{ fontSize: 13, color: "var(--text-muted)" }}>Welcome back, Adeola 💜</div><h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: "var(--text-strong)" }}>Your impact so far</h1></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }} className="kgw-3col">
        <Card style={{ textAlign: "center" }}><StatBlock align="center" value={<Money amount={4200000} size="xl" />} accent="pink" label="Total gifted" /></Card>
        <Card style={{ textAlign: "center" }}><StatBlock align="center" value="18" label="Gifts given" /></Card>
        <Card style={{ textAlign: "center" }}><StatBlock align="center" value="12" label="Patients supported" /></Card>
        <Card style={{ textAlign: "center" }}><StatBlock align="center" value="4" label="Full recoveries 🎉" /></Card>
      </div>
      <Panel title="Patients you're following" right={<Button variant="ghost" size="sm">View all</Button>} style={{ padding: 0 }}>
        <div style={{ padding: "0 16px 8px" }}>
          {FOLLOWED.map(([t, st, tone, pct], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderTop: i ? "1px solid var(--border-subtle)" : "none" }}>
              <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--pink-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>❤️</span>
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: 15, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t}</div><div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{pct}% funded</div></div>
              <Badge tone={tone}>{st}</Badge>
            </div>
          ))}
        </div>
      </Panel>
    </Pad>
  );
}
function CampaignGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 16 }}>
      {items.map((it, i) => (
        <CampaignCard key={i} name={it.name} need={it.need} raised={it.raised} goal={it.goal} verified image={window.KG_PHOTO(i % 2 ? window.KGP.community : window.KGP.hero, 480, 300, "faces")} />
      ))}
    </div>
  );
}
const DISCOVER = [
  { name: "Grace's dialysis — 12 months", need: "Chronic kidney disease · National Hospital Abuja", raised: 410000, goal: 8400000 },
  { name: "Tunde's spinal surgery", need: "Herniated disc · Lakeshore", raised: 900000, goal: 5000000 },
  { name: "Fatima's leukemia treatment", need: "Leukemia · AKTH Kano", raised: 2100000, goal: 9200000 },
  { name: "Chidi's kidney transplant", need: "Renal failure · St. Nicholas", raised: 11200000, goal: 15000000 },
  { name: "Bola's chemotherapy", need: "Breast cancer · UCH Ibadan", raised: 3350000, goal: 6000000 },
  { name: "Ngozi's cardiac surgery", need: "Heart valve repair · UNTH Enugu", raised: 11950000, goal: 12000000 },
];
function DonDiscover() {
  const cats = ["All", "Oncology", "Renal", "Cardiac", "Surgery", "Near goal"];
  return (
    <Pad>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {cats.map((c, i) => <span key={c} style={{ padding: "7px 14px", borderRadius: "var(--radius-pill)", fontSize: 13.5, fontWeight: 700, cursor: "pointer", background: i === 0 ? "var(--olive-600)" : "var(--white)", color: i === 0 ? "#fff" : "var(--text-body)", border: "1px solid " + (i === 0 ? "var(--olive-600)" : "var(--border-strong)") }}>{c}</span>)}
      </div>
      <CampaignGrid items={DISCOVER} />
    </Pad>
  );
}
function DonGive() {
  const recurring = [
    ["Help Ada complete her radiotherapy", 25000, "12th monthly"],
    ["Emeka's chemotherapy", 15000, "4th monthly"],
  ];
  return (
    <Pad>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="kgw-2col">
        <Card>
          <SectionLabel>Make a gift</SectionLabel>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            {[5000, 10000, 25000, 50000].map(a => <span key={a} style={{ padding: "10px 16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-strong)", fontWeight: 700, cursor: "pointer", color: "var(--text-strong)" }}><Money amount={a} size="sm" /></span>)}
          </div>
          <Input label="Or enter an amount" prefix="₦" placeholder="10,000" />
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "14px 0", fontSize: 14, color: "var(--text-body)" }}><Icon name="repeat" size={16} color="var(--olive-600)" /> Make this a monthly gift</div>
          <Button variant="primary" pill block leadingIcon={<Icon name="heart" size={16} color="#fff" />}>Give a gift</Button>
        </Card>
        <Card>
          <SectionLabel>Recurring gifts</SectionLabel>
          {recurring.map(([t, amt, note], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: i ? "1px solid var(--border-subtle)" : "none" }}>
              <span style={{ width: 36, height: 36, borderRadius: "var(--radius-md)", background: "var(--pink-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>🔁</span>
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t}</div><div style={{ fontSize: 12.5, color: "var(--text-muted)" }}><Money amount={amt} size="xs" /> · {note}</div></div>
              <Button variant="ghost" size="sm">Manage</Button>
            </div>
          ))}
        </Card>
      </div>
    </Pad>
  );
}
function DonHistory() {
  const gifts = [
    ["Help Ada complete her radiotherapy", 25000, "Mar 12, 2026", "In treatment"],
    ["Baby Chidi's heart surgery", 10000, "Feb 28, 2026", "Recovered"],
    ["Emeka's chemotherapy", 50000, "Feb 04, 2026", "Ongoing"],
    ["Grace's dialysis", 15000, "Jan 22, 2026", "Ongoing"],
    ["Mama Grace's dialysis", 20000, "Dec 18, 2025", "Recovered"],
  ];
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Total gifted" value={<Money amount={4200000} size="sm" />} tone="pink" />
        <MiniStat label="Gifts this year" value="18" />
        <MiniStat label="Tax receipts" value="18" />
      </div>
      <Table cols={["Campaign", "Amount", "Date", "Status", ""]}>
        {gifts.map(([t, amt, date, status], i) => (
          <tr key={i}>
            <Td><span style={{ fontWeight: 600, color: "var(--text-strong)" }}>{t}</span></Td>
            <Td><Money amount={amt} size="xs" /></Td>
            <Td>{date}</Td>
            <Td><span style={{ color: "var(--success)", fontWeight: 600 }}>{status}</span></Td>
            <Td><Button variant="ghost" size="sm" leadingIcon={<Icon name="download" size={15} />}>Receipt</Button></Td>
          </tr>
        ))}
      </Table>
    </Pad>
  );
}
function DonSaved() {
  return <Pad><CampaignGrid items={DISCOVER.slice(0, 3)} /></Pad>;
}

window.KGWDash = { PatientDashboard, DonorDashboard };
})();
