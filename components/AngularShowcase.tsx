export function AngularShowcase() {
  return (
    <section id="angular-widget" style={{ background: "rgba(7, 11, 32, 0.78)" }}>
      <div className="container">
        <header className="section-heading">
          <span className="pill">Angular in Action</span>
          <h2>Interactive Angular micro-experience</h2>
          <p>
            This embedded widget is powered by Angular standalone components delivered as a micro frontend. The UX echoes
            the multi-framework setups I help teams adopt when React and Angular squads collaborate.
          </p>
        </header>
        <iframe
          title="Angular Experience Widget"
          src="/angular-widget/index.html"
          className="angular-widget"
          loading="lazy"
        />
      </div>
    </section>
  );
}
