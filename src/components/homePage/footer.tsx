// src/components/Newsletter.tsx

import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 py-12">
      <div className="container mx-auto flex flex-col items-center px-6 md:flex-row md:justify-between md:space-x-10">
        <div className="mb-8 flex-1 md:mb-0 md:w-1/2">
        </div>

        {/* Subscription Form */}
        <div className="flex-1 text-center md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">No te pierdas ni una</h2>
          <p className="mb-6 text-gray-600">
            Apúntate a la newsletter para estar al tanto de todas las noticias, ventajas y descuentos de Vineo
          </p>
          <form className="flex flex-col items-center md:flex-row md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring md:mb-0 md:mr-4 md:w-auto"
            />
            <button
              type="submit"
              className="rounded-lg bg-red-400 px-6 py-2 text-white shadow transition duration-300 hover:bg-red-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-gray-300 py-6 text-center text-sm text-gray-500">
        <div className="mb-4 flex justify-center space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-800">Terms Of Use</a>
          <a href="/" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          <a href="/" className="text-gray-600 hover:text-gray-800">Support</a>
        </div>
        <div className="mb-4 flex justify-center space-x-4">
          <a href="/" aria-label="Instagram">
            <AiFillInstagram />
          </a>
          <a href="/" aria-label="Facebook">
            <AiFillFacebook />
          </a>
          <a href="/" aria-label="Twitter">
            <AiFillTwitterCircle />
          </a>
        </div>
        <p>Copyright © 2023 Vineo. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
