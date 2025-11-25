import { AngularShowcase } from "@/components/AngularShowcase";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <TechStack />
      <ProjectsShowcase />
      <AngularShowcase />
      <Testimonials />
      <ContactSection />
      <footer style={{ padding: "2rem 0", background: "#050714" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <span style={{ color: "rgba(214, 221, 253, 0.64)", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Lina Kim. Built with React & Angular.
          </span>
          <a href="https://agentic-ea3228e3.vercel.app" style={{ color: "rgba(141, 249, 255, 0.92)", fontSize: "0.9rem" }}>
            Production URL
          </a>
        </div>
      </footer>
    </>
  );
}
