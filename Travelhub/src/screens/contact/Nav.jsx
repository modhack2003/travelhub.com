import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import NavItem from '../../constants/Navitem';
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({title,Profile}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navItems = [
        {text:"Home", path:'/'},
        { text: 'Blog', path: '/Blog' },
        { text: 'Careers', path: '/Careers' },
        { text: 'About', path: '/About' },
        { text: 'Contact', path: '/contact' },    
        
      ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header className="w-full bg-white  flex flex-col md:flex-row justify-between items-center px-6 py-6 font-Poppins relative z-10">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-medium text-black">
                    {title}
                </h1>
                <button 
                    className="md:hidden text-2xl" 
                    onClick={toggleMenu}
                >
                   <HiMenuAlt3 />
                </button>
            </div>
            <nav className={`flex-col md:flex-row gap-5 justify-between  md:m-0 ml-8  leading-4 text-black ${isOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto absolute md:relative top-full md:top-auto left-0 md:left-auto bg-white md:bg-transparent `}>
                {navItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                    <NavItem text={item.text} />
                  </Link>
                ))}
                <h1 className={`text-2xl md:${Profile} hidden`}><CgProfile /></h1>
            </nav>
           
        </header>
        {isOpen && <div className="mt-80 "></div>} 
        </>
    );
};

export default Navbar;
