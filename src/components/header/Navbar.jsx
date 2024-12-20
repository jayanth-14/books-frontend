import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';

function Categories() {
  return(
    <div className="px-3 py-2 flex flex-row items-center gap-2 cursor-pointer">
      <p className="text-lg">Categories</p>
      <FaBars />
    </div>
  );
}

function SearchBar() {
  return(
    <div className="px-3 py-2 flex flex-row gap-2 items-center">
      <FaSearch />
      <input type="text" className='bg-transparent border-b-2 border-black outline-none' />
    </div>
  )
}

function Navbar() {
  return (
    <nav className='container flex flex-row justify-between items-center  w-full bg-blueTwo px-2 py-3'>
      <Categories />
      <ul className='flex flex-row items-center justify-center gap-8'>
        <li className='text-lg cursor-pointer hover:text-white '>Home</li>
        <li className='text-lg cursor-pointer hover:text-white '>About</li>
        <li className='text-lg cursor-pointer hover:text-white '>Contact</li>
        <li className='text-lg cursor-pointer hover:text-white '>Services</li>
      </ul>
      <SearchBar />
    </nav>
  )
}

export default Navbar