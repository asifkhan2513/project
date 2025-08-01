import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    // Outer div for background color and potential spacing (optional)
    <div className="bg-blue-600">
      <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-blue-600 shadow-md">
        <Link to="/" className="text-2xl font-bold hover:underline">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/how-it-works">How it Works</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-3">
          {user ? (
            <Link
              to="/"
              onClick={handleLogout}
              className="px-4 py-2 border border-white rounded"
            >
              Logout
            </Link>
          ) : (
            <Link to="/login" className="px-4 py-2 border border-white rounded">
              Login
            </Link>
          )}
          <Link
            to="/signup"
            className="px-4 py-2 bg-white text-blue-600 rounded"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
