const API_KEY_ = import.meta.env.API_KEY;

const fetchStockData = async () => {

  const url = 
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY_}`;

  try {
    // We get the data from the API
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    if (!data || !data["Time Series (5min)"]) {
      throw new Error("API response structure is incorrect");
    }

    const latestTime = Object.keys(data["Time Series (5min)"])[0];
    const latestData = data["Time Series (5min)"][latestTime];

    return { latestTime, latestData };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; 
  }
};

export default fetchStockData;
