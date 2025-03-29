import React, { useState } from "react";
import fetchStockData from "../../API/vintageApi";
import StockSearch from "./StockSearch"; 
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StockPrice = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (symbol) => {
    setLoading(true);
    const data = await fetchStockData(symbol);
    setStockData(data);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Részvény árfolyamok 📈</h1>

      <StockSearch onSelect={handleSearch} />

      {loading ? (
        <p className="text-center text-gray-500">Betöltés...</p>
      ) : stockData ? (
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Árfolyamdiagram</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData.chartData}>
              <XAxis dataKey="time" hide />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#3182CE" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Nem található adat.</p>
      )}
    </div>
  );
};

export default StockPrice;
