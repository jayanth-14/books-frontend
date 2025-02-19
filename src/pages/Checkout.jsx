import React, { useContext, useEffect, useState } from "react";
import { Context } from "../data/states";
import useGet from "../hooks/useGet";
import { useNavigate } from "react-router";

function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const { checkoutBook, setAlert } = useContext(Context);
  const navigate = useNavigate();

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const checkout = async () => {
    try {
      const checkoutUrl = import.meta.env.VITE_BACKEND + "checkout";
      const response = await fetch(checkoutUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          bookId: checkoutBook._id,
          title: checkoutBook.title,
          quantity: quantity,
          amount: checkoutBook.price * quantity,
          sellerId: checkoutBook.sellerId,
        }),
      });
      const data = await response.json();
      console.log(data);
      setAlert([data]);
      if (data.status === "failed") return;
      window.location.href = data.transactionLink;
    } catch (error) {
      console.log("Error at checkout:", error);
    }
  };

  useEffect(() => {
    const fetchAddress = async () => {
      const response = await useGet(import.meta.env.VITE_BACKEND + "address");
      console.log(response);
      setAddress(response.address);
    };
    fetchAddress();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Checkout
        </h2>

        {/* Product Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            {checkoutBook?.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{checkoutBook?.description}</p>
          <p className="text-lg font-bold text-blue-600">
            ₹{checkoutBook?.price}
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <button
            className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        {/* Address */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Delivery Address:
          </label>
          <p className="p-3 bg-gray-100 rounded-lg text-gray-800">{address || "No Address Found"}</p>
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold text-gray-700">Total:</span>
          <span className="text-2xl font-bold text-gray-900">₹{quantity * checkoutBook?.price}</span>
        </div>

        {/* Checkout Button */}
        <button
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold text-lg transition hover:bg-blue-600"
          onClick={checkout}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
