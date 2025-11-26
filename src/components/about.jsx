import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPaintBrush, FaCode } from "react-icons/fa"; // Icons

// ✅ Variants for staggered reveal of icons and text
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <motion.div
      className="about"
      style={{ textAlign: "center", padding: "40px" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >

      {/* TOP PHOTO (FIXED) */}
      <motion.img
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
        variants={itemVariants}
      />

      <motion.h2
        style={{ fontSize: "28px", marginBottom: "10px" }}
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      <motion.p
        style={{
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: "20px",
        }}
        variants={itemVariants}
      >
        I'm a Computer Science student who loves exploring AI 
        and developing projects that help me learn and grow.
      </motion.p>

      {/* ICONS WITH ANIMATIONS */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px",
        }}
        variants={itemVariants}
      >
        <motion.div className="about-icon" variants={itemVariants}>
          <FaReact size={40} />
          <p style={{ marginTop: "5px" }}>React Developer</p>
        </motion.div>

        <motion.div className="about-icon" variants={itemVariants}>
          <FaPaintBrush size={40} />
          <p style={{ marginTop: "5px" }}>UI Designer</p>
        </motion.div>

        <motion.div className="about-icon" variants={itemVariants}>
          <FaCode size={40} />
          <p style={{ marginTop: "5px" }}>Animator</p>
        </motion.div>
      </motion.div>

      {/* ⭐ RESUME BUTTON */}
      <motion.button
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
        whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59,130,246,0.4)" }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        View Resume
      </motion.button>

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
