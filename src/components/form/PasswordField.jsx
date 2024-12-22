import React from 'react'
import { FaEye } from 'react-icons/fa'

function PasswordField(params) {
  return (
    <div className="passwordField">
      <label className='flex flex-col gap-1'> {params.title} : 
        <div className='rounded bg-gray-200 w-full h-8 px-2 flex flex-row justify-between items-center'>
      <input type="password" placeholder={`${params.title}`} className='outline-none bg-transparent w-full'/>
      <FaEye className='cursor-pointer'/>
        </div>
      </label>
    </div>
  )
}

export default PasswordField