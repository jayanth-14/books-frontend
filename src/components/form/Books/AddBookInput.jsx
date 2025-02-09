import React from 'react'

export default function AddBookInput({title, handler, type='text', placehoder, className}) {
  return (
    <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
      <label name="book name " className="text-lg font-medium text-black-600 w-56 after:content-['*'] after:text-red-500">{title} : </label>
      <input type={type} required
        placeholder={placehoder} className='h-10 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pl-5 shadow-sm outline-none w-fu' onChange={(event) => {handler(event.target.value)}} />
    </div>
  )
}
