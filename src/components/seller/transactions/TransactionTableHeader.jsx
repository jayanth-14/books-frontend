import React from 'react'

export default function TransactionTableHeader() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Transaction
        </th>
        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Date &amp; Time
        </th>
        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Amount
        </th>
        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Book
        </th>
      </tr>
    </thead>
  )
}
