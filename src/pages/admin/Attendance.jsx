// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEmployeeList } from "../../slices/employeeSlice";
// import {
//   markAttendance,
//   setLocalAttendanceStatus,
// } from "../../slices/attendanceSlice";

// export default function Attendance() {
//   const dispatch = useDispatch();

//   // SAFE selectors with fallbacks to avoid "destructure of undefined"
//   const {
//     list: employees = [],
//     loading: employeesLoading = false,
//     error: employeesError = null,
//   } = useSelector((state) => state.employees ?? {});

//   const { saving = false, error: attendanceError = null } = useSelector(
//     (state) => state.attendance ?? {}
//   );

//   // Local UI state for the dropdowns + per-row response messages
//   const [attendanceData, setAttendanceData] = useState({});
//   const [rowMsg, setRowMsg] = useState({}); // { [employeeId]: "Saved!" | "Error ..." }

//   useEffect(() => {
//     dispatch(fetchEmployeeList());
//   }, [dispatch]);

//   // Initialize defaults to "Present" once employees arrive
//   useEffect(() => {
//     if (employees.length > 0) {
//       setAttendanceData((prev) => {
//         const next = { ...prev };
//         employees.forEach((emp) => {
//           const id = emp?._id;
//           if (id && !next[id]) next[id] = "Present";
//         });
//         return next;
//       });
//     }
//   }, [employees]);

//   const handleStatusChange = (empId, status) => {
//     setAttendanceData((prev) => ({ ...prev, [empId]: status }));
//     console.log("this is ", empId);

//     // If you want to also store locally in attendance reducer, add a reducer like:
//     dispatch(setLocalAttendanceStatus({ employeeId: empId, status }));
//   };

//   const handleSubmitRow = async (empId) => {
//     const status = attendanceData[empId] || "Present";

//     // Build payload your backend expects (tweak if your API needs date/other fields)
//     const payload = { employeeId: empId, status };

//     try {
//       const resultAction = dispatch(markAttendance(payload));

//       if (markAttendance.fulfilled.match(resultAction)) {
//         setRowMsg((m) => ({ ...m, [empId]: "Saved successfully" }));
//       } else {
//         const msg = resultAction.payload || "Failed to save attendance";
//         setRowMsg((m) => ({ ...m, [empId]: msg }));
//       }
//     } catch (e) {
//       setRowMsg((m) => ({ ...m, [empId]: "Unexpected error" }));
//       console.log(e.meesage);
//     }
//   };

//   if (employeesLoading) {
//     return <p className="p-4 text-gray-600">Loading employees…</p>;
//   }

//   if (employeesError) {
//     return (
//       <div className="p-4 text-red-600">
//         Failed to load employees: {String(employeesError)}
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-medium text-gray-900 mb-2">
//         Attendance Records
//       </h1>
//       <p className="mb-6 text-gray-600">
//         Set today’s status for each employee and save.
//       </p>

//       {attendanceError && (
//         <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700">
//           {String(attendanceError)}
//         </div>
//       )}

//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//         <table className="min-w-full text-sm text-left text-gray-700">
//           <thead className="bg-gray-100 uppercase text-xs border-b">
//             <tr>
//               <th className="px-6 py-3">ID</th>
//               <th className="px-6 py-3">Name</th>
//               <th className="px-6 py-3">Email</th>
//               <th className="px-6 py-3">Status</th>
//               <th className="px-6 py-3">Action</th>
//               <th className="px-6 py-3">Response</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {employees.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
//                   No employees found.
//                 </td>
//               </tr>
//             ) : (
//               employees.map((emp, idx) => {
//                 const id = emp?._id;
//                 const name =
//                   emp?.personalInfo?.name ?? emp?.fullName ?? emp?.name ?? "—";
//                 const email = emp?.personalInfo?.email ?? emp?.email ?? "—";
//                 const current = attendanceData[id] || "Present";

