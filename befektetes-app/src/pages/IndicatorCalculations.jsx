import React, { useState } from "react";

const IndicatorCalculations = () => {
  const [selectedIndicator, setSelectedIndicator] = useState(""); // 📌 A kiválasztott mutató
  const [stockPrice, setStockPrice] = useState(""); // 📌 Részvény árfolyama
  const [eps, setEPS] = useState(""); // 📌 Egy részvényre jutó nyereség (EPS)
  const [bookValue, setBookValue] = useState(""); // 📌 Könyv szerinti érték
  const [result, setResult] = useState(null); // 📌 A számított eredmény

  // 📌 Mutatók magyarázata
  const indicatorDescriptions = {
    "P/E": {
      explanation: "A P/E mutató (Price-to-Earnings) azt mutatja meg, hogy a részvény árfolyama hányszorosát éri az egy részvényre jutó nyereségnek (EPS).",
      interpretation: [
        "Ha magas (30+), akkor a részvény drágának számíthat, és nagy növekedési várakozás van mögötte.",
        "Ha alacsony (10-20), akkor a részvény olcsóbb lehet, de fontos a cég jövőbeli kilátásait is figyelembe venni.",
        "Nagyon alacsony érték (pl. 5 alatt) arra utalhat, hogy a piac nem bízik a cég növekedésében."
      ]
    },
    "P/B": {
      explanation: "A P/B mutató (Price-to-Book) megmutatja, hogy a részvény árfolyama hogyan viszonyul a vállalat könyv szerinti értékéhez.",
      interpretation: [
        "Ha 1 alatt van, akkor a részvény alulértékelt lehet, mert a cég eszközei többet érnek, mint a részvények összesített piaci értéke.",
        "Ha 1 felett van, akkor a piac többre értékeli a céget, de ha túl magas (10+), lehet, hogy túlértékelt a részvény."
      ]
    }
  };

  // 📌 Kezeli a kiválasztott mutatót
  const handleIndicatorChange = (event) => {
    setSelectedIndicator(event.target.value);
    setStockPrice("");
    setEPS("");
    setBookValue("");
    setResult(null);
  };

  // 📌 Számítási logika
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
        <option value="P/E">P/E (Ár/Nyereség)</option>
        <option value="P/B">P/B (Ár/Könyv szerinti érték)</option>
      </select>

      {/* 📌 Ha van kiválasztott mutató, akkor megjelenik a magyarázat */}
      {selectedIndicator && (
        <div className="bg-gray-100 p-3 rounded-md mb-4">
          <h3 className="font-semibold text-lg">{selectedIndicator} magyarázata</h3>
          <p className="text-gray-700">{indicatorDescriptions[selectedIndicator].explanation}</p>
          <ul className="list-disc ml-4 mt-2 text-gray-600">
            {indicatorDescriptions[selectedIndicator].interpretation.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 📌 Dinamikusan megjelenő input mezők */}
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
              <label className="font-bold">Egy részvényre jutó nyereség (EPS) (USD):</label>
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
