import React from "react";

/**
 * A field with label, value, onChange, error
 * @param {string} label - field name
 * @param {string} value - current value
 * @param {function} onChange - change manager
 * @param {string} error - error message (if any)
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