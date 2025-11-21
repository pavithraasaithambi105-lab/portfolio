import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "15px",
          borderRadius: "50%",
          background: "#00eaff",
          border: "none",
        }}
      >
        🤖
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "300px",
            height: "380px",
            background: "#1a1a1a",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #333",
          }}
        >
          <h3>AI Assistant</h3>
          <p>Ask me anything about Pavithra!</p>
        </div>
      )}
    </>
  );
}
