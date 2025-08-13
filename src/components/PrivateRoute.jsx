// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"; // or your auth context

export default function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  // Example from Redux

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Renders child routes
}
