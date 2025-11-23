import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, FolderOpen, Bot } from "lucide-react";

export default function Projects() {
  const items = [
    { 
      title: "Focus Timer", 
      desc: "A productivity timer app with history and sound alerts.",
      icon: <Timer size={28} />,
      animation: { x: -80, y: 0 }   // LEFT
    },
    { 
      title: "Portfolio", 
      desc: "This animated, neon-themed responsive portfolio website.",
      icon: <FolderOpen size={28} />,
      animation: { x: 80, y: 0 }    // RIGHT
    },
    { 
      title: "Chatbot", 
      desc: "A voice-enabled chatbot using API integration.",
      icon: <Bot size={28} />,
      animation: { x: 0, y: 80 }    // BOTTOM
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            className="card"
            onClick={() => setOpen(idx)}
            initial={{ opacity: 0, x: it.animation.x, y: it.animation.y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.08, y: -6 }}
          >
            <div className="card-icon">{it.icon}</div>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
            <span className="button">View</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div 
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-inner"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <button className="close" onClick={() => setOpen(null)}>✕</button>

              <div className="modal-icon">{items[open].icon}</div>

              <h3>{items[open].title}</h3>
              <p>{items[open].desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
