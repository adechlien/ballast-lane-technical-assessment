import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PublicBranches from "./pages/PublicBranches";
import PublicBranchDetail from "./pages/PublicBranchDetail";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "branches",
        element: <PublicBranches />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "branches/:slug",
        element: <PublicBranchDetail />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
