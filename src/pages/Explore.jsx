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
        console.log("loading finished");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4">Explore Books Near You</h1>
          </div>
          <BookList data={result} />
        </>
      )}
    </div>
  );
}

export default Explore;
