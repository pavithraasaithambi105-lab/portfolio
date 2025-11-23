import React from "react";
import { motion } from "framer-motion";
import { Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
  style={{ textAlign: "center", padding: "20px", background: "#3f4d68ff", color: "#fff", marginTop: "40px", }}

    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ fontSize: "14px", marginBottom: "10px" }}>
          &copy; {new Date().getFullYear()} Pavithra A. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <motion.a
            href="#"
            whileHover={{ scale: 1.3, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ color: "white" }}
          >
            <Instagram size={24} />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.3, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ color: "white" }}
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="mailto:someone@example.com"
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ color: "white" }}
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
