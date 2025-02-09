import React from "react";

function OrderDelivered() {
  return (
    <p className="px-4 py-2 bg-green-300 rounded-md text-green-900 cursor-not-allowed">
      Order has been delivered
    </p>
  );
}

function OrderCancelled() {
  return (
    <p className="px-4 py-2 bg-yellow-300 rounded-md text-yellow-900 cursor-not-allowed">
      Order has been cancelled
    </p>
  );
}

function OrderFailed() {
  return (
    <p className="px-4 py-2 bg-red-300 rounded-md text-red-900 cursor-not-allowed">
      Order has been failed
    </p>
  );
}

export {OrderDelivered, OrderCancelled, OrderFailed};