//                 return (
//                   <tr key={id || idx} className="hover:bg-gray-50">
//                     <td className="px-6 py-3">{idx + 1}</td>
//                     <td className="px-6 py-3">{name}</td>
//                     <td className="px-6 py-3">{email}</td>
//                     <td className="px-6 py-3">
//                       <select
//                         value={current}
//                         onChange={(e) => handleStatusChange(id, e.target.value)}
//                         className="border rounded px-2 py-1"
//                       >
//                         <option value="Present">Present</option>
//                         <option value="Absent">Absent</option>
//                         <option value="Leave">Leave</option>
//                         <option value="Half">Half</option>
//                         <option value="Weekend">Weekend</option>
//                         <option value="Holiday">Holiday</option>
//                       </select>
//                     </td>
//                     <td className="px-6 py-3">
//                       <button
//                         onClick={() => handleSubmitRow(id)}
//                         disabled={saving || !id}
//                         className={`px-4 py-1 rounded text-white ${
//                           saving
//                             ? "bg-gray-400 cursor-not-allowed"
//                             : "bg-blue-600 hover:bg-blue-700"
//                         }`}
//                       >
//                         {saving ? "Saving…" : "Save"}
//                       </button>
//                     </td>
//                     <td className="px-6 py-3">
//                       <span className="text-sm">{rowMsg[id] ?? ""}</span>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEmployeeList } from "../../slices/employeeSlice";
// import {
//   markAttendance,
//   fetchTodayAttendance, // ✨ IMPORT this action
// } from "../../slices/attendanceSlice";

// const Attendance = () => {
//   const dispatch = useDispatch();

//   // --- Selectors for Employees ---
//   const {
//     list: employees = [],
//     loading: employeesLoading = false,
//     error: employeesError = null,
//   } = useSelector((state) => state.employees ?? {});

//   // --- ✨ NEW: Selectors for Today's Attendance ---
//   const {
//     todayList: todayAttendance = [],
//     loading: attendanceLoading = false,
//     error: attendanceError = null,
//   } = useSelector((state) => state.attendance ?? {});

//   // --- Local UI State ---
//   const [attendanceData, setAttendanceData] = useState({});
//   const [rowMsg, setRowMsg] = useState({}); // { [employeeId]: "Saved!" | "Error..." }
//   const [savingRows, setSavingRows] = useState({}); // ✨ NEW: Per-row loading state

//   // --- Fetch initial data on component mount ---
//   useEffect(() => {
//     dispatch(fetchEmployeeList());
//     dispatch(fetchTodayAttendance()); // ✨ FETCH today's records
//   }, [dispatch]);

//   // --- 🔄 REVISED: Initialize or merge attendance data ---
//   // This effect runs when employees or today's attendance records are loaded.
//   useEffect(() => {
//     if (employees.length > 0) {
//       const initialData = {};
//       employees.forEach((emp) => {
//         if (!emp?._id) return; // Skip if employee has no ID

//         // Check if a record already exists for today
//         const existingRecord = todayAttendance.find(
//           (rec) => rec.employee === emp._id
//         );

//         // Use existing status, or default to "Present"
//         initialData[emp._id] = existingRecord
//           ? existingRecord.status
//           : "Present";
//       });
//       setAttendanceData(initialData);
//     }
//   }, [employees, todayAttendance]); // Re-run when either data source changes

//   const handleStatusChange = (empId, status) => {
//     setAttendanceData((prev) => ({ ...prev, [empId]: status }));
//   };

//   // --- 🔄 REVISED: Handle saving a single row ---
//   const handleSubmitRow = async (empId) => {
//     const status = attendanceData[empId];
//     if (!status) return;

//     // Set loading state for this specific row
//     setSavingRows((prev) => ({ ...prev, [empId]: true }));
//     // Clear previous message
//     setRowMsg((prev) => ({ ...prev, [empId]: "" }));

//     const payload = { employeeId: empId, status };

//     try {
//       // unwrap() will return the fulfilled value or throw the rejected value
//       const result = await dispatch(markAttendance(payload)).unwrap();

//       // On success, show the status in the response column
//       setRowMsg((prev) => ({
//         ...prev,
//         [empId]: ` ${result.status}`,
//       }));
//     } catch (err) {
//       // On failure, show the error message
//       setRowMsg((prev) => ({ ...prev, [empId]: `❌ Error: ${err}` }));
//     } finally {
//       // Stop loading state for this row
//       setSavingRows((prev) => ({ ...prev, [empId]: false }));
//     }
//   };

//   if (employeesLoading) {
//     return <p className="p-4 text-gray-600">Loading employees…</p>;
//   }

