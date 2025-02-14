import React from 'react'

function OrderSorting({setSortBy}) {
  return (
    <div className="flex items-center justify-between">
    <div className="flex border border-gray-200 items-center p-2 gap-4 rounded-md">
        <p className="">Sort by : </p>
         <select className='text-lg bg-gray-100 px-3 py-2 rounded-md border-none outline-none cursor-pointer' name="" id="" onChange={(event) => {          
           setSortBy(event.target.value);
      }}>
        <option value="new-to-old">New To Old</option>
        <option value="old-to-new">Old To New</option>
      </select>
    </div>
  </div>
  )
}

export default OrderSorting