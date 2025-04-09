import React from "react";
import InvestmentForm from "./InvestmentForm";
import InvestmentList from "./InvestmentList";
import { useInvestments } from "../../context/InvestmentContext"
import useInvestmentForm from "../../hooks/useInvestmentForm";

const AddInvestmentForm = () => {
  const { values, handleChange, reset } = useInvestmentForm();
  const { investments, addInvestment, deleteInvestment, deleteAllInvestments } =
    useInvestments();

  return (
    <>
      <InvestmentForm
        values={values}
        onChange={handleChange}
        onSave={() => {
          addInvestment(values);
          reset();
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
