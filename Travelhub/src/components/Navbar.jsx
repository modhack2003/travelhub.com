import React from 'react';
import NavItem from '../constants/Navitem';
import BookTourButton from '../constants/BookTourButton';

const navItems = ['About', 'Contact', 'Blog', 'Careers'];

function Navbar() {
  return (
    <header className="w-full bg-transparent fixed flex gap-5 justify-between px-6 mx-4 py-6 max-md:flex-wrap max-md:px-5 font-Poppins ">
      <h1 className="my-auto text-2xl font-medium text-white">
        Travelhub.com
      </h1>
      <nav className="flex gap-50 justify-between items-center text-center leading-4 text-white max-md:flex-wrap max-md:max-w-full w-[40%] ">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}
        <BookTourButton />
       
      </nav>
      
    </header>
  );
}

export default Navbar;