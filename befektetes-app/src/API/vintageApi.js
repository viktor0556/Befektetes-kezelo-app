const API_KEY_ = import.meta.env.VITE_API_KEY;

const fetchStockData = async (searchTerm) => {
  const url = 
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchTerm}&interval=5min&entitlement=delayed&apikey=${API_KEY_}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    if (!data || !data["Time Series (5min)"]) {
      throw new Error("API response structure is incorrect");
    }

    const timeSeries = data["Time Series (5min)"];
    const chartData = Object.keys(timeSeries).map((time) => ({
      time,
      price: parseFloat(timeSeries[time]["4. close"]),
    })).slice(0, 10).reverse();

    return { chartData };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; 
  }
};

export default fetchStockData;
