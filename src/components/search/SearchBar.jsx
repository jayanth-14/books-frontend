import React, { useState } from 'react'
import SearchDropDown from './SearchDropDown'

function SearchBar({ setResults, handler }) {
  const [query, setQuery] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    handler(query, setResults);
  }
  return (
    <form className="flex flex-col md:flex-row gap-3" onSubmit={submitHandler}>
      <div className="flex">
        <input type="text" placeholder="Search for the Books you like"
          className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500" onInput={(event) => {setQuery(event.target.value)}} />
        <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
      </div>
      <SearchDropDown options={['Engineering', 'Diploma', 'Other']} />
      <SearchDropDown options={['Like New', 'Good', 'Fair', 'Poor']} />
      {/* <SearchDropDown options={['Engineering', 'Diploma', 'Other']} /> */}
    </form>
  )
}

export default SearchBar