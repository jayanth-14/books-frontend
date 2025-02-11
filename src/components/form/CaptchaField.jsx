import React from 'react'

function CaptchaField(params) {
  return (
    <div className="CaptchaField">
      <label className='flex flex-col gap-1'> {params.title} : 
      <input type={params.type} placeholder={`Enter ${params.title}`} required className='rounded bg-gray-200 w-full h-8 px-2 outline-none' onChange={(event) => params.onChange(event.target.value)}/>
      </label>
    </div>
  )
}

export default CaptchaField