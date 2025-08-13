
import React, { useState, useEffect } from "react";

const Payslip = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsArray = [];

    // Generate years from (current year - 5) to (current year + 5)
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      yearsArray.push(year);
    }

    setYears(yearsArray);
  }, []);

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        Dashboard &gt;{" "}
        <span className="text-gray-700 font-medium">Payslip</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-4">Manage Payslip</h1>

      {/* Card */}
      <div className="bg-white shadow rounded-lg p-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Month
            </label>
            <select className="mt-1 block w-28 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>JAN</option>
              <option>FEB</option>
              <option>MAR</option>
              <option>APR</option>
              <option>MAY</option>
              <option>JUN</option>
              <option>JUL</option>
              <option>AUG</option>
              <option>SEP</option>
              <option>OCT</option>
              <option>NOV</option>
              <option>DEC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <select className="mt-1 block w-28 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Bulk Payment
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border">EMPLOYEE ID</th>
                <th className="px-4 py-2 border">NAME</th>
                <th className="px-4 py-2 border">PAYROLL TYPE</th>
                <th className="px-4 py-2 border">SALARY</th>
                <th className="px-4 py-2 border">NET SALARY</th>
                <th className="px-4 py-2 border">STATUS</th>
                <th className="px-4 py-2 border">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">
                  No entries found
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 mt-4">
          Showing 1 to 1 of 1 entries
        </div>
      </div>
    </div>
  );
};

export default Payslip;
