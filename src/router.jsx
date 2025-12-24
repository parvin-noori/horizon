import { createBrowserRouter, Navigate } from "react-router";
import Kanban from "./features/kanban/Kanban";
import IdentityLayout from "./layouts/IdentityLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login/Login";
import Dashboard from "./pages/main/Dashboard";
import MarketPlace from "./pages/main/MarketPlace";
import Profile from "./pages/main/Profile";
import Tables from "./pages/main/Tables";

export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

export const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute element={<MainLayout />} />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/kanban",
        element: <Kanban />,
      },
      {
        path: "/marketPlace",
        element: <MarketPlace />,
      },
      {
        path: "/tables",
        element: <Tables />,
      },
    ],
  },
]);
