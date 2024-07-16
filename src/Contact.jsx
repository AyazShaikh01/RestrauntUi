import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-customPalette-navBG py-20">
      <h1 className="text-center text-white text-5xl font-semibold uppercase mb-10">Contact</h1>

      <div className="flex flex-wrap justify-between max-w-4xl mx-auto px-4">

        {/* Left contact page */}
        <form id="contact-form" className="w-full max-w-md">
          <div className="mb-4">
            <input type="text" className="w-full bg-customPalette-Bg2 text-white border-b-2 border-gray-400 py-2 px-4 placeholder-gray-500 placeholder-opacity-75 focus:outline-none focus:border-blue-500" id="name" placeholder="Name" name="name" required />
          </div>

          <div className="mb-4">
            <input type="email" className="w-full bg-customPalette-Bg2 text-white border-b-2 border-gray-400 py-2 px-4 placeholder-gray-500 placeholder-opacity-75 focus:outline-none focus:border-blue-500" id="email" placeholder="Email" name="email" required />
          </div>

          <textarea className="w-full bg-customPalette-Bg2 text-white border-b-2 border-gray-400 py-2 px-4 placeholder-gray-500 placeholder-opacity-75 focus:outline-none focus:border-blue-500 h-32 resize-none" placeholder="Message" name="message" required></textarea>

          <button type="submit" className="w-full bg-transparent border border-blue-500 text-blue-500 py-2 px-4 mt-4 transition duration-200 hover:bg-blue-500 hover:text-white">
            <div className="flex items-center justify-center">
              <i className="fa fa-paper-plane mr-2"></i><span className="font-bold text-sm">Send</span>
            </div>
          </button>
        </form>

        {/* Right contact page */}
        <div className="max-w-md">
          <ul className="contact-list">
            <li className="mb-4">
              <i className="fa fa-map-marker fa-2x text-white mr-4"></i>
              <span className="text-gray-500">City, State</span>
            </li>
            <li className="mb-4">
              <i className="fa fa-phone fa-2x text-white mr-4"></i>
              <span className="text-gray-500"><a href="tel:1-212-555-5555" className="text-gray-500 hover:text-white" title="Give me a call">(212) 555-2368</a></span>
            </li>
            <li className="mb-4">
              <i className="fa fa-envelope fa-2x text-white mr-4"></i>
              <span className="text-gray-500"><a href="mailto:#" className="text-gray-500 hover:text-white" title="Send me an email">hitmeup@gmail.com</a></span>
            </li>
          </ul>

          <hr className="border-gray-600 my-4" />

          <div className="text-center text-gray-500">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
