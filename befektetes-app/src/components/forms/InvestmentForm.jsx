import React from "react";

const InvestmentForm = ({
  values, onChange, onSave
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
            value={values.investment}
            onChange={onChange("investment")}
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
            value={values.investmentAmount}
            onChange={onChange("investmentAmount")}
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
            value={values.pb}
            onChange={onChange("pb")}
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
            value={values.ps}
            onChange={onChange("ps")}
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
            value={values.pe}
            onChange={onChange("pe")}
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
            value={values.peg}
            onChange={onChange("peg")}
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
            value={values.dy}
            onChange={onChange("dy")}
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
            value={values.dte}
            onChange={onChange("dte")}
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
            value={values.ev}
            onChange={onChange("ev")}
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
