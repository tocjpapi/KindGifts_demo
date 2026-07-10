/* KindGifts web app — Hospital partner portal. */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { Button, Card, Badge, Money, VerifiedBadge } = NS;
const Icon = window.KGWIcon;
const P = window.KGWPortal;
const { Shell, Pad, Table, Td, MiniStat, Panel, SectionLabel } = P;

function HospitalDashboard() {
  return <Shell
    subtitle="HOSPITAL PORTAL" tone="dark"
    user={{ initials: "LU", name: "LUTH Oncology", role: "Partner hospital" }}
    action={<Button variant="primary" size="sm" pill leadingIcon={<Icon name="check" size={15} color="#fff" />}>Confirm patient</Button>}
    modules={[
      { key: "home", icon: "layout-dashboard", label: "Dashboard", render: HospHome },
      { key: "verify", icon: "user-check", label: "Patient Verification", badge: 3, render: HospVerify },
      { key: "docs", icon: "files", label: "Medical Documents", render: HospDocs },
      { key: "consult", icon: "video", label: "Consultation Management", render: HospConsult },
    ]}
  />;
}

const PATIENTS = [
  { name: "Ada Okafor", diag: "Breast cancer (Stage 2)", plan: "Radiotherapy — 25 sessions", status: "Awaiting confirmation", tone: "warning" },
  { name: "Emeka Nwosu", diag: "Colorectal cancer", plan: "Chemotherapy — 6 cycles", status: "Awaiting confirmation", tone: "warning" },
  { name: "Ijeoma Abah", diag: "Cervical cancer", plan: "Brachytherapy — 4 sessions", status: "Awaiting confirmation", tone: "warning" },
  { name: "Samuel Ojo", diag: "Lymphoma", plan: "Immunotherapy — dose 2", status: "Confirmed", tone: "success" },
];

