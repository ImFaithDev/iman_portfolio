import React from 'react';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md bg-white/60 backdrop-blur-md shadow-md'
      }`}
    >
      <ul className='flex justify-center space-x-6 py-4'>
        {sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={sec.path}
              className='text-gray-600 hover:text-blue-600 transition'
            >
              {sec.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

// useEffect(() => {
//   const referenceLine = window.innerHeight / 2; // نصف صفحه، میتونی عدد ثابت بذاری مثلا 150

//   const handleScroll = () => {
//     sections.forEach((sec) => {
//       const el = document.getElementById(sec.id);
//       if (el) {
//         const rect = el.getBoundingClientRect();

//         if (rect.top <= referenceLine && rect.bottom >= referenceLine) {
//           setActiveSection(sec.id);
//         }
//       }
//     });
//   };

//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

//  <ul className='flex justify-center space-x-6 py-4'>
//         {sections.map((sec) => (
//           <li key={sec.id}>
//             <button
//               onClick={() => {
//                 document.getElementById(sec.id).scrollIntoView({
//                   behavior: 'smooth',
//                 });
//                 setActiveSection(sec.id);
//               }}
//               className={`${
//                 activeSection === sec.id
//                   ? 'text-blue-600 font-semibold'
//                   : 'text-gray-600'
//               } hover:text-blue-600 transition`}
//             >
//               {sec.label}
//             </button>
//           </li>
//         ))}
//       </ul>
