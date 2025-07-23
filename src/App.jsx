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
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset" element={<ResetPasswordPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
