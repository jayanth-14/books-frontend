import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router';

function Categories() {
  return (
    <div className="px-3 py-2 flex flex-row items-center gap-2 cursor-pointer">
      <p className="text-lg">Categories</p>
      <FaBars />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="px-3 py-2 flex flex-row gap-2 items-center w-80">
      <FaSearch />
      <input type="text" className='bg-transparent border-b-2 border-black outline-none w-full' />
    </div>
  )
}

function Navbar() {
  return (
    <nav className='container flex flex-row justify-between items-center  w-full bg-blueTwo px-20 py-3'>
      {/* <Categories /> */}
      <ul className='flex flex-row items-center justify-center gap-8'>
        <li className='text-lg cursor-pointer hover:text-white '>
          <NavLink to="/" className={({ isActive }) => (isActive && "font-semibold text-white" )}>Home</NavLink>
        </li>
        <li className='text-lg cursor-pointer hover:text-white '>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li className='text-lg cursor-pointer hover:text-white '>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li className='text-lg cursor-pointer hover:text-white '>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className='text-lg cursor-pointer hover:text-white '>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
      <SearchBar />
    </nav>
  )
}

export default Navbar