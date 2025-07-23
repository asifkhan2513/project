import React from "react";
import { Lock, User } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel */}
        <div className="hidden md:flex bg-orange-500 text-white flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-4 text-center">
            Access your Excel Security dashboard to manage attendance, payroll,
            and employee data efficiently.
          </p>
          <a
            href="https://maazstertech.com/"
            className="text-white underline mb-2 hover:text-orange-200"
          >
            Visit Maazster Tech
          </a>
          <p className="text-sm mt-2 text-center">
            Secure and reliable workforce management
          </p>
        </div>

        {/* Right Panel - Login */}
        <div className="w-full bg-blue-50 flex items-center justify-center p-8">
          <div className="w-full">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                M
              </div>
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
              Maazster Tech
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Sign in to your account
            </p>

            <form className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="flex items-center border rounded-md px-3 mt-1">
                  <User className="text-blue-400 w-4 h-4 mr-2" />
                  <input
                    type="text"
                    className="w-full border-none focus:ring-0 focus:outline-none py-2"
                    placeholder="admin"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="flex items-center border rounded-md px-3 mt-1">
                  <Lock className="text-blue-400 w-4 h-4 mr-2" />
                  <input
                    type="password"
                    className="w-full border-none focus:ring-0 focus:outline-none py-2"
                    placeholder="••••••"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up here
              </a>
            </div>
            <div className="text-center text-sm text-gray-600 mt-1">
              Forgot your password?{" "}
              <a href="/reset" className="text-blue-600 hover:underline">
                Reset it here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

