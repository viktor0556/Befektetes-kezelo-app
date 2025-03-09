import React, { useState } from "react";

const IndicatorCalculations = () => {
  const [selectedIndicator, setSelectedIndicator] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [eps, setEPS] = useState(""); 
  const [bookValue, setBookValue] = useState(""); 
  const [result, setResult] = useState(null); 

  const handleIndicatorChange = (event) => {
    setSelectedIndicator(event.target.value);
    setStockPrice("");
    setEPS("");
    setBookValue("");
    setResult(null);
  };

  const calculateResult = () => {
    let calculatedValue = null;

    if (selectedIndicator === "P/E" && stockPrice && eps) {
      calculatedValue = (parseFloat(stockPrice) / parseFloat(eps)).toFixed(2);
    }

    if (selectedIndicator === "P/B" && stockPrice && bookValue) {
      calculatedValue = (parseFloat(stockPrice) / parseFloat(bookValue)).toFixed(2);
    }

    setResult(calculatedValue);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <label htmlFor="indicators" className="font-bold">
        Válassz egy mutatót:
      </label>
      <select
        id="indicators"
        value={selectedIndicator}
        onChange={handleIndicatorChange}
        className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
      >
        <option value="">-- Válassz mutatót --</option>
        <option value="P/E">P/E</option>
        <option value="P/B">P/B</option>
      </select>

      {selectedIndicator && (
        <div>
          <label className="font-bold">Részvény árfolyama:</label>
          <input
            type="number"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
            className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
          />

          {selectedIndicator === "P/E" && (
            <>
              <label className="font-bold">Egy részvényre jutó nyereség (EPS):</label>
              <input
                type="number"
                value={eps}
                onChange={(e) => setEPS(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
            </>
          )}

          {selectedIndicator === "P/B" && (
            <>
              <label className="font-bold">Könyv szerinti érték:</label>
              <input
                type="number"
                value={bookValue}
                onChange={(e) => setBookValue(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
            </>
          )}

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
        </div>
      )}
    </div>
  );
};

export default IndicatorCalculations;
