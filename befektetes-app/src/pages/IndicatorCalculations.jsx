import React, { useState } from "react";
import indicatorDescriptions from "../data/indicatorDescriptions";
import { calculateIndicator } from "../utils/calculateIndicator";
import useIndicatorForm from "../hooks/useIndicatorForm";
import InputField from "../components/forms/InputField";

const IndicatorCalculations = () => {
  const [result, setResult] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState("");
  const requiredFields = {
    "P/E": ["stockPrice", "eps"],
    "P/B": ["stockPrice", "bookValue"],
    "P/S": ["stockPrice", "ps"],
    "PEG Ratio": ["peg", "growthRate"],
    "Dividend Yield (Osztalékhozam)": ["dy", "stockPrice"],
    "Debt-to-Equity Ratio (Adósság/saját tőke arány)": ["dte", "bookValue"],
    "EV/EBITDA": ["ev", "ebitda"],
  };
  const needed = requiredFields[selectedIndicator] || [];
  const { values, handleChange, reset, errors, validate } = useIndicatorForm();

  const handleIndicatorChange = (event) => {
    setSelectedIndicator(event.target.value);
    reset();
    setResult(null);
  };

  const calculateResult = () => {
    if (!validate(needed)) return;
    const value = calculateIndicator(selectedIndicator, values);
    setResult(value?.toFixed(2) ?? null);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <label className="font-bold">Válassz mutatót:</label>
      <select
        value={selectedIndicator}
        onChange={handleIndicatorChange}
        className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
      >
        <option value="">-- Válassz mutatót --</option>
        {Object.keys(indicatorDescriptions).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {selectedIndicator && (
        <>
          <div className="bg-gray-100 p-3 rounded-md mb-4">
            <h3 className="font-semibold text-lg">
              {selectedIndicator} magyarázata
            </h3>
            <p>{indicatorDescriptions[selectedIndicator].explanation}</p>
            <ul className="list-disc ml-4 mt-2 text-gray-600">
              {indicatorDescriptions[selectedIndicator].interpretation.map(
                (point, index) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>
          </div>

          {/* Input mezők */}
          {needed.map((field) => (
            <InputField
              key={field}
              label={field}
              value={values[field]}
              onChange={handleChange(field)}
              error={errors[field]}
            />
          ))}

          <button
            onClick={calculateResult}
            className="w-full p-2 mt-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Számítás
          </button>

          {result !== null && (
            <p className="mt-3 font-bold">
              {selectedIndicator} értéke: {result}
            </p>
          )}
        </>
      )}
    </div>
  );
};
export default IndicatorCalculations;
