import { createBrowserRouter } from "react-router";
import IdentityLayout from "./layouts/IdentityLayout";
import Login from "./pages/login/Login";

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
]);
