import React, { useState } from "react";
import InvestmentForm from "./InvestmentForm";
import InvestmentList from "./InvestmentList";
import useInvestments from "./UseInvestment";

const AddInvestmentForm = () => {
  const [investment, setInvestment] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [pb, setPb] = useState(0);
  const [ps, setPs] = useState(0);
  const [pe, setPe] = useState(0);
  const [peg, setPeg] = useState(0);
  const [dy, setDy] = useState(0);
  const [dte, setDte] = useState(0);
  const [ev, setEv] = useState(0);
  const { investments, addInvestment, deleteInvestment, deleteAllInvestments } =
    useInvestments();

    

  return (
    <>
      <InvestmentForm
        investment={investment}
        investmentAmount={investmentAmount}
        investmentPB={pb}
        investmentPS={ps}
        investmentPE={pe}
        investmentPEG={peg}
        investmentDY={dy}
        investmentDTE={dte}
        investmentEV={ev}
        onNameChange={(e) => setInvestment(e.target.value)}
        onAmountChange={(e) => setInvestmentAmount(Number(e.target.value))}
        onPbChange={(e) => setPb(Number(e.target.value))}
        onPsChange={(e) => setPs(Number(e.target.value))}
        onPeChange={(e) => setPe(Number(e.target.value))}
        onPegChange={(e) => setPeg(Number(e.target.value))}
        onDyChange={(e) => setDy(Number(e.target.value))}
        onDteChange={(e) => setDte(Number(e.target.value))}
        onEvChange={(e) => setEv(Number(e.target.value))}
        onSave={() => {
          addInvestment(investment, investmentAmount, pb, ps, pe, peg, dy, dte, ev);
          setInvestment("");
          setInvestmentAmount(0);
          setPb(0);
          setPs(0);
          setPe(0);
          setPeg(0);
          setDy(0);
          setDte(0);
          setEv(0);
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
