import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa"; // Icons

export default function Academics() {
  return (
    <div
      className="academics"
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Academics</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontSize: "18px",
          lineHeight: "35px",
        }}
      >
        <li
          className="academics-item"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FaUniversity className="icon" size={25} />
          Bachelor of Computer Science - K.S.R COLLEGE OF ENGINEERING
        </li>

        <li
          className="academics-item"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FaSchool className="icon" size={25} />
          High School - GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL
        </li>
      </ul>

      {/* Inline CSS Animation */}
      <style>{`
        .academics-item .icon {
          transition: transform 0.4s ease, color 0.3s ease;
        }

        .academics-item:hover .icon {
          transform: rotate(20deg) scale(1.2);
          color: #3b82f6; /* blue on hover */
        }
      `}</style>
    </div>
  );
}

