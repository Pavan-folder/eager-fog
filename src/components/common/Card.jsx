import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
}
