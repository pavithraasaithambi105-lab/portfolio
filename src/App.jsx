import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import VideoBackground from "./components/videobackground";

function App() {

  // ⭐ Controls which page is visible
  const [activeSection, setActiveSection] = useState("home");

  // ⭐ Nebular-space cursor state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // ⭐ Add trail dot
      setTrail((prev) => [
        ...prev.slice(-10), // limit trail to 10 dots
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

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

      {/* ⭐ ABOUT SECTION WITH REVEAL ANIMATION */}
      {activeSection === "about" && (
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}      // Start hidden and slightly lower
          animate={{ opacity: 1, y: 0 }}       // Animate to visible position
          exit={{ opacity: 0, y: -20 }}        // Optional: exit animation
          transition={{ duration: 0.7 }}       // Animation speed
          className="reveal reveal-right active"
        >
          <About />
        </motion.section>
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

      {/* ⭐ CUSTOM NEBULAR-SPACE STAR CURSOR */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
      {/* ⭐ STAR TRAIL */}
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{ left: dot.x, top: dot.y }}
        />
      ))}
    </div>
  );
}

export default App;
