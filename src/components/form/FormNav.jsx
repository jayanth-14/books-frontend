import React from 'react'
import { NavLink } from 'react-router'

function FormNav() {
  return (
    <div className="navLink w-full flex flex-row gap-0 justify-between rounded-lg border-2 border-blueThree">
      <NavLink to={"/login"} className={({ isActive }) => (isActive ? 'bg-blueThree rounded-md w-full px-8 py-4 text-white font-bold' : 'font-semibold w-full px-8 py-4')}>Login</NavLink>
      <NavLink to={"/signin"} className={({ isActive }) => (isActive ? 'bg-blueThree rounded-md w-full px-8 py-4 font-bold text-white' : ' font-semibold w-full px-8 py-4')}>Register</NavLink>
    </div>
  )
}

export default FormNav