import React from "react";

export default function Overview() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>
      <p className="mt-2 text-lg text-gray-600 antialiased leading-relaxed">
        Welcome to your dashboard. Here is a summary of recent activity.
      </p>
      <div className="mt-6 ">
        {/* You can add additional content here, such as cards or charts */}
      </div>
    </div>
  );
}
