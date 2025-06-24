import React from "react";

const InvestmentList = ({ investments, onDelete, onDeleteAll }) => {
  return (
    <div className="p-8 bg-gray-50 shadow-lg rounded-xl mt-6 max-w-4xl mx-auto">
      {investments.length > 0 && (
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
          Investments
        </h2>
      )}
      <ul className="grid md:grid-cols-2 gap-6">
        {investments.length > 0 ? (
          investments.map((investment, index) => (
            <li
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 relative"
            >
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded-md transition"
                >
                  Delete
                </button>
              </div>
              <h3 className="text-xl font-semibold text-indigo-600">
                {investment.name}
              </h3>
              <p className="text-lg font-medium text-gray-800 my-2">
                💰 {investment.amount} $
              </p>

              <div className="text-sm text-gray-700 mt-3 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="font-medium mr-1">PB:</span>{" "}
                  {investment.pb}
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-1">P/S:</span>{" "}
                  {investment.ps}
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-1">P/E:</span>{" "}
                  {investment.pe}
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-1">PEG Ratio:</span>{" "}
                  {investment.peg}
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-1">Divident yield:</span>{" "}
                  {investment.dy}%
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-1">Debt/Equity:</span>{" "}
                  {investment.dte}
                </div>
                <div className="flex items-center col-span-2">
                  <span className="font-medium mr-1">EV/EBITDA:</span>{" "}
                  {investment.ev}
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4 border-t pt-2">
               Added: {investment.date}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-2">
            There are no investments
          </p>
        )}
      </ul>

      {investments.length > 0 && (
        <button
          onClick={onDeleteAll}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200"
        >
          Delete all investments
        </button>
      )}
    </div>
  );
};

export default InvestmentList;
