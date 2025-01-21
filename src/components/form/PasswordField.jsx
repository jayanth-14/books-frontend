import React, { useRef } from 'react'
import { FaEye } from 'react-icons/fa'

function PasswordField(params) {
  const field=useRef(null) 
  function displaypassword(){
    if(field.current.type ==="password"){
      field.current.type= "text"
      return 
    }
    field.current.type="password"
  }
  return (
    <div className="passwordField">
      <label className='flex flex-col gap-1'> {params.title} :
        <div className='rounded bg-gray-200 w-full h-8 px-2 flex flex-row justify-between items-center'>
          <input type="password" placeholder={`${params.title}`} className='outline-none bg-transparent w-full' minlength="6" onChange={(event) => params.onChange(event.target.value)} required ref={field}/>
          <FaEye onClick={displaypassword} className='cursor-pointer' />
        </div>
      </label>
    </div>
  )
}

export default PasswordField