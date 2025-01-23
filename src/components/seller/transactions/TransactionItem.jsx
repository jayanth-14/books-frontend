import React from 'react'
import { Link } from 'react-router';

export default function TransactionItem({type, amount, date, title, id, user}) {
  const message = type === 'Success' ? 'Payment from' : type === 'cancelled' ? 'Payment cancelled by' : 'Pending to Deliver to' ;
  return (
    <tr>
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
        {message} <span className="font-semibold">{user}</span>
      </td>
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
        {date}
      </td>
      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
        {amount}
      </td>
      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
        <Link to={`/book/${id}`}>
        {title}
        </Link>
      </td>
    </tr>
  )
}
