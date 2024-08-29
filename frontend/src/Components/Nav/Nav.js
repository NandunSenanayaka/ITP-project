import React from 'react'
import './Nav.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav-container'>
        <ul className='home-ul'>
            <li className='home-li'>
                <Link to="/mainhome" className='active home-a'>
                <h1>Home</h1></Link>
            </li>
            <li className='home-li'>
            <Link to="/addappoinment" className='active home-a'>
                <h1>Appoinment Shecdule</h1></Link>
            </li>
            <li className='home-li'>
                <h1>Find app</h1>
            </li>

        </ul>
    </div>
  )
}

export default Nav