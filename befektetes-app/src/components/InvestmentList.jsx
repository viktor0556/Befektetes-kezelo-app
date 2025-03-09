import React from "react";

const InvestmentList = ({ investments, onDelete, onDeleteAll }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6 max-w-3xl mx-auto">
      {investments.length > 0 && (
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Befektetések</h2>
      )}
      <ul className="space-y-4">
        {investments.length > 0 ? (
          investments.map((investment, index) => (
            <li key={index} className="p-4 border rounded-md bg-gray-50 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-gray-700 font-medium">{investment.name} - {investment.amount} Ft</p>
                <p className="text-sm text-gray-500">Hozzáadva: {investment.date}</p>
              </div>
              <button 
                onClick={() => onDelete(index)} 
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition">
                Törlés
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">Nincsenek befektetések</p>
        )}
      </ul>
      {investments.length > 0 && (
        <button 
          onClick={onDeleteAll} 
          className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Összes törlése
        </button>
      )}
    </div>
  );
};

export default InvestmentList;
