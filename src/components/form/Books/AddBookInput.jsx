import React from 'react'

export default function AddBookInput({title, handler, type='text'}) {
  return (
    <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
      <label name="book name " className='text-lg font-medium text-black-600 w-56'>{title} : </label>
      <input type={type}
        name='type your book name ' className='h-10 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pl-5 shadow-sm outline-none' onChange={(event) => {handler(event.target.value)}} />
    </div>
  )
}
