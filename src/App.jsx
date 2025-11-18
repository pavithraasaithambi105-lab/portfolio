import React from "react";
import avatar from "./assets/avatar.jpg";

function App() {
  const certifications = [
    { name: "NPTEL – Programming in C", year: "2024" },
    { name: "Coursera – Frontend Development", year: "2025" },
    { name: "GUVI – Python Basics", year: "2024" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400">Pavithra</h1>
        <a href="#contact" className="bg-purple-600 px-3 py-1 rounded">
          Contact
        </a>
      </header>

      {/* Hero Section */}
      <section className="mt-10 flex flex-col items-center">
        <img src={avatar} className="w-32 h-32 rounded-full shadow-lg" />
        <h2 className="text-3xl font-bold mt-4">Hi, I'm Pavithra 👋</h2>
        <p className="opacity-70 mt-2 text-center">
          2nd year CSE student • Frontend Developer • UI/UX enthusiast
        </p>
      </section>

      {/* About Me */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-3">About Me 💡</h3>
        <p className="opacity-80 leading-relaxed">
          Hi, I’m Pavithra — a passionate Computer Science student who loves turning ideas into clean, scalable, and user-friendly software.
I specialize in Java, Python, C, and modern frontend development, and I’m growing fast in building production-ready applications with React.

I enjoy solving real-world problems through code, optimizing workflows, and designing interfaces that feel intuitive and human.
My curiosity drives me to learn beyond my syllabus — whether it’s experimenting with full-stack workflows, improving UI/UX, or building small projects that challenge my logic and creativity.

My goal is simple:
to build impactful products, contribute to engineering teams that value quality, and keep leveling up my skills every single day.

I believe in writing clean code, understanding systems deeply, and delivering work that speaks for itself.
If a technology excites me, I learn it. If a problem is complex, I break it down.
I learn fast, adapt quickly, and enjoy being pushed out of my comfort zone — that’s where the growth happens.
        </p>
      </section>

      {/* Education */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-3">Education 🎓</h3>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold">B.Tech – Computer Science & Engineering</h4>
          <p className="opacity-60 text-sm">2nd Year • 2023 – 2027</p>
          <p className="opacity-60 text-sm mt-1">College: Your College Name</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Certifications 📜</h3>

        <div className="grid gap-4">
          {certifications.map((item) => (
            <div
              key={item.name}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <h4 className="font-bold">{item.name}</h4>
              <p className="opacity-60 text-sm">{item.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Contact Me 📬</h3>

        <div className="space-y-3">
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              className="text-purple-400 underline"
              href="mailto:yourgmail@gmail.com"
            >
              yourgmail@gmail.com
            </a>
          </p>

          <p>
            <span className="font-bold">GitHub:</span>{" "}
            <a
              className="text-purple-400 underline"
              href="https://github.com/pavithraasaithambi105-lab"
              target="_blank"
            >
              github.com/yourgithub
            </a>
          </p>

          <p>
            <span className="font-bold">LinkedIn:</span>{" "}
            <a
              className="text-purple-400 underline"
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
            >
              linkedin.com/in/yourlinkedin
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mkgynlal"
          method="POST"
          className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          ></textarea>

          <button className="bg-purple-600 px-4 py-2 rounded w-full">
            Send Message
          </button>
        </form>

        {/* Resume Button (FIXED) */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 mt-4 inline-block text-center"
        >
          Download Resume
        </a>

        {/* Footer */}
        <footer className="text-center mt-12 opacity-50 text-sm">
          Portfolio • Built with React + Vite ⚡
        </footer>
      </section>
    </div>
  );
}

export default App;
