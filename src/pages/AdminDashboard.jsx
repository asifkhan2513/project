import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Dashboard/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <AdminSidebar />
      <div className="h-full flex-1 overflow-auto bg-gray-100 text-gray-800">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
