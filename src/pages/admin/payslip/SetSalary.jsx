import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../../slices/employeeSlice";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SetSalary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployeeList());
  }, [dispatch]);

  // console.log(
  //   "i am coming from set salary",
  //   list.map((emp) => emp._id)
  // );

  // ✅ Updated to accept empId
  function handleOnClick(empId) {
    navigate(`/admin/payslip/set-salary/${empId}`);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Employees</h1>

      <div className="flex ml-[75%]">
        <div className="font-bold">Search</div>
        <span className="border m-2">
          <input placeholder="Enter Email here" />
        </span>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Employee ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Salary</th>
              <th className="px-6 py-3">Net Salary</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y bg-white">
            {list.map((emp, index) => (
              <tr key={emp._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{`#EMP${String(
                  index + 1
                ).padStart(6, "0")}`}</td>
                <td className="px-6 py-4">{emp?.personalInfo?.name ?? "-"}</td>
                <td className="px-6 py-4">{emp?.personalInfo?.email ?? "-"}</td>
                <td className="px-6 py-4">{emp?.jobInfo?.jobTitle ?? "-"}</td>
                <td className="px-6 py-4">
                  ₹{emp?.personalInfo?.salary?.toLocaleString() ?? "0.00"}
                </td>
                <td className="px-6 py-4">
                  ₹{emp?.personalInfo?.netsalary?.toLocaleString() ?? "0.00"}
                </td>
                <td className="px-6 py-4">
                  {emp?.personalInfo?.gender ?? "-"}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleOnClick(emp._id)} // ✅ Pass emp._id
                    className="p-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white transition"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SetSalary;
