import React from 'react';
import GetInTouch from './GetInTouch'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1B1C22] text-white py-8 md:px-32 px-10  font-Poppins">
      <h1 className="text-2xl ">Travelhub.com</h1>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-start gap-8 mt-8">
        <div className="w-full md:w-auto flex-grow">
          <p className="text-4xl md:text-6xl mt-2 leading-tight">
            Spectacular<br />Tour Service
          </p>
        </div>
        <div className="w-full md:w-auto flex-grow">
          <h2 className="text-xl font-semibold">Feature</h2>
          <ul className="mt-4 space-y-2">
            <li><Link to= "/AboutUs">About</Link></li>
            <li>Catalog</li>
            <li><Link to="/Blog" >Blog</Link> </li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-auto flex-grow">
          <h2 className="text-xl font-semibold">Best Location</h2>
          <ul className="mt-4 space-y-2">
            <li>India</li>
            <li>Bali</li>
            <li>Australia</li>
            <li>Nepal</li>
          </ul>
        </div>
        <GetInTouch />
      </div>
      <div className="border-t border-gray-300 mt-8 pt-4 text-center w-full">
        <p>© 2023 Travelhub, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
