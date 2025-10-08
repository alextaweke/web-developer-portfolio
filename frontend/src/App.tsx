import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans ${darkMode ? "dark" : ""}`}>
      <Navbar
        name={portfolioData.name}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero data={portfolioData} />
      <About />
      <Skills skills={portfolioData.skills} />
      <Projects
        completed={portfolioData.completedProjects}
        ongoing={portfolioData.ongoingProjects}
      />
      <Contact />
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
