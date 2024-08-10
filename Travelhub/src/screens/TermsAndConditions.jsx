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
  <Navbar title={"Travelhub"}/>
  <Body/>
  <Footer title={"travelhub"}/> 
  
  </div>
  );
};

export default TermsAndConditions;
