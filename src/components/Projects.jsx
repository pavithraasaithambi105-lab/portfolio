import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Focus Timer",
      image: "/portfolio/projects/project1.jpg",
      description:
        "A productivity timer with work/break cycles, animations, and task history.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: "/portfolio/projects/project2.jpg",
      description:
        "A fully animated portfolio with neon effects, smooth navigation, and chatbot.",
    },
    {
      id: 3,
      title: "Weather App",
      image: "/portfolio/projects/project3.jpg",
      description:
        "A weather application using API integration with animated UI elements.",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-container">
      <h2 className="project-title">My Projects</h2>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={project.id}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="project-card"
          >
            {/* IMAGE MODE */}
            {activeProject !== project.id && (
              <motion.img
                src={project.image}
                alt={project.title}
                className="project-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setActiveProject(project.id)}
              />
            )}

            {/* DETAILS MODE */}
            {activeProject === project.id && (
              <motion.div
                className="project-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <motion.button
                  className="close-btn"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
