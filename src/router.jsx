import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/main/Dashboard";
import Kanban from "./features/kanban/Kanban";
import IdentityLayout from "./layouts/IdentityLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login/Login";
import MarketPlace from "./pages/main/MarketPlace";
import Profile from "./pages/main/Profile";
import Tables from "./pages/main/Tables";

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
