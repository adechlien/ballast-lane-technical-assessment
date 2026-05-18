import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingState from "../ui/LoadingState";

export default function ProtectedRoute() {
  const { isAuthenticated, status } = useAuth();

  if (status === "loading") {
    return <LoadingState message="Checking session..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
