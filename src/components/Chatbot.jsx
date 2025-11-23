import React, { useState } from "react";
import { FaComments } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, from: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const userInput = input;
    setInput("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_API_KEY_HERE`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: userInput }],
        }),
      });

      const data = await res.json();
      const botReply =
        data.choices?.[0]?.message?.content || "Sorry, I couldn't respond.";

      setMessages((prev) => [...prev, { text: botReply, from: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "API Error. Check your API key.", from: "bot" },
      ]);
    }
  };

  return (
    <div>
      {/* CHAT TOGGLE BUTTON */}
      <button onClick={() => setOpen(!open)} className="chat-toggle">
        <FaComments size={24} className="chat-icon" />
      </button>

      {/* CHATBOX */}
      {open && (
        <div className="chatbot-box">
          <h3 className="chatbot-title">Chatbot</h3>

          <div className="chat-window">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-msg ${msg.from === "user" ? "user" : "bot"}`}
              >
                <span className="chat-bubble">{msg.text}</span>
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Type..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input"
            />
            <button onClick={sendMessage} className="chat-send-btn">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
