import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"; // Ensure logo.svg is in src/assets/

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 shadow-lg p-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo + Title */}
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Portfolio Logo" className="h-10 w-10 animate-bounce" />
        <span className="text-2xl font-bold text-pink-600">My Portfolio</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to="/"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-teal-400 hover:text-teal-600 transition-colors duration-300 font-medium"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 font-medium"
        >
          Projects
        </Link>
        <Link
          to="/services"
          className="text-purple-400 hover:text-purple-600 transition-colors duration-300 font-medium"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-300 font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
