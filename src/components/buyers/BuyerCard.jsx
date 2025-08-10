// src/components/BuyerCard.jsx
import React from "react";

export default function BuyerCard({ buyer, onViewProfile, onMatch }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 hover:shadow-lg transition duration-200">
      {/* Buyer Name & Company */}
      <div>
        <h2 className="text-lg font-bold text-gray-800">{buyer.name}</h2>
        <p className="text-sm text-gray-500">{buyer.company}</p>
      </div>

      {/* Buyer Needs */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Needs:</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{buyer.needs}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {buyer.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-auto">
        <button
          onClick={() => onViewProfile(buyer)}
          className="text-blue-600 text-sm hover:underline"
        >
          View Profile
        </button>
        <button
          onClick={() => onMatch(buyer)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Match
        </button>
      </div>
    </div>
  );
}
