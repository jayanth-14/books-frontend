import React, { useEffect, useState } from "react";
import BookList from "../components/books/BookList";
import LoadingPage from "./Loading";

function Explore() {
  const [result, setResults] = useState([]);
  const [noBooksFound, setNoBooksFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleExplore();
  }, []);

  const handleExplore = async () => {
    setIsLoading(true);
    try {
      setNoBooksFound(false);
      const booksUrl = import.meta.env.VITE_BACKEND + "books";
      const response = await fetch(booksUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      if (!data.books || data.books.length === 0) {
        setNoBooksFound(true);
      } else {
        setResults(data.books);
        setNoBooksFound(false);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setNoBooksFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <div className="text-center p-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Explore Books Near You
              </h1>
            </div>
            {noBooksFound ? (
              <div className="text-center text-gray-600">
                <p>No books found. Please try again later.</p>
              </div>
            ) : (
              <BookList data={result} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Explore;