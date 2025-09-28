import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; 

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-900 border text-white px-6 py-3 flex items-center justify-between">
      {/* Left - Logo */}
      <Link to="/">
        <div>
          <img src="/image.png" alt="logo" className="h-12 w-24 object-contain" />
        </div>
      </Link>

      {/* Center - Search bar */}
      <div className="flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none"
        />
      </div>

      {/* Right - Auth Button */}
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            {/* User Icon */}
            <FaUserCircle className="text-2xl" />
            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to={location.pathname === "/login" ? "/signup" : "/login"}
            className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-700"
          >
            {location.pathname === "/login" ? "Signup" : "Login"}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
