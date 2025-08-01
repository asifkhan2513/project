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
// import Dashboard from "./pages/AdminDashboard.jsx";

import Dashboard from "./pages/admin/AdminDashboard.jsx";
import { PATH } from "./common/constant.js";
import Attendance from "./pages/admin/Attendance.jsx";

export default function App() {
  console.log(PATH.ADMIN_OVERVIEW);
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

            <Route path={`${PATH.ADMIN_OVERVIEW}`} element={<Dashboard />} />
            <Route path={`${PATH.ADMIN_EMPLOYEES}`} element={<Employee />} />
            <Route path={`${PATH.ADMIN_ATTENDANCE}`} element={<Attendance />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
