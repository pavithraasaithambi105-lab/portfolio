import React, { useEffect, useRef, useState } from "react";
import "./Assistant.css";
import { FaTimes, FaMicrophone, FaPaperPlane } from "react-icons/fa";

const synthReply = (message) => {
  // Replace this with a real API call later.
  // Keep responses short for demo.
  if (!message) return "Hello! How can I help you today?";
  if (message.toLowerCase().includes("project")) return "I built this portfolio using React, Vite and CSS animations.";
  if (message.toLowerCase().includes("contact")) return "Use the contact form on the page — it sends messages to my email.";
  return "Thanks — I received your message. I'll get back to you soon!";
};

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I'm your assistant. Ask me about my projects!" },
  ]);
  const [input, setInput] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const typingTimerRef = useRef(null);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    // Auto-scroll chat when new message arrives
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    // Setup SpeechRecognition if available
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-US";
      rec.onresult = (e) => {
        const text = e.results[0][0].transcript;
        setInput((prev) => (prev ? prev + " " + text : text));
        setListening(false);
      };
      rec.onend = () => setListening(false);
      recognitionRef.current = rec;
    }
    return () => {
      if (recognitionRef.current) recognitionRef.current.onresult = null;
    };
  }, []);

  const sendMessage = async (text) => {
    if (!text) return;
    // Add user message
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    // Simulate bot typing/speaking
    setSpeaking(true);

    // Simulated async delay (replace with API call)
    clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(() => {
      const reply = synthReply(text);
      // Type the reply char-by-char for effect
      typeReply(reply);
    }, 700);
  };

  const typeReply = (fullText) => {
    let index = 0;
    setMessages((m) => [...m, { from: "bot", text: "" }]); // placeholder
    const typeInterval = setInterval(() => {
      index++;
      setMessages((m) => {
        const copy = [...m];
        // find last bot message index
        const lastBotIndex = copy.map((x) => x.from).lastIndexOf("bot");
        if (lastBotIndex >= 0) {
          copy[lastBotIndex].text = fullText.slice(0, index);
        }
        return copy;
      });
      if (index >= fullText.length) {
        clearInterval(typeInterval);
        setSpeaking(false);
      }
    }, 18); // typing speed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    sendMessage(input.trim());
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setListening(true);
      } catch (err) {
        setListening(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <>
      {/* Floating assistant button */}
      <div
        className={`assistant assistant--${open ? "open" : "closed"}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        role="button"
        aria-label={open ? "Close assistant" : "Open assistant"}
        tabIndex={0}
      >
        <div className="assistant-img-wrap">
          <img
            src="/assets/assistant.png"
            alt="assistant"
            className={`assistant-img ${speaking ? "assistant-speaking" : ""}`}
            draggable={false}
          />
          {/* blink overlay */}
          <div className="assistant-blink" aria-hidden="true" />
          {/* speaking mouth indicator */}
          <div
            className={`assistant-mouth ${speaking ? "assistant-mouth--on" : ""}`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Chat popup */}
      <div
        className={`assistant-chat ${open ? "assistant-chat--open" : ""}`}
        role="dialog"
        aria-label="Assistant chat"
      >
        <div className="assistant-chat-header">
          <div className="assistant-chat-title">Assistant</div>
          <button
            className="assistant-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <FaTimes />
          </button>
        </div>

        <div className="assistant-chat-body" ref={chatBodyRef}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={`chat-row chat-row--${m.from}`}
              aria-live={m.from === "bot" ? "polite" : "off"}
            >
              <div className="chat-bubble">{m.text}</div>
            </div>
          ))}
          {speaking && (
            <div className="chat-row chat-row--bot">
              <div className="chat-bubble chat-bubble--typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          )}
        </div>

        <form className="assistant-chat-form" onSubmit={handleSubmit}>
          <button
            type="button"
            className={`mic-btn ${listening ? "listening" : ""}`}
            onClick={toggleListening}
            title="Voice input"
            aria-pressed={listening}
          >
            <FaMicrophone />
          </button>

          <input
            type="text"
            aria-label="Message"
            placeholder="Write a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input"
          />

          <button className="send-btn" aria-label="Send message">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </>
  );
}
