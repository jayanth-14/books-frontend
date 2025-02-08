// Cards Component
import React from "react";
import SellerCard from "./SellerCard";

function Cards() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-6">
      <SellerCard count={20} title={"Total Orders"} />
      <SellerCard count={20} title={"Total Sell"} />
      <SellerCard count={20} title={"Total Products Listed"} />
    </div>
  );
}

export default Cards;