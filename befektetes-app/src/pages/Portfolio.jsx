import AddInvestment from "../components/AddInvestment";
import StockPrice from "../components/StockPrice";

function Portfolio() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Portfólió</h1>
      <p>Itt látod majd az összes befektetésedet.</p>
      <AddInvestment/>
      <StockPrice/>
    </div>
  );
}

export default Portfolio;
