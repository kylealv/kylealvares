export default function Writing() {
  return (
    <main style={{ paddingTop: 54 }}>
      <div className="container page-wrap">
        <h1 className="page-heading">Writing &amp; <em>Essays.</em></h1>
        <p className="page-sub">Product, execution, systems, and fitness tech.</p>
        <div className="divider" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{
            padding: "22px 0",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              color: "var(--text-tertiary)", letterSpacing: "0.06em",
            }}>— First essay coming soon —</p>
          </div>
        </div>
      </div>
    </main>
  );
}
