import React from 'react';
import NavItem from '../constants/Navitem';
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Contactus = () => {
    const navItems = ['Home','Blog', 'Careers','About', 'Contact', ];
  return (
  <div className='flex flex-col h-[120vh] w-full font-Poppins'>
    <header className="w-[97%] bg-transparent   flex gap-5 justify-between px-6 mx-4 py-6 max-md:flex-wrap max-md:px-5 font-Poppins ">
      <h1 className="my-auto text-2xl font-medium text-black">
        Travel hub
      </h1>
      <nav className="flex gap-50 justify-between items-center text-center leading-4 text-black max-md:flex-wrap max-md:max-w-full w-[40%] ">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}   
       <h1 className='text-2xl'><CgProfile /></h1>
      </nav>
    </header>
    <div className='  bg-white flex flex-col justify-start items-center  font-Poppins '>
    <h1 className='text-4xl py-4 my-4 font-bold '>
        Contact us
    </h1>
    <p className="text-lg text-gray-600">
    Any question or remarks? Just write us a message!
    </p>
    </div>
    <div className='bg-gray-200 h-[80vh] mx-28 mt-8 rounded-lg flex flex-row '>

      <div className='h-[98%] m-[5px] w-[35vw] bg-black rounded-lg rounded-br-none '>
          <div className=" text-white flex flex-col justify-center  text-start pt-6  pl-8 ">
          <h1 className='text-2xl  font-semibold mb-2 '>Contact Information</h1>
          <p className='text-sm text-gray-300'>
          Say something to start a live chat!
          </p>
          </div>
        <div className='flex flex-col items-start space-y-10 text-sm text-white mt-24 ml-8'>
         <p className="flex"><FaPhoneVolume className='mr-6 text-lg'/>+1012 3456 789</p>
         <p className="flex"><MdEmail className='mr-6 text-lg'/>travelhub@gmail.com</p>
         <p className="flex"><CgProfile className='mr-6 text-lg' />Chat Support</p>
        </div>
        <div className='mt-40  h-8 w-auto flex flex-row justify-start text-white space-x-5 ml-8'>
          <p className="rounded-full w-8 flex justify-center items-center "><FaTwitter /></p>
          <p className="rounded-full w-8 flex justify-center items-center bg-white text-black p-0"><FaInstagram/></p>
          <p className="rounded-full w-8 flex justify-center items-center  "><FaDiscord /></p>

        </div>
      </div>
      <div>

      </div>



    </div>

    </div>

)}
export default Contactus;