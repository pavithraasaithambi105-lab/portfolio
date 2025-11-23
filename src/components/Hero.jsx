import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero({ setActiveSection }) {
  return (
    <div className="hero" style={{ position: "relative", overflow: "hidden" }}>
      
      {/* LEFT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{ zIndex: 2 }}
      >
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Pavithra</span>
          <motion.span
            className="spark-icon"
            animate={{ rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          >
            <Sparkles size={26} />
          </motion.span>
        </h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I create interactive, animated web experiences.
        </motion.p>

        <motion.button
          className="hero-btn"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250 }}
          onClick={() => setActiveSection("about")} // Navigate to About on click
        >
          Explore More <ArrowRight size={18} className="arrow" />
        </motion.button>
      </motion.div>

      {/* RIGHT SIDE GIF */}
      <img
        src="/gifs/anime-float.gif"
        alt="Anime GIF"
        className="square-gif"
      />
    </div>
  );
}
