/* KindGifts web app — Admin portal (utilitarian, data-forward). */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { Button, Badge, Money, ProgressBar, Input, Textarea } = NS;
const Icon = window.KGWIcon;
const P = window.KGWPortal;
const { Shell, Pad, Table, Td, MiniStat, BigStat, Panel, SectionLabel, SplitBars, BarChart } = P;

const flagMeta = { clear: ["success", "AI: Clear"], review: ["warning", "AI: Needs review"], hold: ["danger", "AI: Flagged"] };
const QUEUE = [
  { name: "Ada Okafor", title: "Radiotherapy completion", goal: 10500000, raised: 6500000, flag: "clear", hospital: "LUTH", diag: "Breast cancer (Stage 2)" },
  { name: "Emeka Nwosu", title: "Chemotherapy — 6 cycles", goal: 8000000, raised: 320000, flag: "review", hospital: "UCH Ibadan", diag: "Colorectal cancer" },
  { name: "Grace Bello", title: "Dialysis — 12 months", goal: 8400000, raised: 410000, flag: "clear", hospital: "National Hospital Abuja", diag: "Chronic kidney disease" },
  { name: "Tunde Ade", title: "Spinal surgery", goal: 5000000, raised: 90000, flag: "hold", hospital: "Lakeshore", diag: "Herniated disc" },
];

function Admin() {
  return <Shell
    subtitle="ADMIN PORTAL" tone="dark"
    user={{ initials: "SO", name: "Sade O.", role: "Verification lead" }}
    modules={[
      { key: "home", icon: "layout-dashboard", label: "Dashboard", render: AdmHome },
      { key: "users", icon: "users", label: "User Management", render: AdmUsers },
      { key: "campaigns", icon: "megaphone", label: "Campaign Management", render: AdmCampaigns },
      { key: "verify", icon: "shield-check", label: "Verification Center", badge: 4, render: AdmVerify },
      { key: "money", icon: "banknote", label: "Donations & Withdrawals", render: AdmMoney },
      { key: "reports", icon: "bar-chart-3", label: "Reports", render: AdmReports },
      { key: "cms", icon: "layout-template", label: "CMS", render: AdmCMS },
      { key: "settings", icon: "settings", label: "Platform Settings", render: AdmSettings },
    ]}
  />;
}

/* ---- Dashboard ---- */
function AdmHome() {
  return (
    <Pad>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }} className="kgw-3col">
        <BigStat label="Total raised" value={<Money amount={512400000} size="sm" />} sub="+18% vs last qtr" />
        <BigStat label="Patients funded" value="1,284" sub="+64 this month" />
        <BigStat label="Pending verification" value="4" sub="needs review" tone="danger" />
        <BigStat label="Fraud caught" value="27" sub="AI pre-vetting" tone="danger" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }} className="kgw-2col">
        <Panel title="Funds raised (₦M / month)"><BarChart bars={[["Feb", 32], ["Mar", 41], ["Apr", 38], ["May", 52], ["Jun", 47], ["Jul", 61]]} /></Panel>
        <Panel title="Where funds go"><SplitBars rows={[["Oncology", 46, "var(--pink-500)"], ["Renal / dialysis", 24, "var(--olive-600)"], ["Cardiac", 18, "var(--info)"], ["Other", 12, "var(--sand-400)"]]} /></Panel>
      </div>
    </Pad>
  );
}

/* ---- User Management ---- */
function AdmUsers() {
  const rows = [
    ["Ada Okafor", "ada@example.com", "Patient", "Active", "success"],
    ["Adeola Johnson", "adeola@mail.com", "Donor", "Active", "success"],
    ["LUTH Oncology", "admin@luth.org", "Hospital", "Verified", "olive"],
    ["Tunde Ade", "tunde@example.com", "Patient", "Suspended", "danger"],
    ["Sade Okoro", "sade@kindgifts.org", "Admin", "Active", "success"],
    ["UCH Ibadan", "care@uch.org", "Hospital", "Pending", "warning"],
  ];
  const roleTone = { Patient: "pink", Donor: "info", Hospital: "olive", Admin: "neutral" };
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Total users" value="9,431" />
        <MiniStat label="Patients" value="1,284" />
        <MiniStat label="Hospitals" value="18" />
        <MiniStat label="Suspended" value="6" tone="danger" />
      </div>
      <Table cols={["Name", "Email", "Role", "Status", ""]}>
        {rows.map(([n, e, role, st, tone], i) => (
          <tr key={i}>
            <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{n}</span></Td>
            <Td><span style={{ color: "var(--text-muted)" }}>{e}</span></Td>
            <Td><Badge tone={roleTone[role]}>{role}</Badge></Td>
            <Td><Badge tone={tone}>{st}</Badge></Td>
            <Td><Button variant="ghost" size="sm">Manage</Button></Td>
          </tr>
        ))}
      </Table>
    </Pad>
  );
}

