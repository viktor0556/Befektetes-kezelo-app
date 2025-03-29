import React from "react";

const InvestmentForm = ({
  investment,
  investmentAmount,
  onNameChange,
  onAmountChange,
  investmentPB,
  onPbChange,
  investmentPS,
  onPsChange,
  investmentPE,
  onPeChange,
  investmentPEG,
  onPegChange,
  investmentDY,
  onDyChange,
  investmentDTE,
  onDteChange,
  investmentEV,
  onEvChange,
  onSave,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Új befektetés hozzáadása
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="investmentName"
            className="block text-gray-700 font-medium mb-1"
          >
            Név:
          </label>
          <input
            id="investmentName"
            placeholder="Investment Name"
            type="text"
            value={investment}
            onChange={onNameChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentAmount"
            className="block text-gray-700 font-medium mb-1"
          >
            Összeg:
          </label>
          <input
            id="investmentAmount"
            placeholder="Investment Amount"
            type="number"
            value={investmentAmount}
            onChange={onAmountChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentPB"
            className="block text-gray-700 font-medium mb-1"
          >
            PB:
          </label>
          <input
            id="investmentPB"
            placeholder="PB"
            type="number"
            value={investmentPB}
            onChange={onPbChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentPS"
            className="block text-gray-700 font-medium mb-1"
          >
            PS:
          </label>
          <input
          placeholder="PS"
            id="investmentPS"
            type="number"
            value={investmentPS}
            onChange={onPsChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentPE"
            className="block text-gray-700 font-medium mb-1"
          >
            PE:
          </label>
          <input
          placeholder="PE"
            id="investmentPE"
            type="number"
            value={investmentPE}
            onChange={onPeChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentPEG"
            className="block text-gray-700 font-medium mb-1"
          >
            PEG Ratio:
          </label>
          <input
          placeholder="PEG Ratio"
            id="investmentPEG"
            type="number"
            value={investmentPEG}
            onChange={onPegChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentDY"
            className="block text-gray-700 font-medium mb-1"
          >
            Dividend Yield (Osztalékhozam):
          </label>
          <input
          placeholder="Divined Yield"
            id="investmentDY"
            type="number"
            value={investmentDY}
            onChange={onDyChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentDTE"
            className="block text-gray-700 font-medium mb-1"
          >
            Debt-to-Equity Ratio (adósság/saját tőke arány):
          </label>
          <input
          placeholder="Debt to Equity"
            id="investmentDTE"
            type="number"
            value={investmentDTE}
            onChange={onDteChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="investmentEV"
            className="block text-gray-700 font-medium mb-1"
          >
            EV/EBITDA:
          </label>
          <input
          placeholder="EV/EBITDA"
            id="investmentEV"
            type="number"
            value={investmentEV}
            onChange={onEvChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={onSave}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Mentés
        </button>
      </form>
    </div>
  );
};

export default InvestmentForm;
