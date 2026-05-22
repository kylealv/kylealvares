export default function Projects() {
  return (
    <main style={{ paddingTop: 54 }}>
      <div className="container page-wrap">
        <h1 className="page-heading">Projects &amp; <em>Work.</em></h1>
        <p className="page-sub">Case studies in product thinking and execution.</p>
        <div className="divider" />

        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>

          {/* Fiit */}
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "32px 36px",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent-dim)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", marginBottom: 14,
            }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-serif)", fontSize: 24,
                  fontWeight: 400, color: "var(--text-primary)", letterSpacing: "-0.01em",
                }}>Fiit</p>
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--text-tertiary)", marginTop: 5,
                }}>2024 — Ongoing</p>
              </div>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--accent-dim)", border: "1px solid var(--border)",
                padding: "3px 10px", borderRadius: 20, letterSpacing: "0.06em",
                textTransform: "uppercase", flexShrink: 0,
              }}>In Progress</span>
            </div>

            <p style={{
              fontSize: 14, color: "var(--text-secondary)",
              lineHeight: 1.75, marginBottom: 22, maxWidth: 580,
            }}>
              {/* TODO: Add Fiit description once write-up is ready */}
              A physiologically-led intelligent fitness trainer. Full case study coming soon.
            </p>

            <div className="tag-list">
              <span className="tag">Product Concept</span>
              <span className="tag">Fitness Tech</span>
              <span className="tag">Consumer</span>
            </div>
          </div>

          {/* Placeholder */}
          <div style={{
            border: "1px dashed var(--border)",
            borderRadius: 8, padding: "32px 36px", textAlign: "center",
          }}>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              color: "var(--text-tertiary)", letterSpacing: "0.06em",
            }}>— Case study coming soon —</p>
          </div>

        </div>
      </div>
    </main>
  );
}
