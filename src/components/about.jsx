import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPaintBrush, FaCode } from "react-icons/fa";
import { FileDown } from "lucide-react"; // Resume icon

export default function About() {
  return (
    <motion.div
      className="about"
      style={{
        textAlign: "center",
        padding: "40px",
        background: "transparent",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* TOP PHOTO */}
      <img
        src="/anime/ghibli.png"
        alt="Profile"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid black",
          marginBottom: "20px",
          background: "transparent",
        }}
      />

      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>About Me</h2>

      <p
        style={{
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto 20px",
          background: "transparent",
        }}
      >
        I’m passionate about building creative web applications, exploring AI,
        and constantly learning new technologies to sharpen my skills.
      </p>

      {/* RESUME BUTTON (inside About section) */}
      <a
        href="/resume.pdf" // <-- place your file in public/resume.pdf
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        style={{
          display: "inline-flex",
          gap: "10px",
          alignItems: "center",
          padding: "12px 20px",
          marginTop: "12px",
          background: "rgba(140,0,255,0.6)",
          borderRadius: "10px",
          border: "1px solid rgba(216, 146, 255, 0.4)",
          fontWeight: "600",
          cursor: "pointer",
          textDecoration: "none",
          color: "white",
          textShadow: "0 0 10px #fff, 0 0 20px #8c00ff",
          transition: "0.3s",
        }}
      >
        <FileDown size={20} />
        View Resume
      </a>

      {/* ICONS WITH ANIMATIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
          background: "transparent",
        }}
      >
        <div className="about-icon">
          <FaReact size={40} />
          <p style={{ marginTop: "5px" }}>React Developer</p>
        </div>

        <div className="about-icon">
          <FaPaintBrush size={40} />
          <p style={{ marginTop: "5px" }}>UI Designer</p>
        </div>

        <div className="about-icon">
          <FaCode size={40} />
          <p style={{ marginTop: "5px" }}>Animator</p>
        </div>
      </div>

      <style>{`
        .about-icon {
          text-align: center;
          transition: transform 0.4s ease, color 0.4s ease;
          cursor: pointer;
          background: transparent !important;
        }

        .about-icon:hover {
          transform: scale(1.2) translateY(-5px);
          color: #3b82f6;
        }

        .about-icon svg {
          transition: transform 0.4s ease;
        }

        .about-icon:hover svg {
          transform: rotate(10deg) scale(1.3);
        }
      `}</style>
    </motion.div>
  );
}
