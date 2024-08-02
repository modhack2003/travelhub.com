import React from 'react';
import GetInTouch from './GetInTouch'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1B1C22] text-white py-4 px-6 Poppins">
      <h1 className="text-2xl ml-12 ">Travelhub.com</h1>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-auto flex-grow mb-8 md:mb-0">
          <p className="text-6xl mt-2">spectacular<br />Tour Service</p>
        </div>
        <div className="w-full md:w-auto flex-grow mb-8 md:mb-0">
          <h2 className="text-xl font-semibold">Feature</h2>
          <ul className="mt-4 space-y-2">
            <li>About</li>
            <li>Catalog</li>
            <li>Blog</li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-auto flex-grow mb-8 md:mb-0">
          <h2 className="text-xl font-semibold">Best location</h2>
          <ul className="mt-4 space-y-2">
            <li>India</li>
            <li>Bali</li>
            <li>Australia</li>
            <li>Nepal</li>
          </ul>
        </div>
        <GetInTouch />
      </div>
      <div className="border-t border-gray-300 mt-8 pt-4 text-center w-ful">
        <p>© 2023 Travelhub, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
