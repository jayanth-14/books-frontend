import React from 'react'
import { Link } from "react-router";
import ButtonPrimary from "../buttons/buttonPrimary";
import getImage from '../../functionalities/getImage';

function BookCard({ book, index }) {
  return (
    <div
      key={index}
      className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
        <img
          src={book?.image?.data ? getImage(book.image) : 'https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg'}
          alt={`${book.title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow text-center">
        <h1 className="text-lg md:text-xl font-semibold text-neutral-900 capitalize truncate">{book.title}</h1>
        <p className="text-sm md:text-base text-gray-600 mb-1">by {book.author}</p>
        <p className="text-md md:text-lg font-medium text-blue-500 mb-2">$ {book.price}</p>
        <div className="mt-auto">
          <Link to={`/book/${book._id}`} className="block">
            <ButtonPrimary className="w-full py-2 text-md">View Details</ButtonPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard;