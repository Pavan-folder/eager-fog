// src/components/MatchWorkbench.jsx
import React, { useState } from "react";
import BuyerCard from "./BuyerCard";
import SellerProfile from "./SellerProfile";

export default function MatchWorkbench({ buyers, seller }) {
  const [selectedBuyer, setSelectedBuyer] = useState(null);

  const handleSelectBuyer = (buyer) => {
    setSelectedBuyer(buyer);
  };

  return (
    <div className="match-workbench flex flex-col md:flex-row p-4 gap-4">
      {/* Buyers List */}
      <div className="buyers-list flex-1 space-y-4 overflow-y-auto border p-4 rounded-lg bg-white">
        <h2 className="text-lg font-semibold">Potential Buyers</h2>
        {buyers.length > 0 ? (
          buyers.map((buyer) => (
            <BuyerCard
              key={buyer.id}
              buyer={buyer}
              onClick={() => handleSelectBuyer(buyer)}
            />
          ))
        ) : (
          <p className="text-gray-500">No buyers available</p>
        )}
      </div>

      {/* Seller & Match Details */}
      <div className="seller-details flex-1 space-y-4 border p-4 rounded-lg bg-white">
        {selectedBuyer ? (
          <>
            <SellerProfile seller={seller} />
            <div className="match-score mt-4 p-3 bg-blue-50 border rounded">
              <p>
                Match Score with <strong>{selectedBuyer.name}</strong>:{" "}
                <span className="text-blue-600 font-bold">
                  {selectedBuyer.matchScore}%
                </span>
              </p>
            </div>
            <div className="actions mt-4 flex gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Start Chat
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Proposal
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">
            Select a buyer from the list to view match details.
          </p>
        )}
      </div>
    </div>
  );
}
