import React, { useContext } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { Context } from '../../data/states';


function Navbar() {

  return (
    <nav aria-label="Global" className="hidden md:block">
      {/* <Categories /> */}
      <ul className='flex items-center gap-6 text-sm'>
        <li className=' text-gray-500 transition hover:text-gray-500/75 '>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li className=' text-gray-500 transition hover:text-gray-500/75 '>
          <NavLink to="/about" >About us</NavLink>
        </li>
        <li className="text-gray-500 transition hover:text-gray-500/75">
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li className="text-gray-500 transition hover:text-gray-500/75">
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar