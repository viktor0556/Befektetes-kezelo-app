import { useState, useEffect } from "react";

const useInvestments = () => {
  const storedInvestments =
    JSON.parse(localStorage.getItem("investments")) || [];
  const [investments, setInvestments] = useState(storedInvestments);

  useEffect(() => {
    localStorage.setItem("investments", JSON.stringify(investments));
  }, [investments]);

  const addInvestment = (
    investment,
    investmentAmount,
    investmentPB,
    investmentPS,
    investmentPE,
    investmentPEG,
    investmentDY,
    investmentDTE,
    investmentEV
  ) => {
    if (investment !== "" && investmentAmount > 0) {
      const newInvestment = {
        date: new Date().toLocaleDateString(),
        name: investment,
        amount: investmentAmount,
        pb: investmentPB,
        ps: investmentPS,
        pe: investmentPE,
        peg: investmentPEG,
        dy: investmentDY,
        dte: investmentDTE,
        ev: investmentEV,
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