//   if (employeesError) {
//     return (
//       <div className="p-4 text-red-600">
//         Failed to load employees: {String(employeesError)}
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-medium text-gray-900 mb-2">
//         Attendance Records
//       </h1>
//       <p className="mb-6 text-gray-600">
//         Set today’s status for each employee and save. This will be reset
//         tomorrow.
//       </p>

//       {/* Global attendance error (e.g., failed to fetch) */}
//       {attendanceError && (
//         <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700">
//           Failed to load attendance records: {String(attendanceError)}
//         </div>
//       )}

//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//         <table className="min-w-full text-sm text-left text-gray-700">
//           <thead className="bg-gray-100 uppercase text-xs border-b">
//             <tr>
//               <th className="px-6 py-3">ID</th>
//               <th className="px-6 py-3">Name</th>
//               <th className="px-6 py-3">Email</th>
//               <th className="px-6 py-3">Status</th>
//               <th className="px-6 py-3">Action</th>
//               <th className="px-6 py-3">Response</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {employees.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
//                   No employees found.
//                 </td>
//               </tr>
//             ) : (
//               employees.map((emp, idx) => {
//                 const id = emp?._id;
//                 if (!id) return null; // Defensive check

//                 const name = emp?.personalInfo?.name ?? "—";
//                 const email = emp?.personalInfo?.email ?? "—";
//                 const currentStatus = attendanceData[id] || "Present";
//                 const isSaving = savingRows[id]; // ✨ Use per-row saving state

//                 return (
//                   <tr key={id} className="hover:bg-gray-50">
//                     <td className="px-6 py-3">{idx + 1}</td>
//                     <td className="px-6 py-3">{name}</td>
//                     <td className="px-6 py-3">{email}</td>
//                     <td className="px-6 py-3">
//                       <select
//                         value={currentStatus}
//                         onChange={(e) => handleStatusChange(id, e.target.value)}
//                         className="border rounded px-2 py-1 w-full"
//                       >
//                         <option value="Present">Present</option>
//                         <option value="Absent">Absent</option>
//                         <option value="Leave">Leave</option>
//                         <option value="Half Day">Half Day</option>
//                         <option value="Weekend">Weekend</option>
//                         <option value="Holiday">Holiday</option>
//                       </select>
//                     </td>
//                     <td className="px-6 py-3">
//                       <button
//                         onClick={() => handleSubmitRow(id)}
//                         disabled={isSaving} // ✨ Disable only this button
//                         className={`px-4 py-1 rounded text-white font-semibold w-20 text-center ${
//                           isSaving
//                             ? "bg-gray-400 cursor-not-allowed"
//                             : "bg-blue-600 hover:bg-blue-700"
//                         }`}
//                       >
//                         {isSaving ? "Saving…" : "Save"}
//                       </button>
//                     </td>
//                     <td className="px-6 py-3">
//                       {/* Response message will appear here */}
//                       <span className="text-sm font-medium">
//                         {rowMsg[id] ?? ""}
//                       </span>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Attendance;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../slices/employeeSlice"; // ⚠️ Assumes you have this slice
import {
  markAttendance,
  fetchTodayAttendance,
} from "../../slices/attendanceSlice";

