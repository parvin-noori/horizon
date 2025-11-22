import { DndContext } from "@dnd-kit/core";
import { HeroUIProvider } from "@heroui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./router.jsx";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <DndContext>
      <HeroUIProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </HeroUIProvider>
    </DndContext>
  </Provider>
);
