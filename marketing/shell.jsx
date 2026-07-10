/* KindGifts marketing website — screens.
 * Composes DS primitives from the compiled bundle namespace + Lucide icons.
 * Attaches screen components to window for index.html to use. */
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { GiftCTA, Button, WhatsAppButton, Card, Badge, VerifiedBadge, ProgressBar, TrustChip, StatBlock, Money } = NS;

function Icon({ name, size = 20, color = "currentColor", stroke = 2 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, "stroke-width": stroke }, nameAttr: "data-lucide" });
    }
  });
  return <span ref={ref} style={{ display: "inline-flex", lineHeight: 0, color }} />;
}
window.KGIcon = Icon;

const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };

/* ---------------- Header ---------------- */
function Header({ route, go }) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [role, setRole] = React.useState("donor");
  React.useEffect(() => {
    try { setLoggedIn(localStorage.getItem("kg_loggedIn") === "1"); setRole(localStorage.getItem("kg_role") || "donor"); } catch (e) {}
  }, []);
  const links = [["how", "How It Works"], ["partners", "Partner Hospitals"], ["stories", "Impact Stories"], ["about", "About Us"]];
  const [open, setOpen] = React.useState(false);
  const goClose = (k) => { setOpen(false); go(k); };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, background: "color-mix(in srgb, var(--cream) 92%, transparent)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, padding: "0 24px 0 16px", gap: 12 }}>
        <button onClick={() => goClose("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", lineHeight: 1, textAlign: "left", flexShrink: 0 }}>
          <img src="logo.png" alt="KindGifts by Sebeccly" style={{ height: 40, display: "block" }} />
        </button>
        <nav style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }} className="kg-desktop-nav">
          {links.map(([k, l]) => (
            <button key={k} onClick={() => go(k)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 12px", borderRadius: "var(--radius-pill)", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, whiteSpace: "nowrap", color: route === k ? "var(--olive-700)" : "var(--text-body)" }}>{l}</button>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }} className="kg-desktop-cta">
          {loggedIn
            ? <>
                <button onClick={() => go("dashboard")} style={{ height: 44, padding: "0 22px", borderRadius: "var(--radius-pill)", background: "var(--olive-600)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, whiteSpace: "nowrap" }}>My Dashboard</button>
                <button onClick={() => go("logout")} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 8px", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--text-body)", whiteSpace: "nowrap" }}>Log Out</button>
              </>
            : <>
                <button onClick={() => go("login")} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 8px", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--text-body)", whiteSpace: "nowrap" }}>Log In</button>
                <GiftCTA type="need" size="md" onClick={() => go("need")} style={{ height: 44 }} />
                <GiftCTA type="give" size="md" onClick={() => go("campaign")} style={{ height: 44 }} />
              </>}
        </div>
        <button className="kg-mobile-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open} style={{ display: "none", background: "none", border: "1px solid var(--border-strong)", borderRadius: 10, width: 44, height: 44, cursor: "pointer", alignItems: "center", justifyContent: "center", color: "var(--olive-700)", flexShrink: 0 }}>
          <Icon name={open ? "x" : "menu"} size={22} />
        </button>
      </div>
      {open && (
        <div className="kg-mobile-menu" style={{ display: "none", flexDirection: "column", borderTop: "1px solid var(--border-subtle)", background: "var(--cream)", padding: "12px 24px 20px" }}>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {links.map(([k, l]) => (
              <button key={k} onClick={() => goClose(k)} style={{ background: "none", border: "none", borderBottom: "1px solid var(--border-subtle)", cursor: "pointer", padding: "14px 4px", textAlign: "left", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: route === k ? "var(--olive-700)" : "var(--text-body)" }}>{l}</button>
            ))}
          </nav>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 18 }}>
            {loggedIn ? (
              <>
                <button onClick={() => goClose("dashboard")} style={{ height: 48, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-pill)", background: "var(--olive-600)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700 }}>My Dashboard</button>
                <button onClick={() => goClose("logout")} style={{ background: "none", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", height: 48, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--text-body)" }}>Log Out</button>
              </>
            ) : (
              <>
                <GiftCTA type="need" size="md" onClick={() => goClose("need")} style={{ height: 48, width: "100%", justifyContent: "center" }} />
                <GiftCTA type="give" size="md" onClick={() => goClose("campaign")} style={{ height: 48, width: "100%", justifyContent: "center" }} />
                <button onClick={() => goClose("login")} style={{ background: "none", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", height: 48, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--text-body)" }}>Log In</button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
window.KGHeader = Header;

/* ---------------- Footer ---------------- */
function Footer({ go }) {
  return (
    <footer style={{ background: "var(--olive-800)", color: "color-mix(in srgb, var(--cream) 82%, transparent)", marginTop: 0 }}>
      <div style={{ ...wrap, padding: "56px 24px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
          <div style={{ maxWidth: 340 }}>
            <img src="logo.png" alt="KindGifts by Sebeccly" style={{ height: 40, display: "block", filter: "brightness(0) invert(1)" }} />
            <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 14 }}>Medical crowdfunding, powered by community kindness. An initiative of Sebeccly Cancer Care.</p>
            <div style={{ marginTop: 16 }}><WhatsAppButton label="Support via WhatsApp" /></div>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <FooterCol title="Platform" items={[["how","How It Works"],["transparency","Transparency Hub"],["stories","Impact Stories"],["partners","Partner Hospitals"],["about","About & FAQ"]]} go={go} />
            <FooterCol title="Get started" items={[["need","Need a Gift"],["campaign","Give a Gift"]]} go={go} />
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.14)", marginTop: 40, paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontSize: 13 }}>
          <span>© 2026 KindGifts by Sebeccly Cancer Care. Registered Nonprofit since 2006.</span>
          <span style={{ display: "flex", gap: 18 }}><a href="#" style={{ color: "inherit" }}>Privacy Policy</a><a href="#" style={{ color: "inherit" }}>Terms of Service</a><a href="#" style={{ color: "inherit" }}>Contact Support</a></span>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items, go }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--pink-200)", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(([k, l]) => <button key={k} onClick={() => go(k)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0, color: "color-mix(in srgb, var(--cream) 82%, transparent)", fontSize: 14, fontFamily: "var(--font-sans)" }}>{l}</button>)}
      </div>
    </div>
  );
}
window.KGFooter = Footer;

