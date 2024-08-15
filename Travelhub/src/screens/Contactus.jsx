import React, { useEffect } from 'react';
import Navbar from './contact/Nav';
import MainBodyForm from './contact/mainbodyform';
import Footer from './contact/footer';

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='fade-in flex flex-col w-full font-Poppins relative'>
      <Navbar title={"Travelastic"} Profile={"block"}/>
      <div className='bg-white flex flex-col justify-start items-center font-Poppins px-4 md:px-8 lg:px-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl py-4 my-4 font-bold'>
          Contact us
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <MainBodyForm />
      <Footer Title={"Travelastic"} />
    </div>
  );
};

export default Contactus;
