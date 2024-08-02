import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavItem from '../constants/Navitem';
import BookTourButton from '../constants/BookTourButton';

const navItems = [
  { text: 'About', path: '/About' },
  { text: 'Contact', path: '/contact' },
  { text: 'Blog', path: '/Blog' },
  { text: 'Careers', path: '/Careers' }
];

function Navbar() {
  return (
    <header className="w-[97%] bg-transparent absolute flex gap-5 justify-between px-6 mx-4 py-6 max-md:flex-wrap max-md:px-5 font-Poppins">
      <h1 className="my-auto text-2xl font-medium text-white">
        Travelhub.com
      </h1>
      <nav className="flex gap-50 justify-between items-center text-center leading-4 text-white max-md:flex-wrap max-md:max-w-full w-[40%]">
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
