import React from "react";
import { Link } from "react-router";
import ButtonPrimary from "../buttons/buttonPrimary";
import getImage from "../../functionalities/getImage";

function OrderItem({ data, transaction }) {
  console.log(data);
  
  return (
    <div class="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <p class="text-lg md:text-xl dark:text-black font-semibold leading-6 xl:leading-5 text-gray-800">
        Items
      </p>
      <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
        <div class="pb-4 md:pb-8 w-full md:w-40">
          <img
            class="w-full hidden md:block"
            src={data?.image?.data ? getImage(book.image) : 'https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg'}
            alt="dress"
          />
         
        </div>
        <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
          <div class="w-full flex flex-col justify-start items-start space-y-8">
            <h3 class="text-xl dark:text-black xl:text-2xl font-semibold leading-6 text-gray-800">
             {data?.title}
            </h3>
            <div class="flex justify-start items-start flex-col space-y-2">
              <p class="text-sm dark:text-black leading-none text-gray-800">
                <span class="dark:text-gray-400 text-gray-300">Author: </span>{" "}
                {data?.author}
              </p>
              <p class="text-sm dark:text-black leading-none text-gray-800">
                <span class="dark:text-gray-400 text-gray-300">Edition: </span>{" "}
                {data?.edition}
              </p>
              <Link to={"/book/" + data?._id}>
                <ButtonPrimary>View Book Details</ButtonPrimary>
              </Link>
            </div>
          </div>
          <div class="flex justify-between space-x-8 items-start w-full">
            <p class="text-base dark:text-black xl:text-lg leading-6">
              <span class="dark:text-gray-400 text-gray-300">Price: </span>{" "}
              {data?.price}{" "}
            </p>
            <p class="text-base dark:text-black xl:text-lg leading-6 text-gray-800">
              <span class="dark:text-gray-400 text-gray-300">Total Quantity: </span> {transaction?.quantity}
            </p>
            <p class="text-base dark:text-black xl:text-lg font-semibold leading-6 text-gray-800">
              <span class="dark:text-gray-400 text-gray-300">Total Cost: </span>{" "}
              {transaction?.transactionAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
