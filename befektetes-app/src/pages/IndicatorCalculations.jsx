import React, { useState } from "react";

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

  const indicatorDescriptions = {
    "P/E": {
      explanation:
        "A P/E mutató (Price-to-Earnings) azt mutatja meg, hogy a részvény árfolyama hányszorosát éri az egy részvényre jutó nyereségnek (EPS).",
      interpretation: [
        "Ha magas (30+), akkor a részvény drágának számíthat, és nagy növekedési várakozás van mögötte.",
        "Ha alacsony (10-20), akkor a részvény olcsóbb lehet, de fontos a cég jövőbeli kilátásait is figyelembe venni.",
        "Nagyon alacsony érték (pl. 5 alatt) arra utalhat, hogy a piac nem bízik a cég növekedésében.",
      ],
    },
    "P/B": {
      explanation:
        "A P/B mutató (Price-to-Book) megmutatja, hogy a részvény árfolyama hogyan viszonyul a vállalat könyv szerinti értékéhez.",
      interpretation: [
        "Ha 1 alatt van, akkor a részvény alulértékelt lehet, mert a cég eszközei többet érnek, mint a részvények összesített piaci értéke.",
        "Ha 1 felett van, akkor a piac többre értékeli a céget, de ha túl magas (10+), lehet, hogy túlértékelt a részvény.",
      ],
    },
    "P/S": {
      explanation: "A P/S (Price-to-Sales) mutató megmutatja, hogy a cég részvényének árfolyama hogyan viszonyul az egy részvényre jutó éves bevételhez.",
      interpretation: [
        "Alacsony érték (1 alatt) kedvező, jelezheti, hogy alulértékelt.",
        "Magas érték (10+) jelentős növekedési várakozásokat tükröz, de túlárazottságra is utalhat.",
      ],
    },
    "PEG Ratio": {
      explanation: "A PEG Ratio megmutatja, hogy a P/E érték mennyire van összhangban a cég várható növekedési ütemével.",
      interpretation: [
        "1 alatti PEG alulértékeltséget jelez.",
        "1 feletti érték magas növekedési várakozásokat mutat, drága lehet a részvény.",
      ],
    },
    "Dividend Yield (Osztalékhozam)": {
      explanation: "Az osztalékhozam azt jelzi, hogy egy részvény éves osztaléka hány százaléka a jelenlegi részvényárnak.",
      interpretation: [
        "Magas osztalékhozam (5%+) vonzó lehet passzív jövedelemre törekvő befektetőknek.",
        "Alacsony osztalékhozam növekedési részvényekre jellemző.",
      ],
    },
    "Debt-to-Equity Ratio (Adósság/saját tőke arány)": {
      explanation: "Ez a mutató a cég pénzügyi stabilitását és hitelállományát mutatja meg.",
      interpretation: [
        "Magas arány (2+) kockázatos lehet, túlzott eladósodottságra utalhat.",
        "Alacsony arány (1 alatt) stabil pénzügyi helyzetre utal.",
      ],
    },
    "EV/EBITDA": {
      explanation: "Az EV/EBITDA megmutatja, hogy a vállalat értéke hogyan viszonyul az éves üzemi eredményéhez (EBITDA).",
      interpretation: [
        "Alacsony érték (10 alatt) kedvező lehet, a vállalat alulértékelt.",
        "Magas érték (20+) a piac magas elvárásait tükrözi, és drága lehet.",
      ],
    },
  };

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
    let calculatedValue = null;

    if (selectedIndicator === "P/E" && stockPrice && eps) {
      calculatedValue = (parseFloat(stockPrice) / parseFloat(eps)).toFixed(2);
    }

    if (selectedIndicator === "P/B" && stockPrice && bookValue) {
      calculatedValue = (
        parseFloat(stockPrice) / parseFloat(bookValue)
      ).toFixed(2);
    }

    if (selectedIndicator === "P/S" && stockPrice && ps) {
      calculatedValue = (parseFloat(stockPrice) / parseFloat(ps)).toFixed(2);
    }

    if (selectedIndicator === "PEG Ratio" && peg && growthRate) {
      calculatedValue = (parseFloat(peg) / parseFloat(growthRate)).toFixed(2);
    }

    if (
      selectedIndicator === "Dividend Yield (Osztalékhozam)" &&
      dy &&
      stockPrice
    ) {
      calculatedValue = (
        (parseFloat(dy) / parseFloat(stockPrice)) *
        100
      ).toFixed(2);
    }

    if (
      selectedIndicator === "Debt-to-Equity Ratio (Adósság/saját tőke arány)" &&
      dte &&
      bookValue
    ) {
      calculatedValue = (parseFloat(dte) / parseFloat(bookValue)).toFixed(2);
    }

    if (selectedIndicator === "EV/EBITDA" && ev && ebitda) {
      calculatedValue = (parseFloat(ev) / parseFloat(ebitda)).toFixed(2);
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
