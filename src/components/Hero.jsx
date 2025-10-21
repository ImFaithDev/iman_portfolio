import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';



function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
    >
      {/*Main Content*/}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight  mb-6"
        >
          Hi, I’m <span className="text-blue-600">Iman Barghi</span>
        </motion.h1>

        {/* Typing text*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-blue-600 font-semibold mb-6"
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-lg text-gray-600 mb-8 leading-relaxed "
        >
          Building modern, responsive, and interactive web apps<br />with clean code
          and beautiful design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="flex  justify-center"
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-blue-400/50 transition transform"
          >
            View My Projects
          </a>
        </motion.div>
      </div>

      {/* Moving arrow down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-5  transform -translate-x-1/2 text-blue-600 animate-bounce"
      >
        <FaArrowDown size={28} />
      </motion.div>
    </section>
  );
}

export default Hero;