const Attendance = () => {
  const dispatch = useDispatch();

  const {
    list: employees = [],
    loading: employeesLoading = false,
    error: employeesError = null,
  } = useSelector((state) => state.employees ?? {});

  const {
    todayList: todayAttendance = [],
    loading: attendanceLoading = false, // We can use this for an initial loading state
    error: attendanceError = null,
  } = useSelector((state) => state.attendance ?? {});

  console.log(attendanceLoading)
  const [attendanceData, setAttendanceData] = useState({});
  const [rowMsg, setRowMsg] = useState({});
  const [savingRows, setSavingRows] = useState({});

  // --- 1. Fetch initial data on component mount ---
  useEffect(() => {
    dispatch(fetchEmployeeList());
    dispatch(fetchTodayAttendance());
  }, [dispatch]);

  useEffect(() => {
    if (employees.length > 0) {
      const initialData = {};
      employees.forEach((emp) => {
        if (!emp?._id) return;

        // Check if a record already exists in the data we fetched for today
        const existingRecord = todayAttendance.find(
          (rec) => rec.employee === emp._id
        );

        // If a record exists, use its status. Otherwise, default to "Present".
        initialData[emp._id] = existingRecord
          ? existingRecord.status
          : "Present";
      });
      setAttendanceData(initialData);
    }
  }, [employees, todayAttendance]); // This effect re-runs if either `employees` or `todayAttendance` changes

  // --- 3. Handle dropdown changes ---
  const handleStatusChange = (empId, status) => {
    // Update our local state instantly for a responsive UI
    setAttendanceData((prev) => ({ ...prev, [empId]: status }));
  };

  // --- 4. Handle saving a single row's attendance ---
  // const handleSubmitRow = async (empId) => {
  //   const status = attendanceData[empId];
  //   if (!status) return;

  //   setSavingRows((prev) => ({ ...prev, [empId]: true })); // Start loading for this row
  //   setRowMsg((prev) => ({ ...prev, [empId]: "" })); // Clear previous message

  //   const payload = { employeeId: empId, status };

  //   try {
  //     // Dispatch the `markAttendance` action from your slice
  //     // .unwrap() will return the success payload or throw the error payload
  //     const result = await dispatch(markAttendance(payload)).unwrap();

  //     // On success, show a confirmation message in the "Response" column
  //     setRowMsg((prev) => ({ ...prev, [empId]: ` ${result.status}` }));
  //   } catch (err) {
  //     // On failure, show the error message
  //     setRowMsg((prev) => ({ ...prev, [empId]: `❌ Error: ${err}` }));
  //   } finally {
  //     setSavingRows((prev) => ({ ...prev, [empId]: false })); // Stop loading for this row
  //   }
  // };

  // In your Attendance.jsx file

  const handleSubmitRow = async (empId) => {
    const status = attendanceData[empId];
    console.log("Preparing to save:", { employeeId: empId, status: status });
    if (!status) return;

    setSavingRows((prev) => ({ ...prev, [empId]: true }));
    setRowMsg((prev) => ({ ...prev, [empId]: "" }));

    const payload = { employeeId: empId, status };

    try {
      const result = await dispatch(markAttendance(payload)).unwrap();
      setRowMsg((prev) => ({ ...prev, [empId]: `✅ Saved: ${result.status}` }));
    } catch (err) {

  
      const errorMessage = String(err); 

      if (errorMessage.includes("Attendance already marked for today")) {
        const existingRecord = todayAttendance.find(
          (rec) => rec.employee === empId
        );

        if (existingRecord) {
          // 3. Display the status of the existing record
          setRowMsg((prev) => ({
            ...prev,
            [empId]: `ℹ️ Already marked as: ${existingRecord.status}`,
          }));
        } else {
          setRowMsg((prev) => ({ ...prev, [empId]: `❌ ${errorMessage}` }));
        }
      } else {
        setRowMsg((prev) => ({
          ...prev,
          [empId]: `❌ Error: ${errorMessage}`,
        }));
      }
    } finally {
      setSavingRows((prev) => ({ ...prev, [empId]: false }));
    }
  };
  // --- Render logic ---
  if (employeesLoading) {
    return <p className="p-4 text-gray-600">Loading employees...</p>;
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
        Daily Attendance
      </h1>
      <p className="mb-6 text-gray-600">
        Set today's status for each employee. Your changes are saved per row.
      </p>

      {attendanceError && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700">
          Error loading attendance records: {String(attendanceError)}
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 uppercase text-xs border-b">
            <tr>
              <th className="px-6 py-3">Employee Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
              <th className="px-6 py-3">Response</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((emp) => {
                const id = emp?._id;
                if (!id) return null;

                const name = emp?.personalInfo?.name ?? "N/A";
                const email = emp?.personalInfo?.email ?? "N/A";
                const currentStatus = attendanceData[id] || "Present";
                const isSaving = savingRows[id];

                return (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium">{name}</td>
                    <td className="px-6 py-3">{email}</td>
                    <td className="px-6 py-3">
                      <select
                        value={currentStatus}
                        onChange={(e) => handleStatusChange(id, e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Leave">Leave</option>
                        <option value="Half Day">Half Day</option>
                        <option value="Weekend">Weekend</option>
                        <option value="Holiday">Holiday</option>
                      </select>
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleSubmitRow(id)}
                        disabled={isSaving}
                        className={`px-4 py-1 rounded text-white font-semibold w-24 text-center transition-colors ${
                          isSaving
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        {isSaving ? "Saving…" : "Save"}
                      </button>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-sm font-medium">
                        {rowMsg[id] ?? ""}
                      </span>
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
};

export default Attendance;
