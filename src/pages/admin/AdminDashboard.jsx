import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchTotalEmployees } from "../../slices/employeeSlice.js";
import {
  IdCardLanyard,
  Tickets,
  Wallet,
  BriefcaseBusiness,
  FolderDot,
  ClockAlert,
  Calendar,
  CalendarFold,
  BookCopy,
  BellOff,
} from "lucide-react";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { total } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchTotalEmployees());
  }, [dispatch]);

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-gray-100 ">
      <div className="flex h-screen overflow-hidden">
        <div className="w-64 fixed top-0 left-0 h-full bg-white shadow-lg z-50 overflow-y-auto">
          <AdminSidebar />
        </div>
      </div>
      <div className="h-full flex-1 overflow-auto bg-gray-100 text-gray-800 ml-60  mt-12">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <div>
            <Outlet />
            {/* Up Box */}
            <div className="flex justify-between items-center mb-6 mt-4">
              <div className="rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex p-4 items-center space-x-3 w-[300px] h-[90px] rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <IdCardLanyard className="text-blue-500" />
                  <span className="flex flex-col text-gray-700 font-semibold">
                    Total Staff: {total}
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex p-4 items-center space-x-3 w-[300px] h-[90px] rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <Tickets className="text-green-500" />
                  <span className="text-gray-700 font-semibold">
                    Total Tickets: 3
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex p-2 items-center space-x-3 w-[300px] h-[90px] rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <Wallet className="text-yellow-500" />
                  <span className="text-gray-700 font-semibold">
                    Total Account Balance: 1,000,000 ₹
                  </span>
                </div>
              </div>
            </div>
            {/* Down Box */}
            <div className="flex justify-between items-center mb-6">
              <div className="rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex p-4 items-center space-x-3 w-[300px] h-[90px] rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <BriefcaseBusiness className="text-purple-500" />
                  <span className="text-gray-700 font-semibold">
                    Total Jobs: 10
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex p-4 items-center space-x-3 w-[300px] h-[90px] rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <FolderDot className="text-orange-500" />
                  <span className="text-gray-700 font-semibold">
                    Total Projects: 25
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex p-4 items-center space-x-3 w-[300px] h-[90px] rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <ClockAlert className="text-red-500" />
                  <span className="text-gray-700 font-semibold">
                    Total Inactive Jobs: 3
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex-row items-center space-x-2 w-[40%] h-[500px] rounded-md p-3">
                <div className="bg-white h-[300px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="flex items-center space-x-2 p-3 text-gray-700 font-semibold">
                    <CalendarFold className="text-blue-500" />
                    Meeting Schedule
                  </span>
                </div>
                <div className="bg-white mt-3 h-[300px] flex items-center justify-center rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="flex items-center space-x-2 text-gray-700 font-semibold">
                    <BellOff className="text-red-500" />
                    Today's Not Clock In
                  </span>
                </div>
              </div>
              <div className="flex-row items-center space-x-2 bg-white w-[50%] h-[500px] rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
                <span className="flex items-center space-x-2 text-gray-700 font-semibold">
                  <Calendar className="text-green-500" />
                  Calendar
                </span>
              </div>
            </div>
            <div className="flex-row justify-between items-center  mt-52 bg-white h-[500px] z-50 border border-gray-300 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="flex items-center space-x-2 p-3 text-lg font-semibold text-gray-700">
                <BookCopy className="text-purple-500" />
                Announcement List
              </span>
              <div className="z-50">
                <ul className="grid grid-cols-4 gap-2 bg-slate-200 h-[40px] rounded-md p-1 mx-2">
                  <li className="font-semibold">Title</li>
                  <li className="font-semibold">Start Date</li>
                  <li className="font-semibold">End Date</li>
                  <li className="font-semibold">Description</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
