import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (let section of sections.reverse()) {
        if (window.scrollY >= (document.getElementById(section)?.offsetTop || 0) - 100) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar currentSection={currentSection} enableAnimations={enableAnimations} />
      <Hero enableAnimations={enableAnimations} />
      <About enableAnimations={enableAnimations} />
      <Skills enableAnimations={enableAnimations} />
      <Experience enableAnimations={enableAnimations} />
      <Projects enableAnimations={enableAnimations} />
      <Contact enableAnimations={enableAnimations} />
      <Footer enableAnimations={enableAnimations} />
    </div>
  );
}

export default App;

