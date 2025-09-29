import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../assets/images/Logo.png"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/BeforeLogin/Navbar";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "jhatujhakar@gmail.com" && password === "696969") {
            console.log("Login successful:", { email, password });
            resolve();
          } else {
            reject(new Error("Invalid email or password."));
          }
        }, 2000);
      });
      navigate('/dashboard')
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#fff8f2] flex items-center justify-center p-4">
      <div className="grid md:grid-cols-2 max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 p-12 text-white rounded-tr-[5rem] rounded-br-[5rem]">
          
          <h1 className="text-4xl font-bold mb-3">Welcome Back!</h1>
          <p className="text-center text-lg opacity-90">
            Sign in to access your dashboard.
          </p>
        </div>

        <div className="p-8 md:p-12 w-full">
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="Company Logo" className="w-24 h-auto rounded-md" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="text-orange-600">Student</span> Login
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FiMail />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FiLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-12 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            
            <div className="text-right">
              <a href="#" className="text-sm text-orange-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 disabled:bg-orange-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing In...</span>
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;

