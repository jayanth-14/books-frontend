import React, { useEffect, useState } from 'react'
import TransactionItem from './TransactionItem'
import TransactionTableHeader from './TransactionTableHeader'
import useGet from '../../../hooks/useGet'

export default function Transactions({count}) {
  const [data, setData] = useState([]);
  const title = count === undefined ? 'Latest Transactions' : `Last ${count}Transactions`
  useEffect(() => {
    const getTransactions = async () => {
      const response = await useGet("http://localhost:5000/transactions");
      setData(response.transactions);
    }
    getTransactions();
  }, [])

  const populateTransactions = () => {
    const tranactions = data.map((item, index) => (
      <TransactionItem key={index} title={item.title || "title not mentioned"} id={item.bookId} user={item.userName} date={item.transactionDate} amount={item.transactionAmount} type={item.transactionStatus} />
      ))

      return tranactions
  }
  
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <span className="text-base font-normal text-gray-500">This is a list of {title}</span>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="overflow-x-auto rounded-lg">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <TransactionTableHeader />
                <tbody className="bg-white">
                  {data && data.length > 0 ? populateTransactions() : <p className='text-lg w-full px-5 py-5'>No transactions found</p> }
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
