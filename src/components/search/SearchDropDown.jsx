import React from "react";

function SearchDropDown({ name, options, handler, allTitle = "All" }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-600 mb-1">
        {name}
      </label>
      <select
        id={name}
        onChange={(event) => handler(event.target.value)}
        className="w-full px-3 py-2 rounded-md border border-gray-200 bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        aria-label={name}
      >
        <option value="All">{allTitle}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchDropDown;