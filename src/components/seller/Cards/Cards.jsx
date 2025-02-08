// Cards Component
import React from "react";
import SellerCard from "./SellerCard";

function Cards({data}) {
  const keys = Object.keys(data);  
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-6">
      {
        keys.map((item) => {
          return (
            <SellerCard
            key={item}
            count={data[item]}
            title={item}
            />
            );
        })
      }
    </div>
  );
}

export default Cards;