import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 54,
    }}>
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "80px 32px",
      }}>
        <p className="fade-up fade-up-1" style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--accent-dim)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 32,
        }}>
          Hardware · Product · Systems
        </p>

        <h1 className="fade-up fade-up-2" style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(52px, 8vw, 80px)",
          fontWeight: 400,
          lineHeight: 1.02,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: 28,
        }}>
          Kyle Alvares<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Builder.</em>
        </h1>

        <p className="fade-up fade-up-3" style={{
          fontSize: 17,
          color: "var(--text-secondary)",
          maxWidth: 520,
          lineHeight: 1.75,
          marginBottom: 48,
        }}>
          I've spent my career at the intersection of engineering and execution.
          Product is the next move — where depth in hardware meets ownership of
          vision, strategy, and what gets built.
        </p>

        <div className="fade-up fade-up-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link href="/projects" className="btn-primary">View Work →</Link>
          <Link href="/contact"  className="btn-ghost">Get in Touch</Link>
        </div>
      </div>
    </main>
  );
}
