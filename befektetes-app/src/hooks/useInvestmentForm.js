import { useState } from "react";

const useInvestmentForm = () => {
  const [values, setValues] = useState({
    investment: "",
    investmentAmount: 0,
    pb: 0, 
    ps: 0, 
    pe: 0, 
    peg: 0, 
    dy: 0, 
    dte: 0, 
    ev: 0, 
  }); 

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const reset = () => {
    setValues({
      investment: "",
      investmentAmount: 0,
      pb: 0,
      ps: 0,
      pe: 0,
      peg: 0,
      dy: 0,
      dte: 0,
      ev: 0,
    });
  };
  

  return { values, handleChange, reset };
}

export default useInvestmentForm;