import React from "react";

export default function Navbar({ setActiveSection }) {
  return (
    <nav
      className="navbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.6)",
        padding: "12px 0",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        gap: "22px",
      }}
    >
      <button className="nav-btn" onClick={() => setActiveSection("home")}>
        Home
      </button>

      <button className="nav-btn" onClick={() => setActiveSection("about")}>
        About
      </button>

      <button className="nav-btn" onClick={() => setActiveSection("skills")}>
        Skills
      </button>

      <button className="nav-btn" onClick={() => setActiveSection("academics")}>
        Academics
      </button>

      <button className="nav-btn" onClick={() => setActiveSection("projects")}>
        Projects
      </button>

      <button className="nav-btn" onClick={() => setActiveSection("contact")}>
        Contact
      </button>

      {/* ✅ Resume Button Added */}
      <button className="nav-btn" onClick={() => setActiveSection("resume")}>
        Resume
      </button>
    </nav>
  );
}
