import React from "react";
import { Mail, Lock, User } from "lucide-react";
import { MdOutlineRemoveRedEye } from "react-icons/md"; // Open eye
import { FaRegEyeSlash } from "react-icons/fa6"; // Closed eye

export default function SignupPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen max-w-4xl mx-auto bg-gray-50 text-black mb-28 mt-10 rounded max-h-screen overflow-hidden shadow-lg">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 bg-orange-500 text-white flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-4 text-center">
          Create your Maazster Tech account and start managing your workforce
          efficiently.
        </p>
        <a
          href="https://maazstertech.com/"
          className="text-white underline mb-2 hover:text-orange-200"
        >
          Visit Maazster Tech
        </a>
        <p className="text-sm mt-2">Secure and reliable workforce management</p>
      </div>

      {/* Right Panel - Signup */}
      <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
              M
            </div>
          </div>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
            Maazster Tech
          </h2>
          <p className="text-center text-gray-500 mb-6">Create a new account</p>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="flex items-center border rounded-md px-3 mt-1">
                <User className="text-gray-400 w-4 h-4 mr-2" />
                <input
                  type="text"
                  className="w-full border-none focus:ring-0 focus:outline-none py-2"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center border rounded-md px-3 mt-1">
                <Mail className="text-gray-400 w-4 h-4 mr-2" />
                <input
                  type="email"
                  className="w-full border-none focus:ring-0 focus:outline-none py-2"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center border rounded-md px-3 mt-1">
                <Lock className="text-gray-400 w-4 h-4 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-none focus:ring-0 focus:outline-none py-2"
                  placeholder="••••••"
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <MdOutlineRemoveRedEye size={18} />
                  ) : (
                    <FaRegEyeSlash size={18} />
                  )}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="flex items-center border rounded-md px-3 mt-1">
                <Lock className="text-gray-400 w-4 h-4 mr-2" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full border-none focus:ring-0 focus:outline-none py-2"
                  placeholder="••••••"
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <MdOutlineRemoveRedEye size={18} />
                  ) : (
                    <FaRegEyeSlash size={18} />
                  )}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
