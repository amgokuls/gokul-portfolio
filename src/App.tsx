import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Stacks from "./components/Stacks.tsx";
import About from "./components/about.tsx";
import Services from "./components/Servies.tsx";
import Contact from "./components/Contact.tsx";
import Projects from "./components/Project.tsx";
import ProjectBlog from "./components/ProjectBlog.tsx";
import Qualification from "./components/qualification.tsx";
import Footer from "./components/Footer.tsx";
import Scrolltotop from "./components/Scrolltotop.tsx";
import { ThemeProvider } from "./components/ThemeContext.tsx";
import { useEffect } from "react";

function MainContent() {
  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="animate-section">
        <Hero />
      </div>
      <div className="animate-section">
        <Projects />
      </div>
      <div className="animate-section">
        <About />
      </div>
      <div className="animate-section">
        <Qualification />
      </div>
      <div className="animate-section">
        <Stacks />
      </div>
      <div className="animate-section">
        <Services />
      </div>
      <div className="animate-section">
        <Contact />
      </div>
      <div className="animate-section">
        <Footer />
      </div>
      <Scrolltotop />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/blog/:projectId" element={<ProjectBlog />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
