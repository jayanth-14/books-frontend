import React from 'react'

function SearchDropDown({ name,allOption=true,  options, handler }) {
  return (
    <div className="flex flex-col">
      <label for={`${name}`} className="text-sm font-medium text-stone-600">{name}</label>

      <select id={`${name}`} onChange={(event) => {handler(event.target.value)}} className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
        {allOption && <option value="All" selected="">All</option>}
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>{option}</option>
          );
        })}
      </select>
    </div>
  )
}

export default SearchDropDown