import React, { useState } from 'react';
import { easeIn, motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'Personal portfolio built with React & TailwindCSS.',
      image: 'https://picsum.photos/id/1011/600/400',
      link: '#',
    },
    {
      title: 'Landing Page',
      desc: 'E-commerce landing page prototype with responsive design.',
      image: 'https://picsum.photos/id/1022/600/400',
      link: '#',
    },
    {
      title: 'Mini Dashboard',
      desc: 'Simple admin panel built with React Hooks & Context API.',
      image: 'https://picsum.photos/id/1033/600/400',
      link: '#',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  // animation for each card
  const item = {
    hidden: { opacity: 0, y: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section id='projects' className='py-16 px-6 shadow-inner bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-serif text-gray-700  mb-10 relative inline-block'>
            My Projects
            <span className='absolute left-0 -bottom-3 w-full h-1 bg-gradient-to-r  from-blue-500 to-blue-300 rounded'></span>
          </h2>
        </div>

        <motion.div
          className='grid md:grid-cols-3 gap-8'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className='group  bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition transform cursor-pointer'
            >
              <div className='h-40 overflow-hidden'>
                <img
                  src={p.image}
                  alt={p.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
                  loading='lazy'
                />
              </div>
              <div className='p-6 flex flex-col justify-between h-48'>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    {p.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>{p.desc}</p>
                </div>
                <a
                  href={p.link}
                  className='mt-4 inline-block text-blue-600 font-medium hover:underline'
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
