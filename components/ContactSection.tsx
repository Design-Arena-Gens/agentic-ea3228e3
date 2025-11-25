import Link from "next/link";

const channels = [
  {
    label: "Email",
    value: "hello@linakim.design",
    href: "mailto:hello@linakim.design"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/linakim",
    href: "https://www.linkedin.com/in/linakim"
  },
  {
    label: "GitHub",
    value: "github.com/linakim",
    href: "https://github.com/linakim"
  }
];

export function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <header className="section-heading">
          <span className="pill">Let&apos;s collaborate</span>
          <h2>Have a product sprint or platform challenge in mind?</h2>
          <p>
            I love partnering with product teams to bring clarity to user journeys and confidence to frontends. Drop a
            note with context, and I&apos;ll reply with ideas, timelines, and ways we can prototype rapidly.
          </p>
        </header>
        <div className="card" style={{ display: "grid", gap: "2.4rem" }}>
          <div style={{ display: "grid", gap: "1rem" }}>
            <p style={{ margin: 0, color: "rgba(214, 221, 253, 0.82)" }}>
              Available for remote-friendly roles, short-term engagements, and audits of existing design systems or
              frontends. Based in Vancouver, collaborating across PST and EST time zones.
            </p>
            <Link
              href="https://cal.com/linakim/discovery"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 1.4rem",
                borderRadius: 999,
                background: "linear-gradient(135deg, rgba(123, 89, 254, 0.35), rgba(67, 214, 255, 0.35))",
                border: "1px solid rgba(123, 89, 254, 0.4)",
                color: "#091028",
                fontWeight: 600,
                width: "fit-content"
              }}
            >
              Schedule a discovery call
              <span aria-hidden>↗</span>
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
            }}
          >
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="card"
                style={{
                  background: "rgba(10, 14, 38, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "1.2rem"
                }}
              >
                <p style={{ margin: 0, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {channel.label}
                </p>
                <h3 style={{ margin: "0.8rem 0 0", fontSize: "1.1rem", color: "rgba(141, 249, 255, 0.92)" }}>
                  {channel.value}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
