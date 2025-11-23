import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <div className="resume">
      
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Resume
      </motion.h2>

      {/* Button Animation */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{
          scale: 1.12,
          boxShadow: "0 0 20px rgba(255, 78, 205, 0.7)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FileDown size={20} />
        Open Resume
      </motion.a>
    </div>
  );
}
