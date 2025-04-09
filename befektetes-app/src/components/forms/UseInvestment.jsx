import { useState, useEffect } from "react";

const useInvestments = () => {
  const storedInvestments =
    JSON.parse(localStorage.getItem("investments")) || [];
  const [investments, setInvestments] = useState(storedInvestments);

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
      setInvestments([...investments, newInvestment]);
    }
  };

  const deleteInvestment = (index) => {
    setInvestments(investments.filter((_, i) => i !== index));
  };

  const deleteAllInvestments = () => {
    setInvestments([]);
    localStorage.removeItem("investments");
  };

  return { investments, addInvestment, deleteInvestment, deleteAllInvestments };
};

export default useInvestments;
