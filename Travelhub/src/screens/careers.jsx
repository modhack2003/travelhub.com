import React ,{useEffect}from 'react'

import Navbar from './contact/Nav'
import JoinUs from './careers/joinUs'
import Benefits from './careers/benefitsData'
import JobListings from './careers/JobListings'
import Footer from "./contact/footer"

const careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
   <div className='fade-in'>
<Navbar title={""} Profile={"hidden"}/>

<JoinUs/>  
<Benefits/>
<JobListings/>
<Footer title={""}/>
   
   </div>
  )
}
export default careers;