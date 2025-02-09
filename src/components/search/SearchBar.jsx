import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import SearchDropDown from './SearchDropDown';
import ButtonPrimary from '../buttons/buttonPrimary';

function SearchBar({ setResults, handler }) {
  const [query, setQuery] = useState("");
  const [searchBy, setSearchBy] = useState("All");
  const [category, setCategory] = useState("All");
  const [condition, setCondition] = useState("All");
  // const [year, setYear] = useState(new Date());


  const submitHandler = (event) => {
    event.preventDefault();
    handler(query,searchBy, category, condition, setResults);
  }
  return (
    <div className="m-10 w-screen max-w-screen-md">

      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
          <form className="" onSubmit={submitHandler}>
            <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
              <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input type="name" name="search" onChange={(event) => {setQuery(event.target.value)} } className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by title, author, publisher, etc" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2">

              <SearchDropDown name="Search-By" options={['Title', 'Author', 'Publisher']} handler={setSearchBy}/>

              <SearchDropDown name="Category" options={['Engineering', 'Diploma', 'Other']} handler={setCategory} allTitle={"Any"}/>

              <SearchDropDown name="Condition" options={['Like New', 'Good', 'Fair', 'Poor']} handler={setCondition} allTitle={"Any"}/>

              {/* <div className="flex flex-col">
                <label for="date" className="text-sm font-medium text-stone-600">Published Year</label>
                <DatePicker id='date' selected={year} onChange={(e) => {setYear(e.getFullYear())}} showYearPicker dateFormat="yyyy" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div> */}
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
               <ButtonPrimary className=" w-full rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"> Search</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SearchBar