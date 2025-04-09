import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { InvestmentProvider } from "./context/InvestmentContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InvestmentProvider>
      <App />
    </InvestmentProvider>
  </StrictMode>
);
