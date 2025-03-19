import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoadingPage from "./Loading";
import useGet from "../hooks/useGet";
import { HiHeart } from "react-icons/hi";
import addToWishList from "../functionalities/addToWishList";
import { Context } from "../data/states";
import checkout from "../functionalities/checkout";
import getImage from "../functionalities/getImage";
import removeFromWishList from "../functionalities/removeFromWishList";

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false); // State for toggling description
  const navigate = useNavigate();
  const { setAlert, setCheckoutBook } = useContext(Context);

  useEffect(() => {
    const fetchBook = async () => {
      const url = import.meta.env.VITE_BACKEND + "book/" + id;
      const data = await useGet(url);
      setBook(data.book);
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <LoadingPage />;
  }

  // Function to toggle description visibility
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Truncate the description if it's too long
  const truncatedDescription =
    book.description.length > 200 && !showFullDescription
      ? book.description.slice(0, 200) + "..."
      : book.description;

  return (
    <div className="book bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Book Image */}
            <div className="lg:w-1/2 w-full p-6 flex items-center justify-center">
              <img
                alt={`book-${id}`}
                className="w-full max-w-sm h-auto object-contain rounded-lg border border-gray-200"
                src={
                  getImage(book.image) ||
                  "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg"
                }
                aria-label="Book Cover"
              />
            </div>

            {/* Book Details */}
            <div className="lg:w-1/2 w-full p-6 lg:pl-10 lg:pr-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <h2 className="text-sm font-semibold text-gray-500 mb-1">
                Edition - {book.edition}
              </h2>
              <h2 className="text-sm text-gray-500 mb-4">
                By - {book.author}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {truncatedDescription}
                {book.description.length > 200 && (
                  <button
                    onClick={toggleDescription}
                    className="text-blue-600 hover:text-blue-800 focus:outline-none ml-2"
                  >
                    {showFullDescription ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>

              {/* Publisher and Quantity */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 border-b pb-6 border-gray-200">
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium mr-2">Publisher:</span>
                  <span className="text-gray-900">{book.publisher || "Unknown"}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium mr-2">Quantity:</span>
                  <span className="text-gray-900">{book.quantity}</span>
                </div>
              </div>

              {/* Category and Condition */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 border-b pb-6 border-gray-200">
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium mr-2">Category:</span>
                  <span className="text-gray-900">{book.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium mr-2">Condition:</span>
                  <span className="text-gray-900">{book.condition || "Not Mentioned"}</span>
                </div>
              </div>

              {/* Price and Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-2xl font-bold text-gray-900">
                  ₹ {book.price}
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() => checkout(book, setCheckoutBook, navigate)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={book.isOwnedBook}
                    aria-label="Buy Now"
                  >
                    Buy Now
                  </button>
                  {!book.isWishlist ? (
                    <button
                      onClick={() => addToWishList(id, setAlert)}
                      className={`flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                        book.isOwnedBook ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={book.isOwnedBook}
                      aria-label="Add to Wishlist"
                    >
                      <HiHeart className="text-xl" />
                      <span>Add to Wishlist</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => removeFromWishList(id, setAlert)}
                      className={`flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                        book.isOwnedBook ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={book.isOwnedBook}
                      aria-label="Remove from Wishlist"
                    >
                      <HiHeart className="text-xl" />
                      <span>Remove from Wishlist</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;