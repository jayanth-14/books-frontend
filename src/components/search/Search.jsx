import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "../books/BookList";
import NoBooksResult from "./NoBooksResult";
import useGet from "../../hooks/useGet";

function Search() {
  const [result, setResults] = useState([]);
  const [noBooksFound, setNoBooksFound] = useState(false);

  const handleSearch = async (
    searchText,
    searchBy,
    category,
    condition,
    setResults
  ) => {
    try {
      setNoBooksFound(false);
      const url =
        import.meta.env.VITE_BACKEND +
        `search?query=${searchText}&searchBy=${searchBy}&category=${category}&condition=${condition}&year=All`;
      const data = await useGet(url);
      if (data.books.length === 0) {
        setNoBooksFound(true);
        setResults([]);
        return;
      }
      setNoBooksFound(false);
      setResults(data.books);
    } catch (error) {
      setNoBooksFound(true);
      setResults([]);
      console.log("error message: " + error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Search for Books
        </h1>
        <SearchBar setResults={setResults} handler={handleSearch} />
      </div>

      <div className="w-full max-w-4xl mt-8">
        {noBooksFound ? <NoBooksResult /> : <BookList data={result} />}
      </div>
    </div>
  );
}

export default Search;