/* ---- Campaign Management ---- */
function AdmCampaigns() {
  const rows = [
    { name: "Ada Okafor", title: "Radiotherapy completion", goal: 10500000, raised: 6500000, status: "Live", tone: "success" },
    { name: "Chidi Umeh", title: "Kidney transplant", goal: 15000000, raised: 11200000, status: "Live", tone: "success" },
    { name: "Fatima Bello", title: "Leukemia treatment", goal: 9200000, raised: 2100000, status: "Live", tone: "success" },
    { name: "Tunde Ade", title: "Spinal surgery", goal: 5000000, raised: 90000, status: "Flagged", tone: "danger" },
    { name: "Ngozi Eze", title: "Cardiac surgery", goal: 12000000, raised: 11950000, status: "Completed", tone: "olive" },
  ];
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Active campaigns" value="38" />
        <MiniStat label="Completed" value="1,246" tone="success" />
        <MiniStat label="Flagged" value="3" tone="danger" />
      </div>
      <Table cols={["Patient", "Campaign", "Progress", "Status", ""]}>
        {rows.map((r, i) => {
          const pct = Math.round(r.raised / r.goal * 100);
          return (
            <tr key={i}>
              <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{r.name}</span></Td>
              <Td>{r.title}</Td>
              <Td style={{ minWidth: 190 }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}><Money amount={r.raised} size="xs" /><span style={{ fontWeight: 700, color: pct >= 90 ? "var(--success)" : "var(--olive-700)" }}>{pct}%</span></div><ProgressBar raised={r.raised} goal={r.goal} showCaption={false} height={8} /></Td>
              <Td><Badge tone={r.tone}>{r.status}</Badge></Td>
              <Td><div style={{ display: "flex", gap: 6 }}><Button variant="ghost" size="sm">View</Button>{r.tone === "danger" && <Button variant="outline" size="sm" style={{ borderColor: "var(--danger)", color: "var(--danger)" }}>Suspend</Button>}</div></Td>
            </tr>
          );
        })}
      </Table>
    </Pad>
  );
}

