import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../slices/authSlice";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  LogOut,
} from "lucide-react";
import { toast } from "react-hot-toast";

const sidebarLinks = [
  { id: 1, name: "Dashboard", path: "/admin/overview", icon: LayoutDashboard },
  { id: 2, name: "Employees", path: "/admin/employees", icon: Users },
  { id: 3, name: "Attendance", path: "/admin/attendance", icon: ClipboardList },
  { id: 4, name: "Settings", path: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out");
    navigate("/");
  };

  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-10">Admin Panel</div>
      <nav className="flex flex-col space-y-2">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md transition-colors ${
                isActive ? "bg-blue-700" : "hover:bg-blue-700"
              }`
            }
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center p-2 rounded-md text-left hover:bg-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}
