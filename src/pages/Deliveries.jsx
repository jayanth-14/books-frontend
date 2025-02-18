import React, { useEffect, useState } from "react";
import useGet from "../hooks/useGet";
import OrderItem from "../components/orders/OrderItem";
import PaginationControls from "../components/pagination/PaginationControls";
import OrderFilter from "../components/utilities/OrderFilter";
import OrderSorting from "../components/utilities/OrderSorting";

function Deliveries() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("new-to-old");
  const ordersPerPage = 20;
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const startingIndex = (currentPage - 1) * ordersPerPage;
  useEffect(() => {
    const fetchOrders = async () => {
      const ordersUrl = import.meta.env.VITE_BACKEND + "deliveries";
      const response = await useGet(ordersUrl);
      setOrders(response.deliveries);
    };
    fetchOrders();
  }, []);

  // current page orders with filters
  const filteredorders =
    orders &&
    orders.filter((order) => {
      return order.transactionStatus === "paid";
    });
  let sortedOrders = [];
  if (sortBy === "new-to-old") {
    sortedOrders = filteredorders.reverse();
  } else if (sortBy === "old-to-new") {
    sortedOrders = filteredorders;
  }
  const currentOrders = sortedOrders.slice(
    startingIndex,
    startingIndex + ordersPerPage
  );
  console.log(orders[0]);
  
  return (
    <div className="bg-white p-8 rounded-md w-full shadow-xl">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold text-3xl">Your Orders</h2>
        </div>
        <div className="flex flex-row gap-4">
          {/* <OrderFilter setFilter={setFilter} /> */}
          <OrderSorting setSortBy={setSortBy} />
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Book Title
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ordered By
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ordered At
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Order Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  currentOrders.map((order) => {
                    return <OrderItem order={order} type={"delivery"} />;
                  })}
              </tbody>
            </table>
          </div>
          <PaginationControls
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default Deliveries