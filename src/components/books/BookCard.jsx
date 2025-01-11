import React from 'react'
import { Link } from "react-router";
import ButtonPrimary from "../buttons/buttonPrimary";

function BookCard({book, index}) {
  return (
    <div
    key={index}
    className="bg-white rounded-lg p-2 sm:p-4 shadow-xl flex flex-col hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="relative pb-[120%] mb-4">
      <img
        src={`./images/dummy_data/book_${index + 1}.jpg`}
        alt={`${book.title}`}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl p-2"
      />
    </div>
    <div className="flex flex-col flex-grow">
      <h1 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-900 capitalize line-clamp-2">{book.title}</h1>
      <p className="text-xs sm:text-sm md:text-base font-normal text-gray-600 mb-1">by {book.author}</p>
      <p className="text-sm sm:text-md md:text-lg font-medium text-blue-500 mb-1">$ {book.price}</p>
      <div className="mt-auto">
        <Link to={`/book/${book._id}`} className="block">
          <ButtonPrimary className="w-full text-xs sm:text-sm md:text-base">View Details</ButtonPrimary>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default BookCard