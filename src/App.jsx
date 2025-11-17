import React from "react";
import avatar from "./assets/avatar.jpg";

function App() {
  const certifications = [
    { name: "Coursera - Build a free website with WordPress", year: "2024" },
    { name: "Mathworkd - MATLAB Onramp", year: "2024" },
    { name: "Microsoft - Describe the concepts of cybersecurity", year: "2024" },
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
          I’m a passionate Computer Science student with strong interest in
          frontend development, UI/UX, and building modern web experiences.
          I enjoy learning new technologies and working on real-world projects
          that help me grow as a developer.
        </p>
      </section>

      {/* Education */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-3">Education 🎓</h3>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h4 className="font-bold">B.E – Computer Science & Engineering</h4>
          <p className="opacity-60 text-sm">2nd Year • 2024 – 2028</p>
          <p className="opacity-60 text-sm mt-1">
            College: K.S.R COLLEGE OF ENGINEERING, TIRUCHENGODE.
          </p>
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
              href="mailto:pavithraasaithambi105@gmail.com"
            >
              pavithraasaithambi105@gmail.com
            </a>
          </p>

          <p>
            <span className="font-bold">GitHub:</span>{" "}
            <a
              className="text-purple-400 underline"
              href="https://github.com/yourgithub"
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
          action="https://formspree.io/f/xqawoyng" method="POST">
          method="POST"
          className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-3"
        
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

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-purple-700 px-4 py-2 rounded"
        >
          Download Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 opacity-50 text-sm">
        Portfolio • Built with React + Vite ⚡
      </footer>
    </div>
  );
}

export default App;
