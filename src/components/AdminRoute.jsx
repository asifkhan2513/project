import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { user, token } = useSelector((state) => state.auth);

  if (token !== null && user?.accountType === "Admin") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AdminRoute;