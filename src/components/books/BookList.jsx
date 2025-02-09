import React, { useState } from "react";
import BookCard from "./BookCard";

function BookList({ data }) {
  const booksPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(data.length / booksPerPage); // normal division gets us decimal points, to avoid we use ceil
  const startIndex = (currentPage - 1) * booksPerPage; // in pagination we start from 1, but in array index starts from 0, fo we subtract 1 from current page then mutl
  const currentPageBooks = data.slice(startIndex, startIndex + booksPerPage);
  // example current page = 1, per page we have 10 books, so we will do 1 - 1 => 0 * 10 = 0 "we will skip 0 books", and get 10 books from starting index "which is 0 in array"
  // example current page = 2, per page we have 10 books, so we will do 2 - 1 => 1 * 10 = 10 "will skip twenty books from start", and get 10 books starting from index twenty
  // example current page = 6, per page we have 10 books, so we will do 6 - 1 => 5 * 10 = 100 "will skip 100 books from start", and get 10 books starting from index 100
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
        {currentPageBooks.map((book, index) => (
          <BookCard book={book} key={index} index={index} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => setCurrentPage(previousPageNumber => previousPageNumber - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Prev
        </button>
        <span className="px-4 py-2 mx-1 font-semibold">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(previousPageNumber => previousPageNumber + 1)} 
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BookList;