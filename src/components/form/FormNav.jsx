import React from 'react';
import { NavLink } from 'react-router-dom';

function FormNav() {
  return (
    <div className="navLink w-full flex flex-row gap-0 justify-between rounded-lg border-2 border-blueThree">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? 'bg-blueThree rounded-md w-full px-8 py-4 text-white font-bold text-center'
            : 'font-semibold w-full px-8 py-4 text-center hover:bg-blueThree/10 transition-colors duration-200'
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/signin"
        className={({ isActive }) =>
          isActive
            ? 'bg-blueThree rounded-md w-full px-8 py-4 font-bold text-white text-center'
            : 'font-semibold w-full px-8 py-4 text-center hover:bg-blueThree/10 transition-colors duration-200'
        }
      >
        Register
      </NavLink>
    </div>
  );
}

export default FormNav;