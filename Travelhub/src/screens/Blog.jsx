import {useEffect} from 'react';
import Body from './blog/body';
import Footer from './contact/footer';
import Navbar from './contact/Nav';


const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
   <div className=' font-Poppins fade-in'>
   <Navbar title={"Travelastic"} bg={"bg-black"} />
   <Body/>
   <Footer title={"Travelastic"}/>
   </div>
  );
};

export default Blog;
