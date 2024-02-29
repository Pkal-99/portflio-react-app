import React,{ useState } from 'react'
import Logo from '../assetes/logo1.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image1" style={{width:'50px'}} />
        
      </div>
      {/* desktop menu  under 768px screen size hide menu and convert to mobile mode if it is morethan 768px desktop size md :flex is 768*/}
      
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      
      {/* hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        <FaBars />
      </div>
      {/* Mobile menu*/}
      <ul className={!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4x'>Home</li>
            <li className='py-6 text-4x'>About</li>
            <li className='py-6 text-4x'>Skills</li>
            <li className='py-6 text-4x'>Projects</li>
            <li className='py-6 text-4x'>Contact</li>
        </ul>
      {/* social Icons*/}
      <div></div>
    </div>
  )
}

export default Navbar



