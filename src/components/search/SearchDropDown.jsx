import React from 'react'

function SearchDropDown({options}) {
  return (
    <select id="pricingType" name="pricingType"
		className="w-44 h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All" selected="">All</option>
		{options.map((option, i) => {
      return (
        <option key={i} value={option}>{option}</option>
        );
    })}
	</select>
  )
}

export default SearchDropDown