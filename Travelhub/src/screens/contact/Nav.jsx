import React, { useState } from 'react';
import NavItem from '../../constants/Navitem';
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['Home', 'Blog', 'Careers', 'About', 'Contact'];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-white shadow-md flex justify-between px-6 py-6 font-Poppins">
            <h1 className="my-auto text-2xl font-medium text-black">
                Travel Hub
            </h1>
            <button 
                className="md:hidden text-2xl" 
                onClick={toggleMenu}
            >
               <HiMenuAlt3 />
            </button>
            <nav className={`flex-col md:flex-row gap-5 justify-between items-center text-center leading-4 text-black ${isOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto`}>
                {navItems.map((item, index) => (
                    <NavItem key={index} text={item} />
                ))}
                <h1 className='text-2xl'><CgProfile /></h1>
            </nav>
        </header>
    );
};

export default Navbar;
