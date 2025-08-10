import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to DealMatch</h1>
      <p className="mb-6 text-gray-600">
        A platform connecting verified buyers and sellers for smooth business
        deals.
      </p>
      <div className="flex gap-4">
        <Link to="/buyers">
          <Button>Browse Buyers</Button>
        </Link>
        <Link to="/sellers">
          <Button variant="secondary">Browse Sellers</Button>
        </Link>
      </div>
    </div>
  );
}
