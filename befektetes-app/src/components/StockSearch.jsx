const API_KEY_ = import.meta.env.VITE_API_KEY;
import React, { useState } from "react";

const StockSearch = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("IBM");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCompanySuggestions = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${API_KEY_}`
      );
      const data = await response.json();

      if (data.bestMatches && data.bestMatches.length > 0) {
        setSuggestions(
          data.bestMatches
            .filter((item) => item["3. type"] === "Equity") 
            .map((item) => ({
              name: item["2. name"],
              symbol: item["1. symbol"],
            }))
        );
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Hiba az API lekérésben:", error);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchCompanySuggestions(value);
  };

  const handleSelect = (symbol) => {
    setSearchTerm(symbol);
    setSuggestions([]);
    onSelect(symbol); 
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Keresd meg a részvényt vagy ETF-et"
        className="w-full p-2 border border-gray-300 rounded"
      />
      {loading && <p className="text-gray-500 text-sm">Betöltés...</p>}
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded shadow-lg">
          {suggestions.map((company) => (
            <li
              key={company.symbol}
              onClick={() => handleSelect(company.symbol)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {company.name} ({company.symbol})
            </li>
          ))}
        </ul>
      )}
      {searchTerm.length > 0 && suggestions.length === 0 && !loading && (
        <p className="absolute bg-white border border-gray-300 w-full mt-1 p-2 text-gray-500">
          Nincs találat
        </p>
      )}
    </div>
  );
};

export default StockSearch;