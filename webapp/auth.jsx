/* KindGifts web app — shared Login / Sign Up for donors and patients. */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { GiftCTA, Button, Card, Input } = NS;
const Icon = window.KGWIcon;

function RoleToggle({ role, setRole, opts }) {
  return (
    <div style={{ display: "flex", gap: 8, background: "var(--sand-50)", padding: 5, borderRadius: "var(--radius-pill)" }}>
      {opts.map(([k, ic, l]) => (
        <button key={k} onClick={() => setRole(k)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "11px 0", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, background: role === k ? "var(--white)" : "transparent", color: role === k ? "var(--text-strong)" : "var(--text-muted)", boxShadow: role === k ? "var(--shadow-sm)" : "none" }}>
          <span aria-hidden="true">{ic}</span> {l}
        </button>
      ))}
    </div>
  );
}

function Brand() {
  return (
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <img src="logo.png" alt="KindGifts by Sebeccly" style={{ height: 52, display: "block", margin: "0 auto 4px" }} />
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", letterSpacing: ".02em" }}>by Sebeccly Cancer Care</div>
    </div>
  );
}

function Auth() {
  const [mode, setMode] = React.useState("login"); // login | signup
  const [role, setRole] = React.useState("donor");
  const isLogin = mode === "login";
  // Donors sign up during the donation flow, so Sign Up here is for patients & hospitals only.
  const loginRoles = [["patient", "🎁", "Patient"], ["donor", "❤️", "Donor"], ["hospital", "🏥", "Hospital"]];
  const signupRoles = [["patient", "🎁", "Patient"], ["hospital", "🏥", "Hospital"]];
  const goMode = (m) => {
    setMode(m);
    if (m === "signup" && role === "donor") setRole("patient");
  };
  const isHospital = role === "hospital";
  const createLabel = { patient: "Create Patient Account", hospital: "Register Hospital", donor: "Create Account" }[role];
  const doLogin = (r) => {
    try { localStorage.setItem("kg_loggedIn", "1"); localStorage.setItem("kg_role", r); } catch (e) {}
    const dest = r === "donor" ? "donor" : r === "hospital" ? "hospital" : "patient";
    window.location.hash = "#" + dest;
    window.location.reload();
  };
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "48px 20px 90px" }}>
      <div style={{ width: "100%", maxWidth: 440 }}>
        <Brand />
        <Card padding={28}>
          {/* Log in / Sign up tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid var(--border-subtle)", marginBottom: 22 }}>
            {[["login", "Log In"], ["signup", "Sign Up"]].map(([k, l]) => (
              <button key={k} onClick={() => goMode(k)} style={{ flex: 1, background: "none", border: "none", borderBottom: `3px solid ${mode === k ? "var(--pink-500)" : "transparent"}`, cursor: "pointer", padding: "10px 0 14px", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: mode === k ? "var(--text-strong)" : "var(--text-muted)" }}>{l}</button>
            ))}
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: "var(--text-strong)", textAlign: "center", margin: 0 }}>{isLogin ? "Welcome back." : (isHospital ? "Register your hospital." : "Create your account.")}</h1>
          <p style={{ fontSize: 14.5, color: "var(--text-muted)", textAlign: "center", margin: "6px 0 20px", lineHeight: 1.5 }}>{isLogin ? "Log in to manage your campaigns, gifts, or patients." : (isHospital ? "Join as a partner hospital to receive verified, direct-to-care payouts." : "It takes a minute — and keeps every gift secure.")}</p>

          <div style={{ marginBottom: 18 }}><RoleToggle role={role} setRole={setRole} opts={isLogin ? loginRoles : signupRoles} /></div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {!isLogin && isHospital && (
              <>
                <Input label="Registered hospital name" placeholder="e.g. Lagos University Teaching Hospital" />
                <Input label="RC number" placeholder="e.g. RC 1234567" helper="Your CAC registration number, so we can verify the facility." />
                <Input label="Hospital address" placeholder="Street, city, state" />
              </>
            )}
            <Input label={isHospital ? "Official email address" : "Email address"} type="email" placeholder={isHospital ? "admin@hospital.org" : "you@example.com"} />
            {!isLogin && <Input label="Phone number" prefix="+234" type="tel" placeholder="801 234 5678" helper="For verification codes and updates." />}
            <Input label="Password" type="password" placeholder={isLogin ? "Your password" : "At least 8 characters"} />
            {!isLogin && <Input label="Confirm password" type="password" placeholder="Re-enter your password" />}
          </div>

          {isLogin && (
            <div style={{ textAlign: "right", marginTop: 10 }}>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--pink-600)", fontSize: 13.5, fontWeight: 600, fontFamily: "var(--font-sans)" }}>Forgot password?</button>
            </div>
          )}

          <div style={{ marginTop: 20 }}>
            {role === "donor"
              ? <GiftCTA type="give" block size="lg" label="Log In" onClick={() => doLogin("donor")} />
              : <GiftCTA type="need" block size="lg" label={isLogin ? "Log In" : createLabel} onClick={() => doLogin(role)} />}
          </div>

          {!isLogin && (
            <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", margin: "14px 0 0", lineHeight: 1.5 }}>By continuing you agree to our Terms and Privacy Policy. Your data is protected under our KYC compliance framework.</p>
          )}
        </Card>

        <p style={{ textAlign: "center", fontSize: 14.5, color: "var(--text-body)", marginTop: 20 }}>
          {isLogin
            ? <>New to KindGifts? <button onClick={() => goMode("signup")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--pink-600)", fontWeight: 700, fontSize: 14.5, fontFamily: "var(--font-sans)" }}>Create an account</button> · donors sign up while giving.</>
            : <>Already have an account? <button onClick={() => goMode("login")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--pink-600)", fontWeight: 700, fontSize: 14.5, fontFamily: "var(--font-sans)" }}>Log in</button></>}
        </p>
      </div>
    </div>
  );
}

window.KGWAuth = Auth;
})();
