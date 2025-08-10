// src/components/DealSteps.jsx
import React from "react";

const steps = [
  { id: 1, label: "Introduced", description: "Buyer and Seller connected" },
  { id: 2, label: "Negotiating", description: "Terms and pricing discussed" },
  { id: 3, label: "Agreement", description: "Contract finalized and signed" },
  { id: 4, label: "Payment", description: "Funds transferred securely" },
  { id: 5, label: "Closed", description: "Deal completed successfully" },
];

export default function DealSteps({ currentStep }) {
  return (
    <div className="deal-steps-container p-4">
      <h3 className="text-lg font-bold mb-3">Deal Progress</h3>
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isActive = step.id <= currentStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                    isActive
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {step.id}
                </div>
                <span
                  className={`text-xs mt-1 ${
                    isActive ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {!isLast && (
                <div
                  className={`flex-1 h-1 ${
                    isActive && step.id < currentStep
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        {steps.find((s) => s.id === currentStep)?.description || ""}
      </div>
    </div>
  );
}
