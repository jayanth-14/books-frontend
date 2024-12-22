import React from 'react'
import { Link } from 'react-router'
import ButtonSecondary from '../buttons/ButtonSecondary'
import ButtonPrimary from '../buttons/buttonPrimary'

function UserButtons() {
  return (
    <div className="flex flex-row gap-0">
      <Link to={"/login"}>
        <ButtonSecondary className='text-blueThree rounded-lg border-3 border-blueThree hover:bg-blueThree hover:text-white'>
          Login
        </ButtonSecondary>
      </Link>
    </div>
  )
}

export default UserButtons