// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchEmployeeList } from "../../../slices/employeeSlice";
// import { Search, RefreshCcw } from "lucide-react";
// import ParticularUser from "./ParticularUser";

// const EmployeeProfile = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { list } = useSelector((state) => state.employees);

//   useEffect(() => {
//     dispatch(fetchEmployeeList());
//   }, [dispatch]);

//   const getInitials = (name) => {
//     if (!name) return "";
//     const names = name.split(" ");
//     const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
//     return initials;
//   };

//   // Centralized navigation handler for cleaner code
//   const handleNavigateToProfile = (employeeId) => {
//     navigate(`/api/v1/employee/${employeeId}`);
//   };

//   return (
//     <div className="p-6">
//       {/* Filters */}
//       <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-700">
//             Select Branch<span className="text-red-500">*</span>
//           </label>
//           <select className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
//             <option>Select Branch</option>
//           </select>
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-700">
//             Select Department<span className="text-red-500">*</span>
//           </label>
//           <select className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
//             <option>Select Department</option>
//           </select>
//         </div>
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-700">
//             Select Designation<span className="text-red-500">*</span>
//           </label>
//           <select className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
//             <option>Select Designation</option>
//           </select>
//         </div>
//         {/* Search and Refresh Buttons */}
//         <div className="flex items-end gap-2">
//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
//             <Search />
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//             <RefreshCcw />
//           </button>
//         </div>
//       </div>

//       {/* Employee Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {list && list.length > 0 ? (
//           list.map((emp) => (
//             <div
//               key={emp._id}
//               className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition cursor-pointer"
//               onClick={() => handleNavigateToProfile(emp._id)}
//             >
//               {emp.image ? (
//                 <img
//                   src={emp.image}
//                   alt={emp.name}
//                   className="w-24 h-24 mx-auto mb-4 border-2 border-blue-400 rounded-full"
//                 />
//               ) : (
//                 <div className="w-24 h-24 mx-auto mb-4 border-2 border-blue-400 rounded-full flex items-center justify-center text-2xl text-blue-400">
//                   {getInitials(emp?.personalInfo?.name)}
//                 </div>
//               )}
//               <h2 className="text-lg font-semibold">
//                 {emp?.personalInfo?.name}
//               </h2>
//               <p className="text-gray-500">{emp?.jobInfo?.salary || "LPA"}</p>
//               <p
//                 className="mt-2 inline-block px-3 py-1 border border-blue-400 text-blue-500 rounded"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevents card's onClick from also firing
//                   handleNavigateToProfile(emp._id);
//                 }}
//               >
//                 {emp?.jobInfo?.branch ?? "View Profile"}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No employees found
//           </p>
//         )}
//       </div>
//       {list.map((emp, index) => {
//         return <ParticularUser employeeId={emp} key={index} />;
//       })}
//     </div>
//   );
// };

// export default EmployeeProfile;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../../slices/employeeSlice";
import { Search, RefreshCcw } from "lucide-react";
import ParticularUser from "./ParticularUser";

const EmployeeProfile = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.employees);

  // State to hold the currently selected employee object
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    dispatch(fetchEmployeeList());
  }, [dispatch]);

  const getInitials = (name) => {
    if (!name) return "";
    const names = name.split(" ");
    const initials = names.map((n) => n.charAt(0).toUpperCase()).join("");
    return initials;
  };

  // Handler to set the selected employee in the state
  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  // Handler to clear the selection and go back to the list
  const handleBackToList = () => {
    setSelectedEmployee(null);
  };

  // If an employee is selected, render the ParticularUser component
  if (selectedEmployee) {
    return (
      <ParticularUser employee={selectedEmployee} onBack={handleBackToList} />
    );
  }

  // Otherwise, render the filters and the employee grid
  return (
    <div className="p-6">
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Select Branch<span className="text-red-500">*</span>
          </label>
          <select className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Select Branch</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Select Department<span className="text-red-500">*</span>
          </label>
          <select className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Select Department</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Select Designation<span className="text-red-500">*</span>
          </label>
          <select className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Select Designation</option>
          </select>
        </div>
        <div className="flex items-end gap-2">
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            <Search />
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <RefreshCcw />
          </button>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list && list.length > 0 ? (
          list.map((emp) => (
            <div
              key={emp._id}
              className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition cursor-pointer"
              onClick={() => handleSelectEmployee(emp)}
            >
              {emp.image ? (
                <img
                  src={emp.image}
                  alt={emp.personalInfo?.name}
                  className="w-24 h-24 mx-auto mb-4 border-2 border-blue-400 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 mx-auto mb-4 border-2 border-blue-400 rounded-full flex items-center justify-center text-2xl text-blue-400">
                  {getInitials(emp?.personalInfo?.name)}
                </div>
              )}
              <h2 className="text-lg font-semibold">
                {emp?.personalInfo?.name}
              </h2>
              <p className="text-gray-500">{emp?.jobInfo?.salary || "LPA"}</p>
              <p
                className="mt-2 inline-block px-3 py-1 border border-blue-400 text-blue-500 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectEmployee(emp);
                }}
              >
                {emp?.jobInfo?.branch ?? "View Profile"}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No employees found
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeProfile;