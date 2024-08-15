import { useEffect } from 'react';

import Body from './About/body'
import Nav from './contact/Nav'

import Footer from './contact/footer'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
    <div className='font-Poppins fade-in'>
    <Nav title={"Travelastic"}/>
    <Body/>
    <Footer/>
    </div>
  );
};

export default AboutUs;
