const coreStack = [
  {
    title: "React Craftsmanship",
    description:
      "Hooks-first architecture, server components, state machines, performance profiling, and testing with React Testing Library.",
    tools: ["Next.js 14", "TanStack Query", "Redux Toolkit", "Playwright"]
  },
  {
    title: "Angular Excellence",
    description:
      "Standalone components, RxJS orchestration, schematics, Nx monorepos, and custom element integration for micro frontends.",
    tools: ["Angular 17", "RxJS", "NgRx", "Storybook", "Jasmine/Karma"]
  },
  {
    title: "Design Systems & DX",
    description:
      "Token pipelines, Figma integration, accessible component APIs, automated visual regression, and developer tooling.",
    tools: ["Design Tokens", "Chromatic", "Framer Motion", "Vitest", "MSW"]
  }
];

const workflow = [
  "Lean discovery workshops and journey mapping",
  "Accessible-first components with semantic HTML",
  "Observability hooks for feature readiness",
  "CI pipelines with preview environments",
  "Knowledge sharing: brown bags, pairing, docs"
];

export function TechStack() {
  return (
    <section id="tech-stack" style={{ background: "radial-gradient(circle at top, rgba(15, 28, 68, 0.85), #050714)" }}>
      <div className="container">
        <header className="section-heading">
          <span className="pill">React + Angular</span>
          <h2>A balanced toolkit for design-led teams</h2>
          <p>
            From greenfield prototypes to complex platforms, I pair React and Angular pragmatically based on team
            composition, scaling needs, and performance goals. Hybrid app? Multi-brand? Let&apos;s architect it thoughtfully.
          </p>
        </header>
        <div className="grid" style={{ gap: "1.75rem", marginBottom: "2.8rem" }}>
          {coreStack.map((stack) => (
            <article key={stack.title} className="card floating">
              <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{stack.title}</h3>
              <p style={{ margin: "1rem 0", color: "rgba(214, 221, 253, 0.78)" }}>{stack.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {stack.tools.map((tool) => (
                  <span key={tool} className="tag">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="card">
          <h3 style={{ margin: "0 0 1.3rem", fontSize: "1.3rem" }}>How I work</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "0.9rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
            }}
          >
            {workflow.map((item) => (
              <li
                key={item}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "16px",
                  background: "rgba(16, 24, 48, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.05)"
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
