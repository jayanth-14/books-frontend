import React from "react";

function OrderFilter({setFilter}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex border border-gray-200 items-center p-2 gap-4 rounded-md">
        <p className="">Filters : </p>
         <select className='text-lg bg-gray-100 px-3 py-2 rounded-md border-none outline-none cursor-pointer' name="" id="" onChange={(event) => {          
          setFilter(event.target.value);
        }}>
          <option value="all">all</option>
          <option value="pending">pending</option>
          <option value="delivered">delivered</option>
          <option value="cancelled">cancelled</option>
          <option value="failed">failed</option>
        </select>
      </div>
    </div>
  );
}

export default OrderFilter;
