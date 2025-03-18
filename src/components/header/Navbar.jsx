import { Link } from "react-router-dom";

function Navbar({ className }) {
  return (
    <nav className={`${className}`}>
      <Link to="/" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
        Home
      </Link>
      <Link to="/explore" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
        Explore
      </Link>
      <Link to="/search" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
        Search
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
        About
      </Link>
    </nav>
  );
}

export default Navbar;