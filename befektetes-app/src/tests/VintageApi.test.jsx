import { vi } from "vitest";
import fetchStockData from "../API/vintageApi";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200, 
    json: () =>
      Promise.resolve({
        "Time Series (5min)": {
          "2024-03-10 10:00:00": {
            "1. open": "100.00",
            "2. high": "102.00",
            "3. low": "98.00",
            "4. close": "101.00",
            "5. volume": "5000",
          },
        },
      }),
  })
);

test("Sikeresen lekérhető-e az API adat?", async () => {
  const data = await fetchStockData("IBM");

  expect(data).toBeDefined(); 
  expect(data).toHaveProperty("latestTime");
  expect(data).toHaveProperty("latestData");
  expect(data.latestData).toHaveProperty("1. open");
  expect(data.latestData["1. open"]).toBe("100.00");
});

test("Hibát dob-e, ha az API nem elérhető?", async () => {
  global.fetch.mockImplementationOnce(() =>
    Promise.reject(new Error("API hiba"))
  );

  await expect(fetchStockData("IBM")).rejects.toThrow("API hiba");
});
