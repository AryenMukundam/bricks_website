import React from "react";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 group hover:opacity-95 transition-all duration-300"
          >
            <img
              className="w-7 h-7 object-contain drop-shadow-sm"
              src={logo}
              alt="BricksEducation Logo"
            />
            <h1 className="text-xl font-bold tracking-wide">
              <span className="text-slate-800 group-hover:text-slate-700 transition-colors">
                Bricks
              </span>
              <span className="text-orange-500 group-hover:text-orange-600 transition-colors">
                Education
              </span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            <Link
              to="/about"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-700"
            >
              About
            </Link>
            <Link
              to="/workshop"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-700"
            >
              Workshops
            </Link>
            <Link
              to="/curriculum"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-700"
            >
              Curriculum
            </Link>

            {/* Contact Button */}

            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#ff7b00] to-[#ff4500] text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
