/* KindGifts web app — shared Portal shell + data-view atoms.
 * Every dashboard (patient, donor, hospital, admin) is a Shell with a sidebar of modules. */
(function () {
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const { Badge } = NS;
const Icon = window.KGWIcon;

/* Sidebar + topbar + module switcher. modules: [{key,icon,label,badge,render}] */
function Shell({ subtitle, modules, tone = "dark", user, initial, action }) {
  const [sel, setSel] = React.useState(initial || modules[0].key);
  const active = modules.find(m => m.key === sel) || modules[0];
  const dark = tone === "dark";
  const sideBg = dark ? "var(--olive-800)" : "var(--white)";
  const dim = dark ? "color-mix(in srgb,var(--cream) 80%,transparent)" : "var(--text-body)";
  const brandColor = dark ? "var(--cream)" : "var(--olive-700)";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "230px 1fr", minHeight: 640, background: "var(--sand-50)", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-subtle)" }} className="kgw-admin">
      <aside style={{ background: sideBg, color: dim, padding: "20px 12px", display: "flex", flexDirection: "column", gap: 3, borderRight: dark ? "none" : "1px solid var(--border-subtle)" }}>
        <div style={{ padding: "0 8px 16px" }}><img src="logo.png" alt="KindGifts" style={{ height: 30, display: "block", marginBottom: 8, filter: dark ? "brightness(0) invert(1)" : "none" }} /><span style={{ fontSize: 11, display: "block", color: "var(--pink-300)", fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: ".08em" }}>{subtitle}</span></div>
        {modules.map(m => {
          const on = m.key === sel;
          const onBg = dark ? "rgba(255,255,255,.12)" : "var(--olive-50)";
          const onFg = dark ? "var(--cream)" : "var(--olive-700)";
          return (
            <div key={m.key} onClick={() => setSel(m.key)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 10px", borderRadius: "var(--radius-sm)", fontSize: 14, fontWeight: on ? 700 : 500, background: on ? onBg : "transparent", color: on ? onFg : dim, cursor: "pointer" }}>
              <Icon name={m.icon} size={17} color="currentColor" /><span style={{ flex: 1 }}>{m.label}</span>{m.badge != null && <Badge tone="pink">{m.badge}</Badge>}
            </div>
          );
        })}
        {user && (
          <div style={{ marginTop: "auto", padding: "12px 8px 0", borderTop: dark ? "1px solid rgba(255,255,255,.14)" : "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--pink-500)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{user.initials}</span>
            <div style={{ lineHeight: 1.3, minWidth: 0 }}><div style={{ color: dark ? "var(--cream)" : "var(--text-strong)", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.name}</div><div style={{ fontSize: 11 }}>{user.role}</div></div>
          </div>
        )}
      </aside>

      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border-subtle)", background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>{active.label}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {action}
            <div className="kgw-search" style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", color: "var(--text-muted)", fontSize: 13, minWidth: 160 }}><Icon name="search" size={15} color="var(--text-muted)" />Search…</div>
          </div>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: "auto" }}>{React.createElement(active.render)}</div>
      </div>
    </div>
  );
}

/* ---- data atoms ---- */
const Pad = ({ children, style }) => <div style={{ padding: 22, ...style }}>{children}</div>;

function Table({ cols, children }) {
  return (
    <div style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", overflowX: "auto", background: "var(--white)" }}>
      <table style={{ width: "100%", minWidth: 520, borderCollapse: "collapse", fontSize: 13.5, color: "var(--text-body)" }}>
        <thead><tr style={{ background: "var(--sand-50)" }}>{cols.map((c, i) => <th key={i} style={{ textAlign: "left", padding: "10px 14px", fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", fontWeight: 700 }}>{c}</th>)}</tr></thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
const Td = ({ children, style }) => <td style={{ padding: "12px 14px", verticalAlign: "middle", borderTop: "1px solid var(--border-subtle)", ...style }}>{children}</td>;

function MiniStat({ label, value, tone }) {
  const c = tone === "success" ? "var(--success)" : tone === "warning" ? "var(--warning)" : tone === "pink" ? "var(--pink-600)" : "var(--text-strong)";
  return <div style={{ flex: "1 1 150px", padding: "12px 14px", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}><div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", fontWeight: 700 }}>{label}</div><div style={{ fontWeight: 700, fontSize: 20, color: c, marginTop: 4 }}>{value}</div></div>;
}
function BigStat({ label, value, sub, tone }) {
  return <div style={{ padding: 16, background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}><div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", fontWeight: 700 }}>{label}</div><div style={{ fontWeight: 700, fontSize: 24, color: "var(--text-strong)", margin: "6px 0 4px", fontFamily: "var(--font-display)" }}>{value}</div>{sub && <div style={{ fontSize: 12, color: tone === "danger" ? "var(--danger)" : "var(--success)", fontWeight: 600 }}>{sub}</div>}</div>;
}
function Panel({ title, children, right, style }) {
  return <div style={{ padding: 16, background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", ...style }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}><div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-strong)" }}>{title}</div>{right}</div>{children}</div>;
}
const SectionLabel = ({ children }) => <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--text-muted)", marginBottom: 10 }}>{children}</div>;

/* Horizontal split-bar (analytics) */
function SplitBars({ rows }) {
  return rows.map(([l, v, col]) => (
    <div key={l} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}><span style={{ color: "var(--text-body)" }}>{l}</span><span style={{ fontWeight: 700, color: "var(--text-strong)" }}>{v}%</span></div>
      <div style={{ height: 8, borderRadius: 999, background: "var(--sand-100)" }}><div style={{ width: v + "%", height: "100%", borderRadius: 999, background: col }} /></div>
    </div>
  ));
}
/* Vertical bar chart */
function BarChart({ bars, unit }) {
  const max = Math.max(...bars.map(b => b[1]));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 200, padding: "10px 4px 0" }}>
      {bars.map(([m, v]) => (
        <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%", justifyContent: "flex-end" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-strong)" }}>{v}{unit || ""}</div>
          <div style={{ width: "100%", maxWidth: 46, height: (v / max) * 100 + "%", background: "var(--pink-500)", borderRadius: "6px 6px 0 0" }} />
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{m}</div>
        </div>
      ))}
    </div>
  );
}

/* Empty state */
function Empty({ icon, title, body }) {
  return <div style={{ textAlign: "center", padding: "50px 20px", color: "var(--text-muted)" }}><div style={{ width: 52, height: 52, margin: "0 auto 14px", borderRadius: "50%", background: "var(--sand-100)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={icon} size={24} color="var(--text-muted)" /></div><div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 16 }}>{title}</div><p style={{ margin: "6px auto 0", maxWidth: 340, fontSize: 14, lineHeight: 1.5 }}>{body}</p></div>;
}

window.KGWPortal = { Shell, Pad, Table, Td, MiniStat, BigStat, Panel, SectionLabel, SplitBars, BarChart, Empty };
})();
