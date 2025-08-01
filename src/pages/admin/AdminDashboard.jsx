import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";

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
} from "lucide-react";
const AdminDashboard = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-gray-100">
      <AdminSidebar />
      <div className="h-full flex-1 overflow-auto bg-gray-100 text-gray-800">
        <div className="mx-auto w-11/12 max-w-[1000px] py-36">
          <div>
            <Outlet />
            {/* up box */}
            <div className="flex justify-between items-center mb-6 ">
              <div className="rounded-md border">
                <div className="flex p-3 items-center space-x-2 w-[300px] h-[90px] rounded-md z-50 bg-white">
                  <IdCardLanyard />
                  <span className="flex flex-col">Total staff </span>
                </div>
              </div>
              <div className="rounded-md border">
                <div className="flex p-3  items-center space-x-2 w-[300px] h-[90px] rounded-md z-50 bg-white">
                  <Tickets />
                  Total ticket
                </div>
              </div>
              <div className="rounded-md border">
                <div className="flex p-3  items-center space-x-2 w-[300px] h-[90px] rounded-md z-50 bg-white">
                  <Wallet />
                  Total account balance
                </div>
              </div>
            </div>
            {/* down box */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex justify-between items-center mb-6 ">
                <div className="rounded-md border">
                  <div className="flex p-3 items-center space-x-2 w-[300px] h-[90px] rounded-md z-50 bg-white">
                    <BriefcaseBusiness />
                    Total job
                  </div>
                </div>
              </div>
              <div className="rounded-md border">
                <div className="flex p-3   items-center space-x-2 w-[300px] h-[90px] rounded-md z-50 bg-white">
                  <FolderDot />
                  Total project
                </div>
              </div>
              <div className="rounded-md border">
                <div className="flex p-3  items-center space-x-2  w-[300px] h-[90px] rounded-md z-50 bg-white">
                  <ClockAlert />
                  total inactive job
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex-row items-center space-x-2  w-[40%] h-[500px] rounded-md p-3">
                <div className="bg-white h-[300px] rounded-md border">
                  <span className="flex items-center space-x-2 p-3">
                    {" "}
                    <CalendarFold />
                    meeting Schedule
                  </span>
                </div>
                <div className="bg-white mt-3 h-[300px] ">
                  {" "}
                  Today's Not Clock In
                </div>
              </div>
              <div className="flex-row items-center space-x-2 bg-white w-[50%] h-[500px] rounded-md border z-10 p-3">
                <span className="flex items-center space-x-2 p-3">
                  <Calendar />
                  calendar
                </span>
              </div>
            </div>
            <div className="flex-row justify-between items-center mt-48 bg-white h-[500px] z-50 border rounded-md p-3">
              <span className="flex items-center space-x-2 p-3 text-lg font-semibold">
                <BookCopy />
                Announcement List
              </span>
              <div className="z-50">
                <ul className="grid grid-cols-4 gap- bg-slate-200 h-[40px] rounded-md p-1 mx-2">
                  <li>Title</li>
                  <li>Start Date</li>
                  <li>End Date</li>
                  <li>Description</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <Outlet />
          <Employee />
          <Attendance /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
