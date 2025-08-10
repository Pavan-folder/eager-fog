import React from "react";
import SellerProfile from "../SellerProfile";
import sampleSellers from "../sampleSellers";

export default function Sellers() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Sellers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleSellers.map((seller) => (
          <SellerProfile key={seller.id} seller={seller} />
        ))}
      </div>
    </div>
  );
}
