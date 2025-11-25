const projects = [
  {
    name: "PulseOps Analytics",
    description:
      "Reimagined the real-time operations dashboard for logistics planners with adaptive layouts, live insights, and granular filtering.",
    results: ["+32% operator efficiency", "Sub-second data refresh", "WCAG AA compliance"],
    stack: ["React 18", "Next.js App Router", "WebSockets", "Tailwind CSS"],
    link: "https://pulseops.example"
  },
  {
    name: "Nova UI System",
    description:
      "Cross-framework design system shipping React and Angular packages from a single token source with automated visual tests.",
    results: ["1.5k weekly npm downloads", "40+ teams onboarded", "Chromatic powered regression suite"],
    stack: ["Angular 16", "React", "Storybook", "Nx Monorepo"],
    link: "https://nova.example"
  },
  {
    name: "Loop Checkout",
    description:
      "Built a modular checkout surface with orchestrated state machines, motion transitions, and localized payment integrations.",
    results: ["+11% conversion uplift", "90 → 98 CLS stability", "Global rollout in <7 weeks"],
    stack: ["React", "XState", "Node.js", "GraphQL"],
    link: "https://loopcheckout.example"
  }
];

export function ProjectsShowcase() {
  return (
    <section id="projects">
      <div className="container">
        <header className="section-heading">
          <span className="pill">Selected Projects</span>
          <h2>Product stories that blend craft and impact</h2>
          <p>
            Each engagement balanced experimentation with measurable outcomes. I excel at translating user interviews and
            data into composable components, purposeful motion, and dashboards that feel joyful to use.
          </p>
        </header>
        <div className="grid" style={{ gap: "2rem" }}>
          {projects.map((project) => (
            <article key={project.name} className="card">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{project.name}</h3>
                <p style={{ margin: 0, color: "rgba(214, 221, 253, 0.82)" }}>{project.description}</p>
              </div>
              <div
                style={{
                  margin: "1.3rem 0 1.6rem",
                  display: "grid",
                  gap: "0.7rem",
                  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))"
                }}
              >
                {project.results.map((result) => (
                  <span key={result} className="tag">
                    {result}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                style={{
                  marginTop: "1.6rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  color: "rgba(141, 249, 255, 0.92)"
                }}
              >
                View case study
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
