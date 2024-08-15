import {useEffect} from 'react';
import Navbar from './contact/Nav';
import Body from './T&C/body';
import Footer from './contact/footer';


const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
  <div className='fade-in'>
  <Navbar title={"Travelastic"}/>
  <Body/>
  <Footer title={"Travelastic"}/> 
  
  </div>
  );
};

export default TermsAndConditions;
