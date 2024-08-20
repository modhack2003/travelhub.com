import React from 'react';
import GetInTouch from './GetInTouch'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1B1C22] text-white py-8 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 font-Poppins">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl text-center md:text-left">Travelastic</h1>
        <div className="flex flex-wrap justify-between items-start gap-8 mt-8">
          <div className="w-full md:w-[30%] flex-grow">
            <p className="text-3xl sm:text-4xl md:text-6xl mt-2 leading-tight text-center md:text-left">
              Spectacular<br />Tour Service
            </p>
          </div>
          <div className="w-full md:w-[20%] flex-grow">
            <h2 className="text-lg sm:text-xl font-semibold">Feature</h2>
            <ul className="mt-4 space-y-2">
              <li><Link to= "/AboutUs">About</Link></li>
              <li>Catalog</li>
              <li><Link to="/Blog" >Blog</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-[20%] flex-grow">
            <h2 className="text-lg sm:text-xl font-semibold">Best Location</h2>
            <ul className="mt-4 space-y-2">
              <li>India</li>
              <li>Bali</li>
              <li>Australia</li>
              <li>Nepal</li>
            </ul>
          </div>
          <GetInTouch />
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 pt-4 text-center w-full">
        <p>© 2023 Travelastic, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
