import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from "../assets/myPhoto.jpg"



function About() {
  return (
    <section id='about' className='bg-blue-50 py-20'>
      <div className='max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-2 items-center'>
        {/* تصویر پروفایل */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex justify-center'
        >
          <img
            src={myPhoto}
            alt='About me'
            className='rounded-2xl shadow-xl border-4 border-blue-600 object-cover w-80 h-80'
          />
        </motion.div>

        {/* متن */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-serif text-gray-700  mb-10'>About Me</h2>
          <p className='text-gray-700 leading-loose mb-6'>
            Hi! I’m Iman, a passionate Front-End Developer with a love for
            creating modern, responsive, and user-friendly websites. My focus is
            on clean code, stunning design, and smooth user experience.
          </p>
          <p className='text-gray-700 leading-relaxed mb-8'>
            When I’m not coding, I enjoy exploring new technologies, designing
            UI/UX concepts, and contributing to open-source projects.
          </p>
        
        </motion.div>
      </div>
    </section>
  );
}
export default About;
