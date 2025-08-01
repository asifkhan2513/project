import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../slices/authSlice";
import { PATH } from "../../common/constant";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Settings,
  LogOut,
  Timer,
  Mail,
  Tickets,
  FileText,
  IndianRupee,
  ShieldUser,
  ReceiptIndianRupee,
  UserSearch,
  ChevronRight,
} from "lucide-react";
import { toast } from "react-hot-toast";

const sidebarLinks = [
  { id: 1, name: "Dashboard", path: "/admin/overview", icon: LayoutDashboard },
  { id: 2, name: "Employees", path: "/admin/employees", icon: Users },
  { id: 3, name: "Attendance", path: "/admin/attendance", icon: ClipboardList },
  { id: 4, name: "Settings", path: "/admin/settings", icon: Settings },
  {
    id: 5,
    name: "staff",
    path: `${PATH.ADMIN_STAFF}`,
    icon: Users,
    action: "staff",
  },
  {
    id: 6,
    name: "payslip",
    path: "/admin/payslip",
    icon: ReceiptIndianRupee,
    action: "payslip",
  },
  {
    id: 7,
    name: "timesheet",
    path: "/admin/timesheet",
    icon: Timer,
    action: "timesheet",
  },
  {
    id: 8,
    name: "Finance",
    icon: IndianRupee,
    path: "/admin/Finance",
    action: "Finance",
  },
  {
    id: 9,
    name: "Hr Management",
    icon: ShieldUser,
    path: "/admin/hr",
    action: "Hr Management",
  },
  {
    id: 10,
    name: "Recruitment",
    icon: UserSearch,
    path: "/admin/Recruitment",
    action: "Recruitment",
  },

  {
    id: 11,
    name: "Documents",
    icon: FileText,
    path: "/admin/Documents",
    action: "Documents",
  },

  {
    id: 12,
    name: "messenger",
    icon: Mail,
    path: "/admin/messenger",
    action: "messenger",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        classN="lucide lucide-chevron-right-icon lucide-chevron-right"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    ),
  },
  {
    id: 13,
    name: "ticket",
    icon: Tickets,
    path: "/admin/ticket",
    action: "ticket",
  },
];

export default function AdminSidebar() {
  // const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out");
    navigate("/");
  };

  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col p-4 v">
      <div className="text-2xl font-bold mb-10">Admin Panel</div>
      <nav className="flex flex-col space-y-2">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-md transition-colors ${
                isActive ? "bg-orange-500" : "hover:bg-blue-700"
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
