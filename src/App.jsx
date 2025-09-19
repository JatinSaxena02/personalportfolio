import Navbar from "./navbar/Navbar";
import HeroSection from "./hero-section/HeroSection";
import About from "./about/About";
import ExperienceSection from "./experience/ExperienceSection";
import Education from "./education/Education";
import Project from "./project/Project";
import { Route, Routes } from "react-router-dom";
import ExtraProject from "./pages/ExtraProject";
import Skills from "./skills/Skills";
import Contact from "./contact/contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#1A1A1A]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <ExperienceSection />
                <Education />
                <Project />
                <Skills />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects" element={<ExtraProject />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
