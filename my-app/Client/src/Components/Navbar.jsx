import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 shadow-lg p-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo + Title */}
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Portfolio Logo" className="h-10 w-10 animate-bounce" />
        <span className="text-2xl font-bold text-pink-600">My Portfolio</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-pink-100"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-teal-500 hover:text-teal-700 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-teal-100"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-yellow-500 hover:text-yellow-700 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-yellow-100"
        >
          Projects
        </Link>
        {/* Removed Education link */}
        <Link
          to="/services"
          className="text-purple-500 hover:text-purple-700 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-purple-100"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-green-500 hover:text-green-700 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-green-100"
        >
          Contact
        </Link>
        <Link
         to="/education"
         className="text-blue-500 hover:text-blue-700 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-blue-100"
        >
          Education
        </Link>

        {/* Auth Section */}
        {user ? (
          // Show when user is LOGGED IN
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
            {/* Welcome message with user avatar */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-700">Hello, {user.name}!</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
            
            {/* Dashboard/Profile Link */}
            <Link
              to="/profile"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <span>📊</span>
              <span>Dashboard</span>
            </Link>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <span>🚪</span>
              <span>Logout</span>
            </button>
          </div>
        ) : (
          // Show when user is NOT logged in
          <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-300">
            {/* Login Button */}
            <Link
              to="/signin"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <span>🔑</span>
              <span>Login</span>
            </Link>
            
            {/* Sign Up Button */}
            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <span>✨</span>
              <span>Sign Up Free</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}