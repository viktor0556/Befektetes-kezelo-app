import React, { useState } from "react";
import InvestmentForm from "./InvestmentForm";
import InvestmentList from "./InvestmentList";
import useInvestments from "./UseInvestment";

const AddInvestmentForm = () => {
  const [investment, setInvestment] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const { investments, addInvestment, deleteInvestment, deleteAllInvestments } = useInvestments();

  return (
    <>
      <InvestmentForm
        investment={investment}
        investmentAmount={investmentAmount}
        onNameChange={(e) => setInvestment(e.target.value)}
        onAmountChange={(e) => setInvestmentAmount(Number(e.target.value))}
        onSave={() => {
          addInvestment(investment, investmentAmount);
          setInvestment("");
          setInvestmentAmount(0);
        }}
      />
      <InvestmentList investments={investments} onDelete={deleteInvestment} onDeleteAll={deleteAllInvestments} />
    </>
  );
};

export default AddInvestmentForm;
