import React from "react";
import { Plus } from "lucide-react";

const EmployeeSetSalary = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <span className="text-gray-900 font-medium">Employee Set Salary</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employee Salary Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Employee Salary</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
              <Plus size={18} />
            </button>
          </div>
          <div className="space-y-2">
            <p>
              <strong>Payslip Type:</strong> Salary Slip
            </p>
            <p>
              <strong>Account Type:</strong> Vmart
            </p>
            <p>
              <strong>Salary:</strong> ₹9325
            </p>
          </div>
        </div>

        {/* Allowance Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Allowance</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Allowance Option</th>
                  <th className="px-4 py-2">Title</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">SARVESH KUMAR YADAV</td>
                  <td className="px-4 py-2">Non Taxable</td>
                  <td className="px-4 py-2">Mobile</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">SARVESH KUMAR YADAV</td>
                  <td className="px-4 py-2">Non Taxable</td>
                  <td className="px-4 py-2">Special Allowance HRA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Commission Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Commission</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">SARVESH KUMAR YADAV</td>
                  <td className="px-4 py-2">Bonus</td>
                  <td className="px-4 py-2">Percentage</td>
                  <td className="px-4 py-2">8.33% (₹776.77)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Loan Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Loan</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee</th>
                  <th className="px-4 py-2">Loan Options</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Loan Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">SARVESH KUMAR YADAV</td>
                  <td className="px-4 py-2">Home Loan</td>
                  <td className="px-4 py-2">House</td>
                  <td className="px-4 py-2">Monthly</td>
                  <td className="px-4 py-2">₹20,000</td>
                  <td className="px-4 py-2">Edit | Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Saturation Deduction*/}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Saturation Deduction</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">SARVESH KUMAR YADAV</td>
                  <td className="px-4 py-2">Bonus</td>
                  <td className="px-4 py-2">Percentage</td>
                  <td className="px-4 py-2">8.33% (₹776.77)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Other Payment */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Other Payment</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded">
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2"> Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">SARVESH KUMAR YADAV</td>
                  <td className="px-4 py-2">Home </td>
                  <td className="px-4 py-2">House</td>
                  <td className="px-4 py-2">Monthly</td>
                  <td className="px-4 py-2">₹20,000</td>
                  <td className="px-4 py-2">Edit | Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSetSalary;
