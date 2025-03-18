import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchDropDown from "./SearchDropDown";
import ButtonPrimary from "../buttons/buttonPrimary";

function SearchBar({ setResults, handler }) {
  const [query, setQuery] = useState("");
  const [searchBy, setSearchBy] = useState("All");
  const [category, setCategory] = useState("All");
  const [condition, setCondition] = useState("All");

  const submitHandler = (event) => {
    event.preventDefault();
    handler(query, searchBy, category, condition, setResults);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto p-4">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        <form onSubmit={submitHandler}>
          {/* Search Input */}
          <div className="relative mb-6 w-full">
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              name="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Search by title, author, publisher, etc"
              aria-label="Search"
            />
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <SearchDropDown
              name="Search By"
              options={["Title", "Author", "Publisher"]}
              handler={setSearchBy}
            />
            <SearchDropDown
              name="Category"
              options={["Engineering", "Diploma", "Other"]}
              handler={setCategory}
              allTitle="Any"
            />
            <SearchDropDown
              name="Condition"
              options={["Like New", "Good", "Fair", "Poor"]}
              handler={setCondition}
              allTitle="Any"
            />
          </div>

          {/* Search Button */}
          <div className="flex justify-end">
            <ButtonPrimary
              type="submit"
              className="w-full sm:w-auto px-8 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              Search
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;