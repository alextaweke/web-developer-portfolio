import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Debug: Check if skills data is properly structured
  console.log("Skills Data:", portfolioData.skills);

  return (
    <Router>
      <div className={`min-h-screen font-sans ${darkMode ? "dark" : ""}`}>
        <Navbar
          name={portfolioData.name}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>
          {/* ✅ Main Portfolio Page */}
          <Route
            path="/"
            element={
              <>
                <Hero data={portfolioData} />
                <About />
                {/* Ensure skills are passed correctly */}
                <Skills
                  categories={portfolioData.skills}
                  variant="default"
                  showIcons={true}
                  showLevel={false}
                />
                <Projects
                  completed={portfolioData.completedProjects}
                  ongoing={portfolioData.ongoingProjects}
                />
                <Contact />
                <Footer data={portfolioData} />
              </>
            }
          />

          {/* ✅ Admin Page */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
