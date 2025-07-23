import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen text-black py-10 px-4 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white p-6 sm:p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-8">
          Contact Us
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="+91 9999999999"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Maazster Tech Pvt. Ltd."
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Inquiry / Support / Feedback"
            />
          </div>

          {/* Preferred Contact Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Preferred Contact Time
            </label>
            <select className="w-full p-3 border rounded-lg bg-white text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option value="">Select time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Tell us about your query..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
