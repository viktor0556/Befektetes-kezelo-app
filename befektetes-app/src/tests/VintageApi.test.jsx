import { vi } from "vitest";
import fetchStockData from "../API/vintageApi";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        "Time Series (5min)": {
          "2024-03-15 14:00:00": {
            "1. open": "150.00",
            "2. high": "155.00",
            "3. low": "148.00",
            "4. close": "152.00",
          },
        },
      }),
  })
);

test("fetchStockData lekéri az adatokat", async () => {
  const data = await fetchStockData("AAPL");

  expect(fetch).toHaveBeenCalled();
  expect(data).toHaveProperty("chartData");
  expect(data.chartData.length).toBeGreaterThan(0);
  expect(data.chartData[0]).toHaveProperty("time");
  expect(data.chartData[0]).toHaveProperty("price");
});
