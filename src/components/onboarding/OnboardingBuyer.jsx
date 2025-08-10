import React, { useState } from "react";

const OnboardingBuyer = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    budget: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit and complete onboarding
      console.log("Buyer Onboarding Data:", formData);
      if (onComplete) onComplete(formData);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Buyer Onboarding
      </h2>

      {/* Step Progress */}
      <div className="flex justify-between mb-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`w-1/3 h-2 rounded-full ${
              step >= num ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-md mb-4"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="block mb-2 font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            className="w-full p-2 border rounded-md"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-md mb-4"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="block mb-2 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 border rounded-md"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block mb-2 font-medium">Product Category</label>
          <input
            type="text"
            name="category"
            className="w-full p-2 border rounded-md mb-4"
            value={formData.category}
            onChange={handleChange}
          />

          <label className="block mb-2 font-medium">Estimated Budget</label>
          <input
            type="text"
            name="budget"
            className="w-full p-2 border rounded-md mb-4"
            value={formData.budget}
            onChange={handleChange}
          />

          <label className="block mb-2 font-medium">Additional Notes</label>
          <textarea
            name="notes"
            rows="3"
            className="w-full p-2 border rounded-md"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Back
          </button>
        ) : (
          <div></div>
        )}
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {step < 3 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default OnboardingBuyer;
