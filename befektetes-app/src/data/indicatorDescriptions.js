const indicatorDescriptions = {
  "P/E": {
    explanation:
      "The P/E ratio (Price-to-Earnings) shows how many times the stock price is compared to the earnings per share (EPS).",
    interpretation: [
      "If it's high (30+), the stock may be considered expensive and backed by strong growth expectations.",
      "If it's low (10-20), the stock might be cheaper, but it's important to also consider the company's future outlook.",
      "Very low values (e.g., below 5) may indicate that the market lacks confidence in the company's growth.",
    ],
  },
  "P/B": {
    explanation:
      "The P/B ratio (Price-to-Book) shows how the stock price compares to the company's book value.",
    interpretation: [
      "If it's below 1, the stock may be undervalued, as the company's assets are worth more than its total market value.",
      "If it's above 1, the market values the company higher — but if it's too high (10+), the stock may be overvalued.",
    ],
  },
  "P/S": {
    explanation:
      "The P/S (Price-to-Sales) ratio shows how the stock price relates to the company's annual revenue per share.",
    interpretation: [
      "A low value (below 1) is favorable and may indicate undervaluation.",
      "A high value (10+) reflects strong growth expectations but may also signal overvaluation.",
    ],
  },
  "PEG Ratio": {
    explanation:
      "The PEG ratio shows how well the P/E value aligns with the company's expected growth rate.",
    interpretation: [
      "A PEG below 1 indicates potential undervaluation.",
      "A PEG above 1 reflects high growth expectations and could mean the stock is expensive.",
    ],
  },
  "Dividend Yield": {
    explanation:
      "Dividend yield shows what percentage of the current stock price is paid out as annual dividends.",
    interpretation: [
      "High yield (5%+) may be attractive for income-seeking investors.",
      "Low yield is typical for growth stocks.",
    ],
  },
  "Debt-to-Equity Ratio": {
    explanation:
      "This ratio indicates the company's financial stability and level of indebtedness.",
    interpretation: [
      "A high ratio (2+) could be risky and may indicate excessive debt.",
      "A low ratio (below 1) suggests a stable financial position.",
    ],
  },
  "EV/EBITDA": {
    explanation:
      "The EV/EBITDA ratio shows how the company's enterprise value compares to its annual operating earnings (EBITDA).",
    interpretation: [
      "A low value (below 10) may be favorable and suggest undervaluation.",
      "A high value (20+) reflects strong market expectations and may indicate the stock is expensive.",
    ],
  },
};

export default indicatorDescriptions;
