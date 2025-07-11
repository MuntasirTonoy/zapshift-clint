import logo from "../../assets/img/logo.png"; // Adjust the path as necessary
import Lottie from "lottie-react";
import animationData from "../../assets/animations/register.json"; // Adjust the path as necessary
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, user, signInWithGoogle, updateUserProfile, loading } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    try {
      await createUser(data.email, data.password);
      updateUserProfile(data.name);

      // Only runs if no errors
    } catch (error) {
      console.error("Handler error (optional):", error); // Extra logging if needed
    } finally {
      navigate("/sign-in");
      console.log(user);
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Sign in Successfull",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle(); // Calls the context method
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Sign in Successfull",
        showConfirmButton: false,
        timer: 2000,
      });
      // Only runs if no errors
    } catch (error) {
      console.error("Handler error (optional):", error); // Extra logging if needed
    }
  };
  return (
    <div data-aos="fade-up" className="min-h-screen bg-gray-50 flex">
      {/* Left side - Registration Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-32">
        {/* Header */}
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

        {/* Registration Form */}
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create an Account
            </h1>
            <p className="text-gray-600">Register with ZapShift</p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            {/* name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: true,
                  maxLength: 50,
                  minLength: 3,
                  pattern: /^[A-Za-z\s]+$/,
                })}
                type="text"
                placeholder="Name"
                className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
              {errors.name && errors.name.type === "required" && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  Name must be at least 3 characters
                </p>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <p className="text-red-500 text-sm mt-1">
                  Name must be at most 50 characters
                </p>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <p className="text-red-500 text-sm mt-1">
                  Name must only contain letters and spaces
                </p>
              )}
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                type="email"
                placeholder="Email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-red-500 text-sm mt-1">Email is not valid</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[42px] text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && errors.password.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must contain at least one letter and one number
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold py-3 px-4 rounded-md transition-colors duration-200"
            >
              Register
            </button>

            {/* Register Link */}
            <div className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to={"/sign-in"}
                className="text-lime-600 hover:text-lime-700 font-medium"
              >
                Sign In
              </Link>
            </div>

            {/* Divider */}
            <div className="text-center text-gray-700 text-sm">Or</div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
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
          </form>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-lime-300 to-green-400 items-center justify-center relative overflow-hidden">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default RegisterPage;
