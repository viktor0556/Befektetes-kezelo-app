import React, { useState, useEffect } from "react";
import fetchStockData from "../API/vintageApi";

const StockPrice = () => {
  const [stockData, setStockData] = useState(null); // We store the exchange rates

  useEffect(() => {
    const getData = async () => {
      const data = await fetchStockData();
      if (data) {
        setStockData(data); // If there is data, we will save it
      }
    };
    getData();
  }, []); // Runs once when the page loads

  return (
    <div>
      <h2>IBM Részvény Árfolyam</h2>
      {stockData ? (
        <ul>
          <li>Utolsó frissítés: {stockData?.latestTime || "N/A"}</li>
          <li>Nyitó ár: {stockData?.latestData?.["1. open"] || "N/A"} USD</li>
          <li>Záró ár: {stockData?.latestData?.["4. close"] || "N/A"} USD</li>
          <li>
            Legmagasabb ár: {stockData?.latestData?.["2. high"] || "N/A"} USD
          </li>
          <li>
            Legalacsonyabb ár: {stockData?.latestData?.["3. low"] || "N/A"} USD
          </li>
        </ul>
      ) : (
        <p>Adatok betöltése...</p>
      )}
    </div>
  );
};

export default StockPrice;
