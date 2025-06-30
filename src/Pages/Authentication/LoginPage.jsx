import React, { useState } from "react";
import logo from "../../assets/img/logo.png"; // Adjust the path as necessary
import Lottie from "lottie-react";
import animationData from "../../assets/animations/login.json"; // Adjust the path as necessary
import { Link } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-32">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <div className="flex items-end mb-8">
              <img src={logo} alt="site logo" className="-mr-3" />S
              <span className="text-xl font-extrabold text-gray-900">
                ZapShift
              </span>
            </div>
          </Link>
        </div>

        {/* Login Form */}
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Login with ProFast</p>
          </div>

          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-left">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 text-sm underline"
              >
                Forget Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-3 px-4 rounded-md transition-colors duration-200"
            >
              Login
            </button>

            {/* Register Link */}
            <div className="text-sm text-gray-600">
              Don't have any account ?{" "}
              <Link
                to={"/register"}
                className="text-lime-600 hover:text-lime-700 font-medium"
              >
                Register
              </Link>
            </div>

            {/* Divider */}
            <div className="text-center text-gray-700 text-sm">Or</div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with google
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-lime-300 to-green-400 items-center justify-center relative overflow-hidden">
        <Lottie animationData={animationData} loop={false} />
      </div>
    </div>
  );
};

export default LoginPage;
