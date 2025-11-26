import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Database, Cpu } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML / CSS", icon: <Layout size={28} /> },
    { name: "JavaScript", icon: <Code size={28} /> },
    { name: "React JS", icon: <Cpu size={28} /> },
    { name: "Database (SQL)", icon: <Database size={28} /> },
  ];

  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0, y: 60 }}      // 👈 slide up animation
      whileInView={{ opacity: 1, y: 0 }}   // 👈 triggers on scroll
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}            // 👈 animate only once
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
  key={index}
  className="skill-card"
  whileHover={{ scale: 1.08, y: -6 }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    type: "spring",
    stiffness: 200,
    duration: 0.5,
    delay: index * 0.15,
  }}
>
  <div className="skill-icon">{skill.icon}</div>
  <p className="skill-name">{skill.name}</p>
</motion.div>

        ))}
      </div>
    </motion.div>
  );
}
