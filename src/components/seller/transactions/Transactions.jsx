import React, { useEffect, useState } from 'react'
import TransactionItem from './TransactionItem'
import TransactionTableHeader from './TransactionTableHeader'
import useGet from '../../../hooks/useGet'
import PaginationControls from '../../pagination/PaginationControls';
import OrderFilter from '../../utilities/OrderFilter';
import OrderSorting from '../../utilities/OrderSorting';

export default function Transactions() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("Latest Transactions");
  const [sort, setSort] = useState("new-to-old");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredTransactions = data && data.filter((item) => {return filter === "Latest Transactions" || item.transactionStatus === filter});
  const transactionsPerPage = 20;
  const totalPages = data && Math.ceil(data.length / transactionsPerPage) || 1;
  const startingIndex = (currentPage - 1) * transactionsPerPage;

  // logic to sort the transactions
  let sortedTransactions = filteredTransactions && sort === 'new-to-old' ? filteredTransactions.reverse() : filteredTransactions;

  const currentPageTransactions = sortedTransactions && sortedTransactions.slice(startingIndex, startingIndex + transactionsPerPage);
  const url = import.meta.env.VITE_BACKEND + "transactions";
  useEffect(() => {
    const getTransactions = async () => {
      const response = await useGet(url);
      setData(response.transactions);
    }
    getTransactions();
  }, [])

  const populateTransactions = () => {
    const tranactions = currentPageTransactions.map((item, index) => (
      <TransactionItem key={index} title={item.title || "title not mentioned"} id={item.bookId} user={item.userName} date={item.transactionDate} amount={item.transactionAmount} type={item.transactionStatus} />
      ))

      return tranactions
  }
  
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Transactions</h3>
          <span className="text-base font-normal text-gray-500">This is a list of Transactions</span>
        </div>
        <div className="flex flex-row gap-4">
          <OrderFilter setFilter={setFilter} />
          <OrderSorting setSortBy={setSort}/>
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
            <PaginationControls setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  )
}
