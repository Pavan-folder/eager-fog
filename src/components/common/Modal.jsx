import React from "react";
import Button from "./Button";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="bg-white rounded-xl shadow-lg z-10 w-full max-w-lg p-6">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="mt-4">{children}</div>

        <div className="mt-6 flex justify-end">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
