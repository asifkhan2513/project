
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../slices/employeeSlice";
import { markAttendance, setLocalAttendanceStatus } from "../../slices/attendanceSlice";

export default function Attendance() {
  const dispatch = useDispatch();

  // SAFE selectors with fallbacks to avoid "destructure of undefined"
  const {
    list: employees = [],
    loading: employeesLoading = false,
    error: employeesError = null,
  } = useSelector((state) => state.employees ?? {});

  const { saving = false, error: attendanceError = null } = useSelector(
    (state) => state.attendance ?? {}
  );

  // Local UI state for the dropdowns + per-row response messages
  const [attendanceData, setAttendanceData] = useState({});
  const [rowMsg, setRowMsg] = useState({}); // { [employeeId]: "Saved!" | "Error ..." }

  // Fetch employees on mount
  useEffect(() => {
    dispatch(fetchEmployeeList());
  }, [dispatch]);

  // Initialize defaults to "Present" once employees arrive
  useEffect(() => {
    if (employees.length > 0) {
      setAttendanceData((prev) => {
        const next = { ...prev };
        employees.forEach((emp) => {
          const id = emp?._id;
          if (id && !next[id]) next[id] = "Present";
        });
        return next;
      });
    }
  }, [employees]);

  const handleStatusChange = (empId, status) => {
    setAttendanceData((prev) => ({ ...prev, [empId]: status }));
    // If you want to also store locally in attendance reducer, add a reducer like:
    dispatch(setLocalAttendanceStatus({ employeeId: empId, status }));
  };

  const handleSubmitRow = async (empId) => {
    const status = attendanceData[empId] || "Present";

    // Build payload your backend expects (tweak if your API needs date/other fields)
    const payload = { employeeId: empId, status };

    try {
      const resultAction = dispatch(markAttendance(payload));
      if (markAttendance.fulfilled.match(resultAction)) {
        setRowMsg((m) => ({ ...m, [empId]: "Saved successfully" }));
      } else {
        const msg = resultAction.payload || "Failed to save attendance";
        setRowMsg((m) => ({ ...m, [empId]: msg }));
      }
    } catch (e) {
      setRowMsg((m) => ({ ...m, [empId]: "Unexpected error" }));
      console.log(e.meesage);
    }
  };

  if (employeesLoading) {
    return <p className="p-4 text-gray-600">Loading employees…</p>;
  }

  if (employeesError) {
    return (
      <div className="p-4 text-red-600">
        Failed to load employees: {String(employeesError)}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium text-gray-900 mb-2">
        Attendance Records
      </h1>
      <p className="mb-6 text-gray-600">
        Set today’s status for each employee and save.
      </p>

      {attendanceError && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700">
          {String(attendanceError)}
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 uppercase text-xs border-b">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
              <th className="px-6 py-3">Response</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((emp, idx) => {
                const id = emp?._id;
                const name =
                  emp?.personalInfo?.name ?? emp?.fullName ?? emp?.name ?? "—";
                const email = emp?.personalInfo?.email ?? emp?.email ?? "—";
                const current = attendanceData[id] || "Present";

                return (
                  <tr key={id || idx} className="hover:bg-gray-50">
                    <td className="px-6 py-3">{idx + 1}</td>
                    <td className="px-6 py-3">{name}</td>
                    <td className="px-6 py-3">{email}</td>
                    <td className="px-6 py-3">
                      <select
                        value={current}
                        onChange={(e) => handleStatusChange(id, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Leave">Leave</option>
                        <option value="Half">Half</option>
                        <option value="Weekend">Weekend</option>
                        <option value="Holiday">Holiday</option>
                      </select>
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleSubmitRow(id)}
                        disabled={saving || !id}
                        className={`px-4 py-1 rounded text-white ${
                          saving
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        {saving ? "Saving…" : "Save"}
                      </button>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm">{rowMsg[id] ?? ""}</span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
