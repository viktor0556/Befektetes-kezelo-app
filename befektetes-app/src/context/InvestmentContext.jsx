import React, { createContext, useContext, useEffect, useState} from 'react';

const InvestmentContext = createContext();

// This will be the "wrapper component" that provides the app with common data
export const InvestmentProvider = ({ children}) => {
  const storedInvestments = JSON.parse(localStorage.getItem("investments")) || [];
  const [investments, setInvestments] = useState(storedInvestments);

  // Save to localStorage if changes
  useEffect(() => {
    localStorage.setItem("investments", JSON.stringify(investments));
  }, [investments]);

  const addInvestment = (values) => {
    if (values.investment !== "" && values.investmentAmount > 0) {
      const newInvestment = {
        date: new Date().toLocaleDateString(),
        name: values.investment,
        amount: values.investmentAmount,
        pb: values.pb,
        ps: values.ps,
        pe: values.pe,
        peg: values.peg,
        dy: values.dy,
        dte: values.dte,
        ev: values.ev,
      };
      setInvestments((prev) => [...prev, newInvestment]);
    }
  };

  const deleteInvestment = (index) => {
    setInvestments((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteAllInvestments = () => {
    setInvestments([]);
    localStorage.removeItem("investments");
  };

  return (
    <InvestmentContext.Provider value={{ investments, addInvestment, deleteInvestment, deleteAllInvestments }}>
      {children}
    </InvestmentContext.Provider>
  );
};

// This hook will make the data available to other components.

export const useInvestments = () => useContext(InvestmentContext);