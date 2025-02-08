import React, { useContext, useEffect, useState } from "react";
import { Context } from "../data/states";
import useGet from "../hooks/useGet";
import { useNavigate } from "react-router";

function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const { checkoutBook, setAlert } = useContext(Context);
  const navigate = useNavigate();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
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
      if (data.status === "success") {
        // navigate("/orders");
        window.location.href = data.transactionLink;
      }
    } catch (error) {
      console.log("Error at checkout : ", error);
    }
  };

  useEffect(() => {
    const fetchAddress = async () => {
      const addressUrl = import.meta.env.VITE_BACKEND + "address";
      const response = await useGet(addressUrl);
      console.log(response);

      setAddress(response.address);
    };
    fetchAddress();
  }, []);

  const totalPrice = quantity * checkoutBook?.price;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>

        {/* Product Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            {checkoutBook?.title}
          </h3>
          <p className="text-sm text-gray-500">{checkoutBook?.description}</p>
          <p className="text-md font-bold text-gray-800">
            Price: ${checkoutBook?.price}
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="mb-4 flex items-center">
          <button
            className="px-3 py-1 bg-red-500 text-white rounded-l-lg"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="px-4 py-2 bg-gray-200">{quantity}</span>
          <button
            className="px-3 py-1 bg-green-500 text-white rounded-r-lg"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-medium mb-1"
          >
            Delivery Address:
          </label>
          <div>
            <p>{address && address}</p>
          </div>
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-700">Total:</span>
          <span className="text-lg font-bold text-gray-800">${totalPrice}</span>
        </div>

        {/* Checkout Button */}
        <button
          className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
          onClick={async () => {
            await checkout();
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
