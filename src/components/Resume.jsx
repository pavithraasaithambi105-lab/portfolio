import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <div className="resume-section">
      
      {/* Title */}
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h2>

      {/* Button */}
      <motion.a
        href="/resume.pdf"   // Make sure resume.pdf is placed inside public/ folder
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          scale: 1.15,
          boxShadow: "0 0 20px rgba(255, 0, 170, 0.8)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FileDown size={22} />
        Open Resume
      </motion.a>
    </div>
  );
}
