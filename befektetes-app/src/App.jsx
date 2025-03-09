import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import './index.css'
import ConceptFinder from "./pages/ConceptFinder";
import StockPrice from './components/StockPrice'
import IndicatorCalculations from "./pages/IndicatorCalculations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Indicator-calculations" element={<IndicatorCalculations />}/>
        <Route path="/Stock-price" element={<StockPrice />}/>
        <Route path="/Concept-finder" element={<ConceptFinder />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
