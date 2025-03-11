import React, { useEffect } from "react";
import {
  Line,
  LineChart,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useInvestments from "./UseInvestment";
import AddInvestmentForm from "./AddInvestment";

const FinancialChart = () => {
  const { investments } = useInvestments();

  useEffect(() => {}, [investments]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Portfólió</h1>
      <p>Itt látod majd az összes befektetésedet.</p>
      <p className="mb-4">
        <strong>Használati útmutató a grafikonhoz:</strong> A grafikon segít összehasonlítani a
        befektetéseidet a P/B és P/S mutatók alapján. Ha egy részvény mutatói
        túl magasak (például P/B 10 felett vagy P/S 10 felett), lehet, hogy
        túlárazott. Ha alacsonyak (például P/B 1 alatt), akkor lehet
        alulértékelt, és érdemes lehet vásárolni belőle. Az összeg vonal pedig
        segít látni, hogy hol van nagyobb kockázat a portfóliódban.
      </p>
      <AddInvestmentForm />

      {investments.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={investments}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="natural"
              dataKey="amount"
              stroke="#8884d8"
              name="Összeg (Ft)"
            />
            <Line
              type="natural"
              dataKey="pb"
              stroke="#82ca9d"
              name="P/B érték"
            />
            <Line
              type="natural"
              dataKey="ps"
              stroke="#ffc658"
              name="P/S érték"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default FinancialChart;
