"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about",    label: "About"    },
  { href: "/projects", label: "Projects" },
  { href: "/writing",  label: "Writing"  },
  { href: "/contact",  label: "Contact"  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: "rgba(14,14,14,0.88)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "0 32px",
        height: 54,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          color: "var(--accent)",
          letterSpacing: "0.02em",
          textDecoration: "none",
        }}>
          kylealvares.com
        </Link>

        <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link href={href} style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: active ? "var(--text-primary)" : "var(--text-secondary)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  position: "relative",
                  paddingBottom: 4,
                  borderBottom: active ? "1px solid var(--accent)" : "none",
                  transition: "color 0.2s",
                }}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
