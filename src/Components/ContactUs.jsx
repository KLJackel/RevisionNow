import React from 'react'
import './ContactUs.css'
import { FaXmark } from "react-icons/fa6";

function ContactUs( {handleCloseContactUs} ) {
  return (
    <div className="contact-us">
        <button className="close-btn" onClick={handleCloseContactUs}><FaXmark /></button>
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, please reach out to us at:</p>
        <ul>
            <li>Email: <a href="mailto:alex.taylor@revisionnow.co.uk">alex.taylor@revisionnow.co.uk</a></li>
        </ul>
    </div>
  )
}

export default ContactUs