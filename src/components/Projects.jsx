import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const items = [
    { title: "Focus Timer", desc: "A productivity timer app with history and sounds." },
    { title: "Portfolio", desc: "This site — animated, neon, responsive." },
    { title: "Chatbot", desc: "Voice-enabled chatbot project." }
  ];

  const [open, setOpen] = useState(null);

  return (
    <div>
      <h2>Projects</h2>
      <div className="project-grid">
        {items.map((it, idx) => (
          <div key={it.title} className="card" onClick={() => setOpen(idx)}>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
            <div className="button">View</div>
          </div>
        ))}
      </div>

      {open !== null && (
        <div className="modal">
          <div className="modal-inner">
            <button className="close" onClick={() => setOpen(null)}>✕</button>
            <h3>{items[open].title}</h3>
            <p>{items[open].desc}</p>
            <div className="modal-bg"></div>
          </div>
        </div>
      )}
    </div>
  );
}
