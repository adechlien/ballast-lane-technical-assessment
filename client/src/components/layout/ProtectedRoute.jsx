import { Navigate, Outlet, useLocation } from "react-router-dom";
import LoadingState from "../ui/LoadingState";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute() {
  const location = useLocation();
  const { isAuthenticated, status } = useAuth();

  if (status === "loading") {
    return <LoadingState message="Checking session..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
