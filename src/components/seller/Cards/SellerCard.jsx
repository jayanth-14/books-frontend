import React from 'react';

function SellerCard({ count, title }) {
  return (
    <div className='w-72 border border-gray-300 rounded-lg p-6 shadow-md bg-white text-center'>
      <p className="text-5xl text-green-700 font-bold mb-2">{count}</p>
      <p className="text-xl text-gray-600 font-semibold">{title}</p>
    </div>
  );
}

export default SellerCard;