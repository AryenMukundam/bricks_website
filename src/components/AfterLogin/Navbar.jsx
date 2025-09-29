import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  CreditCard,
  Gift,
  FileText,
  Package,
  TrendingUp,
  X,
  ArrowRight,
  Menu,
  User,
  LogOut,
} from "lucide-react";
import Logo from "../../assets/images/Logo.png";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="shadow-lg backdrop-blur-sm bg-white/90 sticky top-0 z-40">
        <div className="w-full py-3 px-10">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              <Link
               
                className="flex items-center space-x-3 group hover:opacity-95 transition-all duration-300"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <img
                  className="h-12 w-auto object-contain"
                  src={Logo}
                  alt="BricksEducation Logo"
                />
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide hidden sm:block">
                  <span className="text-slate-800 group-hover:text-slate-700 transition-colors">
                    Bricks
                  </span>
                  <span className="text-orange-500 group-hover:text-orange-600 transition-colors">
                    Education
                  </span>
                </h1>
              </Link>
            </div>

            {/* Right Side: Profile Icon + Logout */}
            <div className="flex items-center space-x-10">
              <Link
                to="/profile"
                className="text-lg text-gray-700 font-medium hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-700"
              >
                Profile
              </Link>
              <Link
                to="/"
                className="flex items-center space-x-2 text-lg text-gray-700 font-medium hover:text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-700"
              >
                <span>Logout</span>
                <LogOut size={15} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Sidebar Component Logic --- */}
      <aside
        className={`fixed top-0 left-0 z-50 w-90 bg-white h-screen flex flex-col border-r border-gray-200 p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col flex-grow">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="BricksEducation Logo"
                className="h-10 w-auto"
              />
              <p className="text-xl md:text-2xl font-bold tracking-wide hidden sm:block">
                  <span className="text-slate-800 group-hover:text-slate-700 transition-colors">
                    Bricks
                  </span>
                  <span className="text-orange-500 group-hover:text-orange-600 transition-colors">
                    Education
                  </span>
                </p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 mt-6">
            <a
              href="/dashboard"
              className="flex items-center space-x-4 px-4 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <Home size={24} />
              <span>Home</span>
            </a>
            <a
              href="/dashboard"
              className="flex items-center space-x-4 px-4 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <CreditCard size={24} />
              <span>Class</span>
            </a>

            <a
              href="/dashboard"
              className="flex items-center space-x-4 px-4 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <Package size={24} />
              <span>All Problems</span>
            </a>
            <a
              href="/dashboard"
              className="flex items-center space-x-4 px-4 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-red-600 rounded-lg transition-colors"
            >
              <TrendingUp size={24} />
              <span>Leaderboard</span>
            </a>
          </nav>

          {/* Referral Card */}
          {/* <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 space-y-4 text-center mt-6 overflow-hidden"> */}

            {/* Content */}
            {/* <div className="relative z-10">
            
              <h3 className="font-bold text-gray-800 text-lg">
                Share & Earn Together
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Invite friends to join your learning journey and unlock
                exclusive rewards for both of you.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 w-full hover:from-orange-600 hover:to-amber-600 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg">
                <span>Invite Friends</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div> */}

          {/* Spacer to push logout to the bottom */}
          <div className="flex-grow"></div>
        </div>

        {/* Logout Button at the bottom */}
        <div className="pt-4 border-t border-gray-200">
          <a
            href="/"
            className="flex items-center space-x-4 px-4 py-2.5 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
          >
            <LogOut size={24} />
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Overlay for when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </>
  );
}

export default Navbar;
