const testimonials = [
  {
    quote:
      "Lina brings clarity to complex product briefs. She prototypes in React and Angular interchangeably, and our stakeholders finally trust front-end timelines again.",
    name: "Priya Desai",
    title: "Director of Product · Helio Commerce"
  },
  {
    quote:
      "She rewired our component library governance and made contributions joyful. Our designers lean on her when deciding what belongs in React or Angular.",
    name: "Andrés Molina",
    title: "Design Systems Lead · BrightLayer"
  }
];

export function Testimonials() {
  return (
    <section style={{ background: "linear-gradient(180deg, rgba(8, 14, 34, 0.94), rgba(5, 8, 18, 1))" }}>
      <div className="container">
        <header className="section-heading">
          <span className="pill">Voices</span>
          <h2>People enjoy building with Lina</h2>
          <p>Trusted by product, design, and platform partners to move ideas from sketch to production.</p>
        </header>
        <div className="grid" style={{ gap: "1.8rem" }}>
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="card"
              style={{
                margin: 0,
                display: "grid",
                gap: "1.1rem",
                background: "rgba(12, 18, 44, 0.7)"
              }}
            >
              <blockquote style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.7 }}>
                “{testimonial.quote}”
              </blockquote>
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <span style={{ fontWeight: 600 }}>{testimonial.name}</span>
                <span style={{ color: "rgba(214, 221, 253, 0.7)", fontSize: "0.95rem" }}>{testimonial.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
