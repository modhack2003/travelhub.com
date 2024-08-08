import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../constants/Navitem';
import BookTourButton from '../constants/BookTourButton';
import { HiMenuAlt3 } from "react-icons/hi";

const navItems = [
  { text: 'About', path: '/About' },
  { text: 'Contact', path: '/contact' },
  { text: 'Blog', path: '/Blog' },
  { text: 'Careers', path: '/Careers' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`w-full bg-transparent absolute flex flex-col md:flex-row justify-between items-center px-6 py-6 max-md:px-5 font-Poppins z-50 `}> {/* Set z-50 to ensure the header is on top */}
      <div className="flex justify-between items-center md:space-x-0 space-x-28">
        <h1 className="text-2xl font-medium text-white">
          Travelhub.com
        </h1>
        <button 
          className="md:hidden text-2xl text-white" 
          onClick={toggleMenu}
        >
          <HiMenuAlt3 />
        </button>
      </div>
      <nav className={` md:pt-0  pt-8 flex-col md:flex-row gap-12 justify-between md:text-center md:items-center text-white ${isOpen ? 'flex  backdrop-filter backdrop-blur-lg bg-opacity-10  bg-white-0' : 'hidden'} md:flex w-full md:w-auto absolute md:relative top-full md:top-auto left-0 md:left-auto   md:bg-transparent z-50  `}> 
        {navItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <NavItem text={item.text} />
          </Link>
        ))}
        <BookTourButton />
      </nav>
    </header>
  );
}

export default Navbar;
