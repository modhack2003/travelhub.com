import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../../constants/Navitem';
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ title, Profile, bg }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navItems = [
        {text:"Home", path:'/'},
        { text: 'Blog', path: '/Blog' },
        { text: 'Careers', path: '/Careers' },
        { text: 'About', path: '/AboutUs' },
        { text: 'Contact', path: '/contact' },    
        
      ];
    const getTextColor = (bg) => {
        if (bg === 'bg-black') {
            return 'text-white';
        } else if (bg === 'bg-white' || bg === '') {
            return 'text-black';
        }
        return 'text-black';
    };

    return (
        <>
            <header
                className={`w-full ${bg} flex flex-col md:flex-row justify-between items-center  md:px-48
                 px-6 py-6 font-Poppins relative z-10`}
            >
                <div className="w-full flex justify-between items-center">
                    <h1 className={`text-2xl font-medium ${getTextColor(bg)}`}>{title}</h1>
                    <button
                        className={`md:hidden text-2xl ${getTextColor(bg)}`}
                        onClick={toggleMenu}
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
                <nav
                    className={` ${bg} flex-col md:flex-row gap-5 justify-between md:m-0 pl-8 md:pb-0 pb-4  leading-4 ${getTextColor(bg)}  ${
                        isOpen ? 'flex' : 'hidden'
                    } md:flex w-full md:w-auto absolute md:relative top-full md:top-auto left-0 md:left-auto  md:bg-transparent `}
                >
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.path}>
                            <NavItem text={item.text} />
                        </Link>
                    ))}
                    <h1 className={`text-2xl md:${Profile} hidden`}>
                        <CgProfile />
                    </h1>
                </nav>
            </header>
            {isOpen && <div className="mt-72 "></div>}
        </>
    );
};

export default Navbar;