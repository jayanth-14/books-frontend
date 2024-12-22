import React from 'react'

function InputField(params) {
  return (
    <div className="InputField">
      <label className='flex flex-col gap-1'> {params.title} : 
      <input type="text" placeholder={`Enter your ${params.title}`} className='rounded bg-gray-200 w-full h-8 px-2 outline-none'/>
      </label>
    </div>
  )
}

export default InputField