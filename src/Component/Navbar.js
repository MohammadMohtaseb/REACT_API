import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">My Website</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/weather" className="text-white hover:underline">
              Weather
            </Link>
          </li>
          <li>
            <Link to="/movies" className="text-white hover:underline">
              Movie List
            </Link>
          </li>
          
          <li>
            <Link to="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="text-white hover:underline">
              Recipes
            </Link>
          </li>
          <li>
          <Link to="/notes" className="text-white hover:underline">
            Notes
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
