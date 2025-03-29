import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import './index.css'
import ConceptFinder from "./pages/ConceptFinder";
import StockPrice from './components/stocks/StockPrice'
import IndicatorCalculations from "./pages/IndicatorCalculations";
import EconomicNews from "./components/news/EconomicNews";

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
        <Route path="economic-news" element={<EconomicNews />}/>
      </Routes>
    </Router>
  );
}

export default App;
