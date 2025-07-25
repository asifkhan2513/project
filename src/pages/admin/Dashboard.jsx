import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="h-full flex-1 overflow-auto bg-gray-100 text-gray-800">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
          <h1> i am dashboard </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
