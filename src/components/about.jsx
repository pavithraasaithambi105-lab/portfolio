import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPaintBrush, FaCode } from "react-icons/fa"; // Icons

export default function About() {
  return (
    <motion.div
      className="about"
      style={{ textAlign: "center", padding: "40px" }}
      initial={{ opacity: 0, y: 60 }}        // 👈 start hidden & down
      whileInView={{ opacity: 1, y: 0 }}     // 👈 animate when visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}              // 👈 animate only once
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
          transform: "none",
          border: "4px solid black",
          marginBottom: "20px",
        }}
      />

      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>About Me</h2>

      <p
        style={{
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: "20px",
        }}
      >
        I'm a Computer Science student who loves exploring AI and developing projects that help me learn and grow.
      </p>

      {/* ICONS WITH ANIMATIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px",
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

      {/* ⭐ RESUME BUTTON ADDED HERE */}
      <button
        onClick={() => window.open("/resume.pdf", "_blank")}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        View Resume
      </button>

      {/* INLINE CSS */}
      <style>{`
        .about-icon {
          text-align: center;
          transition: transform 0.4s ease, color 0.4s ease;
          cursor: pointer;
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
