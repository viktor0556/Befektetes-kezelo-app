import React from "react";
import { render, screen } from "@testing-library/react";
import InvestmentList from "../components/forms/InvestmentList";

describe("InvestmentList komponens tesztjei", () => {
  test("Megjeleníti-e a címet?", () => {
    render(<InvestmentList investments={[]} />);
    expect(screen.getByText("Nincsenek befektetések")).toBeInTheDocument();
  });

  test("Megjeleníti-e az investmenteket?", () => {
    render(
      <InvestmentList
        investments={[
          { id: 1, name: "Apple" },
          { id: 2, name: "Tesla" },
        ]}
      />
    );
  expect(screen.getByText('Apple')).toBeInTheDocument();
  expect(screen.getByText('Tesla')).toBeInTheDocument();
  });
});
