import Navbar from "./Components/Navbar";
import ContactSection from "./Components/ContactSection";
import ProjectsSection from "./Components/ProjectsSection";
import SkillsSections from "./Components/SkillsSections";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";
import Journey from "./Components/journey";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-space-grotesk">
      <header className="w-full fixed top-0 left-0 z-50">
      <Navbar />
      </header>
      <main className="w-full">
      <HeroSection />
      <AboutSection />
      <SkillsSections />
      <Journey />
      <ProjectsSection />
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
