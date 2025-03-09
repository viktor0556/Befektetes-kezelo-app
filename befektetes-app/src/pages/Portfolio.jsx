import AddInvestment from "../components/AddInvestment";

function Portfolio() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Portfólió</h1>
      <p>Itt látod majd az összes befektetésedet.</p>
      <AddInvestment/>
    </div>
  );
}

export default Portfolio;
