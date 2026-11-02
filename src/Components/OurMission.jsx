import React from 'react'
import "./OurMission.css"
import { FaXmark } from "react-icons/fa6";

function OurMission( {handleCloseMission} ) {

    /* Need to put a cross in the corner to close the box*/
  return (
    <div className="ourMission">
        <div className="container">
            <button className="close-btn" onClick={handleCloseMission}><FaXmark /></button>
            <h3 className="om-header">Welcome to Revision Now</h3>
            <p className="om-description">Our goal is to make revision accessible and easy for everyone. We want to simplify revision and have the resources all in one place to take away some of that stress of revising.</p>
        </div>
    </div>
  )
}

export default OurMission