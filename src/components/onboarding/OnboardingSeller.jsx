import React, { useState } from "react";

export default function OnboardingSeller({ onComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productCategory: "",
    experience: "",
    location: "",
    priceRange: "",
    description: "",
  });

  const categories = [
    "Agriculture",
    "Electronics",
    "Clothing",
    "Furniture",
    "Food & Beverages",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seller Onboarding Data:", formData);
    if (onComplete) onComplete(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Seller Onboarding
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-gray-700 font-medium">
            Product Category
          </label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-gray-700 font-medium">
            Years of Experience
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g., 5"
            min="0"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, State"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-gray-700 font-medium">
            Price Range (per unit)
          </label>
          <input
            type="text"
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            placeholder="$10 - $50"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">
            Business Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe your business and offerings..."
            className="w-full mt-1 p-2 border rounded-md"
            rows="3"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Complete Onboarding
        </button>
      </form>
    </div>
  );
}
