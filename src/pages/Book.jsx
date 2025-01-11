import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Context } from '../data/states'
import { useParams } from 'react-router'
import { addToCart } from '../functionalities/addToCart'
import LoadingPage from './Loading'

function Book() {
  const { books, cart, setCart } = useContext(Context)
  const { id } = useParams()
  const [book, setBook] = useState({});
  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:5000/book/${id}`, {
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
      setBook(data.book);
    }
    fetchBook();
  }, [])
  return (
    <div className="book">

      {book ? <section className="bookDetails w-full h-screen">
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 py-16 ">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img src={book.image_url} alt="Product"
                  className="w-full h-96 object-contain rounded-lg shadow-2xl mb-4 py-5" id="mainImage" />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-4">BY: {book.author}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold mr-2">${book.price}</span>
                </div>
                <p className="text-gray-700 mb-6">{book.description}</p>
                <div className="mb-6">
                  <label for="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                  <input type="number" id="quantity" name="quantity" min="1" value="1"
                    className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => addToCart(book, cart, setCart)}
                    className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> : <LoadingPage />
      }
    </div>
  )
}

export default Book