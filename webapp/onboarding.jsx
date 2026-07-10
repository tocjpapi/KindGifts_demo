/* KindGifts web app — "Need a Gift" patient onboarding (stepped). */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { GiftCTA, Button, WhatsAppButton, Card, Badge, Input, Textarea, Select, FileUpload, StepIndicator } = NS;
const Icon = window.KGWIcon;

function Onboarding() {
  const [step, setStep] = React.useState(0); // 0 welcome, 1-4 steps, 5 success
  const steps = ["Account", "Your story", "The need", "Verify"];
  const shell = { maxWidth: 640, margin: "0 auto", padding: "32px 20px 80px" };

  if (step === 0) return (
    <div style={{ ...shell, textAlign: "center", paddingTop: 56 }}>
      <div style={{ fontSize: 52 }}>🎁</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.1, marginTop: 8 }}>We are here to stand with you.</h1>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", marginTop: 16 }}>Sharing your health journey can be tough, but you don't have to carry the financial burden alone. Let's help your community wrap their arms around you with the gift of healthcare.</p>
      <div style={{ marginTop: 28 }}><GiftCTA type="need" size="lg" label="I Need a Health Gift" onClick={() => setStep(1)} /></div>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 16 }}>Setting up a campaign is entirely free · takes under 10 minutes</p>
    </div>
  );

  if (step === 5) return (
    <div style={{ ...shell, textAlign: "center", paddingTop: 48 }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--warning-bg)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}><Icon name="clock" size={34} color="var(--warning)" /></div>
      <div style={{ marginTop: 16 }}><Badge tone="warning">Pending review</Badge></div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 600, color: "var(--text-strong)", lineHeight: 1.15, margin: "14px 0 0" }}>Your campaign has been submitted!</h1>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--text-body)", margin: "14px 0 0" }}>Thank you, Ada. Your request is now <strong>awaiting review by the KindGifts admin team</strong>. It will not be visible to donors until it's approved — this protects everyone in the community.</p>
      <Card style={{ marginTop: 24, textAlign: "left" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 14 }}>What happens next</div>
        {[["AI pre-vetting of your documents", "done"], ["Admin team reviews your submission", "active"], ["Approved &amp; published — you get your shareable link", "pending"]].map(([l, st], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 0" }}>
            <span style={{ width: 24, height: 24, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: st === "done" ? "var(--success)" : st === "active" ? "var(--warning-bg)" : "var(--sand-100)", color: st === "done" ? "#fff" : st === "active" ? "var(--warning)" : "var(--text-muted)", fontSize: 12, fontWeight: 700, border: st === "active" ? "2px solid var(--warning)" : "none" }}>{st === "done" ? "✓" : st === "active" ? "•" : ""}</span>
            <span style={{ fontSize: 14.5, color: st === "pending" ? "var(--text-muted)" : "var(--text-body)", fontWeight: st === "active" ? 700 : 400 }} dangerouslySetInnerHTML={{ __html: l }} />
            {st === "active" && <Badge tone="warning" style={{ marginLeft: "auto" }}>In review</Badge>}
          </div>
        ))}
      </Card>
      <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center", marginTop: 16, fontSize: 13.5, color: "var(--text-muted)" }}><Icon name="bell" size={15} color="var(--text-muted)" /> We'll notify you by WhatsApp &amp; email the moment it's approved — usually within 48 hours.</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
        <Button variant="primary" pill block size="lg" onClick={() => { window.location.hash = "#patient"; window.location.reload(); }}>Go to my dashboard</Button>
        <Button variant="secondary" block onClick={() => setStep(0)}>Back to start</Button>
      </div>
    </div>
  );

  return (
    <div style={shell}>
      <StepIndicator steps={steps} current={step - 1} style={{ marginBottom: 32 }} />
      <Card padding={28}>
        {step === 1 && <AccountStep />}
        {step === 2 && <Step1 />}
        {step === 3 && <Step2 />}
        {step === 4 && <Step3 />}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, gap: 12 }}>
          <Button variant="ghost" onClick={() => setStep(step - 1)}>← Back</Button>
          {step < 4
            ? <Button variant="primary" pill onClick={() => setStep(step + 1)}>Continue</Button>
            : <GiftCTA type="need" label="Submit for review" onClick={() => setStep(5)} />}
        </div>
      </Card>
    </div>
  );
}

function AccountStep() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SectionHead n="1" t="Create Your Account" d="This keeps your campaign secure and lets you manage it anytime." />
      <Input label="Email address" type="email" placeholder="you@example.com" helper="Your receipt and campaign updates are sent here." />
      <Input label="Phone number" prefix="+234" type="tel" placeholder="801 234 5678" helper="We'll send verification codes and donor alerts here." />
      <Input label="Create a password" type="password" placeholder="At least 8 characters" />
      <Input label="Confirm password" type="password" placeholder="Re-enter your password" />
    </div>
  );
}
function Step1() {
  const [beneficiary, setBeneficiary] = React.useState("Myself");
  const isOrg = beneficiary === "A Hospital / Charity";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SectionHead n="2" t="The Story" d="Your community just wants to know how to support you." />
      <Select label="Who is this health gift for?" options={["Myself", "A family member", "A friend", "A Hospital / Charity"]} value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} />
      {isOrg && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 16, background: "var(--olive-50)", borderRadius: "var(--radius-md)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-strong)" }}>Organisation details</div>
          <Input label="Registered legal name" placeholder="e.g. Sebeccly Cancer Care Foundation" />
          <Input label="RC number" placeholder="e.g. RC 1234567" helper="Your CAC registration number, so we can verify the organisation." />
          <Textarea label="Hospital / charity address" rows={2} placeholder="Street, city, state" />
        </div>
      )}
      <Input label="Campaign title" placeholder="e.g. Help Ada complete her radiotherapy" />
      <Textarea label="Tell your story" rows={5} helper="Share a bit about your diagnosis and what this treatment means for your recovery. Keep it simple." />
      <FileUpload label="Upload a photo or short video" icon="📷" hint="Use a clear photo — this helps donors connect with you better." />
    </div>
  );
}
function Step2() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SectionHead n="3" t="The Financial Need" d="So donors know exactly how their gift helps." />
      <Input label="What is your funding goal?" prefix="₦" placeholder="10,500,000" helper="The total amount you need to raise for your treatment." />
      <Textarea label="What will this gift cover?" rows={4} placeholder="e.g. Radiotherapy — 20 sessions, surgery follow-up, medications & supportive care" helper="Describe in your own words what the total will go toward, so donors see where their gift helps." />
    </div>
  );
}
function Step3() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SectionHead n="4" t="Trust & Verification" d="This is what lets donors give with total confidence." />
      <FileUpload label="Upload Medical Verification" secure hint="Upload a recent medical report, bill, or hospital ID. This stays private with our clinical verification team — it is never posted publicly, but it tells donors your campaign is verified and secure." />
      <div style={{ background: "var(--info-bg)", borderRadius: "var(--radius-md)", padding: 16, display: "flex", gap: 12 }}>
        <Icon name="info" size={20} color="var(--info)" />
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--sand-700)" }}><strong>Guarantors' Form</strong> — once your campaign reaches <strong>₦500,000</strong> in donations, we'll ask you to upload a completed Guarantors' Form. This confirms your identity and intended use of funds before any money is released.</p>
      </div>
    </div>
  );
}
function SectionHead({ n, t, d }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--pink-500)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>{n}</span>
      <div><h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-strong)" }}>{t}</h2><p style={{ margin: "2px 0 0", fontSize: 14, color: "var(--text-muted)" }}>{d}</p></div>
    </div>
  );
}

window.KGWOnboarding = Onboarding;
})();
