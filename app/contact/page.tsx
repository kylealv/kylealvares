export default function Contact() {
  return (
    <main style={{ paddingTop: 54 }}>
      <div className="container page-wrap">
        <h1 className="page-heading">Let's talk <em>product,</em></h1>
        <h1 className="page-heading" style={{ marginBottom: 48 }}>execution, or ideas.</h1>
        <div className="divider" />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { label: "Email",    value: "kyle@kylealvares.com",              href: "mailto:kyle@kylealvares.com", arrow: "↗" },
            { label: "LinkedIn", value: "linkedin.com/in/[handle]",          href: "https://linkedin.com/in/[handle]", arrow: "↗" },
            { label: "Resume",   value: "Download PDF",                       href: "/resume.pdf", arrow: "↓" },
          ].map(({ label, value, href, arrow }) => (
            <a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", padding: "20px 0",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none", transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "var(--text-tertiary)", letterSpacing: "0.1em",
                textTransform: "uppercase", width: 100,
              }}>{label}</span>
              <span style={{ fontSize: 15, color: "var(--text-primary)", flex: 1 }}>
                {value}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-tertiary)" }}>
                {arrow}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
