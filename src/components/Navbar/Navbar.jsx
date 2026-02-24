import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'





const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Reviews</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar
