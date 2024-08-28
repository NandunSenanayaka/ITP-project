import React from 'react'
import './Nav.css'; // Import the CSS file

function Nav() {
  return (
    <div className='nav-container'>
        <ul className='home-ul'>
            <li className='home-li'>
                <h1>Home</h1>
            </li>
            <li className='home-li'>
                <h1>Appoinment Shecdule</h1>
            </li>
            <li className='home-li'>
                <h1>Find app</h1>
            </li>

        </ul>
    </div>
  )
}

export default Nav