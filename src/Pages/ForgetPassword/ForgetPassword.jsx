import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/register.json";
import { Link } from "react-router"; // FIXED: was "react-router"
import VerifyCode from "./Modal/VerifyCode";
import Loading from "../../Component/Loading/Loading";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    // You can send a request here (axios/fetch)
    // Example: axios.post('/send-reset-code', { email })

    // Then show modal
    setShowVerifyModal(true);
  };

  return (
    <div
      data-aos="fade-up"
      className="min-h-screen bg-gray-50 flex items-start"
    >
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-32 py-10">
        <div className="mb-8">
          <Link to="/">
            <div className="flex items-end mb-8">
              <img src={logo} alt="site logo" className="-mr-3" />
              <span className="text-xl font-extrabold text-gray-900">
                ZapShift
              </span>
            </div>
          </Link>
        </div>

        <div className="max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password?
            </h1>
            <p className="text-gray-600">
              Don't worry, we'll help you reset your password.
            </p>
          </div>

          <form onSubmit={handleReset} className="space-y-6">
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
                placeholder="Please Type Your Email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-3 px-4 rounded-md transition-colors duration-200"
            >
              Reset Password
            </button>
          </form>
        </div>

        {/* Show modal when triggered */}
        <VerifyCode
          isOpen={showVerifyModal}
          onClose={() => setShowVerifyModal(false)}
        />
      </div>

      {/* Right side animation */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-lime-300 to-green-400 items-center justify-center h-screen relative overflow-hidden">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default ForgetPassword;
