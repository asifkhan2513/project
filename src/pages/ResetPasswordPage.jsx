import React, { useState } from "react";
import { Lock } from "lucide-react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 text-black py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-10">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
            M
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Reset Your Password
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please enter your new password below
        </p>

        <form className="space-y-4">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="flex items-center border rounded-md px-3 mt-1">
              <Lock className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border-none focus:ring-0 focus:outline-none py-2"
                placeholder="••••••"
              />
              <span
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <MdOutlineRemoveRedEye className="text-gray-500" />
                ) : (
                  <FaRegEyeSlash className="text-gray-500" />
                )}
              </span>
            </div>
          </div>

          {/* Confirm New Password */}
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
                className="cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <MdOutlineRemoveRedEye className="text-gray-500" />
                ) : (
                  <FaRegEyeSlash className="text-gray-500" />
                )}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
}
