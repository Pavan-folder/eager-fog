// src/components/ProgressIndicator.jsx
import React from "react";

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center space-x-4 py-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={step} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm
                ${
                  isCompleted
                    ? "bg-green-500"
                    : isActive
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }
              `}
            >
              {isCompleted ? "✓" : index + 1}
            </div>

            {/* Step Label */}
            <span
              className={`ml-2 text-sm font-medium ${
                isCompleted || isActive ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {step}
            </span>

            {/* Connector Line (except for last step) */}
            {index < steps.length - 1 && (
              <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