function HospHome() {
  return (
    <Pad>
      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <MiniStat label="Patients awaiting confirmation" value="3" tone="warning" />
        <MiniStat label="Confirmed this month" value="14" tone="success" />
        <MiniStat label="Funds received (month)" value={<Money amount={41200000} size="sm" />} tone="pink" />
        <MiniStat label="Active care plans" value="22" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 18 }} className="kgw-2col">
        <Panel title="Recent activity">
          {[["user-check", "Ada Okafor's care plan confirmed", "2h ago"], ["banknote", "₦10.5M received for Ijeoma Abah", "1d ago"], ["video", "Consultation completed — Emeka Nwosu", "2d ago"], ["file-check", "Medical report uploaded — Samuel Ojo", "3d ago"]].map(([ic, l, t], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderTop: i ? "1px solid var(--border-subtle)" : "none" }}>
              <span style={{ width: 34, height: 34, borderRadius: "var(--radius-md)", background: "var(--olive-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic} size={16} color="var(--olive-600)" /></span>
              <span style={{ flex: 1, fontSize: 14, color: "var(--text-body)" }}>{l}</span>
              <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{t}</span>
            </div>
          ))}
        </Panel>
        <Card style={{ background: "var(--olive-50)", border: "none" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><Icon name="shield-check" size={20} color="var(--olive-600)" /><div><div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 14 }}>Direct-to-care payouts</div><p style={{ margin: "4px 0 0", fontSize: 13.5, lineHeight: 1.5, color: "var(--text-body)" }}>All approved funds route directly to your accredited hospital account — verified against each patient's care plan.</p></div></div>
        </Card>
      </div>
    </Pad>
  );
}
function HospVerify() {
  return (
    <Pad>
      <Table cols={["Patient", "Diagnosis", "Care plan", "Status", ""]}>
        {PATIENTS.map((p, i) => (
          <tr key={i}>
            <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{p.name}</span></Td>
            <Td>{p.diag}</Td>
            <Td>{p.plan}</Td>
            <Td><Badge tone={p.tone}>{p.status}</Badge></Td>
            <Td>{p.tone === "warning"
              ? <div style={{ display: "flex", gap: 6 }}><Button variant="primary" size="sm">Confirm</Button><Button variant="ghost" size="sm">Flag</Button></div>
              : <Button variant="ghost" size="sm" leadingIcon={<Icon name="eye" size={15} />}>View</Button>}</Td>
          </tr>
        ))}
      </Table>
      <div style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "var(--olive-50)", fontSize: 13.5, color: "var(--text-body)", marginTop: 16, display: "flex", gap: 8, alignItems: "center" }}><Icon name="info" size={17} color="var(--olive-700)" /> Confirming a patient verifies their diagnosis and treatment costs against your records — a required step before board approval.</div>
    </Pad>
  );
}
function HospDocs() {
  const docs = [
    ["Ada Okafor", "Radiotherapy treatment plan", "file-text", "Mar 02, 2026"],
    ["Ada Okafor", "Hospital bill — itemized", "receipt", "Mar 02, 2026"],
    ["Emeka Nwosu", "Chemotherapy protocol", "file-text", "Mar 01, 2026"],
    ["Ijeoma Abah", "Pathology report", "microscope", "Feb 28, 2026"],
    ["Samuel Ojo", "Immunotherapy dosage sheet", "file-signature", "Feb 25, 2026"],
  ];
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Documents shared" value="28" />
        <MiniStat label="Awaiting your upload" value="2" tone="warning" />
      </div>
      <Table cols={["Patient", "Document", "Shared", ""]}>
        {docs.map(([pt, l, ic, date], i) => (
          <tr key={i}>
            <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{pt}</span></Td>
            <Td><div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name={ic} size={17} color="var(--olive-600)" />{l}</div></Td>
            <Td>{date}</Td>
            <Td><div style={{ display: "flex", gap: 6 }}><Button variant="ghost" size="sm" leadingIcon={<Icon name="download" size={15} />}>Download</Button></div></Td>
          </tr>
        ))}
      </Table>
      <Card style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div><div style={{ fontWeight: 700, color: "var(--text-strong)" }}>Upload a treatment record</div><p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--text-body)" }}>Attach care plans, bills, or reports for a patient's verification.</p></div>
        <Button variant="primary" pill leadingIcon={<Icon name="upload" size={16} color="#fff" />}>Upload document</Button>
      </Card>
    </Pad>
  );
}
function HospConsult() {
  const rows = [
    ["Ada Okafor", "Mar 10, 2026 · 11:00", "Dr. Bello (Oncology)", "Completed", "success"],
    ["Emeka Nwosu", "Mar 12, 2026 · 14:30", "Dr. Bello (Oncology)", "Scheduled", "warning"],
    ["Ijeoma Abah", "—", "Unassigned", "To schedule", "olive"],
  ];
  return (
    <Pad>
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        <MiniStat label="Completed (month)" value="9" tone="success" />
        <MiniStat label="Scheduled" value="4" tone="warning" />
        <MiniStat label="To schedule" value="3" />
      </div>
      <div style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "var(--info-bg)", fontSize: 13.5, color: "var(--text-body)", marginBottom: 16, display: "flex", gap: 8, alignItems: "center" }}><Icon name="video" size={17} color="var(--info)" /> Consultations are booked and hosted through <strong style={{ margin: "0 4px" }}>Zoho Bookings</strong> — synced automatically to this portal.</div>
      <Table cols={["Patient", "Slot", "Clinician", "Status", ""]}>
        {rows.map(([pt, slot, doc, st, tone], i) => (
          <tr key={i}>
            <Td><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{pt}</span></Td>
            <Td>{slot}</Td>
            <Td>{doc}</Td>
            <Td><Badge tone={tone}>{st}</Badge></Td>
            <Td>{st === "Completed"
              ? <Button variant="ghost" size="sm" leadingIcon={<Icon name="file-text" size={15} />}>Notes</Button>
              : <Button variant="outline" size="sm" leadingIcon={<Icon name="calendar" size={15} />}>{st === "Scheduled" ? "Reschedule" : "Book slot"}</Button>}</Td>
          </tr>
        ))}
      </Table>
    </Pad>
  );
}

window.KGWHospital = { HospitalDashboard };
})();
