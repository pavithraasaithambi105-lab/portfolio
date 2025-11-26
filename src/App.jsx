import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";

function App() {

  // ⭐ Controls which page is visible
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app-container">

      {/* ⭐ FIXED BACKGROUND VIDEO */}
      <VideoBackground />
      <div className="video-overlay" />

      {/* ⭐ NAVBAR */}
      <Navbar setActiveSection={setActiveSection} />

      {/* ⭐ SWITCH PAGES LIKE AN APP */}
      {activeSection === "home" && (
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
      )}

      {activeSection === "about" && (
        <section id="about" className="reveal reveal-right active">
          <About />
        </section>
      )}

      {activeSection === "skills" && (
        <section id="skills" className="reveal reveal-left active">
          <Skills />
        </section>
      )}

      {activeSection === "academics" && (
        <section id="academics" className="reveal reveal-up active">
          <Academics />
        </section>
      )}

      {activeSection === "projects" && (
        <section id="projects" className="reveal reveal-right active">
          <Projects />
        </section>
      )}

      {/* ⭐ RESUME SECTION */}
      {activeSection === "resume" && (
        <section id="resume" className="reveal reveal-left active">
          <Resume />
        </section>
      )}

      {activeSection === "contact" && (
        <section id="contact" className="reveal reveal-left active">
          <Contact />
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;
