import React, { useContext } from 'react'
import usePost from '../../hooks/usePost'
import { Context } from '../../data/states'

function OrderItem({order}) {
  const {setAlert} = useContext(Context);
  const handleDelivered = async (orderId) => {
    const url = import.meta.env.VITE_BACKEND + "delivered";
    const response = await usePost(url, {
      transactionId : orderId
    })
    setAlert([response]);
  }
  return (
    <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {order.title}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{order.transactionDate}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {order.quantity}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {order.transactionAmount}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span
        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span aria-hidden
          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
        <span className="relative">{order.transactionStatus}</span>
      </span>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-1">
        <button className='px-4 py-2 bg-green-300 rounded-md text-green-900' onClick={() => handleDelivered(order._id)}>Delivered</button>
        <button className='px-4 py-2 bg-red-300 text-red-900 rounded-md'>Cancel</button>
    </td>
  </tr>
  )
}

export default OrderItem