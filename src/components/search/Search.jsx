import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "../books/BookList";
import NoBooksResult from "./NoBooksResult";
import useGet from "../../hooks/useGet";

function Search() {
  const [result, setResults] = useState([]);
  const [noBooksFound, setNoBooksFound] = useState(false);

  const handleSearch = async (searchText, searchBy, category, condition, setResults) => {
    try {
      setNoBooksFound(false);
      const url =
        import.meta.env.VITE_BACKEND +
        `search?query=${searchText}&searchBy=${searchBy}&category=${category}&condition=${condition}&year=All`;
      const data = await useGet(url);
      if (data.books.length === 0) {
        setNoBooksFound(true);
        setResults([]);
      } else {
        setNoBooksFound(false);
        setResults(data.books);
      }
    } catch (error) {
      setNoBooksFound(true);
      setResults([]);
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Search for Books
        </h1>
        <SearchBar setResults={setResults} handler={handleSearch} />
        <div className="mt-8">
          {noBooksFound ? <NoBooksResult /> : <BookList data={result} />}
        </div>
      </div>
    </div>
  );
}

export default Search;