/**
 * Számításokat végző függvény minden mutatóhoz
 * @param {string} type - a kiválasztott mutató neve
 * @param {object} inputs - az összes lehetséges input, kulcs-érték párokban
 * @param {number|null} - a kiszámolt érték vagy null
 */
export function calculateIndicator(type, inputs) {
  //segédfüggvény, hogy ne kelljen mindenhol parseFloat-ot írni
  const toNum = (v) => parseFloat(v);

  switch (type) {
    case "P/E":
      // ÁR / EPS (Egy részvényre jutó nyereség)
      return toNum(inputs.stockPrice) / toNum(inputs.eps);

    case "P/B":
      // Ár / Könyv szerinti érték
      return toNum(inputs.stockPrice) / toNum(inputs.bookValue);

    case "P/S":
      // ÁR / Egy részvényre jutó bevétel
      return toNum(inputs.stockPrice) / toNum(inputs.ps);

    case "PEG Ratio":
      // P/E osztva a növekedési ütemmel
      return toNum(inputs.peg) / toNum(inputs.growthRate);

    case "Dividend Yield (Osztalékhozam)":
      // Osztalék / Ár * 100 (Százalékos hozam)
      return (toNum(inputs.dy) / toNum(inputs.stockPrice)) * 100;

    case "Debt-to-Equity Ratio (Adósság/saját tőke arány)":
      // Teljes adósság / saját tőke
      return toNum(inputs.dte) / toNum(inputs.bookValue);

    default:
      // Ha ismeretlen típust kap, nem számol semmit
      return null;
  }
}