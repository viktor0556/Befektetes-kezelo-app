import { render, screen } from "@testing-library/react";
import InvestmentForm from "../components/InvestmentForm";

test("Az űrlap mezői és gombja megjelennek", () => {
  render(
    <InvestmentForm
    investment=""
    investmentAmount={0}
    onNameChange={() => {}}
    onAmountChange={() => {}}
    onSave={() => {}}
    />
  );
  const nameInput = screen.getByLabelText(/Name:/i);
  const amountInput = screen.getByLabelText(/Money:/i);
  const saveButton = screen.getByText(/Save/i);

  expect(nameInput).toBeInTheDocument();
  expect(amountInput).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
});



