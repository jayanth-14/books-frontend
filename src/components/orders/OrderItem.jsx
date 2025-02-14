import React, { useContext } from "react";
import usePost from "../../hooks/usePost";
import { Context } from "../../data/states";
import OrderActions from "./OrderActions";
import OrderActionButtons from "./OrderActionButtons";
import moment from "moment";

function OrderItem({ order }) {
  const updatedDate =  moment(order.transactionDate);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{order.title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {updatedDate.fromNow()}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{order.quantity}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {order.transactionAmount}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">{order.transactionStatus}</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-1">
       <OrderActionButtons status={order.transactionStatus} id={order._id}/>
      </td>
    </tr>
  );
}

export default OrderItem;
