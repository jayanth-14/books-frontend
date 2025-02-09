import React from "react";

function OrderFilter({setFilter}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex bg-gray-300 items-center p-2 rounded-md">
         <select className='text-lg bg-gray-200 px-2 py-1 rounded-md border-none outline-none cursor-pointer' name="" id="" onChange={(event) => {          
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
