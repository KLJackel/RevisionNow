import React from 'react'
import './Header.css'

function Header( {handleGeogClick, handleHistoryClick, handleScienceClick, handleMathsClick} ) {
  return (
    <>
        <div className="navbar">
            <h1>Revision Now</h1>
            <ul className="nav-links">
                <li><button className="nav-button" onClick={handleGeogClick}>Geography</button></li>
                <li><button className="nav-button" onClick={handleHistoryClick}>History</button></li>
                <li><button className="nav-button" onClick={handleScienceClick}>Science</button></li>
                <li><button className="nav-button" onClick={handleMathsClick}>Maths</button></li>
            </ul>
        </div>
    </>

  )
}

export default Header