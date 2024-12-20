import React from 'react'
import ButtonPrimary from '../buttons/buttonPrimary'

function BookList(params) {
  return (
    <div className="container px-16 py-8 grid grid-cols-4 gap-5">
      {params.data.map((book, index) => {
        return (
        <div className="rounded-lg px-5 py-3 shadow-lg flex flex-row gap-5 cursor-pointer relative hover:shadow-2xl">
          <img src={`./images/dummy_data/book_${index+1}.jpg`} alt="" className='w-32 h-44 rounded-lg'/>
          <div className="py-2">
            <h1 className='text-lg from-neutral-900 capitalize'>{book.name}</h1>
            <p className="text-md font-extralight"> by {book.author}</p>
            <p className="text-md text-blueThree">$ {book.price}</p>
            <div className="absolute bottom-3">
            <ButtonPrimary text="View Details" />
            </div>
          </div>
        </div> )
      })}
    </div>
  )
}

export default BookList