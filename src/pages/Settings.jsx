import React from "react";
import { Button } from "../common/Button";

export default function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-600">Email Notifications</label>
          <input type="checkbox" className="mt-1" />
        </div>
        <div>
          <label className="block text-gray-600">Dark Mode</label>
          <input type="checkbox" className="mt-1" />
        </div>
        <Button>Save Settings</Button>
      </div>
    </div>
  );
}
