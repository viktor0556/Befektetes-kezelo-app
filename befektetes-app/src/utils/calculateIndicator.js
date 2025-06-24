/**
 * Calculation function for each financial indicator
 * @param {string} type - the selected indicator name
 * @param {object} inputs - all possible input values as key-value pairs
 * @returns {number|null} - the calculated value or null
 */
export function calculateIndicator(type, inputs) {
  // Helper function to avoid writing parseFloat everywhere
  const toNum = (v) => parseFloat(v);

  switch (type) {
    case "P/E":
      // Price / EPS (Earnings Per Share)
      return toNum(inputs.stockPrice) / toNum(inputs.eps);

    case "P/B":
      // Price / Book Value
      return toNum(inputs.stockPrice) / toNum(inputs.bookValue);

    case "P/S":
      // Price / Sales per Share
      return toNum(inputs.stockPrice) / toNum(inputs.ps);

    case "PEG Ratio":
      // P/E divided by Growth Rate
      return toNum(inputs.peg) / toNum(inputs.growthRate);

    case "Dividend Yield":
      // Dividend / Price * 100 (Percentage yield)
      return (toNum(inputs.dy) / toNum(inputs.stockPrice)) * 100;

    case "Debt-to-Equity Ratio":
      // Total Debt / Shareholders' Equity
      return toNum(inputs.dte) / toNum(inputs.bookValue);

    default:
      // If an unknown type is passed, return nothing
      return null;
  }
}
