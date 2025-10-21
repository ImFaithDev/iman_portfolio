import React from 'react';

function Contact() {
  return (
    <section
      className='bg-gray-50 max-w-screen-lg mx-auto py-16 mt-5'
      id='contact'
    >
      <div className='max-w-xl mx-auto px-6'>
        <div className='text-center'>
        <h2 className='text-3xl md:text-4xl font-serif text-gray-700 mb-10'>
          Contact Me
        </h2>
        </div>
        <form className='bg-white shadow-md rounded-lg p-8 space-y-6'>
          <div class='relative'>
            <input
              type='text'
              id='name'
              class='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
            />
            <label
              for='floating_outlined'
              htmlFor='email'
              class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-2.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-2.5   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
            >
              Name
            </label>
          </div>

          <div class='relative'>
            <input
              type='email'
              id='email'
              class='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
            />
            <label
              for='floating_outlined'
              htmlFor='email'
              class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-2.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-2.5   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
            >
              Email
            </label>
          </div>

          <div class='relative'>
            <textarea
              type='message'
              id='message'
              class='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              row='5'
            ></textarea>

            <label
              for='floating_outlined'
              htmlFor='message'
              class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-2.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-2.5   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
            >
              Message
            </label>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
