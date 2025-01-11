import React, { useState } from 'react'
import SearchBar from './SearchBar'
import BookList from '../books/BookList';
import NoBooksResult from './NoBooksResult';

function Search() {

  const [result, setResults] = useState([]);
  const [noBooksFound, setNoBooksFound] = useState(false);
  const handleSearch = async (searchText, searchBy, category, condition, setResults) => {    
    try {
      setNoBooksFound(false);
      const response = await fetch(`http://localhost:5000/search?query=${searchText}&searchBy=${searchBy}&category=${category}&condition=${condition}&year=All`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials : 'include'
      });
      if (!response.ok) {
        setNoBooksFound(true);
        setResults([]);
        return;
      }
      setNoBooksFound(false)
      const data = await response.json();
      setResults(data.books);
      
    } catch (error) {
      setNoBooksFound(true);
      setResults([]);
      console.log("error message: " + error);
      
    }
  }
  return (
    <div className='p-20 flex flex-col justify-center items-center'>
      <SearchBar setResults={setResults} handler={handleSearch}/>
      {(noBooksFound) ? <NoBooksResult /> : <BookList data={result} /> }
    </div>
  )
}

export default Search