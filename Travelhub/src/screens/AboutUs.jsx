import React from 'react';
import Body from './About/body'
import Nav from './contact/Nav'

import Footer from './contact/footer'

const AboutUs = () => {
  return (
    <div className='font-Poppins'>
    <Nav title={"TravelHub"}/>
    <Body/>
    <Footer/>
    </div>
  );
};

export default AboutUs;
