import React, { useState } from "react";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useInvestments } from "../../context/InvestmentContext"
import AddInvestmentForm from './AddInvestment'

const FinancialChart = () => {
  const [showAmount, setShowAmount] = useState(true);
  const [showPb, setShowPb] = useState(true);
  const [showPs, setShowPs] = useState(true);
  const [showPe, setShowPe] = useState(true);
  const [showPeg, setShowPeg] = useState(true);
  const [showDy, setShowDy] = useState(true);
  const [showDte, setShowDte] = useState(true);
  const [showEv, setShowEv] = useState(true);

  const { investments } = useInvestments();

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold mb-2">Befektetési portfólió</h2>
      <p className="text-gray-600 mb-4">
        Itt láthatod az összes befektetésed grafikus ábrázolását.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-2">
          Használati útmutató a grafikonhoz:
        </h3>
        <p className="text-sm text-gray-700">
          A grafikon segít összehasonlítani a befektetéseidet. Ha egy részvény{" "}
          <strong>alacsony P/B értékkel (1 alatt)</strong> rendelkezik,
          alulértékelt lehet, míg a <strong>magas értékek</strong> kockázatos
          befektetést jelezhetnek. Az <strong>összeg vonal</strong> megmutatja,
          hogy hol összpontosul nagyobb tőke a portfóliódban.
        </p>
        <div className="mb-6">
          <AddInvestmentForm />
        </div>
        <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md flex flex-wrap justify-center gap-4">
          <span className="font-semibold text-gray-700 mr-4">Mutatók:</span>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showAmount}
              onChange={() => setShowAmount(!showAmount)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-600">Összeg</span>
          </label>

          <label className="inline-flex items-center ml-4 cursor-pointer">
            <input
              type="checkbox"
              checked={showPb}
              onChange={() => setShowPb(!showPb)}
              className="form-checkbox"
            />
            <span className="ml-2">P/B mutató</span>
          </label>

          <label className="inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              checked={showPs}
              onChange={() => setShowPs(!showPs)}
              className="form-checkbox"
            />
            <span className="ml-2">P/S mutató</span>
          </label>

          <label className="inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              checked={showPe}
              onChange={() => setShowPe(!showPe)}
              className="form-checkbox"
            />
            <span className="ml-2">P/E mutató</span>
          </label>

          <label className="inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              checked={showPeg}
              onChange={() => setShowPeg(!showPeg)}
              className="form-checkbox"
            />
            <span className="ml-2">PEG Ratio</span>
          </label>

          <label className="inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              checked={showDy}
              onChange={() => setShowDy(!showDy)}
              className="form-checkbox"
            />
            <span className="ml-2">Dividend Yield</span>
          </label>

          <label className="inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              checked={showDte}
              onChange={() => setShowDte(!showDte)}
              className="form-checkbox"
            />
            <span className="ml-2">Debt-to-Equity</span>
          </label>

          <label className="inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              checked={showEv}
              onChange={() => setShowEv(!showEv)}
              className="form-checkbox"
            />
            <span className="ml-2">Debt-to-Equity</span>
          </label>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={investments}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            {showAmount && (
              <Line name="Összeg (Ft)" dataKey="amount" stroke="#8884d8" />
            )}
            {showPb && <Line name="P/B mutató" dataKey="pb" stroke="#82ca9d" />}
            {showPs && <Line name="P/S mutató" dataKey="ps" stroke="#ffc658" />}
            {showPe && <Line name="P/E mutató" dataKey="pe" stroke="#8884d8" />}
            {showPeg && (
              <Line name="PEG Ratio" dataKey="peg" stroke="#82ca9d" />
            )}
            {showDy && (
              <Line name="Dividend Yield" dataKey="dy" stroke="#ffc658" />
            )}
            {showDte && (
              <Line name="Debt-to-Equity" dataKey="dte" stroke="#8884d8" />
            )}
            {showEv && <Line name="EV/EBITDA" dataKey="ev" stroke="#82ca9d" />}
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-6 p-4 bg-white rounded-xl shadow">
          <h4 className="text-lg font-semibold mb-2">
            Használati útmutató a grafikonhoz
          </h4>
          <ul className="list-disc pl-4 text-gray-700">
            <li>A grafikon interaktívan mutatja a befektetések változását.</li>
            <li>
              Használd a vonalat az egyes befektetések kockázatának gyors
              áttekintéséhez.
            </li>
            <li>
              A befektetéseket rendszeresen frissítsd az aktuális adatokkal.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialChart;
