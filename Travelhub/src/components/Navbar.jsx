import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../constants/Navitem';
import BookTourButton from '../constants/BookTourButton';
import { HiMenuAlt3 } from "react-icons/hi";

const navItems = [
  { text: 'About', path: '/AboutUs' },
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
    <header className="w-full bg-transparent absolute flex flex-col md:flex-row justify-between items-center px-9 sm:px-10 md:px-28 lg:px-32 xl:px-40 py-6 font-Poppins z-50">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl font-medium text-white">
          Travelastic
        </h1>
        <button 
          className="md:hidden text-3xl text-white" 
          onClick={toggleMenu}
        >
          <HiMenuAlt3 />
        </button>
      </div>
      <nav className={`flex-col md:flex-row md:items-center text-white ${isOpen ? 'flex' : 'hidden'} md:flex w-full  md:w-auto bg-transparent md:bg-transparent md:relative absolute top-full left-0 md:top-auto z-50 ${isOpen ? 'backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white' : 'bg-transparent'}`}>
        {navItems.map((item, index) => (
          <Link key={index} to={item.path} className="block md:inline-block text-start md:text-left px-4 py-2 md:px-2">
            <NavItem text={item.text} />
          </Link>
        ))}
        <div className="px-4 py-2 md:py-0">
          <BookTourButton />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