/* ---- Verification Center (the rich queue) ---- */
function AdmVerify() {
  const [sel, setSel] = React.useState(0);
  const c = QUEUE[sel];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", minWidth: 0, height: "100%" }} className="kgw-admin-main">
      <div style={{ borderRight: "1px solid var(--border-subtle)", background: "var(--white)", overflow: "auto" }}>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)", fontWeight: 700, fontSize: 14, color: "var(--text-strong)" }}>Pending Verification · 4</div>
        {QUEUE.map((q, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 16px", border: "none", borderBottom: "1px solid var(--border-subtle)", borderLeft: `3px solid ${sel === i ? "var(--pink-500)" : "transparent"}`, background: sel === i ? "var(--pink-50)" : "var(--white)", cursor: "pointer" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}><span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-strong)" }}>{q.name}</span><Badge tone={flagMeta[q.flag][0]}>{q.flag}</Badge></div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{q.title}</div>
          </button>
        ))}
      </div>
      <div style={{ padding: 24, overflow: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <div><h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--text-strong)" }}>{c.name}</h2><div style={{ fontSize: 14, color: "var(--text-muted)" }}>{c.title} · {c.hospital}</div></div>
          <Badge tone={flagMeta[c.flag][0]}>{flagMeta[c.flag][1]}</Badge>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, margin: "18px 0" }}>
          <Stat label="Raised" value={<Money amount={c.raised} size="md" />} />
          <Stat label="Goal" value={<Money amount={c.goal} size="md" />} />
          <Stat label="Diagnosis" value={<span style={{ fontSize: 13 }}>{c.diag}</span>} />
        </div>
        <SectionLabel>Uploaded documents</SectionLabel>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
          {[["National ID (NIN)", "file-check"], ["Medical report", "file-text"], ["Hospital bill", "receipt"], ["Guarantors' Form", "file-signature"]].map(([l, ic]) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", background: "var(--white)", fontSize: 13, fontWeight: 600, color: "var(--text-body)" }}><Icon name={ic} size={16} color="var(--olive-600)" />{l}<Icon name="external-link" size={13} color="var(--text-muted)" /></div>
          ))}
        </div>
        <SectionLabel>AI pre-vetting</SectionLabel>
        <div style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: c.flag === "clear" ? "var(--success-bg)" : c.flag === "review" ? "var(--warning-bg)" : "var(--danger-bg)", fontSize: 13.5, lineHeight: 1.5, color: "var(--sand-700)", marginBottom: 20 }}>
          {c.flag === "clear" && "✓ No document manipulation detected. Invoice numbers unique. Metadata consistent."}
          {c.flag === "review" && "⚠ Invoice date metadata differs from document creation date. Recommend clinical cross-check."}
          {c.flag === "hold" && "⛔ Possible image alteration detected on hospital bill. Duplicate invoice number found in historical database."}
        </div>
        <SectionLabel>Virtual consultation (Zoho Bookings)</SectionLabel>
        <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "12px 14px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", marginBottom: 24, flexWrap: "wrap" }}>
          <Icon name="video" size={18} color="var(--info)" />
          <span style={{ fontSize: 13.5, color: "var(--text-body)", flex: 1 }}>{c.flag === "clear" ? "Consultation completed · Mar 10, 2026" : "No consultation booked yet"}</span>
          {c.flag === "clear" ? <Badge tone="success">Completed</Badge> : <Button variant="outline" size="sm">Send booking link</Button>}
        </div>
        <div style={{ display: "flex", gap: 10, borderTop: "1px solid var(--border-subtle)", paddingTop: 18 }}>
          <Button variant="primary" pill leadingIcon={<Icon name="check" size={16} color="#fff" />}>Approve for disbursement</Button>
          <Button variant="outline" style={{ borderColor: "var(--danger)", color: "var(--danger)" }} leadingIcon={<Icon name="x" size={16} color="var(--danger)" />}>Reject with reason</Button>
        </div>
      </div>
    </div>
  );
}
function Stat({ label, value }) {
  return <div style={{ padding: "10px 12px", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-sm)" }}><div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", fontWeight: 700 }}>{label}</div><div style={{ fontWeight: 700, color: "var(--text-strong)", marginTop: 4 }}>{value}</div></div>;
}

/* ---- Donations & Withdrawals ---- */
function AdmMoney() {
  const disb = [
    ["Ijeoma A.", "LUTH", 10500000, "KG-DB-4471", "paid"],
    ["Samuel O.", "National Hospital Abuja", 8400000, "KG-DB-4470", "processing"],
    ["Ruth M.", "UCH Ibadan", 6000000, "KG-DB-4468", "paid"],
    ["David K.", "St. Nicholas", 15000000, "KG-DB-4465", "queued"],
  ];
  const tone = { paid: "success", processing: "warning", queued: "olive" };
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Donations (month)" value={<Money amount={48200000} size="sm" />} tone="pink" />
        <MiniStat label="Disbursed (all-time)" value={<Money amount={412000000} size="sm" />} tone="success" />
        <MiniStat label="Held in escrow" value={<Money amount={23400000} size="sm" />} />
        <MiniStat label="Awaiting release" value="3" tone="warning" />
      </div>
      <div style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "var(--olive-50)", fontSize: 13.5, color: "var(--text-body)", marginBottom: 16, display: "flex", gap: 8, alignItems: "center" }}><Icon name="shield-check" size={17} color="var(--olive-700)" /> All payouts route <strong style={{ margin: "0 4px" }}>directly to accredited hospitals</strong> — never to personal accounts.</div>
      <SectionLabel>Recent disbursements</SectionLabel>
      <Table cols={["Patient", "Hospital", "Amount", "Reference", "Status"]}>
        {disb.map(([pt, h, amt, ref, st], i) => (
          <tr key={i}>
            <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{pt}</span></Td>
            <Td>{h}</Td>
            <Td><Money amount={amt} size="xs" /></Td>
            <Td><span style={{ fontFamily: "monospace", fontSize: 12, color: "var(--text-muted)" }}>{ref}</span></Td>
            <Td><Badge tone={tone[st]}>{st}</Badge></Td>
          </tr>
        ))}
      </Table>
    </Pad>
  );
}

