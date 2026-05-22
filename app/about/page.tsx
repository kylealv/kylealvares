export default function About() {
  return (
    <main style={{ paddingTop: 54 }}>
      <div className="container page-wrap">
        <h1 className="page-heading">About <em>me.</em></h1>
        <p className="page-sub">Technical Project Manager · Chicago, IL</p>
        <div className="divider" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 64,
          alignItems: "start",
        }}>
          {/* Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: 15 }}>
              I started as a Mechanical Engineer at Milwaukee Tool, where I designed
              two impact wrenches from concept to shelf — the 2666-20 and the 2966-20
              FUEL. Putting products in users' hands made me want more ownership over
              the decisions that shaped them. So I moved into a TPM role in Sustaining
              Engineering, leading cross-functional teams globally to root-cause product
              failures and implement corrective actions across manufacturing sites.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.85, fontSize: 15 }}>
              Today I'm a Technical Project Manager at Honeywell, leading New Product
              Introduction for portable gas detection monitors. I've spent my career at
              the intersection of engineering and execution — managing complex schedules,
              aligning global stakeholders, and shipping. I'm now targeting PM roles
              where I can bring that hardware depth and operational rigor to building
              products people actually want.
            </p>
          </div>

          {/* Meta */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-tertiary)", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 8,
              }}>Currently</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                TPM — NPI @ Honeywell International
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-tertiary)", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 8,
              }}>Previously</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                ME + TPM @ Milwaukee Tool
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-tertiary)", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 8,
              }}>Based in</p>
              <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>Chicago, IL</p>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-tertiary)", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 8,
              }}>Targeting</p>
              <div className="tag-list">
                <span className="tag">Consumer</span>
                <span className="tag">Hardware</span>
                <span className="tag">Health Tech</span>
                <span className="tag">Energy</span>
              </div>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-tertiary)", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 8,
              }}>Resume</p>
              <a href="/resume.pdf" style={{
                color: "var(--accent)", fontFamily: "var(--font-mono)",
                fontSize: 13, textDecoration: "none",
              }}>
                Download PDF →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
