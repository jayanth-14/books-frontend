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
  const navigate = useNavigate();
  const { setAlert, setCheckoutBook } = useContext(Context);

  useEffect(() => {
    const fetchBook = async () => {
      const url = import.meta.env.VITE_BACKEND + "book/" + id;
      const data = await useGet(url);
      console.log(data);
      setBook(data.book);
    };
    fetchBook();
  }, []);

  return (
    <div className="book">
      {book ? (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={`book-${id}`}
                className="lg:w-1/2 w-full object-contain object-center rounded border border-gray-200 h-80 py-4"
                src={
                  getImage(book.image) ||
                  "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg"
                }
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {book?.title}
                </h1>
                <h2 className="text-sm title-font text-gray-500 tracking-widest m-1 font-semibold">
                  Edition - {book.edition}
                </h2>
                <h2 className="text-sm title-font text-gray-500 tracking-widest m-1">
                  BY - {book.author}
                </h2>
                <p className="leading-relaxed">{book?.description}</p>
                <div className="flex mt-6 items-center justify-between pt-5 border-t-2 border-gray-200 mb-5 gap-4">
                  <div className="flex">
                    <span className="mr-3">Publisher : </span>
                    <span>{book?.publisher || "Unknown"}</span>
                  </div>
                  <div className="flex">
                    <span className="mr-3">Quantity : </span>
                    <span>{book?.quantity}</span>
                  </div>
                </div>
                <div className="flex mt-6 items-center justify-between pb-5 border-b-2 border-gray-200 mb-5 gap-4">
                  <div className="flex">
                    <span className="mr-3">Category : </span>
                    <span>{book?.category}</span>
                  </div>
                  <div className="flex">
                    <span className="mr-3">Condition : </span>
                    <span>{book?.condition || "Not Mentioned"}</span>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹ {book?.price}
                  </span>
                  <button
                    onClick={() => {
                      checkout(book, setCheckoutBook, navigate);
                    }}
                    className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
                    disabled={book.isOwnedBook}
                  >
                    Buy Now
                  </button>
                  {!book.isWishlist ? (
                    <button
                      onClick={() => {
                        addToWishList(id, setAlert);
                      }}
                      className={
                        `rounded-md h-10 bg-gray-200 p-3 border-0 inline-flex items-center justify-start text-gray-500 ml-4 hover:bg-gray-700 hover:text-gray-100` +
                        (book.isOwnedBook ? " bg-gray-500 pointer-events-none text-white" : "")
                      }
                    >
                      <HiHeart className="text-2xl" />{" "}
                      <span className="text-base">Add to Wishlist</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        removeFromWishList(id, setAlert);
                      }}
                      className={
                        `rounded-md h-10 bg-gray-200 p-3 border-0 inline-flex items-center justify-start text-gray-500 ml-4 hover:bg-gray-700 hover:text-gray-100` +
                        (book.isOwnedBook ? " bg-gray-500 pointer-events-none text-white" : "")
                      }
                    >
                      <HiHeart className="text-2xl" />{" "}
                      <span className="text-base">Remove From Wishlist</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default Book;