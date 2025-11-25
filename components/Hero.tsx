import Link from "next/link";

const heroHighlights = [
  { label: "3 Years", detail: "shipping delightful interfaces" },
  { label: "React & Angular", detail: "production ready" },
  { label: "Design Systems", detail: "scalable & accessible" }
];

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" }
];

export function Hero() {
  return (
    <header className="container" style={{ paddingTop: "5.5rem", paddingBottom: "4rem" }}>
      <div
        className="card gradient-border"
        style={{
          position: "relative",
          padding: "3.25rem clamp(1.8rem, 4vw, 3.5rem)",
          overflow: "hidden"
        }}
      >
        <svg
          width="820"
          height="820"
          viewBox="0 0 820 820"
          fill="none"
          style={{
            position: "absolute",
            top: "-55%",
            right: "-10%",
            opacity: 0.45,
            filter: "blur(0px)"
          }}
        >
          <path
            d="M513.603 41.0043C624.322 64.5394 714.62 152.527 765.748 261.521C820.847 378.639 839.522 517.189 780.484 629.968C721.097 743.476 591.623 820.676 463.523 818.974C345.13 817.412 276.33 704.703 184.965 623.19C96.0533 543.857 -33.4911 492.479 4.32777 377.946C41.258 266.548 195.663 267.703 305.142 221.557C410.333 177.237 405.143 16.7073 513.603 41.0043Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.45"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="75" y1="98" x2="705" y2="744" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7B59FE" />
              <stop offset="0.5" stopColor="#43D6FF" />
              <stop offset="1" stopColor="#8EFFB0" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginBottom: "2rem" }}>
            <span className="pill">Frontend Engineer</span>
            <span className="pill">Product focused</span>
            <span className="pill">Remote-ready</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <h1 style={{ margin: 0, fontSize: "clamp(2.8rem, 6vw, 3.6rem)", letterSpacing: "-0.04em" }}>
              Lina Kim crafts resilient React & Angular experiences with a design system mindset.
            </h1>
            <p
              style={{
                marginTop: "1.4rem",
                marginBottom: "2rem",
                color: "rgba(215, 228, 255, 0.78)",
                fontSize: "1.1rem",
                maxWidth: 640,
                lineHeight: 1.7
              }}
            >
              I build cohesive, accessible user journeys that balance motion, performance, and maintainability. With a
              background in design systems and platform teams, I thrive in product squads shipping end-to-end features.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.2rem" }}>
              <Link
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.95rem 1.8rem",
                  borderRadius: 999,
                  border: "1px solid rgba(142, 255, 224, 0.42)",
                  background: "linear-gradient(135deg, rgba(142, 255, 224, 0.24), rgba(67, 214, 255, 0.22))",
                  boxShadow: "0 12px 35px rgba(118, 255, 237, 0.22)",
                  color: "#091028",
                  fontWeight: 600,
                  letterSpacing: "0.03em"
                }}
              >
                Start a project
              </Link>
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.95rem 1.6rem",
                  borderRadius: 999,
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  color: "rgba(255, 255, 255, 0.82)",
                  fontWeight: 500,
                  letterSpacing: "0.03em"
                }}
              >
                View selected work
                <span aria-hidden style={{ fontSize: "1.2rem" }}>
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              marginTop: "3.2rem"
            }}
          >
            {heroHighlights.map((highlight) => (
              <article key={highlight.label} className="card" style={{ background: "rgba(5, 10, 28, 0.65)" }}>
                <p style={{ margin: 0, fontSize: "1rem", color: "rgba(158, 173, 217, 0.88)" }}>{highlight.label}</p>
                <h3 style={{ margin: "0.35rem 0 0", fontSize: "1.25rem" }}>{highlight.detail}</h3>
              </article>
            ))}
          </div>
        </div>
        <nav
          aria-label="Site sections"
          style={{
            position: "absolute",
            insetInline: "clamp(1.8rem, 4vw, 3.5rem)",
            bottom: "1.8rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            opacity: 0.85,
            fontSize: "0.95rem"
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.3rem 0.6rem",
                borderBottom: "1px solid transparent"
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
