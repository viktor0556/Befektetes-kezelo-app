import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className='p-4 bg-gray-900 text-white shadow-md'>
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-gray-300 transition">Portfolio</Link>
        </li>
        <li>
          <Link to="/Concept-finder" className="hover:text-gray-300 transition">Concepts</Link>
        </li>
        <li>
          <Link to="/Stock-price" className="hover:text-gray-300 transition">Share price</Link>
        </li>
        <li>
          <Link to="/Indicator-calculations" className="hover:text-gray-300 transition">Pointer Calculation</Link>
        </li>
        <li>
          <Link to="/economic-news" className="hover:text-gray-300 transition">Economic news</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
