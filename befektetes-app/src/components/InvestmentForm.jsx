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
            id="investmentPS"
            type="number"
            value={investmentPS}
            onChange={onPsChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
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
