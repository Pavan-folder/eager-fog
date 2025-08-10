import React from "react";
import BuyerCard from "../BuyerCard";
import SellerProfile from "../SellerProfile";
import sampleBuyers from "../sampleBuyers";
import sampleSellers from "../sampleSellers";

export default function Matches() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Matches</h1>
      <p className="mb-6 text-gray-600">
        Here are potential matches between buyers and sellers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-bold mb-2">Potential Buyers</h2>
          {sampleBuyers.slice(0, 3).map((buyer) => (
            <BuyerCard key={buyer.id} buyer={buyer} />
          ))}
        </div>
        <div>
          <h2 className="font-bold mb-2">Potential Sellers</h2>
          {sampleSellers.slice(0, 3).map((seller) => (
            <SellerProfile key={seller.id} seller={seller} />
          ))}
        </div>
      </div>
    </div>
  );
}
