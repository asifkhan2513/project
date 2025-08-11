import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import Error from "./pages/Error";
import Features from "./components/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import HowItWorks from "./pages/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";
import Signup from "./pages/Signup.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import Employee from "./pages/admin/Dashboard.jsx";
import { PATH } from "./common/constant.js";
import Attendance from "./pages/admin/Attendance.jsx";
import AdminSidebar from "./pages/admin/AdminSidebar.jsx";
import Overview from "./pages/admin/Overview.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import { Outlet } from "react-router-dom";
import Hr from "./pages/admin/Hr.jsx";
import Recruitment from "./pages/admin/Recruitment.jsx";
import User from "./pages/admin/staff/User.jsx";
import EmployeeProfile from "./pages/admin/staff/EmployeeProfile.jsx";
import Role from "./pages/admin/staff/Role.jsx";
import SetSalary from "./pages/admin/payslip/SetSalary.jsx";
import GenerateSalary from "./pages/admin/payslip/GenerateSalary.jsx";
import Attendancetimesheet from "./pages/admin/timesheet/Attendance.jsx";
import ManageLeave from "./pages/admin/timesheet/ManageLeave.jsx";
import AccountList from "./pages/admin/finance/AccountList.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                </>
              }
            />

            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="overview" element={<Overview />} />
              <Route path="employees" element={<Employee />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="hr" element={<Hr />} />
              <Route path="recruitment" element={<Recruitment />} />
              {/* Staff routes */}
              <Route path="staff/user" element={<User />} />
              <Route path="staff/role" element={<Role />} />
              <Route
                path="staff/employeeprofile"
                element={<EmployeeProfile />}
              />
              {/* payslip */}
              <Route path="payslip/set-salary" element={<SetSalary />} />
              <Route path="payslip/generate" element={<GenerateSalary />} />
              {/* timesheet */}
              <Route
                path="timesheet/attendance"
                element={<Attendancetimesheet />}
              />

              <Route
                path="timesheet/attendance"
                element={<Attendancetimesheet />}
              />
              <Route path="timesheet/manageleave" element={<ManageLeave />} />

              {/* finance */}
              <Route path="finance/accountlist" element={<AccountList />} />
            </Route>

            {/*  Static routes */}
            <Route path={`${PATH.FEATURES}`} element={<Features />} />
            <Route path={`${PATH.HOW_IT_WORKS}`} element={<HowItWorks />} />
            <Route path={`${PATH.ABOUT}`} element={<About />} />
            <Route path={`${PATH.CONTACT}`} element={<Contact />} />
            <Route path={`${PATH.LOGIN}`} element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path={`${PATH.RESET_PASSWORD}`}
              element={<ResetPasswordPage />}
            />
            <Route path={`${PATH.ERROR}`} element={<Error />} />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
