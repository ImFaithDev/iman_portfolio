import React from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Hero from './Hero';
function Home() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
