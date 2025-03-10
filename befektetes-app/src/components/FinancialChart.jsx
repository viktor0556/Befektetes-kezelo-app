import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const FinancialChart = ({ data }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-xl font-bold mb-4">P/B és P/S mutatók</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="P/B" fill="#82ca9d" />
          <Bar dataKey="P/S" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialChart;
