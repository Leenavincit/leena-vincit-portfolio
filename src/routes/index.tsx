import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leena Vincit | Software Developer | Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Leena Vincit showcasing software development projects, Tableau dashboards, SQL, Python, PHP, Business Intelligence, and Data Analytics.",
      },
      { property: "og:title", content: "Leena Vincit | Software Developer | Data Analyst" },
      {
        property: "og:description",
        content:
          "Portfolio of Leena Vincit showcasing software development projects, Tableau dashboards, SQL, Python, PHP, Business Intelligence, and Data Analytics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
