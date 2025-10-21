import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <ul className="flex justify-center space-x-6 py-4">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button
                onClick={() => {
                  document.getElementById(sec.id).scrollIntoView({
                    behavior: "smooth",
                  });
                  setActiveSection(sec.id);
                }}
                className={`$${
                  activeSection === sec.id ? "text-blue-600 font-semibold" : "text-gray-600"
                } hover:text-blue-600 transition`}
              >
                {sec.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I’m [Your Name]
        </motion.h1>
        <p className="text-xl text-gray-700 mb-6">
          Front-End Developer | React Enthusiast | UI/UX Learner
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          I’m a passionate front-end developer with experience in building responsive and
          user-friendly web applications. I love combining creativity with functionality to
          create digital experiences that are both visually appealing and effective.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Portfolio Website", desc: "Personal portfolio with React & Tailwind." },
            { title: "Landing Page", desc: "E-commerce landing page prototype." },
            { title: "Mini Dashboard", desc: "Simple admin panel with React Hooks." },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["HTML5", "CSS3", "JavaScript", "React", "Figma", "GitHub", "Responsive Design", "Problem Solving"].map((skill, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-gray-700 mb-6">
          Feel free to reach out if you’d like to collaborate or just have a chat.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">
            Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} [Your Name]. All rights reserved.
      </footer>
    </div>
  );
}
