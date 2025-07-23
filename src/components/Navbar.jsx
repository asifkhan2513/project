import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export function Navbar() {
  return (
    <nav className="flex justify-between sticky fixed items-center px-6 py-4 bg-blue-600 shadow-md">
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
        <Link to="/login" className="px-4 py-2 border border-white rounded">
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-white text-blue-600 rounded"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
