import React from "react";
import BuyerCard from "../BuyerCard";
import BuyerFilters from "../BuyerFilters";
import sampleBuyers from "../sampleBuyers";

export default function Buyers() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Buyers</h1>
      <BuyerFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sampleBuyers.map((buyer) => (
          <BuyerCard key={buyer.id} buyer={buyer} />
        ))}
      </div>
    </div>
  );
}
