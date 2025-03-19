import React from "react";

function PaginationControls({ currentPage, setCurrentPage, totalPages }) {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 rounded ${currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        aria-label="Previous Page"
      >
        Prev
      </button>
      <span className="px-4 py-2 mx-1 font-semibold text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationControls;