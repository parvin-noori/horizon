import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroUIProvider } from "@heroui/react";
import { RouterProvider } from "react-router";
import { router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </HeroUIProvider>
);
