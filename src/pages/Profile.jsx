import React from "react";
import { Button } from "../common/Button";

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
      <div className="bg-white shadow rounded p-4 space-y-4">
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            value="John Doe"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            value="john@example.com"
            className="border p-2 w-full rounded"
          />
        </div>
        <Button>Update Profile</Button>
      </div>
    </div>
  );
}
