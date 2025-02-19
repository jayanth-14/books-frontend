import React, { useState } from "react";
import BookCard from "./BookCard";
import PaginationControls from "../pagination/PaginationControls";

function BookList({ data }) {
  const booksPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(data.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentPageBooks = data.slice(startIndex, startIndex + booksPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {currentPageBooks.map((book, index) => (
          <BookCard book={book} key={index} index={index} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <PaginationControls setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default BookList;