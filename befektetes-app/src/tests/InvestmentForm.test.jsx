import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InvestmentForm from "../components/forms/InvestmentForm";

describe("InvestmentForm komponens tesztjei", () => {
  test("Az input mező és gomb megjelenik-e", () => {
    render(<InvestmentForm addInvestment={() => {}} />);
    expect(screen.getByPlaceholderText("Investment Name")).toBeInTheDocument();
    expect(screen.getByText("Mentés")).toBeInTheDocument();
  });

  test("Működik-e a teljes form küldése minden paraméterrel?", () => {
    const mockAddInvestment = vi.fn();
    render(
      <InvestmentForm
        investment=""
        investmentAmount={0}
        investmentPB={0}
        investmentPS={0}
        investmentPE={0}
        investmentPEG={0}
        investmentDY={0}
        investmentDTE={0}
        investmentEV={0}
        onNameChange={() => {}}
        onAmountChange={() => {}}
        onPbChange={() => {}}
        onPsChange={() => {}}
        onPeChange={() => {}}
        onPegChange={() => {}}
        onDyChange={() => {}}
        onDteChange={() => {}}
        onEvChange={() => {}}
        onSave={() =>
          mockAddInvestment("Google", 1000, 1.2, 1.3, 20, 2.1, 3, 0.5, 10.5)
        }
      />
    );

    const inputName = screen.getByPlaceholderText("Investment Name");
    const inputAmount = screen.getByPlaceholderText("Investment Amount");
    const inputPB = screen.getByPlaceholderText("PB");
    const inputPS = screen.getByPlaceholderText("PS");
    const inputPE = screen.getByPlaceholderText("PE");
    const inputPEG = screen.getByPlaceholderText("PEG Ratio");
    const inputDY = screen.getByPlaceholderText("Divined Yield");
    const inputDTE = screen.getByPlaceholderText("Debt to Equity");
    const inputEV = screen.getByPlaceholderText("EV/EBITDA");
    const button = screen.getByText("Mentés");

    fireEvent.change(inputName, { target: { value: "Google" } });
    fireEvent.change(inputAmount, { target: { value: "1000" } });
    fireEvent.change(inputPB, { target: { value: "1.2" } });
    fireEvent.change(inputPS, { target: { value: "1.3" } });
    fireEvent.change(inputPE, { target: { value: "20" } });
    fireEvent.change(inputPEG, { target: { value: "2.1" } });
    fireEvent.change(inputDY, { target: { value: "3" } });
    fireEvent.change(inputDTE, { target: { value: "0.5" } });
    fireEvent.change(inputEV, { target: { value: "10.5" } });

    fireEvent.click(button);

    expect(mockAddInvestment).toHaveBeenCalledWith(
      "Google",
      1000,
      1.2,
      1.3,
      20,
      2.1,
      3,
      0.5,
      10.5
    );
  
    expect(inputName.value).toBe('');
  });
});
