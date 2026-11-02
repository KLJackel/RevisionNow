import React from 'react'
import { useState } from 'react'
import './Footer.css'
import OurMission from './OurMission.jsx'
import ContactUs from './ContactUs.jsx'

function Footer( {handleOurMissionClick, handleContactUsClick} ) {



  return (
    <>
     <div className="footer">
        <ul>
            <li><button onClick={handleOurMissionClick} className="footer-btn">Our Mission</button></li>
            <li><button onClick={handleContactUsClick} className="footer-btn">Contact Us</button></li>
        </ul>
     </div>
        
    </>
  )
}

export default Footer