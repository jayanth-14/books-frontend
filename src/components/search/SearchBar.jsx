import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SearchBar({ setResults, handler }) {
  const [query, setQuery] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    handler(query, setResults);
  }
  return (
    // <form classNameName="flex flex-col md:flex-row gap-3" >
    <div className="m-10 w-screen max-w-screen-md">

      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <form className="" onSubmit={submitHandler}>
            <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
              <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input type="name" name="search" className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* <div className="flex flex-col">
          <label for="name" className="text-sm font-medium text-stone-600">Name</label>
          <input type="text" id="name" placeholder="Raspberry juice" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div> */}

              <div className="flex flex-col">
                <label for="search-by" className="text-sm font-medium text-stone-600">Search By</label>

                <select id="search-by" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>All</option>
                  <option>Title</option>
                  <option>Author</option>
                  <option>Publisher</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label for="category" className="text-sm font-medium text-stone-600">Category</label>

                <select id="category" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>Enginerring</option>
                  <option>Diploma</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col">
          <label for="condition" className="text-sm font-medium text-stone-600">Condition</label>

          <select id="condition" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option>New</option>
            <option>Like New</option>
            <option>Fair</option>
            <option>Poor</option>
            <option>Old</option>
          </select>
        </div>

              <div className="flex flex-col">
                <label for="date" className="text-sm font-medium text-stone-600">Published Year</label>
                {/* <input type="date" id="date" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" /> */}
                <DatePicker selected="00" showYearPicker dateFormat="yyyy" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SearchBar