/* ---- Reports ---- */
function AdmReports() {
  return (
    <Pad>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}><Button variant="outline" pill leadingIcon={<Icon name="download" size={15} />}>Export CSV</Button></div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }} className="kgw-3col">
        <BigStat label="Total raised" value={<Money amount={512400000} size="sm" />} sub="+18% vs last qtr" />
        <BigStat label="Avg. verification" value="3.2 days" sub="−0.4d faster" />
        <BigStat label="Success rate" value="94%" sub="campaigns funded" />
        <BigStat label="Repeat donors" value="1,204" sub="recurring givers" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }} className="kgw-2col">
        <Panel title="Funds raised (₦M / month)"><BarChart bars={[["Feb", 32], ["Mar", 41], ["Apr", 38], ["May", 52], ["Jun", 47], ["Jul", 61]]} /></Panel>
        <Panel title="Campaigns by category"><SplitBars rows={[["Oncology", 52, "var(--pink-500)"], ["Renal", 21, "var(--olive-600)"], ["Cardiac", 15, "var(--info)"], ["Other", 12, "var(--sand-400)"]]} /></Panel>
      </div>
    </Pad>
  );
}

/* ---- CMS ---- */
function AdmCMS() {
  const groups = [
    ["Impact Stories", "book-open", 24, "Recovery stories on the marketing site"],
    ["Partner Hospitals", "hospital", 18, "Accredited hospital & lab directory"],
    ["FAQ entries", "help-circle", 12, "About & FAQ page"],
    ["Transparency records", "eye", 1240, "Public disbursement hub"],
  ];
  return (
    <Pad>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 14 }}>
        {groups.map(([t, ic, n, d]) => (
          <div key={t} style={{ padding: 18, background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ width: 42, height: 42, borderRadius: "var(--radius-md)", background: "var(--olive-50)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic} size={21} color="var(--olive-600)" /></span><span className="ff-num" style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-strong)" }}>{n.toLocaleString()}</span></div>
            <div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 16 }}>{t}</div>
            <p style={{ margin: 0, fontSize: 13.5, color: "var(--text-body)", lineHeight: 1.5, flex: 1 }}>{d}</p>
            <div style={{ display: "flex", gap: 8 }}><Button variant="outline" size="sm" leadingIcon={<Icon name="pencil" size={14} />}>Manage</Button><Button variant="ghost" size="sm" leadingIcon={<Icon name="plus" size={14} />}>Add</Button></div>
          </div>
        ))}
      </div>
    </Pad>
  );
}

/* ---- Platform Settings ---- */
function AdmSettings() {
  const toggles = [
    ["AI fraud pre-vetting", "Scan every upload for alterations and duplicates", true],
    ["Require Guarantors' Form", "Mandatory above the verification threshold", true],
    ["Anonymous donations", "Allow donors to hide their name", true],
    ["Public Transparency Hub", "Publish anonymized utilization receipts", true],
    ["Maintenance mode", "Take the platform offline for updates", false],
  ];
  return (
    <Pad style={{ maxWidth: 720 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }} className="kgw-2col">
        <Input label="Nonprofit support fee (%)" defaultValue="7–10" />
        <Input label="Processing fee (%)" defaultValue="2" />
        <Input label="Verification threshold" prefix="₦" defaultValue="500,000" />
        <Input label="Disbursement tranche 1 (%)" defaultValue="35" />
      </div>
      <Panel title="Controls">
        {toggles.map(([l, d, on], i) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: i ? "1px solid var(--border-subtle)" : "none" }}>
            <div style={{ flex: 1 }}><div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 14.5 }}>{l}</div><div style={{ fontSize: 13, color: "var(--text-muted)" }}>{d}</div></div>
            <span style={{ width: 44, height: 26, borderRadius: 999, background: on ? "var(--olive-600)" : "var(--sand-200, var(--sand-100))", position: "relative", flexShrink: 0, cursor: "pointer" }}><span style={{ position: "absolute", top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .15s", boxShadow: "var(--shadow-sm)" }} /></span>
          </div>
        ))}
      </Panel>
      <div style={{ display: "flex", gap: 10, marginTop: 18 }}><Button variant="primary" pill>Save changes</Button><Button variant="ghost">Reset</Button></div>
    </Pad>
  );
}

window.KGWAdmin = Admin;
})();
