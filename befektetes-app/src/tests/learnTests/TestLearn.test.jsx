import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import Footer from "./Footer";
import Link from "./Link";

test("Megjeleníti-e a megfelelő címet?", () => {
  render(<Home title="Üdv a Befektetés Követő Appban!" />);
  expect(screen.getByText("Üdv a Befektetés Követő Appban!")).toBeInTheDocument();
});

test("Megjelenik-e a footer szöveg az app-ban?", () => {
  render(<Footer />)
  expect(screen.getByText("© 2025 Befektetéskezelő App")).toBeInTheDocument()
})

test("A link helyesen jelenik-e meg, és a megfelelő href értéket tartalmazza?", () => {
  render(<Link href={"asd"} children={"asda"}/>)

  const href = screen.getAllByAltText("asd");
  expect(href).toBeInTheDocument();

  const children = screen.getByText("asda");
  expect(children).toBeInTheDocument();
})
