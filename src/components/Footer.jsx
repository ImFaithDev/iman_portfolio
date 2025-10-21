import React from 'react';

function Footer() {
  return (
    <footer
      id='footer'
      className='text-center w-ful mx-auto py-6 bg-gray-100 shadow-inner text-gray-500 text-sm'
    >
      © {new Date().getFullYear()} Iman Barghi. All rights reserved.
    </footer>
  );
}

export default Footer;
