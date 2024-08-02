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
      <Navbar />
      <div className='bg-white flex flex-col justify-start items-center font-Poppins'>
        <h1 className='text-4xl py-4 my-4 font-bold'>
          Contact us
        </h1>
        <p className="text-lg text-gray-600">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <MainBodyForm />
      <Footer />
    </div>
  );
};

export default Contactus;
