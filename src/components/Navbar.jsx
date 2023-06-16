import React, {useState} from 'react';
import Logo from '../assests/logo1.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo
            ' style={{width: '50px'}}/>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li><Link to="home" spy={true} smooth={true}  duration={500}>Home</Link></li>
                <li> <Link to="about" spy={true} smooth={true}  duration={500}>About</Link></li>
                <li> <Link to="skills" spy={true} smooth={true}  duration={500}>Skills</Link></li>
                <li> <Link to="projects" spy={true} smooth={true}  duration={500}>Projects</Link></li>
                <li> <Link to="certificates" spy={true} smooth={true}  duration={500}>Certificates</Link></li>
                <li> <Link to="contact" spy={true} smooth={true}  duration={500}>Contact</Link></li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
         <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Certificates</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'><a href='https://www.linkedin.com/in/oluwadurotimi-fagbuyi-08a941142/' className='flex justify-between items-center w-full text-gray-300 font-bold'>LinkedIn <FaLinkedin size={30}/></a></li>
        <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'><a href='https://github.com/durotimicodes' className='flex justify-between items-center w-full text-gray-300 font-bold'>Github <FaGithub size={30}/></a></li>
        <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EF2632]'><a href='/Contact' className='flex justify-between items-center w-full text-gray-300 font-bold'>Email <HiOutlineMail size={30}/></a></li>
        <li className='w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EEBC1D]'><a href='/assests/documents/Edmond_Fagbuyi_Resume.pdf' className='flex justify-between items-center w-full text-gray-300 font-bold'>Resume <BsFillPersonLinesFill size={30}/></a></li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar
