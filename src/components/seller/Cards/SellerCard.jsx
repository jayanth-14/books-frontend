import React from 'react'

function SellerCard({count, title}) {
  return (
    <div className='w-[300px] border border-[#D9D9D9] rounded-md p-5'>
      <p className="text-[48px] text-[#085E00] font-semibold mb-1"> {count}</p>
      <p className="text-2xl text-[#525252] font-semibold">{title}</p>
    </div>
  )
}

export default SellerCard