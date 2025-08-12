import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../slices/employeeSlice";
import { Pencil, Trash2 } from "lucide-react";

export default function Employees() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployeeList());
  }, [dispatch]);

  if (loading) return <p className="text-gray-500">Loading employees...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Employees</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs border-b">
            <tr>
              <th className="px-6 py-3">Employee ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Branch</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Designation</th>
              <th className="px-6 py-3">Date of Joining</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {list.map((emp, index) => (
              <tr key={emp._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {`#EMP${String(index + 1).padStart(6, "0")}`}
                </td>
                <td className="px-6 py-4">{emp?.personalInfo?.name ?? "-"}</td>
                <td className="px-6 py-4">{emp?.personalInfo?.email ?? "-"}</td>
                <td className="px-6 py-4">{emp?.jobInfo?.branch ?? "-"}</td>
                <td className="px-6 py-4">{emp?.jobInfo?.department ?? "-"}</td>
                <td className="px-6 py-4">
                  {emp?.jobInfo?.designation ?? "-"}
                </td>
                <td className="px-6 py-4">
                  {emp?.jobInfo?.joiningDate
                    ? new Date(emp.jobInfo.joiningDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )
                    : "-"}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="p-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white transition">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 rounded-md bg-pink-500 hover:bg-pink-600 text-white transition">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
