import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../slices/authSlice";
import { LayoutDashboard, User, LogOut } from "lucide-react";
import { toast } from "react-hot-toast";

const sidebarLinks = [
  { id: 1, name: "Dashboard", path: "/dashboard/home", icon: LayoutDashboard },
  { id: 2, name: "My Profile", path: "/dashboard/profile", icon: User },
];

export default function UserSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out");
    navigate("/");
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-10">User Panel</div>
      <nav className="flex flex-col space-y-2">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md transition-colors ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto">
        <button onClick={handleLogout} className="w-full" />
      </div>{" "}
    </div>
  );
}