/* ---------------- WhatsApp floating widget ---------------- */
function WhatsAppWidget() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 60, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
      {open && (
        <div style={{ width: 260, background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
          <div style={{ background: "var(--whatsapp-dark)", color: "#fff", padding: "14px 16px", fontWeight: 700 }}>Chat with us</div>
          <div style={{ padding: 16, fontSize: 14, color: "var(--text-body)", lineHeight: 1.5 }}>Have a question about a campaign or verification? Our team replies fast on WhatsApp.</div>
          <div style={{ padding: "0 16px 16px" }}><WhatsAppButton label="Start chat" block /></div>
        </div>
      )}
      <button onClick={() => setOpen(o => !o)} aria-label="WhatsApp support" style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--whatsapp)", border: "none", boxShadow: "var(--shadow-lg)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#083b2c" }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1A7.94 7.94 0 0 0 12 20a7.94 7.94 0 0 0 5.6-13.7ZM12 18.5a6.6 6.6 0 0 1-3.4-.9l-.24-.15-2.5.66.67-2.43-.16-.25A6.59 6.59 0 1 1 12 18.5Zm3.6-4.95c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.51.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-2.66-2.33c-.2-.34.2-.32.57-1.06a.36.36 0 0 0 0-.34c0-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .79 2 8.66 8.66 0 0 0 3.32 2.93c1.85.8 1.85.53 2.19.5a1.98 1.98 0 0 0 1.3-.92 1.62 1.62 0 0 0 .11-.92c-.05-.08-.18-.13-.38-.23Z"/></svg>
      </button>
    </div>
  );
}
window.KGWhatsAppWidget = WhatsAppWidget;
