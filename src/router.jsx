import { createBrowserRouter } from "react-router";
import Dashboard from "./features/dashboard/Dashboard";
import Kanban from "./features/kanban/Kanban";
import IdentityLayout from "./layouts/IdentityLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login/Login";
import MarketPlace from "./features/MarketPlace/MarketPlace";
import Profile from "./features/profile/Profile";
import Tables from "./features/tables/Tables";

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
    element: <MainLayout />,
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
