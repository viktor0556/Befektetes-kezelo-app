import React, { useState } from "react";
import InvestmentForm from "./InvestmentForm";
import InvestmentList from "./InvestmentList";
import useInvestments from "./UseInvestment";

const AddInvestmentForm = () => {
  const [investment, setInvestment] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [pb, setPb] = useState(0);
  const [ps, setPs] = useState(0);
  const { investments, addInvestment, deleteInvestment, deleteAllInvestments } =
    useInvestments();

  return (
    <>
      <InvestmentForm
        investment={investment}
        investmentAmount={investmentAmount}
        investmentPB={pb}
        investmentPS={ps}
        onNameChange={(e) => setInvestment(e.target.value)}
        onAmountChange={(e) => setInvestmentAmount(Number(e.target.value))}
        onPbChange={(e) => setPb(Number(e.target.value))}
        onPsChange={(e) => setPs(Number(e.target.value))}
        onSave={() => {
          addInvestment(investment, investmentAmount, pb, ps);
          setInvestment("");
          setInvestmentAmount(0);
          setPb(0);
          setPs(0);
        }}
      />
      <InvestmentList
        investments={investments}
        onDelete={deleteInvestment}
        onDeleteAll={deleteAllInvestments}
      />
    </>
  );
};

export default AddInvestmentForm;
