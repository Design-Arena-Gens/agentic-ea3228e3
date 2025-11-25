type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  impact: string[];
  tech: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Helio Commerce",
    role: "Frontend Engineer · React Platform Squad",
    period: "2022 — Present",
    impact: [
      "Built a modular checkout experience used by 120+ brands with shared analytics instrumentation.",
      "Drove Lighthouse performance from 72 → 93 by introducing code-splitting and smart image delivery.",
      "Co-led design system migration to Storybook, reducing UI regressions by 40% across feature pods."
    ],
    tech: ["React 18", "Next.js", "Zustand", "GraphQL", "Storybook"]
  },
  {
    company: "BrightLayer",
    role: "Frontend Engineer · Angular Design System",
    period: "2021 — 2022",
    impact: [
      "Refactored legacy AngularJS dashboards into standalone Angular components with strict typing.",
      "Introduced harness-based unit tests and visual regression suite to gate component library releases.",
      "Shipped multi-brand theming with dynamic tokens that feed both Angular and React packages."
    ],
    tech: ["Angular 15", "RxJS", "Nx", "Jest", "SCSS"]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience">
      <div className="container">
        <header className="section-heading">
          <span className="pill">Experience</span>
          <h2>Shipping polished products with velocity and care</h2>
          <p>
            Product-minded engineer pairing interaction design intuition with production-grade React and Angular
            systems. Comfortable navigating ambiguous roadmaps, mentoring designers, and collaborating tightly with
            backend partners.
          </p>
        </header>
        <div className="grid" style={{ gap: "2rem" }}>
          {experience.map((item) => (
            <article key={item.company} className="card">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center" }}>
                  <h3 style={{ margin: 0, fontSize: "1.35rem", letterSpacing: "-0.01em" }}>{item.company}</h3>
                  <span className="tag">{item.period}</span>
                </div>
                <p style={{ margin: 0, color: "rgba(214, 221, 253, 0.82)" }}>{item.role}</p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "1.6rem 0 1.8rem",
                  display: "grid",
                  gap: "0.85rem"
                }}
              >
                {item.impact.map((line) => (
                  <li key={line} style={{ display: "flex", gap: "0.75rem" }}>
                    <span aria-hidden style={{ color: "#8df9ff" }}>
                      ▹
                    </span>
                    <span style={{ color: "rgba(208, 220, 255, 0.8)" }}>{line}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {item.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
