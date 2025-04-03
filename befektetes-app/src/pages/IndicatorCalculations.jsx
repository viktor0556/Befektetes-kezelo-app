import React, { useState } from "react";
import indicatorDescriptions from "../data/indicatorDescriptions";
import { calculateIndicator } from "../utils/calculateIndicator";

const IndicatorCalculations = () => {
  const [result, setResult] = useState()
  const [selectedIndicator, setSelectedIndicator] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [eps, setEPS] = useState("");
  const [bookValue, setBookValue] = useState("");
  const [ps, setPs] = useState("");
  const [peg, setPeg] = useState("");
  const [dy, setDy] = useState("");
  const [dte, setDte] = useState("");
  const [ev, setEv] = useState("");
  const [ebitda, setEbitda] = useState("");
  const [growthRate, setGrowthRate] = useState("");

  

  const handleIndicatorChange = (event) => {
    setSelectedIndicator(event.target.value);
    setStockPrice("");
    setEPS("");
    setBookValue("");
    setPs("");
    setPeg("");
    setDy("");
    setDte("");
    setEv("");
    setResult(null);
  };

  const calculateResult = () => {
    const rawResult = calculateIndicator(selectedIndicator, {
      stockPrice,
      eps,
      bookValue,
      ps,
      peg,
      growthRate,
      dy,
      dte,
      ev,
      ebitda
    });
  
    const formatted = rawResult !== null && !isNaN(rawResult)
      ? rawResult.toFixed(2)
      : null;
  
    setResult(formatted);
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
        <option value="P/E">P/E (Ár/Nyereség)</option>
        <option value="P/B">P/B (Ár/Könyv szerinti érték)</option>
        <option value="P/S">P/S (Ár/Bevétel)</option>
        <option value="PEG Ratio">PEG Ratio</option>
        <option value="Dividend Yield (Osztalékhozam)">
          Dividend Yield (Osztalékhozam)
        </option>
        <option value="Debt-to-Equity Ratio (Adósság/saját tőke arány)">
          Debt-to-Equity Ratio (Adósság/saját tőke arány)
        </option>
        <option value="EV/EBITDA">EV/EBITDA</option>
      </select>

      {selectedIndicator && (
        <div className="bg-gray-100 p-3 rounded-md mb-4">
          <h3 className="font-semibold text-lg">
            {selectedIndicator} magyarázata
          </h3>
          <p className="text-gray-700">
            {indicatorDescriptions[selectedIndicator].explanation}
          </p>
          <ul className="list-disc ml-4 mt-2 text-gray-600">
            {indicatorDescriptions[selectedIndicator].interpretation.map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>
        </div>
      )}

      {selectedIndicator && (
        <div>
          <label className="font-bold">Részvény árfolyama (USD):</label>
          <input
            type="number"
            value={stockPrice}
            onChange={(e) => setStockPrice(e.target.value)}
            className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
          />

          {selectedIndicator === "P/E" && (
            <>
              <label className="font-bold">
                Egy részvényre jutó nyereség (EPS) (USD):
              </label>
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
              <label className="font-bold">Könyv szerinti érték (USD):</label>
              <input
                type="number"
                value={bookValue}
                onChange={(e) => setBookValue(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
            </>
          )}

          {selectedIndicator === "P/S" && (
            <>
              <label className="font-bold">
                Egy részvényre jutó bevétel (USD):
              </label>
              <input
                type="number"
                value={ps}
                onChange={(e) => setPs(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
            </>
          )}

          {selectedIndicator === "PEG Ratio" && (
            <>
              <label className="font-bold">P/E érték:</label>
              <input
                type="number"
                value={peg}
                onChange={(e) => setPeg(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
              <label className="font-bold">Éves növekedési ütem (%):</label>
              <input
                type="number"
                value={growthRate}
                onChange={(e) => setGrowthRate(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
            </>
          )}

          {selectedIndicator === "Dividend Yield (Osztalékhozam)" && (
            <>
              <label className="font-bold">Éves osztalék (USD):</label>
              <input
                type="number"
                value={dy}
                onChange={(e) => setDy(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
            </>
          )}

          {selectedIndicator ===
            "Debt-to-Equity Ratio (Adósság/saját tőke arány)" && (
            <>
              <label className="font-bold">Teljes adósság (USD):</label>
              <input
                type="number"
                value={dte}
                onChange={(e) => setDte(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
              <label className="font-bold">Saját tőke (USD):</label>
              <input
                type="number"
                value={bookValue}
                onChange={(e) => setBookValue(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
            </>
          )}

          {selectedIndicator === "EV/EBITDA" && (
            <>
              <label className="font-bold">Vállalatérték (EV, USD):</label>
              <input
                type="number"
                value={ev}
                onChange={(e) => setEv(e.target.value)}
                className="block w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
              <label className="font-bold">EBITDA (USD):</label>
              <input
                type="number"
                value={ebitda}
                onChange={(e) => setEbitda(e.target.value)}
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
