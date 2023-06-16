import React from 'react'
import Logo from '../assests/logo1.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo Image' style={{width: '50px'}}/>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Certificates</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div className='md:hidden'>
            <FaBars/>
        </div>

        {/* Mobile menu */}
        <div>
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f]'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Certificates</li>
            <li>Contact</li>
        </ul>
        </div>

        {/* Social icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar
