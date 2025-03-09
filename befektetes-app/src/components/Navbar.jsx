import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className='p-4 bg-gray-900 text-white shadow-md'>
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300 transition">Főoldal</Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-gray-300 transition">Portfólió</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
