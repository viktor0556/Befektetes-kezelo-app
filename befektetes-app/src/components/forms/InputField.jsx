import React from "react";

/**
 * Egy mező label-lel, értékkel, onChange-l, hibával
 * @param {string} label - a mező neve
 * @param {string} value - az aktuális érték
 * @param {function} onChange - változáskezelő
 * @param {string} error - hibaüzenet (ha van)
 */

const InputField = ({ label, placeholder, value, onChange, error}) => {
  return (
    <div className="mb-4">
      <label className="font-bold block mb-1">{label}</label>
      <input
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full p-2 border rounded-md focus:outline-none ${
        error
          ? "border-red-500 focus:ring-red-300"
          : "border-gray-300 focus:ring-blue-400"
      }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;