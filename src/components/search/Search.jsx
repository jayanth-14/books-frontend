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
      const url = import.meta.env.VITE_BACKEND + `search?query=${searchText}&searchBy=${searchBy}&category=${category}&condition=${condition}&year=All`;
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
    <div className="p-20 flex flex-col justify-center items-center">
      <SearchBar setResults={setResults} handler={handleSearch} />
      {noBooksFound ? <NoBooksResult /> : <BookList data={result} />}
    </div>
  );
}

export default Search;
