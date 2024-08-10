import {useEffect} from 'react';
import Navbar from './contact/Nav';
import Body from './privacy/body';
import Footer from './contact/footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
    <div className='fade-in'>
      <Navbar title={"Travelhub"}/>
    <Body/>
    <Footer title={"Travelhub"}/>
    </div >
  
  );
};

export default PrivacyPolicy;
