import React from "react";

function Summary({book, transaction}) {
  return (
    <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-100 space-y-6">
      <h3 class="text-xl dark:text-black font-semibold leading-5 text-gray-800">
        Summary
      </h3>
      <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
        <div class="flex justify-between w-full">
          <p class="text-base dark:text-black leading-4 text-gray-800">
            Price
          </p>
          <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
            {book?.price}
          </p>
        </div>
        <div class="flex justify-between items-center w-full">
          <p class="text-base dark:text-black leading-4 text-gray-800">
            Quantity
          </p>
          <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
            x {transaction?.quantity}
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center w-full">
        <p class="text-base dark:text-black font-semibold leading-4 text-gray-800">
          Total
        </p>
        <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
          {transaction?.transactionAmount}
        </p>
      </div>
    </div>
  );
}

export default Summary;
