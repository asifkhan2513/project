import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../slices/authSlice";
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
  ChevronDown,
  Building2,
} from "lucide-react";
import { toast } from "react-hot-toast";

const sidebarLinks = [
  { id: 1, name: "Dashboard", path: "/admin/overview", icon: LayoutDashboard },
  { id: 2, name: "Employees", path: "/admin/employees", icon: Users },
  { id: 3, name: "Attendance", path: "/admin/attendance", icon: ClipboardList },

  {
    id: 5,
    name: "Staff",
    icon: Users,
    children: [
      { name: "User", path: "/admin/staff/user" },
      { name: "Role", path: "/admin/staff/role" },
      { name: "Employee Profile", path: "/admin/staff/employeeprofile" },
    ],
  },
  {
    id: 6,
    name: "Payslip",
    icon: ReceiptIndianRupee,
    children: [
      { name: "Set Salary", path: "/admin/payslip/set-salary" },
      { name: "Payslip", path: "/admin/payslip/payslip" },
    ],
  },
  {
    id: 7,
    name: "Timesheet",
    icon: Timer,
    // path: "/admin/timesheet",
    children: [
      { name: "Timesheet", path: "/admin/timesheet/attendance " },
      { name: "Attendance", path: "/admin/timesheet/attendance" },
      { name: "Manage Leave", path: "/admin/timesheet/manageleave" },
    ],
  },
  {
    id: 8,
    name: "Finance",
    icon: IndianRupee,
    children: [{ name: "Account List", path: "/admin/finance/accountlist" }],
  },
  {
    id: 9,
    name: "HR Admin Setup",
    icon: ShieldUser,
    path: "/admin/hr",
  },
  {
    id: 10,
    name: "Recruitment",
    icon: UserSearch,
    path: "/admin/recruitment",
  },
  {
    id: 11,
    name: "Documents",
    icon: FileText,
    path: "/admin/documents",
  },
  {
    id: 12,
    name: "Messenger",
    icon: Mail,
    path: "/admin/messenger",
  },
  {
    id: 13,
    name: "Tickets",
    icon: Tickets,
    path: "/admin/ticket",
  },

  { id: 14, name: "Settings", path: "/admin/settings", icon: Settings },
  {
    id: 4,
    name: "Company policy",
    icon: Building2,
    path: "/admin/companypolicy",
  },
];

export default function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  // Auto-expand submenu based on route
  useEffect(() => {
    const expanded = {};
    sidebarLinks.forEach((link) => {
      if (link.children) {
        expanded[link.name] = link.children.some((child) =>
          location.pathname.startsWith(child.path)
        );
      }
    });
    setOpenMenus(expanded);
  }, [location.pathname]);

  // *******************************
  //*     toggle menu
  //*
  // *******************************

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // *******************************
  //*    Logout
  //*
  // *******************************
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out");
    navigate("/");
  };

  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col p-4 h-screen">
      <div className="text-2xl font-bold mb-10">Admin Panel</div>
      <nav className="flex flex-col space-y-2 overflow-y-auto flex-1">
        {sidebarLinks.map((link) => {
          const isParent = !!link.children;

          if (isParent) {
            return (
              <div key={link.id}>
                <button
                  onClick={() => toggleMenu(link.name)}
                  className="flex items-center justify-between w-full p-2 rounded-md hover:bg-blue-700"
                >
                  <div className="flex items-center">
                    <link.icon className="w-5 h-5 mr-3" />
                    {link.name}
                  </div>
                  {openMenus[link.name] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {openMenus[link.name] && (
                  <div className="ml-6 mt-1 space-y-1">
                    {link.children.map((child, idx) => (
                      <NavLink
                        key={idx}
                        to={child.path}
                        className={({ isActive }) =>
                          `block p-2 rounded-md text-sm ${
                            isActive ? "bg-orange-500" : "hover:bg-blue-700"
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
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
          );
        })}
      </nav>

      {/* 🔴 Logout at Bottom */}
      <div className="mt-4 border-t border-blue-600 pt-4">
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
