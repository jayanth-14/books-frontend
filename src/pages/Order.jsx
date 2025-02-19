import React, { useEffect, useState } from "react";
import useGet from "../hooks/useGet";
import OrderItem from "../components/orders/OrderItem";
import PaginationControls from "../components/pagination/PaginationControls";
import OrderFilter from "../components/utilities/OrderFilter";
import OrderSorting from "../components/utilities/OrderSorting";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("new-to-old");
  const ordersPerPage = 20;
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const startingIndex = (currentPage - 1) * ordersPerPage;

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersUrl = import.meta.env.VITE_BACKEND + "orders";
      const response = await useGet(ordersUrl);
      setOrders(response.orders);
    };
    fetchOrders();
  }, []);

  // Filter and sort orders
  const filteredOrders =
    orders &&
    orders.filter((order) => filter === "all" || order.transactionStatus === filter);

  let sortedOrders = sortBy === "new-to-old" ? [...filteredOrders].reverse() : filteredOrders;

  const currentOrders = sortedOrders.slice(startingIndex, startingIndex + ordersPerPage);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-5xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-center pb-6">
          <h2 className="text-gray-800 font-semibold text-2xl md:text-3xl">Your Orders</h2>
          <div className="flex flex-row gap-4 mt-4 md:mt-0">
            <OrderFilter setFilter={setFilter} />
            <OrderSorting setSortBy={setSortBy} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm">
                <th className="px-4 py-3 text-left font-semibold">Book Title</th>
                <th className="px-4 py-3 text-left font-semibold">Ordered At</th>
                <th className="px-4 py-3 text-left font-semibold">Quantity</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentOrders.map((order, index) => (
                <OrderItem key={index} order={order} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-center">
          <PaginationControls setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
