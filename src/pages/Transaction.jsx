import React, { useContext, useEffect, useState } from "react";
import OrderItem from "../components/transaction/OrderItem";
import CustomerInfo from "../components/transaction/CustomerInfo";
import Summary from "../components/transaction/Summary";
import { useParams } from "react-router";
import { Context } from "../data/states";

function Transaction() {
  const { id } = useParams();
  const { user } = useContext(Context);
  const [transaction, setTransaction] = useState(null);
  const [details, setDetails] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getTransactionDetails() {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND + `transaction/${id}`, {
          credentials: "include",
        });
        const data = await response.json();

        setTransaction(data.transaction);
        setBookData(data.book);

        if (data.transaction?.userId === user?.id) {
          setTitle("Seller Details");
          setDetails(data.seller);
        } else {
          setTitle("Customer Details");
          setDetails(data.buyer);
        }
      } catch (error) {
        console.error("Error fetching transaction details:", error);
      }
    }

    getTransactionDetails();
  }, [id, user]);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <OrderItem data={bookData} transaction={transaction} />
          <CustomerInfo data={details} title={title} />
        </div>
        <div className="bg-gray-100 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
          <Summary book={bookData} transaction={transaction} />
        </div>
      </div>
    </div>
  );
}

export default Transaction;
