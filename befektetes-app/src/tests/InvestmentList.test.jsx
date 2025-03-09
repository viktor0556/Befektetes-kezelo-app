import { fireEvent, render, screen } from "@testing-library/react";
import InvestmentList from "../components/InvestmentList";
import { useState } from "react";
import InvestmentForm from "../components/InvestmentForm";

test("Befektetések megjelennek a listában", () => {
  const investments = [
    { date: "2025-12-20", name: "Tesla", amount: 1000 },
    { date: "2025-12-20", name: "Bitcoin", amount: 1000 },
  ];

  render(<InvestmentList investments={investments} onDelete={() => {}} />);

  expect(screen.getByText(/Tesla/i)).toBeInTheDocument();
  expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
});

test("Befektetés törlése", () => {
  const investments = [{ date: "2024-03-04", name: "Tesla", amount: 1000 }];

  const mockDelete = vi.fn();

  render(
    <InvestmentList
      investments={investments}
      onDelete={mockDelete}
      onDeleteAll={() => {}}
    />
  );

  // Delete Button
  const deleteButton = screen.getByText(/Delete Investment/i);
  fireEvent.click(deleteButton);

  expect(mockDelete).toHaveBeenCalledTimes(1);
});

test("Megjelenik-e az `Investment List` cím?", () => {
  const investments = [{ date: "2025-12-30", name: "Bitcoin", amount: 1012 }];

  render(
    <InvestmentList
      investments={investments}
      onDelete={() => {}}
      onDeleteAll={() => {}}
    />
  );

  const title = screen.getByText(/Investment List/i);

  expect(title).toBeInTheDocument();
});

test("Üres lista esetén megjelenik-e a `Nincsenek befektetések` cím?", () => {
  render(
    <InvestmentList
      investments={[]}
      onDelete={() => {}}
      onDeleteAll={() => {}}
    />
  );

  const title = screen.getByText(/Nincsenek befektetések/i);

  expect(title).toBeInTheDocument();
});

test("Megjelenik-e ténylegesen ha van egy befektetés?", () => {
  const investments = [{ date: "2025-12-30", name: "BMW", amount: 2024 }];

  render(<InvestmentList investments={investments} />);

  const investmentName = screen.getByText(/BMW/);
  const investmentAmount = screen.getByText(/2024/);

  expect(investmentAmount).toBeInTheDocument();
  expect(investmentName).toBeInTheDocument();
});

test("Ha a befektetés törlődik, eltűnik-e a listából és üres lesz a lista?", () => {
  const TestComponent = () => {
    // Test component
    const [investments, setInvestments] = useState([
      { date: "2024-03-04", name: "Tesla", amount: 1000 },
      { date: "2025-03-04", name: "Bitcoin", amount: 10000 },
    ]);

    return (
      <InvestmentList
        investments={investments}
        onDelete={() => {}}
        onDeleteAll={() => setInvestments([])} // Real delete!
      />
    );
  };

  // Render test component
  render(<TestComponent />);

  // Check if Tesla and Bitcoin appear in the initial state
  expect(screen.getByText(/Tesla/i)).toBeInTheDocument();
  expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();

  // Search the delete button
  const deleteButton = screen.getByText(/Delete all Investments/i);
  fireEvent.click(deleteButton);

  // Check that none of the investments are already in the list.
  expect(screen.queryByText(/Tesla/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Bitcoin/i)).not.toBeInTheDocument();

  // Check that the text "No investments" appears
  expect(screen.getByText(/Nincsenek befektetések/i)).toBeInTheDocument();
});

test("Ha hozzáadok egy egy befektetést, az megjelenik-e a listában?", () => {
  const TestComponent = () => {
    const [investment, setInvestment] = useState("");
    const [investmentAmount, setInvestmentAmount] = useState("");
    const [investments, setInvestments] = useState([]);

    const handleSave = () => {
      setInvestments([
        ...investments,
        { name: investment, amount: investmentAmount },
      ]);
    };

    return (
      <>
        <InvestmentForm
          investment={investment}
          investmentAmount={investmentAmount}
          onNameChange={(e) => setInvestment(e.target.value)}
          onAmountChange={(e) => setInvestmentAmount(e.target.value)}
          onSave={handleSave}
        />
        <InvestmentList
          investments={investments}
          onDelete={() => {}}
          onDeleteAll={() => {}}
        />
      </>
    );
  };

  render(<TestComponent />);

  // Select an input field
  const nameInput = screen.getByLabelText(/Name:/i);
  const amountInput = screen.getByLabelText(/Money:/i);
  const saveButton = screen.getByText(/Save/i);

  // Enter an investment name and amount
  fireEvent.change(nameInput, { target: { value: "Bitcoin" } });
  fireEvent.change(amountInput, { target: { value: "1000" } });

  // Click Save button
  fireEvent.click(saveButton);

  // Check if list element appear
  expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
  expect(screen.getByText(/1000/i)).toBeInTheDocument();
});
