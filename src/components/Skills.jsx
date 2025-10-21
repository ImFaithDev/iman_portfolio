import React from "react";
import { easeIn, motion } from "framer-motion";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { HiPuzzle } from "react-icons/hi";
import { SiFigma } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", Icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", Icon: FaJs, color: "text-yellow-500" },
    { name: "React", Icon: FaReact, color: "text-sky-500" },
    { name: "GitHub", Icon: FaGithub, color: "text-gray-800" },
    { name: "Figma", Icon: SiFigma, color: "text-pink-500" },
    { name: "Responsive Design", Icon: MdDevices, color: "text-emerald-500" },
    { name: "Problem Solving", Icon: HiPuzzle, color: "text-indigo-500" },
  ];
  return (
    <section className="py-16 bg-gray-50 shadow-inner" id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-10 relative inline-block">
            My Skills
            <span className="absolute left-0  -bottom-3 w-full h-1 bg-gradient-to-r  from-blue-500 to-blue-300 rounded"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center transform transition hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              <div
                className={`p-4 rounded-xl bg-gradient-to-br from-white/60 to-gray-100 mb-3 inline-flex items-center justify-center ${color} group-hover:scale-110 transform transition`}
                aria-hidden="true"
              >
                <Icon className="w-10 h-10" />
              </div>

              <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

{
  /* <section
      id='skills'
      className='h-screen flex flex-col justify-center items-center py-20 px-6 max-w-5xl mx-auto'
    >
      <h2 className='text-3xl font-bold text-center mb-12'>Skills</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
        {[
          'HTML5',
          'CSS3',
          'JavaScript',
          'React',
          'Figma',
          'GitHub',
          'Responsive Design',
          'Problem Solving',
        ].map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className=' bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-x hover:scale-105 overflow-hidden cursor-pointer'
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section> */
}
