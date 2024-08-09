import React from 'react';
import Body from './blog/body';
import Footer from './contact/footer';
import Navbar from './contact/Nav';


const Blog = () => {
  return (
   <>
   <Navbar title={"TravelHub"} bg={"bg-black"} />
   <Body/>
   <Footer title={"TravelHub"}/>
   </>
  );
};

export default Blog;
